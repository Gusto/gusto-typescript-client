import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetHomeAddressesQueryData = Array<components.EmployeeAddress>;
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
export declare function useEmployeeAddressesGetHomeAddresses(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: QueryHookOptions<EmployeeAddressesGetHomeAddressesQueryData>): UseQueryResult<EmployeeAddressesGetHomeAddressesQueryData, Error>;
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
export declare function useEmployeeAddressesGetHomeAddressesSuspense(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetHomeAddressesQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetHomeAddressesQueryData, Error>;
export declare function prefetchEmployeeAddressesGetHomeAddresses(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest): Promise<void>;
export declare function setEmployeeAddressesGetHomeAddressesData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetHomeAddressesQueryData): EmployeeAddressesGetHomeAddressesQueryData | undefined;
export declare function invalidateEmployeeAddressesGetHomeAddresses(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGetHomeAddresses(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetHomeAddressesQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetHomeAddressesQueryData>;
};
export declare function queryKeyEmployeeAddressesGetHomeAddresses(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGetHomeAddresses.d.ts.map