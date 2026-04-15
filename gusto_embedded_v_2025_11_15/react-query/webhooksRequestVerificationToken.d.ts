import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WebhooksRequestVerificationTokenQueryData = operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse;
/**
 * Request the webhook subscription verification_token
 *
 * @remarks
 * Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function useWebhooksRequestVerificationToken(security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: QueryHookOptions<WebhooksRequestVerificationTokenQueryData>): UseQueryResult<WebhooksRequestVerificationTokenQueryData, Error>;
/**
 * Request the webhook subscription verification_token
 *
 * @remarks
 * Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function useWebhooksRequestVerificationTokenSuspense(security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: SuspenseQueryHookOptions<WebhooksRequestVerificationTokenQueryData>): UseSuspenseQueryResult<WebhooksRequestVerificationTokenQueryData, Error>;
export declare function prefetchWebhooksRequestVerificationToken(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest): Promise<void>;
export declare function setWebhooksRequestVerificationTokenData(client: QueryClient, queryKeyBase: [
    webhookSubscriptionUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WebhooksRequestVerificationTokenQueryData): WebhooksRequestVerificationTokenQueryData | undefined;
export declare function invalidateWebhooksRequestVerificationToken(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    webhookSubscriptionUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWebhooksRequestVerificationToken(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWebhooksRequestVerificationTokenQuery(client$: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksRequestVerificationTokenQueryData>;
};
export declare function queryKeyWebhooksRequestVerificationToken(webhookSubscriptionUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksRequestVerificationToken.d.ts.map