import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
    /**
     * The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints.
     */
    email: string;
    /**
     * The IP address of the user who viewed and accepted the Terms of Service.
     */
    ipAddress: string;
    /**
     * The user ID on your platform.
     */
    externalUserId: string;
};
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody;
};
/**
 * Example response
 */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody = {
    /**
     * Whether the latest terms have been accepted by the user.
     */
    latestTermsAccepted?: boolean | undefined;
};
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse = {
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
    object?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody | undefined;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound = {
    email: string;
    ip_address: string;
    external_user_id: string;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBodyToJSON(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody): string;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBodyFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestToJSON(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest): string;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound = {
    latest_terms_accepted?: boolean | undefined;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBodyToJSON(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody): string;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBodyFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound | undefined;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseToJSON(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse): string;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse, SDKValidationError>;
//# sourceMappingURL=postpartnermanagedcompaniescompanyuuidaccepttermsofservice.d.ts.map