import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesFormsListQueryData = Array<components.Form>;
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function useCompaniesFormsList(request: operations.GetV1CompanyFormsRequest, options?: QueryHookOptions<CompaniesFormsListQueryData>): UseQueryResult<CompaniesFormsListQueryData, Error>;
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function useCompaniesFormsListSuspense(request: operations.GetV1CompanyFormsRequest, options?: SuspenseQueryHookOptions<CompaniesFormsListQueryData>): UseSuspenseQueryResult<CompaniesFormsListQueryData, Error>;
export declare function prefetchCompaniesFormsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormsRequest): Promise<void>;
export declare function setCompaniesFormsListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesFormsListQueryData): CompaniesFormsListQueryData | undefined;
export declare function invalidateCompaniesFormsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesFormsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesFormsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesFormsListQueryData>;
};
export declare function queryKeyCompaniesFormsList(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesFormsList.d.ts.map