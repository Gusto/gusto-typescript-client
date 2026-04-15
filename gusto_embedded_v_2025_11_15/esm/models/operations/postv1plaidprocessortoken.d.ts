import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyBankAccount } from "../components/companybankaccount.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The owner type of the bank account
 */
export declare const OwnerType: {
    readonly Company: "Company";
};
/**
 * The owner type of the bank account
 */
export type OwnerType = ClosedEnum<typeof OwnerType>;
export type PostV1PlaidProcessorTokenRequestBody = {
    /**
     * The owner type of the bank account
     */
    ownerType: OwnerType;
    /**
     * The owner UUID of the bank account
     */
    ownerId: string;
    /**
     * The Plaid processor token
     */
    processorToken: string;
};
export type PostV1PlaidProcessorTokenRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1PlaidProcessorTokenRequestBody;
};
/**
 * A JSON object containing bank information
 */
export type PostV1PlaidProcessorTokenResponseBody = CompanyBankAccount;
export type PostV1PlaidProcessorTokenResponse = {
    httpMeta: HTTPMetadata;
    /**
     * A JSON object containing bank information
     */
    oneOf?: CompanyBankAccount | undefined;
};
/** @internal */
export declare const OwnerType$outboundSchema: z.ZodNativeEnum<typeof OwnerType>;
/** @internal */
export type PostV1PlaidProcessorTokenRequestBody$Outbound = {
    owner_type: string;
    owner_id: string;
    processor_token: string;
};
/** @internal */
export declare const PostV1PlaidProcessorTokenRequestBody$outboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequestBody$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenRequestBody>;
export declare function postV1PlaidProcessorTokenRequestBodyToJSON(postV1PlaidProcessorTokenRequestBody: PostV1PlaidProcessorTokenRequestBody): string;
/** @internal */
export type PostV1PlaidProcessorTokenRequest$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PlaidProcessorTokenRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PlaidProcessorTokenRequest$outboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequest$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenRequest>;
export declare function postV1PlaidProcessorTokenRequestToJSON(postV1PlaidProcessorTokenRequest: PostV1PlaidProcessorTokenRequest): string;
/** @internal */
export declare const PostV1PlaidProcessorTokenResponseBody$inboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponseBody, z.ZodTypeDef, unknown>;
export declare function postV1PlaidProcessorTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<PostV1PlaidProcessorTokenResponseBody, SDKValidationError>;
/** @internal */
export declare const PostV1PlaidProcessorTokenResponse$inboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponse, z.ZodTypeDef, unknown>;
export declare function postV1PlaidProcessorTokenResponseFromJSON(jsonString: string): SafeParseResult<PostV1PlaidProcessorTokenResponse, SDKValidationError>;
//# sourceMappingURL=postv1plaidprocessortoken.d.ts.map