import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdPayPeriodsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    startDate?: string | undefined;
    /**
     * If left empty, defaults to today's date.
     */
    endDate?: string | undefined;
    /**
     * regular and/or transition. Multiple options are comma separated. The default is regular pay periods if nothing is passed in.
     */
    payrollTypes?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdPayPeriodsResponse = {
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
    payPeriodList?: Array<components.PayPeriod> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayPeriodsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound = {
    company_id: string;
    start_date?: string | undefined;
    end_date?: string | undefined;
    payroll_types?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayPeriodsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayPeriodsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayPeriodsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayPeriodsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPayPeriodsRequestToJSON(getV1CompaniesCompanyIdPayPeriodsRequest: GetV1CompaniesCompanyIdPayPeriodsRequest): string;
export declare function getV1CompaniesCompanyIdPayPeriodsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayPeriodsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPayPeriodsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPayPeriodsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Period-List"?: Array<components.PayPeriod$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPayPeriodsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayPeriodsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPayPeriodsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPayPeriodsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPayPeriodsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPayPeriodsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPayPeriodsResponseToJSON(getV1CompaniesCompanyIdPayPeriodsResponse: GetV1CompaniesCompanyIdPayPeriodsResponse): string;
export declare function getV1CompaniesCompanyIdPayPeriodsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPayPeriodsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayperiods.d.ts.map