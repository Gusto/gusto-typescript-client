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
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  UnprocessableEntityErrorObject,
  UnprocessableEntityErrorObject$inboundSchema,
} from "../models/errors/unprocessableentityerrorobject.js";
import {
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema,
} from "../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Accept terms of service for a company user
 *
 * @remarks
 * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 * The user must have a role in the company in order to accept the Terms of Service.
 *
 * scope: `terms_of_services:write`
 */
export function companiesAcceptTermsOfService(
  client: GustoEmbeddedCore,
  request: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
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
    request,
    options,
  ));
}

async function $do(
  client: GustoEmbeddedCore,
  request: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
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
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    company_uuid: encodeSimple("company_uuid", payload.company_uuid, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service",
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
    operationID:
      "post-partner-managed-companies-company_uuid-accept_terms_of_service",
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
    method: "POST",
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
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
    | UnprocessableEntityErrorObject
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
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema,
      { key: "object" },
    ),
    M.jsonErr(422, UnprocessableEntityErrorObject$inboundSchema),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
