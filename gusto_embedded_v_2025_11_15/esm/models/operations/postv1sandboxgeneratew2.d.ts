import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
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
    httpMeta: HTTPMetadata;
    /**
     * OK
     */
    form?: PostV1SandboxGenerateW2Form | undefined;
};
/** @internal */
export type PostV1SandboxGenerateW2RequestBody$Outbound = {
    employee_id: string;
    year?: number | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerateW2RequestBody$outboundSchema: z.ZodType<PostV1SandboxGenerateW2RequestBody$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2RequestBody>;
export declare function postV1SandboxGenerateW2RequestBodyToJSON(postV1SandboxGenerateW2RequestBody: PostV1SandboxGenerateW2RequestBody): string;
/** @internal */
export type PostV1SandboxGenerateW2Request$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1SandboxGenerateW2RequestBody$Outbound;
};
/** @internal */
export declare const PostV1SandboxGenerateW2Request$outboundSchema: z.ZodType<PostV1SandboxGenerateW2Request$Outbound, z.ZodTypeDef, PostV1SandboxGenerateW2Request>;
export declare function postV1SandboxGenerateW2RequestToJSON(postV1SandboxGenerateW2Request: PostV1SandboxGenerateW2Request): string;
/** @internal */
export declare const PostV1SandboxGenerateW2Form$inboundSchema: z.ZodType<PostV1SandboxGenerateW2Form, z.ZodTypeDef, unknown>;
export declare function postV1SandboxGenerateW2FormFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerateW2Form, SDKValidationError>;
/** @internal */
export declare const PostV1SandboxGenerateW2Response$inboundSchema: z.ZodType<PostV1SandboxGenerateW2Response, z.ZodTypeDef, unknown>;
export declare function postV1SandboxGenerateW2ResponseFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerateW2Response, SDKValidationError>;
//# sourceMappingURL=postv1sandboxgeneratew2.d.ts.map