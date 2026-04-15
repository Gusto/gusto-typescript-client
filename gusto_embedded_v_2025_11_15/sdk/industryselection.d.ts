import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class IndustrySelection extends ClientSDK {
    /**
     * Get a company industry selection
     *
     * @remarks
     * Get industry selection for the company.
     *
     * scope: `companies:read`
     */
    get(request: operations.GetV1CompanyIndustryRequest, options?: RequestOptions): Promise<operations.GetV1CompanyIndustryResponse>;
    /**
     * Update a company industry selection
     *
     * @remarks
     * Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.
     *
     * scope: `companies:write`
     */
    update(request: operations.PutV1CompanyIndustryRequest, options?: RequestOptions): Promise<operations.PutV1CompanyIndustryResponse>;
}
//# sourceMappingURL=industryselection.d.ts.map