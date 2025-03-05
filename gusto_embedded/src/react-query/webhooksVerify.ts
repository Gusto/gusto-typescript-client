/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { webhooksVerify } from "../funcs/webhooksVerify.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutV1VerifyWebhookSubscriptionUuidRequest,
  PutV1VerifyWebhookSubscriptionUuidResponse,
  PutV1VerifyWebhookSubscriptionUuidSecurity,
} from "../models/operations/putv1verifywebhooksubscriptionuuid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type WebhooksVerifyMutationVariables = {
  security: PutV1VerifyWebhookSubscriptionUuidSecurity;
  request: PutV1VerifyWebhookSubscriptionUuidRequest;
  options?: RequestOptions;
};

export type WebhooksVerifyMutationData =
  PutV1VerifyWebhookSubscriptionUuidResponse;

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
export function useWebhooksVerifyMutation(
  options?: MutationHookOptions<
    WebhooksVerifyMutationData,
    Error,
    WebhooksVerifyMutationVariables
  >,
): UseMutationResult<
  WebhooksVerifyMutationData,
  Error,
  WebhooksVerifyMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildWebhooksVerifyMutation(client, options),
    ...options,
  });
}

export function mutationKeyWebhooksVerify(): MutationKey {
  return ["@gusto/embedded-api", "Webhooks", "verify"];
}

export function buildWebhooksVerifyMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: WebhooksVerifyMutationVariables,
  ) => Promise<WebhooksVerifyMutationData>;
} {
  return {
    mutationKey: mutationKeyWebhooksVerify(),
    mutationFn: function webhooksVerifyMutationFn({
      security,
      request,
      options,
    }): Promise<WebhooksVerifyMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(webhooksVerify(
        client$,
        security,
        request,
        mergedOptions,
      ));
    },
  };
}
