import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The signatory's home address
 */
export type HomeAddress = {
    street1: string;
    street2?: string | undefined;
    city: string;
    state: string;
    zip: string;
};
export type PostV1CompanySignatoriesRequestBody = {
    ssn: string;
    firstName: string;
    middleInitial?: string | undefined;
    lastName: string;
    email: string;
    title: string;
    phone: string;
    birthday: string;
    /**
     * The signatory's home address
     */
    homeAddress: HomeAddress;
};
export type PostV1CompanySignatoriesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompanySignatoriesRequestBody;
};
export type PostV1CompanySignatoriesResponse = {
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
export declare const HomeAddress$inboundSchema: z.ZodType<HomeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type HomeAddress$Outbound = {
    street_1: string;
    street_2?: string | undefined;
    city: string;
    state: string;
    zip: string;
};
/** @internal */
export declare const HomeAddress$outboundSchema: z.ZodType<HomeAddress$Outbound, z.ZodTypeDef, HomeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HomeAddress$ {
    /** @deprecated use `HomeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HomeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `HomeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HomeAddress$Outbound, z.ZodTypeDef, HomeAddress>;
    /** @deprecated use `HomeAddress$Outbound` instead. */
    type Outbound = HomeAddress$Outbound;
}
export declare function homeAddressToJSON(homeAddress: HomeAddress): string;
export declare function homeAddressFromJSON(jsonString: string): SafeParseResult<HomeAddress, SDKValidationError>;
/** @internal */
export declare const PostV1CompanySignatoriesRequestBody$inboundSchema: z.ZodType<PostV1CompanySignatoriesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompanySignatoriesRequestBody$Outbound = {
    ssn: string;
    first_name: string;
    middle_initial?: string | undefined;
    last_name: string;
    email: string;
    title: string;
    phone: string;
    birthday: string;
    home_address: HomeAddress$Outbound;
};
/** @internal */
export declare const PostV1CompanySignatoriesRequestBody$outboundSchema: z.ZodType<PostV1CompanySignatoriesRequestBody$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompanySignatoriesRequestBody$ {
    /** @deprecated use `PostV1CompanySignatoriesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompanySignatoriesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompanySignatoriesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompanySignatoriesRequestBody$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesRequestBody>;
    /** @deprecated use `PostV1CompanySignatoriesRequestBody$Outbound` instead. */
    type Outbound = PostV1CompanySignatoriesRequestBody$Outbound;
}
export declare function postV1CompanySignatoriesRequestBodyToJSON(postV1CompanySignatoriesRequestBody: PostV1CompanySignatoriesRequestBody): string;
export declare function postV1CompanySignatoriesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompanySignatoriesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompanySignatoriesRequest$inboundSchema: z.ZodType<PostV1CompanySignatoriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompanySignatoriesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompanySignatoriesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompanySignatoriesRequest$outboundSchema: z.ZodType<PostV1CompanySignatoriesRequest$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompanySignatoriesRequest$ {
    /** @deprecated use `PostV1CompanySignatoriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompanySignatoriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompanySignatoriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompanySignatoriesRequest$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesRequest>;
    /** @deprecated use `PostV1CompanySignatoriesRequest$Outbound` instead. */
    type Outbound = PostV1CompanySignatoriesRequest$Outbound;
}
export declare function postV1CompanySignatoriesRequestToJSON(postV1CompanySignatoriesRequest: PostV1CompanySignatoriesRequest): string;
export declare function postV1CompanySignatoriesRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompanySignatoriesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompanySignatoriesResponse$inboundSchema: z.ZodType<PostV1CompanySignatoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompanySignatoriesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Signatory?: components.Signatory$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompanySignatoriesResponse$outboundSchema: z.ZodType<PostV1CompanySignatoriesResponse$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompanySignatoriesResponse$ {
    /** @deprecated use `PostV1CompanySignatoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompanySignatoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompanySignatoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompanySignatoriesResponse$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesResponse>;
    /** @deprecated use `PostV1CompanySignatoriesResponse$Outbound` instead. */
    type Outbound = PostV1CompanySignatoriesResponse$Outbound;
}
export declare function postV1CompanySignatoriesResponseToJSON(postV1CompanySignatoriesResponse: PostV1CompanySignatoriesResponse): string;
export declare function postV1CompanySignatoriesResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompanySignatoriesResponse, SDKValidationError>;
//# sourceMappingURL=postv1companysignatories.d.ts.map