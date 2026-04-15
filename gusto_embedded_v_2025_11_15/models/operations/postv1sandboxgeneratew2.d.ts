import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1SandboxGenerateW2RequestBody = {
    /**
     * The employee UUID.
     */
    employeeId: string;
    /**
     * Must be equal to or more recent than 2015. If not specified, defaults to the previous year.
     *
     * @remarks
     */
    year?: number | undefined;
};
export type PostV1SandboxGenerateW2Request = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1SandboxGenerateW2RequestBody;
};
/**
 * OK
 */
export type PostV1SandboxGenerateW2Form = {
    /**
     * The UUID of the employee
     */
    employeeUuid?: string | undefined;
    /**
     * The UUID of the form
     */
    uuid: string;
    /**
     * The type identifier of the form
     */
    name?: string | undefined;
    /**
     * The title of the form
     */
    title?: string | undefined;
    /**
     * The description of the form
     */
    description?: string | undefined;
    /**
     * If the form is in a draft state. E.g. End of year tax forms may be provided in a draft state prior to being finalized.
     */
    draft?: boolean | undefined;
    /**
     * The year of this form. For some forms, e.g. tax forms, this is the year which the form represents. A W2 for January - December 2022 would be delivered in January 2023 and have a year value of 2022. This value is nullable and will not be present on all forms.
     */
    year?: number | null | undefined;
    /**
     * The quarter of this form. For some forms, e.g. tax forms, this is the calendar quarter which this form represents. An Employer's Quarterly Federal Tax Return (Form 941) for April, May, June 2022 would have a quarter value of 2 (and a year value of 2022). This value is nullable and will not be present on all forms.
     */
    quarter?: number | null | undefined;
    /**
     * A boolean flag that indicates whether the form needs signing or not. Note that this value will change after the form is signed.
     */
    requiresSigning?: boolean | undefined;
    /**
     * The content type of the associated document. Most forms are PDFs with a content type of `application/pdf`. Some tax file packages will be zip files (containing PDFs) with a content type of `application/zip`. This attribute will be `null` when the document has not been prepared.
     */
    documentContentType?: string | null | undefined;
};
export type PostV1SandboxGenerateW2Response = {
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
     * OK
     */
    form?: PostV1SandboxGenerateW2Form | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerateW2RequestBody$inboundSchema: z.ZodType<PostV1SandboxGenerateW2RequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerateW2RequestBody$Outbound = {
    employee_id: string;
    year?: number | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerateW2RequestBody$outboundSchema: z.ZodType<PostV1SandboxGenerateW2RequestBody$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2RequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerateW2RequestBody$ {
    /** @deprecated use `PostV1SandboxGenerateW2RequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerateW2RequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerateW2RequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerateW2RequestBody$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2RequestBody>;
    /** @deprecated use `PostV1SandboxGenerateW2RequestBody$Outbound` instead. */
    type Outbound = PostV1SandboxGenerateW2RequestBody$Outbound;
}
export declare function postV1SandboxGenerateW2RequestBodyToJSON(postV1SandboxGenerateW2RequestBody: PostV1SandboxGenerateW2RequestBody): string;
export declare function postV1SandboxGenerateW2RequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerateW2RequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1SandboxGenerateW2Request$inboundSchema: z.ZodType<PostV1SandboxGenerateW2Request, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerateW2Request$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1SandboxGenerateW2RequestBody$Outbound;
};
/** @internal */
export declare const PostV1SandboxGenerateW2Request$outboundSchema: z.ZodType<PostV1SandboxGenerateW2Request$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Request>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerateW2Request$ {
    /** @deprecated use `PostV1SandboxGenerateW2Request$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerateW2Request, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerateW2Request$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerateW2Request$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Request>;
    /** @deprecated use `PostV1SandboxGenerateW2Request$Outbound` instead. */
    type Outbound = PostV1SandboxGenerateW2Request$Outbound;
}
export declare function postV1SandboxGenerateW2RequestToJSON(postV1SandboxGenerateW2Request: PostV1SandboxGenerateW2Request): string;
export declare function postV1SandboxGenerateW2RequestFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerateW2Request, SDKValidationError>;
/** @internal */
export declare const PostV1SandboxGenerateW2Form$inboundSchema: z.ZodType<PostV1SandboxGenerateW2Form, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerateW2Form$Outbound = {
    employee_uuid?: string | undefined;
    uuid: string;
    name?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    draft?: boolean | undefined;
    year?: number | null | undefined;
    quarter?: number | null | undefined;
    requires_signing?: boolean | undefined;
    document_content_type?: string | null | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerateW2Form$outboundSchema: z.ZodType<PostV1SandboxGenerateW2Form$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Form>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerateW2Form$ {
    /** @deprecated use `PostV1SandboxGenerateW2Form$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerateW2Form, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerateW2Form$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerateW2Form$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Form>;
    /** @deprecated use `PostV1SandboxGenerateW2Form$Outbound` instead. */
    type Outbound = PostV1SandboxGenerateW2Form$Outbound;
}
export declare function postV1SandboxGenerateW2FormToJSON(postV1SandboxGenerateW2Form: PostV1SandboxGenerateW2Form): string;
export declare function postV1SandboxGenerateW2FormFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerateW2Form, SDKValidationError>;
/** @internal */
export declare const PostV1SandboxGenerateW2Response$inboundSchema: z.ZodType<PostV1SandboxGenerateW2Response, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerateW2Response$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form?: PostV1SandboxGenerateW2Form$Outbound | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerateW2Response$outboundSchema: z.ZodType<PostV1SandboxGenerateW2Response$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Response>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerateW2Response$ {
    /** @deprecated use `PostV1SandboxGenerateW2Response$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerateW2Response, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerateW2Response$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerateW2Response$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Response>;
    /** @deprecated use `PostV1SandboxGenerateW2Response$Outbound` instead. */
    type Outbound = PostV1SandboxGenerateW2Response$Outbound;
}
export declare function postV1SandboxGenerateW2ResponseToJSON(postV1SandboxGenerateW2Response: PostV1SandboxGenerateW2Response): string;
export declare function postV1SandboxGenerateW2ResponseFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerateW2Response, SDKValidationError>;
//# sourceMappingURL=postv1sandboxgeneratew2.d.ts.map