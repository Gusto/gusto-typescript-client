import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TimeOffPoliciesRetrieveQueryData = components.TimeOffPolicy;
/**
 * Get a time off policy
 *
 * @remarks
 * Get a time off policy
 *
 * scope: `time_off_policies:read`
 */
export declare function useTimeOffPoliciesRetrieve(request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: QueryHookOptions<TimeOffPoliciesRetrieveQueryData>): UseQueryResult<TimeOffPoliciesRetrieveQueryData, Error>;
/**
 * Get a time off policy
 *
 * @remarks
 * Get a time off policy
 *
 * scope: `time_off_policies:read`
 */
export declare function useTimeOffPoliciesRetrieveSuspense(request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: SuspenseQueryHookOptions<TimeOffPoliciesRetrieveQueryData>): UseSuspenseQueryResult<TimeOffPoliciesRetrieveQueryData, Error>;
export declare function prefetchTimeOffPoliciesRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest): Promise<void>;
export declare function setTimeOffPoliciesRetrieveData(client: QueryClient, queryKeyBase: [
    timeOffPolicyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TimeOffPoliciesRetrieveQueryData): TimeOffPoliciesRetrieveQueryData | undefined;
export declare function invalidateTimeOffPoliciesRetrieve(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    timeOffPolicyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTimeOffPoliciesRetrieve(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTimeOffPoliciesRetrieveQuery(client$: GustoEmbeddedCore, request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TimeOffPoliciesRetrieveQueryData>;
};
export declare function queryKeyTimeOffPoliciesRetrieve(timeOffPolicyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=timeOffPoliciesRetrieve.d.ts.map