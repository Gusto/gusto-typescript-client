import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1BenefitsRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1BenefitsResponse = {
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
    supportedBenefitList?: Array<components.SupportedBenefit> | undefined;
};
/** @internal */
export declare const GetV1BenefitsRequest$inboundSchema: z.ZodType<GetV1BenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1BenefitsRequest$outboundSchema: z.ZodType<GetV1BenefitsRequest$Outbound, z.ZodTypeDef, GetV1BenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsRequest$ {
    /** @deprecated use `GetV1BenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsRequest$Outbound, z.ZodTypeDef, GetV1BenefitsRequest>;
    /** @deprecated use `GetV1BenefitsRequest$Outbound` instead. */
    type Outbound = GetV1BenefitsRequest$Outbound;
}
export declare function getV1BenefitsRequestToJSON(getV1BenefitsRequest: GetV1BenefitsRequest): string;
export declare function getV1BenefitsRequestFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1BenefitsResponse$inboundSchema: z.ZodType<GetV1BenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Supported-Benefit-List"?: Array<components.SupportedBenefit$Outbound> | undefined;
};
/** @internal */
export declare const GetV1BenefitsResponse$outboundSchema: z.ZodType<GetV1BenefitsResponse$Outbound, z.ZodTypeDef, GetV1BenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsResponse$ {
    /** @deprecated use `GetV1BenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsResponse$Outbound, z.ZodTypeDef, GetV1BenefitsResponse>;
    /** @deprecated use `GetV1BenefitsResponse$Outbound` instead. */
    type Outbound = GetV1BenefitsResponse$Outbound;
}
export declare function getV1BenefitsResponseToJSON(getV1BenefitsResponse: GetV1BenefitsResponse): string;
export declare function getV1BenefitsResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefits.d.ts.map