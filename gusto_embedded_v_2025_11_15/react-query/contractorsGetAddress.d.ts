import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorsGetAddressQueryData = operations.GetV1ContractorsContractorUuidAddressResponse;
/**
 * Get a contractor address
 *
 * @remarks
 * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * scope: `contractors:read`
 */
export declare function useContractorsGetAddress(request: operations.GetV1ContractorsContractorUuidAddressRequest, options?: QueryHookOptions<ContractorsGetAddressQueryData>): UseQueryResult<ContractorsGetAddressQueryData, Error>;
/**
 * Get a contractor address
 *
 * @remarks
 * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * scope: `contractors:read`
 */
export declare function useContractorsGetAddressSuspense(request: operations.GetV1ContractorsContractorUuidAddressRequest, options?: SuspenseQueryHookOptions<ContractorsGetAddressQueryData>): UseSuspenseQueryResult<ContractorsGetAddressQueryData, Error>;
export declare function prefetchContractorsGetAddress(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidAddressRequest): Promise<void>;
export declare function setContractorsGetAddressData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorsGetAddressQueryData): ContractorsGetAddressQueryData | undefined;
export declare function invalidateContractorsGetAddress(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorsGetAddress(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorsGetAddressQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidAddressRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorsGetAddressQueryData>;
};
export declare function queryKeyContractorsGetAddress(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorsGetAddress.d.ts.map