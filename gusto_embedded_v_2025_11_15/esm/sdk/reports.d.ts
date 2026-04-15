import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, GetCompaniesCompanyUuidReportTemplatesReportTypeResponse } from "../models/operations/getcompaniescompanyuuidreporttemplatesreporttype.js";
import { GetReportsRequestUuidRequest, GetReportsRequestUuidResponse } from "../models/operations/getreportsrequestuuid.js";
import { PostCompaniesCompanyUuidReportsRequest, PostCompaniesCompanyUuidReportsResponse } from "../models/operations/postcompaniescompanyuuidreports.js";
import { PostPayrollsPayrollUuidReportsGeneralLedgerRequest, PostPayrollsPayrollUuidReportsGeneralLedgerResponse } from "../models/operations/postpayrollspayrolluuidreportsgeneralledger.js";
import { PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest, PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse } from "../models/operations/postv1companiescompanyidreportsemployeesannualficawage.js";
export declare class Reports extends ClientSDK {
    /**
     * Create a custom report
     *
     * @remarks
     * Create a custom report for a company. This endpoint initiates creating a custom report with custom columns, groupings, and filters. The `request_uuid` in the response can then be used to poll for the status and report URL upon completion using the [report GET endpoint](https://docs.gusto.com/embedded-payroll/reference/get-reports-request_uuid). This URL is valid for 10 minutes.
     *
     * scope: `company_reports:write`
     */
    createCustom(request: PostCompaniesCompanyUuidReportsRequest, options?: RequestOptions): Promise<PostCompaniesCompanyUuidReportsResponse>;
    /**
     * Create a general ledger report
     *
     * @remarks
     * Create a general ledger report for a payroll. The report can be aggregated by different dimensions such as job or department.
     *
     * Use the `request_uuid` in the response with the [report GET endpoint](../reference/get-reports-request_uuid) to poll for the status and report URL upon completion. The retrieved report will be generated in a JSON format.
     *
     * scope: `company_reports:write` OR `company_reports:write:general_ledger`
     */
    postPayrollsPayrollUuidReportsGeneralLedger(request: PostPayrollsPayrollUuidReportsGeneralLedgerRequest, options?: RequestOptions): Promise<PostPayrollsPayrollUuidReportsGeneralLedgerResponse>;
    /**
     * Get a report
     *
     * @remarks
     * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
     *
     * Reports containing PHI are inaccessible with `company_reports:read:tier_2_only` data scope
     *
     * scope: `company_reports:read`
     */
    getReportsRequestUuid(request: GetReportsRequestUuidRequest, options?: RequestOptions): Promise<GetReportsRequestUuidResponse>;
    /**
     * Get a report template
     *
     * @remarks
     * Get a company's report template. The only supported report type is `payroll_journal`. The resulting columns and groupings from this endpoint can be used as a guidance to create the report using the POST create report endpoint.
     *
     * scope: `company_reports:write`
     */
    getTemplate(request: GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, options?: RequestOptions): Promise<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse>;
    /**
     * Create an employees annual FICA wage report
     *
     * @remarks
     * Generates a report containing annual FICA (Federal Insurance Contributions Act) wage data for all employees in a company over a specified year range.
     *
     * This report provides detailed wage information subject to Social Security and Medicare taxes, useful for benefits integrations that need to verify employee earnings for compliance and benefit calculations.
     *
     * The report is generated asynchronously. After making this request, you will receive a `request_uuid` which can be used to poll the [Get a report](ref:get-v1-reports-request_uuid) endpoint to check the status and retrieve the report when complete.
     *
     * scope: `company_reports:write`
     */
    postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage(request: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest, options?: RequestOptions): Promise<PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse>;
}
//# sourceMappingURL=reports.d.ts.map