import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsGetTaxSuggestionsQueryData = Array<components.ExternalPayrollTaxSuggestions>;
/**
 * Get tax suggestions for an external payroll
 *
 * @remarks
 * Get tax suggestions for an external payroll. Earnings and/or benefits
 * data must be saved prior to the calculation in order to retrieve accurate
 * tax calculation.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGetTaxSuggestions(request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: QueryHookOptions<ExternalPayrollsGetTaxSuggestionsQueryData>): UseQueryResult<ExternalPayrollsGetTaxSuggestionsQueryData, Error>;
/**
 * Get tax suggestions for an external payroll
 *
 * @remarks
 * Get tax suggestions for an external payroll. Earnings and/or benefits
 * data must be saved prior to the calculation in order to retrieve accurate
 * tax calculation.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGetTaxSuggestionsSuspense(request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsGetTaxSuggestionsQueryData>): UseSuspenseQueryResult<ExternalPayrollsGetTaxSuggestionsQueryData, Error>;
export declare function prefetchExternalPayrollsGetTaxSuggestions(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollCalculateTaxesRequest): Promise<void>;
export declare function setExternalPayrollsGetTaxSuggestionsData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    externalPayrollId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsGetTaxSuggestionsQueryData): ExternalPayrollsGetTaxSuggestionsQueryData | undefined;
export declare function invalidateExternalPayrollsGetTaxSuggestions(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    externalPayrollId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsGetTaxSuggestions(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsGetTaxSuggestionsQuery(client$: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsGetTaxSuggestionsQueryData>;
};
export declare function queryKeyExternalPayrollsGetTaxSuggestions(companyUuid: string, externalPayrollId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsGetTaxSuggestions.d.ts.map