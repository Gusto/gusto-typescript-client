import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Notification } from "../components/notification.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetNotificationsNotificationUuidRequest = {
    /**
     * The notification entity_uuid
     */
    notificationUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetNotificationsNotificationUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    notification?: Notification | undefined;
};
/** @internal */
export type GetNotificationsNotificationUuidRequest$Outbound = {
    notification_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetNotificationsNotificationUuidRequest$outboundSchema: z.ZodType<GetNotificationsNotificationUuidRequest$Outbound, z.ZodTypeDef, GetNotificationsNotificationUuidRequest>;
export declare function getNotificationsNotificationUuidRequestToJSON(getNotificationsNotificationUuidRequest: GetNotificationsNotificationUuidRequest): string;
/** @internal */
export declare const GetNotificationsNotificationUuidResponse$inboundSchema: z.ZodType<GetNotificationsNotificationUuidResponse, z.ZodTypeDef, unknown>;
export declare function getNotificationsNotificationUuidResponseFromJSON(jsonString: string): SafeParseResult<GetNotificationsNotificationUuidResponse, SDKValidationError>;
//# sourceMappingURL=getnotificationsnotificationuuid.d.ts.map