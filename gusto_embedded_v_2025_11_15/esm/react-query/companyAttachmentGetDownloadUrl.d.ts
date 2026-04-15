import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesAttachmentUrlRequest } from "../models/operations/getv1companiesattachmenturl.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildCompanyAttachmentGetDownloadUrlQuery, CompanyAttachmentGetDownloadUrlQueryData, prefetchCompanyAttachmentGetDownloadUrl, queryKeyCompanyAttachmentGetDownloadUrl } from "./companyAttachmentGetDownloadUrl.core.js";
export { buildCompanyAttachmentGetDownloadUrlQuery, type CompanyAttachmentGetDownloadUrlQueryData, prefetchCompanyAttachmentGetDownloadUrl, queryKeyCompanyAttachmentGetDownloadUrl, };
export type CompanyAttachmentGetDownloadUrlQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get a temporary url to download the Company Attachment file
 *
 * @remarks
 * Retrieve a temporary url to download a attachment file uploaded
 * by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentGetDownloadUrl(request: GetV1CompaniesAttachmentUrlRequest, options?: QueryHookOptions<CompanyAttachmentGetDownloadUrlQueryData, CompanyAttachmentGetDownloadUrlQueryError>): UseQueryResult<CompanyAttachmentGetDownloadUrlQueryData, CompanyAttachmentGetDownloadUrlQueryError>;
/**
 * Get a temporary url to download the Company Attachment file
 *
 * @remarks
 * Retrieve a temporary url to download a attachment file uploaded
 * by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentGetDownloadUrlSuspense(request: GetV1CompaniesAttachmentUrlRequest, options?: SuspenseQueryHookOptions<CompanyAttachmentGetDownloadUrlQueryData, CompanyAttachmentGetDownloadUrlQueryError>): UseSuspenseQueryResult<CompanyAttachmentGetDownloadUrlQueryData, CompanyAttachmentGetDownloadUrlQueryError>;
export declare function setCompanyAttachmentGetDownloadUrlData(client: QueryClient, queryKeyBase: [
    companyId: string,
    companyAttachmentUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: CompanyAttachmentGetDownloadUrlQueryData): CompanyAttachmentGetDownloadUrlQueryData | undefined;
export declare function invalidateCompanyAttachmentGetDownloadUrl(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    companyAttachmentUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyAttachmentGetDownloadUrl(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=companyAttachmentGetDownloadUrl.d.ts.map