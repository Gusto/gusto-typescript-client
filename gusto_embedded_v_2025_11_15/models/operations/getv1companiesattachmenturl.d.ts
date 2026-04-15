import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesAttachmentUrlRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the company attachment
     */
    companyAttachmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
/**
 * The temporary url to download a Company Attachment File
 */
export type GetV1CompaniesAttachmentUrlResponseBody = {
    /**
     * A full Url to download a Company Attachment File
     */
    url: string;
};
export type GetV1CompaniesAttachmentUrlResponse = {
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
    object?: GetV1CompaniesAttachmentUrlResponseBody | undefined;
};
/** @internal */
export declare const GetV1CompaniesAttachmentUrlRequest$inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentUrlRequest$Outbound = {
    company_id: string;
    company_attachment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentUrlRequest$outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentUrlRequest$ {
    /** @deprecated use `GetV1CompaniesAttachmentUrlRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentUrlRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlRequest>;
    /** @deprecated use `GetV1CompaniesAttachmentUrlRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentUrlRequest$Outbound;
}
export declare function getV1CompaniesAttachmentUrlRequestToJSON(getV1CompaniesAttachmentUrlRequest: GetV1CompaniesAttachmentUrlRequest): string;
export declare function getV1CompaniesAttachmentUrlRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentUrlRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesAttachmentUrlResponseBody$inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentUrlResponseBody$Outbound = {
    url: string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentUrlResponseBody$outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponseBody$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentUrlResponseBody$ {
    /** @deprecated use `GetV1CompaniesAttachmentUrlResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentUrlResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponseBody$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlResponseBody>;
    /** @deprecated use `GetV1CompaniesAttachmentUrlResponseBody$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentUrlResponseBody$Outbound;
}
export declare function getV1CompaniesAttachmentUrlResponseBodyToJSON(getV1CompaniesAttachmentUrlResponseBody: GetV1CompaniesAttachmentUrlResponseBody): string;
export declare function getV1CompaniesAttachmentUrlResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentUrlResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesAttachmentUrlResponse$inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentUrlResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetV1CompaniesAttachmentUrlResponseBody$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesAttachmentUrlResponse$outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponse$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentUrlResponse$ {
    /** @deprecated use `GetV1CompaniesAttachmentUrlResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentUrlResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponse$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlResponse>;
    /** @deprecated use `GetV1CompaniesAttachmentUrlResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentUrlResponse$Outbound;
}
export declare function getV1CompaniesAttachmentUrlResponseToJSON(getV1CompaniesAttachmentUrlResponse: GetV1CompaniesAttachmentUrlResponse): string;
export declare function getV1CompaniesAttachmentUrlResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentUrlResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiesattachmenturl.d.ts.map