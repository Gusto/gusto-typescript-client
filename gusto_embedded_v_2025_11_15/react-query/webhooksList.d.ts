import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WebhooksListQueryData = Array<components.WebhookSubscription>;
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
export declare function useWebhooksList(security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: QueryHookOptions<WebhooksListQueryData>): UseQueryResult<WebhooksListQueryData, Error>;
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
export declare function useWebhooksListSuspense(security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: SuspenseQueryHookOptions<WebhooksListQueryData>): UseSuspenseQueryResult<WebhooksListQueryData, Error>;
export declare function prefetchWebhooksList(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest): Promise<void>;
export declare function setWebhooksListData(client: QueryClient, queryKeyBase: [
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WebhooksListQueryData): WebhooksListQueryData | undefined;
export declare function invalidateWebhooksList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWebhooksList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWebhooksListQuery(client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksListQueryData>;
};
export declare function queryKeyWebhooksList(parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksList.d.ts.map