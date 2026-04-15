import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type LocationsRetrieveQueryData = operations.GetV1LocationsLocationIdResponse;
/**
 * Get a location
 *
 * @remarks
 * Get a location.
 *
 * scope: `companies:read`
 */
export declare function useLocationsRetrieve(request: operations.GetV1LocationsLocationIdRequest, options?: QueryHookOptions<LocationsRetrieveQueryData>): UseQueryResult<LocationsRetrieveQueryData, Error>;
/**
 * Get a location
 *
 * @remarks
 * Get a location.
 *
 * scope: `companies:read`
 */
export declare function useLocationsRetrieveSuspense(request: operations.GetV1LocationsLocationIdRequest, options?: SuspenseQueryHookOptions<LocationsRetrieveQueryData>): UseSuspenseQueryResult<LocationsRetrieveQueryData, Error>;
export declare function prefetchLocationsRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1LocationsLocationIdRequest): Promise<void>;
export declare function setLocationsRetrieveData(client: QueryClient, queryKeyBase: [
    locationId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: LocationsRetrieveQueryData): LocationsRetrieveQueryData | undefined;
export declare function invalidateLocationsRetrieve(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    locationId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllLocationsRetrieve(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildLocationsRetrieveQuery(client$: GustoEmbeddedCore, request: operations.GetV1LocationsLocationIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<LocationsRetrieveQueryData>;
};
export declare function queryKeyLocationsRetrieve(locationId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=locationsRetrieve.d.ts.map