import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1WebhookSubscriptionUuidSecurity = {
    systemAccessAuth: string;
};
export type GetV1WebhookSubscriptionUuidRequest = {
    /**
     * The webhook subscription UUID.
     */
    webhookSubscriptionUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1WebhookSubscriptionUuidResponse = {
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
export declare const GetV1WebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionUuidSecurity$ {
    /** @deprecated use `GetV1WebhookSubscriptionUuidSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionUuidSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidSecurity>;
    /** @deprecated use `GetV1WebhookSubscriptionUuidSecurity$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionUuidSecurity$Outbound;
}
export declare function getV1WebhookSubscriptionUuidSecurityToJSON(getV1WebhookSubscriptionUuidSecurity: GetV1WebhookSubscriptionUuidSecurity): string;
export declare function getV1WebhookSubscriptionUuidSecurityFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionUuidSecurity, SDKValidationError>;
/** @internal */
export declare const GetV1WebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionUuidRequest$ {
    /** @deprecated use `GetV1WebhookSubscriptionUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidRequest>;
    /** @deprecated use `GetV1WebhookSubscriptionUuidRequest$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionUuidRequest$Outbound;
}
export declare function getV1WebhookSubscriptionUuidRequestToJSON(getV1WebhookSubscriptionUuidRequest: GetV1WebhookSubscriptionUuidRequest): string;
export declare function getV1WebhookSubscriptionUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1WebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Webhook-Subscription"?: components.WebhookSubscription$Outbound | undefined;
};
/** @internal */
export declare const GetV1WebhookSubscriptionUuidResponse$outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionUuidResponse$ {
    /** @deprecated use `GetV1WebhookSubscriptionUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidResponse>;
    /** @deprecated use `GetV1WebhookSubscriptionUuidResponse$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionUuidResponse$Outbound;
}
export declare function getV1WebhookSubscriptionUuidResponseToJSON(getV1WebhookSubscriptionUuidResponse: GetV1WebhookSubscriptionUuidResponse): string;
export declare function getV1WebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1webhooksubscriptionuuid.d.ts.map