import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyBenefitsGetAllQueryData = operations.GetV1BenefitsResponse;
/**
 * Get all benefits supported by Gusto
 *
 * @remarks
 * Returns all benefits supported by Gusto.
 *
 * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetAll(request: operations.GetV1BenefitsRequest, options?: QueryHookOptions<CompanyBenefitsGetAllQueryData>): UseQueryResult<CompanyBenefitsGetAllQueryData, Error>;
/**
 * Get all benefits supported by Gusto
 *
 * @remarks
 * Returns all benefits supported by Gusto.
 *
 * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
 *
 * scope: `benefits:read`
 */
export declare function useCompanyBenefitsGetAllSuspense(request: operations.GetV1BenefitsRequest, options?: SuspenseQueryHookOptions<CompanyBenefitsGetAllQueryData>): UseSuspenseQueryResult<CompanyBenefitsGetAllQueryData, Error>;
export declare function prefetchCompanyBenefitsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1BenefitsRequest): Promise<void>;
export declare function setCompanyBenefitsGetAllData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyBenefitsGetAllQueryData): CompanyBenefitsGetAllQueryData | undefined;
export declare function invalidateCompanyBenefitsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyBenefitsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyBenefitsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1BenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetAllQueryData>;
};
export declare function queryKeyCompanyBenefitsGetAll(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetAll.d.ts.map