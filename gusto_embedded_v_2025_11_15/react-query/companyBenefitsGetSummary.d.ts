import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetSummaryQueryData = operations.GetV1BenefitsCompanyBenefitIdSummaryResponse;
/**
 * Get company benefit summary by company benefit id.
 *
 * @remarks
 * Returns summary benefit data for the requested company benefit id.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export declare function useCompanyBenefitsGetSummary(request: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest, options?: QueryHookOptions<CompanyBenefitsGetSummaryQueryData>): UseQueryResult<CompanyBenefitsGetSummaryQueryData, Error>;
/**
 * Get company benefit summary by company benefit id.
 *
 * @remarks
 * Returns summary benefit data for the requested company benefit id.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export declare function useCompanyBenefitsGetSummarySuspense(request: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetSummaryQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetSummaryQueryData, Error>;
export declare function prefetchCompanyBenefitsGetSummary(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest): Promise<void>;
export declare function setCompanyBenefitsGetSummaryData(client: QueryClient, queryKeyBase: [
    companyBenefitId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        detailed?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetSummaryQueryData): CompanyBenefitsGetSummaryQueryData | undefined;
export declare function invalidateCompanyBenefitsGetSummary(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyBenefitId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        detailed?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetSummary(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetSummaryQuery(client$: GustoEmbeddedCore, request: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetSummaryQueryData>;
};
export declare function queryKeyCompanyBenefitsGetSummary(companyBenefitId: string, parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    detailed?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetSummary.d.ts.map