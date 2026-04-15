import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Document = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/**
 * The category of a company attachment.
 */
export declare const Category: {
    readonly GepNotice: "gep_notice";
    readonly Compliance: "compliance";
};
/**
 * The category of a company attachment.
 */
export type Category = ClosedEnum<typeof Category>;
/**
 * The binary payload of the file and the company attachment category.
 */
export type PostV1CompaniesAttachmentRequestBody = {
    /**
     * The category of a company attachment.
     */
    category: Category;
    /**
     * The binary payload of the file to be uploaded.
     */
    document: Document | Blob;
};
export type PostV1CompaniesAttachmentRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesAttachmentRequestBody;
};
export type PostV1CompaniesAttachmentResponse = {
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
export declare const Document$inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
/** @internal */
export type Document$Outbound = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/** @internal */
export declare const Document$outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Document$ {
    /** @deprecated use `Document$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
    /** @deprecated use `Document$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
    /** @deprecated use `Document$Outbound` instead. */
    type Outbound = Document$Outbound;
}
export declare function documentToJSON(document: Document): string;
export declare function documentFromJSON(jsonString: string): SafeParseResult<Document, SDKValidationError>;
/** @internal */
export declare const Category$inboundSchema: z.ZodNativeEnum<typeof Category>;
/** @internal */
export declare const Category$outboundSchema: z.ZodNativeEnum<typeof Category>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Category$ {
    /** @deprecated use `Category$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly GepNotice: "gep_notice";
        readonly Compliance: "compliance";
    }>;
    /** @deprecated use `Category$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly GepNotice: "gep_notice";
        readonly Compliance: "compliance";
    }>;
}
/** @internal */
export declare const PostV1CompaniesAttachmentRequestBody$inboundSchema: z.ZodType<PostV1CompaniesAttachmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesAttachmentRequestBody$Outbound = {
    category: string;
    document: Document$Outbound | Blob;
};
/** @internal */
export declare const PostV1CompaniesAttachmentRequestBody$outboundSchema: z.ZodType<PostV1CompaniesAttachmentRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesAttachmentRequestBody$ {
    /** @deprecated use `PostV1CompaniesAttachmentRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesAttachmentRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesAttachmentRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesAttachmentRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentRequestBody>;
    /** @deprecated use `PostV1CompaniesAttachmentRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesAttachmentRequestBody$Outbound;
}
export declare function postV1CompaniesAttachmentRequestBodyToJSON(postV1CompaniesAttachmentRequestBody: PostV1CompaniesAttachmentRequestBody): string;
export declare function postV1CompaniesAttachmentRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesAttachmentRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesAttachmentRequest$inboundSchema: z.ZodType<PostV1CompaniesAttachmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesAttachmentRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesAttachmentRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesAttachmentRequest$outboundSchema: z.ZodType<PostV1CompaniesAttachmentRequest$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesAttachmentRequest$ {
    /** @deprecated use `PostV1CompaniesAttachmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesAttachmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesAttachmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesAttachmentRequest$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentRequest>;
    /** @deprecated use `PostV1CompaniesAttachmentRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesAttachmentRequest$Outbound;
}
export declare function postV1CompaniesAttachmentRequestToJSON(postV1CompaniesAttachmentRequest: PostV1CompaniesAttachmentRequest): string;
export declare function postV1CompaniesAttachmentRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesAttachmentRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesAttachmentResponse$inboundSchema: z.ZodType<PostV1CompaniesAttachmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesAttachmentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Attachment"?: components.CompanyAttachment$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesAttachmentResponse$outboundSchema: z.ZodType<PostV1CompaniesAttachmentResponse$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesAttachmentResponse$ {
    /** @deprecated use `PostV1CompaniesAttachmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesAttachmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesAttachmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesAttachmentResponse$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentResponse>;
    /** @deprecated use `PostV1CompaniesAttachmentResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesAttachmentResponse$Outbound;
}
export declare function postV1CompaniesAttachmentResponseToJSON(postV1CompaniesAttachmentResponse: PostV1CompaniesAttachmentResponse): string;
export declare function postV1CompaniesAttachmentResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesAttachmentResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiesattachment.d.ts.map