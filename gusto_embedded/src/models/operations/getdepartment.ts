/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Department,
  Department$inboundSchema,
  Department$Outbound,
  Department$outboundSchema,
} from "../components/department.js";
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

export type GetDepartmentRequest = {
  /**
   * The UUID of the department
   */
  departmentUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetDepartmentResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Department Object Example
   */
  department?: Department | undefined;
};

/** @internal */
export const GetDepartmentRequest$inboundSchema: z.ZodType<
  GetDepartmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  department_uuid: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "department_uuid": "departmentUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetDepartmentRequest$Outbound = {
  department_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetDepartmentRequest$outboundSchema: z.ZodType<
  GetDepartmentRequest$Outbound,
  z.ZodTypeDef,
  GetDepartmentRequest
> = z.object({
  departmentUuid: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    departmentUuid: "department_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDepartmentRequest$ {
  /** @deprecated use `GetDepartmentRequest$inboundSchema` instead. */
  export const inboundSchema = GetDepartmentRequest$inboundSchema;
  /** @deprecated use `GetDepartmentRequest$outboundSchema` instead. */
  export const outboundSchema = GetDepartmentRequest$outboundSchema;
  /** @deprecated use `GetDepartmentRequest$Outbound` instead. */
  export type Outbound = GetDepartmentRequest$Outbound;
}

export function getDepartmentRequestToJSON(
  getDepartmentRequest: GetDepartmentRequest,
): string {
  return JSON.stringify(
    GetDepartmentRequest$outboundSchema.parse(getDepartmentRequest),
  );
}

export function getDepartmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDepartmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDepartmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDepartmentRequest' from JSON`,
  );
}

/** @internal */
export const GetDepartmentResponse$inboundSchema: z.ZodType<
  GetDepartmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Department: Department$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Department": "department",
  });
});

/** @internal */
export type GetDepartmentResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Department?: Department$Outbound | undefined;
};

/** @internal */
export const GetDepartmentResponse$outboundSchema: z.ZodType<
  GetDepartmentResponse$Outbound,
  z.ZodTypeDef,
  GetDepartmentResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  department: Department$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    department: "Department",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDepartmentResponse$ {
  /** @deprecated use `GetDepartmentResponse$inboundSchema` instead. */
  export const inboundSchema = GetDepartmentResponse$inboundSchema;
  /** @deprecated use `GetDepartmentResponse$outboundSchema` instead. */
  export const outboundSchema = GetDepartmentResponse$outboundSchema;
  /** @deprecated use `GetDepartmentResponse$Outbound` instead. */
  export type Outbound = GetDepartmentResponse$Outbound;
}

export function getDepartmentResponseToJSON(
  getDepartmentResponse: GetDepartmentResponse,
): string {
  return JSON.stringify(
    GetDepartmentResponse$outboundSchema.parse(getDepartmentResponse),
  );
}

export function getDepartmentResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDepartmentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDepartmentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDepartmentResponse' from JSON`,
  );
}
