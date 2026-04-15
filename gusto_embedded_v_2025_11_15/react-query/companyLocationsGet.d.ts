import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type CompanyLocationsGetQueryData = Array<components.Location>;
/**
 * Get company locations
 *
 * @remarks
 * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
 *
 * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
 *
 * scope: `companies:read`
 */
export declare function useCompanyLocationsGet(request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: QueryHookOptions<CompanyLocationsGetQueryData>): UseQueryResult<CompanyLocationsGetQueryData, Error>;
/**
 * Get company locations
 *
 * @remarks
 * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
 *
 * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
 *
 * scope: `companies:read`
 */
export declare function useCompanyLocationsGetSuspense(request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: SuspenseQueryHookOptions<CompanyLocationsGetQueryData>): UseSuspenseQueryResult<CompanyLocationsGetQueryData, Error>;
export declare function prefetchCompanyLocationsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdLocationsRequest): Promise<void>;
export declare function setCompanyLocationsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: CompanyLocationsGetQueryData): CompanyLocationsGetQueryData | undefined;
export declare function invalidateCompanyLocationsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyLocationsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildCompanyLocationsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyLocationsGetQueryData>;
};
export declare function queryKeyCompanyLocationsGet(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyLocationsGet.d.ts.map