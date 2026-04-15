import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables = {
    request: operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest;
    options?: RequestOptions;
};
export type CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData = Array<components.EmployeeBenefit>;
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
export declare function useCompanyBenefitsBulkUpdateEmployeeBenefitsMutation(options?: MutationHookOptions<CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData, Error, CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables>): UseMutationResult<CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData, Error, CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables>;
export declare function mutationKeyCompanyBenefitsBulkUpdateEmployeeBenefits(): MutationKey;
export declare function buildCompanyBenefitsBulkUpdateEmployeeBenefitsMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables) => Promise<CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData>;
};
//# sourceMappingURL=companyBenefitsBulkUpdateEmployeeBenefits.d.ts.map