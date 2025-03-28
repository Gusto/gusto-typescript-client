import { HTTPClient } from "./lib/http.js";
import {
  InMemoryTokenStore,
  refreshAndSaveAuthToken,
  TokenRefreshOptions,
  withTokenRefresh,
} from "./companyAuth.js";
import { GustoEmbedded } from "./sdk/sdk.js";
import { SDKOptions, ServerDemo, ServerList } from "./lib/config.js";

type ClientArguments = {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  options: TokenRefreshOptions & SDKOptions;
};

export function CompanyAuthenticatedClient({
  clientId,
  clientSecret,
  accessToken,
  refreshToken,
  expiresIn,
  options,
}: ClientArguments) {
  const authUrl = constructAuthUrl(options);
  const tokenStore = new InMemoryTokenStore();

  const httpClientWithTokenRefresh = options.httpClient ?? new HTTPClient();

  httpClientWithTokenRefresh.addHook("response", async (res) => {
    if (res.status === 401) {
      console.log("Unauthorized, attempting to refresh token");

      await refreshAndSaveAuthToken(
        authUrl,
        { clientId, clientSecret, refreshToken },
        tokenStore
      );
    }
  });

  return new GustoEmbedded({
    ...options,
    httpClient: httpClientWithTokenRefresh,
    companyAccessAuth: withTokenRefresh(
      clientId,
      clientSecret,
      accessToken,
      refreshToken,
      expiresIn,
      {
        tokenStore,
        ...options,
        url: authUrl,
      }
    ),
  });
}

function constructAuthUrl(
  options: TokenRefreshOptions & Pick<SDKOptions, "server" | "serverURL">
) {
  const { server, serverURL, url } = options;

  if (server) {
    const baseUrl = ServerList[server] || "";
    return `${baseUrl}/oauth/token`;
  }

  if (serverURL) {
    return `${serverURL}/oauth/token`;
  }

  if (url) {
    return url;
  }

  return `${ServerList[ServerDemo]}/oauth/token`;
}
