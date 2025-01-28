/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1LocationsLocationUuidMinimumWagesRequest = {
  /**
   * The UUID of the location
   */
  locationUuid: string;
  effectiveDate?: string | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1LocationsLocationUuidMinimumWagesRequest$inboundSchema:
  z.ZodType<
    GetV1LocationsLocationUuidMinimumWagesRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    location_uuid: z.string(),
    effective_date: z.string().optional(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "location_uuid": "locationUuid",
      "effective_date": "effectiveDate",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1LocationsLocationUuidMinimumWagesRequest$Outbound = {
  location_uuid: string;
  effective_date?: string | undefined;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema:
  z.ZodType<
    GetV1LocationsLocationUuidMinimumWagesRequest$Outbound,
    z.ZodTypeDef,
    GetV1LocationsLocationUuidMinimumWagesRequest
  > = z.object({
    locationUuid: z.string(),
    effectiveDate: z.string().optional(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      locationUuid: "location_uuid",
      effectiveDate: "effective_date",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1LocationsLocationUuidMinimumWagesRequest$ {
  /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1LocationsLocationUuidMinimumWagesRequest$inboundSchema;
  /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema;
  /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesRequest$Outbound` instead. */
  export type Outbound = GetV1LocationsLocationUuidMinimumWagesRequest$Outbound;
}

export function getV1LocationsLocationUuidMinimumWagesRequestToJSON(
  getV1LocationsLocationUuidMinimumWagesRequest:
    GetV1LocationsLocationUuidMinimumWagesRequest,
): string {
  return JSON.stringify(
    GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema.parse(
      getV1LocationsLocationUuidMinimumWagesRequest,
    ),
  );
}

export function getV1LocationsLocationUuidMinimumWagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1LocationsLocationUuidMinimumWagesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1LocationsLocationUuidMinimumWagesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1LocationsLocationUuidMinimumWagesRequest' from JSON`,
  );
}
