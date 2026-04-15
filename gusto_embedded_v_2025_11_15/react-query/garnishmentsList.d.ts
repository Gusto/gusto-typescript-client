import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GarnishmentsListQueryData = operations.GetV1EmployeesEmployeeIdGarnishmentsResponse;
/**
 * Get garnishments for an employee
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsList(request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: QueryHookOptions<GarnishmentsListQueryData>): UseQueryResult<GarnishmentsListQueryData, Error>;
/**
 * Get garnishments for an employee
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsListSuspense(request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: SuspenseQueryHookOptions<GarnishmentsListQueryData>): UseSuspenseQueryResult<GarnishmentsListQueryData, Error>;
export declare function prefetchGarnishmentsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest): Promise<void>;
export declare function setGarnishmentsListData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GarnishmentsListQueryData): GarnishmentsListQueryData | undefined;
export declare function invalidateGarnishmentsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGarnishmentsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGarnishmentsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsListQueryData>;
};
export declare function queryKeyGarnishmentsList(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsList.d.ts.map