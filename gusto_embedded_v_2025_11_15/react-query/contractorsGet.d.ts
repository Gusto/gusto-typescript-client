import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorsGetQueryData = operations.GetV1ContractorsContractorUuidResponse;
/**
 * Get a contractor
 *
 * @remarks
 * Get a contractor.
 *
 * scope: `contractors:read`
 */
export declare function useContractorsGet(request: operations.GetV1ContractorsContractorUuidRequest, options?: QueryHookOptions<ContractorsGetQueryData>): UseQueryResult<ContractorsGetQueryData, Error>;
/**
 * Get a contractor
 *
 * @remarks
 * Get a contractor.
 *
 * scope: `contractors:read`
 */
export declare function useContractorsGetSuspense(request: operations.GetV1ContractorsContractorUuidRequest, options?: SuspenseQueryHookOptions<ContractorsGetQueryData>): UseSuspenseQueryResult<ContractorsGetQueryData, Error>;
export declare function prefetchContractorsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidRequest): Promise<void>;
export declare function setContractorsGetData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorsGetQueryData): ContractorsGetQueryData | undefined;
export declare function invalidateContractorsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorsGetQueryData>;
};
export declare function queryKeyContractorsGet(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorsGet.d.ts.map