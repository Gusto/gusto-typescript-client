import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Payrolls extends ClientSDK {
    /**
     * Create an off-cycle payroll
     *
     * @remarks
     * Creates a new, unprocessed, off-cycle payroll.
     *
     * ## `off_cycle_reason`
     * By default:
     * - External benefits and deductions will be included when the `off_cycle_reason` is set to `Correction`.
     * - All benefits and deductions are blocked when the `off_cycle_reason` is set to `Bonus`.
     *
     * These elections can be overridden with the `skip_regular_deductions` boolean.
     *
     * scope: `payrolls:run`
     */
    createOffCycle(request: operations.PostV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdPayrollsResponse>;
    /**
     * Get all payrolls for a company
     *
     * @remarks
     * Returns a list of payrolls for a company. You can change the payrolls returned by updating the processing_status, payroll_types, start_date, & end_date params.
     *
     * By default, will return processed, regular payrolls for the past 6 months.
     *
     * Notes:
     * * Dollar amounts are returned as string representations of numeric decimals, are represented to the cent.
     * * end_date can be at most 3 months in the future and start_date and end_date can't be more than 1 year apart.
     *
     * scope: `payrolls:read`
     */
    list(request: operations.GetV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPayrollsResponse>;
    /**
     * Get approved payroll reversals
     *
     * @remarks
     * Returns all approved Payroll Reversals for a Company.
     *
     * scope: `payrolls:read`
     */
    getApprovedReversals(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPayrollReversalsResponse>;
    /**
     * Get a single payroll
     *
     * @remarks
     * Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.
     *
     * Notes:
     * * Hour and dollar amounts are returned as string representations of numeric decimals.
     * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
     * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
     * * To return future payrolls, you must include an `end_date` in the future.
     * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
     *   * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope
     *
     * scope: `payrolls:read`
     */
    get(request: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse>;
    /**
     * Update a payroll by ID
     *
     * @remarks
     * This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.  You can think of the **unprocessed**
     * payroll object as a template of fields that you can update.  You cannot modify the structure of the payroll object through this endpoint, only values
     * of the fields included in the payroll.  If you do not include specific employee compensations or fixed/hourly compensations in your request body, they
     * will not be removed from the payroll.
     *
     * scope: `payrolls:write`
     */
    update(request: operations.PutV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdPayrollsResponse>;
    /**
     * Delete a payroll
     *
     * @remarks
     * This endpoint allows you to delete an **unprocessed** payroll.
     *
     * By default the payroll and associated data is deleted synchronously. To request an asynchronous delete, use the `async=true` query parameter. In both cases validation of ability to delete will be performed and an Unprocessable Entity error will be returned if the payroll is not able to be deleted. A successful synchronous delete will return `204/No Content`. When a payroll has been enqueued for asynchronous deletion, `202/Accepted` will be returned.
     *
     * scope: `payrolls:run`
     */
    delete(request: operations.DeleteV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): Promise<operations.DeleteV1CompaniesCompanyIdPayrollsResponse>;
    /**
     * Prepare a payroll for update
     *
     * @remarks
     * This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.
     *
     * Notes:
     *  * Will null out calculated_at & totals if a payroll has already been calculated.
     *  * Will return the version param used for updating the payroll
     *
     * scope: `payrolls:write`
     */
    prepare(request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse>;
    /**
     * Get a single payroll receipt
     *
     * @remarks
     * Returns a payroll receipt.
     *
     * Notes:
     * * Hour and dollar amounts are returned as string representations of numeric decimals.
     * * Dollar amounts are represented to the cent.
     * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
     *
     * scope: `payrolls:read`
     */
    getReceipt(request: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest, options?: RequestOptions): Promise<operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse>;
    /**
     * Get all payroll blockers for a company
     *
     * @remarks
     * Returns a list of reasons that prevent the company from running payrolls. See the [payroll blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) for a complete list of reasons.
     *
     * The list is empty if there are no payroll blockers.
     *
     * scope: `payrolls:run`
     */
    getBlockers(request: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse>;
    /**
     * Skip a payroll
     *
     * @remarks
     * Submits a $0 payroll for employees associated with the pay schedule to skip payroll. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, the payroll is transitioned to the `processed` state.
     *
     * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
     *
     * scope: `payrolls:run`
     */
    skip(request: operations.PostCompaniesPayrollSkipCompanyUuidRequest, options?: RequestOptions): Promise<operations.PostCompaniesPayrollSkipCompanyUuidResponse>;
    /**
     * Calculate gross up
     *
     * @remarks
     * Calculates gross up earnings for an employee's payroll, given net earnings. This endpoint is only applicable to off-cycle unprocessed payrolls.
     *
     * The gross up amount must then be mapped to the corresponding fixed compensation earning type to get the correct payroll amount. For example, for bonus off-cycles, the gross up amount should be set with the Bonus earning type in the payroll `fixed_compensations` field.
     *
     * scope: `payrolls:run`
     */
    calculateGrossUp(request: operations.PostPayrollsGrossUpPayrollUuidRequest, options?: RequestOptions): Promise<operations.PostPayrollsGrossUpPayrollUuidResponse>;
    /**
     * Calculate a payroll
     *
     * @remarks
     * Performs calculations for taxes, benefits, and deductions for an unprocessed payroll. The calculated payroll details provide a preview of the actual values that will be used when the payroll is run.
     *
     * This calculation is asynchronous and a successful request responds with a 202 HTTP status. To view the details of the calculated payroll, use the GET /v1/companies/{company_id}/payrolls/{payroll_id} endpoint with *include=taxes,benefits,deductions* params.
     * In v2023-04-01, *show_calculation=true* is no longer required.
     *
     * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
     */
    calculate(request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse>;
    /**
     * Submit payroll
     *
     * @remarks
     * Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.
     *
     * You should poll to ensure that payroll is processed successfully, as async errors only occur after async processing is complete.
     *
     * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
     *
     * scope: `payrolls:run`
     */
    submit(request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse>;
    /**
     * Cancel a payroll
     *
     * @remarks
     * Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
     * - `processed` is true
     * - Current time is earlier than 3:30pm PT on the payroll_deadline
     *
     * scope: `payrolls:run`
     */
    cancel(request: operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, options?: RequestOptions): Promise<operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse>;
    /**
     * Get an employee pay stub (pdf)
     *
     * @remarks
     * Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.
     *
     * scope: `pay_stubs:read`
     */
    getPayStub(request: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, options?: RequestOptions): Promise<operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse>;
    /**
     * Get an employee's pay stubs
     *
     * @remarks
     * Get an employee's pay stubs
     *
     * scope: `pay_stubs:read`
     */
    getPayStubs(request: operations.GetV1EmployeesEmployeeUuidPayStubsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeUuidPayStubsResponse>;
    /**
     * Generate printable payroll checks (pdf)
     *
     * @remarks
     * This endpoint initiates the generation of employee checks for the payroll specified by payroll_uuid. A generation status and corresponding request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.
     *
     * scope: `generated_documents:write`
     */
    generatePrintableChecks(request: operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest, options?: RequestOptions): Promise<operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse>;
}
//# sourceMappingURL=payrolls.d.ts.map