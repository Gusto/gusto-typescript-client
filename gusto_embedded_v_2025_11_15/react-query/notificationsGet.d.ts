import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type NotificationsGetQueryData = components.Notification;
/**
 * Get a notification's details
 *
 * @remarks
 * Upon receiving a notification webhook event, use this endpoint to fetch the notification's details. The notification details include basic suggested content that can help you build notifications in your platform.
 *
 * Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.
 *
 * If the notification UUID is not found, the response will be 404 Not Found. If the notification's supporting data is no longer valid, the response will be 422 Unprocessable Entity.
 *
 * scope: `notifications:read`
 */
export declare function useNotificationsGet(request: operations.GetNotificationsNotificationUuidRequest, options?: QueryHookOptions<NotificationsGetQueryData>): UseQueryResult<NotificationsGetQueryData, Error>;
/**
 * Get a notification's details
 *
 * @remarks
 * Upon receiving a notification webhook event, use this endpoint to fetch the notification's details. The notification details include basic suggested content that can help you build notifications in your platform.
 *
 * Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.
 *
 * If the notification UUID is not found, the response will be 404 Not Found. If the notification's supporting data is no longer valid, the response will be 422 Unprocessable Entity.
 *
 * scope: `notifications:read`
 */
export declare function useNotificationsGetSuspense(request: operations.GetNotificationsNotificationUuidRequest, options?: SuspenseQueryHookOptions<NotificationsGetQueryData>): UseSuspenseQueryResult<NotificationsGetQueryData, Error>;
export declare function prefetchNotificationsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetNotificationsNotificationUuidRequest): Promise<void>;
export declare function setNotificationsGetData(client: QueryClient, queryKeyBase: [
    notificationUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: NotificationsGetQueryData): NotificationsGetQueryData | undefined;
export declare function invalidateNotificationsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    notificationUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllNotificationsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildNotificationsGetQuery(client$: GustoEmbeddedCore, request: operations.GetNotificationsNotificationUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<NotificationsGetQueryData>;
};
export declare function queryKeyNotificationsGet(notificationUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=notificationsGet.d.ts.map