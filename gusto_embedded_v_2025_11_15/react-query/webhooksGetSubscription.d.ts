import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WebhooksGetSubscriptionQueryData = operations.GetV1WebhookSubscriptionUuidResponse;
/**
 * Get a webhook subscription
 *
 * @remarks
 * Returns the Webhook Subscription associated with the provided UUID.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function useWebhooksGetSubscription(security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: QueryHookOptions<WebhooksGetSubscriptionQueryData>): UseQueryResult<WebhooksGetSubscriptionQueryData, Error>;
/**
 * Get a webhook subscription
 *
 * @remarks
 * Returns the Webhook Subscription associated with the provided UUID.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function useWebhooksGetSubscriptionSuspense(security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: SuspenseQueryHookOptions<WebhooksGetSubscriptionQueryData>): UseSuspenseQueryResult<WebhooksGetSubscriptionQueryData, Error>;
export declare function prefetchWebhooksGetSubscription(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest): Promise<void>;
export declare function setWebhooksGetSubscriptionData(client: QueryClient, queryKeyBase: [
    webhookSubscriptionUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WebhooksGetSubscriptionQueryData): WebhooksGetSubscriptionQueryData | undefined;
export declare function invalidateWebhooksGetSubscription(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    webhookSubscriptionUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWebhooksGetSubscription(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWebhooksGetSubscriptionQuery(client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksGetSubscriptionQueryData>;
};
export declare function queryKeyWebhooksGetSubscription(webhookSubscriptionUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksGetSubscription.d.ts.map