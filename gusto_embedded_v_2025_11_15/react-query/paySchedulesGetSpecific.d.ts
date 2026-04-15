import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetSpecificQueryData = components.PaySchedule;
/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetSpecific(request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: QueryHookOptions<PaySchedulesGetSpecificQueryData>): UseQueryResult<PaySchedulesGetSpecificQueryData, Error>;
/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetSpecificSuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetSpecificQueryData>): UseSuspenseQueryResult<PaySchedulesGetSpecificQueryData, Error>;
export declare function prefetchPaySchedulesGetSpecific(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest): Promise<void>;
export declare function setPaySchedulesGetSpecificData(client: QueryClient, queryKeyBase: [
    companyId: string,
    payScheduleId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetSpecificQueryData): PaySchedulesGetSpecificQueryData | undefined;
export declare function invalidatePaySchedulesGetSpecific(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    payScheduleId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetSpecific(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetSpecificQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetSpecificQueryData>;
};
export declare function queryKeyPaySchedulesGetSpecific(companyId: string, payScheduleId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetSpecific.d.ts.map