import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Webhooks extends ClientSDK {
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
    createSubscription(security: operations.PostV1WebhookSubscriptionSecurity, request: operations.PostV1WebhookSubscriptionRequest, options?: RequestOptions): Promise<operations.PostV1WebhookSubscriptionResponse>;
    /**
     * List webhook subscriptions
     *
     * @remarks
     * Returns all webhook subscriptions associated with the provided Partner API token.
     *
     * > 📘 System Access Authentication
     * >
     * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
     *
     * scope: `webhook_subscriptions:read`
     */
    listSubscriptions(security: operations.GetV1WebhookSubscriptionsSecurity, request: operations.GetV1WebhookSubscriptionsRequest, options?: RequestOptions): Promise<operations.GetV1WebhookSubscriptionsResponse>;
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
    updateSubscription(security: operations.PutV1WebhookSubscriptionUuidSecurity, request: operations.PutV1WebhookSubscriptionUuidRequest, options?: RequestOptions): Promise<operations.PutV1WebhookSubscriptionUuidResponse>;
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
    getSubscription(security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: RequestOptions): Promise<operations.GetV1WebhookSubscriptionUuidResponse>;
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
    deleteSubscription(security: operations.DeleteV1WebhookSubscriptionUuidSecurity, request: operations.DeleteV1WebhookSubscriptionUuidRequest, options?: RequestOptions): Promise<operations.DeleteV1WebhookSubscriptionUuidResponse>;
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
    verify(security: operations.PutV1VerifyWebhookSubscriptionUuidSecurity, request: operations.PutV1VerifyWebhookSubscriptionUuidRequest, options?: RequestOptions): Promise<operations.PutV1VerifyWebhookSubscriptionUuidResponse>;
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
    requestVerificationToken(security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: RequestOptions): Promise<operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse>;
}
//# sourceMappingURL=webhooks.d.ts.map