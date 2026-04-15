import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetSupportedBenefitQueryData = components.SupportedBenefit;
/**
 * Get a supported benefit by ID
 *
 * @remarks
 * Returns a benefit supported by Gusto.
 *
 * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetSupportedBenefit(request: operations.GetV1BenefitsBenefitIdRequest, options?: QueryHookOptions<CompanyBenefitsGetSupportedBenefitQueryData>): UseQueryResult<CompanyBenefitsGetSupportedBenefitQueryData, Error>;
/**
 * Get a supported benefit by ID
 *
 * @remarks
 * Returns a benefit supported by Gusto.
 *
 * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetSupportedBenefitSuspense(request: operations.GetV1BenefitsBenefitIdRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetSupportedBenefitQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetSupportedBenefitQueryData, Error>;
export declare function prefetchCompanyBenefitsGetSupportedBenefit(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitIdRequest): Promise<void>;
export declare function setCompanyBenefitsGetSupportedBenefitData(client: QueryClient, queryKeyBase: [
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetSupportedBenefitQueryData): CompanyBenefitsGetSupportedBenefitQueryData | undefined;
export declare function invalidateCompanyBenefitsGetSupportedBenefit(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetSupportedBenefit(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetSupportedBenefitQuery(client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetSupportedBenefitQueryData>;
};
export declare function queryKeyCompanyBenefitsGetSupportedBenefit(benefitId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetSupportedBenefit.d.ts.map