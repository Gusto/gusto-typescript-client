import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesGetQueryData = operations.GetV1CompaniesResponse;
/**
 * Get a company
 *
 * @remarks
 * Get a company.
 * The employees:read scope is required to return home_address and non-work locations.
 * The company_admin:read scope is required to return primary_payroll_admin.
 * The signatories:read scope is required to return primary_signatory.
 *
 * scope: `companies:read`
 */
export declare function useCompaniesGet(request: operations.GetV1CompaniesRequest, options?: QueryHookOptions<CompaniesGetQueryData>): UseQueryResult<CompaniesGetQueryData, Error>;
/**
 * Get a company
 *
 * @remarks
 * Get a company.
 * The employees:read scope is required to return home_address and non-work locations.
 * The company_admin:read scope is required to return primary_payroll_admin.
 * The signatories:read scope is required to return primary_signatory.
 *
 * scope: `companies:read`
 */
export declare function useCompaniesGetSuspense(request: operations.GetV1CompaniesRequest, options?: SuspenseQueryHookOptions<CompaniesGetQueryData>): UseSuspenseQueryResult<CompaniesGetQueryData, Error>;
export declare function prefetchCompaniesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesRequest): Promise<void>;
export declare function setCompaniesGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesGetQueryData): CompaniesGetQueryData | undefined;
export declare function invalidateCompaniesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesGetQueryData>;
};
export declare function queryKeyCompaniesGet(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesGet.d.ts.map