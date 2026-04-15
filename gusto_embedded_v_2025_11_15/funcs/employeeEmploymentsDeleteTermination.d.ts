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
 * Delete an employee termination
 *
 * @remarks
 * Delete an employee termination.
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsDeleteTermination(client: GustoEmbeddedCore, request: operations.DeleteV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1EmployeesEmployeeIdTerminationsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeEmploymentsDeleteTermination.d.ts.map