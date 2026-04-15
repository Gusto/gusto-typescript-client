import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GarnishmentsGetChildSupportDataQueryData = operations.GetV1GarnishmentsChildSupportResponse;
/**
 * Get child support garnishment data
 *
 * @remarks
 * Agency data and requirements to be used for creating child support garnishments
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetChildSupportData(request: operations.GetV1GarnishmentsChildSupportRequest, options?: QueryHookOptions<GarnishmentsGetChildSupportDataQueryData>): UseQueryResult<GarnishmentsGetChildSupportDataQueryData, Error>;
/**
 * Get child support garnishment data
 *
 * @remarks
 * Agency data and requirements to be used for creating child support garnishments
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetChildSupportDataSuspense(request: operations.GetV1GarnishmentsChildSupportRequest, options?: SuspenseQueryHookOptions<GarnishmentsGetChildSupportDataQueryData>): UseSuspenseQueryResult<GarnishmentsGetChildSupportDataQueryData, Error>;
export declare function prefetchGarnishmentsGetChildSupportData(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsChildSupportRequest): Promise<void>;
export declare function setGarnishmentsGetChildSupportDataData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GarnishmentsGetChildSupportDataQueryData): GarnishmentsGetChildSupportDataQueryData | undefined;
export declare function invalidateGarnishmentsGetChildSupportData(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGarnishmentsGetChildSupportData(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGarnishmentsGetChildSupportDataQuery(client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsGetChildSupportDataQueryData>;
};
export declare function queryKeyGarnishmentsGetChildSupportData(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsGetChildSupportData.d.ts.map