import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeePaymentMethodCreateBankAccountMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdBankAccountsRequest;
    options?: RequestOptions;
};
export type EmployeePaymentMethodCreateBankAccountMutationData = components.EmployeeBankAccount;
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
export declare function useEmployeePaymentMethodCreateBankAccountMutation(options?: MutationHookOptions<EmployeePaymentMethodCreateBankAccountMutationData, Error, EmployeePaymentMethodCreateBankAccountMutationVariables>): UseMutationResult<EmployeePaymentMethodCreateBankAccountMutationData, Error, EmployeePaymentMethodCreateBankAccountMutationVariables>;
export declare function mutationKeyEmployeePaymentMethodCreateBankAccount(): MutationKey;
export declare function buildEmployeePaymentMethodCreateBankAccountMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeePaymentMethodCreateBankAccountMutationVariables) => Promise<EmployeePaymentMethodCreateBankAccountMutationData>;
};
//# sourceMappingURL=employeePaymentMethodCreateBankAccount.d.ts.map