import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type NotificationsGetDetailsQueryData = operations.GetNotificationsNotificationUuidResponse;
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
export declare function useNotificationsGetDetails(request: operations.GetNotificationsNotificationUuidRequest, options?: QueryHookOptions<NotificationsGetDetailsQueryData>): UseQueryResult<NotificationsGetDetailsQueryData, Error>;
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
export declare function useNotificationsGetDetailsSuspense(request: operations.GetNotificationsNotificationUuidRequest, options?: SuspenseQueryHookOptions<NotificationsGetDetailsQueryData>): UseSuspenseQueryResult<NotificationsGetDetailsQueryData, Error>;
export declare function prefetchNotificationsGetDetails(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetNotificationsNotificationUuidRequest): Promise<void>;
export declare function setNotificationsGetDetailsData(client: QueryClient, queryKeyBase: [
    notificationUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: NotificationsGetDetailsQueryData): NotificationsGetDetailsQueryData | undefined;
export declare function invalidateNotificationsGetDetails(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    notificationUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllNotificationsGetDetails(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildNotificationsGetDetailsQuery(client$: GustoEmbeddedCore, request: operations.GetNotificationsNotificationUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<NotificationsGetDetailsQueryData>;
};
export declare function queryKeyNotificationsGetDetails(notificationUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=notificationsGetDetails.d.ts.map