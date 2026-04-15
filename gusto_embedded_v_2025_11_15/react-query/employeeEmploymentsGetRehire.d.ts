import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeEmploymentsGetRehireQueryData = operations.GetV1EmployeesEmployeeIdRehireResponse;
/**
 * Get an employee rehire
 *
 * @remarks
 * Retrieve an employee's rehire, which contains information on when the employee returns to work.
 *
 * scope: `employments:read`
 */
export declare function useEmployeeEmploymentsGetRehire(request: operations.GetV1EmployeesEmployeeIdRehireRequest, options?: QueryHookOptions<EmployeeEmploymentsGetRehireQueryData>): UseQueryResult<EmployeeEmploymentsGetRehireQueryData, Error>;
/**
 * Get an employee rehire
 *
 * @remarks
 * Retrieve an employee's rehire, which contains information on when the employee returns to work.
 *
 * scope: `employments:read`
 */
export declare function useEmployeeEmploymentsGetRehireSuspense(request: operations.GetV1EmployeesEmployeeIdRehireRequest, options?: SuspenseQueryHookOptions<EmployeeEmploymentsGetRehireQueryData>): UseSuspenseQueryResult<EmployeeEmploymentsGetRehireQueryData, Error>;
export declare function prefetchEmployeeEmploymentsGetRehire(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdRehireRequest): Promise<void>;
export declare function setEmployeeEmploymentsGetRehireData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeEmploymentsGetRehireQueryData): EmployeeEmploymentsGetRehireQueryData | undefined;
export declare function invalidateEmployeeEmploymentsGetRehire(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeEmploymentsGetRehire(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeEmploymentsGetRehireQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeEmploymentsGetRehireQueryData>;
};
export declare function queryKeyEmployeeEmploymentsGetRehire(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeEmploymentsGetRehire.d.ts.map