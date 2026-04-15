import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetV1CompaniesCompanyIdFederalTaxDetailsRequest, GetV1CompaniesCompanyIdFederalTaxDetailsResponse } from "../models/operations/getv1companiescompanyidfederaltaxdetails.js";
import { PutV1CompaniesCompanyIdFederalTaxDetailsRequest, PutV1CompaniesCompanyIdFederalTaxDetailsResponse } from "../models/operations/putv1companiescompanyidfederaltaxdetails.js";
export declare class FederalTaxDetails extends ClientSDK {
    /**
     * Get Federal Tax Details
     *
     * @remarks
     * Fetches attributes relevant for a company's federal taxes.
     *
     * scope: `company_federal_taxes:read`
     */
    get(request: GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): Promise<GetV1CompaniesCompanyIdFederalTaxDetailsResponse>;
    /**
     * Update Federal Tax Details
     *
     * @remarks
     * Updates attributes relevant for a company's federal taxes.
     * This information is required is to onboard a company for use with Gusto Embedded Payroll.
     *
     * scope: `company_federal_taxes:write`
     */
    update(request: PutV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): Promise<PutV1CompaniesCompanyIdFederalTaxDetailsResponse>;
}
//# sourceMappingURL=federaltaxdetails.d.ts.map