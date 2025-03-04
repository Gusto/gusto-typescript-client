/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1EmployeesEmployeeIdRehireRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const DeleteV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<
  DeleteV1EmployeesEmployeeIdRehireRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type DeleteV1EmployeesEmployeeIdRehireRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<
  DeleteV1EmployeesEmployeeIdRehireRequest$Outbound,
  z.ZodTypeDef,
  DeleteV1EmployeesEmployeeIdRehireRequest
> = z.object({
  employeeId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
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
export namespace DeleteV1EmployeesEmployeeIdRehireRequest$ {
  /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeesEmployeeIdRehireRequest$inboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
  export type Outbound = DeleteV1EmployeesEmployeeIdRehireRequest$Outbound;
}

export function deleteV1EmployeesEmployeeIdRehireRequestToJSON(
  deleteV1EmployeesEmployeeIdRehireRequest:
    DeleteV1EmployeesEmployeeIdRehireRequest,
): string {
  return JSON.stringify(
    DeleteV1EmployeesEmployeeIdRehireRequest$outboundSchema.parse(
      deleteV1EmployeesEmployeeIdRehireRequest,
    ),
  );
}

export function deleteV1EmployeesEmployeeIdRehireRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeesEmployeeIdRehireRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeesEmployeeIdRehireRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1EmployeesEmployeeIdRehireRequest' from JSON`,
  );
}
