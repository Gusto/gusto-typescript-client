import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class EmployeeEmployments extends ClientSDK {
    /**
     * Create an employee termination
     *
     * @remarks
     * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
     *
     * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
     *
     * scope: `employments:write`
     */
    createTermination(request: operations.PostV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdTerminationsResponse>;
    /**
     * Get terminations for an employee
     *
     * @remarks
     * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
     *
     * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
     *
     * scope: `employments:read`
     */
    getTerminations(request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdTerminationsResponse>;
    /**
     * Delete an employee termination
     *
     * @remarks
     * Delete an employee termination.
     *
     * scope: `employments:write`
     */
    deleteTermination(request: operations.DeleteV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): Promise<operations.DeleteV1EmployeesEmployeeIdTerminationsResponse>;
    /**
     * Update an employee termination
     *
     * @remarks
     * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
     *
     * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
     *
     * scope: `employments:write`
     */
    updateTermination(request: operations.PutV1TerminationsEmployeeIdRequest, options?: RequestOptions): Promise<operations.PutV1TerminationsEmployeeIdResponse>;
    /**
     * Create an employee rehire
     *
     * @remarks
     * Rehire is created whenever an employee is scheduled to return to the company.
     *
     * scope: `employments:write`
     */
    createRehire(request: operations.PostV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): Promise<operations.PostV1EmployeesEmployeeIdRehireResponse>;
    /**
     * Update an employee rehire
     *
     * @remarks
     * Update an employee's rehire.
     *
     * scope: `employments:write`
     */
    rehire(request: operations.PutV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): Promise<operations.PutV1EmployeesEmployeeIdRehireResponse>;
    /**
     * Get an employee rehire
     *
     * @remarks
     * Retrieve an employee's rehire, which contains information on when the employee returns to work.
     *
     * scope: `employments:read`
     */
    getRehire(request: operations.GetV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdRehireResponse>;
    /**
     * Delete an employee rehire
     *
     * @remarks
     * Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).
     *
     * scope: `employments:write`
     */
    deleteRehire(request: operations.DeleteV1EmployeesEmployeeIdRehireRequest, options?: RequestOptions): Promise<operations.DeleteV1EmployeesEmployeeIdRehireResponse>;
    /**
     * Get employment history for an employee
     *
     * @remarks
     * Retrieve the employment history for a given employee, which includes termination and rehire.
     *
     * scope: `employments:read`
     */
    getHistory(request: operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdEmploymentHistoryResponse>;
}
//# sourceMappingURL=employeeemployments.d.ts.map