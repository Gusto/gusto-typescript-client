/**
 * A callback function that can be used to obtain an OAuth access token for use
 * with SDKs that require OAuth security. A new token is requested from the
 * OAuth provider when the current token has expired.
 */
export declare function withTokenRefresh(clientID: string, clientSecret: string, accessToken: string, refreshToken: string, options?: {
    tokenStore?: TokenStore;
    url?: string;
}): () => Promise<string>;
/**
 * A TokenStore is used to save and retrieve OAuth tokens for use across SDK
 * method calls. This interface can be implemented to store tokens in memory,
 * a shared cache like Redis or a database table.
 */
export interface TokenStore {
    get(): Promise<{
        token: string;
        refreshToken: string;
        expires: number;
    } | undefined>;
    set({ token, expires, refreshToken, }: {
        token: string;
        expires: number;
        refreshToken: string;
    }): Promise<void>;
}
/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
export declare class InMemoryTokenStore implements TokenStore {
    private token;
    private expires;
    private refreshToken;
    constructor();
    get(): Promise<{
        token: string;
        expires: number;
        refreshToken: string;
    }>;
    set({ token, expires, refreshToken, }: {
        token: string;
        expires: number;
        refreshToken: string;
    }): Promise<void>;
}
//# sourceMappingURL=companyAuth.d.ts.map