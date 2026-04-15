import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type LocationsGetQueryData = operations.GetV1CompaniesCompanyIdLocationsResponse;
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
export declare function useLocationsGet(request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: QueryHookOptions<LocationsGetQueryData>): UseQueryResult<LocationsGetQueryData, Error>;
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
export declare function useLocationsGetSuspense(request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: SuspenseQueryHookOptions<LocationsGetQueryData>): UseSuspenseQueryResult<LocationsGetQueryData, Error>;
export declare function prefetchLocationsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdLocationsRequest): Promise<void>;
export declare function setLocationsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: LocationsGetQueryData): LocationsGetQueryData | undefined;
export declare function invalidateLocationsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllLocationsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildLocationsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<LocationsGetQueryData>;
};
export declare function queryKeyLocationsGet(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=locationsGet.d.ts.map