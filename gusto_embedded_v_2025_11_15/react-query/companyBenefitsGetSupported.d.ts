import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetSupportedQueryData = operations.GetV1BenefitsBenefitIdResponse;
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
export declare function useCompanyBenefitsGetSupported(request: operations.GetV1BenefitsBenefitIdRequest, options?: QueryHookOptions<CompanyBenefitsGetSupportedQueryData>): UseQueryResult<CompanyBenefitsGetSupportedQueryData, Error>;
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
export declare function useCompanyBenefitsGetSupportedSuspense(request: operations.GetV1BenefitsBenefitIdRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetSupportedQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetSupportedQueryData, Error>;
export declare function prefetchCompanyBenefitsGetSupported(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitIdRequest): Promise<void>;
export declare function setCompanyBenefitsGetSupportedData(client: QueryClient, queryKeyBase: [
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetSupportedQueryData): CompanyBenefitsGetSupportedQueryData | undefined;
export declare function invalidateCompanyBenefitsGetSupported(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetSupported(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetSupportedQuery(client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetSupportedQueryData>;
};
export declare function queryKeyCompanyBenefitsGetSupported(benefitId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetSupported.d.ts.map