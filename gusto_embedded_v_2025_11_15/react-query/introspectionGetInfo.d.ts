import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type IntrospectionGetInfoQueryData = operations.GetV1TokenInfoResponse;
/**
 * Get info about the current access token
 *
 * @remarks
 * Returns scope and resource information associated with the current access token.
 */
export declare function useIntrospectionGetInfo(request: operations.GetV1TokenInfoRequest, options?: QueryHookOptions<IntrospectionGetInfoQueryData>): UseQueryResult<IntrospectionGetInfoQueryData, Error>;
/**
 * Get info about the current access token
 *
 * @remarks
 * Returns scope and resource information associated with the current access token.
 */
export declare function useIntrospectionGetInfoSuspense(request: operations.GetV1TokenInfoRequest, options?: SuspenseQueryHookOptions<IntrospectionGetInfoQueryData>): UseSuspenseQueryResult<IntrospectionGetInfoQueryData, Error>;
export declare function prefetchIntrospectionGetInfo(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1TokenInfoRequest): Promise<void>;
export declare function setIntrospectionGetInfoData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: IntrospectionGetInfoQueryData): IntrospectionGetInfoQueryData | undefined;
export declare function invalidateIntrospectionGetInfo(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllIntrospectionGetInfo(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildIntrospectionGetInfoQuery(client$: GustoEmbeddedCore, request: operations.GetV1TokenInfoRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<IntrospectionGetInfoQueryData>;
};
export declare function queryKeyIntrospectionGetInfo(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=introspectionGetInfo.d.ts.map