import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class HolidayPayPolicies extends ClientSDK {
    /**
     * Get a company's holiday pay policy
     *
     * @remarks
     * Get a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:read`
     */
    get(request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<operations.GetCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Create a holiday pay policy for a company
     *
     * @remarks
     * Create a holiday pay policy for a company
     *
     * scope: `holiday_pay_policies:write`
     */
    create(request: operations.PostCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<operations.PostCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Update a company's holiday pay policy
     *
     * @remarks
     * Update a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    update(request: operations.PutCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<operations.PutCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Delete a company's holiday pay policy
     *
     * @remarks
     * Delete a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    delete(request: operations.DeleteCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<operations.DeleteCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Add employees to a company's holiday pay policy
     *
     * @remarks
     * Add employees to a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    addEmployees(request: operations.PutCompaniesCompanyUuidHolidayPayPolicyAddRequest, options?: RequestOptions): Promise<operations.PutCompaniesCompanyUuidHolidayPayPolicyAddResponse>;
    /**
     * Remove employees from a company's holiday pay policy
     *
     * @remarks
     * Remove employees from a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    removeEmployees(request: operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest, options?: RequestOptions): Promise<operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse>;
}
//# sourceMappingURL=holidaypaypolicies.d.ts.map