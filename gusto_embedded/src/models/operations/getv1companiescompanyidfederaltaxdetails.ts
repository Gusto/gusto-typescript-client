/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  FederalTaxDetails,
  FederalTaxDetails$inboundSchema,
  FederalTaxDetails$Outbound,
  FederalTaxDetails$outboundSchema,
} from "../components/federaltaxdetails.js";
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

export type GetV1CompaniesCompanyIdFederalTaxDetailsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompaniesCompanyIdFederalTaxDetailsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  federalTaxDetails?: FederalTaxDetails | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest
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
export namespace GetV1CompaniesCompanyIdFederalTaxDetailsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound;
}

export function getV1CompaniesCompanyIdFederalTaxDetailsRequestToJSON(
  getV1CompaniesCompanyIdFederalTaxDetailsRequest:
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdFederalTaxDetailsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdFederalTaxDetailsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdFederalTaxDetailsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Federal-Tax-Details": FederalTaxDetails$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Federal-Tax-Details": "federalTaxDetails",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Federal-Tax-Details"?: FederalTaxDetails$Outbound | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    federalTaxDetails: FederalTaxDetails$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      federalTaxDetails: "Federal-Tax-Details",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdFederalTaxDetailsResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound;
}

export function getV1CompaniesCompanyIdFederalTaxDetailsResponseToJSON(
  getV1CompaniesCompanyIdFederalTaxDetailsResponse:
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema.parse(
      getV1CompaniesCompanyIdFederalTaxDetailsResponse,
    ),
  );
}

export function getV1CompaniesCompanyIdFederalTaxDetailsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdFederalTaxDetailsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdFederalTaxDetailsResponse' from JSON`,
  );
}
