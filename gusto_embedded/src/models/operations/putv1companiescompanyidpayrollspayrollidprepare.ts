/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  PayrollPrepared,
  PayrollPrepared$inboundSchema,
  PayrollPrepared$Outbound,
  PayrollPrepared$outboundSchema,
} from "../components/payrollprepared.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * The UUID of the payroll
   */
  payrollId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse = {
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
   * A prepared payroll
   */
  payrollPrepared?: PayrollPrepared | undefined;
};

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    payroll_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "payroll_id": "payrollId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound = {
  company_id: string;
  payroll_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest
  > = z.object({
    companyId: z.string(),
    payrollId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      payrollId: "payroll_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$ {
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound;
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestToJSON(
  putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest:
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema.parse(
      putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest,
    ),
  );
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Payroll-Prepared": PayrollPrepared$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Payroll-Prepared": "payrollPrepared",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Payroll-Prepared"?: PayrollPrepared$Outbound | undefined;
};

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    payrollPrepared: PayrollPrepared$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      payrollPrepared: "Payroll-Prepared",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$ {
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound;
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponseToJSON(
  putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse:
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$outboundSchema
      .parse(putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse),
  );
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse' from JSON`,
  );
}
