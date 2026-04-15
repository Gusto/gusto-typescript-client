import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyFormSignRequestBody = {
    /**
     * The signature
     */
    signatureText: string;
    /**
     * Whether you agree to sign electronically
     */
    agree: boolean;
    /**
     * The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported.
     */
    signedByIpAddress: string;
};
export type PutV1CompanyFormSignRequest = {
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompanyFormSignRequestBody;
};
export type PutV1CompanyFormSignResponse = {
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
    form?: components.Form | undefined;
};
/** @internal */
export declare const PutV1CompanyFormSignRequestBody$inboundSchema: z.ZodType<PutV1CompanyFormSignRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyFormSignRequestBody$Outbound = {
    signature_text: string;
    agree: boolean;
    signed_by_ip_address: string;
};
/** @internal */
export declare const PutV1CompanyFormSignRequestBody$outboundSchema: z.ZodType<PutV1CompanyFormSignRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyFormSignRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyFormSignRequestBody$ {
    /** @deprecated use `PutV1CompanyFormSignRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyFormSignRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyFormSignRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyFormSignRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyFormSignRequestBody>;
    /** @deprecated use `PutV1CompanyFormSignRequestBody$Outbound` instead. */
    type Outbound = PutV1CompanyFormSignRequestBody$Outbound;
}
export declare function putV1CompanyFormSignRequestBodyToJSON(putV1CompanyFormSignRequestBody: PutV1CompanyFormSignRequestBody): string;
export declare function putV1CompanyFormSignRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompanyFormSignRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyFormSignRequest$inboundSchema: z.ZodType<PutV1CompanyFormSignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyFormSignRequest$Outbound = {
    form_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyFormSignRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyFormSignRequest$outboundSchema: z.ZodType<PutV1CompanyFormSignRequest$Outbound, z.ZodTypeDef, PutV1CompanyFormSignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyFormSignRequest$ {
    /** @deprecated use `PutV1CompanyFormSignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyFormSignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyFormSignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyFormSignRequest$Outbound, z.ZodTypeDef, PutV1CompanyFormSignRequest>;
    /** @deprecated use `PutV1CompanyFormSignRequest$Outbound` instead. */
    type Outbound = PutV1CompanyFormSignRequest$Outbound;
}
export declare function putV1CompanyFormSignRequestToJSON(putV1CompanyFormSignRequest: PutV1CompanyFormSignRequest): string;
export declare function putV1CompanyFormSignRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompanyFormSignRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyFormSignResponse$inboundSchema: z.ZodType<PutV1CompanyFormSignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyFormSignResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form?: components.Form$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompanyFormSignResponse$outboundSchema: z.ZodType<PutV1CompanyFormSignResponse$Outbound, z.ZodTypeDef, PutV1CompanyFormSignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyFormSignResponse$ {
    /** @deprecated use `PutV1CompanyFormSignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyFormSignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyFormSignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyFormSignResponse$Outbound, z.ZodTypeDef, PutV1CompanyFormSignResponse>;
    /** @deprecated use `PutV1CompanyFormSignResponse$Outbound` instead. */
    type Outbound = PutV1CompanyFormSignResponse$Outbound;
}
export declare function putV1CompanyFormSignResponseToJSON(putV1CompanyFormSignResponse: PutV1CompanyFormSignResponse): string;
export declare function putV1CompanyFormSignResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyFormSignResponse, SDKValidationError>;
//# sourceMappingURL=putv1companyformsign.d.ts.map