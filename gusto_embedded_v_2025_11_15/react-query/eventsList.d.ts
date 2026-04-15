import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
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
export declare function useEventsList(security: operations.GetEventsSecurity, request: operations.GetEventsRequest, options?: QueryHookOptions<EventsListQueryData>): UseQueryResult<EventsListQueryData, Error>;
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
export declare function useEventsListSuspense(security: operations.GetEventsSecurity, request: operations.GetEventsRequest, options?: SuspenseQueryHookOptions<EventsListQueryData>): UseSuspenseQueryResult<EventsListQueryData, Error>;
export declare function prefetchEventsList(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetEventsSecurity, request: operations.GetEventsRequest): Promise<void>;
export declare function setEventsListData(client: QueryClient, queryKeyBase: [
    parameters: {
        startingAfterUuid?: string | undefined;
        resourceUuid?: string | undefined;
        limit?: string | undefined;
        eventType?: string | undefined;
        sortOrder?: components.SortOrder | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EventsListQueryData): EventsListQueryData | undefined;
export declare function invalidateEventsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        startingAfterUuid?: string | undefined;
        resourceUuid?: string | undefined;
        limit?: string | undefined;
        eventType?: string | undefined;
        sortOrder?: components.SortOrder | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEventsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEventsListQuery(client$: GustoEmbeddedCore, security: operations.GetEventsSecurity, request: operations.GetEventsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EventsListQueryData>;
};
export declare function queryKeyEventsList(parameters: {
    startingAfterUuid?: string | undefined;
    resourceUuid?: string | undefined;
    limit?: string | undefined;
    eventType?: string | undefined;
    sortOrder?: components.SortOrder | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=eventsList.d.ts.map