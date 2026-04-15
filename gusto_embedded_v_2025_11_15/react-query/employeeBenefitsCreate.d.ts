import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsCreateMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsCreateMutationData = operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse;
/**
 * Create an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * scope: `employee_benefits:write`
 */
export declare function useEmployeeBenefitsCreateMutation(options?: MutationHookOptions<EmployeeBenefitsCreateMutationData, Error, EmployeeBenefitsCreateMutationVariables>): UseMutationResult<EmployeeBenefitsCreateMutationData, Error, EmployeeBenefitsCreateMutationVariables>;
export declare function mutationKeyEmployeeBenefitsCreate(): MutationKey;
export declare function buildEmployeeBenefitsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsCreateMutationVariables) => Promise<EmployeeBenefitsCreateMutationData>;
};
//# sourceMappingURL=employeeBenefitsCreate.d.ts.map