import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsDeleteMutationVariables = {
    request: operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsDeleteMutationData = operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse;
/**
 * Delete an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * scope: `employee_benefits:write`
 */
export declare function useEmployeeBenefitsDeleteMutation(options?: MutationHookOptions<EmployeeBenefitsDeleteMutationData, Error, EmployeeBenefitsDeleteMutationVariables>): UseMutationResult<EmployeeBenefitsDeleteMutationData, Error, EmployeeBenefitsDeleteMutationVariables>;
export declare function mutationKeyEmployeeBenefitsDelete(): MutationKey;
export declare function buildEmployeeBenefitsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsDeleteMutationVariables) => Promise<EmployeeBenefitsDeleteMutationData>;
};
//# sourceMappingURL=employeeBenefitsDelete.d.ts.map