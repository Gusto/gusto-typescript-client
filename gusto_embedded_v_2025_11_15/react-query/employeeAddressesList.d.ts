import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesListQueryData = Array<components.EmployeeWorkAddress>;
/**
 * Get an employee's work addresses
 *
 * @remarks
 * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
 * signifying if it is the currently active work address.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesList(request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: QueryHookOptions<EmployeeAddressesListQueryData>): UseQueryResult<EmployeeAddressesListQueryData, Error>;
/**
 * Get an employee's work addresses
 *
 * @remarks
 * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
 * signifying if it is the currently active work address.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesListSuspense(request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesListQueryData>): UseSuspenseQueryResult<EmployeeAddressesListQueryData, Error>;
export declare function prefetchEmployeeAddressesList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest): Promise<void>;
export declare function setEmployeeAddressesListData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesListQueryData): EmployeeAddressesListQueryData | undefined;
export declare function invalidateEmployeeAddressesList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesListQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesListQueryData>;
};
export declare function queryKeyEmployeeAddressesList(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesList.d.ts.map