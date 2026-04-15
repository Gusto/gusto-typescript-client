import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Create an employee bank account
 *
 * @remarks
 * Creates an employee bank account. An employee can have multiple
 * bank accounts. Note that creating an employee bank account will also update
 * the employee's payment method.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function employeePaymentMethodCreateBankAccount(client: GustoEmbeddedCore, request: operations.PostV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<Result<components.EmployeeBankAccount, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodCreateBankAccount.d.ts.map