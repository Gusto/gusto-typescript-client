import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesUpdateBalanceMutationVariables = {
    request: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesUpdateBalanceMutationData = operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse;
/**
 * Update employee time off hour balances
 *
 * @remarks
 * Updates time off hours balances for employees for a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function useTimeOffPoliciesUpdateBalanceMutation(options?: MutationHookOptions<TimeOffPoliciesUpdateBalanceMutationData, Error, TimeOffPoliciesUpdateBalanceMutationVariables>): UseMutationResult<TimeOffPoliciesUpdateBalanceMutationData, Error, TimeOffPoliciesUpdateBalanceMutationVariables>;
export declare function mutationKeyTimeOffPoliciesUpdateBalance(): MutationKey;
export declare function buildTimeOffPoliciesUpdateBalanceMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesUpdateBalanceMutationVariables) => Promise<TimeOffPoliciesUpdateBalanceMutationData>;
};
//# sourceMappingURL=timeOffPoliciesUpdateBalance.d.ts.map