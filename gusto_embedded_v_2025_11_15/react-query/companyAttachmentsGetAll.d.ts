import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyAttachmentsGetAllQueryData = Array<components.CompanyAttachment>;
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetAll(request: operations.GetV1CompaniesAttachmentsRequest, options?: QueryHookOptions<CompanyAttachmentsGetAllQueryData>): UseQueryResult<CompanyAttachmentsGetAllQueryData, Error>;
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function useCompanyAttachmentsGetAllSuspense(request: operations.GetV1CompaniesAttachmentsRequest, options?: SuspenseQueryHookOptions<CompanyAttachmentsGetAllQueryData>): UseSuspenseQueryResult<CompanyAttachmentsGetAllQueryData, Error>;
export declare function prefetchCompanyAttachmentsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentsRequest): Promise<void>;
export declare function setCompanyAttachmentsGetAllData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyAttachmentsGetAllQueryData): CompanyAttachmentsGetAllQueryData | undefined;
export declare function invalidateCompanyAttachmentsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyAttachmentsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyAttachmentsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyAttachmentsGetAllQueryData>;
};
export declare function queryKeyCompanyAttachmentsGetAll(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyAttachmentsGetAll.d.ts.map