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
 * Update an employee bank account
 *
 * @remarks
 * Updates an employee bank account.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function employeePaymentMethodUpdateBankAccount(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdBankAccountsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodUpdateBankAccount.d.ts.map