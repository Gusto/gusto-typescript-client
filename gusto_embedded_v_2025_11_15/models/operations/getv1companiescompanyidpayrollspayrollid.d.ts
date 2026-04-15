import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude: {
    readonly Benefits: "benefits";
    readonly Deductions: "deductions";
    readonly Taxes: "taxes";
    readonly PayrollStatusMeta: "payroll_status_meta";
};
export type GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude = ClosedEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>;
export type GetV1CompaniesCompanyIdPayrollsPayrollIdRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`
     */
    include?: Array<GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude> | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPayrollsPayrollIdResponse = {
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
    payroll?: components.Payroll | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude$inboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Benefits: "benefits";
        readonly Deductions: "deductions";
        readonly Taxes: "taxes";
        readonly PayrollStatusMeta: "payroll_status_meta";
    }>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Benefits: "benefits";
        readonly Deductions: "deductions";
        readonly Taxes: "taxes";
        readonly PayrollStatusMeta: "payroll_status_meta";
    }>;
}
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    include?: Array<string> | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsPayrollIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsPayrollIdRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayrollsPayrollIdRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPayrollsPayrollIdRequestToJSON(getV1CompaniesCompanyIdPayrollsPayrollIdRequest: GetV1CompaniesCompanyIdPayrollsPayrollIdRequest): string;
export declare function getV1CompaniesCompanyIdPayrollsPayrollIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Payroll?: components.Payroll$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsPayrollIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayrollsPayrollIdResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayrollsPayrollIdResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPayrollsPayrollIdResponseToJSON(getV1CompaniesCompanyIdPayrollsPayrollIdResponse: GetV1CompaniesCompanyIdPayrollsPayrollIdResponse): string;
export declare function getV1CompaniesCompanyIdPayrollsPayrollIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayrollsPayrollIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayrollspayrollid.d.ts.map