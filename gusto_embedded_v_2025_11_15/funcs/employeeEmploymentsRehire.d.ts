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
 * Update an employee rehire
 *
 * @remarks
 * Update an employee's rehire.
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsRehire(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdRehireResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeEmploymentsRehire.d.ts.map