import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WebhooksVerifySubscriptionMutationVariables = {
    security: operations.PutV1VerifyWebhookSubscriptionUuidSecurity;
    request: operations.PutV1VerifyWebhookSubscriptionUuidRequest;
    options?: RequestOptions;
};
export type WebhooksVerifySubscriptionMutationData = components.WebhookSubscription;
/**
 * Verify the webhook subscription
 *
 * @remarks
 * When a webhook subscription is created, a `verification_token` is POSTed to the registered webhook subscription URL. This `verify` endpoint needs to be called with `verification_token` before webhook events can be sent to the registered webhook URL.
 *
 * Use the /v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token API to resend the `verification_token` to the Subscriber.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:write`
 */
export declare function useWebhooksVerifySubscriptionMutation(options?: MutationHookOptions<WebhooksVerifySubscriptionMutationData, Error, WebhooksVerifySubscriptionMutationVariables>): UseMutationResult<WebhooksVerifySubscriptionMutationData, Error, WebhooksVerifySubscriptionMutationVariables>;
export declare function mutationKeyWebhooksVerifySubscription(): MutationKey;
export declare function buildWebhooksVerifySubscriptionMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WebhooksVerifySubscriptionMutationVariables) => Promise<WebhooksVerifySubscriptionMutationData>;
};
//# sourceMappingURL=webhooksVerifySubscription.d.ts.map