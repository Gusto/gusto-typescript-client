import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesListAdminsQueryData = operations.GetV1CompaniesCompanyIdAdminsResponse;
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function useCompaniesListAdmins(request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: QueryHookOptions<CompaniesListAdminsQueryData>): UseQueryResult<CompaniesListAdminsQueryData, Error>;
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function useCompaniesListAdminsSuspense(request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: SuspenseQueryHookOptions<CompaniesListAdminsQueryData>): UseSuspenseQueryResult<CompaniesListAdminsQueryData, Error>;
export declare function prefetchCompaniesListAdmins(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdAdminsRequest): Promise<void>;
export declare function setCompaniesListAdminsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesListAdminsQueryData): CompaniesListAdminsQueryData | undefined;
export declare function invalidateCompaniesListAdmins(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesListAdmins(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesListAdminsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesListAdminsQueryData>;
};
export declare function queryKeyCompaniesListAdmins(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesListAdmins.d.ts.map