import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyBenefitsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest;
    options?: RequestOptions;
};
export type CompanyBenefitsCreateMutationData = operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse;
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
export declare function useCompanyBenefitsCreateMutation(options?: MutationHookOptions<CompanyBenefitsCreateMutationData, Error, CompanyBenefitsCreateMutationVariables>): UseMutationResult<CompanyBenefitsCreateMutationData, Error, CompanyBenefitsCreateMutationVariables>;
export declare function mutationKeyCompanyBenefitsCreate(): MutationKey;
export declare function buildCompanyBenefitsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyBenefitsCreateMutationVariables) => Promise<CompanyBenefitsCreateMutationData>;
};
//# sourceMappingURL=companyBenefitsCreate.d.ts.map