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
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  UnprocessableEntityErrorObject,
  UnprocessableEntityErrorObject$inboundSchema,
} from "../models/errors/unprocessableentityerrorobject.js";
import {
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema,
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema,
} from "../models/operations/postv1payrollspayrollidcalculateaccruingtimeoffhours.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Calculate accruing time off hours
 *
 * @remarks
 * Returns a list of accruing time off for each time off policy associated with the employee.
 *
 * Factors affecting the accrued hours:
 *   * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
 *   * how many hours of work during this pay period
 *   * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
 *   * company pay schedule frequency (for per pay period)
 *
 * If none of the parameters is passed in, the accrued time off hour will be 0.
 *
 * scope: `payrolls:read`
 */
export function timeOffPoliciesCalculateAccruingTimeOffHours(
  client: GustoEmbeddedCore,
  request: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
    | UnprocessableEntityErrorObject
    | GustoEmbeddedError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
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
  request: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
      | UnprocessableEntityErrorObject
      | GustoEmbeddedError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    employee_id: encodeSimple("employee_id", payload.employee_id, {
      explode: false,
      charEncoding: "percent",
    }),
    payroll_id: encodeSimple("payroll_id", payload.payroll_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/payrolls/{payroll_id}/employees/{employee_id}/calculate_accruing_time_off_hours",
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
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID:
      "post-v1-payrolls-payroll_id-calculate_accruing_time_off_hours",
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
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["422", "4XX", "5XX"],
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
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
    | UnprocessableEntityErrorObject
    | GustoEmbeddedError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(
      200,
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema,
      { key: "Accruing-Time-Off-Hour-Object" },
    ),
    M.jsonErr(422, UnprocessableEntityErrorObject$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
