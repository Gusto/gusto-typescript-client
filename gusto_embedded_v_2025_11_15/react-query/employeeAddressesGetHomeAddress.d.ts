import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetHomeAddressQueryData = components.EmployeeAddress;
/**
 * Get an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetHomeAddress(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: QueryHookOptions<EmployeeAddressesGetHomeAddressQueryData>): UseQueryResult<EmployeeAddressesGetHomeAddressQueryData, Error>;
/**
 * Get an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetHomeAddressSuspense(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetHomeAddressQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetHomeAddressQueryData, Error>;
export declare function prefetchEmployeeAddressesGetHomeAddress(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1HomeAddressesHomeAddressUuidRequest): Promise<void>;
export declare function setEmployeeAddressesGetHomeAddressData(client: QueryClient, queryKeyBase: [
    homeAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetHomeAddressQueryData): EmployeeAddressesGetHomeAddressQueryData | undefined;
export declare function invalidateEmployeeAddressesGetHomeAddress(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    homeAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGetHomeAddress(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetHomeAddressQuery(client$: GustoEmbeddedCore, request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetHomeAddressQueryData>;
};
export declare function queryKeyEmployeeAddressesGetHomeAddress(homeAddressUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGetHomeAddress.d.ts.map