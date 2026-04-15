import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyFormsGetQueryData = operations.GetV1CompanyFormResponse;
/**
 * Get a company form
 *
 * @remarks
 * Get a company form
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGet(request: operations.GetV1CompanyFormRequest, options?: QueryHookOptions<CompanyFormsGetQueryData>): UseQueryResult<CompanyFormsGetQueryData, Error>;
/**
 * Get a company form
 *
 * @remarks
 * Get a company form
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetSuspense(request: operations.GetV1CompanyFormRequest, options?: SuspenseQueryHookOptions<CompanyFormsGetQueryData>): UseSuspenseQueryResult<CompanyFormsGetQueryData, Error>;
export declare function prefetchCompanyFormsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormRequest): Promise<void>;
export declare function setCompanyFormsGetData(client: QueryClient, queryKeyBase: [
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyFormsGetQueryData): CompanyFormsGetQueryData | undefined;
export declare function invalidateCompanyFormsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyFormsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyFormsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyFormsGetQueryData>;
};
export declare function queryKeyCompanyFormsGet(formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyFormsGet.d.ts.map