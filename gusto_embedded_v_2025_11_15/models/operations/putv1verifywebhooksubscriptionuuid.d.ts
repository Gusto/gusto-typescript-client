import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1VerifyWebhookSubscriptionUuidSecurity = {
    systemAccessAuth: string;
};
export type PutV1VerifyWebhookSubscriptionUuidRequestBody = {
    /**
     * The token POSTed to the Subscription URL.
     */
    verificationToken: string;
};
export type PutV1VerifyWebhookSubscriptionUuidRequest = {
    /**
     * The webhook subscription UUID.
     */
    webhookSubscriptionUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1VerifyWebhookSubscriptionUuidRequestBody;
};
export type PutV1VerifyWebhookSubscriptionUuidResponse = {
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
    webhookSubscription?: components.WebhookSubscription | undefined;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1VerifyWebhookSubscriptionUuidSecurity$ {
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidSecurity>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound` instead. */
    type Outbound = PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound;
}
export declare function putV1VerifyWebhookSubscriptionUuidSecurityToJSON(putV1VerifyWebhookSubscriptionUuidSecurity: PutV1VerifyWebhookSubscriptionUuidSecurity): string;
export declare function putV1VerifyWebhookSubscriptionUuidSecurityFromJSON(jsonString: string): SafeParseResult<PutV1VerifyWebhookSubscriptionUuidSecurity, SDKValidationError>;
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidRequestBody$inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound = {
    verification_token: string;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidRequestBody$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1VerifyWebhookSubscriptionUuidRequestBody$ {
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidRequestBody>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound;
}
export declare function putV1VerifyWebhookSubscriptionUuidRequestBodyToJSON(putV1VerifyWebhookSubscriptionUuidRequestBody: PutV1VerifyWebhookSubscriptionUuidRequestBody): string;
export declare function putV1VerifyWebhookSubscriptionUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1VerifyWebhookSubscriptionUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1VerifyWebhookSubscriptionUuidRequest$ {
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidRequest>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidRequest$Outbound` instead. */
    type Outbound = PutV1VerifyWebhookSubscriptionUuidRequest$Outbound;
}
export declare function putV1VerifyWebhookSubscriptionUuidRequestToJSON(putV1VerifyWebhookSubscriptionUuidRequest: PutV1VerifyWebhookSubscriptionUuidRequest): string;
export declare function putV1VerifyWebhookSubscriptionUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1VerifyWebhookSubscriptionUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Webhook-Subscription"?: components.WebhookSubscription$Outbound | undefined;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidResponse$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1VerifyWebhookSubscriptionUuidResponse$ {
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidResponse>;
    /** @deprecated use `PutV1VerifyWebhookSubscriptionUuidResponse$Outbound` instead. */
    type Outbound = PutV1VerifyWebhookSubscriptionUuidResponse$Outbound;
}
export declare function putV1VerifyWebhookSubscriptionUuidResponseToJSON(putV1VerifyWebhookSubscriptionUuidResponse: PutV1VerifyWebhookSubscriptionUuidResponse): string;
export declare function putV1VerifyWebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1VerifyWebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1verifywebhooksubscriptionuuid.d.ts.map