import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { DeleteV1EmployeesEmployeeIdTerminationsRequest, DeleteV1EmployeesEmployeeIdTerminationsResponse } from "../models/operations/deletev1employeesemployeeidterminations.js";
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
export declare function employeeEmploymentsDeleteTermination(client: GustoEmbeddedCore, request: DeleteV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): APIPromise<Result<DeleteV1EmployeesEmployeeIdTerminationsResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeeEmploymentsDeleteTermination.d.ts.map