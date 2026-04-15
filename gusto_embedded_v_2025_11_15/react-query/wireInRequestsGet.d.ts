import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WireInRequestsGetQueryData = operations.GetWireInRequestsWireInRequestUuidResponse;
/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsGet(request: operations.GetWireInRequestsWireInRequestUuidRequest, options?: QueryHookOptions<WireInRequestsGetQueryData>): UseQueryResult<WireInRequestsGetQueryData, Error>;
/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsGetSuspense(request: operations.GetWireInRequestsWireInRequestUuidRequest, options?: SuspenseQueryHookOptions<WireInRequestsGetQueryData>): UseSuspenseQueryResult<WireInRequestsGetQueryData, Error>;
export declare function prefetchWireInRequestsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetWireInRequestsWireInRequestUuidRequest): Promise<void>;
export declare function setWireInRequestsGetData(client: QueryClient, queryKeyBase: [
    wireInRequestUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WireInRequestsGetQueryData): WireInRequestsGetQueryData | undefined;
export declare function invalidateWireInRequestsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    wireInRequestUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWireInRequestsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWireInRequestsGetQuery(client$: GustoEmbeddedCore, request: operations.GetWireInRequestsWireInRequestUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WireInRequestsGetQueryData>;
};
export declare function queryKeyWireInRequestsGet(wireInRequestUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=wireInRequestsGet.d.ts.map