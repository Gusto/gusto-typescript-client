import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyAttachmentsGetListQueryData = operations.GetV1CompaniesAttachmentsResponse;
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetList(request: operations.GetV1CompaniesAttachmentsRequest, options?: QueryHookOptions<CompanyAttachmentsGetListQueryData>): UseQueryResult<CompanyAttachmentsGetListQueryData, Error>;
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetListSuspense(request: operations.GetV1CompaniesAttachmentsRequest, options?: SuspenseQueryHookOptions<CompanyAttachmentsGetListQueryData>): UseSuspenseQueryResult<CompanyAttachmentsGetListQueryData, Error>;
export declare function prefetchCompanyAttachmentsGetList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentsRequest): Promise<void>;
export declare function setCompanyAttachmentsGetListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyAttachmentsGetListQueryData): CompanyAttachmentsGetListQueryData | undefined;
export declare function invalidateCompanyAttachmentsGetList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyAttachmentsGetList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyAttachmentsGetListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyAttachmentsGetListQueryData>;
};
export declare function queryKeyCompanyAttachmentsGetList(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyAttachmentsGetList.d.ts.map