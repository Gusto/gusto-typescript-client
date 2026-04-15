import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetNotificationsNotificationUuidRequest = {
    /**
     * The notification entity_uuid
     */
    notificationUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetNotificationsNotificationUuidResponse = {
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
    notification?: components.Notification | undefined;
};
/** @internal */
export declare const GetNotificationsNotificationUuidRequest$inboundSchema: z.ZodType<GetNotificationsNotificationUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetNotificationsNotificationUuidRequest$Outbound = {
    notification_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetNotificationsNotificationUuidRequest$outboundSchema: z.ZodType<GetNotificationsNotificationUuidRequest$Outbound, z.ZodTypeDef, GetNotificationsNotificationUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetNotificationsNotificationUuidRequest$ {
    /** @deprecated use `GetNotificationsNotificationUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetNotificationsNotificationUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetNotificationsNotificationUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetNotificationsNotificationUuidRequest$Outbound, z.ZodTypeDef, GetNotificationsNotificationUuidRequest>;
    /** @deprecated use `GetNotificationsNotificationUuidRequest$Outbound` instead. */
    type Outbound = GetNotificationsNotificationUuidRequest$Outbound;
}
export declare function getNotificationsNotificationUuidRequestToJSON(getNotificationsNotificationUuidRequest: GetNotificationsNotificationUuidRequest): string;
export declare function getNotificationsNotificationUuidRequestFromJSON(jsonString: string): SafeParseResult<GetNotificationsNotificationUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetNotificationsNotificationUuidResponse$inboundSchema: z.ZodType<GetNotificationsNotificationUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetNotificationsNotificationUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Notification?: components.Notification$Outbound | undefined;
};
/** @internal */
export declare const GetNotificationsNotificationUuidResponse$outboundSchema: z.ZodType<GetNotificationsNotificationUuidResponse$Outbound, z.ZodTypeDef, GetNotificationsNotificationUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetNotificationsNotificationUuidResponse$ {
    /** @deprecated use `GetNotificationsNotificationUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetNotificationsNotificationUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetNotificationsNotificationUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetNotificationsNotificationUuidResponse$Outbound, z.ZodTypeDef, GetNotificationsNotificationUuidResponse>;
    /** @deprecated use `GetNotificationsNotificationUuidResponse$Outbound` instead. */
    type Outbound = GetNotificationsNotificationUuidResponse$Outbound;
}
export declare function getNotificationsNotificationUuidResponseToJSON(getNotificationsNotificationUuidResponse: GetNotificationsNotificationUuidResponse): string;
export declare function getNotificationsNotificationUuidResponseFromJSON(jsonString: string): SafeParseResult<GetNotificationsNotificationUuidResponse, SDKValidationError>;
//# sourceMappingURL=getnotificationsnotificationuuid.d.ts.map