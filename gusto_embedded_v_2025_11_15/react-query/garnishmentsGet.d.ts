import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GarnishmentsGetQueryData = operations.GetV1GarnishmentsGarnishmentIdResponse;
/**
 * Get a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGet(request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: QueryHookOptions<GarnishmentsGetQueryData>): UseQueryResult<GarnishmentsGetQueryData, Error>;
/**
 * Get a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetSuspense(request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: SuspenseQueryHookOptions<GarnishmentsGetQueryData>): UseSuspenseQueryResult<GarnishmentsGetQueryData, Error>;
export declare function prefetchGarnishmentsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsGarnishmentIdRequest): Promise<void>;
export declare function setGarnishmentsGetData(client: QueryClient, queryKeyBase: [
    garnishmentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GarnishmentsGetQueryData): GarnishmentsGetQueryData | undefined;
export declare function invalidateGarnishmentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    garnishmentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGarnishmentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGarnishmentsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsGetQueryData>;
};
export declare function queryKeyGarnishmentsGet(garnishmentId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsGet.d.ts.map