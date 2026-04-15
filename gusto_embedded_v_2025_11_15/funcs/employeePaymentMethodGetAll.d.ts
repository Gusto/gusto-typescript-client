import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function employeePaymentMethodGetAll(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<Result<Array<components.EmployeeBankAccount>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeePaymentMethodGetAll.d.ts.map