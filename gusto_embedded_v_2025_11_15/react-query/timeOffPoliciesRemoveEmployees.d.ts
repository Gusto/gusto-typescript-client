import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesRemoveEmployeesMutationVariables = {
    request: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesRemoveEmployeesMutationData = operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse;
/**
 * Remove employees from a time off policy
 *
 * @remarks
 * Remove employees from a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function useTimeOffPoliciesRemoveEmployeesMutation(options?: MutationHookOptions<TimeOffPoliciesRemoveEmployeesMutationData, Error, TimeOffPoliciesRemoveEmployeesMutationVariables>): UseMutationResult<TimeOffPoliciesRemoveEmployeesMutationData, Error, TimeOffPoliciesRemoveEmployeesMutationVariables>;
export declare function mutationKeyTimeOffPoliciesRemoveEmployees(): MutationKey;
export declare function buildTimeOffPoliciesRemoveEmployeesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesRemoveEmployeesMutationVariables) => Promise<TimeOffPoliciesRemoveEmployeesMutationData>;
};
//# sourceMappingURL=timeOffPoliciesRemoveEmployees.d.ts.map