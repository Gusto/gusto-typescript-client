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
  GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest,
  GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$outboundSchema,
  GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse,
  GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$inboundSchema,
} from "../models/operations/getv1payrollspayrolluuidemployeesemployeeuuidpaystub.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get an employee pay stub (pdf)
 *
 * @remarks
 * Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.
 *
 * scope: `pay_stubs:read`
 */
export function payrollsGetPayStub(
  client: GustoEmbeddedCore,
  request: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse,
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
  request: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse,
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
      GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

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
    "/v1/payrolls/{payroll_id}/employees/{employee_id}/pay_stub",
  )(pathParams);

  const headers = new Headers(compactMap({
    Accept: "*/*",
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
      "get-v1-payrolls-payroll_uuid-employees-employee_uuid-pay_stub",
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
    userAgent: client._options.userAgent,
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
    GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse,
    | GustoEmbeddedError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.nil(
      200,
      GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse$inboundSchema,
    ),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
