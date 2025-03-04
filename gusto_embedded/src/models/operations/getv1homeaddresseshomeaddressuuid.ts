/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1HomeAddressesHomeAddressUuidRequest = {
  /**
   * The UUID of the home address
   */
  homeAddressUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type GetV1HomeAddressesHomeAddressUuidResponse = {
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
   * Example response
   */
  employeeAddress?: components.EmployeeAddress | undefined;
};

/** @internal */
export const GetV1HomeAddressesHomeAddressUuidRequest$inboundSchema: z.ZodType<
  GetV1HomeAddressesHomeAddressUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  home_address_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "home_address_uuid": "homeAddressUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1HomeAddressesHomeAddressUuidRequest$Outbound = {
  home_address_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1HomeAddressesHomeAddressUuidRequest$outboundSchema: z.ZodType<
  GetV1HomeAddressesHomeAddressUuidRequest$Outbound,
  z.ZodTypeDef,
  GetV1HomeAddressesHomeAddressUuidRequest
> = z.object({
  homeAddressUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
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
export namespace GetV1HomeAddressesHomeAddressUuidRequest$ {
  /** @deprecated use `GetV1HomeAddressesHomeAddressUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1HomeAddressesHomeAddressUuidRequest$inboundSchema;
  /** @deprecated use `GetV1HomeAddressesHomeAddressUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1HomeAddressesHomeAddressUuidRequest$outboundSchema;
  /** @deprecated use `GetV1HomeAddressesHomeAddressUuidRequest$Outbound` instead. */
  export type Outbound = GetV1HomeAddressesHomeAddressUuidRequest$Outbound;
}

export function getV1HomeAddressesHomeAddressUuidRequestToJSON(
  getV1HomeAddressesHomeAddressUuidRequest:
    GetV1HomeAddressesHomeAddressUuidRequest,
): string {
  return JSON.stringify(
    GetV1HomeAddressesHomeAddressUuidRequest$outboundSchema.parse(
      getV1HomeAddressesHomeAddressUuidRequest,
    ),
  );
}

export function getV1HomeAddressesHomeAddressUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1HomeAddressesHomeAddressUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1HomeAddressesHomeAddressUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1HomeAddressesHomeAddressUuidRequest' from JSON`,
  );
}

/** @internal */
export const GetV1HomeAddressesHomeAddressUuidResponse$inboundSchema: z.ZodType<
  GetV1HomeAddressesHomeAddressUuidResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Employee-Address": components.EmployeeAddress$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Employee-Address": "employeeAddress",
  });
});

/** @internal */
export type GetV1HomeAddressesHomeAddressUuidResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Employee-Address"?: components.EmployeeAddress$Outbound | undefined;
};

/** @internal */
export const GetV1HomeAddressesHomeAddressUuidResponse$outboundSchema:
  z.ZodType<
    GetV1HomeAddressesHomeAddressUuidResponse$Outbound,
    z.ZodTypeDef,
    GetV1HomeAddressesHomeAddressUuidResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    employeeAddress: components.EmployeeAddress$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      employeeAddress: "Employee-Address",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1HomeAddressesHomeAddressUuidResponse$ {
  /** @deprecated use `GetV1HomeAddressesHomeAddressUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1HomeAddressesHomeAddressUuidResponse$inboundSchema;
  /** @deprecated use `GetV1HomeAddressesHomeAddressUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1HomeAddressesHomeAddressUuidResponse$outboundSchema;
  /** @deprecated use `GetV1HomeAddressesHomeAddressUuidResponse$Outbound` instead. */
  export type Outbound = GetV1HomeAddressesHomeAddressUuidResponse$Outbound;
}

export function getV1HomeAddressesHomeAddressUuidResponseToJSON(
  getV1HomeAddressesHomeAddressUuidResponse:
    GetV1HomeAddressesHomeAddressUuidResponse,
): string {
  return JSON.stringify(
    GetV1HomeAddressesHomeAddressUuidResponse$outboundSchema.parse(
      getV1HomeAddressesHomeAddressUuidResponse,
    ),
  );
}

export function getV1HomeAddressesHomeAddressUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1HomeAddressesHomeAddressUuidResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1HomeAddressesHomeAddressUuidResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1HomeAddressesHomeAddressUuidResponse' from JSON`,
  );
}
