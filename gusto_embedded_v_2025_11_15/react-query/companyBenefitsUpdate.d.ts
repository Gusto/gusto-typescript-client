import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyBenefitsUpdateMutationVariables = {
    request: operations.PutV1CompanyBenefitsCompanyBenefitIdRequest;
    options?: RequestOptions;
};
export type CompanyBenefitsUpdateMutationData = operations.PutV1CompanyBenefitsCompanyBenefitIdResponse;
/**
 * Update a company benefit
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * scope: `company_benefits:write`
 */
export declare function useCompanyBenefitsUpdateMutation(options?: MutationHookOptions<CompanyBenefitsUpdateMutationData, Error, CompanyBenefitsUpdateMutationVariables>): UseMutationResult<CompanyBenefitsUpdateMutationData, Error, CompanyBenefitsUpdateMutationVariables>;
export declare function mutationKeyCompanyBenefitsUpdate(): MutationKey;
export declare function buildCompanyBenefitsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyBenefitsUpdateMutationVariables) => Promise<CompanyBenefitsUpdateMutationData>;
};
//# sourceMappingURL=companyBenefitsUpdate.d.ts.map