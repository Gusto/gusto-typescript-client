import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyAttachment } from "../components/companyattachment.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
     * The binary payload of the file to be uploaded.
     */
    document: Document | Blob;
    /**
     * The category of a company attachment.
     */
    category: Category;
};
export type PostV1CompaniesAttachmentRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1CompaniesAttachmentRequestBody;
};
export type PostV1CompaniesAttachmentResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyAttachment?: CompanyAttachment | undefined;
};
/** @internal */
export type Document$Outbound = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/** @internal */
export declare const Document$outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
export declare function documentToJSON(document: Document): string;
/** @internal */
export declare const Category$outboundSchema: z.ZodNativeEnum<typeof Category>;
/** @internal */
export type PostV1CompaniesAttachmentRequestBody$Outbound = {
    document: Document$Outbound | Blob;
    category: string;
};
/** @internal */
export declare const PostV1CompaniesAttachmentRequestBody$outboundSchema: z.ZodType<PostV1CompaniesAttachmentRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentRequestBody>;
export declare function postV1CompaniesAttachmentRequestBodyToJSON(postV1CompaniesAttachmentRequestBody: PostV1CompaniesAttachmentRequestBody): string;
/** @internal */
export type PostV1CompaniesAttachmentRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesAttachmentRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesAttachmentRequest$outboundSchema: z.ZodType<PostV1CompaniesAttachmentRequest$Outbound, z.ZodTypeDef, PostV1CompaniesAttachmentRequest>;
export declare function postV1CompaniesAttachmentRequestToJSON(postV1CompaniesAttachmentRequest: PostV1CompaniesAttachmentRequest): string;
/** @internal */
export declare const PostV1CompaniesAttachmentResponse$inboundSchema: z.ZodType<PostV1CompaniesAttachmentResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesAttachmentResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesAttachmentResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiesattachment.d.ts.map