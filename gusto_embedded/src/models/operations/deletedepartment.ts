/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteDepartmentRequest = {
  /**
   * The UUID of the department
   */
  departmentUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type DeleteDepartmentResponse = {
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
};

/** @internal */
export const DeleteDepartmentRequest$inboundSchema: z.ZodType<
  DeleteDepartmentRequest,
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
export type DeleteDepartmentRequest$Outbound = {
  department_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteDepartmentRequest$outboundSchema: z.ZodType<
  DeleteDepartmentRequest$Outbound,
  z.ZodTypeDef,
  DeleteDepartmentRequest
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
export namespace DeleteDepartmentRequest$ {
  /** @deprecated use `DeleteDepartmentRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteDepartmentRequest$inboundSchema;
  /** @deprecated use `DeleteDepartmentRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteDepartmentRequest$outboundSchema;
  /** @deprecated use `DeleteDepartmentRequest$Outbound` instead. */
  export type Outbound = DeleteDepartmentRequest$Outbound;
}

export function deleteDepartmentRequestToJSON(
  deleteDepartmentRequest: DeleteDepartmentRequest,
): string {
  return JSON.stringify(
    DeleteDepartmentRequest$outboundSchema.parse(deleteDepartmentRequest),
  );
}

export function deleteDepartmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDepartmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDepartmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDepartmentRequest' from JSON`,
  );
}

/** @internal */
export const DeleteDepartmentResponse$inboundSchema: z.ZodType<
  DeleteDepartmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeleteDepartmentResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeleteDepartmentResponse$outboundSchema: z.ZodType<
  DeleteDepartmentResponse$Outbound,
  z.ZodTypeDef,
  DeleteDepartmentResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDepartmentResponse$ {
  /** @deprecated use `DeleteDepartmentResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteDepartmentResponse$inboundSchema;
  /** @deprecated use `DeleteDepartmentResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteDepartmentResponse$outboundSchema;
  /** @deprecated use `DeleteDepartmentResponse$Outbound` instead. */
  export type Outbound = DeleteDepartmentResponse$Outbound;
}

export function deleteDepartmentResponseToJSON(
  deleteDepartmentResponse: DeleteDepartmentResponse,
): string {
  return JSON.stringify(
    DeleteDepartmentResponse$outboundSchema.parse(deleteDepartmentResponse),
  );
}

export function deleteDepartmentResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDepartmentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDepartmentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDepartmentResponse' from JSON`,
  );
}
