import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1WebhookSubscriptionsRequest, GetV1WebhookSubscriptionsResponse, GetV1WebhookSubscriptionsSecurity } from "../models/operations/getv1webhooksubscriptions.js";
export type WebhooksListSubscriptionsQueryData = GetV1WebhookSubscriptionsResponse;
export declare function prefetchWebhooksListSubscriptions(queryClient: QueryClient, client$: GustoEmbeddedCore, security: GetV1WebhookSubscriptionsSecurity, request: GetV1WebhookSubscriptionsRequest, options?: RequestOptions): Promise<void>;
export declare function buildWebhooksListSubscriptionsQuery(client$: GustoEmbeddedCore, security: GetV1WebhookSubscriptionsSecurity, request: GetV1WebhookSubscriptionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksListSubscriptionsQueryData>;
};
export declare function queryKeyWebhooksListSubscriptions(parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksListSubscriptions.core.d.ts.map