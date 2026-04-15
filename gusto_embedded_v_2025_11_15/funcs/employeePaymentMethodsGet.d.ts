import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's payment method
 *
 * @remarks
 * Fetches an employee's payment method. An employee payment method
 * describes how the payment should be split across the employee's associated
 * bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function employeePaymentMethodsGet(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: RequestOptions): Promise<Result<components.EmployeePaymentMethod, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodsGet.d.ts.map