import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get info about the current access token
 *
 * @remarks
 * Returns scope and resource information associated with the current access token.
 */
export declare function introspectionGetInfo(client: GustoEmbeddedCore, request: operations.GetV1TokenInfoRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1TokenInfoResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=introspectionGetInfo.d.ts.map