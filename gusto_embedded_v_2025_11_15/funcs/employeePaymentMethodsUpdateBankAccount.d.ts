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
 * Update an employee bank account
 *
 * @remarks
 * Updates an employee bank account.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function employeePaymentMethodsUpdateBankAccount(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<Result<components.EmployeeBankAccount, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodsUpdateBankAccount.d.ts.map