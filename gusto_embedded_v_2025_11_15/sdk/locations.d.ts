import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Locations extends ClientSDK {
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
    create(request: operations.PostV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdLocationsResponse>;
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
    get(request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdLocationsResponse>;
    /**
     * Get a location
     *
     * @remarks
     * Get a location.
     *
     * scope: `companies:read`
     */
    retrieve(request: operations.GetV1LocationsLocationIdRequest, options?: RequestOptions): Promise<operations.GetV1LocationsLocationIdResponse>;
    /**
     * Update a location
     *
     * @remarks
     * Update a location.
     *
     * scope: `companies.write`
     */
    update(request: operations.PutV1LocationsLocationIdRequest, options?: RequestOptions): Promise<operations.PutV1LocationsLocationIdResponse>;
    /**
     * Get minimum wages for a location
     *
     * @remarks
     * Get minimum wages for a location
     *
     * scope: `companies:read`
     */
    getMinimumWages(request: operations.GetV1LocationsLocationUuidMinimumWagesRequest, options?: RequestOptions): Promise<operations.GetV1LocationsLocationUuidMinimumWagesResponse>;
}
//# sourceMappingURL=locations.d.ts.map