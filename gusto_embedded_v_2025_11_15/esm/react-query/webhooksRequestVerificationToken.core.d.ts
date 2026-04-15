import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1WebhookSubscriptionVerificationTokenUuidRequest, GetV1WebhookSubscriptionVerificationTokenUuidResponse, GetV1WebhookSubscriptionVerificationTokenUuidSecurity } from "../models/operations/getv1webhooksubscriptionverificationtokenuuid.js";
export type WebhooksRequestVerificationTokenQueryData = GetV1WebhookSubscriptionVerificationTokenUuidResponse;
export declare function prefetchWebhooksRequestVerificationToken(queryClient: QueryClient, client$: GustoEmbeddedCore, security: GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: RequestOptions): Promise<void>;
export declare function buildWebhooksRequestVerificationTokenQuery(client$: GustoEmbeddedCore, security: GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WebhooksRequestVerificationTokenQueryData>;
};
export declare function queryKeyWebhooksRequestVerificationToken(webhookSubscriptionUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=webhooksRequestVerificationToken.core.d.ts.map