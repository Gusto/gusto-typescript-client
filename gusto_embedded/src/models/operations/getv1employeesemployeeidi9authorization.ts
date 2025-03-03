/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1EmployeesEmployeeIdI9AuthorizationRequest = {
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
export const GetV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationRequest,
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
export type GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdI9AuthorizationRequest
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
export namespace GetV1EmployeesEmployeeIdI9AuthorizationRequest$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound` instead. */
  export type Outbound =
    GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound;
}

export function getV1EmployeesEmployeeIdI9AuthorizationRequestToJSON(
  getV1EmployeesEmployeeIdI9AuthorizationRequest:
    GetV1EmployeesEmployeeIdI9AuthorizationRequest,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema.parse(
      getV1EmployeesEmployeeIdI9AuthorizationRequest,
    ),
  );
}

export function getV1EmployeesEmployeeIdI9AuthorizationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1EmployeesEmployeeIdI9AuthorizationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1EmployeesEmployeeIdI9AuthorizationRequest' from JSON`,
  );
}
