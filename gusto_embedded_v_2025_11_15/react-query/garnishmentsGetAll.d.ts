import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GarnishmentsGetAllQueryData = Array<components.Garnishment>;
/**
 * Get garnishments for an employee
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetAll(request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: QueryHookOptions<GarnishmentsGetAllQueryData>): UseQueryResult<GarnishmentsGetAllQueryData, Error>;
/**
 * Get garnishments for an employee
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export declare function useGarnishmentsGetAllSuspense(request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: SuspenseQueryHookOptions<GarnishmentsGetAllQueryData>): UseSuspenseQueryResult<GarnishmentsGetAllQueryData, Error>;
export declare function prefetchGarnishmentsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest): Promise<void>;
export declare function setGarnishmentsGetAllData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GarnishmentsGetAllQueryData): GarnishmentsGetAllQueryData | undefined;
export declare function invalidateGarnishmentsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGarnishmentsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGarnishmentsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsGetAllQueryData>;
};
export declare function queryKeyGarnishmentsGetAll(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsGetAll.d.ts.map