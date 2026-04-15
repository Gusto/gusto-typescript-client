import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompaniesGetOnboardingStatusQueryData = operations.GetV1CompanyOnboardingStatusResponse;
/**
 * Get the company's onboarding status
 *
 * @remarks
 * Get company's onboarding status.
 * The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `company_onboarding_status:read`
 */
export declare function useCompaniesGetOnboardingStatus(request: operations.GetV1CompanyOnboardingStatusRequest, options?: QueryHookOptions<CompaniesGetOnboardingStatusQueryData>): UseQueryResult<CompaniesGetOnboardingStatusQueryData, Error>;
/**
 * Get the company's onboarding status
 *
 * @remarks
 * Get company's onboarding status.
 * The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `company_onboarding_status:read`
 */
export declare function useCompaniesGetOnboardingStatusSuspense(request: operations.GetV1CompanyOnboardingStatusRequest, options?: SuspenseQueryHookOptions<CompaniesGetOnboardingStatusQueryData>): UseSuspenseQueryResult<CompaniesGetOnboardingStatusQueryData, Error>;
export declare function prefetchCompaniesGetOnboardingStatus(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyOnboardingStatusRequest): Promise<void>;
export declare function setCompaniesGetOnboardingStatusData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        additionalSteps?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompaniesGetOnboardingStatusQueryData): CompaniesGetOnboardingStatusQueryData | undefined;
export declare function invalidateCompaniesGetOnboardingStatus(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        additionalSteps?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesGetOnboardingStatus(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompaniesGetOnboardingStatusQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyOnboardingStatusRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesGetOnboardingStatusQueryData>;
};
export declare function queryKeyCompaniesGetOnboardingStatus(companyUuid: string, parameters: {
    additionalSteps?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesGetOnboardingStatus.d.ts.map