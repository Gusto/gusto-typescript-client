/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Update an employee.
 */
export type PutV1EmployeesRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  firstName?: string | undefined;
  middleInitial?: string | undefined;
  lastName?: string | undefined;
  preferredFirstName?: string | undefined;
  dateOfBirth?: string | undefined;
  /**
   * The employee's personal email address.
   */
  email?: string | undefined;
  ssn?: string | undefined;
  /**
   * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
   */
  twoPercentShareholder?: boolean | undefined;
};

export type PutV1EmployeesRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  /**
   * Update an employee.
   */
  requestBody: PutV1EmployeesRequestBody;
};

/** @internal */
export const PutV1EmployeesRequestBody$inboundSchema: z.ZodType<
  PutV1EmployeesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
  first_name: z.string().optional(),
  middle_initial: z.string().optional(),
  last_name: z.string().optional(),
  preferred_first_name: z.string().optional(),
  date_of_birth: z.string().optional(),
  email: z.string().optional(),
  ssn: z.string().optional(),
  two_percent_shareholder: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "middle_initial": "middleInitial",
    "last_name": "lastName",
    "preferred_first_name": "preferredFirstName",
    "date_of_birth": "dateOfBirth",
    "two_percent_shareholder": "twoPercentShareholder",
  });
});

/** @internal */
export type PutV1EmployeesRequestBody$Outbound = {
  version: string;
  first_name?: string | undefined;
  middle_initial?: string | undefined;
  last_name?: string | undefined;
  preferred_first_name?: string | undefined;
  date_of_birth?: string | undefined;
  email?: string | undefined;
  ssn?: string | undefined;
  two_percent_shareholder?: boolean | undefined;
};

/** @internal */
export const PutV1EmployeesRequestBody$outboundSchema: z.ZodType<
  PutV1EmployeesRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1EmployeesRequestBody
> = z.object({
  version: z.string(),
  firstName: z.string().optional(),
  middleInitial: z.string().optional(),
  lastName: z.string().optional(),
  preferredFirstName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().optional(),
  ssn: z.string().optional(),
  twoPercentShareholder: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    middleInitial: "middle_initial",
    lastName: "last_name",
    preferredFirstName: "preferred_first_name",
    dateOfBirth: "date_of_birth",
    twoPercentShareholder: "two_percent_shareholder",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesRequestBody$ {
  /** @deprecated use `PutV1EmployeesRequestBody$inboundSchema` instead. */
  export const inboundSchema = PutV1EmployeesRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesRequestBody$outboundSchema` instead. */
  export const outboundSchema = PutV1EmployeesRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesRequestBody$Outbound` instead. */
  export type Outbound = PutV1EmployeesRequestBody$Outbound;
}

export function putV1EmployeesRequestBodyToJSON(
  putV1EmployeesRequestBody: PutV1EmployeesRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesRequestBody$outboundSchema.parse(putV1EmployeesRequestBody),
  );
}

export function putV1EmployeesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1EmployeesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1EmployeesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1EmployeesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesRequest$inboundSchema: z.ZodType<
  PutV1EmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() => PutV1EmployeesRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1EmployeesRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PutV1EmployeesRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesRequest$outboundSchema: z.ZodType<
  PutV1EmployeesRequest$Outbound,
  z.ZodTypeDef,
  PutV1EmployeesRequest
> = z.object({
  employeeId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() => PutV1EmployeesRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesRequest$ {
  /** @deprecated use `PutV1EmployeesRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1EmployeesRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesRequest$outboundSchema` instead. */
  export const outboundSchema = PutV1EmployeesRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeesRequest$Outbound;
}

export function putV1EmployeesRequestToJSON(
  putV1EmployeesRequest: PutV1EmployeesRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesRequest$outboundSchema.parse(putV1EmployeesRequest),
  );
}

export function putV1EmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1EmployeesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1EmployeesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1EmployeesRequest' from JSON`,
  );
}
