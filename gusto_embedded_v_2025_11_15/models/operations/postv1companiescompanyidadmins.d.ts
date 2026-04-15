import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdAdminsRequestBody = {
    /**
     * The first name of the admin.
     */
    firstName: string;
    /**
     * The last name of the admin.
     */
    lastName: string;
    /**
     * The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them.
     */
    email: string;
};
export type PostV1CompaniesCompanyIdAdminsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdAdminsRequestBody;
};
export type PostV1CompaniesCompanyIdAdminsResponse = {
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
    admin?: components.Admin | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdAdminsRequestBody$Outbound = {
    first_name: string;
    last_name: string;
    email: string;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdAdminsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdAdminsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdAdminsRequestBodyToJSON(postV1CompaniesCompanyIdAdminsRequestBody: PostV1CompaniesCompanyIdAdminsRequestBody): string;
export declare function postV1CompaniesCompanyIdAdminsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdAdminsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdAdminsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdAdminsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdAdminsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdAdminsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdAdminsRequestToJSON(postV1CompaniesCompanyIdAdminsRequest: PostV1CompaniesCompanyIdAdminsRequest): string;
export declare function postV1CompaniesCompanyIdAdminsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdAdminsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdAdminsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Admin?: components.Admin$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdAdminsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdAdminsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdAdminsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdAdminsResponseToJSON(postV1CompaniesCompanyIdAdminsResponse: PostV1CompaniesCompanyIdAdminsResponse): string;
export declare function postV1CompaniesCompanyIdAdminsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdAdminsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidadmins.d.ts.map