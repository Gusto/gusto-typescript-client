import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesGetCustomFieldsQueryData = operations.GetV1EmployeesEmployeeIdCustomFieldsResponse;
/**
 * Get an employee's custom fields
 *
 * @remarks
 * Returns a list of the employee's custom fields.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesGetCustomFields(request: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest, options?: QueryHookOptions<EmployeesGetCustomFieldsQueryData>): UseQueryResult<EmployeesGetCustomFieldsQueryData, Error>;
/**
 * Get an employee's custom fields
 *
 * @remarks
 * Returns a list of the employee's custom fields.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesGetCustomFieldsSuspense(request: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest, options?: SuspenseQueryHookOptions<EmployeesGetCustomFieldsQueryData>): UseSuspenseQueryResult<EmployeesGetCustomFieldsQueryData, Error>;
export declare function prefetchEmployeesGetCustomFields(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest): Promise<void>;
export declare function setEmployeesGetCustomFieldsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesGetCustomFieldsQueryData): EmployeesGetCustomFieldsQueryData | undefined;
export declare function invalidateEmployeesGetCustomFields(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeesGetCustomFields(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesGetCustomFieldsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesGetCustomFieldsQueryData>;
};
export declare function queryKeyEmployeesGetCustomFields(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesGetCustomFields.d.ts.map