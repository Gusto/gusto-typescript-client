import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type LocationsGetMinimumWagesQueryData = operations.GetV1LocationsLocationUuidMinimumWagesResponse;
/**
 * Get minimum wages for a location
 *
 * @remarks
 * Get minimum wages for a location
 *
 * scope: `companies:read`
 */
export declare function useLocationsGetMinimumWages(request: operations.GetV1LocationsLocationUuidMinimumWagesRequest, options?: QueryHookOptions<LocationsGetMinimumWagesQueryData>): UseQueryResult<LocationsGetMinimumWagesQueryData, Error>;
/**
 * Get minimum wages for a location
 *
 * @remarks
 * Get minimum wages for a location
 *
 * scope: `companies:read`
 */
export declare function useLocationsGetMinimumWagesSuspense(request: operations.GetV1LocationsLocationUuidMinimumWagesRequest, options?: SuspenseQueryHookOptions<LocationsGetMinimumWagesQueryData>): UseSuspenseQueryResult<LocationsGetMinimumWagesQueryData, Error>;
export declare function prefetchLocationsGetMinimumWages(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1LocationsLocationUuidMinimumWagesRequest): Promise<void>;
export declare function setLocationsGetMinimumWagesData(client: QueryClient, queryKeyBase: [
    locationUuid: string,
    parameters: {
        effectiveDate?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: LocationsGetMinimumWagesQueryData): LocationsGetMinimumWagesQueryData | undefined;
export declare function invalidateLocationsGetMinimumWages(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    locationUuid: string,
    parameters: {
        effectiveDate?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllLocationsGetMinimumWages(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildLocationsGetMinimumWagesQuery(client$: GustoEmbeddedCore, request: operations.GetV1LocationsLocationUuidMinimumWagesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<LocationsGetMinimumWagesQueryData>;
};
export declare function queryKeyLocationsGetMinimumWages(locationUuid: string, parameters: {
    effectiveDate?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=locationsGetMinimumWages.d.ts.map