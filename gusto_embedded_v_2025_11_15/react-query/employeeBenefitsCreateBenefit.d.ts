import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsCreateBenefitMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsCreateBenefitMutationData = components.EmployeeBenefit;
/**
 * Create an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * scope: `employee_benefits:write`
 */
export declare function useEmployeeBenefitsCreateBenefitMutation(options?: MutationHookOptions<EmployeeBenefitsCreateBenefitMutationData, Error, EmployeeBenefitsCreateBenefitMutationVariables>): UseMutationResult<EmployeeBenefitsCreateBenefitMutationData, Error, EmployeeBenefitsCreateBenefitMutationVariables>;
export declare function mutationKeyEmployeeBenefitsCreateBenefit(): MutationKey;
export declare function buildEmployeeBenefitsCreateBenefitMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsCreateBenefitMutationVariables) => Promise<EmployeeBenefitsCreateBenefitMutationData>;
};
//# sourceMappingURL=employeeBenefitsCreateBenefit.d.ts.map