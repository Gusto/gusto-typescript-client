import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyFormsGetPdfQueryData = operations.GetV1CompanyFormPdfResponse;
/**
 * Get a company form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetPdf(request: operations.GetV1CompanyFormPdfRequest, options?: QueryHookOptions<CompanyFormsGetPdfQueryData>): UseQueryResult<CompanyFormsGetPdfQueryData, Error>;
/**
 * Get a company form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetPdfSuspense(request: operations.GetV1CompanyFormPdfRequest, options?: SuspenseQueryHookOptions<CompanyFormsGetPdfQueryData>): UseSuspenseQueryResult<CompanyFormsGetPdfQueryData, Error>;
export declare function prefetchCompanyFormsGetPdf(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormPdfRequest): Promise<void>;
export declare function setCompanyFormsGetPdfData(client: QueryClient, queryKeyBase: [
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyFormsGetPdfQueryData): CompanyFormsGetPdfQueryData | undefined;
export declare function invalidateCompanyFormsGetPdf(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyFormsGetPdf(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyFormsGetPdfQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyFormPdfRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyFormsGetPdfQueryData>;
};
export declare function queryKeyCompanyFormsGetPdf(formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyFormsGetPdf.d.ts.map