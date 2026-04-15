import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type LocationsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdLocationsRequest;
    options?: RequestOptions;
};
export type LocationsCreateMutationData = operations.PostV1CompaniesCompanyIdLocationsResponse;
/**
 * Create a company location
 *
 * @remarks
 * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
 *
 * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
 *
 * scope: `companies:write`
 */
export declare function useLocationsCreateMutation(options?: MutationHookOptions<LocationsCreateMutationData, Error, LocationsCreateMutationVariables>): UseMutationResult<LocationsCreateMutationData, Error, LocationsCreateMutationVariables>;
export declare function mutationKeyLocationsCreate(): MutationKey;
export declare function buildLocationsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: LocationsCreateMutationVariables) => Promise<LocationsCreateMutationData>;
};
//# sourceMappingURL=locationsCreate.d.ts.map