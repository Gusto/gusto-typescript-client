import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class TimeOffPolicies extends ClientSDK {
    /**
     * Calculate accruing time off hours
     *
     * @remarks
     * Returns a list of accruing time off for each time off policy associated with the employee.
     *
     * Factors affecting the accrued hours:
     *   * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
     *   * how many hours of work during this pay period
     *   * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
     *   * company pay schedule frequency (for per pay period)
     *
     * If none of the parameters is passed in, the accrued time off hour will be 0.
     *
     * scope: `payrolls:read`
     */
    calculateAccruingTimeOffHours(request: operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest, options?: RequestOptions): Promise<operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse>;
    /**
     * Get a time off policy
     *
     * @remarks
     * Get a time off policy
     *
     * scope: `time_off_policies:read`
     */
    get(request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: RequestOptions): Promise<operations.GetTimeOffPoliciesTimeOffPolicyUuidResponse>;
    /**
     * Update a time off policy
     *
     * @remarks
     * Update a time off policy
     *
     * scope: `time_off_policies:write`
     */
    update(request: operations.PutTimeOffPoliciesTimeOffPolicyUuidRequest, options?: RequestOptions): Promise<operations.PutTimeOffPoliciesTimeOffPolicyUuidResponse>;
    /**
     * Get all time off policies
     *
     * @remarks
     * Get all time off policies for a company
     *
     * scope: `time_off_policies:read`
     */
    getAll(request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest, options?: RequestOptions): Promise<operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse>;
    /**
     * Create a time off policy
     *
     * @remarks
     * Create a time off policy
     *
     * scope: `time_off_policies:write`
     */
    create(request: operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest, options?: RequestOptions): Promise<operations.PostCompaniesCompanyUuidTimeOffPoliciesResponse>;
    /**
     * Add employees to a time off policy
     *
     * @remarks
     * Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
     *
     * scope: `time_off_policies:write`
     */
    addEmployees(request: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest, options?: RequestOptions): Promise<operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse>;
    /**
     * Remove employees from a time off policy
     *
     * @remarks
     * Remove employees from a time off policy
     *
     * scope: `time_off_policies:write`
     */
    removeEmployees(request: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest, options?: RequestOptions): Promise<operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse>;
    /**
     * Update employee time off hour balances
     *
     * @remarks
     * Updates time off hours balances for employees for a time off policy
     *
     * scope: `time_off_policies:write`
     */
    updateBalance(request: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest, options?: RequestOptions): Promise<operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse>;
    /**
     * Deactivate a time off policy
     *
     * @remarks
     * Deactivate a time off policy
     *
     * scope: `time_off_policies:write`
     */
    deactivate(request: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest, options?: RequestOptions): Promise<operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse>;
}
//# sourceMappingURL=timeoffpolicies.d.ts.map