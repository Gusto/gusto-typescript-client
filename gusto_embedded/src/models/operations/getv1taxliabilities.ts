/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1TaxLiabilitiesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1TaxLiabilitiesRequest$inboundSchema: z.ZodType<
  GetV1TaxLiabilitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1TaxLiabilitiesRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1TaxLiabilitiesRequest$outboundSchema: z.ZodType<
  GetV1TaxLiabilitiesRequest$Outbound,
  z.ZodTypeDef,
  GetV1TaxLiabilitiesRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
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
export namespace GetV1TaxLiabilitiesRequest$ {
  /** @deprecated use `GetV1TaxLiabilitiesRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1TaxLiabilitiesRequest$inboundSchema;
  /** @deprecated use `GetV1TaxLiabilitiesRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1TaxLiabilitiesRequest$outboundSchema;
  /** @deprecated use `GetV1TaxLiabilitiesRequest$Outbound` instead. */
  export type Outbound = GetV1TaxLiabilitiesRequest$Outbound;
}

export function getV1TaxLiabilitiesRequestToJSON(
  getV1TaxLiabilitiesRequest: GetV1TaxLiabilitiesRequest,
): string {
  return JSON.stringify(
    GetV1TaxLiabilitiesRequest$outboundSchema.parse(getV1TaxLiabilitiesRequest),
  );
}

export function getV1TaxLiabilitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1TaxLiabilitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1TaxLiabilitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1TaxLiabilitiesRequest' from JSON`,
  );
}
