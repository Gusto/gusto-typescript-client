import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetForCompanyQueryData = Array<components.CompanyBenefit>;
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
export declare function useCompanyBenefitsGetForCompany(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: QueryHookOptions<CompanyBenefitsGetForCompanyQueryData>): UseQueryResult<CompanyBenefitsGetForCompanyQueryData, Error>;
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
export declare function useCompanyBenefitsGetForCompanySuspense(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetForCompanyQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetForCompanyQueryData, Error>;
export declare function prefetchCompanyBenefitsGetForCompany(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest): Promise<void>;
export declare function setCompanyBenefitsGetForCompanyData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        enrollmentCount?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetForCompanyQueryData): CompanyBenefitsGetForCompanyQueryData | undefined;
export declare function invalidateCompanyBenefitsGetForCompany(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        enrollmentCount?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetForCompany(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetForCompanyQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetForCompanyQueryData>;
};
export declare function queryKeyCompanyBenefitsGetForCompany(companyId: string, parameters: {
    enrollmentCount?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetForCompany.d.ts.map