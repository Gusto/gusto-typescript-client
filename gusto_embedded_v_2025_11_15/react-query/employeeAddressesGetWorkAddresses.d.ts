import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetWorkAddressesQueryData = operations.GetV1EmployeesEmployeeIdWorkAddressesResponse;
/**
 * Get an employee's work addresses
 *
 * @remarks
 * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
 * signifying if it is the currently active work address.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetWorkAddresses(request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: QueryHookOptions<EmployeeAddressesGetWorkAddressesQueryData>): UseQueryResult<EmployeeAddressesGetWorkAddressesQueryData, Error>;
/**
 * Get an employee's work addresses
 *
 * @remarks
 * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
 * signifying if it is the currently active work address.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetWorkAddressesSuspense(request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetWorkAddressesQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetWorkAddressesQueryData, Error>;
export declare function prefetchEmployeeAddressesGetWorkAddresses(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest): Promise<void>;
export declare function setEmployeeAddressesGetWorkAddressesData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetWorkAddressesQueryData): EmployeeAddressesGetWorkAddressesQueryData | undefined;
export declare function invalidateEmployeeAddressesGetWorkAddresses(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGetWorkAddresses(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetWorkAddressesQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetWorkAddressesQueryData>;
};
export declare function queryKeyEmployeeAddressesGetWorkAddresses(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGetWorkAddresses.d.ts.map