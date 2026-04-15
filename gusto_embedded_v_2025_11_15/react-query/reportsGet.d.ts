import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ReportsGetQueryData = operations.GetReportsReportUuidResponse;
/**
 * Get a report
 *
 * @remarks
 * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
 *
 * scope: `company_reports:read`
 */
export declare function useReportsGet(request: operations.GetReportsReportUuidRequest, options?: QueryHookOptions<ReportsGetQueryData>): UseQueryResult<ReportsGetQueryData, Error>;
/**
 * Get a report
 *
 * @remarks
 * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
 *
 * scope: `company_reports:read`
 */
export declare function useReportsGetSuspense(request: operations.GetReportsReportUuidRequest, options?: SuspenseQueryHookOptions<ReportsGetQueryData>): UseSuspenseQueryResult<ReportsGetQueryData, Error>;
export declare function prefetchReportsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetReportsReportUuidRequest): Promise<void>;
export declare function setReportsGetData(client: QueryClient, queryKeyBase: [
    reportUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ReportsGetQueryData): ReportsGetQueryData | undefined;
export declare function invalidateReportsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    reportUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllReportsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildReportsGetQuery(client$: GustoEmbeddedCore, request: operations.GetReportsReportUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ReportsGetQueryData>;
};
export declare function queryKeyReportsGet(reportUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=reportsGet.d.ts.map