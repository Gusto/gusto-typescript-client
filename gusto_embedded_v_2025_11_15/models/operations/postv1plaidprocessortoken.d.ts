import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1PlaidProcessorTokenRequestBody;
};
/**
 * A JSON object containing bank information
 */
export type PostV1PlaidProcessorTokenResponseBody = components.CompanyBankAccount;
export type PostV1PlaidProcessorTokenResponse = {
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
     * A JSON object containing bank information
     */
    oneOf?: components.CompanyBankAccount | undefined;
};
/** @internal */
export declare const OwnerType$inboundSchema: z.ZodNativeEnum<typeof OwnerType>;
/** @internal */
export declare const OwnerType$outboundSchema: z.ZodNativeEnum<typeof OwnerType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OwnerType$ {
    /** @deprecated use `OwnerType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
    }>;
    /** @deprecated use `OwnerType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
    }>;
}
/** @internal */
export declare const PostV1PlaidProcessorTokenRequestBody$inboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PlaidProcessorTokenRequestBody$Outbound = {
    owner_type: string;
    owner_id: string;
    processor_token: string;
};
/** @internal */
export declare const PostV1PlaidProcessorTokenRequestBody$outboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequestBody$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PlaidProcessorTokenRequestBody$ {
    /** @deprecated use `PostV1PlaidProcessorTokenRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PlaidProcessorTokenRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequestBody$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenRequestBody>;
    /** @deprecated use `PostV1PlaidProcessorTokenRequestBody$Outbound` instead. */
    type Outbound = PostV1PlaidProcessorTokenRequestBody$Outbound;
}
export declare function postV1PlaidProcessorTokenRequestBodyToJSON(postV1PlaidProcessorTokenRequestBody: PostV1PlaidProcessorTokenRequestBody): string;
export declare function postV1PlaidProcessorTokenRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1PlaidProcessorTokenRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1PlaidProcessorTokenRequest$inboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PlaidProcessorTokenRequest$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PlaidProcessorTokenRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PlaidProcessorTokenRequest$outboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequest$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PlaidProcessorTokenRequest$ {
    /** @deprecated use `PostV1PlaidProcessorTokenRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PlaidProcessorTokenRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PlaidProcessorTokenRequest$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenRequest>;
    /** @deprecated use `PostV1PlaidProcessorTokenRequest$Outbound` instead. */
    type Outbound = PostV1PlaidProcessorTokenRequest$Outbound;
}
export declare function postV1PlaidProcessorTokenRequestToJSON(postV1PlaidProcessorTokenRequest: PostV1PlaidProcessorTokenRequest): string;
export declare function postV1PlaidProcessorTokenRequestFromJSON(jsonString: string): SafeParseResult<PostV1PlaidProcessorTokenRequest, SDKValidationError>;
/** @internal */
export declare const PostV1PlaidProcessorTokenResponseBody$inboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PlaidProcessorTokenResponseBody$Outbound = components.CompanyBankAccount$Outbound;
/** @internal */
export declare const PostV1PlaidProcessorTokenResponseBody$outboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponseBody$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PlaidProcessorTokenResponseBody$ {
    /** @deprecated use `PostV1PlaidProcessorTokenResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<components.CompanyBankAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PlaidProcessorTokenResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<components.CompanyBankAccount$Outbound, z.ZodTypeDef, components.CompanyBankAccount>;
    /** @deprecated use `PostV1PlaidProcessorTokenResponseBody$Outbound` instead. */
    type Outbound = PostV1PlaidProcessorTokenResponseBody$Outbound;
}
export declare function postV1PlaidProcessorTokenResponseBodyToJSON(postV1PlaidProcessorTokenResponseBody: PostV1PlaidProcessorTokenResponseBody): string;
export declare function postV1PlaidProcessorTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<PostV1PlaidProcessorTokenResponseBody, SDKValidationError>;
/** @internal */
export declare const PostV1PlaidProcessorTokenResponse$inboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PlaidProcessorTokenResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    oneOf?: components.CompanyBankAccount$Outbound | undefined;
};
/** @internal */
export declare const PostV1PlaidProcessorTokenResponse$outboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponse$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PlaidProcessorTokenResponse$ {
    /** @deprecated use `PostV1PlaidProcessorTokenResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PlaidProcessorTokenResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PlaidProcessorTokenResponse$Outbound, z.ZodTypeDef, PostV1PlaidProcessorTokenResponse>;
    /** @deprecated use `PostV1PlaidProcessorTokenResponse$Outbound` instead. */
    type Outbound = PostV1PlaidProcessorTokenResponse$Outbound;
}
export declare function postV1PlaidProcessorTokenResponseToJSON(postV1PlaidProcessorTokenResponse: PostV1PlaidProcessorTokenResponse): string;
export declare function postV1PlaidProcessorTokenResponseFromJSON(jsonString: string): SafeParseResult<PostV1PlaidProcessorTokenResponse, SDKValidationError>;
//# sourceMappingURL=postv1plaidprocessortoken.d.ts.map