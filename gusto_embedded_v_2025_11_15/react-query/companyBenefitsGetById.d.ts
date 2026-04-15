import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetByIdQueryData = components.SupportedBenefit;
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
export declare function useCompanyBenefitsGetById(request: operations.GetV1BenefitsBenefitIdRequest, options?: QueryHookOptions<CompanyBenefitsGetByIdQueryData>): UseQueryResult<CompanyBenefitsGetByIdQueryData, Error>;
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
export declare function useCompanyBenefitsGetByIdSuspense(request: operations.GetV1BenefitsBenefitIdRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetByIdQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetByIdQueryData, Error>;
export declare function prefetchCompanyBenefitsGetById(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitIdRequest): Promise<void>;
export declare function setCompanyBenefitsGetByIdData(client: QueryClient, queryKeyBase: [
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetByIdQueryData): CompanyBenefitsGetByIdQueryData | undefined;
export declare function invalidateCompanyBenefitsGetById(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetById(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetByIdQuery(client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetByIdQueryData>;
};
export declare function queryKeyCompanyBenefitsGetById(benefitId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetById.d.ts.map