import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesRetrieveQueryData = components.Employee;
/**
 * Get an employee
 *
 * @remarks
 * Get an employee.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesRetrieve(request: operations.GetV1EmployeesRequest, options?: QueryHookOptions<EmployeesRetrieveQueryData>): UseQueryResult<EmployeesRetrieveQueryData, Error>;
/**
 * Get an employee
 *
 * @remarks
 * Get an employee.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesRetrieveSuspense(request: operations.GetV1EmployeesRequest, options?: SuspenseQueryHookOptions<EmployeesRetrieveQueryData>): UseSuspenseQueryResult<EmployeesRetrieveQueryData, Error>;
export declare function prefetchEmployeesRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesRequest): Promise<void>;
export declare function setEmployeesRetrieveData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        include?: Array<operations.QueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesRetrieveQueryData): EmployeesRetrieveQueryData | undefined;
export declare function invalidateEmployeesRetrieve(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        include?: Array<operations.QueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeesRetrieve(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesRetrieveQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesRetrieveQueryData>;
};
export declare function queryKeyEmployeesRetrieve(employeeId: string, parameters: {
    include?: Array<operations.QueryParamInclude> | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesRetrieve.d.ts.map