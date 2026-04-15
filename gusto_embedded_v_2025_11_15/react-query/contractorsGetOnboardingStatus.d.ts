import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorsGetOnboardingStatusQueryData = operations.GetV1ContractorsContractorUuidOnboardingStatusResponse;
/**
 * Get the contractor's onboarding status
 *
 * @remarks
 * Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `contractors:read`
 *
 * ## onboarding_status
 *
 * ### Admin-facilitated onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ### Contractor self-onboarding
 *
 * | onboarding_status | Description |
 * | --- | ----------- |
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
 * | `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
 * | `self_onboarding_started` | Contractor has started the self-onboarding process. |
 * | `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ## onboarding_steps
 *
 * | onboarding_steps | Requirement(s) to be completed |
 * |:-----------------|-------------------------------:|
 * | `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
 * | `add_address` | Add contractor address. |
 * | `compensation_details` | Add contractor compensation. |
 * | `payment_details` | Set up contractor's direct deposit or set to check. |
 * | `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
 * | `file_new_hire_report` | Contractor new hire report is generated. |
 */
export declare function useContractorsGetOnboardingStatus(request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: QueryHookOptions<ContractorsGetOnboardingStatusQueryData>): UseQueryResult<ContractorsGetOnboardingStatusQueryData, Error>;
/**
 * Get the contractor's onboarding status
 *
 * @remarks
 * Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `contractors:read`
 *
 * ## onboarding_status
 *
 * ### Admin-facilitated onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ### Contractor self-onboarding
 *
 * | onboarding_status | Description |
 * | --- | ----------- |
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
 * | `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
 * | `self_onboarding_started` | Contractor has started the self-onboarding process. |
 * | `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ## onboarding_steps
 *
 * | onboarding_steps | Requirement(s) to be completed |
 * |:-----------------|-------------------------------:|
 * | `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
 * | `add_address` | Add contractor address. |
 * | `compensation_details` | Add contractor compensation. |
 * | `payment_details` | Set up contractor's direct deposit or set to check. |
 * | `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
 * | `file_new_hire_report` | Contractor new hire report is generated. |
 */
export declare function useContractorsGetOnboardingStatusSuspense(request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: SuspenseQueryHookOptions<ContractorsGetOnboardingStatusQueryData>): UseSuspenseQueryResult<ContractorsGetOnboardingStatusQueryData, Error>;
export declare function prefetchContractorsGetOnboardingStatus(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest): Promise<void>;
export declare function setContractorsGetOnboardingStatusData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorsGetOnboardingStatusQueryData): ContractorsGetOnboardingStatusQueryData | undefined;
export declare function invalidateContractorsGetOnboardingStatus(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorsGetOnboardingStatus(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorsGetOnboardingStatusQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorsGetOnboardingStatusQueryData>;
};
export declare function queryKeyContractorsGetOnboardingStatus(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorsGetOnboardingStatus.d.ts.map