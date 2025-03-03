/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const QueryParamInclude = {
  AllCompensations: "all_compensations",
  CustomFields: "custom_fields",
} as const;
export type QueryParamInclude = ClosedEnum<typeof QueryParamInclude>;

export type GetV1EmployeesRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:
   *
   * @remarks
   * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
   * - custom_fields: Include employees' custom fields
   */
  include?: Array<QueryParamInclude> | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const QueryParamInclude$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamInclude
> = z.nativeEnum(QueryParamInclude);

/** @internal */
export const QueryParamInclude$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamInclude
> = QueryParamInclude$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamInclude$ {
  /** @deprecated use `QueryParamInclude$inboundSchema` instead. */
  export const inboundSchema = QueryParamInclude$inboundSchema;
  /** @deprecated use `QueryParamInclude$outboundSchema` instead. */
  export const outboundSchema = QueryParamInclude$outboundSchema;
}

/** @internal */
export const GetV1EmployeesRequest$inboundSchema: z.ZodType<
  GetV1EmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  include: z.array(QueryParamInclude$inboundSchema).optional(),
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
export type GetV1EmployeesRequest$Outbound = {
  employee_id: string;
  include?: Array<string> | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1EmployeesRequest$outboundSchema: z.ZodType<
  GetV1EmployeesRequest$Outbound,
  z.ZodTypeDef,
  GetV1EmployeesRequest
> = z.object({
  employeeId: z.string(),
  include: z.array(QueryParamInclude$outboundSchema).optional(),
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
export namespace GetV1EmployeesRequest$ {
  /** @deprecated use `GetV1EmployeesRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1EmployeesRequest$inboundSchema;
  /** @deprecated use `GetV1EmployeesRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1EmployeesRequest$outboundSchema;
  /** @deprecated use `GetV1EmployeesRequest$Outbound` instead. */
  export type Outbound = GetV1EmployeesRequest$Outbound;
}

export function getV1EmployeesRequestToJSON(
  getV1EmployeesRequest: GetV1EmployeesRequest,
): string {
  return JSON.stringify(
    GetV1EmployeesRequest$outboundSchema.parse(getV1EmployeesRequest),
  );
}

export function getV1EmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1EmployeesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1EmployeesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1EmployeesRequest' from JSON`,
  );
}
