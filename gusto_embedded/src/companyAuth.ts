import * as z from "zod";
import { SDK_METADATA } from "./lib/config.js";

// TypeScript SDKs use Zod for runtime data validation. We can use Zod
// to describe the shape of the response from the OAuth token endpoint. If the
// response is valid, Speakeasy can safely access the token and its expiration time.
const tokenResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number().positive(),
  refresh_token: z.string(),
});

// This is a rough value that adjusts when we consider an access token to be
// expired. It accounts for clock drift between the client and server
// and slow or unreliable networks.
const tolerance = 5 * 60 * 1000;

export type TokenRefreshOptions = { tokenStore?: TokenStore; url?: string };

/**
 * A callback function that can be used to obtain an OAuth access token for use
 * with SDKs that require OAuth security. A new token is requested from the
 * OAuth provider when the current token has expired.
 */
export function withTokenRefresh(
  clientId: string,
  clientSecret: string,
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
  options: TokenRefreshOptions = {}
) {
  const {
    tokenStore = new InMemoryTokenStore(),
    url = "https://api.gusto-demo.com/oauth/token",
  } = options;

  tokenStore.set({
    token: accessToken,
    refreshToken,
    expires: Date.now() + expiresIn * 1000 - tolerance,
  });

  return async (): Promise<string> => {
    const session = await tokenStore.get();

    // Return the current token if it has not expired yet.
    if (session && session.expires > Date.now()) {
      return session.token;
    }

    return await refreshAndSaveAuthToken(
      url,
      {
        clientId,
        clientSecret,
        refreshToken: session?.refreshToken ?? refreshToken,
      },
      tokenStore
    );
  };
}

export async function refreshAndSaveAuthToken(
  authUrl: string,
  refreshCredentials: {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
  },
  tokenStore: TokenStore
): Promise<string> {
  const { clientId, clientSecret, refreshToken } = refreshCredentials;

  try {
    const response = await fetch(authUrl, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        // Include the SDK's user agent in the request so requests can be
        // tracked using observability infrastructure.
        "user-agent": SDK_METADATA.userAgent,
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Unexpected status code: " + response.status);
    }

    const json = await response.json();
    const data = tokenResponseSchema.parse(json);

    await tokenStore.set({
      token: data.access_token,
      expires: Date.now() + data.expires_in * 1000 - tolerance,
      refreshToken: data.refresh_token,
    });

    return data.access_token;
  } catch (error) {
    throw new Error("Failed to obtain OAuth token: " + error);
  }
}

/**
 * A TokenStore is used to save and retrieve OAuth tokens for use across SDK
 * method calls. This interface can be implemented to store tokens in memory,
 * a shared cache like Redis or a database table.
 */
export interface TokenStore {
  get(): Promise<
    { token: string; refreshToken: string; expires: number } | undefined
  >;
  set({
    token,
    expires,
    refreshToken,
  }: {
    token: string;
    expires: number;
    refreshToken: string;
  }): Promise<void>;
}

/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
export class InMemoryTokenStore implements TokenStore {
  private token = "";
  private expires = Date.now();
  private refreshToken = "";

  constructor() {}

  async get() {
    return {
      token: this.token,
      expires: this.expires,
      refreshToken: this.refreshToken,
    };
  }

  async set({
    token,
    expires,
    refreshToken,
  }: {
    token: string;
    expires: number;
    refreshToken: string;
  }) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.expires = expires;
  }
}
