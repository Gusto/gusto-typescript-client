import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorDocumentsGetAllQueryData = operations.GetV1ContractorDocumentsResponse;
/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsGetAll(request: operations.GetV1ContractorDocumentsRequest, options?: QueryHookOptions<ContractorDocumentsGetAllQueryData>): UseQueryResult<ContractorDocumentsGetAllQueryData, Error>;
/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsGetAllSuspense(request: operations.GetV1ContractorDocumentsRequest, options?: SuspenseQueryHookOptions<ContractorDocumentsGetAllQueryData>): UseSuspenseQueryResult<ContractorDocumentsGetAllQueryData, Error>;
export declare function prefetchContractorDocumentsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentsRequest): Promise<void>;
export declare function setContractorDocumentsGetAllData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorDocumentsGetAllQueryData): ContractorDocumentsGetAllQueryData | undefined;
export declare function invalidateContractorDocumentsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorDocumentsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorDocumentsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorDocumentsGetAllQueryData>;
};
export declare function queryKeyContractorDocumentsGetAll(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorDocumentsGetAll.d.ts.map