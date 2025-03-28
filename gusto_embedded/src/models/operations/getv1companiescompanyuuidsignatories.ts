/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  Signatory,
  Signatory$inboundSchema,
  Signatory$Outbound,
  Signatory$outboundSchema,
} from "../components/signatory.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyUuidSignatoriesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompaniesCompanyUuidSignatoriesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  signatoryList?: Array<Signatory> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyUuidSignatoriesRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidSignatoriesRequest,
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
export type GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyUuidSignatoriesRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyUuidSignatoriesRequest
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
export namespace GetV1CompaniesCompanyUuidSignatoriesRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyUuidSignatoriesRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyUuidSignatoriesRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyUuidSignatoriesRequest$Outbound;
}

export function getV1CompaniesCompanyUuidSignatoriesRequestToJSON(
  getV1CompaniesCompanyUuidSignatoriesRequest:
    GetV1CompaniesCompanyUuidSignatoriesRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyUuidSignatoriesRequest$outboundSchema.parse(
      getV1CompaniesCompanyUuidSignatoriesRequest,
    ),
  );
}

export function getV1CompaniesCompanyUuidSignatoriesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyUuidSignatoriesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyUuidSignatoriesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyUuidSignatoriesRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyUuidSignatoriesResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidSignatoriesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Signatory-List": z.array(Signatory$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Signatory-List": "signatoryList",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Signatory-List"?: Array<Signatory$Outbound> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyUuidSignatoriesResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyUuidSignatoriesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    signatoryList: z.array(Signatory$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      signatoryList: "Signatory-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyUuidSignatoriesResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyUuidSignatoriesResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyUuidSignatoriesResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyUuidSignatoriesResponse$Outbound;
}

export function getV1CompaniesCompanyUuidSignatoriesResponseToJSON(
  getV1CompaniesCompanyUuidSignatoriesResponse:
    GetV1CompaniesCompanyUuidSignatoriesResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyUuidSignatoriesResponse$outboundSchema.parse(
      getV1CompaniesCompanyUuidSignatoriesResponse,
    ),
  );
}

export function getV1CompaniesCompanyUuidSignatoriesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyUuidSignatoriesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyUuidSignatoriesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyUuidSignatoriesResponse' from JSON`,
  );
}
