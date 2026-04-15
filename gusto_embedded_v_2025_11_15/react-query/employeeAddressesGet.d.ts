import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetQueryData = operations.GetV1EmployeesEmployeeIdHomeAddressesResponse;
/**
 * Get an employee's home addresses
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGet(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: QueryHookOptions<EmployeeAddressesGetQueryData>): UseQueryResult<EmployeeAddressesGetQueryData, Error>;
/**
 * Get an employee's home addresses
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetSuspense(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetQueryData, Error>;
export declare function prefetchEmployeeAddressesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest): Promise<void>;
export declare function setEmployeeAddressesGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetQueryData): EmployeeAddressesGetQueryData | undefined;
export declare function invalidateEmployeeAddressesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetQueryData>;
};
export declare function queryKeyEmployeeAddressesGet(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGet.d.ts.map