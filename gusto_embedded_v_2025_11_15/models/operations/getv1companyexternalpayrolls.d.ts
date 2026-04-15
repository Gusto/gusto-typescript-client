import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyExternalPayrollsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyExternalPayrollsResponse = {
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
    externalPayrollList?: Array<components.ExternalPayrollBasic> | undefined;
};
/** @internal */
export declare const GetV1CompanyExternalPayrollsRequest$inboundSchema: z.ZodType<GetV1CompanyExternalPayrollsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyExternalPayrollsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyExternalPayrollsRequest$outboundSchema: z.ZodType<GetV1CompanyExternalPayrollsRequest$Outbound, z.ZodTypeDef, GetV1CompanyExternalPayrollsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyExternalPayrollsRequest$ {
    /** @deprecated use `GetV1CompanyExternalPayrollsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyExternalPayrollsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyExternalPayrollsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyExternalPayrollsRequest$Outbound, z.ZodTypeDef, GetV1CompanyExternalPayrollsRequest>;
    /** @deprecated use `GetV1CompanyExternalPayrollsRequest$Outbound` instead. */
    type Outbound = GetV1CompanyExternalPayrollsRequest$Outbound;
}
export declare function getV1CompanyExternalPayrollsRequestToJSON(getV1CompanyExternalPayrollsRequest: GetV1CompanyExternalPayrollsRequest): string;
export declare function getV1CompanyExternalPayrollsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyExternalPayrollsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyExternalPayrollsResponse$inboundSchema: z.ZodType<GetV1CompanyExternalPayrollsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyExternalPayrollsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "External-Payroll-List"?: Array<components.ExternalPayrollBasic$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompanyExternalPayrollsResponse$outboundSchema: z.ZodType<GetV1CompanyExternalPayrollsResponse$Outbound, z.ZodTypeDef, GetV1CompanyExternalPayrollsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyExternalPayrollsResponse$ {
    /** @deprecated use `GetV1CompanyExternalPayrollsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyExternalPayrollsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyExternalPayrollsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyExternalPayrollsResponse$Outbound, z.ZodTypeDef, GetV1CompanyExternalPayrollsResponse>;
    /** @deprecated use `GetV1CompanyExternalPayrollsResponse$Outbound` instead. */
    type Outbound = GetV1CompanyExternalPayrollsResponse$Outbound;
}
export declare function getV1CompanyExternalPayrollsResponseToJSON(getV1CompanyExternalPayrollsResponse: GetV1CompanyExternalPayrollsResponse): string;
export declare function getV1CompanyExternalPayrollsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyExternalPayrollsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyexternalpayrolls.d.ts.map