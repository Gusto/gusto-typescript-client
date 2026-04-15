import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1BenefitsBenefitIdRequest = {
    /**
     * The benefit type in Gusto.
     */
    benefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1BenefitsBenefitIdResponse = {
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
     * Supported benefit response
     */
    supportedBenefit?: components.SupportedBenefit | undefined;
};
/** @internal */
export declare const GetV1BenefitsBenefitIdRequest$inboundSchema: z.ZodType<GetV1BenefitsBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsBenefitIdRequest$Outbound = {
    benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1BenefitsBenefitIdRequest$outboundSchema: z.ZodType<GetV1BenefitsBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsBenefitIdRequest$ {
    /** @deprecated use `GetV1BenefitsBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitIdRequest>;
    /** @deprecated use `GetV1BenefitsBenefitIdRequest$Outbound` instead. */
    type Outbound = GetV1BenefitsBenefitIdRequest$Outbound;
}
export declare function getV1BenefitsBenefitIdRequestToJSON(getV1BenefitsBenefitIdRequest: GetV1BenefitsBenefitIdRequest): string;
export declare function getV1BenefitsBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1BenefitsBenefitIdResponse$inboundSchema: z.ZodType<GetV1BenefitsBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Supported-Benefit"?: components.SupportedBenefit$Outbound | undefined;
};
/** @internal */
export declare const GetV1BenefitsBenefitIdResponse$outboundSchema: z.ZodType<GetV1BenefitsBenefitIdResponse$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsBenefitIdResponse$ {
    /** @deprecated use `GetV1BenefitsBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsBenefitIdResponse$Outbound, z.ZodTypeDef, GetV1BenefitsBenefitIdResponse>;
    /** @deprecated use `GetV1BenefitsBenefitIdResponse$Outbound` instead. */
    type Outbound = GetV1BenefitsBenefitIdResponse$Outbound;
}
export declare function getV1BenefitsBenefitIdResponseToJSON(getV1BenefitsBenefitIdResponse: GetV1BenefitsBenefitIdResponse): string;
export declare function getV1BenefitsBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefitsbenefitid.d.ts.map