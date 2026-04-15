import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeAddressesRetrieveWorkAddressQueryData = operations.GetV1WorkAddressesWorkAddressUuidResponse;
/**
 * Get an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesRetrieveWorkAddress(request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: QueryHookOptions<EmployeeAddressesRetrieveWorkAddressQueryData>): UseQueryResult<EmployeeAddressesRetrieveWorkAddressQueryData, Error>;
/**
 * Get an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:read`
 */
export declare function useEmployeeAddressesRetrieveWorkAddressSuspense(request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: SuspenseQueryHookOptions<EmployeeAddressesRetrieveWorkAddressQueryData>): UseSuspenseQueryResult<EmployeeAddressesRetrieveWorkAddressQueryData, Error>;
export declare function prefetchEmployeeAddressesRetrieveWorkAddress(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1WorkAddressesWorkAddressUuidRequest): Promise<void>;
export declare function setEmployeeAddressesRetrieveWorkAddressData(client: QueryClient, queryKeyBase: [
    workAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeAddressesRetrieveWorkAddressQueryData): EmployeeAddressesRetrieveWorkAddressQueryData | undefined;
export declare function invalidateEmployeeAddressesRetrieveWorkAddress(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    workAddressUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeAddressesRetrieveWorkAddress(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeAddressesRetrieveWorkAddressQuery(client$: GustoEmbeddedCore, request: operations.GetV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeAddressesRetrieveWorkAddressQueryData>;
};
export declare function queryKeyEmployeeAddressesRetrieveWorkAddress(workAddressUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeAddressesRetrieveWorkAddress.d.ts.map