import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetHomeByIdQueryData = components.EmployeeAddress;
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
export declare function useEmployeeAddressesGetHomeById(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: QueryHookOptions<EmployeeAddressesGetHomeByIdQueryData>): UseQueryResult<EmployeeAddressesGetHomeByIdQueryData, Error>;
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
export declare function useEmployeeAddressesGetHomeByIdSuspense(request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetHomeByIdQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetHomeByIdQueryData, Error>;
export declare function prefetchEmployeeAddressesGetHomeById(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1HomeAddressesHomeAddressUuidRequest): Promise<void>;
export declare function setEmployeeAddressesGetHomeByIdData(client: QueryClient, queryKeyBase: [
    homeAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetHomeByIdQueryData): EmployeeAddressesGetHomeByIdQueryData | undefined;
export declare function invalidateEmployeeAddressesGetHomeById(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    homeAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGetHomeById(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetHomeByIdQuery(client$: GustoEmbeddedCore, request: operations.GetV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetHomeByIdQueryData>;
};
export declare function queryKeyEmployeeAddressesGetHomeById(homeAddressUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGetHomeById.d.ts.map