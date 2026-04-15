import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeePaymentMethodCreateMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdBankAccountsRequest;
    options?: RequestOptions;
};
export type EmployeePaymentMethodCreateMutationData = operations.PostV1EmployeesEmployeeIdBankAccountsResponse;
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
export declare function useEmployeePaymentMethodCreateMutation(options?: MutationHookOptions<EmployeePaymentMethodCreateMutationData, Error, EmployeePaymentMethodCreateMutationVariables>): UseMutationResult<EmployeePaymentMethodCreateMutationData, Error, EmployeePaymentMethodCreateMutationVariables>;
export declare function mutationKeyEmployeePaymentMethodCreate(): MutationKey;
export declare function buildEmployeePaymentMethodCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeePaymentMethodCreateMutationVariables) => Promise<EmployeePaymentMethodCreateMutationData>;
};
//# sourceMappingURL=employeePaymentMethodCreate.d.ts.map