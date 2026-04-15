import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type FlowsCreateMutationVariables = {
    request: operations.PostV1CompanyFlowsRequest;
    options?: RequestOptions;
};
export type FlowsCreateMutationData = operations.PostV1CompanyFlowsResponse;
/**
 * Create a flow
 *
 * @remarks
 * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.
 *
 * scope: `flows:write`
 */
export declare function useFlowsCreateMutation(options?: MutationHookOptions<FlowsCreateMutationData, Error, FlowsCreateMutationVariables>): UseMutationResult<FlowsCreateMutationData, Error, FlowsCreateMutationVariables>;
export declare function mutationKeyFlowsCreate(): MutationKey;
export declare function buildFlowsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: FlowsCreateMutationVariables) => Promise<FlowsCreateMutationData>;
};
//# sourceMappingURL=flowsCreate.d.ts.map