import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { ReportTemplate } from "../components/reporttemplate.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesCompanyUuidReportTemplatesReportTypeRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The report type
     */
    reportType: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetCompaniesCompanyUuidReportTemplatesReportTypeResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    reportTemplate?: ReportTemplate | undefined;
};
/** @internal */
export type GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound = {
    company_uuid: string;
    report_type: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidReportTemplatesReportTypeRequest>;
export declare function getCompaniesCompanyUuidReportTemplatesReportTypeRequestToJSON(getCompaniesCompanyUuidReportTemplatesReportTypeRequest: GetCompaniesCompanyUuidReportTemplatesReportTypeRequest): string;
/** @internal */
export declare const GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$inboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse, z.ZodTypeDef, unknown>;
export declare function getCompaniesCompanyUuidReportTemplatesReportTypeResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniescompanyuuidreporttemplatesreporttype.d.ts.map