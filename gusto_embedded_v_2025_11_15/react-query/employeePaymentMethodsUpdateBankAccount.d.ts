import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeePaymentMethodsUpdateBankAccountMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest;
    options?: RequestOptions;
};
export type EmployeePaymentMethodsUpdateBankAccountMutationData = components.EmployeeBankAccount;
/**
 * Update an employee bank account
 *
 * @remarks
 * Updates an employee bank account.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function useEmployeePaymentMethodsUpdateBankAccountMutation(options?: MutationHookOptions<EmployeePaymentMethodsUpdateBankAccountMutationData, Error, EmployeePaymentMethodsUpdateBankAccountMutationVariables>): UseMutationResult<EmployeePaymentMethodsUpdateBankAccountMutationData, Error, EmployeePaymentMethodsUpdateBankAccountMutationVariables>;
export declare function mutationKeyEmployeePaymentMethodsUpdateBankAccount(): MutationKey;
export declare function buildEmployeePaymentMethodsUpdateBankAccountMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeePaymentMethodsUpdateBankAccountMutationVariables) => Promise<EmployeePaymentMethodsUpdateBankAccountMutationData>;
};
//# sourceMappingURL=employeePaymentMethodsUpdateBankAccount.d.ts.map