import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1EmployeesEmployeeIdRehireRequest, PostV1EmployeesEmployeeIdRehireResponse } from "../models/operations/postv1employeesemployeeidrehire.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create an employee rehire
 *
 * @remarks
 * Rehire is created whenever an employee is scheduled to return to the company.
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsCreateRehire(client: GustoEmbeddedCore, request: PostV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<PostV1EmployeesEmployeeIdRehireResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeeEmploymentsCreateRehire.d.ts.map