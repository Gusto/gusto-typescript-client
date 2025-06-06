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
  PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
  PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema,
  PutV1CompaniesCompanyIdBankAccountsVerifyResponse,
  PutV1CompaniesCompanyIdBankAccountsVerifyResponse$inboundSchema,
} from "../models/operations/putv1companiescompanyidbankaccountsverify.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Verify a company bank account
 *
 * @remarks
 * Verify a company bank account by confirming the two micro-deposits sent to the bank account. Note that the order of the two deposits specified in request parameters does not matter. There's a maximum of 5 verification attempts, after which we will automatically initiate a new set of micro-deposits and require the bank account to be verified with the new micro-deposits.
 *
 * ### Bank account verification in demo
 *
 * We provide the endpoint `POST '/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/send_test_deposits'` to facilitate bank account verification in the demo environment. This endpoint simulates the micro-deposits transfer and returns them in the response. You can call this endpoint as many times as you wish to retrieve the values of the two micro deposits.
 *
 * ```
 *   POST '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/bank_accounts/ade55e57-4800-4059-9ecd-fa29cfeb6dd2/send_test_deposits'
 *
 *   {
 *     "deposit_1": 0.02,
 *     "deposit_2": 0.42
 *   }
 * ```
 *
 * scope: `company_bank_accounts:write`
 */
export function bankAccountsVerify(
  client: GustoEmbeddedCore,
  request: PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    PutV1CompaniesCompanyIdBankAccountsVerifyResponse,
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
  request: PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      PutV1CompaniesCompanyIdBankAccountsVerifyResponse,
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
      PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema.parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    bank_account_uuid: encodeSimple(
      "bank_account_uuid",
      payload.bank_account_uuid,
      { explode: false, charEncoding: "percent" },
    ),
    company_id: encodeSimple("company_id", payload.company_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/verify",
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
    operationID: "put-v1-companies-company_id-bank-accounts-verify",
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
    userAgent: client._options.userAgent,
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
    PutV1CompaniesCompanyIdBankAccountsVerifyResponse,
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
      PutV1CompaniesCompanyIdBankAccountsVerifyResponse$inboundSchema,
      { key: "Company-Bank-Account" },
    ),
    M.jsonErr(422, UnprocessableEntityErrorObject$inboundSchema),
    M.fail([404, "4XX"]),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
