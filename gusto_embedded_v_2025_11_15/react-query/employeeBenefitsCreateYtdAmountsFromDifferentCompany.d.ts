import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationVariables = {
    request: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationData = void;
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
export declare function useEmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutation(options?: MutationHookOptions<EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationData, Error, EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationVariables>): UseMutationResult<EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationData, Error, EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationVariables>;
export declare function mutationKeyEmployeeBenefitsCreateYtdAmountsFromDifferentCompany(): MutationKey;
export declare function buildEmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationVariables) => Promise<EmployeeBenefitsCreateYtdAmountsFromDifferentCompanyMutationData>;
};
//# sourceMappingURL=employeeBenefitsCreateYtdAmountsFromDifferentCompany.d.ts.map