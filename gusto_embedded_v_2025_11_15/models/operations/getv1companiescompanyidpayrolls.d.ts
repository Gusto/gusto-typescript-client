import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ProcessingStatuses: {
    readonly Unprocessed: "unprocessed";
    readonly Processed: "processed";
};
export type ProcessingStatuses = ClosedEnum<typeof ProcessingStatuses>;
export declare const PayrollTypes: {
    readonly Regular: "regular";
    readonly OffCycle: "off_cycle";
    readonly External: "external";
};
export type PayrollTypes = ClosedEnum<typeof PayrollTypes>;
export declare const GetV1CompaniesCompanyIdPayrollsQueryParamInclude: {
    readonly Totals: "totals";
    readonly PayrollStatusMeta: "payroll_status_meta";
    readonly RiskBlockers: "risk_blockers";
};
export type GetV1CompaniesCompanyIdPayrollsQueryParamInclude = ClosedEnum<typeof GetV1CompaniesCompanyIdPayrollsQueryParamInclude>;
export type GetV1CompaniesCompanyIdPayrollsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Whether to include processed and/or unprocessed payrolls in the response, defaults to processed, for multiple attributes comma separate the values, i.e. `?processing_statuses=processed,unprocessed`
     */
    processingStatuses?: Array<ProcessingStatuses> | undefined;
    /**
     * Whether to include regular and/or off_cycle payrolls in the response, defaults to regular, for multiple attributes comma separate the values, i.e. `?payroll_types=regular,off_cycle`
     */
    payrollTypes?: Array<PayrollTypes> | undefined;
    /**
     * Include the requested attribute in the response. The risk_blockers option will include submission_blockers and credit_blockers if applicable. In v2023-04-01 totals are no longer included by default. For multiple attributes comma separate the values, i.e. `?include=totals,payroll_status_meta`
     */
    include?: Array<GetV1CompaniesCompanyIdPayrollsQueryParamInclude> | undefined;
    /**
     * Return payrolls whose pay period is after the start date
     */
    startDate?: string | undefined;
    /**
     * Return payrolls whose pay period is before the end date. If left empty, defaults to today's date.
     */
    endDate?: string | undefined;
    /**
     * A string indicating whether to sort resulting events in ascending (asc) or descending (desc) chronological order. Events are sorted by their `timestamp`. Defaults to asc if left empty.
     */
    sortOrder?: components.SortOrder | undefined;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPayrollsResponse = {
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
    payrollList?: Array<components.PayrollMinimal> | undefined;
};
/** @internal */
export declare const ProcessingStatuses$inboundSchema: z.ZodNativeEnum<typeof ProcessingStatuses>;
/** @internal */
export declare const ProcessingStatuses$outboundSchema: z.ZodNativeEnum<typeof ProcessingStatuses>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProcessingStatuses$ {
    /** @deprecated use `ProcessingStatuses$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unprocessed: "unprocessed";
        readonly Processed: "processed";
    }>;
    /** @deprecated use `ProcessingStatuses$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unprocessed: "unprocessed";
        readonly Processed: "processed";
    }>;
}
/** @internal */
export declare const PayrollTypes$inboundSchema: z.ZodNativeEnum<typeof PayrollTypes>;
/** @internal */
export declare const PayrollTypes$outboundSchema: z.ZodNativeEnum<typeof PayrollTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollTypes$ {
    /** @deprecated use `PayrollTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Regular: "regular";
        readonly OffCycle: "off_cycle";
        readonly External: "external";
    }>;
    /** @deprecated use `PayrollTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Regular: "regular";
        readonly OffCycle: "off_cycle";
        readonly External: "external";
    }>;
}
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsQueryParamInclude>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsQueryParamInclude>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollsQueryParamInclude$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Totals: "totals";
        readonly PayrollStatusMeta: "payroll_status_meta";
        readonly RiskBlockers: "risk_blockers";
    }>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsQueryParamInclude$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Totals: "totals";
        readonly PayrollStatusMeta: "payroll_status_meta";
        readonly RiskBlockers: "risk_blockers";
    }>;
}
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollsRequest$Outbound = {
    company_id: string;
    processing_statuses?: Array<string> | undefined;
    payroll_types?: Array<string> | undefined;
    include?: Array<string> | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    sort_order?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayrollsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPayrollsRequestToJSON(getV1CompaniesCompanyIdPayrollsRequest: GetV1CompaniesCompanyIdPayrollsRequest): string;
export declare function getV1CompaniesCompanyIdPayrollsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-List"?: Array<components.PayrollMinimal$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayrollsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPayrollsResponseToJSON(getV1CompaniesCompanyIdPayrollsResponse: GetV1CompaniesCompanyIdPayrollsResponse): string;
export declare function getV1CompaniesCompanyIdPayrollsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayrolls.d.ts.map