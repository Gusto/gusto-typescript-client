import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type HolidayPayPoliciesDeleteMutationVariables = {
    request: operations.DeleteCompaniesCompanyUuidHolidayPayPolicyRequest;
    options?: RequestOptions;
};
export type HolidayPayPoliciesDeleteMutationData = operations.DeleteCompaniesCompanyUuidHolidayPayPolicyResponse;
/**
 * Delete a company's holiday pay policy
 *
 * @remarks
 * Delete a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function useHolidayPayPoliciesDeleteMutation(options?: MutationHookOptions<HolidayPayPoliciesDeleteMutationData, Error, HolidayPayPoliciesDeleteMutationVariables>): UseMutationResult<HolidayPayPoliciesDeleteMutationData, Error, HolidayPayPoliciesDeleteMutationVariables>;
export declare function mutationKeyHolidayPayPoliciesDelete(): MutationKey;
export declare function buildHolidayPayPoliciesDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: HolidayPayPoliciesDeleteMutationVariables) => Promise<HolidayPayPoliciesDeleteMutationData>;
};
//# sourceMappingURL=holidayPayPoliciesDelete.d.ts.map