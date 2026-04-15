import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesFinishOnboardingMutationVariables = {
    request: operations.GetV1CompanyFinishOnboardingRequest;
    options?: RequestOptions;
};
export type CompaniesFinishOnboardingMutationData = operations.GetV1CompanyFinishOnboardingResponse;
/**
 * Finish company onboarding
 *
 * @remarks
 * Finalize a given company's onboarding process.
 *
 * ### Approve a company in demo
 * After a company is finished onboarding, Gusto requires an additional step to review and approve that company. The company onboarding status is `"onboarding_completed": false`, until the API call is made to finish company onboarding.
 * In production environments, this step is required for risk-analysis purposes.
 *
 * We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.
 *
 * ```shell
 * PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'
 *
 * # Response: Company object, with company_status: 'Approved'
 * ```
 *
 * scope: `companies:write`
 */
export declare function useCompaniesFinishOnboardingMutation(options?: MutationHookOptions<CompaniesFinishOnboardingMutationData, Error, CompaniesFinishOnboardingMutationVariables>): UseMutationResult<CompaniesFinishOnboardingMutationData, Error, CompaniesFinishOnboardingMutationVariables>;
export declare function mutationKeyCompaniesFinishOnboarding(): MutationKey;
export declare function buildCompaniesFinishOnboardingMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesFinishOnboardingMutationVariables) => Promise<CompaniesFinishOnboardingMutationData>;
};
//# sourceMappingURL=companiesFinishOnboarding.d.ts.map