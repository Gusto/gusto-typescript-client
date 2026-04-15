import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationVariables = {
    request: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationData = operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse;
/**
 * Create year-to-date benefit amounts from a different company
 *
 * @remarks
 * Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.
 *
 * This endpoint only supports passing outside contributions for 401(k) benefits.
 *
 * scope: `employee_benefits:write`
 */
export declare function useEmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutation(options?: MutationHookOptions<EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationData, Error, EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationVariables>): UseMutationResult<EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationData, Error, EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationVariables>;
export declare function mutationKeyEmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(): MutationKey;
export declare function buildEmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationVariables) => Promise<EmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutationData>;
};
//# sourceMappingURL=employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany.d.ts.map