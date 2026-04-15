import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { WebhookSubscription } from "../components/webhooksubscription.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1WebhookSubscriptionsSecurity = {
    systemAccessAuth: string;
};
export type GetV1WebhookSubscriptionsRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1WebhookSubscriptionsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    webhookSubscriptionsList?: Array<WebhookSubscription> | undefined;
};
/** @internal */
export type GetV1WebhookSubscriptionsSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionsSecurity$outboundSchema: z.ZodType<GetV1WebhookSubscriptionsSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsSecurity>;
export declare function getV1WebhookSubscriptionsSecurityToJSON(getV1WebhookSubscriptionsSecurity: GetV1WebhookSubscriptionsSecurity): string;
/** @internal */
export type GetV1WebhookSubscriptionsRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionsRequest$outboundSchema: z.ZodType<GetV1WebhookSubscriptionsRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionsRequest>;
export declare function getV1WebhookSubscriptionsRequestToJSON(getV1WebhookSubscriptionsRequest: GetV1WebhookSubscriptionsRequest): string;
/** @internal */
export declare const GetV1WebhookSubscriptionsResponse$inboundSchema: z.ZodType<GetV1WebhookSubscriptionsResponse, z.ZodTypeDef, unknown>;
export declare function getV1WebhookSubscriptionsResponseFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionsResponse, SDKValidationError>;
//# sourceMappingURL=getv1webhooksubscriptions.d.ts.map