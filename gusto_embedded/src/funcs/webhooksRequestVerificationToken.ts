/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { GustoEmbeddedCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
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
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

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
export async function webhooksRequestVerificationToken(
  client: GustoEmbeddedCore,
  security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity,
  request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest,
  options?: RequestOptions,
): Promise<
  Result<
    void,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations
        .GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    webhook_subscription_uuid: encodeSimple(
      "webhook_subscription_uuid",
      payload.webhook_subscription_uuid,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token",
  )(pathParams);

  const headers = new Headers(compactMap({
    Accept: "*/*",
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
    baseURL: options?.serverURL ?? "",
    operationID: "get-v1-webhook-subscription-verification-token-uuid",
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
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["404", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    void,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, z.void()),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
