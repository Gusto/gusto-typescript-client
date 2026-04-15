import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type HolidayPayPoliciesRemoveEmployeesMutationVariables = {
    request: operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest;
    options?: RequestOptions;
};
export type HolidayPayPoliciesRemoveEmployeesMutationData = operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse;
/**
 * Remove employees from a company's holiday pay policy
 *
 * @remarks
 * Remove employees from a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function useHolidayPayPoliciesRemoveEmployeesMutation(options?: MutationHookOptions<HolidayPayPoliciesRemoveEmployeesMutationData, Error, HolidayPayPoliciesRemoveEmployeesMutationVariables>): UseMutationResult<HolidayPayPoliciesRemoveEmployeesMutationData, Error, HolidayPayPoliciesRemoveEmployeesMutationVariables>;
export declare function mutationKeyHolidayPayPoliciesRemoveEmployees(): MutationKey;
export declare function buildHolidayPayPoliciesRemoveEmployeesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: HolidayPayPoliciesRemoveEmployeesMutationVariables) => Promise<HolidayPayPoliciesRemoveEmployeesMutationData>;
};
//# sourceMappingURL=holidayPayPoliciesRemoveEmployees.d.ts.map