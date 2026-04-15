import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyFormsGetAllQueryData = operations.GetV1CompanyFormsResponse;
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetAll(request: operations.GetV1CompanyFormsRequest, options?: QueryHookOptions<CompanyFormsGetAllQueryData>): UseQueryResult<CompanyFormsGetAllQueryData, Error>;
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetAllSuspense(request: operations.GetV1CompanyFormsRequest, options?: SuspenseQueryHookOptions<CompanyFormsGetAllQueryData>): UseSuspenseQueryResult<CompanyFormsGetAllQueryData, Error>;
export declare function prefetchCompanyFormsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormsRequest): Promise<void>;
export declare function setCompanyFormsGetAllData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyFormsGetAllQueryData): CompanyFormsGetAllQueryData | undefined;
export declare function invalidateCompanyFormsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyFormsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyFormsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyFormsGetAllQueryData>;
};
export declare function queryKeyCompanyFormsGetAll(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyFormsGetAll.d.ts.map