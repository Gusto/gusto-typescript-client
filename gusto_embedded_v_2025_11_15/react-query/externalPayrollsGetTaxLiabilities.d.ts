import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsGetTaxLiabilitiesQueryData = Array<Array<components.TaxLiabilitiesSelections>>;
/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGetTaxLiabilities(request: operations.GetV1TaxLiabilitiesRequest, options?: QueryHookOptions<ExternalPayrollsGetTaxLiabilitiesQueryData>): UseQueryResult<ExternalPayrollsGetTaxLiabilitiesQueryData, Error>;
/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGetTaxLiabilitiesSuspense(request: operations.GetV1TaxLiabilitiesRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsGetTaxLiabilitiesQueryData>): UseSuspenseQueryResult<ExternalPayrollsGetTaxLiabilitiesQueryData, Error>;
export declare function prefetchExternalPayrollsGetTaxLiabilities(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1TaxLiabilitiesRequest): Promise<void>;
export declare function setExternalPayrollsGetTaxLiabilitiesData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsGetTaxLiabilitiesQueryData): ExternalPayrollsGetTaxLiabilitiesQueryData | undefined;
export declare function invalidateExternalPayrollsGetTaxLiabilities(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsGetTaxLiabilities(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsGetTaxLiabilitiesQuery(client$: GustoEmbeddedCore, request: operations.GetV1TaxLiabilitiesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsGetTaxLiabilitiesQueryData>;
};
export declare function queryKeyExternalPayrollsGetTaxLiabilities(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsGetTaxLiabilities.d.ts.map