import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostDepartmentsRequestBody = {
    title?: string | undefined;
};
export type PostDepartmentsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostDepartmentsRequestBody;
};
export type PostDepartmentsResponse = {
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
     * Department Object Example
     */
    department?: components.Department | undefined;
};
/** @internal */
export declare const PostDepartmentsRequestBody$inboundSchema: z.ZodType<PostDepartmentsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostDepartmentsRequestBody$Outbound = {
    title?: string | undefined;
};
/** @internal */
export declare const PostDepartmentsRequestBody$outboundSchema: z.ZodType<PostDepartmentsRequestBody$Outbound, z.ZodTypeDef, PostDepartmentsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostDepartmentsRequestBody$ {
    /** @deprecated use `PostDepartmentsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostDepartmentsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostDepartmentsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostDepartmentsRequestBody$Outbound, z.ZodTypeDef, PostDepartmentsRequestBody>;
    /** @deprecated use `PostDepartmentsRequestBody$Outbound` instead. */
    type Outbound = PostDepartmentsRequestBody$Outbound;
}
export declare function postDepartmentsRequestBodyToJSON(postDepartmentsRequestBody: PostDepartmentsRequestBody): string;
export declare function postDepartmentsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostDepartmentsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostDepartmentsRequest$inboundSchema: z.ZodType<PostDepartmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostDepartmentsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostDepartmentsRequestBody$Outbound;
};
/** @internal */
export declare const PostDepartmentsRequest$outboundSchema: z.ZodType<PostDepartmentsRequest$Outbound, z.ZodTypeDef, PostDepartmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostDepartmentsRequest$ {
    /** @deprecated use `PostDepartmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostDepartmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostDepartmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostDepartmentsRequest$Outbound, z.ZodTypeDef, PostDepartmentsRequest>;
    /** @deprecated use `PostDepartmentsRequest$Outbound` instead. */
    type Outbound = PostDepartmentsRequest$Outbound;
}
export declare function postDepartmentsRequestToJSON(postDepartmentsRequest: PostDepartmentsRequest): string;
export declare function postDepartmentsRequestFromJSON(jsonString: string): SafeParseResult<PostDepartmentsRequest, SDKValidationError>;
/** @internal */
export declare const PostDepartmentsResponse$inboundSchema: z.ZodType<PostDepartmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostDepartmentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Department?: components.Department$Outbound | undefined;
};
/** @internal */
export declare const PostDepartmentsResponse$outboundSchema: z.ZodType<PostDepartmentsResponse$Outbound, z.ZodTypeDef, PostDepartmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostDepartmentsResponse$ {
    /** @deprecated use `PostDepartmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostDepartmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostDepartmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostDepartmentsResponse$Outbound, z.ZodTypeDef, PostDepartmentsResponse>;
    /** @deprecated use `PostDepartmentsResponse$Outbound` instead. */
    type Outbound = PostDepartmentsResponse$Outbound;
}
export declare function postDepartmentsResponseToJSON(postDepartmentsResponse: PostDepartmentsResponse): string;
export declare function postDepartmentsResponseFromJSON(jsonString: string): SafeParseResult<PostDepartmentsResponse, SDKValidationError>;
//# sourceMappingURL=postdepartments.d.ts.map