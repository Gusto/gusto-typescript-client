import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Create a company location.
 */
export type PostV1CompaniesCompanyIdLocationsRequestBody = {
    phoneNumber: string;
    street1: string;
    street2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
    /**
     * Specify if this location is the company's mailing address.
     */
    mailingAddress?: boolean | undefined;
    /**
     * Specify if this location is the company's filing address.
     */
    filingAddress?: boolean | undefined;
};
export type PostV1CompaniesCompanyIdLocationsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Create a company location.
     */
    requestBody: PostV1CompaniesCompanyIdLocationsRequestBody;
};
export type PostV1CompaniesCompanyIdLocationsResponse = {
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
    location?: components.Location | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdLocationsRequestBody$Outbound = {
    phone_number: string;
    street_1: string;
    street_2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
    mailing_address?: boolean | undefined;
    filing_address?: boolean | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdLocationsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdLocationsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdLocationsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdLocationsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdLocationsRequestBodyToJSON(postV1CompaniesCompanyIdLocationsRequestBody: PostV1CompaniesCompanyIdLocationsRequestBody): string;
export declare function postV1CompaniesCompanyIdLocationsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdLocationsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdLocationsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdLocationsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdLocationsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdLocationsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdLocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdLocationsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdLocationsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdLocationsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdLocationsRequestToJSON(postV1CompaniesCompanyIdLocationsRequest: PostV1CompaniesCompanyIdLocationsRequest): string;
export declare function postV1CompaniesCompanyIdLocationsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdLocationsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdLocationsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdLocationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Location?: components.Location$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdLocationsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdLocationsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdLocationsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdLocationsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdLocationsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdLocationsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdLocationsResponseToJSON(postV1CompaniesCompanyIdLocationsResponse: PostV1CompaniesCompanyIdLocationsResponse): string;
export declare function postV1CompaniesCompanyIdLocationsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdLocationsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidlocations.d.ts.map