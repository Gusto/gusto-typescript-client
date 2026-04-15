import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type IntrospectionGetTokenInfoQueryData = operations.GetV1TokenInfoResponseBody;
/**
 * Get info about the current access token
 *
 * @remarks
 * Returns scope and resource information associated with the current access token.
 */
export declare function useIntrospectionGetTokenInfo(request: operations.GetV1TokenInfoRequest, options?: QueryHookOptions<IntrospectionGetTokenInfoQueryData>): UseQueryResult<IntrospectionGetTokenInfoQueryData, Error>;
/**
 * Get info about the current access token
 *
 * @remarks
 * Returns scope and resource information associated with the current access token.
 */
export declare function useIntrospectionGetTokenInfoSuspense(request: operations.GetV1TokenInfoRequest, options?: SuspenseQueryHookOptions<IntrospectionGetTokenInfoQueryData>): UseSuspenseQueryResult<IntrospectionGetTokenInfoQueryData, Error>;
export declare function prefetchIntrospectionGetTokenInfo(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1TokenInfoRequest): Promise<void>;
export declare function setIntrospectionGetTokenInfoData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: IntrospectionGetTokenInfoQueryData): IntrospectionGetTokenInfoQueryData | undefined;
export declare function invalidateIntrospectionGetTokenInfo(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllIntrospectionGetTokenInfo(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildIntrospectionGetTokenInfoQuery(client$: GustoEmbeddedCore, request: operations.GetV1TokenInfoRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<IntrospectionGetTokenInfoQueryData>;
};
export declare function queryKeyIntrospectionGetTokenInfo(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=introspectionGetTokenInfo.d.ts.map