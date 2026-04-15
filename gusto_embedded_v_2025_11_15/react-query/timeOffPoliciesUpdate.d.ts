import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesUpdateMutationVariables = {
    request: operations.PutTimeOffPoliciesTimeOffPolicyUuidRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesUpdateMutationData = operations.PutTimeOffPoliciesTimeOffPolicyUuidResponse;
/**
 * Update a time off policy
 *
 * @remarks
 * Update a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function useTimeOffPoliciesUpdateMutation(options?: MutationHookOptions<TimeOffPoliciesUpdateMutationData, Error, TimeOffPoliciesUpdateMutationVariables>): UseMutationResult<TimeOffPoliciesUpdateMutationData, Error, TimeOffPoliciesUpdateMutationVariables>;
export declare function mutationKeyTimeOffPoliciesUpdate(): MutationKey;
export declare function buildTimeOffPoliciesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesUpdateMutationVariables) => Promise<TimeOffPoliciesUpdateMutationData>;
};
//# sourceMappingURL=timeOffPoliciesUpdate.d.ts.map