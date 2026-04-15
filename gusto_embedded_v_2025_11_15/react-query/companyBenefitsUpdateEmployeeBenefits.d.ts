import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyBenefitsUpdateEmployeeBenefitsMutationVariables = {
    request: operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest;
    options?: RequestOptions;
};
export type CompanyBenefitsUpdateEmployeeBenefitsMutationData = operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse;
/**
 * Bulk update employee benefits for a company benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Create or update(if the employee is already enrolled in the company benefit previously) an employee benefit for the company benefit.
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:write`
 */
export declare function useCompanyBenefitsUpdateEmployeeBenefitsMutation(options?: MutationHookOptions<CompanyBenefitsUpdateEmployeeBenefitsMutationData, Error, CompanyBenefitsUpdateEmployeeBenefitsMutationVariables>): UseMutationResult<CompanyBenefitsUpdateEmployeeBenefitsMutationData, Error, CompanyBenefitsUpdateEmployeeBenefitsMutationVariables>;
export declare function mutationKeyCompanyBenefitsUpdateEmployeeBenefits(): MutationKey;
export declare function buildCompanyBenefitsUpdateEmployeeBenefitsMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyBenefitsUpdateEmployeeBenefitsMutationVariables) => Promise<CompanyBenefitsUpdateEmployeeBenefitsMutationData>;
};
//# sourceMappingURL=companyBenefitsUpdateEmployeeBenefits.d.ts.map