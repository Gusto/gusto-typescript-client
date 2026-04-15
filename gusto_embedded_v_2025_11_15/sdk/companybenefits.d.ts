import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class CompanyBenefits extends ClientSDK {
    /**
     * Create a company benefit
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * scope: `company_benefits:write`
     */
    create(request: operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse>;
    /**
     * Get benefits for a company
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
     *
     * scope: `company_benefits:read`
     */
    list(request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse>;
    /**
     * Get a company benefit
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
     *
     * scope: `company_benefits:read`
     */
    get(request: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): Promise<operations.GetV1CompanyBenefitsCompanyBenefitIdResponse>;
    /**
     * Update a company benefit
     *
     * @remarks
     * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
     *
     * Note that company benefits can be deactivated only when no employees are enrolled.
     *
     * scope: `company_benefits:write`
     */
    update(request: operations.PutV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): Promise<operations.PutV1CompanyBenefitsCompanyBenefitIdResponse>;
    /**
     * Delete a company benefit
     *
     * @remarks
     * The following must be true in order to delete a company benefit
     *   - There are no employee benefits associated with the company benefit
     *   - There are no payroll items associated with the company benefit
     *   - The benefit is not managed by a Partner or by Gusto (type must be 'External')
     *
     * scope: `company_benefits:write`
     */
    delete(request: operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): Promise<operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse>;
    /**
     * Get all benefits supported by Gusto
     *
     * @remarks
     * Returns all benefits supported by Gusto.
     *
     * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
     *
     * scope: `benefits:read`
     */
    getAll(request: operations.GetV1BenefitsRequest, options?: RequestOptions): Promise<operations.GetV1BenefitsResponse>;
    /**
     * Get a supported benefit by ID
     *
     * @remarks
     * Returns a benefit supported by Gusto.
     *
     * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
     *
     * scope: `benefits:read`
     */
    getSupported(request: operations.GetV1BenefitsBenefitIdRequest, options?: RequestOptions): Promise<operations.GetV1BenefitsBenefitIdResponse>;
    /**
     * Get company benefit summary by company benefit id.
     *
     * @remarks
     * Returns summary benefit data for the requested company benefit id.
     *
     * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
     *
     * scope: `company_benefits:read`
     */
    getSummary(request: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest, options?: RequestOptions): Promise<operations.GetV1BenefitsCompanyBenefitIdSummaryResponse>;
    /**
     * Get all employee benefits for a company benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * Returns an array of all employee benefits enrolled for this company benefit.
     *
     * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
     *
     * scope: `employee_benefits:read`
     */
    getEmployeeBenefits(request: operations.GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, options?: RequestOptions): Promise<operations.GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse>;
    /**
     * Bulk update employee benefits for a company benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * Create or update(if the employee is already enrolled in the company benefit previously) an employee benefit for the company benefit.
     *
     * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
     *
     * scope: `employee_benefits:write`
     */
    updateEmployeeBenefits(request: operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, options?: RequestOptions): Promise<operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse>;
    /**
     * Get benefit fields requirements by ID
     *
     * @remarks
     * Returns field requirements for the requested benefit type.
     *
     * scope: `benefits:read`
     */
    getRequirements(request: operations.GetV1BenefitsBenefitsIdRequirementsRequest, options?: RequestOptions): Promise<operations.GetV1BenefitsBenefitsIdRequirementsResponse>;
}
//# sourceMappingURL=companybenefits.d.ts.map