import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { DeleteV1EmployeesEmployeeIdRehireRequest, DeleteV1EmployeesEmployeeIdRehireResponse } from "../models/operations/deletev1employeesemployeeidrehire.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an employee rehire
 *
 * @remarks
 * Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsDeleteRehire(client: GustoEmbeddedCore, request: DeleteV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<DeleteV1EmployeesEmployeeIdRehireResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeeEmploymentsDeleteRehire.d.ts.map