import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetQueryData = operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse;
/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGet(request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: QueryHookOptions<PaySchedulesGetQueryData>): UseQueryResult<PaySchedulesGetQueryData, Error>;
/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetSuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetQueryData>): UseSuspenseQueryResult<PaySchedulesGetQueryData, Error>;
export declare function prefetchPaySchedulesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest): Promise<void>;
export declare function setPaySchedulesGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    payScheduleId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetQueryData): PaySchedulesGetQueryData | undefined;
export declare function invalidatePaySchedulesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    payScheduleId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetQueryData>;
};
export declare function queryKeyPaySchedulesGet(companyId: string, payScheduleId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGet.d.ts.map