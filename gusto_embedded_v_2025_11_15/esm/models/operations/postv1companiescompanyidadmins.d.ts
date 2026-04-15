import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Admin } from "../components/admin.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdAdminsRequestBody;
};
export type PostV1CompaniesCompanyIdAdminsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    admin?: Admin | undefined;
};
/** @internal */
export type PostV1CompaniesCompanyIdAdminsRequestBody$Outbound = {
    first_name: string;
    last_name: string;
    email: string;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsRequestBody>;
export declare function postV1CompaniesCompanyIdAdminsRequestBodyToJSON(postV1CompaniesCompanyIdAdminsRequestBody: PostV1CompaniesCompanyIdAdminsRequestBody): string;
/** @internal */
export type PostV1CompaniesCompanyIdAdminsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdAdminsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdAdminsRequest>;
export declare function postV1CompaniesCompanyIdAdminsRequestToJSON(postV1CompaniesCompanyIdAdminsRequest: PostV1CompaniesCompanyIdAdminsRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdAdminsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdAdminsResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdAdminsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdAdminsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidadmins.d.ts.map