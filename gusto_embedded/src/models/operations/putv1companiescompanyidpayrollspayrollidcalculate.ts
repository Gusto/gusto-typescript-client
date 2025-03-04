/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest = {
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
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse = {
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
};

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    payroll_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "payroll_id": "payrollId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound =
  {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest
  > = z.object({
    companyId: z.string(),
    payrollId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
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
export namespace PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$ {
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound;
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequestToJSON(
  putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest:
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$outboundSchema
      .parse(putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest),
  );
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
  };

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$ {
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound;
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseToJSON(
  putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse:
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$outboundSchema
      .parse(putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse),
  );
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse' from JSON`,
  );
}
