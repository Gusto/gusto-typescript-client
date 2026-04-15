import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type LocationsUpdateMutationVariables = {
    request: operations.PutV1LocationsLocationIdRequest;
    options?: RequestOptions;
};
export type LocationsUpdateMutationData = operations.PutV1LocationsLocationIdResponse;
/**
 * Update a location
 *
 * @remarks
 * Update a location.
 *
 * scope: `companies.write`
 */
export declare function useLocationsUpdateMutation(options?: MutationHookOptions<LocationsUpdateMutationData, Error, LocationsUpdateMutationVariables>): UseMutationResult<LocationsUpdateMutationData, Error, LocationsUpdateMutationVariables>;
export declare function mutationKeyLocationsUpdate(): MutationKey;
export declare function buildLocationsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: LocationsUpdateMutationVariables) => Promise<LocationsUpdateMutationData>;
};
//# sourceMappingURL=locationsUpdate.d.ts.map