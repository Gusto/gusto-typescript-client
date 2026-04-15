import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyBenefitsPostMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest;
    options?: RequestOptions;
};
export type CompanyBenefitsPostMutationData = components.CompanyBenefit;
/**
 * Create a company benefit
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * scope: `company_benefits:write`
 */
export declare function useCompanyBenefitsPostMutation(options?: MutationHookOptions<CompanyBenefitsPostMutationData, Error, CompanyBenefitsPostMutationVariables>): UseMutationResult<CompanyBenefitsPostMutationData, Error, CompanyBenefitsPostMutationVariables>;
export declare function mutationKeyCompanyBenefitsPost(): MutationKey;
export declare function buildCompanyBenefitsPostMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyBenefitsPostMutationVariables) => Promise<CompanyBenefitsPostMutationData>;
};
//# sourceMappingURL=companyBenefitsPost.d.ts.map