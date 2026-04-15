import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete a department
 *
 * @remarks
 * Delete a department. You cannot delete a department until all employees and contractors have been removed.
 *
 * scope: `departments:write`
 */
export declare function departmentsDelete(client: GustoEmbeddedCore, request: operations.DeleteDepartmentRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteDepartmentResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=departmentsDelete.d.ts.map