import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type HolidayPayPoliciesCreateMutationVariables = {
    request: operations.PostCompaniesCompanyUuidHolidayPayPolicyRequest;
    options?: RequestOptions;
};
export type HolidayPayPoliciesCreateMutationData = operations.PostCompaniesCompanyUuidHolidayPayPolicyResponse;
/**
 * Create a holiday pay policy for a company
 *
 * @remarks
 * Create a holiday pay policy for a company
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function useHolidayPayPoliciesCreateMutation(options?: MutationHookOptions<HolidayPayPoliciesCreateMutationData, Error, HolidayPayPoliciesCreateMutationVariables>): UseMutationResult<HolidayPayPoliciesCreateMutationData, Error, HolidayPayPoliciesCreateMutationVariables>;
export declare function mutationKeyHolidayPayPoliciesCreate(): MutationKey;
export declare function buildHolidayPayPoliciesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: HolidayPayPoliciesCreateMutationVariables) => Promise<HolidayPayPoliciesCreateMutationData>;
};
//# sourceMappingURL=holidayPayPoliciesCreate.d.ts.map