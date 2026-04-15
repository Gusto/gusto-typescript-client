import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type HolidayPayPoliciesAddEmployeesMutationVariables = {
    request: operations.PutCompaniesCompanyUuidHolidayPayPolicyAddRequest;
    options?: RequestOptions;
};
export type HolidayPayPoliciesAddEmployeesMutationData = operations.PutCompaniesCompanyUuidHolidayPayPolicyAddResponse;
/**
 * Add employees to a company's holiday pay policy
 *
 * @remarks
 * Add employees to a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function useHolidayPayPoliciesAddEmployeesMutation(options?: MutationHookOptions<HolidayPayPoliciesAddEmployeesMutationData, Error, HolidayPayPoliciesAddEmployeesMutationVariables>): UseMutationResult<HolidayPayPoliciesAddEmployeesMutationData, Error, HolidayPayPoliciesAddEmployeesMutationVariables>;
export declare function mutationKeyHolidayPayPoliciesAddEmployees(): MutationKey;
export declare function buildHolidayPayPoliciesAddEmployeesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: HolidayPayPoliciesAddEmployeesMutationVariables) => Promise<HolidayPayPoliciesAddEmployeesMutationData>;
};
//# sourceMappingURL=holidayPayPoliciesAddEmployees.d.ts.map