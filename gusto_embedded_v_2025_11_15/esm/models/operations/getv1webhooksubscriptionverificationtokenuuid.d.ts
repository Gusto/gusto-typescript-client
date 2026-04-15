import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1WebhookSubscriptionVerificationTokenUuidResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidSecurity>;
export declare function getV1WebhookSubscriptionVerificationTokenUuidSecurityToJSON(getV1WebhookSubscriptionVerificationTokenUuidSecurity: GetV1WebhookSubscriptionVerificationTokenUuidSecurity): string;
/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound, z.ZodTypeDef, GetV1WebhookSubscriptionVerificationTokenUuidRequest>;
export declare function getV1WebhookSubscriptionVerificationTokenUuidRequestToJSON(getV1WebhookSubscriptionVerificationTokenUuidRequest: GetV1WebhookSubscriptionVerificationTokenUuidRequest): string;
/** @internal */
export declare const GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema: z.ZodType<GetV1WebhookSubscriptionVerificationTokenUuidResponse, z.ZodTypeDef, unknown>;
export declare function getV1WebhookSubscriptionVerificationTokenUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1WebhookSubscriptionVerificationTokenUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1webhooksubscriptionverificationtokenuuid.d.ts.map