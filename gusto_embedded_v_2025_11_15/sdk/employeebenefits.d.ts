import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EmployeeBenefits extends ClientSDK {
    /**
     * Create an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:write`
     */
    create(request: operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse>;
    /**
     * Get all benefits for an employee
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * Returns an array of all employee benefits for this employee
     *
     * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
     *
     * scope: `employee_benefits:read`
     */
    get(request: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse>;
    /**
     * Get an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
     *
     * scope: `employee_benefits:read`
     */
    retrieve(request: operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): Promise<operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse>;
    /**
     * Update an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:write`
     */
    update(request: operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): Promise<operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse>;
    /**
     * Delete an employee benefit
     *
     * @remarks
     * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
     *
     * scope: `employee_benefits:write`
     */
    delete(request: operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): Promise<operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse>;
    /**
     * Get year-to-date benefit amounts from a different company
     *
     * @remarks
     * Retrieves year-to-date benefit amounts that were contributed at a different company for the specified employee.
     * Returns benefit amounts for the requested tax year (defaults to current year if not specified).
     *
     * This endpoint only supports retrieving outside contributions for 401(k) benefits.
     *
     * scope: `employee_benefits:read`
     */
    getYtdBenefitAmountsFromDifferentCompany(request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): Promise<operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse>;
    /**
     * Create year-to-date benefit amounts from a different company
     *
     * @remarks
     * Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.
     *
     * This endpoint only supports passing outside contributions for 401(k) benefits.
     *
     * scope: `employee_benefits:write`
     */
    createYtdBenefitAmountsFromDifferentCompany(request: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): Promise<operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse>;
}
//# sourceMappingURL=employeebenefits.d.ts.map