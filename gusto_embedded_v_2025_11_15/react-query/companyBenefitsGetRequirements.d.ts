import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetRequirementsQueryData = operations.GetV1BenefitsBenefitsIdRequirementsResponse;
/**
 * Get benefit fields requirements by ID
 *
 * @remarks
 * Returns field requirements for the requested benefit type.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetRequirements(request: operations.GetV1BenefitsBenefitsIdRequirementsRequest, options?: QueryHookOptions<CompanyBenefitsGetRequirementsQueryData>): UseQueryResult<CompanyBenefitsGetRequirementsQueryData, Error>;
/**
 * Get benefit fields requirements by ID
 *
 * @remarks
 * Returns field requirements for the requested benefit type.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetRequirementsSuspense(request: operations.GetV1BenefitsBenefitsIdRequirementsRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetRequirementsQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetRequirementsQueryData, Error>;
export declare function prefetchCompanyBenefitsGetRequirements(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitsIdRequirementsRequest): Promise<void>;
export declare function setCompanyBenefitsGetRequirementsData(client: QueryClient, queryKeyBase: [
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetRequirementsQueryData): CompanyBenefitsGetRequirementsQueryData | undefined;
export declare function invalidateCompanyBenefitsGetRequirements(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    benefitId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetRequirements(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetRequirementsQuery(client$: GustoEmbeddedCore, request: operations.GetV1BenefitsBenefitsIdRequirementsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetRequirementsQueryData>;
};
export declare function queryKeyCompanyBenefitsGetRequirements(benefitId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetRequirements.d.ts.map