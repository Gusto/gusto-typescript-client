import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesPreviewQueryData = operations.GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody;
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesPreview(request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: QueryHookOptions<PaySchedulesPreviewQueryData>): UseQueryResult<PaySchedulesPreviewQueryData, Error>;
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesPreviewSuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: SuspenseQueryHookOptions<PaySchedulesPreviewQueryData>): UseSuspenseQueryResult<PaySchedulesPreviewQueryData, Error>;
export declare function prefetchPaySchedulesPreview(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest): Promise<void>;
export declare function setPaySchedulesPreviewData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        frequency: operations.QueryParamFrequency;
        anchorPayDate: string;
        anchorEndOfPayPeriod: string;
        day1?: number | undefined;
        day2?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesPreviewQueryData): PaySchedulesPreviewQueryData | undefined;
export declare function invalidatePaySchedulesPreview(client: QueryClient, queryKeyBase: TupleToPrefixes<[
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
export declare function invalidateAllPaySchedulesPreview(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesPreviewQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesPreviewQueryData>;
};
export declare function queryKeyPaySchedulesPreview(companyId: string, parameters: {
    frequency: operations.QueryParamFrequency;
    anchorPayDate: string;
    anchorEndOfPayPeriod: string;
    day1?: number | undefined;
    day2?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesPreview.d.ts.map