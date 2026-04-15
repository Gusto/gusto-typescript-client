import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Signatory } from "../components/signatory.js";
import { SignatoryInviteRequest, SignatoryInviteRequest$Outbound } from "../components/signatoryinviterequest.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PostV1CompaniesCompanyUuidSignatoriesInviteHeaderXGustoAPIVersion = ClosedEnum<typeof PostV1CompaniesCompanyUuidSignatoriesInviteHeaderXGustoAPIVersion>;
export type PostV1CompaniesCompanyUuidSignatoriesInviteRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PostV1CompaniesCompanyUuidSignatoriesInviteHeaderXGustoAPIVersion | undefined;
    signatoryInviteRequest: SignatoryInviteRequest;
};
export type PostV1CompaniesCompanyUuidSignatoriesInviteResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    signatory?: Signatory | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyUuidSignatoriesInviteHeaderXGustoAPIVersion>;
/** @internal */
export type PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    "Signatory-Invite-Request": SignatoryInviteRequest$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyUuidSignatoriesInviteRequest>;
export declare function postV1CompaniesCompanyUuidSignatoriesInviteRequestToJSON(postV1CompaniesCompanyUuidSignatoriesInviteRequest: PostV1CompaniesCompanyUuidSignatoriesInviteRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyUuidSignatoriesInviteResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyUuidSignatoriesInviteResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyUuidSignatoriesInviteResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyUuidSignatoriesInviteResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyuuidsignatoriesinvite.d.ts.map