import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
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
    get(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
    /**
     * Update State Tax Requirements
     *
     * @remarks
     * Update State Tax Requirements
     *
     * scope: `company_tax_requirements:write`
     */
    updateState(request: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
    /**
     * Get All Tax Requirement States
     *
     * @remarks
     * Returns objects describing the states that have tax requirements for the company
     *
     * scope: `company_tax_requirements:read`
     */
    getAll(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse>;
}
//# sourceMappingURL=taxrequirements.d.ts.map