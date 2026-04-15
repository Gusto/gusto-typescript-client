import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetAllQueryData = operations.GetV1CompaniesCompanyIdPaySchedulesResponse;
/**
 * Get the pay schedules for a company
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetAll(request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: QueryHookOptions<PaySchedulesGetAllQueryData>): UseQueryResult<PaySchedulesGetAllQueryData, Error>;
/**
 * Get the pay schedules for a company
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetAllSuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetAllQueryData>): UseSuspenseQueryResult<PaySchedulesGetAllQueryData, Error>;
export declare function prefetchPaySchedulesGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest): Promise<void>;
export declare function setPaySchedulesGetAllData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetAllQueryData): PaySchedulesGetAllQueryData | undefined;
export declare function invalidatePaySchedulesGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetAllQueryData>;
};
export declare function queryKeyPaySchedulesGetAll(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetAll.d.ts.map