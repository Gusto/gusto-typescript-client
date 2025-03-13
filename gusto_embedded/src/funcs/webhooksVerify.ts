/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GustoEmbeddedCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  UnprocessableEntityErrorObject,
  UnprocessableEntityErrorObject$inboundSchema,
} from "../models/errors/unprocessableentityerrorobject.js";
import {
  PutV1VerifyWebhookSubscriptionUuidRequest,
  PutV1VerifyWebhookSubscriptionUuidRequest$outboundSchema,
  PutV1VerifyWebhookSubscriptionUuidResponse,
  PutV1VerifyWebhookSubscriptionUuidResponse$inboundSchema,
  PutV1VerifyWebhookSubscriptionUuidSecurity,
} from "../models/operations/putv1verifywebhooksubscriptionuuid.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

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
export function webhooksVerify(
  client: GustoEmbeddedCore,
  security: PutV1VerifyWebhookSubscriptionUuidSecurity,
  request: PutV1VerifyWebhookSubscriptionUuidRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    PutV1VerifyWebhookSubscriptionUuidResponse,
    | UnprocessableEntityErrorObject
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    security,
    request,
    options,
  ));
}

async function $do(
  client: GustoEmbeddedCore,
  security: PutV1VerifyWebhookSubscriptionUuidSecurity,
  request: PutV1VerifyWebhookSubscriptionUuidRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      PutV1VerifyWebhookSubscriptionUuidResponse,
      | UnprocessableEntityErrorObject
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      PutV1VerifyWebhookSubscriptionUuidRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    webhook_subscription_uuid: encodeSimple(
      "webhook_subscription_uuid",
      payload.webhook_subscription_uuid,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify",
  )(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Gusto-API-Version": encodeSimple(
      "X-Gusto-API-Version",
      payload["X-Gusto-API-Version"],
      { explode: false, charEncoding: "none" },
    ),
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.systemAccessAuth,
      },
    ],
  );

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "put-v1-verify-webhook-subscription-uuid",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PUT",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["404", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    PutV1VerifyWebhookSubscriptionUuidResponse,
    | UnprocessableEntityErrorObject
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, PutV1VerifyWebhookSubscriptionUuidResponse$inboundSchema, {
      key: "Webhook-Subscription",
    }),
    M.jsonErr(422, UnprocessableEntityErrorObject$inboundSchema),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
