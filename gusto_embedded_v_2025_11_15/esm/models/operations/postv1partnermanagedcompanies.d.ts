import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
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
    httpMeta: HTTPMetadata;
    /**
     * OK
     */
    object?: PostV1PartnerManagedCompaniesResponseBody | undefined;
};
/** @internal */
export type PostV1PartnerManagedCompaniesSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesSecurity$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesSecurity$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesSecurity>;
export declare function postV1PartnerManagedCompaniesSecurityToJSON(postV1PartnerManagedCompaniesSecurity: PostV1PartnerManagedCompaniesSecurity): string;
/** @internal */
export type User$Outbound = {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string | undefined;
};
/** @internal */
export declare const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User>;
export declare function userToJSON(user: User): string;
/** @internal */
export type Company$Outbound = {
    name: string;
    trade_name?: string | undefined;
    ein?: string | undefined;
    contractor_only?: boolean | undefined;
};
/** @internal */
export declare const Company$outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
export declare function companyToJSON(company: Company): string;
/** @internal */
export type PostV1PartnerManagedCompaniesRequestBody$Outbound = {
    user: User$Outbound;
    company: Company$Outbound;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesRequestBody$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequestBody$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesRequestBody>;
export declare function postV1PartnerManagedCompaniesRequestBodyToJSON(postV1PartnerManagedCompaniesRequestBody: PostV1PartnerManagedCompaniesRequestBody): string;
/** @internal */
export type PostV1PartnerManagedCompaniesRequest$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PartnerManagedCompaniesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PartnerManagedCompaniesRequest$outboundSchema: z.ZodType<PostV1PartnerManagedCompaniesRequest$Outbound, z.ZodTypeDef, PostV1PartnerManagedCompaniesRequest>;
export declare function postV1PartnerManagedCompaniesRequestToJSON(postV1PartnerManagedCompaniesRequest: PostV1PartnerManagedCompaniesRequest): string;
/** @internal */
export declare const PostV1PartnerManagedCompaniesResponseBody$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponseBody, z.ZodTypeDef, unknown>;
export declare function postV1PartnerManagedCompaniesResponseBodyFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesResponseBody, SDKValidationError>;
/** @internal */
export declare const PostV1PartnerManagedCompaniesResponse$inboundSchema: z.ZodType<PostV1PartnerManagedCompaniesResponse, z.ZodTypeDef, unknown>;
export declare function postV1PartnerManagedCompaniesResponseFromJSON(jsonString: string): SafeParseResult<PostV1PartnerManagedCompaniesResponse, SDKValidationError>;
//# sourceMappingURL=postv1partnermanagedcompanies.d.ts.map