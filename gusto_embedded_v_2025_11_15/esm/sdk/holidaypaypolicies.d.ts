import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { DeleteV1CompaniesCompanyUuidHolidayPayPolicyRequest, DeleteV1CompaniesCompanyUuidHolidayPayPolicyResponse } from "../models/operations/deletev1companiescompanyuuidholidaypaypolicy.js";
import { GetV1CompaniesCompanyUuidHolidayPayPolicyRequest, GetV1CompaniesCompanyUuidHolidayPayPolicyResponse } from "../models/operations/getv1companiescompanyuuidholidaypaypolicy.js";
import { PostV1CompaniesCompanyUuidHolidayPayPolicyRequest, PostV1CompaniesCompanyUuidHolidayPayPolicyResponse } from "../models/operations/postv1companiescompanyuuidholidaypaypolicy.js";
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRequest, PutV1CompaniesCompanyUuidHolidayPayPolicyResponse } from "../models/operations/putv1companiescompanyuuidholidaypaypolicy.js";
import { PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest, PutV1CompaniesCompanyUuidHolidayPayPolicyAddResponse } from "../models/operations/putv1companiescompanyuuidholidaypaypolicyadd.js";
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequest, PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveResponse } from "../models/operations/putv1companiescompanyuuidholidaypaypolicyremove.js";
export declare class HolidayPayPolicies extends ClientSDK {
    /**
     * Get a company's holiday pay policy
     *
     * @remarks
     * Get a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:read`
     */
    get(request: GetV1CompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<GetV1CompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Create a holiday pay policy for a company
     *
     * @remarks
     * Create a holiday pay policy for a company
     *
     * scope: `holiday_pay_policies:write`
     */
    create(request: PostV1CompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<PostV1CompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Update a company's holiday pay policy
     *
     * @remarks
     * Update a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    update(request: PutV1CompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<PutV1CompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Delete a company's holiday pay policy
     *
     * @remarks
     * Delete a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    delete(request: DeleteV1CompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<DeleteV1CompaniesCompanyUuidHolidayPayPolicyResponse>;
    /**
     * Add employees to a company's holiday pay policy
     *
     * @remarks
     * Add employees to a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    addEmployees(request: PutV1CompaniesCompanyUuidHolidayPayPolicyAddRequest, options?: RequestOptions): Promise<PutV1CompaniesCompanyUuidHolidayPayPolicyAddResponse>;
    /**
     * Remove employees from a company's holiday pay policy
     *
     * @remarks
     * Remove employees from a company's holiday pay policy
     *
     * scope: `holiday_pay_policies:write`
     */
    removeEmployees(request: PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequest, options?: RequestOptions): Promise<PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveResponse>;
}
//# sourceMappingURL=holidaypaypolicies.d.ts.map