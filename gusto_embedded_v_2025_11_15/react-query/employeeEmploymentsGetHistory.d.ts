import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeEmploymentsGetHistoryQueryData = operations.GetV1EmployeesEmployeeIdEmploymentHistoryResponse;
/**
 * Get employment history for an employee
 *
 * @remarks
 * Retrieve the employment history for a given employee, which includes termination and rehire.
 *
 * scope: `employments:read`
 */
export declare function useEmployeeEmploymentsGetHistory(request: operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest, options?: QueryHookOptions<EmployeeEmploymentsGetHistoryQueryData>): UseQueryResult<EmployeeEmploymentsGetHistoryQueryData, Error>;
/**
 * Get employment history for an employee
 *
 * @remarks
 * Retrieve the employment history for a given employee, which includes termination and rehire.
 *
 * scope: `employments:read`
 */
export declare function useEmployeeEmploymentsGetHistorySuspense(request: operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest, options?: SuspenseQueryHookOptions<EmployeeEmploymentsGetHistoryQueryData>): UseSuspenseQueryResult<EmployeeEmploymentsGetHistoryQueryData, Error>;
export declare function prefetchEmployeeEmploymentsGetHistory(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest): Promise<void>;
export declare function setEmployeeEmploymentsGetHistoryData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeEmploymentsGetHistoryQueryData): EmployeeEmploymentsGetHistoryQueryData | undefined;
export declare function invalidateEmployeeEmploymentsGetHistory(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeEmploymentsGetHistory(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeEmploymentsGetHistoryQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeEmploymentsGetHistoryQueryData>;
};
export declare function queryKeyEmployeeEmploymentsGetHistory(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeEmploymentsGetHistory.d.ts.map