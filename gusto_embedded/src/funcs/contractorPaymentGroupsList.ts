/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { GustoEmbeddedCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
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
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export async function contractorPaymentGroupsList(
  client: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    Array<components.ContractorPaymentGroupMinimal>,
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
        .GetV1CompaniesCompanyIdContractorPaymentGroupsRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    company_id: encodeSimple("company_id", payload.company_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/companies/{company_id}/contractor_payment_groups",
  )(pathParams);

  const query = encodeFormQuery({
    "end_date": payload.end_date,
    "page": payload.page,
    "per": payload.per,
    "start_date": payload.start_date,
  });

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
    operationID: "get-v1-companies-company_id-contractor_payment_groups",
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
    query: query,
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
    Array<components.ContractorPaymentGroupMinimal>,
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
      z.array(components.ContractorPaymentGroupMinimal$inboundSchema),
    ),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
