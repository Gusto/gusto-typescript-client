import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorsUpdateOnboardingStatusMutationVariables = {
    request: operations.PutV1ContractorsContractorUuidOnboardingStatusRequest;
    options?: RequestOptions;
};
export type ContractorsUpdateOnboardingStatusMutationData = operations.PutV1ContractorsContractorUuidOnboardingStatusResponse;
/**
 * Change the contractor's onboarding status
 *
 * @remarks
 * Updates a contractor's onboarding status.
 *
 * scope: `contractors:write`
 *
 * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the contractor.
 *
 * | Action | current onboarding_status | new onboarding_status |
 * |:------------------|:------------:|----------:|
 * | Mark a contractor as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_not_invited` |
 * | Invite a contractor to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_not_invited` | `self_onboarding_invited` |
 * | Cancel a contractor's self-onboarding | `self_onboarding_invited` or `self_onboarding_not_invited` | `admin_onboarding_incomplete` |
 * | Review a contractor's self-onboarded info | `self_onboarding_started` | `self_onboarding_review` |
 * | Finish a contractor's onboarding | `admin_onboarding_review` or `self_onboarding_review` | `onboarding_completed` |
 */
export declare function useContractorsUpdateOnboardingStatusMutation(options?: MutationHookOptions<ContractorsUpdateOnboardingStatusMutationData, Error, ContractorsUpdateOnboardingStatusMutationVariables>): UseMutationResult<ContractorsUpdateOnboardingStatusMutationData, Error, ContractorsUpdateOnboardingStatusMutationVariables>;
export declare function mutationKeyContractorsUpdateOnboardingStatus(): MutationKey;
export declare function buildContractorsUpdateOnboardingStatusMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorsUpdateOnboardingStatusMutationVariables) => Promise<ContractorsUpdateOnboardingStatusMutationData>;
};
//# sourceMappingURL=contractorsUpdateOnboardingStatus.d.ts.map