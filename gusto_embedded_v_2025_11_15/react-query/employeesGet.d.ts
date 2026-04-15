import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesGetQueryData = operations.GetV1EmployeesResponse;
/**
 * Get an employee
 *
 * @remarks
 * Get an employee.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesGet(request: operations.GetV1EmployeesRequest, options?: QueryHookOptions<EmployeesGetQueryData>): UseQueryResult<EmployeesGetQueryData, Error>;
/**
 * Get an employee
 *
 * @remarks
 * Get an employee.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesGetSuspense(request: operations.GetV1EmployeesRequest, options?: SuspenseQueryHookOptions<EmployeesGetQueryData>): UseSuspenseQueryResult<EmployeesGetQueryData, Error>;
export declare function prefetchEmployeesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesRequest): Promise<void>;
export declare function setEmployeesGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        include?: Array<operations.QueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesGetQueryData): EmployeesGetQueryData | undefined;
export declare function invalidateEmployeesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        include?: Array<operations.QueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesGetQueryData>;
};
export declare function queryKeyEmployeesGet(employeeId: string, parameters: {
    include?: Array<operations.QueryParamInclude> | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesGet.d.ts.map