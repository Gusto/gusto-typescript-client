import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an employee bank account
 *
 * @remarks
 * Deletes an employee bank account. To update an employee's bank
 * account details, delete the bank account first and create a new one.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function employeePaymentMethodDeleteBankAccount(client: GustoEmbeddedCore, request: operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodDeleteBankAccount.d.ts.map