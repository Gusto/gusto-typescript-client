import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorDocumentsListQueryData = Array<components.Document>;
/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsList(request: operations.GetV1ContractorDocumentsRequest, options?: QueryHookOptions<ContractorDocumentsListQueryData>): UseQueryResult<ContractorDocumentsListQueryData, Error>;
/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsListSuspense(request: operations.GetV1ContractorDocumentsRequest, options?: SuspenseQueryHookOptions<ContractorDocumentsListQueryData>): UseSuspenseQueryResult<ContractorDocumentsListQueryData, Error>;
export declare function prefetchContractorDocumentsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentsRequest): Promise<void>;
export declare function setContractorDocumentsListData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorDocumentsListQueryData): ContractorDocumentsListQueryData | undefined;
export declare function invalidateContractorDocumentsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorDocumentsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorDocumentsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorDocumentsListQueryData>;
};
export declare function queryKeyContractorDocumentsList(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorDocumentsList.d.ts.map