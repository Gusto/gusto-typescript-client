import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyAttachmentsGetDetailsQueryData = operations.GetV1CompaniesAttachmentResponse;
/**
 * Get Company Attachment Details
 *
 * @remarks
 * Retrieve the detail of an attachment uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetDetails(request: operations.GetV1CompaniesAttachmentRequest, options?: QueryHookOptions<CompanyAttachmentsGetDetailsQueryData>): UseQueryResult<CompanyAttachmentsGetDetailsQueryData, Error>;
/**
 * Get Company Attachment Details
 *
 * @remarks
 * Retrieve the detail of an attachment uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetDetailsSuspense(request: operations.GetV1CompaniesAttachmentRequest, options?: SuspenseQueryHookOptions<CompanyAttachmentsGetDetailsQueryData>): UseSuspenseQueryResult<CompanyAttachmentsGetDetailsQueryData, Error>;
export declare function prefetchCompanyAttachmentsGetDetails(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentRequest): Promise<void>;
export declare function setCompanyAttachmentsGetDetailsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    companyAttachmentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyAttachmentsGetDetailsQueryData): CompanyAttachmentsGetDetailsQueryData | undefined;
export declare function invalidateCompanyAttachmentsGetDetails(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    companyAttachmentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyAttachmentsGetDetails(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyAttachmentsGetDetailsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyAttachmentsGetDetailsQueryData>;
};
export declare function queryKeyCompanyAttachmentsGetDetails(companyId: string, companyAttachmentUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyAttachmentsGetDetails.d.ts.map