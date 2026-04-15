import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TimeOffPoliciesGetAllQueryData = operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse;
/**
 * Get all time off policies
 *
 * @remarks
 * Get all time off policies for a company
 *
 * scope: `time_off_policies:read`
 */
export declare function useTimeOffPoliciesGetAll(request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest, options?: QueryHookOptions<TimeOffPoliciesGetAllQueryData>): UseQueryResult<TimeOffPoliciesGetAllQueryData, Error>;
/**
 * Get all time off policies
 *
 * @remarks
 * Get all time off policies for a company
 *
 * scope: `time_off_policies:read`
 */
export declare function useTimeOffPoliciesGetAllSuspense(request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest, options?: SuspenseQueryHookOptions<TimeOffPoliciesGetAllQueryData>): UseSuspenseQueryResult<TimeOffPoliciesGetAllQueryData, Error>;
export declare function prefetchTimeOffPoliciesGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest): Promise<void>;
export declare function setTimeOffPoliciesGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TimeOffPoliciesGetAllQueryData): TimeOffPoliciesGetAllQueryData | undefined;
export declare function invalidateTimeOffPoliciesGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTimeOffPoliciesGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTimeOffPoliciesGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TimeOffPoliciesGetAllQueryData>;
};
export declare function queryKeyTimeOffPoliciesGetAll(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=timeOffPoliciesGetAll.d.ts.map