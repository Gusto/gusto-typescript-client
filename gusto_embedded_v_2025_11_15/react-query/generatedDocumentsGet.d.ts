import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type GeneratedDocumentsGetQueryData = operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse;
/**
 * Get a generated document
 *
 * @remarks
 * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
 *
 * scope: `generated_documents:read`
 */
export declare function useGeneratedDocumentsGet(request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: QueryHookOptions<GeneratedDocumentsGetQueryData>): UseQueryResult<GeneratedDocumentsGetQueryData, Error>;
/**
 * Get a generated document
 *
 * @remarks
 * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
 *
 * scope: `generated_documents:read`
 */
export declare function useGeneratedDocumentsGetSuspense(request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: SuspenseQueryHookOptions<GeneratedDocumentsGetQueryData>): UseSuspenseQueryResult<GeneratedDocumentsGetQueryData, Error>;
export declare function prefetchGeneratedDocumentsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest): Promise<void>;
export declare function setGeneratedDocumentsGetData(client: QueryClient, queryKeyBase: [
    documentType: components.DocumentType,
    requestUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: GeneratedDocumentsGetQueryData): GeneratedDocumentsGetQueryData | undefined;
export declare function invalidateGeneratedDocumentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    documentType: components.DocumentType,
    requestUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGeneratedDocumentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildGeneratedDocumentsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GeneratedDocumentsGetQueryData>;
};
export declare function queryKeyGeneratedDocumentsGet(documentType: components.DocumentType, requestUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=generatedDocumentsGet.d.ts.map