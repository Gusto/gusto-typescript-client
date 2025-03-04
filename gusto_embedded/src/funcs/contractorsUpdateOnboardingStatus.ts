/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GustoEmbeddedCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Change the contractor's onboarding status
 *
 * @remarks
 * Updates a contractor's onboarding status.
 *
 * scope: `contractors:write`
 *
 * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the contractor.
 *
 * | Action | current onboarding_status | new onboarding_status |
 * |:------------------|:------------:|----------:|
 * | Mark a contractor as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_not_invited` |
 * | Invite a contractor to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_not_invited` | `self_onboarding_invited` |
 * | Cancel a contractor's self-onboarding | `self_onboarding_invited` or `self_onboarding_not_invited` | `admin_onboarding_incomplete` |
 * | Review a contractor's self-onboarded info | `self_onboarding_started` | `self_onboarding_review` |
 * | Finish a contractor's onboarding | `admin_onboarding_review` or `self_onboarding_review` | `onboarding_completed` |
 */
export function contractorsUpdateOnboardingStatus(
  client: GustoEmbeddedCore,
  request: operations.PutV1ContractorsContractorUuidOnboardingStatusRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.PutV1ContractorsContractorUuidOnboardingStatusResponse,
    | errors.UnprocessableEntityErrorObject
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
    request,
    options,
  ));
}

async function $do(
  client: GustoEmbeddedCore,
  request: operations.PutV1ContractorsContractorUuidOnboardingStatusRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.PutV1ContractorsContractorUuidOnboardingStatusResponse,
      | errors.UnprocessableEntityErrorObject
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
      operations
        .PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    contractor_uuid: encodeSimple("contractor_uuid", payload.contractor_uuid, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/contractors/{contractor_uuid}/onboarding_status",
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

  const secConfig = await extractSecurity(client._options.companyAccessAuth);
  const securityInput = secConfig == null
    ? {}
    : { companyAccessAuth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "put-v1-contractors-contractor_uuid-onboarding_status",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.companyAccessAuth,
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
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.PutV1ContractorsContractorUuidOnboardingStatusResponse,
    | errors.UnprocessableEntityErrorObject
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      operations
        .PutV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema,
      { key: "Contractor-Onboarding-Status" },
    ),
    M.jsonErr(422, errors.UnprocessableEntityErrorObject$inboundSchema),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
