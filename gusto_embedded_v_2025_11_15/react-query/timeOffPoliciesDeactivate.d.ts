import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesDeactivateMutationVariables = {
    request: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesDeactivateMutationData = operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse;
/**
 * Deactivate a time off policy
 *
 * @remarks
 * Deactivate a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function useTimeOffPoliciesDeactivateMutation(options?: MutationHookOptions<TimeOffPoliciesDeactivateMutationData, Error, TimeOffPoliciesDeactivateMutationVariables>): UseMutationResult<TimeOffPoliciesDeactivateMutationData, Error, TimeOffPoliciesDeactivateMutationVariables>;
export declare function mutationKeyTimeOffPoliciesDeactivate(): MutationKey;
export declare function buildTimeOffPoliciesDeactivateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesDeactivateMutationVariables) => Promise<TimeOffPoliciesDeactivateMutationData>;
};
//# sourceMappingURL=timeOffPoliciesDeactivate.d.ts.map