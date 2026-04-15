import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EventsGetQueryData = operations.GetEventsResponse;
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
export declare function useEventsGet(security: operations.GetEventsSecurity, request: operations.GetEventsRequest, options?: QueryHookOptions<EventsGetQueryData>): UseQueryResult<EventsGetQueryData, Error>;
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
export declare function useEventsGetSuspense(security: operations.GetEventsSecurity, request: operations.GetEventsRequest, options?: SuspenseQueryHookOptions<EventsGetQueryData>): UseSuspenseQueryResult<EventsGetQueryData, Error>;
export declare function prefetchEventsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetEventsSecurity, request: operations.GetEventsRequest): Promise<void>;
export declare function setEventsGetData(client: QueryClient, queryKeyBase: [
    parameters: {
        startingAfterUuid?: string | undefined;
        resourceUuid?: string | undefined;
        limit?: string | undefined;
        eventType?: string | undefined;
        sortOrder?: components.SortOrder | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EventsGetQueryData): EventsGetQueryData | undefined;
export declare function invalidateEventsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        startingAfterUuid?: string | undefined;
        resourceUuid?: string | undefined;
        limit?: string | undefined;
        eventType?: string | undefined;
        sortOrder?: components.SortOrder | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEventsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEventsGetQuery(client$: GustoEmbeddedCore, security: operations.GetEventsSecurity, request: operations.GetEventsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EventsGetQueryData>;
};
export declare function queryKeyEventsGet(parameters: {
    startingAfterUuid?: string | undefined;
    resourceUuid?: string | undefined;
    limit?: string | undefined;
    eventType?: string | undefined;
    sortOrder?: components.SortOrder | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=eventsGet.d.ts.map