import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { WebhookSubscription } from "../components/webhooksubscription.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1VerifyWebhookSubscriptionUuidRequestBody;
};
export type PutV1VerifyWebhookSubscriptionUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    webhookSubscription?: WebhookSubscription | undefined;
};
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidSecurity>;
export declare function putV1VerifyWebhookSubscriptionUuidSecurityToJSON(putV1VerifyWebhookSubscriptionUuidSecurity: PutV1VerifyWebhookSubscriptionUuidSecurity): string;
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound = {
    verification_token: string;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidRequestBody$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidRequestBody>;
export declare function putV1VerifyWebhookSubscriptionUuidRequestBodyToJSON(putV1VerifyWebhookSubscriptionUuidRequestBody: PutV1VerifyWebhookSubscriptionUuidRequestBody): string;
/** @internal */
export type PutV1VerifyWebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1VerifyWebhookSubscriptionUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, PutV1VerifyWebhookSubscriptionUuidRequest>;
export declare function putV1VerifyWebhookSubscriptionUuidRequestToJSON(putV1VerifyWebhookSubscriptionUuidRequest: PutV1VerifyWebhookSubscriptionUuidRequest): string;
/** @internal */
export declare const PutV1VerifyWebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<PutV1VerifyWebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
export declare function putV1VerifyWebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1VerifyWebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1verifywebhooksubscriptionuuid.d.ts.map