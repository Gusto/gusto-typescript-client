import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesGetWorkAddressQueryData = components.EmployeeWorkAddress;
/**
 * Get an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetWorkAddress(request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: QueryHookOptions<EmployeeAddressesGetWorkAddressQueryData>): UseQueryResult<EmployeeAddressesGetWorkAddressQueryData, Error>;
/**
 * Get an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesGetWorkAddressSuspense(request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesGetWorkAddressQueryData>): UseSuspenseQueryResult<EmployeeAddressesGetWorkAddressQueryData, Error>;
export declare function prefetchEmployeeAddressesGetWorkAddress(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1WorkAddressesWorkAddressUuidRequest): Promise<void>;
export declare function setEmployeeAddressesGetWorkAddressData(client: QueryClient, queryKeyBase: [
    workAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesGetWorkAddressQueryData): EmployeeAddressesGetWorkAddressQueryData | undefined;
export declare function invalidateEmployeeAddressesGetWorkAddress(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    workAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesGetWorkAddress(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesGetWorkAddressQuery(client$: GustoEmbeddedCore, request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesGetWorkAddressQueryData>;
};
export declare function queryKeyEmployeeAddressesGetWorkAddress(workAddressUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesGetWorkAddress.d.ts.map