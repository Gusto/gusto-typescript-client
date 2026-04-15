import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
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
export declare function introspectionRefreshToken(client: GustoEmbeddedCore, request: operations.RefreshAccessTokenRequest, options?: RequestOptions): APIPromise<Result<operations.RefreshAccessTokenResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=introspectionRefreshToken.d.ts.map