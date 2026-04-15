import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GarnishmentsFetchQueryData = components.Garnishment;
/**
 * Get a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsFetch(request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: QueryHookOptions<GarnishmentsFetchQueryData>): UseQueryResult<GarnishmentsFetchQueryData, Error>;
/**
 * Get a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsFetchSuspense(request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: SuspenseQueryHookOptions<GarnishmentsFetchQueryData>): UseSuspenseQueryResult<GarnishmentsFetchQueryData, Error>;
export declare function prefetchGarnishmentsFetch(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsGarnishmentIdRequest): Promise<void>;
export declare function setGarnishmentsFetchData(client: QueryClient, queryKeyBase: [
    garnishmentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GarnishmentsFetchQueryData): GarnishmentsFetchQueryData | undefined;
export declare function invalidateGarnishmentsFetch(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    garnishmentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGarnishmentsFetch(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGarnishmentsFetchQuery(client$: GustoEmbeddedCore, request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsFetchQueryData>;
};
export declare function queryKeyGarnishmentsFetch(garnishmentId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsFetch.d.ts.map