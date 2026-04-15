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
 * Get an employee rehire
 *
 * @remarks
 * Retrieve an employee's rehire, which contains information on when the employee returns to work.
 *
 * scope: `employments:read`
 */
export declare function employeeEmploymentsGetRehire(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdRehireResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeEmploymentsGetRehire.d.ts.map