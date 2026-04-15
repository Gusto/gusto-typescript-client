import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesBenefitsListQueryData = Array<components.CompanyBenefit>;
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
export declare function useCompaniesBenefitsList(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: QueryHookOptions<CompaniesBenefitsListQueryData>): UseQueryResult<CompaniesBenefitsListQueryData, Error>;
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
export declare function useCompaniesBenefitsListSuspense(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: SuspenseQueryHookOptions<CompaniesBenefitsListQueryData>): UseSuspenseQueryResult<CompaniesBenefitsListQueryData, Error>;
export declare function prefetchCompaniesBenefitsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest): Promise<void>;
export declare function setCompaniesBenefitsListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        enrollmentCount?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesBenefitsListQueryData): CompaniesBenefitsListQueryData | undefined;
export declare function invalidateCompaniesBenefitsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        enrollmentCount?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesBenefitsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesBenefitsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesBenefitsListQueryData>;
};
export declare function queryKeyCompaniesBenefitsList(companyId: string, parameters: {
    enrollmentCount?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesBenefitsList.d.ts.map