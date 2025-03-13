/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GustoEmbeddedCore } from "../core.js";
import { encodeFormQuery, encodeSimple, queryJoin } from "../lib/encodings.js";
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
  GetV1CompaniesCompanyIdPayrollsRequest,
  GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema,
  GetV1CompaniesCompanyIdPayrollsResponse,
  GetV1CompaniesCompanyIdPayrollsResponse$inboundSchema,
} from "../models/operations/getv1companiescompanyidpayrolls.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get all payrolls for a company
 *
 * @remarks
 * Returns a list of payrolls for a company. You can change the payrolls returned by updating the processing_status, payroll_types, start_date, & end_date params.
 *
 * By default, will return processed, regular payrolls for the past 6 months.
 *
 * Notes:
 * * Dollar amounts are returned as string representations of numeric decimals, are represented to the cent.
 * * end_date can be at most 3 months in the future and start_date and end_date can't be more than 1 year apart.
 *
 * scope: `payrolls:read`
 */
export function payrollsList(
  client: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPayrollsRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    GetV1CompaniesCompanyIdPayrollsResponse,
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
  request: GetV1CompaniesCompanyIdPayrollsRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      GetV1CompaniesCompanyIdPayrollsResponse,
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
      GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    company_id: encodeSimple("company_id", payload.company_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v1/companies/{company_id}/payrolls")(pathParams);

  const query = queryJoin(
    encodeFormQuery({
      "include": payload.include,
      "payroll_types": payload.payroll_types,
      "processing_statuses": payload.processing_statuses,
    }, { explode: false }),
    encodeFormQuery({
      "end_date": payload.end_date,
      "page": payload.page,
      "per": payload.per,
      "sort_order": payload.sort_order,
      "start_date": payload.start_date,
    }),
  );

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
    operationID: "get-v1-companies-company_id-payrolls",
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
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    GetV1CompaniesCompanyIdPayrollsResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, GetV1CompaniesCompanyIdPayrollsResponse$inboundSchema, {
      key: "Payroll-List",
    }),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
