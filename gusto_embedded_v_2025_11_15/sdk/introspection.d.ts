import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Introspection extends ClientSDK {
    /**
     * Get info about the current access token
     *
     * @remarks
     * Returns scope and resource information associated with the current access token.
     */
    getInfo(request: operations.GetV1TokenInfoRequest, options?: RequestOptions): Promise<operations.GetV1TokenInfoResponse>;
    /**
     * Refresh access token
     *
     * @remarks
     * Exchange a refresh token for a new access token.
     *
     * The previous `refresh_token` will be revoked on the first usage of the new `access_token`.
     *
     * The `expires_in` value is provided in seconds from when the `access_token` was generated.
     */
    refreshToken(request: operations.RefreshAccessTokenRequest, options?: RequestOptions): Promise<operations.RefreshAccessTokenResponse>;
}
//# sourceMappingURL=introspection.d.ts.map