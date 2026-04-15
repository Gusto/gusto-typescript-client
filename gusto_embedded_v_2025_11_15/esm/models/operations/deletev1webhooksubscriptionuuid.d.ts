import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1WebhookSubscriptionUuidSecurity = {
    systemAccessAuth: string;
};
export type DeleteV1WebhookSubscriptionUuidRequest = {
    /**
     * The webhook subscription UUID.
     */
    webhookSubscriptionUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1WebhookSubscriptionUuidResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1WebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidSecurity>;
export declare function deleteV1WebhookSubscriptionUuidSecurityToJSON(deleteV1WebhookSubscriptionUuidSecurity: DeleteV1WebhookSubscriptionUuidSecurity): string;
/** @internal */
export type DeleteV1WebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidRequest>;
export declare function deleteV1WebhookSubscriptionUuidRequestToJSON(deleteV1WebhookSubscriptionUuidRequest: DeleteV1WebhookSubscriptionUuidRequest): string;
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1WebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1WebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1webhooksubscriptionuuid.d.ts.map