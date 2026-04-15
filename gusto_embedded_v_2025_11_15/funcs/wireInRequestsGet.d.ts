import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export declare function wireInRequestsGet(client: GustoEmbeddedCore, request: operations.GetWireInRequestsWireInRequestUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetWireInRequestsWireInRequestUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=wireInRequestsGet.d.ts.map