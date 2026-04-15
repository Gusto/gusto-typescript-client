import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Garnishments extends ClientSDK {
    /**
     * Create a garnishment
     *
     * @remarks
     * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
     *
     * scope: `garnishments:write`
     */
    create(request: operations.PostV1EmployeesEmployeeIdGarnishmentsRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdGarnishmentsResponse>;
    /**
     * Get garnishments for an employee
     *
     * @remarks
     * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
     *
     * scope: `garnishments:read`
     */
    list(request: operations.GetV1EmployeesEmployeeIdGarnishmentsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdGarnishmentsResponse>;
    /**
     * Get a garnishment
     *
     * @remarks
     * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
     *
     * scope: `garnishments:read`
     */
    get(request: operations.GetV1GarnishmentsGarnishmentIdRequest, options?: RequestOptions): Promise<operations.GetV1GarnishmentsGarnishmentIdResponse>;
    /**
     * Update a garnishment
     *
     * @remarks
     * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
     *
     * scope: `garnishments:write`
     */
    update(request: operations.PutV1GarnishmentsGarnishmentIdRequest, options?: RequestOptions): Promise<operations.PutV1GarnishmentsGarnishmentIdResponse>;
    /**
     * Get child support garnishment data
     *
     * @remarks
     * Agency data and requirements to be used for creating child support garnishments
     *
     * scope: `garnishments:read`
     */
    getChildSupportData(request: operations.GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): Promise<operations.GetV1GarnishmentsChildSupportResponse>;
}
//# sourceMappingURL=garnishments.d.ts.map