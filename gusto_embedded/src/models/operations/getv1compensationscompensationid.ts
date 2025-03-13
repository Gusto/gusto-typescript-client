/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Compensation,
  Compensation$inboundSchema,
  Compensation$Outbound,
  Compensation$outboundSchema,
} from "../components/compensation.js";
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

export type GetV1CompensationsCompensationIdRequest = {
  /**
   * The UUID of the compensation
   */
  compensationId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompensationsCompensationIdResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  compensation?: Compensation | undefined;
};

/** @internal */
export const GetV1CompensationsCompensationIdRequest$inboundSchema: z.ZodType<
  GetV1CompensationsCompensationIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  compensation_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "compensation_id": "compensationId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompensationsCompensationIdRequest$Outbound = {
  compensation_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompensationsCompensationIdRequest$outboundSchema: z.ZodType<
  GetV1CompensationsCompensationIdRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompensationsCompensationIdRequest
> = z.object({
  compensationId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    compensationId: "compensation_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompensationsCompensationIdRequest$ {
  /** @deprecated use `GetV1CompensationsCompensationIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompensationsCompensationIdRequest$inboundSchema;
  /** @deprecated use `GetV1CompensationsCompensationIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompensationsCompensationIdRequest$outboundSchema;
  /** @deprecated use `GetV1CompensationsCompensationIdRequest$Outbound` instead. */
  export type Outbound = GetV1CompensationsCompensationIdRequest$Outbound;
}

export function getV1CompensationsCompensationIdRequestToJSON(
  getV1CompensationsCompensationIdRequest:
    GetV1CompensationsCompensationIdRequest,
): string {
  return JSON.stringify(
    GetV1CompensationsCompensationIdRequest$outboundSchema.parse(
      getV1CompensationsCompensationIdRequest,
    ),
  );
}

export function getV1CompensationsCompensationIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompensationsCompensationIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompensationsCompensationIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompensationsCompensationIdRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompensationsCompensationIdResponse$inboundSchema: z.ZodType<
  GetV1CompensationsCompensationIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Compensation: Compensation$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Compensation": "compensation",
  });
});

/** @internal */
export type GetV1CompensationsCompensationIdResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Compensation?: Compensation$Outbound | undefined;
};

/** @internal */
export const GetV1CompensationsCompensationIdResponse$outboundSchema: z.ZodType<
  GetV1CompensationsCompensationIdResponse$Outbound,
  z.ZodTypeDef,
  GetV1CompensationsCompensationIdResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  compensation: Compensation$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    compensation: "Compensation",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompensationsCompensationIdResponse$ {
  /** @deprecated use `GetV1CompensationsCompensationIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompensationsCompensationIdResponse$inboundSchema;
  /** @deprecated use `GetV1CompensationsCompensationIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompensationsCompensationIdResponse$outboundSchema;
  /** @deprecated use `GetV1CompensationsCompensationIdResponse$Outbound` instead. */
  export type Outbound = GetV1CompensationsCompensationIdResponse$Outbound;
}

export function getV1CompensationsCompensationIdResponseToJSON(
  getV1CompensationsCompensationIdResponse:
    GetV1CompensationsCompensationIdResponse,
): string {
  return JSON.stringify(
    GetV1CompensationsCompensationIdResponse$outboundSchema.parse(
      getV1CompensationsCompensationIdResponse,
    ),
  );
}

export function getV1CompensationsCompensationIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompensationsCompensationIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompensationsCompensationIdResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompensationsCompensationIdResponse' from JSON`,
  );
}
