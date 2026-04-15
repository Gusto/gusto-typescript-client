import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody = {
    firstName?: string | undefined;
    lastName?: string | undefined;
    title?: string | undefined;
    email: string;
};
export type PostV1CompaniesCompanyUuidSignatoriesInviteRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody;
};
export type PostV1CompaniesCompanyUuidSignatoriesInviteResponse = {
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
    signatory?: components.Signatory | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$Outbound = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    title?: string | undefined;
    email: string;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyUuidSignatoriesInviteRequestBodyToJSON(postV1CompaniesCompanyUuidSignatoriesInviteRequestBody: PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody): string;
export declare function postV1CompaniesCompanyUuidSignatoriesInviteRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyUuidSignatoriesInviteRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidSignatoriesInviteRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteRequest>;
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound;
}
export declare function postV1CompaniesCompanyUuidSignatoriesInviteRequestToJSON(postV1CompaniesCompanyUuidSignatoriesInviteRequest: PostV1CompaniesCompanyUuidSignatoriesInviteRequest): string;
export declare function postV1CompaniesCompanyUuidSignatoriesInviteRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidSignatoriesInviteRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyUuidSignatoriesInviteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Signatory?: components.Signatory$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyUuidSignatoriesInviteResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteResponse>;
    /** @deprecated use `PostV1CompaniesCompanyUuidSignatoriesInviteResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyUuidSignatoriesInviteResponse$Outbound;
}
export declare function postV1CompaniesCompanyUuidSignatoriesInviteResponseToJSON(postV1CompaniesCompanyUuidSignatoriesInviteResponse: PostV1CompaniesCompanyUuidSignatoriesInviteResponse): string;
export declare function postV1CompaniesCompanyUuidSignatoriesInviteResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidSignatoriesInviteResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyuuidsignatoriesinvite.d.ts.map