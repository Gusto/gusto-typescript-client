import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesAddEmployeesMutationVariables = {
    request: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesAddEmployeesMutationData = operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse;
/**
 * Add employees to a time off policy
 *
 * @remarks
 * Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
 *
 * scope: `time_off_policies:write`
 */
export declare function useTimeOffPoliciesAddEmployeesMutation(options?: MutationHookOptions<TimeOffPoliciesAddEmployeesMutationData, Error, TimeOffPoliciesAddEmployeesMutationVariables>): UseMutationResult<TimeOffPoliciesAddEmployeesMutationData, Error, TimeOffPoliciesAddEmployeesMutationVariables>;
export declare function mutationKeyTimeOffPoliciesAddEmployees(): MutationKey;
export declare function buildTimeOffPoliciesAddEmployeesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesAddEmployeesMutationVariables) => Promise<TimeOffPoliciesAddEmployeesMutationData>;
};
//# sourceMappingURL=timeOffPoliciesAddEmployees.d.ts.map