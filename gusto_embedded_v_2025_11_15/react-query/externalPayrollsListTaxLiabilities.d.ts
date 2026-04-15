import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsListTaxLiabilitiesQueryData = operations.GetV1TaxLiabilitiesResponse;
/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsListTaxLiabilities(request: operations.GetV1TaxLiabilitiesRequest, options?: QueryHookOptions<ExternalPayrollsListTaxLiabilitiesQueryData>): UseQueryResult<ExternalPayrollsListTaxLiabilitiesQueryData, Error>;
/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsListTaxLiabilitiesSuspense(request: operations.GetV1TaxLiabilitiesRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsListTaxLiabilitiesQueryData>): UseSuspenseQueryResult<ExternalPayrollsListTaxLiabilitiesQueryData, Error>;
export declare function prefetchExternalPayrollsListTaxLiabilities(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1TaxLiabilitiesRequest): Promise<void>;
export declare function setExternalPayrollsListTaxLiabilitiesData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsListTaxLiabilitiesQueryData): ExternalPayrollsListTaxLiabilitiesQueryData | undefined;
export declare function invalidateExternalPayrollsListTaxLiabilities(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsListTaxLiabilities(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsListTaxLiabilitiesQuery(client$: GustoEmbeddedCore, request: operations.GetV1TaxLiabilitiesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsListTaxLiabilitiesQueryData>;
};
export declare function queryKeyExternalPayrollsListTaxLiabilities(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsListTaxLiabilities.d.ts.map