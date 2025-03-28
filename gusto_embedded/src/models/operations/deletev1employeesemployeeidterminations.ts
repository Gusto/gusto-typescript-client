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

export type DeleteV1EmployeesEmployeeIdTerminationsRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type DeleteV1EmployeesEmployeeIdTerminationsResponse = {
  httpMeta: HTTPMetadata;
};

/** @internal */
export const DeleteV1EmployeesEmployeeIdTerminationsRequest$inboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdTerminationsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1EmployeesEmployeeIdTerminationsRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1EmployeesEmployeeIdTerminationsRequest$ {
  /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeesEmployeeIdTerminationsRequest$inboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1EmployeesEmployeeIdTerminationsRequest$Outbound;
}

export function deleteV1EmployeesEmployeeIdTerminationsRequestToJSON(
  deleteV1EmployeesEmployeeIdTerminationsRequest:
    DeleteV1EmployeesEmployeeIdTerminationsRequest,
): string {
  return JSON.stringify(
    DeleteV1EmployeesEmployeeIdTerminationsRequest$outboundSchema.parse(
      deleteV1EmployeesEmployeeIdTerminationsRequest,
    ),
  );
}

export function deleteV1EmployeesEmployeeIdTerminationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeesEmployeeIdTerminationsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeesEmployeeIdTerminationsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1EmployeesEmployeeIdTerminationsRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdTerminationsResponse,
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
export type DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
};

/** @internal */
export const DeleteV1EmployeesEmployeeIdTerminationsResponse$outboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound,
    z.ZodTypeDef,
    DeleteV1EmployeesEmployeeIdTerminationsResponse
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
export namespace DeleteV1EmployeesEmployeeIdTerminationsResponse$ {
  /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeesEmployeeIdTerminationsResponse$outboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound` instead. */
  export type Outbound =
    DeleteV1EmployeesEmployeeIdTerminationsResponse$Outbound;
}

export function deleteV1EmployeesEmployeeIdTerminationsResponseToJSON(
  deleteV1EmployeesEmployeeIdTerminationsResponse:
    DeleteV1EmployeesEmployeeIdTerminationsResponse,
): string {
  return JSON.stringify(
    DeleteV1EmployeesEmployeeIdTerminationsResponse$outboundSchema.parse(
      deleteV1EmployeesEmployeeIdTerminationsResponse,
    ),
  );
}

export function deleteV1EmployeesEmployeeIdTerminationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeesEmployeeIdTerminationsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeesEmployeeIdTerminationsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1EmployeesEmployeeIdTerminationsResponse' from JSON`,
  );
}
