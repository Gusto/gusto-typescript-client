import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WebhooksCreateSubscriptionMutationVariables = {
    security: operations.PostV1WebhookSubscriptionSecurity;
    request: operations.PostV1WebhookSubscriptionRequest;
    options?: RequestOptions;
};
export type WebhooksCreateSubscriptionMutationData = operations.PostV1WebhookSubscriptionResponse;
/**
 * Create a webhook subscription
 *
 * @remarks
 * Create a webhook subscription to receive events of the specified subscription_types whenever there is a state change.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:write`
 */
export declare function useWebhooksCreateSubscriptionMutation(options?: MutationHookOptions<WebhooksCreateSubscriptionMutationData, Error, WebhooksCreateSubscriptionMutationVariables>): UseMutationResult<WebhooksCreateSubscriptionMutationData, Error, WebhooksCreateSubscriptionMutationVariables>;
export declare function mutationKeyWebhooksCreateSubscription(): MutationKey;
export declare function buildWebhooksCreateSubscriptionMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WebhooksCreateSubscriptionMutationVariables) => Promise<WebhooksCreateSubscriptionMutationData>;
};
//# sourceMappingURL=webhooksCreateSubscription.d.ts.map