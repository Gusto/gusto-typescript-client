import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { DocumentType } from "../models/components/documenttype.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest } from "../models/operations/getv1generateddocumentsdocumenttyperequestuuid.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildGeneratedDocumentsGetQuery, GeneratedDocumentsGetQueryData, prefetchGeneratedDocumentsGet, queryKeyGeneratedDocumentsGet } from "./generatedDocumentsGet.core.js";
export { buildGeneratedDocumentsGetQuery, type GeneratedDocumentsGetQueryData, prefetchGeneratedDocumentsGet, queryKeyGeneratedDocumentsGet, };
export type GeneratedDocumentsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get a generated document
 *
 * @remarks
 * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
 *
 * scope: `generated_documents:read`
 */
export declare function useGeneratedDocumentsGet(request: GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: QueryHookOptions<GeneratedDocumentsGetQueryData, GeneratedDocumentsGetQueryError>): UseQueryResult<GeneratedDocumentsGetQueryData, GeneratedDocumentsGetQueryError>;
/**
 * Get a generated document
 *
 * @remarks
 * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
 *
 * scope: `generated_documents:read`
 */
export declare function useGeneratedDocumentsGetSuspense(request: GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: SuspenseQueryHookOptions<GeneratedDocumentsGetQueryData, GeneratedDocumentsGetQueryError>): UseSuspenseQueryResult<GeneratedDocumentsGetQueryData, GeneratedDocumentsGetQueryError>;
export declare function setGeneratedDocumentsGetData(client: QueryClient, queryKeyBase: [
    documentType: DocumentType,
    requestUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: GeneratedDocumentsGetQueryData): GeneratedDocumentsGetQueryData | undefined;
export declare function invalidateGeneratedDocumentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    documentType: DocumentType,
    requestUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllGeneratedDocumentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=generatedDocumentsGet.d.ts.map