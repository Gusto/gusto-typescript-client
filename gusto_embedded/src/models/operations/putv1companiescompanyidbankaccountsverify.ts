/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody = {
  /**
   * The dollar amount of the first micro-deposit
   */
  deposit1: number;
  /**
   * The dollar amount of the second micro-deposit
   */
  deposit2: number;
};

export type PutV1CompaniesCompanyIdBankAccountsVerifyRequest = {
  /**
   * The UUID of the bank account
   */
  bankAccountUuid: string;
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody;
};

/** @internal */
export const PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    deposit_1: z.number(),
    deposit_2: z.number(),
  }).transform((v) => {
    return remap$(v, {
      "deposit_1": "deposit1",
      "deposit_2": "deposit2",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound = {
  deposit_1: number;
  deposit_2: number;
};

/** @internal */
export const PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody
  > = z.object({
    deposit1: z.number(),
    deposit2: z.number(),
  }).transform((v) => {
    return remap$(v, {
      deposit1: "deposit_1",
      deposit2: "deposit_2",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$ {
  /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound;
}

export function putV1CompaniesCompanyIdBankAccountsVerifyRequestBodyToJSON(
  putV1CompaniesCompanyIdBankAccountsVerifyRequestBody:
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema.parse(
      putV1CompaniesCompanyIdBankAccountsVerifyRequestBody,
    ),
  );
}

export function putV1CompaniesCompanyIdBankAccountsVerifyRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyIdBankAccountsVerifyRequest$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    bank_account_uuid: z.string(),
    company_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "bank_account_uuid": "bankAccountUuid",
      "company_id": "companyId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound = {
  bank_account_uuid: string;
  company_id: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$Outbound;
};

/** @internal */
export const PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest
  > = z.object({
    bankAccountUuid: z.string(),
    companyId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      bankAccountUuid: "bank_account_uuid",
      companyId: "company_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdBankAccountsVerifyRequest$ {
  /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest$Outbound;
}

export function putV1CompaniesCompanyIdBankAccountsVerifyRequestToJSON(
  putV1CompaniesCompanyIdBankAccountsVerifyRequest:
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdBankAccountsVerifyRequest$outboundSchema.parse(
      putV1CompaniesCompanyIdBankAccountsVerifyRequest,
    ),
  );
}

export function putV1CompaniesCompanyIdBankAccountsVerifyRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdBankAccountsVerifyRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdBankAccountsVerifyRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompaniesCompanyIdBankAccountsVerifyRequest' from JSON`,
  );
}
