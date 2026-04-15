import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
    /**
     * The user's email address on Gusto. You can retrieve the user's email via company's `/admins`.
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
    xGustoAPIVersion?: VersionHeader | undefined;
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
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    object?: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody | undefined;
};
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound = {
    email: string;
    ip_address: string;
    external_user_id: string;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody>;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBodyToJSON(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody): string;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest>;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestToJSON(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest): string;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody, z.ZodTypeDef, unknown>;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBodyFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse, z.ZodTypeDef, unknown>;
export declare function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse, SDKValidationError>;
//# sourceMappingURL=postpartnermanagedcompaniescompanyuuidaccepttermsofservice.d.ts.map