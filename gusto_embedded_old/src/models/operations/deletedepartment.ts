/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteDepartmentRequest = {
  /**
   * The UUID of the department
   */
  departmentUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const DeleteDepartmentRequest$inboundSchema: z.ZodType<
  DeleteDepartmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  department_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "department_uuid": "departmentUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type DeleteDepartmentRequest$Outbound = {
  department_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const DeleteDepartmentRequest$outboundSchema: z.ZodType<
  DeleteDepartmentRequest$Outbound,
  z.ZodTypeDef,
  DeleteDepartmentRequest
> = z.object({
  departmentUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
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
