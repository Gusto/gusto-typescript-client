import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetForCompanyQueryData = Array<components.PaySchedule>;
/**
 * Get the pay schedules for a company
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetForCompany(request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: QueryHookOptions<PaySchedulesGetForCompanyQueryData>): UseQueryResult<PaySchedulesGetForCompanyQueryData, Error>;
/**
 * Get the pay schedules for a company
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetForCompanySuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetForCompanyQueryData>): UseSuspenseQueryResult<PaySchedulesGetForCompanyQueryData, Error>;
export declare function prefetchPaySchedulesGetForCompany(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest): Promise<void>;
export declare function setPaySchedulesGetForCompanyData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetForCompanyQueryData): PaySchedulesGetForCompanyQueryData | undefined;
export declare function invalidatePaySchedulesGetForCompany(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetForCompany(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetForCompanyQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetForCompanyQueryData>;
};
export declare function queryKeyPaySchedulesGetForCompany(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetForCompany.d.ts.map