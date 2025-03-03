/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1EmployeesEmployeeIdWorkAddressesRequest = {
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
export const GetV1EmployeesEmployeeIdWorkAddressesRequest$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdWorkAddressesRequest,
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
export type GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdWorkAddressesRequest
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
export namespace GetV1EmployeesEmployeeIdWorkAddressesRequest$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdWorkAddressesRequest$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound` instead. */
  export type Outbound = GetV1EmployeesEmployeeIdWorkAddressesRequest$Outbound;
}

export function getV1EmployeesEmployeeIdWorkAddressesRequestToJSON(
  getV1EmployeesEmployeeIdWorkAddressesRequest:
    GetV1EmployeesEmployeeIdWorkAddressesRequest,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema.parse(
      getV1EmployeesEmployeeIdWorkAddressesRequest,
    ),
  );
}

export function getV1EmployeesEmployeeIdWorkAddressesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1EmployeesEmployeeIdWorkAddressesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdWorkAddressesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1EmployeesEmployeeIdWorkAddressesRequest' from JSON`,
  );
}
