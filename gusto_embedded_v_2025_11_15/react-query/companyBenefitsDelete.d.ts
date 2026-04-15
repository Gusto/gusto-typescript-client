import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyBenefitsDeleteMutationVariables = {
    request: operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest;
    options?: RequestOptions;
};
export type CompanyBenefitsDeleteMutationData = operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse;
/**
 * Delete a company benefit
 *
 * @remarks
 * The following must be true in order to delete a company benefit
 *   - There are no employee benefits associated with the company benefit
 *   - There are no payroll items associated with the company benefit
 *   - The benefit is not managed by a Partner or by Gusto (type must be 'External')
 *
 * scope: `company_benefits:write`
 */
export declare function useCompanyBenefitsDeleteMutation(options?: MutationHookOptions<CompanyBenefitsDeleteMutationData, Error, CompanyBenefitsDeleteMutationVariables>): UseMutationResult<CompanyBenefitsDeleteMutationData, Error, CompanyBenefitsDeleteMutationVariables>;
export declare function mutationKeyCompanyBenefitsDelete(): MutationKey;
export declare function buildCompanyBenefitsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyBenefitsDeleteMutationVariables) => Promise<CompanyBenefitsDeleteMutationData>;
};
//# sourceMappingURL=companyBenefitsDelete.d.ts.map