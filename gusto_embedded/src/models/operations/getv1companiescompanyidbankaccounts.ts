/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CompanyBankAccount,
  CompanyBankAccount$inboundSchema,
  CompanyBankAccount$Outbound,
  CompanyBankAccount$outboundSchema,
} from "../components/companybankaccount.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdBankAccountsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompaniesCompanyIdBankAccountsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Example response
   */
  companyBankAccountList?: Array<CompanyBankAccount> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema:
  z.ZodType<GetV1CompaniesCompanyIdBankAccountsRequest, z.ZodTypeDef, unknown> =
    z.object({
      company_id: z.string(),
      "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    }).transform((v) => {
      return remap$(v, {
        "company_id": "companyId",
        "X-Gusto-API-Version": "xGustoAPIVersion",
      });
    });

/** @internal */
export type GetV1CompaniesCompanyIdBankAccountsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdBankAccountsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdBankAccountsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdBankAccountsRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdBankAccountsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdBankAccountsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdBankAccountsRequest$Outbound;
}

export function getV1CompaniesCompanyIdBankAccountsRequestToJSON(
  getV1CompaniesCompanyIdBankAccountsRequest:
    GetV1CompaniesCompanyIdBankAccountsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdBankAccountsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdBankAccountsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdBankAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdBankAccountsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdBankAccountsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdBankAccountsResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdBankAccountsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Company-Bank-Account-List": z.array(CompanyBankAccount$inboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Company-Bank-Account-List": "companyBankAccountList",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdBankAccountsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Company-Bank-Account-List"?: Array<CompanyBankAccount$Outbound> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdBankAccountsResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdBankAccountsResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdBankAccountsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    companyBankAccountList: z.array(CompanyBankAccount$outboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      companyBankAccountList: "Company-Bank-Account-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdBankAccountsResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdBankAccountsResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdBankAccountsResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdBankAccountsResponse$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdBankAccountsResponse$Outbound;
}

export function getV1CompaniesCompanyIdBankAccountsResponseToJSON(
  getV1CompaniesCompanyIdBankAccountsResponse:
    GetV1CompaniesCompanyIdBankAccountsResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdBankAccountsResponse$outboundSchema.parse(
      getV1CompaniesCompanyIdBankAccountsResponse,
    ),
  );
}

export function getV1CompaniesCompanyIdBankAccountsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdBankAccountsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdBankAccountsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdBankAccountsResponse' from JSON`,
  );
}
