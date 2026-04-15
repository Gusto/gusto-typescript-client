import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WebhooksDeleteMutationVariables = {
    security: operations.DeleteV1WebhookSubscriptionUuidSecurity;
    request: operations.DeleteV1WebhookSubscriptionUuidRequest;
    options?: RequestOptions;
};
export type WebhooksDeleteMutationData = void;
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
export declare function useWebhooksDeleteMutation(options?: MutationHookOptions<WebhooksDeleteMutationData, Error, WebhooksDeleteMutationVariables>): UseMutationResult<WebhooksDeleteMutationData, Error, WebhooksDeleteMutationVariables>;
export declare function mutationKeyWebhooksDelete(): MutationKey;
export declare function buildWebhooksDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WebhooksDeleteMutationVariables) => Promise<WebhooksDeleteMutationData>;
};
//# sourceMappingURL=webhooksDelete.d.ts.map