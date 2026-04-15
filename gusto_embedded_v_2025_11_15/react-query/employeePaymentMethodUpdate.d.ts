import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeePaymentMethodUpdateMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdPaymentMethodRequest;
    options?: RequestOptions;
};
export type EmployeePaymentMethodUpdateMutationData = operations.PutV1EmployeesEmployeeIdPaymentMethodResponse;
/**
 * Update an employee's payment method
 *
 * @remarks
 * Updates an employee's payment method. Note that creating an employee
 * bank account will also update the employee's payment method.
 *
 * scope: `employee_payment_methods:write`
 */
export declare function useEmployeePaymentMethodUpdateMutation(options?: MutationHookOptions<EmployeePaymentMethodUpdateMutationData, Error, EmployeePaymentMethodUpdateMutationVariables>): UseMutationResult<EmployeePaymentMethodUpdateMutationData, Error, EmployeePaymentMethodUpdateMutationVariables>;
export declare function mutationKeyEmployeePaymentMethodUpdate(): MutationKey;
export declare function buildEmployeePaymentMethodUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeePaymentMethodUpdateMutationVariables) => Promise<EmployeePaymentMethodUpdateMutationData>;
};
//# sourceMappingURL=employeePaymentMethodUpdate.d.ts.map