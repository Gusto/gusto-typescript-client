import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesUpdateOnboardingDocumentsConfigMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest;
    options?: RequestOptions;
};
export type EmployeesUpdateOnboardingDocumentsConfigMutationData = operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse;
/**
 * Update an employee's onboarding documents config
 *
 * @remarks
 * Indicate whether to include the Form I-9 for an employee during the onboarding process.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeesUpdateOnboardingDocumentsConfigMutation(options?: MutationHookOptions<EmployeesUpdateOnboardingDocumentsConfigMutationData, Error, EmployeesUpdateOnboardingDocumentsConfigMutationVariables>): UseMutationResult<EmployeesUpdateOnboardingDocumentsConfigMutationData, Error, EmployeesUpdateOnboardingDocumentsConfigMutationVariables>;
export declare function mutationKeyEmployeesUpdateOnboardingDocumentsConfig(): MutationKey;
export declare function buildEmployeesUpdateOnboardingDocumentsConfigMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesUpdateOnboardingDocumentsConfigMutationVariables) => Promise<EmployeesUpdateOnboardingDocumentsConfigMutationData>;
};
//# sourceMappingURL=employeesUpdateOnboardingDocumentsConfig.d.ts.map