import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TimeOffPoliciesGetQueryData = operations.GetTimeOffPoliciesTimeOffPolicyUuidResponse;
/**
 * Get a time off policy
 *
 * @remarks
 * Get a time off policy
 *
 * scope: `time_off_policies:read`
 */
export declare function useTimeOffPoliciesGet(request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: QueryHookOptions<TimeOffPoliciesGetQueryData>): UseQueryResult<TimeOffPoliciesGetQueryData, Error>;
/**
 * Get a time off policy
 *
 * @remarks
 * Get a time off policy
 *
 * scope: `time_off_policies:read`
 */
export declare function useTimeOffPoliciesGetSuspense(request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: SuspenseQueryHookOptions<TimeOffPoliciesGetQueryData>): UseSuspenseQueryResult<TimeOffPoliciesGetQueryData, Error>;
export declare function prefetchTimeOffPoliciesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest): Promise<void>;
export declare function setTimeOffPoliciesGetData(client: QueryClient, queryKeyBase: [
    timeOffPolicyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TimeOffPoliciesGetQueryData): TimeOffPoliciesGetQueryData | undefined;
export declare function invalidateTimeOffPoliciesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    timeOffPolicyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTimeOffPoliciesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTimeOffPoliciesGetQuery(client$: GustoEmbeddedCore, request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TimeOffPoliciesGetQueryData>;
};
export declare function queryKeyTimeOffPoliciesGet(timeOffPolicyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=timeOffPoliciesGet.d.ts.map