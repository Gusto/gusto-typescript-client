import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Signatory } from "../components/signatory.js";
import { SignatoryCreateRequest, SignatoryCreateRequest$Outbound } from "../components/signatorycreaterequest.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PostV1CompanySignatoriesHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PostV1CompanySignatoriesHeaderXGustoAPIVersion = ClosedEnum<typeof PostV1CompanySignatoriesHeaderXGustoAPIVersion>;
export type PostV1CompanySignatoriesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PostV1CompanySignatoriesHeaderXGustoAPIVersion | undefined;
    signatoryCreateRequest: SignatoryCreateRequest;
};
export type PostV1CompanySignatoriesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    signatory?: Signatory | undefined;
};
/** @internal */
export declare const PostV1CompanySignatoriesHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PostV1CompanySignatoriesHeaderXGustoAPIVersion>;
/** @internal */
export type PostV1CompanySignatoriesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    "Signatory-Create-Request": SignatoryCreateRequest$Outbound;
};
/** @internal */
export declare const PostV1CompanySignatoriesRequest$outboundSchema: z.ZodType<PostV1CompanySignatoriesRequest$Outbound, z.ZodTypeDef, PostV1CompanySignatoriesRequest>;
export declare function postV1CompanySignatoriesRequestToJSON(postV1CompanySignatoriesRequest: PostV1CompanySignatoriesRequest): string;
/** @internal */
export declare const PostV1CompanySignatoriesResponse$inboundSchema: z.ZodType<PostV1CompanySignatoriesResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompanySignatoriesResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompanySignatoriesResponse, SDKValidationError>;
//# sourceMappingURL=postv1companysignatories.d.ts.map