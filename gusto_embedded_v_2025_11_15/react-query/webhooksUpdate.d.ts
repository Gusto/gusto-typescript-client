import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WebhooksUpdateMutationVariables = {
    security: operations.PutV1WebhookSubscriptionUuidSecurity;
    request: operations.PutV1WebhookSubscriptionUuidRequest;
    options?: RequestOptions;
};
export type WebhooksUpdateMutationData = components.WebhookSubscription;
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
export declare function useWebhooksUpdateMutation(options?: MutationHookOptions<WebhooksUpdateMutationData, Error, WebhooksUpdateMutationVariables>): UseMutationResult<WebhooksUpdateMutationData, Error, WebhooksUpdateMutationVariables>;
export declare function mutationKeyWebhooksUpdate(): MutationKey;
export declare function buildWebhooksUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WebhooksUpdateMutationVariables) => Promise<WebhooksUpdateMutationData>;
};
//# sourceMappingURL=webhooksUpdate.d.ts.map