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
 * Delete an onboarding employee
 *
 * @remarks
 * Use this endpoint to delete an employee who is in onboarding. Deleting
 * an onboarded employee is not allowed and will return a 422 response. Please check out the Terminations api
 * if you need to terminate an onboarded employee.
 *
 * scope: `employees:manage`
 */
export declare function employeesDelete(client: GustoEmbeddedCore, request: operations.DeleteV1EmployeeRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1EmployeeResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeesDelete.d.ts.map