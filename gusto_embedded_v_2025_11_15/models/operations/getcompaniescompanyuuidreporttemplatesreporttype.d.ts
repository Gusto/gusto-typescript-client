import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetCompaniesCompanyUuidReportTemplatesReportTypeResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    reportTemplate?: components.ReportTemplate | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$inboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound = {
    company_uuid: string;
    report_type: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidReportTemplatesReportTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$ {
    /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidReportTemplatesReportTypeRequest>;
    /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound;
}
export declare function getCompaniesCompanyUuidReportTemplatesReportTypeRequestToJSON(getCompaniesCompanyUuidReportTemplatesReportTypeRequest: GetCompaniesCompanyUuidReportTemplatesReportTypeRequest): string;
export declare function getCompaniesCompanyUuidReportTemplatesReportTypeRequestFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, SDKValidationError>;
/** @internal */
export declare const GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$inboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Report-Template"?: components.ReportTemplate$Outbound | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$outboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidReportTemplatesReportTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$ {
    /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidReportTemplatesReportTypeResponse>;
    /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidReportTemplatesReportTypeResponse$Outbound;
}
export declare function getCompaniesCompanyUuidReportTemplatesReportTypeResponseToJSON(getCompaniesCompanyUuidReportTemplatesReportTypeResponse: GetCompaniesCompanyUuidReportTemplatesReportTypeResponse): string;
export declare function getCompaniesCompanyUuidReportTemplatesReportTypeResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidReportTemplatesReportTypeResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniescompanyuuidreporttemplatesreporttype.d.ts.map