import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class FederalTaxDetails extends ClientSDK {
    /**
     * Get Federal Tax Details
     *
     * @remarks
     * Fetches attributes relevant for a company's federal taxes.
     *
     * scope: `company_federal_taxes:read`
     */
    get(request: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse>;
    /**
     * Update Federal Tax Details
     *
     * @remarks
     * Updates attributes relevant for a company's federal taxes.
     * This information is required is to onboard a company for use with Gusto Embedded Payroll.
     *
     * scope: `company_federal_taxes:write`
     */
    update(request: operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse>;
}
//# sourceMappingURL=federaltaxdetails.d.ts.map