import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsListQueryData = operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse;
/**
 * Get benefits for a company
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export declare function useCompanyBenefitsList(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: QueryHookOptions<CompanyBenefitsListQueryData>): UseQueryResult<CompanyBenefitsListQueryData, Error>;
/**
 * Get benefits for a company
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export declare function useCompanyBenefitsListSuspense(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsListQueryData>): UseSuspenseQueryResult<CompanyBenefitsListQueryData, Error>;
export declare function prefetchCompanyBenefitsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest): Promise<void>;
export declare function setCompanyBenefitsListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        active?: boolean | undefined;
        enrollmentCount?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsListQueryData): CompanyBenefitsListQueryData | undefined;
export declare function invalidateCompanyBenefitsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        active?: boolean | undefined;
        enrollmentCount?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsListQueryData>;
};
export declare function queryKeyCompanyBenefitsList(companyId: string, parameters: {
    active?: boolean | undefined;
    enrollmentCount?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsList.d.ts.map