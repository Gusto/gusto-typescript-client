import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WebhooksUpdateSubscriptionMutationVariables = {
    security: operations.PutV1WebhookSubscriptionUuidSecurity;
    request: operations.PutV1WebhookSubscriptionUuidRequest;
    options?: RequestOptions;
};
export type WebhooksUpdateSubscriptionMutationData = operations.PutV1WebhookSubscriptionUuidResponse;
/**
 * Update a webhook subscription
 *
 * @remarks
 * Updates the Webhook Subscription associated with the provided UUID.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:write`
 */
export declare function useWebhooksUpdateSubscriptionMutation(options?: MutationHookOptions<WebhooksUpdateSubscriptionMutationData, Error, WebhooksUpdateSubscriptionMutationVariables>): UseMutationResult<WebhooksUpdateSubscriptionMutationData, Error, WebhooksUpdateSubscriptionMutationVariables>;
export declare function mutationKeyWebhooksUpdateSubscription(): MutationKey;
export declare function buildWebhooksUpdateSubscriptionMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WebhooksUpdateSubscriptionMutationVariables) => Promise<WebhooksUpdateSubscriptionMutationData>;
};
//# sourceMappingURL=webhooksUpdateSubscription.d.ts.map