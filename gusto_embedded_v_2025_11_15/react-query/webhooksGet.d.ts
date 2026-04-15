import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WebhooksGetQueryData = components.WebhookSubscription;
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
export declare function useWebhooksGet(security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: QueryHookOptions<WebhooksGetQueryData>): UseQueryResult<WebhooksGetQueryData, Error>;
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
export declare function useWebhooksGetSuspense(security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: SuspenseQueryHookOptions<WebhooksGetQueryData>): UseSuspenseQueryResult<WebhooksGetQueryData, Error>;
export declare function prefetchWebhooksGet(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest): Promise<void>;
export declare function setWebhooksGetData(client: QueryClient, queryKeyBase: [
    webhookSubscriptionUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WebhooksGetQueryData): WebhooksGetQueryData | undefined;
export declare function invalidateWebhooksGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    webhookSubscriptionUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWebhooksGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWebhooksGetQuery(client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksGetQueryData>;
};
export declare function queryKeyWebhooksGet(webhookSubscriptionUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksGet.d.ts.map