import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesGetAdminsQueryData = Array<components.Admin>;
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function useCompaniesGetAdmins(request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: QueryHookOptions<CompaniesGetAdminsQueryData>): UseQueryResult<CompaniesGetAdminsQueryData, Error>;
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function useCompaniesGetAdminsSuspense(request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: SuspenseQueryHookOptions<CompaniesGetAdminsQueryData>): UseSuspenseQueryResult<CompaniesGetAdminsQueryData, Error>;
export declare function prefetchCompaniesGetAdmins(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdAdminsRequest): Promise<void>;
export declare function setCompaniesGetAdminsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesGetAdminsQueryData): CompaniesGetAdminsQueryData | undefined;
export declare function invalidateCompaniesGetAdmins(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesGetAdmins(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesGetAdminsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesGetAdminsQueryData>;
};
export declare function queryKeyCompaniesGetAdmins(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesGetAdmins.d.ts.map