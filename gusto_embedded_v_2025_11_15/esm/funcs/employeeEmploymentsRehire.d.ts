import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1EmployeesEmployeeIdRehireRequest, PutV1EmployeesEmployeeIdRehireResponse } from "../models/operations/putv1employeesemployeeidrehire.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update an employee rehire
 *
 * @remarks
 * Update an employee's rehire.
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsRehire(client: GustoEmbeddedCore, request: PutV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<PutV1EmployeesEmployeeIdRehireResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeeEmploymentsRehire.d.ts.map