/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  HolidayPayPolicy,
  HolidayPayPolicy$inboundSchema,
  HolidayPayPolicy$Outbound,
  HolidayPayPolicy$outboundSchema,
} from "../components/holidaypaypolicy.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCompaniesCompanyUuidHolidayPayPolicyRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetCompaniesCompanyUuidHolidayPayPolicyResponse = {
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
   * Holiday Pay Policy Object Example
   */
  holidayPayPolicy?: HolidayPayPolicy | undefined;
};

/** @internal */
export const GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidHolidayPayPolicyRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound,
    z.ZodTypeDef,
    GetCompaniesCompanyUuidHolidayPayPolicyRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompaniesCompanyUuidHolidayPayPolicyRequest$ {
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
  export type Outbound =
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}

export function getCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(
  getCompaniesCompanyUuidHolidayPayPolicyRequest:
    GetCompaniesCompanyUuidHolidayPayPolicyRequest,
): string {
  return JSON.stringify(
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema.parse(
      getCompaniesCompanyUuidHolidayPayPolicyRequest,
    ),
  );
}

export function getCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetCompaniesCompanyUuidHolidayPayPolicyRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetCompaniesCompanyUuidHolidayPayPolicyRequest' from JSON`,
  );
}

/** @internal */
export const GetCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidHolidayPayPolicyResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Holiday-Pay-Policy": HolidayPayPolicy$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Holiday-Pay-Policy": "holidayPayPolicy",
    });
  });

/** @internal */
export type GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Holiday-Pay-Policy"?: HolidayPayPolicy$Outbound | undefined;
};

/** @internal */
export const GetCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound,
    z.ZodTypeDef,
    GetCompaniesCompanyUuidHolidayPayPolicyResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    holidayPayPolicy: HolidayPayPolicy$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      holidayPayPolicy: "Holiday-Pay-Policy",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompaniesCompanyUuidHolidayPayPolicyResponse$ {
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound` instead. */
  export type Outbound =
    GetCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound;
}

export function getCompaniesCompanyUuidHolidayPayPolicyResponseToJSON(
  getCompaniesCompanyUuidHolidayPayPolicyResponse:
    GetCompaniesCompanyUuidHolidayPayPolicyResponse,
): string {
  return JSON.stringify(
    GetCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema.parse(
      getCompaniesCompanyUuidHolidayPayPolicyResponse,
    ),
  );
}

export function getCompaniesCompanyUuidHolidayPayPolicyResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetCompaniesCompanyUuidHolidayPayPolicyResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetCompaniesCompanyUuidHolidayPayPolicyResponse' from JSON`,
  );
}
