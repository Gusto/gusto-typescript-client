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
 * Update an employee's payment method
 *
 * @remarks
 * Updates an employee's payment method. Note that creating an employee
 * bank account will also update the employee's payment method.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function employeePaymentMethodUpdate(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdPaymentMethodRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdPaymentMethodResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodUpdate.d.ts.map