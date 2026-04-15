import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsUpdateMutationVariables = {
    request: operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsUpdateMutationData = operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse;
/**
 * Update an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * scope: `employee_benefits:write`
 */
export declare function useEmployeeBenefitsUpdateMutation(options?: MutationHookOptions<EmployeeBenefitsUpdateMutationData, Error, EmployeeBenefitsUpdateMutationVariables>): UseMutationResult<EmployeeBenefitsUpdateMutationData, Error, EmployeeBenefitsUpdateMutationVariables>;
export declare function mutationKeyEmployeeBenefitsUpdate(): MutationKey;
export declare function buildEmployeeBenefitsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsUpdateMutationVariables) => Promise<EmployeeBenefitsUpdateMutationData>;
};
//# sourceMappingURL=employeeBenefitsUpdate.d.ts.map