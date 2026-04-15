import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WebhooksDeleteSubscriptionMutationVariables = {
    security: operations.DeleteV1WebhookSubscriptionUuidSecurity;
    request: operations.DeleteV1WebhookSubscriptionUuidRequest;
    options?: RequestOptions;
};
export type WebhooksDeleteSubscriptionMutationData = operations.DeleteV1WebhookSubscriptionUuidResponse;
/**
 * Delete a webhook subscription
 *
 * @remarks
 * Deletes the Webhook Subscription associated with the provided UUID.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:write`
 */
export declare function useWebhooksDeleteSubscriptionMutation(options?: MutationHookOptions<WebhooksDeleteSubscriptionMutationData, Error, WebhooksDeleteSubscriptionMutationVariables>): UseMutationResult<WebhooksDeleteSubscriptionMutationData, Error, WebhooksDeleteSubscriptionMutationVariables>;
export declare function mutationKeyWebhooksDeleteSubscription(): MutationKey;
export declare function buildWebhooksDeleteSubscriptionMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WebhooksDeleteSubscriptionMutationVariables) => Promise<WebhooksDeleteSubscriptionMutationData>;
};
//# sourceMappingURL=webhooksDeleteSubscription.d.ts.map