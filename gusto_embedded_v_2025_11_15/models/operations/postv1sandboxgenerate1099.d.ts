import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1SandboxGenerate1099RequestBody = {
    /**
     * The contractor UUID.
     */
    contractorId: string;
    /**
     * Must be equal to or more recent than 2015. If not specified, defaults to the previous year.
     *
     * @remarks
     */
    year?: number | undefined;
};
export type PostV1SandboxGenerate1099Request = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1SandboxGenerate1099RequestBody;
};
export type PostV1SandboxGenerate1099Response = {
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
    form1099?: components.Form1099 | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerate1099RequestBody$inboundSchema: z.ZodType<PostV1SandboxGenerate1099RequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerate1099RequestBody$Outbound = {
    contractor_id: string;
    year?: number | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerate1099RequestBody$outboundSchema: z.ZodType<PostV1SandboxGenerate1099RequestBody$Outbound, z.ZodTypeDef, PostV1SandboxGenerate1099RequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerate1099RequestBody$ {
    /** @deprecated use `PostV1SandboxGenerate1099RequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerate1099RequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerate1099RequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerate1099RequestBody$Outbound, z.ZodTypeDef, PostV1SandboxGenerate1099RequestBody>;
    /** @deprecated use `PostV1SandboxGenerate1099RequestBody$Outbound` instead. */
    type Outbound = PostV1SandboxGenerate1099RequestBody$Outbound;
}
export declare function postV1SandboxGenerate1099RequestBodyToJSON(postV1SandboxGenerate1099RequestBody: PostV1SandboxGenerate1099RequestBody): string;
export declare function postV1SandboxGenerate1099RequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerate1099RequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1SandboxGenerate1099Request$inboundSchema: z.ZodType<PostV1SandboxGenerate1099Request, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerate1099Request$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1SandboxGenerate1099RequestBody$Outbound;
};
/** @internal */
export declare const PostV1SandboxGenerate1099Request$outboundSchema: z.ZodType<PostV1SandboxGenerate1099Request$Outbound, z.ZodTypeDef, PostV1SandboxGenerate1099Request>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerate1099Request$ {
    /** @deprecated use `PostV1SandboxGenerate1099Request$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerate1099Request, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerate1099Request$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerate1099Request$Outbound, z.ZodTypeDef, PostV1SandboxGenerate1099Request>;
    /** @deprecated use `PostV1SandboxGenerate1099Request$Outbound` instead. */
    type Outbound = PostV1SandboxGenerate1099Request$Outbound;
}
export declare function postV1SandboxGenerate1099RequestToJSON(postV1SandboxGenerate1099Request: PostV1SandboxGenerate1099Request): string;
export declare function postV1SandboxGenerate1099RequestFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerate1099Request, SDKValidationError>;
/** @internal */
export declare const PostV1SandboxGenerate1099Response$inboundSchema: z.ZodType<PostV1SandboxGenerate1099Response, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1SandboxGenerate1099Response$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form_1099?: components.Form1099$Outbound | undefined;
};
/** @internal */
export declare const PostV1SandboxGenerate1099Response$outboundSchema: z.ZodType<PostV1SandboxGenerate1099Response$Outbound, z.ZodTypeDef, PostV1SandboxGenerate1099Response>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1SandboxGenerate1099Response$ {
    /** @deprecated use `PostV1SandboxGenerate1099Response$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1SandboxGenerate1099Response, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1SandboxGenerate1099Response$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1SandboxGenerate1099Response$Outbound, z.ZodTypeDef, PostV1SandboxGenerate1099Response>;
    /** @deprecated use `PostV1SandboxGenerate1099Response$Outbound` instead. */
    type Outbound = PostV1SandboxGenerate1099Response$Outbound;
}
export declare function postV1SandboxGenerate1099ResponseToJSON(postV1SandboxGenerate1099Response: PostV1SandboxGenerate1099Response): string;
export declare function postV1SandboxGenerate1099ResponseFromJSON(jsonString: string): SafeParseResult<PostV1SandboxGenerate1099Response, SDKValidationError>;
//# sourceMappingURL=postv1sandboxgenerate1099.d.ts.map