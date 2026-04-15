import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody = {
    /**
     * The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints.
     */
    email: string;
};
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody;
};
/**
 * Example response
 */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody = {
    /**
     * Whether the latest terms have been accepted by the user.
     */
    latestTermsAccepted?: boolean | undefined;
};
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse = {
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
    object?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody | undefined;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound = {
    email: string;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBodyToJSON(postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody): string;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBodyFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestToJSON(postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest): string;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$Outbound = {
    latest_terms_accepted?: boolean | undefined;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBodyToJSON(postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody): string;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBodyFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$Outbound | undefined;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$ {
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse>;
    /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$Outbound` instead. */
    type Outbound = PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$Outbound;
}
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseToJSON(postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse): string;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, SDKValidationError>;
//# sourceMappingURL=postpartnermanagedcompaniescompanyuuidretrievetermsofservice.d.ts.map