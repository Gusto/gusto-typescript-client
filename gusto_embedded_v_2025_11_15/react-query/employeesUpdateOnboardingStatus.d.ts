import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesUpdateOnboardingStatusMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdOnboardingStatusRequest;
    options?: RequestOptions;
};
export type EmployeesUpdateOnboardingStatusMutationData = operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse;
/**
 * Update the employee's onboarding status
 *
 * @remarks
 * scope: `employees:manage`
 *
 * Updates an employee's onboarding status.
 * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the employee.
 *
 * | Action | current onboarding_status | new onboarding_status |
 * |:------------------|:------------:|----------:|
 * | Mark an employee as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_pending_invite` |
 * | Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_pending_invite` | `self_onboarding_invited` |
 * | Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_pending_invite` | `admin_onboarding_incomplete` |
 * | Review an employee's self-onboarded info | `self_onboarding_completed_by_employee` | `self_onboarding_awaiting_admin_review` |
 * | Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_awaiting_admin_review` | `onboarding_completed` |
 */
export declare function useEmployeesUpdateOnboardingStatusMutation(options?: MutationHookOptions<EmployeesUpdateOnboardingStatusMutationData, Error, EmployeesUpdateOnboardingStatusMutationVariables>): UseMutationResult<EmployeesUpdateOnboardingStatusMutationData, Error, EmployeesUpdateOnboardingStatusMutationVariables>;
export declare function mutationKeyEmployeesUpdateOnboardingStatus(): MutationKey;
export declare function buildEmployeesUpdateOnboardingStatusMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesUpdateOnboardingStatusMutationVariables) => Promise<EmployeesUpdateOnboardingStatusMutationData>;
};
//# sourceMappingURL=employeesUpdateOnboardingStatus.d.ts.map