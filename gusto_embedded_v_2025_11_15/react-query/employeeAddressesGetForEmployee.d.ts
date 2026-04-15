import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetForEmployeeQueryData = Array<components.EmployeeAddress>;
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
export declare function useEmployeeAddressesGetForEmployee(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: QueryHookOptions<EmployeeAddressesGetForEmployeeQueryData>): UseQueryResult<EmployeeAddressesGetForEmployeeQueryData, Error>;
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
export declare function useEmployeeAddressesGetForEmployeeSuspense(request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetForEmployeeQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetForEmployeeQueryData, Error>;
export declare function prefetchEmployeeAddressesGetForEmployee(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest): Promise<void>;
export declare function setEmployeeAddressesGetForEmployeeData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetForEmployeeQueryData): EmployeeAddressesGetForEmployeeQueryData | undefined;
export declare function invalidateEmployeeAddressesGetForEmployee(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGetForEmployee(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetForEmployeeQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdHomeAddressesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetForEmployeeQueryData>;
};
export declare function queryKeyEmployeeAddressesGetForEmployee(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGetForEmployee.d.ts.map