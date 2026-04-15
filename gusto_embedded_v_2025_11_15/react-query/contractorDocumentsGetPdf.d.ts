import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorDocumentsGetPdfQueryData = operations.GetV1ContractorDocumentPdfResponse;
/**
 * Get the contractor document pdf
 *
 * @remarks
 * Get the contractor document pdf.
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsGetPdf(request: operations.GetV1ContractorDocumentPdfRequest, options?: QueryHookOptions<ContractorDocumentsGetPdfQueryData>): UseQueryResult<ContractorDocumentsGetPdfQueryData, Error>;
/**
 * Get the contractor document pdf
 *
 * @remarks
 * Get the contractor document pdf.
 *
 * scope: `contractor_documents:read`
 */
export declare function useContractorDocumentsGetPdfSuspense(request: operations.GetV1ContractorDocumentPdfRequest, options?: SuspenseQueryHookOptions<ContractorDocumentsGetPdfQueryData>): UseSuspenseQueryResult<ContractorDocumentsGetPdfQueryData, Error>;
export declare function prefetchContractorDocumentsGetPdf(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentPdfRequest): Promise<void>;
export declare function setContractorDocumentsGetPdfData(client: QueryClient, queryKeyBase: [
    documentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorDocumentsGetPdfQueryData): ContractorDocumentsGetPdfQueryData | undefined;
export declare function invalidateContractorDocumentsGetPdf(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    documentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorDocumentsGetPdf(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorDocumentsGetPdfQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentPdfRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorDocumentsGetPdfQueryData>;
};
export declare function queryKeyContractorDocumentsGetPdf(documentUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorDocumentsGetPdf.d.ts.map