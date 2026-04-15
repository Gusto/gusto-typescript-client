import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetQueryData = operations.GetV1CompanyBenefitsCompanyBenefitIdResponse;
/**
 * Get a company benefit
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
 *
 * scope: `company_benefits:read`
 */
export declare function useCompanyBenefitsGet(request: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: QueryHookOptions<CompanyBenefitsGetQueryData>): UseQueryResult<CompanyBenefitsGetQueryData, Error>;
/**
 * Get a company benefit
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
 *
 * scope: `company_benefits:read`
 */
export declare function useCompanyBenefitsGetSuspense(request: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetQueryData, Error>;
export declare function prefetchCompanyBenefitsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest): Promise<void>;
export declare function setCompanyBenefitsGetData(client: QueryClient, queryKeyBase: [
    companyBenefitId: string,
    parameters: {
        withEmployeeBenefits?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetQueryData): CompanyBenefitsGetQueryData | undefined;
export declare function invalidateCompanyBenefitsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyBenefitId: string,
    parameters: {
        withEmployeeBenefits?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetQueryData>;
};
export declare function queryKeyCompanyBenefitsGet(companyBenefitId: string, parameters: {
    withEmployeeBenefits?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGet.d.ts.map