import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function recoveryCasesGet(client: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest, options?: RequestOptions): APIPromise<Result<operations.GetRecoveryCasesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=recoveryCasesGet.d.ts.map