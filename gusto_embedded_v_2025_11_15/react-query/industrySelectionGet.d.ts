import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type IndustrySelectionGetQueryData = operations.GetV1CompanyIndustryResponse;
/**
 * Get a company industry selection
 *
 * @remarks
 * Get industry selection for the company.
 *
 * scope: `companies:read`
 */
export declare function useIndustrySelectionGet(request: operations.GetV1CompanyIndustryRequest, options?: QueryHookOptions<IndustrySelectionGetQueryData>): UseQueryResult<IndustrySelectionGetQueryData, Error>;
/**
 * Get a company industry selection
 *
 * @remarks
 * Get industry selection for the company.
 *
 * scope: `companies:read`
 */
export declare function useIndustrySelectionGetSuspense(request: operations.GetV1CompanyIndustryRequest, options?: SuspenseQueryHookOptions<IndustrySelectionGetQueryData>): UseSuspenseQueryResult<IndustrySelectionGetQueryData, Error>;
export declare function prefetchIndustrySelectionGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyIndustryRequest): Promise<void>;
export declare function setIndustrySelectionGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: IndustrySelectionGetQueryData): IndustrySelectionGetQueryData | undefined;
export declare function invalidateIndustrySelectionGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllIndustrySelectionGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildIndustrySelectionGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyIndustryRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<IndustrySelectionGetQueryData>;
};
export declare function queryKeyIndustrySelectionGet(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=industrySelectionGet.d.ts.map