import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody = {
    /**
     * The user's email address on Gusto. You can retrieve the user's email via company's `/admins`.
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
    xGustoAPIVersion?: VersionHeader | undefined;
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
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    object?: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody | undefined;
};
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound = {
    email: string;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody>;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBodyToJSON(postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody): string;
/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody$Outbound;
};
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$outboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest$Outbound, z.ZodTypeDef, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest>;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestToJSON(postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest): string;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody, z.ZodTypeDef, unknown>;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBodyFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseBody, SDKValidationError>;
/** @internal */
export declare const PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse$inboundSchema: z.ZodType<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, z.ZodTypeDef, unknown>;
export declare function postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponseFromJSON(jsonString: string): SafeParseResult<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, SDKValidationError>;
//# sourceMappingURL=postpartnermanagedcompaniescompanyuuidretrievetermsofservice.d.ts.map