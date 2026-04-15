import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EmployeePaymentMethods extends ClientSDK {
    /**
     * Get all employee bank accounts
     *
     * @remarks
     * Returns all employee bank accounts.
     *
     * scope: `employee_payment_methods:read`
     */
    getBankAccounts(request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdBankAccountsResponse>;
}
//# sourceMappingURL=employeepaymentmethods.d.ts.map