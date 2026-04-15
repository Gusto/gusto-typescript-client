import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1WebhookSubscriptionVerificationTokenUuidSecurity = {
    systemAccessAuth: string;
};
export type GetV1WebhookSubscriptionVerificationTokenUuidRequest = {
    /**
     * The webhook subscription UUID.
     */
    webhookSubscriptionUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1WebhookSubscriptionVerificationTokenUuidResponse = {
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
};
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidSecurity$inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionVerificationTokenUuidSecurity$ {
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidSecurity>;
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound;
}
export declare function getV1WebhookSubscriptionVerificationTokenUuidSecurityToJSON(getV1WebhookSubscriptionVerificationTokenUuidSecurity: GetV1WebhookSubscriptionVerificationTokenUuidSecurity): string;
export declare function getV1WebhookSubscriptionVerificationTokenUuidSecurityFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionVerificationTokenUuidSecurity, SDKValidationError>;
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidRequest$inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionVerificationTokenUuidRequest$ {
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidRequest>;
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound;
}
export declare function getV1WebhookSubscriptionVerificationTokenUuidRequestToJSON(getV1WebhookSubscriptionVerificationTokenUuidRequest: GetV1WebhookSubscriptionVerificationTokenUuidRequest): string;
export declare function getV1WebhookSubscriptionVerificationTokenUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionVerificationTokenUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidResponse$outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionVerificationTokenUuidResponse$ {
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidResponse>;
    /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound;
}
export declare function getV1WebhookSubscriptionVerificationTokenUuidResponseToJSON(getV1WebhookSubscriptionVerificationTokenUuidResponse: GetV1WebhookSubscriptionVerificationTokenUuidResponse): string;
export declare function getV1WebhookSubscriptionVerificationTokenUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionVerificationTokenUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1webhooksubscriptionverificationtokenuuid.d.ts.map