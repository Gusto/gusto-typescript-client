import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeePaymentMethodDeleteBankAccountMutationVariables = {
    request: operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest;
    options?: RequestOptions;
};
export type EmployeePaymentMethodDeleteBankAccountMutationData = operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse;
/**
 * Delete an employee bank account
 *
 * @remarks
 * Deletes an employee bank account. To update an employee's bank
 * account details, delete the bank account first and create a new one.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function useEmployeePaymentMethodDeleteBankAccountMutation(options?: MutationHookOptions<EmployeePaymentMethodDeleteBankAccountMutationData, Error, EmployeePaymentMethodDeleteBankAccountMutationVariables>): UseMutationResult<EmployeePaymentMethodDeleteBankAccountMutationData, Error, EmployeePaymentMethodDeleteBankAccountMutationVariables>;
export declare function mutationKeyEmployeePaymentMethodDeleteBankAccount(): MutationKey;
export declare function buildEmployeePaymentMethodDeleteBankAccountMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeePaymentMethodDeleteBankAccountMutationVariables) => Promise<EmployeePaymentMethodDeleteBankAccountMutationData>;
};
//# sourceMappingURL=employeePaymentMethodDeleteBankAccount.d.ts.map