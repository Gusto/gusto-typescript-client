import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesAttachmentRequest = {
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
export type GetV1CompaniesAttachmentResponse = {
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
    companyAttachment?: components.CompanyAttachment | undefined;
};
/** @internal */
export declare const GetV1CompaniesAttachmentRequest$inboundSchema: z.ZodType<GetV1CompaniesAttachmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentRequest$Outbound = {
    company_id: string;
    company_attachment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentRequest$outboundSchema: z.ZodType<GetV1CompaniesAttachmentRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentRequest$ {
    /** @deprecated use `GetV1CompaniesAttachmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentRequest>;
    /** @deprecated use `GetV1CompaniesAttachmentRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentRequest$Outbound;
}
export declare function getV1CompaniesAttachmentRequestToJSON(getV1CompaniesAttachmentRequest: GetV1CompaniesAttachmentRequest): string;
export declare function getV1CompaniesAttachmentRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesAttachmentResponse$inboundSchema: z.ZodType<GetV1CompaniesAttachmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Attachment"?: components.CompanyAttachment$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesAttachmentResponse$outboundSchema: z.ZodType<GetV1CompaniesAttachmentResponse$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentResponse$ {
    /** @deprecated use `GetV1CompaniesAttachmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentResponse$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentResponse>;
    /** @deprecated use `GetV1CompaniesAttachmentResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentResponse$Outbound;
}
export declare function getV1CompaniesAttachmentResponseToJSON(getV1CompaniesAttachmentResponse: GetV1CompaniesAttachmentResponse): string;
export declare function getV1CompaniesAttachmentResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiesattachment.d.ts.map