import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1WebhookSubscriptionUuidResponse = {
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
export declare const DeleteV1WebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1WebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1WebhookSubscriptionUuidSecurity$ {
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidSecurity>;
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidSecurity$Outbound` instead. */
    type Outbound = DeleteV1WebhookSubscriptionUuidSecurity$Outbound;
}
export declare function deleteV1WebhookSubscriptionUuidSecurityToJSON(deleteV1WebhookSubscriptionUuidSecurity: DeleteV1WebhookSubscriptionUuidSecurity): string;
export declare function deleteV1WebhookSubscriptionUuidSecurityFromJSON(jsonString: string): SafeParseResult<DeleteV1WebhookSubscriptionUuidSecurity, SDKValidationError>;
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1WebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1WebhookSubscriptionUuidRequest$ {
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidRequest>;
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidRequest$Outbound` instead. */
    type Outbound = DeleteV1WebhookSubscriptionUuidRequest$Outbound;
}
export declare function deleteV1WebhookSubscriptionUuidRequestToJSON(deleteV1WebhookSubscriptionUuidRequest: DeleteV1WebhookSubscriptionUuidRequest): string;
export declare function deleteV1WebhookSubscriptionUuidRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1WebhookSubscriptionUuidRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1WebhookSubscriptionUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1WebhookSubscriptionUuidResponse$outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1WebhookSubscriptionUuidResponse$ {
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1WebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, DeleteV1WebhookSubscriptionUuidResponse>;
    /** @deprecated use `DeleteV1WebhookSubscriptionUuidResponse$Outbound` instead. */
    type Outbound = DeleteV1WebhookSubscriptionUuidResponse$Outbound;
}
export declare function deleteV1WebhookSubscriptionUuidResponseToJSON(deleteV1WebhookSubscriptionUuidResponse: DeleteV1WebhookSubscriptionUuidResponse): string;
export declare function deleteV1WebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1WebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1webhooksubscriptionuuid.d.ts.map