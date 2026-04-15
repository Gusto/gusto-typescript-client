import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GarnishmentsGetChildSupportQueryData = components.ChildSupportData;
/**
 * Get child support garnishment data
 *
 * @remarks
 * Agency data and requirements to be used for creating child support garnishments
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetChildSupport(request: operations.GetV1GarnishmentsChildSupportRequest, options?: QueryHookOptions<GarnishmentsGetChildSupportQueryData>): UseQueryResult<GarnishmentsGetChildSupportQueryData, Error>;
/**
 * Get child support garnishment data
 *
 * @remarks
 * Agency data and requirements to be used for creating child support garnishments
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetChildSupportSuspense(request: operations.GetV1GarnishmentsChildSupportRequest, options?: SuspenseQueryHookOptions<GarnishmentsGetChildSupportQueryData>): UseSuspenseQueryResult<GarnishmentsGetChildSupportQueryData, Error>;
export declare function prefetchGarnishmentsGetChildSupport(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsChildSupportRequest): Promise<void>;
export declare function setGarnishmentsGetChildSupportData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GarnishmentsGetChildSupportQueryData): GarnishmentsGetChildSupportQueryData | undefined;
export declare function invalidateGarnishmentsGetChildSupport(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGarnishmentsGetChildSupport(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGarnishmentsGetChildSupportQuery(client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsGetChildSupportQueryData>;
};
export declare function queryKeyGarnishmentsGetChildSupport(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsGetChildSupport.d.ts.map