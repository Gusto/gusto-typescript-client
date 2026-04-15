import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Reports extends ClientSDK {
    /**
     * Create a custom report
     *
     * @remarks
     * Create a custom report for a company. This endpoint initiates creating a custom report with custom columns, groupings, and filters. The `request_uuid` in the response can then be used to poll for the status and report URL upon completion using the report GET endpoint.
     *
     * scope: `company_reports:write`
     */
    createCustom(request: operations.PostCompaniesCompanyUuidReportsRequest, options?: RequestOptions): Promise<operations.PostCompaniesCompanyUuidReportsResponse>;
    /**
     * Get a report
     *
     * @remarks
     * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
     *
     * scope: `company_reports:read`
     */
    get(request: operations.GetReportsReportUuidRequest, options?: RequestOptions): Promise<operations.GetReportsReportUuidResponse>;
    /**
     * Get a report template
     *
     * @remarks
     * Get a company's report template. The only supported report type is `payroll_journal`. The resulting columns and groupings from this endpoint can be used as a guidance to create the report using the POST create report endpoint.
     *
     * scope: `company_reports:write`
     */
    getTemplate(request: operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, options?: RequestOptions): Promise<operations.GetCompaniesCompanyUuidReportTemplatesReportTypeResponse>;
}
//# sourceMappingURL=reports.d.ts.map