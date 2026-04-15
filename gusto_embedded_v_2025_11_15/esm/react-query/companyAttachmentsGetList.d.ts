import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesAttachmentsRequest } from "../models/operations/getv1companiesattachments.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildCompanyAttachmentsGetListQuery, CompanyAttachmentsGetListQueryData, prefetchCompanyAttachmentsGetList, queryKeyCompanyAttachmentsGetList } from "./companyAttachmentsGetList.core.js";
export { buildCompanyAttachmentsGetListQuery, type CompanyAttachmentsGetListQueryData, prefetchCompanyAttachmentsGetList, queryKeyCompanyAttachmentsGetList, };
export type CompanyAttachmentsGetListQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetList(request: GetV1CompaniesAttachmentsRequest, options?: QueryHookOptions<CompanyAttachmentsGetListQueryData, CompanyAttachmentsGetListQueryError>): UseQueryResult<CompanyAttachmentsGetListQueryData, CompanyAttachmentsGetListQueryError>;
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetListSuspense(request: GetV1CompaniesAttachmentsRequest, options?: SuspenseQueryHookOptions<CompanyAttachmentsGetListQueryData, CompanyAttachmentsGetListQueryError>): UseSuspenseQueryResult<CompanyAttachmentsGetListQueryData, CompanyAttachmentsGetListQueryError>;
export declare function setCompanyAttachmentsGetListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: CompanyAttachmentsGetListQueryData): CompanyAttachmentsGetListQueryData | undefined;
export declare function invalidateCompanyAttachmentsGetList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyAttachmentsGetList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=companyAttachmentsGetList.d.ts.map