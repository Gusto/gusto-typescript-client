import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesGetCustomFieldsQueryData = operations.GetV1CompaniesCompanyIdCustomFieldsResponse;
/**
 * Get the custom fields of a company
 *
 * @remarks
 * Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company
 *
 * scope: `companies:read`
 */
export declare function useCompaniesGetCustomFields(request: operations.GetV1CompaniesCompanyIdCustomFieldsRequest, options?: QueryHookOptions<CompaniesGetCustomFieldsQueryData>): UseQueryResult<CompaniesGetCustomFieldsQueryData, Error>;
/**
 * Get the custom fields of a company
 *
 * @remarks
 * Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company
 *
 * scope: `companies:read`
 */
export declare function useCompaniesGetCustomFieldsSuspense(request: operations.GetV1CompaniesCompanyIdCustomFieldsRequest, options?: SuspenseQueryHookOptions<CompaniesGetCustomFieldsQueryData>): UseSuspenseQueryResult<CompaniesGetCustomFieldsQueryData, Error>;
export declare function prefetchCompaniesGetCustomFields(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCustomFieldsRequest): Promise<void>;
export declare function setCompaniesGetCustomFieldsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesGetCustomFieldsQueryData): CompaniesGetCustomFieldsQueryData | undefined;
export declare function invalidateCompaniesGetCustomFields(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesGetCustomFields(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesGetCustomFieldsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCustomFieldsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesGetCustomFieldsQueryData>;
};
export declare function queryKeyCompaniesGetCustomFields(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesGetCustomFields.d.ts.map