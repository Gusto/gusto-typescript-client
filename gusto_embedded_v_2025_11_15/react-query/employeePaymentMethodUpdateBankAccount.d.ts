import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeePaymentMethodUpdateBankAccountMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest;
    options?: RequestOptions;
};
export type EmployeePaymentMethodUpdateBankAccountMutationData = operations.PutV1EmployeesEmployeeIdBankAccountsResponse;
/**
 * Update an employee bank account
 *
 * @remarks
 * Updates an employee bank account.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function useEmployeePaymentMethodUpdateBankAccountMutation(options?: MutationHookOptions<EmployeePaymentMethodUpdateBankAccountMutationData, Error, EmployeePaymentMethodUpdateBankAccountMutationVariables>): UseMutationResult<EmployeePaymentMethodUpdateBankAccountMutationData, Error, EmployeePaymentMethodUpdateBankAccountMutationVariables>;
export declare function mutationKeyEmployeePaymentMethodUpdateBankAccount(): MutationKey;
export declare function buildEmployeePaymentMethodUpdateBankAccountMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeePaymentMethodUpdateBankAccountMutationVariables) => Promise<EmployeePaymentMethodUpdateBankAccountMutationData>;
};
//# sourceMappingURL=employeePaymentMethodUpdateBankAccount.d.ts.map