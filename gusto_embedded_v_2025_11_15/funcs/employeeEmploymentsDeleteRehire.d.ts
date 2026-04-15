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
 * Delete an employee rehire
 *
 * @remarks
 * Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).
 *
 * scope: `employments:write`
 */
export declare function employeeEmploymentsDeleteRehire(client: GustoEmbeddedCore, request: operations.DeleteV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1EmployeesEmployeeIdRehireResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeEmploymentsDeleteRehire.d.ts.map