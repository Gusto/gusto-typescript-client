import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Notification } from "../components/notification.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const Status: {
    readonly Open: "open";
    readonly Expired: "expired";
    readonly Resolved: "resolved";
};
export type Status = ClosedEnum<typeof Status>;
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetCompanyNotificationsHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetCompanyNotificationsHeaderXGustoAPIVersion = ClosedEnum<typeof GetCompanyNotificationsHeaderXGustoAPIVersion>;
export type GetCompanyNotificationsRequest = {
    /**
     * The UUID of the company for which you would like to return notifications
     */
    companyUuid: string;
    status?: Status | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetCompanyNotificationsHeaderXGustoAPIVersion | undefined;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
};
export type GetCompanyNotificationsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    notificationsList?: Array<Notification> | undefined;
};
/** @internal */
export declare const Status$outboundSchema: z.ZodNativeEnum<typeof Status>;
/** @internal */
export declare const GetCompanyNotificationsHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetCompanyNotificationsHeaderXGustoAPIVersion>;
/** @internal */
export type GetCompanyNotificationsRequest$Outbound = {
    company_uuid: string;
    status?: string | undefined;
    "X-Gusto-API-Version": string;
    page?: number | undefined;
    per?: number | undefined;
};
/** @internal */
export declare const GetCompanyNotificationsRequest$outboundSchema: z.ZodType<GetCompanyNotificationsRequest$Outbound, z.ZodTypeDef, GetCompanyNotificationsRequest>;
export declare function getCompanyNotificationsRequestToJSON(getCompanyNotificationsRequest: GetCompanyNotificationsRequest): string;
/** @internal */
export declare const GetCompanyNotificationsResponse$inboundSchema: z.ZodType<GetCompanyNotificationsResponse, z.ZodTypeDef, unknown>;
export declare function getCompanyNotificationsResponseFromJSON(jsonString: string): SafeParseResult<GetCompanyNotificationsResponse, SDKValidationError>;
//# sourceMappingURL=getcompanynotifications.d.ts.map