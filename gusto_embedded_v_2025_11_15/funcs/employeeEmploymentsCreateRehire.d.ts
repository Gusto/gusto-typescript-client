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
 * Create an employee rehire
 *
 * @remarks
 * Rehire is created whenever an employee is scheduled to return to the company.
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsCreateRehire(client: GustoEmbeddedCore, request: operations.PostV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1EmployeesEmployeeIdRehireResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeEmploymentsCreateRehire.d.ts.map