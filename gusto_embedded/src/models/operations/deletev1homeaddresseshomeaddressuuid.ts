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
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1HomeAddressesHomeAddressUuidRequest = {
  /**
   * The UUID of the home address
   */
  homeAddressUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type DeleteV1HomeAddressesHomeAddressUuidResponse = {
  httpMeta: HTTPMetadata;
};

/** @internal */
export const DeleteV1HomeAddressesHomeAddressUuidRequest$inboundSchema:
  z.ZodType<
    DeleteV1HomeAddressesHomeAddressUuidRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    home_address_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "home_address_uuid": "homeAddressUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound = {
  home_address_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteV1HomeAddressesHomeAddressUuidRequest$outboundSchema:
  z.ZodType<
    DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1HomeAddressesHomeAddressUuidRequest
  > = z.object({
    homeAddressUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      homeAddressUuid: "home_address_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1HomeAddressesHomeAddressUuidRequest$ {
  /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1HomeAddressesHomeAddressUuidRequest$inboundSchema;
  /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1HomeAddressesHomeAddressUuidRequest$outboundSchema;
  /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound` instead. */
  export type Outbound = DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound;
}

export function deleteV1HomeAddressesHomeAddressUuidRequestToJSON(
  deleteV1HomeAddressesHomeAddressUuidRequest:
    DeleteV1HomeAddressesHomeAddressUuidRequest,
): string {
  return JSON.stringify(
    DeleteV1HomeAddressesHomeAddressUuidRequest$outboundSchema.parse(
      deleteV1HomeAddressesHomeAddressUuidRequest,
    ),
  );
}

export function deleteV1HomeAddressesHomeAddressUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1HomeAddressesHomeAddressUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1HomeAddressesHomeAddressUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1HomeAddressesHomeAddressUuidRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV1HomeAddressesHomeAddressUuidResponse$inboundSchema:
  z.ZodType<
    DeleteV1HomeAddressesHomeAddressUuidResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
    });
  });

/** @internal */
export type DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
};

/** @internal */
export const DeleteV1HomeAddressesHomeAddressUuidResponse$outboundSchema:
  z.ZodType<
    DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound,
    z.ZodTypeDef,
    DeleteV1HomeAddressesHomeAddressUuidResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1HomeAddressesHomeAddressUuidResponse$ {
  /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1HomeAddressesHomeAddressUuidResponse$inboundSchema;
  /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1HomeAddressesHomeAddressUuidResponse$outboundSchema;
  /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound` instead. */
  export type Outbound = DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound;
}

export function deleteV1HomeAddressesHomeAddressUuidResponseToJSON(
  deleteV1HomeAddressesHomeAddressUuidResponse:
    DeleteV1HomeAddressesHomeAddressUuidResponse,
): string {
  return JSON.stringify(
    DeleteV1HomeAddressesHomeAddressUuidResponse$outboundSchema.parse(
      deleteV1HomeAddressesHomeAddressUuidResponse,
    ),
  );
}

export function deleteV1HomeAddressesHomeAddressUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1HomeAddressesHomeAddressUuidResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1HomeAddressesHomeAddressUuidResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1HomeAddressesHomeAddressUuidResponse' from JSON`,
  );
}
