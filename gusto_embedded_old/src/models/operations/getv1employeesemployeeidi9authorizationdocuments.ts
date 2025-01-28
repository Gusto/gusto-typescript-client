/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest = {
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
export const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
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
export namespace GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound` instead. */
  export type Outbound =
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound;
}

export function getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestToJSON(
  getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest:
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema
      .parse(getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest),
  );
}

export function getV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest' from JSON`,
  );
}
