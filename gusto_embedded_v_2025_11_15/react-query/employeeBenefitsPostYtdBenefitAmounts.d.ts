import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeBenefitsPostYtdBenefitAmountsMutationVariables = {
    request: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest;
    options?: RequestOptions;
};
export type EmployeeBenefitsPostYtdBenefitAmountsMutationData = void;
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
export declare function useEmployeeBenefitsPostYtdBenefitAmountsMutation(options?: MutationHookOptions<EmployeeBenefitsPostYtdBenefitAmountsMutationData, Error, EmployeeBenefitsPostYtdBenefitAmountsMutationVariables>): UseMutationResult<EmployeeBenefitsPostYtdBenefitAmountsMutationData, Error, EmployeeBenefitsPostYtdBenefitAmountsMutationVariables>;
export declare function mutationKeyEmployeeBenefitsPostYtdBenefitAmounts(): MutationKey;
export declare function buildEmployeeBenefitsPostYtdBenefitAmountsMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeBenefitsPostYtdBenefitAmountsMutationVariables) => Promise<EmployeeBenefitsPostYtdBenefitAmountsMutationData>;
};
//# sourceMappingURL=employeeBenefitsPostYtdBenefitAmounts.d.ts.map