import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { WebhookSubscription } from "../components/webhooksubscription.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1WebhookSubscriptionUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    webhookSubscription?: WebhookSubscription | undefined;
};
/** @internal */
export type GetV1WebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidSecurity>;
export declare function getV1WebhookSubscriptionUuidSecurityToJSON(getV1WebhookSubscriptionUuidSecurity: GetV1WebhookSubscriptionUuidSecurity): string;
/** @internal */
export type GetV1WebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionUuidRequest>;
export declare function getV1WebhookSubscriptionUuidRequestToJSON(getV1WebhookSubscriptionUuidRequest: GetV1WebhookSubscriptionUuidRequest): string;
/** @internal */
export declare const GetV1WebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<GetV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
export declare function getV1WebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1webhooksubscriptionuuid.d.ts.map