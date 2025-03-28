/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ExternalPayroll,
  ExternalPayroll$inboundSchema,
  ExternalPayroll$Outbound,
  ExternalPayroll$outboundSchema,
} from "../components/externalpayroll.js";
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

export type GetV1ExternalPayrollRequest = {
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

export type GetV1ExternalPayrollResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  externalPayroll?: ExternalPayroll | undefined;
};

/** @internal */
export const GetV1ExternalPayrollRequest$inboundSchema: z.ZodType<
  GetV1ExternalPayrollRequest,
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
export type GetV1ExternalPayrollRequest$Outbound = {
  company_uuid: string;
  external_payroll_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ExternalPayrollRequest$outboundSchema: z.ZodType<
  GetV1ExternalPayrollRequest$Outbound,
  z.ZodTypeDef,
  GetV1ExternalPayrollRequest
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
export namespace GetV1ExternalPayrollRequest$ {
  /** @deprecated use `GetV1ExternalPayrollRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1ExternalPayrollRequest$inboundSchema;
  /** @deprecated use `GetV1ExternalPayrollRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1ExternalPayrollRequest$outboundSchema;
  /** @deprecated use `GetV1ExternalPayrollRequest$Outbound` instead. */
  export type Outbound = GetV1ExternalPayrollRequest$Outbound;
}

export function getV1ExternalPayrollRequestToJSON(
  getV1ExternalPayrollRequest: GetV1ExternalPayrollRequest,
): string {
  return JSON.stringify(
    GetV1ExternalPayrollRequest$outboundSchema.parse(
      getV1ExternalPayrollRequest,
    ),
  );
}

export function getV1ExternalPayrollRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ExternalPayrollRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1ExternalPayrollRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ExternalPayrollRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ExternalPayrollResponse$inboundSchema: z.ZodType<
  GetV1ExternalPayrollResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  "External-Payroll": ExternalPayroll$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "External-Payroll": "externalPayroll",
  });
});

/** @internal */
export type GetV1ExternalPayrollResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "External-Payroll"?: ExternalPayroll$Outbound | undefined;
};

/** @internal */
export const GetV1ExternalPayrollResponse$outboundSchema: z.ZodType<
  GetV1ExternalPayrollResponse$Outbound,
  z.ZodTypeDef,
  GetV1ExternalPayrollResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  externalPayroll: ExternalPayroll$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    externalPayroll: "External-Payroll",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ExternalPayrollResponse$ {
  /** @deprecated use `GetV1ExternalPayrollResponse$inboundSchema` instead. */
  export const inboundSchema = GetV1ExternalPayrollResponse$inboundSchema;
  /** @deprecated use `GetV1ExternalPayrollResponse$outboundSchema` instead. */
  export const outboundSchema = GetV1ExternalPayrollResponse$outboundSchema;
  /** @deprecated use `GetV1ExternalPayrollResponse$Outbound` instead. */
  export type Outbound = GetV1ExternalPayrollResponse$Outbound;
}

export function getV1ExternalPayrollResponseToJSON(
  getV1ExternalPayrollResponse: GetV1ExternalPayrollResponse,
): string {
  return JSON.stringify(
    GetV1ExternalPayrollResponse$outboundSchema.parse(
      getV1ExternalPayrollResponse,
    ),
  );
}

export function getV1ExternalPayrollResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ExternalPayrollResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1ExternalPayrollResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ExternalPayrollResponse' from JSON`,
  );
}
