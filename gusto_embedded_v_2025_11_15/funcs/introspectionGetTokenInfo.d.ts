import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get info about the current access token
 *
 * @remarks
 * Returns scope and resource information associated with the current access token.
 */
export declare function introspectionGetTokenInfo(client: GustoEmbeddedCore, request: operations.GetV1TokenInfoRequest, options?: RequestOptions): Promise<Result<operations.GetV1TokenInfoResponseBody, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=introspectionGetTokenInfo.d.ts.map