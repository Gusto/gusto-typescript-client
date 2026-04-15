import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyIndustryRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyIndustryResponse = {
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
    industry?: components.Industry | undefined;
};
/** @internal */
export declare const GetV1CompanyIndustryRequest$inboundSchema: z.ZodType<GetV1CompanyIndustryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyIndustryRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyIndustryRequest$outboundSchema: z.ZodType<GetV1CompanyIndustryRequest$Outbound, z.ZodTypeDef, GetV1CompanyIndustryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyIndustryRequest$ {
    /** @deprecated use `GetV1CompanyIndustryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyIndustryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyIndustryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyIndustryRequest$Outbound, z.ZodTypeDef, GetV1CompanyIndustryRequest>;
    /** @deprecated use `GetV1CompanyIndustryRequest$Outbound` instead. */
    type Outbound = GetV1CompanyIndustryRequest$Outbound;
}
export declare function getV1CompanyIndustryRequestToJSON(getV1CompanyIndustryRequest: GetV1CompanyIndustryRequest): string;
export declare function getV1CompanyIndustryRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyIndustryRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyIndustryResponse$inboundSchema: z.ZodType<GetV1CompanyIndustryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyIndustryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Industry?: components.Industry$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyIndustryResponse$outboundSchema: z.ZodType<GetV1CompanyIndustryResponse$Outbound, z.ZodTypeDef, GetV1CompanyIndustryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyIndustryResponse$ {
    /** @deprecated use `GetV1CompanyIndustryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyIndustryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyIndustryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyIndustryResponse$Outbound, z.ZodTypeDef, GetV1CompanyIndustryResponse>;
    /** @deprecated use `GetV1CompanyIndustryResponse$Outbound` instead. */
    type Outbound = GetV1CompanyIndustryResponse$Outbound;
}
export declare function getV1CompanyIndustryResponseToJSON(getV1CompanyIndustryResponse: GetV1CompanyIndustryResponse): string;
export declare function getV1CompanyIndustryResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyIndustryResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyindustry.d.ts.map