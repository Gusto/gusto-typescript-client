import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetPreviewQueryData = operations.GetV1CompaniesCompanyIdPaySchedulesPreviewResponse;
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesGetPreview(request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: QueryHookOptions<PaySchedulesGetPreviewQueryData>): UseQueryResult<PaySchedulesGetPreviewQueryData, Error>;
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesGetPreviewSuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetPreviewQueryData>): UseSuspenseQueryResult<PaySchedulesGetPreviewQueryData, Error>;
export declare function prefetchPaySchedulesGetPreview(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest): Promise<void>;
export declare function setPaySchedulesGetPreviewData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        frequency: operations.QueryParamFrequency;
        anchorPayDate: string;
        anchorEndOfPayPeriod: string;
        day1?: number | undefined;
        day2?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetPreviewQueryData): PaySchedulesGetPreviewQueryData | undefined;
export declare function invalidatePaySchedulesGetPreview(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        frequency: operations.QueryParamFrequency;
        anchorPayDate: string;
        anchorEndOfPayPeriod: string;
        day1?: number | undefined;
        day2?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetPreview(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetPreviewQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetPreviewQueryData>;
};
export declare function queryKeyPaySchedulesGetPreview(companyId: string, parameters: {
    frequency: operations.QueryParamFrequency;
    anchorPayDate: string;
    anchorEndOfPayPeriod: string;
    day1?: number | undefined;
    day2?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetPreview.d.ts.map