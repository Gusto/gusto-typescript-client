import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WebhooksListSubscriptionsQueryData = operations.GetV1WebhookSubscriptionsResponse;
/**
 * List webhook subscriptions
 *
 * @remarks
 * Returns all webhook subscriptions associated with the provided Partner API token.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function useWebhooksListSubscriptions(security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: QueryHookOptions<WebhooksListSubscriptionsQueryData>): UseQueryResult<WebhooksListSubscriptionsQueryData, Error>;
/**
 * List webhook subscriptions
 *
 * @remarks
 * Returns all webhook subscriptions associated with the provided Partner API token.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function useWebhooksListSubscriptionsSuspense(security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: SuspenseQueryHookOptions<WebhooksListSubscriptionsQueryData>): UseSuspenseQueryResult<WebhooksListSubscriptionsQueryData, Error>;
export declare function prefetchWebhooksListSubscriptions(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest): Promise<void>;
export declare function setWebhooksListSubscriptionsData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WebhooksListSubscriptionsQueryData): WebhooksListSubscriptionsQueryData | undefined;
export declare function invalidateWebhooksListSubscriptions(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWebhooksListSubscriptions(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWebhooksListSubscriptionsQuery(client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksListSubscriptionsQueryData>;
};
export declare function queryKeyWebhooksListSubscriptions(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksListSubscriptions.d.ts.map