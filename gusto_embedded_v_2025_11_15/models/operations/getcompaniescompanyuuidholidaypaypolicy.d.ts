import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesCompanyUuidHolidayPayPolicyRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetCompaniesCompanyUuidHolidayPayPolicyResponse = {
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
     * Holiday Pay Policy Object Example
     */
    holidayPayPolicy?: components.HolidayPayPolicy | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidHolidayPayPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidHolidayPayPolicyRequest$ {
    /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidHolidayPayPolicyRequest>;
    /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}
export declare function getCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(getCompaniesCompanyUuidHolidayPayPolicyRequest: GetCompaniesCompanyUuidHolidayPayPolicyRequest): string;
export declare function getCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidHolidayPayPolicyRequest, SDKValidationError>;
/** @internal */
export declare const GetCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Holiday-Pay-Policy"?: components.HolidayPayPolicy$Outbound | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidHolidayPayPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidHolidayPayPolicyResponse$ {
    /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound;
}
export declare function getCompaniesCompanyUuidHolidayPayPolicyResponseToJSON(getCompaniesCompanyUuidHolidayPayPolicyResponse: GetCompaniesCompanyUuidHolidayPayPolicyResponse): string;
export declare function getCompaniesCompanyUuidHolidayPayPolicyResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidHolidayPayPolicyResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniescompanyuuidholidaypaypolicy.d.ts.map