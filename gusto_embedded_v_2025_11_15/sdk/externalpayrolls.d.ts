import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class ExternalPayrolls extends ClientSDK {
    /**
     * Create a new external payroll for a company
     *
     * @remarks
     * Creates a new external payroll for the company.
     *
     * scope: `external_payrolls:write`
     */
    create(request: operations.PostV1ExternalPayrollRequest, options?: RequestOptions): Promise<operations.PostV1ExternalPayrollResponse>;
    /**
     * Get external payrolls for a company
     *
     * @remarks
     * Get an external payroll for a given company.
     *
     * scope: `external_payrolls:read`
     */
    get(request: operations.GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): Promise<operations.GetV1CompanyExternalPayrollsResponse>;
    /**
     * Get an external payroll
     *
     * @remarks
     * Get an external payroll for a given company.
     *
     * scope: `external_payrolls:read`
     */
    retrieve(request: operations.GetV1ExternalPayrollRequest, options?: RequestOptions): Promise<operations.GetV1ExternalPayrollResponse>;
    /**
     * Delete an external payroll
     *
     * @remarks
     * Delete an external payroll.
     *
     * scope: `external_payrolls:write`
     */
    delete(request: operations.DeleteV1ExternalPayrollRequest, options?: RequestOptions): Promise<operations.DeleteV1ExternalPayrollResponse>;
    /**
     * Update an external payroll
     *
     * @remarks
     * Update an external payroll with a list of external payroll items
     *
     * scope: `external_payrolls:write`
     */
    update(request: operations.PutV1ExternalPayrollRequest, options?: RequestOptions): Promise<operations.PutV1ExternalPayrollResponse>;
    /**
     * Get tax suggestions for an external payroll
     *
     * @remarks
     * Get tax suggestions for an external payroll. Earnings and/or benefits
     * data must be saved prior to the calculation in order to retrieve accurate
     * tax calculation.
     *
     * scope: `external_payrolls:read`
     */
    calculateTaxes(request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: RequestOptions): Promise<operations.GetV1ExternalPayrollCalculateTaxesResponse>;
    /**
     * Get tax liabilities
     *
     * @remarks
     * Get tax liabilities from aggregate external payrolls for a company.
     *
     * scope: `external_payrolls:read`
     */
    listTaxLiabilities(request: operations.GetV1TaxLiabilitiesRequest, options?: RequestOptions): Promise<operations.GetV1TaxLiabilitiesResponse>;
    /**
     * Update tax liabilities
     *
     * @remarks
     * Update tax liabilities for a company.
     *
     * scope: `external_payrolls:write`
     */
    updateTaxLiabilities(request: operations.PutV1TaxLiabilitiesRequest, options?: RequestOptions): Promise<operations.PutV1TaxLiabilitiesResponse>;
    /**
     * Finalize tax liabilities options and convert into processed payrolls
     *
     * @remarks
     * Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
     *
     * scope: `external_payrolls:write`
     */
    finalizeTaxLiabilities(request: operations.PutV1TaxLiabilitiesFinishRequest, options?: RequestOptions): Promise<operations.PutV1TaxLiabilitiesFinishResponse>;
}
//# sourceMappingURL=externalpayrolls.d.ts.map