import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1WebhookSubscriptionsSecurity = {
    systemAccessAuth: string;
};
export type GetV1WebhookSubscriptionsRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1WebhookSubscriptionsResponse = {
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
    webhookSubscriptionsList?: Array<components.WebhookSubscription> | undefined;
};
/** @internal */
export declare const GetV1WebhookSubscriptionsSecurity$inboundSchema: z.ZodType<GetV1WebhookSubscriptionsSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionsSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionsSecurity$outboundSchema: z.ZodType<GetV1WebhookSubscriptionsSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionsSecurity$ {
    /** @deprecated use `GetV1WebhookSubscriptionsSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionsSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionsSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionsSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsSecurity>;
    /** @deprecated use `GetV1WebhookSubscriptionsSecurity$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionsSecurity$Outbound;
}
export declare function getV1WebhookSubscriptionsSecurityToJSON(getV1WebhookSubscriptionsSecurity: GetV1WebhookSubscriptionsSecurity): string;
export declare function getV1WebhookSubscriptionsSecurityFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionsSecurity, SDKValidationError>;
/** @internal */
export declare const GetV1WebhookSubscriptionsRequest$inboundSchema: z.ZodType<GetV1WebhookSubscriptionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionsRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionsRequest$outboundSchema: z.ZodType<GetV1WebhookSubscriptionsRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionsRequest$ {
    /** @deprecated use `GetV1WebhookSubscriptionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionsRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsRequest>;
    /** @deprecated use `GetV1WebhookSubscriptionsRequest$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionsRequest$Outbound;
}
export declare function getV1WebhookSubscriptionsRequestToJSON(getV1WebhookSubscriptionsRequest: GetV1WebhookSubscriptionsRequest): string;
export declare function getV1WebhookSubscriptionsRequestFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1WebhookSubscriptionsResponse$inboundSchema: z.ZodType<GetV1WebhookSubscriptionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WebhookSubscriptionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Webhook-Subscriptions-List"?: Array<components.WebhookSubscription$Outbound> | undefined;
};
/** @internal */
export declare const GetV1WebhookSubscriptionsResponse$outboundSchema: z.ZodType<GetV1WebhookSubscriptionsResponse$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WebhookSubscriptionsResponse$ {
    /** @deprecated use `GetV1WebhookSubscriptionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WebhookSubscriptionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WebhookSubscriptionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WebhookSubscriptionsResponse$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsResponse>;
    /** @deprecated use `GetV1WebhookSubscriptionsResponse$Outbound` instead. */
    type Outbound = GetV1WebhookSubscriptionsResponse$Outbound;
}
export declare function getV1WebhookSubscriptionsResponseToJSON(getV1WebhookSubscriptionsResponse: GetV1WebhookSubscriptionsResponse): string;
export declare function getV1WebhookSubscriptionsResponseFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionsResponse, SDKValidationError>;
//# sourceMappingURL=getv1webhooksubscriptions.d.ts.map