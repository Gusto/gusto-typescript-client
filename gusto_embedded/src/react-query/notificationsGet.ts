/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { notificationsGet } from "../funcs/notificationsGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

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
export function useNotificationsGet(
  request: operations.GetNotificationsNotificationUuidRequest,
  options?: QueryHookOptions<NotificationsGetQueryData>,
): UseQueryResult<NotificationsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildNotificationsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

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
export function useNotificationsGetSuspense(
  request: operations.GetNotificationsNotificationUuidRequest,
  options?: SuspenseQueryHookOptions<NotificationsGetQueryData>,
): UseSuspenseQueryResult<NotificationsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildNotificationsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchNotificationsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetNotificationsNotificationUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildNotificationsGetQuery(
      client$,
      request,
    ),
  });
}

export function setNotificationsGetData(
  client: QueryClient,
  queryKeyBase: [
    notificationUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: NotificationsGetQueryData,
): NotificationsGetQueryData | undefined {
  const key = queryKeyNotificationsGet(...queryKeyBase);

  return client.setQueryData<NotificationsGetQueryData>(key, data);
}

export function invalidateNotificationsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      notificationUuid: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Notifications", "get", ...queryKeyBase],
  });
}

export function invalidateAllNotificationsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Notifications", "get"],
  });
}

export function buildNotificationsGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetNotificationsNotificationUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<NotificationsGetQueryData>;
} {
  return {
    queryKey: queryKeyNotificationsGet(request.notificationUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function notificationsGetQueryFn(
      ctx,
    ): Promise<NotificationsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(notificationsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyNotificationsGet(
  notificationUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Notifications",
    "get",
    notificationUuid,
    parameters,
  ];
}
