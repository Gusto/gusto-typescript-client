import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type HolidayPayPoliciesUpdateMutationVariables = {
    request: operations.PutCompaniesCompanyUuidHolidayPayPolicyRequest;
    options?: RequestOptions;
};
export type HolidayPayPoliciesUpdateMutationData = operations.PutCompaniesCompanyUuidHolidayPayPolicyResponse;
/**
 * Update a company's holiday pay policy
 *
 * @remarks
 * Update a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function useHolidayPayPoliciesUpdateMutation(options?: MutationHookOptions<HolidayPayPoliciesUpdateMutationData, Error, HolidayPayPoliciesUpdateMutationVariables>): UseMutationResult<HolidayPayPoliciesUpdateMutationData, Error, HolidayPayPoliciesUpdateMutationVariables>;
export declare function mutationKeyHolidayPayPoliciesUpdate(): MutationKey;
export declare function buildHolidayPayPoliciesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: HolidayPayPoliciesUpdateMutationVariables) => Promise<HolidayPayPoliciesUpdateMutationData>;
};
//# sourceMappingURL=holidayPayPoliciesUpdate.d.ts.map