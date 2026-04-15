import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetV1CompaniesCompanyUuidTaxRequirementsRequest, GetV1CompaniesCompanyUuidTaxRequirementsResponse } from "../models/operations/getv1companiescompanyuuidtaxrequirements.js";
import { GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, GetV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "../models/operations/getv1companiescompanyuuidtaxrequirementsstate.js";
import { PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, PutV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "../models/operations/putv1companiescompanyuuidtaxrequirementsstate.js";
export declare class TaxRequirements extends ClientSDK {
    /**
     * Get State Tax Requirements
     *
     * @remarks
     * Get all tax requirements for a given state.
     *
     * ### Metadata Examples
     *
     * ```json select
     * {
     *   "type": "select",
     *   "options": [
     *     { "label": "Semiweekly",  value: "Semi-weekly" },
     *     { "label": "Monthly",  value: "Monthly" },
     *     { "label": "Quarterly",  value: "Quarterly" },
     *   ]
     * }
     * ```
     * ```json radio
     * {
     *   "type": "radio",
     *   "options": [
     *     { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
     *     { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
     *   ]
     * }
     * ```
     * ```json account_number
     * {
     *   "type": "account_number",
     *   "mask": "######-##',
     *   "prefix": null
     * }
     * ```
     * ```json tax_rate
     * {
     *   "type": "tax_rate",
     *   "validation": {
     *     "type": "min_max",
     *     "min": "0.0004",
     *     "max": "0.081"
     *   }
     * }
     * ```
     *
     * scope: `company_tax_requirements:read`
     */
    get(request: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): Promise<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
    /**
     * Update State Tax Requirements
     *
     * @remarks
     * Update State Tax Requirements
     *
     * scope: `company_tax_requirements:write`
     */
    updateState(request: PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): Promise<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
    /**
     * Get All Tax Requirement States
     *
     * @remarks
     * Returns objects describing the states that have tax requirements for the company
     *
     * scope: `company_tax_requirements:read`
     */
    getAll(request: GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: RequestOptions): Promise<GetV1CompaniesCompanyUuidTaxRequirementsResponse>;
}
//# sourceMappingURL=taxrequirements.d.ts.map