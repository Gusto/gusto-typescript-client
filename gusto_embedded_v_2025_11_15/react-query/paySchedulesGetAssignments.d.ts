import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetAssignmentsQueryData = operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse;
/**
 * Get pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetAssignments(request: operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, options?: QueryHookOptions<PaySchedulesGetAssignmentsQueryData>): UseQueryResult<PaySchedulesGetAssignmentsQueryData, Error>;
/**
 * Get pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.
 *
 * scope: `pay_schedules:read`
 */
export declare function usePaySchedulesGetAssignmentsSuspense(request: operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetAssignmentsQueryData>): UseSuspenseQueryResult<PaySchedulesGetAssignmentsQueryData, Error>;
export declare function prefetchPaySchedulesGetAssignments(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest): Promise<void>;
export declare function setPaySchedulesGetAssignmentsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetAssignmentsQueryData): PaySchedulesGetAssignmentsQueryData | undefined;
export declare function invalidatePaySchedulesGetAssignments(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetAssignments(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetAssignmentsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetAssignmentsQueryData>;
};
export declare function queryKeyPaySchedulesGetAssignments(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetAssignments.d.ts.map