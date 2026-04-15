import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyAttachmentGetDownloadUrlQueryData = operations.GetV1CompaniesAttachmentUrlResponse;
/**
 * Get a temporary url to download the Company Attachment file
 *
 * @remarks
 * Retrieve a temporary url to download a attachment file uploaded
 * by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentGetDownloadUrl(request: operations.GetV1CompaniesAttachmentUrlRequest, options?: QueryHookOptions<CompanyAttachmentGetDownloadUrlQueryData>): UseQueryResult<CompanyAttachmentGetDownloadUrlQueryData, Error>;
/**
 * Get a temporary url to download the Company Attachment file
 *
 * @remarks
 * Retrieve a temporary url to download a attachment file uploaded
 * by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentGetDownloadUrlSuspense(request: operations.GetV1CompaniesAttachmentUrlRequest, options?: SuspenseQueryHookOptions<CompanyAttachmentGetDownloadUrlQueryData>): UseSuspenseQueryResult<CompanyAttachmentGetDownloadUrlQueryData, Error>;
export declare function prefetchCompanyAttachmentGetDownloadUrl(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentUrlRequest): Promise<void>;
export declare function setCompanyAttachmentGetDownloadUrlData(client: QueryClient, queryKeyBase: [
    companyId: string,
    companyAttachmentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyAttachmentGetDownloadUrlQueryData): CompanyAttachmentGetDownloadUrlQueryData | undefined;
export declare function invalidateCompanyAttachmentGetDownloadUrl(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    companyAttachmentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyAttachmentGetDownloadUrl(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyAttachmentGetDownloadUrlQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentUrlRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyAttachmentGetDownloadUrlQueryData>;
};
export declare function queryKeyCompanyAttachmentGetDownloadUrl(companyId: string, companyAttachmentUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyAttachmentGetDownloadUrl.d.ts.map