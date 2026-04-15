import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RefreshAccessTokenRequestBody = {
    /**
     * Your client id
     */
    clientId: string;
    /**
     * Your client secret
     */
    clientSecret: string;
    /**
     * The redirect URI you set up via the Developer Portal
     */
    redirectUri?: string | undefined;
    /**
     * The `refresh_token` being exchanged for an access token code
     */
    refreshToken: string;
    /**
     * this should be the literal string 'refresh_token'
     */
    grantType: string;
};
export type RefreshAccessTokenRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: RefreshAccessTokenRequestBody;
};
export type RefreshAccessTokenResponse = {
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
    authentication?: components.Authentication | undefined;
};
/** @internal */
export declare const RefreshAccessTokenRequestBody$inboundSchema: z.ZodType<RefreshAccessTokenRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RefreshAccessTokenRequestBody$Outbound = {
    client_id: string;
    client_secret: string;
    redirect_uri?: string | undefined;
    refresh_token: string;
    grant_type: string;
};
/** @internal */
export declare const RefreshAccessTokenRequestBody$outboundSchema: z.ZodType<RefreshAccessTokenRequestBody$Outbound, z.ZodTypeDef, RefreshAccessTokenRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RefreshAccessTokenRequestBody$ {
    /** @deprecated use `RefreshAccessTokenRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RefreshAccessTokenRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `RefreshAccessTokenRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RefreshAccessTokenRequestBody$Outbound, z.ZodTypeDef, RefreshAccessTokenRequestBody>;
    /** @deprecated use `RefreshAccessTokenRequestBody$Outbound` instead. */
    type Outbound = RefreshAccessTokenRequestBody$Outbound;
}
export declare function refreshAccessTokenRequestBodyToJSON(refreshAccessTokenRequestBody: RefreshAccessTokenRequestBody): string;
export declare function refreshAccessTokenRequestBodyFromJSON(jsonString: string): SafeParseResult<RefreshAccessTokenRequestBody, SDKValidationError>;
/** @internal */
export declare const RefreshAccessTokenRequest$inboundSchema: z.ZodType<RefreshAccessTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RefreshAccessTokenRequest$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: RefreshAccessTokenRequestBody$Outbound;
};
/** @internal */
export declare const RefreshAccessTokenRequest$outboundSchema: z.ZodType<RefreshAccessTokenRequest$Outbound, z.ZodTypeDef, RefreshAccessTokenRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RefreshAccessTokenRequest$ {
    /** @deprecated use `RefreshAccessTokenRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RefreshAccessTokenRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RefreshAccessTokenRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RefreshAccessTokenRequest$Outbound, z.ZodTypeDef, RefreshAccessTokenRequest>;
    /** @deprecated use `RefreshAccessTokenRequest$Outbound` instead. */
    type Outbound = RefreshAccessTokenRequest$Outbound;
}
export declare function refreshAccessTokenRequestToJSON(refreshAccessTokenRequest: RefreshAccessTokenRequest): string;
export declare function refreshAccessTokenRequestFromJSON(jsonString: string): SafeParseResult<RefreshAccessTokenRequest, SDKValidationError>;
/** @internal */
export declare const RefreshAccessTokenResponse$inboundSchema: z.ZodType<RefreshAccessTokenResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RefreshAccessTokenResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Authentication?: components.Authentication$Outbound | undefined;
};
/** @internal */
export declare const RefreshAccessTokenResponse$outboundSchema: z.ZodType<RefreshAccessTokenResponse$Outbound, z.ZodTypeDef, RefreshAccessTokenResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RefreshAccessTokenResponse$ {
    /** @deprecated use `RefreshAccessTokenResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RefreshAccessTokenResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RefreshAccessTokenResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RefreshAccessTokenResponse$Outbound, z.ZodTypeDef, RefreshAccessTokenResponse>;
    /** @deprecated use `RefreshAccessTokenResponse$Outbound` instead. */
    type Outbound = RefreshAccessTokenResponse$Outbound;
}
export declare function refreshAccessTokenResponseToJSON(refreshAccessTokenResponse: RefreshAccessTokenResponse): string;
export declare function refreshAccessTokenResponseFromJSON(jsonString: string): SafeParseResult<RefreshAccessTokenResponse, SDKValidationError>;
//# sourceMappingURL=refreshaccesstoken.d.ts.map