/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GustoEmbeddedCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
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
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get the contractor's onboarding status
 *
 * @remarks
 * Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `contractors:read`
 *
 * ## onboarding_status
 *
 * ### Admin-facilitated onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ### Contractor self-onboarding
 *
 * | onboarding_status | Description |
 * | --- | ----------- |
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
 * | `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
 * | `self_onboarding_started` | Contractor has started the self-onboarding process. |
 * | `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ## onboarding_steps
 *
 * | onboarding_steps | Requirement(s) to be completed |
 * |:-----------------|-------------------------------:|
 * | `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
 * | `add_address` | Add contractor address. |
 * | `compensation_details` | Add contractor compensation. |
 * | `payment_details` | Set up contractor's direct deposit or set to check. |
 * | `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
 * | `file_new_hire_report` | Contractor new hire report is generated. |
 */
export function contractorsGetOnboardingStatus(
  client: GustoEmbeddedCore,
  request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GetV1ContractorsContractorUuidOnboardingStatusResponse,
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
  request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GetV1ContractorsContractorUuidOnboardingStatusResponse,
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
        .GetV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

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
    operationID: "get-v1-contractors-contractor_uuid-onboarding_status",
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
    method: "GET",
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
    errorCodes: ["404", "4XX", "5XX"],
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
    operations.GetV1ContractorsContractorUuidOnboardingStatusResponse,
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
        .GetV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema,
      { key: "Contractor-Onboarding-Status" },
    ),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
