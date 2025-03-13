/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ExternalPayrollTaxSuggestions,
  ExternalPayrollTaxSuggestions$inboundSchema,
  ExternalPayrollTaxSuggestions$Outbound,
  ExternalPayrollTaxSuggestions$outboundSchema,
} from "../components/externalpayrolltaxsuggestions.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ExternalPayrollCalculateTaxesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * The UUID of the external payroll
   */
  externalPayrollId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1ExternalPayrollCalculateTaxesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  externalPayrollTaxSuggestionsList?:
    | Array<ExternalPayrollTaxSuggestions>
    | undefined;
};

/** @internal */
export const GetV1ExternalPayrollCalculateTaxesRequest$inboundSchema: z.ZodType<
  GetV1ExternalPayrollCalculateTaxesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  external_payroll_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "external_payroll_id": "externalPayrollId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1ExternalPayrollCalculateTaxesRequest$Outbound = {
  company_uuid: string;
  external_payroll_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema:
  z.ZodType<
    GetV1ExternalPayrollCalculateTaxesRequest$Outbound,
    z.ZodTypeDef,
    GetV1ExternalPayrollCalculateTaxesRequest
  > = z.object({
    companyUuid: z.string(),
    externalPayrollId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      externalPayrollId: "external_payroll_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ExternalPayrollCalculateTaxesRequest$ {
  /** @deprecated use `GetV1ExternalPayrollCalculateTaxesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ExternalPayrollCalculateTaxesRequest$inboundSchema;
  /** @deprecated use `GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema;
  /** @deprecated use `GetV1ExternalPayrollCalculateTaxesRequest$Outbound` instead. */
  export type Outbound = GetV1ExternalPayrollCalculateTaxesRequest$Outbound;
}

export function getV1ExternalPayrollCalculateTaxesRequestToJSON(
  getV1ExternalPayrollCalculateTaxesRequest:
    GetV1ExternalPayrollCalculateTaxesRequest,
): string {
  return JSON.stringify(
    GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema.parse(
      getV1ExternalPayrollCalculateTaxesRequest,
    ),
  );
}

export function getV1ExternalPayrollCalculateTaxesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ExternalPayrollCalculateTaxesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ExternalPayrollCalculateTaxesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1ExternalPayrollCalculateTaxesRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema:
  z.ZodType<GetV1ExternalPayrollCalculateTaxesResponse, z.ZodTypeDef, unknown> =
    z.object({
      HttpMeta: HTTPMetadata$inboundSchema,
      "External-Payroll-Tax-Suggestions-List": z.array(
        ExternalPayrollTaxSuggestions$inboundSchema,
      ).optional(),
    }).transform((v) => {
      return remap$(v, {
        "HttpMeta": "httpMeta",
        "External-Payroll-Tax-Suggestions-List":
          "externalPayrollTaxSuggestionsList",
      });
    });

/** @internal */
export type GetV1ExternalPayrollCalculateTaxesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "External-Payroll-Tax-Suggestions-List"?:
    | Array<ExternalPayrollTaxSuggestions$Outbound>
    | undefined;
};

/** @internal */
export const GetV1ExternalPayrollCalculateTaxesResponse$outboundSchema:
  z.ZodType<
    GetV1ExternalPayrollCalculateTaxesResponse$Outbound,
    z.ZodTypeDef,
    GetV1ExternalPayrollCalculateTaxesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    externalPayrollTaxSuggestionsList: z.array(
      ExternalPayrollTaxSuggestions$outboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      externalPayrollTaxSuggestionsList:
        "External-Payroll-Tax-Suggestions-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ExternalPayrollCalculateTaxesResponse$ {
  /** @deprecated use `GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema;
  /** @deprecated use `GetV1ExternalPayrollCalculateTaxesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ExternalPayrollCalculateTaxesResponse$outboundSchema;
  /** @deprecated use `GetV1ExternalPayrollCalculateTaxesResponse$Outbound` instead. */
  export type Outbound = GetV1ExternalPayrollCalculateTaxesResponse$Outbound;
}

export function getV1ExternalPayrollCalculateTaxesResponseToJSON(
  getV1ExternalPayrollCalculateTaxesResponse:
    GetV1ExternalPayrollCalculateTaxesResponse,
): string {
  return JSON.stringify(
    GetV1ExternalPayrollCalculateTaxesResponse$outboundSchema.parse(
      getV1ExternalPayrollCalculateTaxesResponse,
    ),
  );
}

export function getV1ExternalPayrollCalculateTaxesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ExternalPayrollCalculateTaxesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1ExternalPayrollCalculateTaxesResponse' from JSON`,
  );
}
