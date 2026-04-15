import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EmployeePaymentMethod extends ClientSDK {
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
    create(request: operations.PostV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdBankAccountsResponse>;
    /**
     * Delete an employee bank account
     *
     * @remarks
     * Deletes an employee bank account. To update an employee's bank
     * account details, delete the bank account first and create a new one.
     *
     * scope: `employee_payment_methods:write`
     */
    deleteBankAccount(request: operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest, options?: RequestOptions): Promise<operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse>;
    /**
     * Update an employee bank account
     *
     * @remarks
     * Updates an employee bank account.
     *
     * scope: `employee_payment_methods:write`
     */
    updateBankAccount(request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<operations.PutV1EmployeesEmployeeIdBankAccountsResponse>;
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
    get(request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdPaymentMethodResponse>;
    /**
     * Update an employee's payment method
     *
     * @remarks
     * Updates an employee's payment method. Note that creating an employee
     * bank account will also update the employee's payment method.
     *
     * scope: `employee_payment_methods:write`
     */
    update(request: operations.PutV1EmployeesEmployeeIdPaymentMethodRequest, options?: RequestOptions): Promise<operations.PutV1EmployeesEmployeeIdPaymentMethodResponse>;
}
//# sourceMappingURL=employeepaymentmethod.d.ts.map