/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1WorkAddressesWorkAddressUuidRequest = {
  /**
   * The UUID of the work address
   */
  workAddressUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1WorkAddressesWorkAddressUuidRequest$inboundSchema: z.ZodType<
  GetV1WorkAddressesWorkAddressUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  work_address_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "work_address_uuid": "workAddressUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1WorkAddressesWorkAddressUuidRequest$Outbound = {
  work_address_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetV1WorkAddressesWorkAddressUuidRequest$outboundSchema: z.ZodType<
  GetV1WorkAddressesWorkAddressUuidRequest$Outbound,
  z.ZodTypeDef,
  GetV1WorkAddressesWorkAddressUuidRequest
> = z.object({
  workAddressUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    workAddressUuid: "work_address_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WorkAddressesWorkAddressUuidRequest$ {
  /** @deprecated use `GetV1WorkAddressesWorkAddressUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1WorkAddressesWorkAddressUuidRequest$inboundSchema;
  /** @deprecated use `GetV1WorkAddressesWorkAddressUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WorkAddressesWorkAddressUuidRequest$outboundSchema;
  /** @deprecated use `GetV1WorkAddressesWorkAddressUuidRequest$Outbound` instead. */
  export type Outbound = GetV1WorkAddressesWorkAddressUuidRequest$Outbound;
}

export function getV1WorkAddressesWorkAddressUuidRequestToJSON(
  getV1WorkAddressesWorkAddressUuidRequest:
    GetV1WorkAddressesWorkAddressUuidRequest,
): string {
  return JSON.stringify(
    GetV1WorkAddressesWorkAddressUuidRequest$outboundSchema.parse(
      getV1WorkAddressesWorkAddressUuidRequest,
    ),
  );
}

export function getV1WorkAddressesWorkAddressUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1WorkAddressesWorkAddressUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1WorkAddressesWorkAddressUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1WorkAddressesWorkAddressUuidRequest' from JSON`,
  );
}
