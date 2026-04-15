import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class PaySchedules extends ClientSDK {
    /**
     * Create a new pay schedule
     *
     * @remarks
     * If a company does not have any pay schedules, this endpoint will create a single pay schedule and assign it to all employees. This is a common use case during company onboarding.
     *
     * If a company has an existing active pay schedule and want to support multiple pay schedules, this endpoint will create a pay schedule that is not assigned to any employee.
     *
     * Be sure to **[check state laws](https://www.dol.gov/agencies/whd/state/payday)** to know what schedule is right for your customers.
     *
     * scope: `pay_schedules:write`
     */
    create(request: operations.PostV1CompaniesCompanyIdPaySchedulesRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdPaySchedulesResponse>;
    /**
     * Get the pay schedules for a company
     *
     * @remarks
     * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
     *
     * scope: `pay_schedules:read`
     */
    getAll(request: operations.GetV1CompaniesCompanyIdPaySchedulesRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPaySchedulesResponse>;
    /**
     * Preview pay schedule dates
     *
     * @remarks
     * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
     *
     * scope: `pay_schedules:write`
     */
    getPreview(request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPaySchedulesPreviewResponse>;
    /**
     * Get a pay schedule
     *
     * @remarks
     * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
     *
     * scope: `pay_schedules:read`
     */
    get(request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse>;
    /**
     * Update a pay schedule
     *
     * @remarks
     * Updates a pay schedule.
     *
     * scope: `pay_schedules:write`
     */
    update(request: operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse>;
    /**
     * Get pay periods for a company
     *
     * @remarks
     * Pay periods are the foundation of payroll. Compensation, time & attendance, taxes, and expense reports all rely on when they happened. To begin submitting information for a given payroll, we need to agree on the time period.
     *
     * By default, this endpoint returns pay periods starting from 6 months ago to the date today.  Use the `start_date` and `end_date` parameters to change the scope of the response.  End dates can be up to 3 months in the future and there is no limit on start dates.
     *
     * Starting in version '2023-04-01', the eligible_employees attribute was removed from the response.  The eligible employees for a payroll are determined by the employee_compensations returned from the payrolls#prepare endpoint.
     *
     * scope: `payrolls:read`
     */
    getPayPeriods(request: operations.GetV1CompaniesCompanyIdPayPeriodsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPayPeriodsResponse>;
    /**
     * Get termination pay periods for a company
     *
     * @remarks
     * When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list.
     *
     * This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.
     *
     * scope: `payrolls:read`
     */
    getUnprocessedTerminationPeriods(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse>;
    /**
     * Get pay schedule assignments for a company
     *
     * @remarks
     * This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.
     *
     * scope: `pay_schedules:read`
     */
    getAssignments(request: operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse>;
    /**
     * Preview pay schedule assignments for a company
     *
     * @remarks
     * This endpoint returns the employee changes, including pay period and transition pay periods, for changing the pay schedule.
     *
     * scope: `pay_schedules:write`
     */
    previewAssignment(request: operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse>;
    /**
     * Assign pay schedules for a company
     *
     * @remarks
     * This endpoint assigns employees to pay schedules based on the schedule type.
     * For `by_employee` and `by_department` schedules, use the `partial_assignment` parameter to control the assignment scope. Set it to `true` for partial assignments (only some employees or departments at a time) and `false` for full assignments (all employees or departments at once).
     *
     * scope: `pay_schedules:write`
     */
    assign(request: operations.PostV1CompaniesCompanyIdPaySchedulesAssignRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdPaySchedulesAssignResponse>;
}
//# sourceMappingURL=payschedules.d.ts.map