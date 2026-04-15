import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesCreateMutationVariables = {
    request: operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesCreateMutationData = operations.PostCompaniesCompanyUuidTimeOffPoliciesResponse;
/**
 * Create a time off policy
 *
 * @remarks
 * Create a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function useTimeOffPoliciesCreateMutation(options?: MutationHookOptions<TimeOffPoliciesCreateMutationData, Error, TimeOffPoliciesCreateMutationVariables>): UseMutationResult<TimeOffPoliciesCreateMutationData, Error, TimeOffPoliciesCreateMutationVariables>;
export declare function mutationKeyTimeOffPoliciesCreate(): MutationKey;
export declare function buildTimeOffPoliciesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesCreateMutationVariables) => Promise<TimeOffPoliciesCreateMutationData>;
};
//# sourceMappingURL=timeOffPoliciesCreate.d.ts.map