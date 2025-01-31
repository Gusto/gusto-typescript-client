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
import { eventsList } from "../funcs/eventsList.js";
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

export type EventsListQueryData = Array<components.Event>;

/**
 * Get all events
 *
 * @remarks
 * Fetch all events, going back up to 30 days, that your partner application has the required scopes for. Note that a partner does NOT have to have verified webhook subscriptions in order to utilize this endpoint.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `events:read`
 */
export function useEventsList(
  security: operations.GetEventsSecurity,
  request: operations.GetEventsRequest,
  options?: QueryHookOptions<EventsListQueryData>,
): UseQueryResult<EventsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEventsListQuery(
      client,
      security,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all events
 *
 * @remarks
 * Fetch all events, going back up to 30 days, that your partner application has the required scopes for. Note that a partner does NOT have to have verified webhook subscriptions in order to utilize this endpoint.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `events:read`
 */
export function useEventsListSuspense(
  security: operations.GetEventsSecurity,
  request: operations.GetEventsRequest,
  options?: SuspenseQueryHookOptions<EventsListQueryData>,
): UseSuspenseQueryResult<EventsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEventsListQuery(
      client,
      security,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEventsList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  security: operations.GetEventsSecurity,
  request: operations.GetEventsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEventsListQuery(
      client$,
      security,
      request,
    ),
  });
}

export function setEventsListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      startingAfterUuid?: string | undefined;
      resourceUuid?: string | undefined;
      limit?: string | undefined;
      eventType?: string | undefined;
      sortOrder?: components.SortOrder | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: EventsListQueryData,
): EventsListQueryData | undefined {
  const key = queryKeyEventsList(...queryKeyBase);

  return client.setQueryData<EventsListQueryData>(key, data);
}

export function invalidateEventsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      startingAfterUuid?: string | undefined;
      resourceUuid?: string | undefined;
      limit?: string | undefined;
      eventType?: string | undefined;
      sortOrder?: components.SortOrder | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Events", "list", ...queryKeyBase],
  });
}

export function invalidateAllEventsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Events", "list"],
  });
}

export function buildEventsListQuery(
  client$: GustoEmbeddedCore,
  security: operations.GetEventsSecurity,
  request: operations.GetEventsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<EventsListQueryData>;
} {
  return {
    queryKey: queryKeyEventsList({
      startingAfterUuid: request.startingAfterUuid,
      resourceUuid: request.resourceUuid,
      limit: request.limit,
      eventType: request.eventType,
      sortOrder: request.sortOrder,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function eventsListQueryFn(
      ctx,
    ): Promise<EventsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(eventsList(
        client$,
        security,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEventsList(
  parameters: {
    startingAfterUuid?: string | undefined;
    resourceUuid?: string | undefined;
    limit?: string | undefined;
    eventType?: string | undefined;
    sortOrder?: components.SortOrder | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return ["@gusto/embedded-api", "Events", "list", parameters];
}
