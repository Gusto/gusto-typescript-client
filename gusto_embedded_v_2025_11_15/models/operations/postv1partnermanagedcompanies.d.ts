import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1PartnerManagedCompaniesSecurity = {
    systemAccessAuth: string;
};
/**
 * Information for the user who will be the primary payroll administrator for the new company.
 */
export type User = {
    /**
     * The first name of the user who will be the primary payroll admin.
     */
    firstName: string;
    /**
     * The last name of the user who will be the primary payroll admin.
     */
    lastName: string;
    /**
     * The email of the user who will be the primary payroll admin.
     */
    email: string;
    /**
     * The phone number of the user who will be the primary payroll admin.
     */
    phone?: string | undefined;
};
export type Company = {
    /**
     * The legal name of the company.
     */
    name: string;
    /**
     * The name of the company.
     */
    tradeName?: string | undefined;
    /**
     * The employer identification number (EIN) of the company.
     */
    ein?: string | undefined;
    /**
     * Whether the company only supports contractors. Should be set to true if the company has no W-2 employees. If not passed, will default to false (i.e. the company will support both contractors and employees).
     */
    contractorOnly?: boolean | undefined;
};
export type PostV1PartnerManagedCompaniesRequestBody = {
    /**
     * Information for the user who will be the primary payroll administrator for the new company.
     */
    user: User;
    company: Company;
};
export type PostV1PartnerManagedCompaniesRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1PartnerManagedCompaniesRequestBody;
};
/**
 * Object returned when creating a partner managed company
 */
export type PostV1PartnerManagedCompaniesResponseBody = {
    /**
     * Access token that can be used for OAuth access to the account. Access tokens expire 2 hours after they are issued.
     */
    accessToken?: string | undefined;
    /**
     * Refresh token that can be exchanged for a new access token.
     */
    refreshToken?: string | undefined;
    /**
     * Gusto’s UUID for the company
     */
    companyUuid?: string | undefined;
    /**
     * Time of access_token expiration in seconds
     */
    expiresIn?: number | undefined;
};
export type PostV1PartnerManagedCompaniesResponse = {
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
    object?: PostV1PartnerManagedCompaniesResponseBody | undefined;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesSecurity$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PartnerManagedCompaniesSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesSecurity$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesSecurity$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PartnerManagedCompaniesSecurity$ {
    /** @deprecated use `PostV1PartnerManagedCompaniesSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PartnerManagedCompaniesSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesSecurity$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesSecurity>;
    /** @deprecated use `PostV1PartnerManagedCompaniesSecurity$Outbound` instead. */
    type Outbound = PostV1PartnerManagedCompaniesSecurity$Outbound;
}
export declare function postV1PartnerManagedCompaniesSecurityToJSON(postV1PartnerManagedCompaniesSecurity: PostV1PartnerManagedCompaniesSecurity): string;
export declare function postV1PartnerManagedCompaniesSecurityFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesSecurity, SDKValidationError>;
/** @internal */
export declare const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
/** @internal */
export type User$Outbound = {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string | undefined;
};
/** @internal */
export declare const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace User$ {
    /** @deprecated use `User$inboundSchema` instead. */
    const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown>;
    /** @deprecated use `User$outboundSchema` instead. */
    const outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
    /** @deprecated use `User$Outbound` instead. */
    type Outbound = User$Outbound;
}
export declare function userToJSON(user: User): string;
export declare function userFromJSON(jsonString: string): SafeParseResult<User, SDKValidationError>;
/** @internal */
export declare const Company$inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown>;
/** @internal */
export type Company$Outbound = {
    name: string;
    trade_name?: string | undefined;
    ein?: string | undefined;
    contractor_only?: boolean | undefined;
};
/** @internal */
export declare const Company$outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Company$ {
    /** @deprecated use `Company$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown>;
    /** @deprecated use `Company$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
    /** @deprecated use `Company$Outbound` instead. */
    type Outbound = Company$Outbound;
}
export declare function companyToJSON(company: Company): string;
export declare function companyFromJSON(jsonString: string): SafeParseResult<Company, SDKValidationError>;
/** @internal */
export declare const PostV1PartnerManagedCompaniesRequestBody$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PartnerManagedCompaniesRequestBody$Outbound = {
    user: User$Outbound;
    company: Company$Outbound;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesRequestBody$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequestBody$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PartnerManagedCompaniesRequestBody$ {
    /** @deprecated use `PostV1PartnerManagedCompaniesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PartnerManagedCompaniesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequestBody$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesRequestBody>;
    /** @deprecated use `PostV1PartnerManagedCompaniesRequestBody$Outbound` instead. */
    type Outbound = PostV1PartnerManagedCompaniesRequestBody$Outbound;
}
export declare function postV1PartnerManagedCompaniesRequestBodyToJSON(postV1PartnerManagedCompaniesRequestBody: PostV1PartnerManagedCompaniesRequestBody): string;
export declare function postV1PartnerManagedCompaniesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1PartnerManagedCompaniesRequest$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PartnerManagedCompaniesRequest$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PartnerManagedCompaniesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesRequest$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequest$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PartnerManagedCompaniesRequest$ {
    /** @deprecated use `PostV1PartnerManagedCompaniesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PartnerManagedCompaniesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequest$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesRequest>;
    /** @deprecated use `PostV1PartnerManagedCompaniesRequest$Outbound` instead. */
    type Outbound = PostV1PartnerManagedCompaniesRequest$Outbound;
}
export declare function postV1PartnerManagedCompaniesRequestToJSON(postV1PartnerManagedCompaniesRequest: PostV1PartnerManagedCompaniesRequest): string;
export declare function postV1PartnerManagedCompaniesRequestFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1PartnerManagedCompaniesResponseBody$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PartnerManagedCompaniesResponseBody$Outbound = {
    access_token?: string | undefined;
    refresh_token?: string | undefined;
    company_uuid?: string | undefined;
    expires_in?: number | undefined;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesResponseBody$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponseBody$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PartnerManagedCompaniesResponseBody$ {
    /** @deprecated use `PostV1PartnerManagedCompaniesResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PartnerManagedCompaniesResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponseBody$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesResponseBody>;
    /** @deprecated use `PostV1PartnerManagedCompaniesResponseBody$Outbound` instead. */
    type Outbound = PostV1PartnerManagedCompaniesResponseBody$Outbound;
}
export declare function postV1PartnerManagedCompaniesResponseBodyToJSON(postV1PartnerManagedCompaniesResponseBody: PostV1PartnerManagedCompaniesResponseBody): string;
export declare function postV1PartnerManagedCompaniesResponseBodyFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesResponseBody, SDKValidationError>;
/** @internal */
export declare const PostV1PartnerManagedCompaniesResponse$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PartnerManagedCompaniesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PostV1PartnerManagedCompaniesResponseBody$Outbound | undefined;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesResponse$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponse$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PartnerManagedCompaniesResponse$ {
    /** @deprecated use `PostV1PartnerManagedCompaniesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PartnerManagedCompaniesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponse$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesResponse>;
    /** @deprecated use `PostV1PartnerManagedCompaniesResponse$Outbound` instead. */
    type Outbound = PostV1PartnerManagedCompaniesResponse$Outbound;
}
export declare function postV1PartnerManagedCompaniesResponseToJSON(postV1PartnerManagedCompaniesResponse: PostV1PartnerManagedCompaniesResponse): string;
export declare function postV1PartnerManagedCompaniesResponseFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesResponse, SDKValidationError>;
//# sourceMappingURL=postv1partnermanagedcompanies.d.ts.map