import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesRetrieveHomeAddressQueryData = operations.GetV1HomeAddressesHomeAddressUuidResponse;
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
export declare function useEmployeeAddressesRetrieveHomeAddress(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: QueryHookOptions<EmployeeAddressesRetrieveHomeAddressQueryData>): UseQueryResult<EmployeeAddressesRetrieveHomeAddressQueryData, Error>;
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
export declare function useEmployeeAddressesRetrieveHomeAddressSuspense(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesRetrieveHomeAddressQueryData>): UseSuspenseQueryResult<EmployeeAddressesRetrieveHomeAddressQueryData, Error>;
export declare function prefetchEmployeeAddressesRetrieveHomeAddress(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1HomeAddressesHomeAddressUuidRequest): Promise<void>;
export declare function setEmployeeAddressesRetrieveHomeAddressData(client: QueryClient, queryKeyBase: [
    homeAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesRetrieveHomeAddressQueryData): EmployeeAddressesRetrieveHomeAddressQueryData | undefined;
export declare function invalidateEmployeeAddressesRetrieveHomeAddress(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    homeAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesRetrieveHomeAddress(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesRetrieveHomeAddressQuery(client$: GustoEmbeddedCore, request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesRetrieveHomeAddressQueryData>;
};
export declare function queryKeyEmployeeAddressesRetrieveHomeAddress(homeAddressUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesRetrieveHomeAddress.d.ts.map