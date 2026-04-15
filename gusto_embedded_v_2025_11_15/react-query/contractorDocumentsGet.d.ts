import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorDocumentsGetQueryData = operations.GetV1ContractorDocumentResponse;
/**
 * Get a contractor document
 *
 * @remarks
 * Get a contractor document.
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsGet(request: operations.GetV1ContractorDocumentRequest, options?: QueryHookOptions<ContractorDocumentsGetQueryData>): UseQueryResult<ContractorDocumentsGetQueryData, Error>;
/**
 * Get a contractor document
 *
 * @remarks
 * Get a contractor document.
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsGetSuspense(request: operations.GetV1ContractorDocumentRequest, options?: SuspenseQueryHookOptions<ContractorDocumentsGetQueryData>): UseSuspenseQueryResult<ContractorDocumentsGetQueryData, Error>;
export declare function prefetchContractorDocumentsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentRequest): Promise<void>;
export declare function setContractorDocumentsGetData(client: QueryClient, queryKeyBase: [
    documentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorDocumentsGetQueryData): ContractorDocumentsGetQueryData | undefined;
export declare function invalidateContractorDocumentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    documentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorDocumentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorDocumentsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorDocumentsGetQueryData>;
};
export declare function queryKeyContractorDocumentsGet(documentUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorDocumentsGet.d.ts.map