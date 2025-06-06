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
  Report,
  Report$inboundSchema,
  Report$Outbound,
  Report$outboundSchema,
} from "../components/report.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetReportsRequestUuidRequest = {
  /**
   * The UUID of the request to generate a document. Generate document endpoints return request_uuids to be used with the GET generated document endpoint.
   */
  requestUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetReportsRequestUuidResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  report?: Report | undefined;
};

/** @internal */
export const GetReportsRequestUuidRequest$inboundSchema: z.ZodType<
  GetReportsRequestUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  request_uuid: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "request_uuid": "requestUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetReportsRequestUuidRequest$Outbound = {
  request_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetReportsRequestUuidRequest$outboundSchema: z.ZodType<
  GetReportsRequestUuidRequest$Outbound,
  z.ZodTypeDef,
  GetReportsRequestUuidRequest
> = z.object({
  requestUuid: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    requestUuid: "request_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetReportsRequestUuidRequest$ {
  /** @deprecated use `GetReportsRequestUuidRequest$inboundSchema` instead. */
  export const inboundSchema = GetReportsRequestUuidRequest$inboundSchema;
  /** @deprecated use `GetReportsRequestUuidRequest$outboundSchema` instead. */
  export const outboundSchema = GetReportsRequestUuidRequest$outboundSchema;
  /** @deprecated use `GetReportsRequestUuidRequest$Outbound` instead. */
  export type Outbound = GetReportsRequestUuidRequest$Outbound;
}

export function getReportsRequestUuidRequestToJSON(
  getReportsRequestUuidRequest: GetReportsRequestUuidRequest,
): string {
  return JSON.stringify(
    GetReportsRequestUuidRequest$outboundSchema.parse(
      getReportsRequestUuidRequest,
    ),
  );
}

export function getReportsRequestUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetReportsRequestUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetReportsRequestUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetReportsRequestUuidRequest' from JSON`,
  );
}

/** @internal */
export const GetReportsRequestUuidResponse$inboundSchema: z.ZodType<
  GetReportsRequestUuidResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Report: Report$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Report": "report",
  });
});

/** @internal */
export type GetReportsRequestUuidResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Report?: Report$Outbound | undefined;
};

/** @internal */
export const GetReportsRequestUuidResponse$outboundSchema: z.ZodType<
  GetReportsRequestUuidResponse$Outbound,
  z.ZodTypeDef,
  GetReportsRequestUuidResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  report: Report$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    report: "Report",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetReportsRequestUuidResponse$ {
  /** @deprecated use `GetReportsRequestUuidResponse$inboundSchema` instead. */
  export const inboundSchema = GetReportsRequestUuidResponse$inboundSchema;
  /** @deprecated use `GetReportsRequestUuidResponse$outboundSchema` instead. */
  export const outboundSchema = GetReportsRequestUuidResponse$outboundSchema;
  /** @deprecated use `GetReportsRequestUuidResponse$Outbound` instead. */
  export type Outbound = GetReportsRequestUuidResponse$Outbound;
}

export function getReportsRequestUuidResponseToJSON(
  getReportsRequestUuidResponse: GetReportsRequestUuidResponse,
): string {
  return JSON.stringify(
    GetReportsRequestUuidResponse$outboundSchema.parse(
      getReportsRequestUuidResponse,
    ),
  );
}

export function getReportsRequestUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetReportsRequestUuidResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetReportsRequestUuidResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetReportsRequestUuidResponse' from JSON`,
  );
}
