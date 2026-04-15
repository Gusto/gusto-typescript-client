import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class CompanyLocations extends ClientSDK {
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
    get(request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): Promise<Array<components.Location>>;
}
//# sourceMappingURL=companylocations.d.ts.map