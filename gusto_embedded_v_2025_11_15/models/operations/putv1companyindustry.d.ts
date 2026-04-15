import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyIndustryRequestBody = {
    /**
     * Industry title
     */
    title?: string | undefined;
    /**
     * North American Industry Classification System (NAICS) is used to classify businesses with a six digit number based on the primary type of work the business performs
     */
    naicsCode: string;
    /**
     * A list of Standard Industrial Classification (SIC) codes, which are four digit number that categorize the industries that companies belong to based on their business activities. If sic_codes is not passed in, we will perform an internal lookup with naics_code.
     */
    sicCodes?: Array<string> | undefined;
};
export type PutV1CompanyIndustryRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompanyIndustryRequestBody;
};
export type PutV1CompanyIndustryResponse = {
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
export declare const PutV1CompanyIndustryRequestBody$inboundSchema: z.ZodType<PutV1CompanyIndustryRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyIndustryRequestBody$Outbound = {
    title?: string | undefined;
    naics_code: string;
    sic_codes?: Array<string> | undefined;
};
/** @internal */
export declare const PutV1CompanyIndustryRequestBody$outboundSchema: z.ZodType<PutV1CompanyIndustryRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyIndustryRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyIndustryRequestBody$ {
    /** @deprecated use `PutV1CompanyIndustryRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyIndustryRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyIndustryRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyIndustryRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyIndustryRequestBody>;
    /** @deprecated use `PutV1CompanyIndustryRequestBody$Outbound` instead. */
    type Outbound = PutV1CompanyIndustryRequestBody$Outbound;
}
export declare function putV1CompanyIndustryRequestBodyToJSON(putV1CompanyIndustryRequestBody: PutV1CompanyIndustryRequestBody): string;
export declare function putV1CompanyIndustryRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompanyIndustryRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyIndustryRequest$inboundSchema: z.ZodType<PutV1CompanyIndustryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyIndustryRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyIndustryRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyIndustryRequest$outboundSchema: z.ZodType<PutV1CompanyIndustryRequest$Outbound, z.ZodTypeDef, PutV1CompanyIndustryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyIndustryRequest$ {
    /** @deprecated use `PutV1CompanyIndustryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyIndustryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyIndustryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyIndustryRequest$Outbound, z.ZodTypeDef, PutV1CompanyIndustryRequest>;
    /** @deprecated use `PutV1CompanyIndustryRequest$Outbound` instead. */
    type Outbound = PutV1CompanyIndustryRequest$Outbound;
}
export declare function putV1CompanyIndustryRequestToJSON(putV1CompanyIndustryRequest: PutV1CompanyIndustryRequest): string;
export declare function putV1CompanyIndustryRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompanyIndustryRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyIndustryResponse$inboundSchema: z.ZodType<PutV1CompanyIndustryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyIndustryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Industry?: components.Industry$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompanyIndustryResponse$outboundSchema: z.ZodType<PutV1CompanyIndustryResponse$Outbound, z.ZodTypeDef, PutV1CompanyIndustryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyIndustryResponse$ {
    /** @deprecated use `PutV1CompanyIndustryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyIndustryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyIndustryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyIndustryResponse$Outbound, z.ZodTypeDef, PutV1CompanyIndustryResponse>;
    /** @deprecated use `PutV1CompanyIndustryResponse$Outbound` instead. */
    type Outbound = PutV1CompanyIndustryResponse$Outbound;
}
export declare function putV1CompanyIndustryResponseToJSON(putV1CompanyIndustryResponse: PutV1CompanyIndustryResponse): string;
export declare function putV1CompanyIndustryResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyIndustryResponse, SDKValidationError>;
//# sourceMappingURL=putv1companyindustry.d.ts.map