/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1EmployeesEmployeeIdRehireRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type GetV1EmployeesEmployeeIdRehireResponse = {
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
  /**
   * Example response
   */
  rehire?: components.Rehire | undefined;
};

/** @internal */
export const GetV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<
  GetV1EmployeesEmployeeIdRehireRequest,
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
export type GetV1EmployeesEmployeeIdRehireRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<
  GetV1EmployeesEmployeeIdRehireRequest$Outbound,
  z.ZodTypeDef,
  GetV1EmployeesEmployeeIdRehireRequest
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
export namespace GetV1EmployeesEmployeeIdRehireRequest$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdRehireRequest$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdRehireRequest$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
  export type Outbound = GetV1EmployeesEmployeeIdRehireRequest$Outbound;
}

export function getV1EmployeesEmployeeIdRehireRequestToJSON(
  getV1EmployeesEmployeeIdRehireRequest: GetV1EmployeesEmployeeIdRehireRequest,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdRehireRequest$outboundSchema.parse(
      getV1EmployeesEmployeeIdRehireRequest,
    ),
  );
}

export function getV1EmployeesEmployeeIdRehireRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1EmployeesEmployeeIdRehireRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdRehireRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1EmployeesEmployeeIdRehireRequest' from JSON`,
  );
}

/** @internal */
export const GetV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<
  GetV1EmployeesEmployeeIdRehireResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Rehire: components.Rehire$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Rehire": "rehire",
  });
});

/** @internal */
export type GetV1EmployeesEmployeeIdRehireResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Rehire?: components.Rehire$Outbound | undefined;
};

/** @internal */
export const GetV1EmployeesEmployeeIdRehireResponse$outboundSchema: z.ZodType<
  GetV1EmployeesEmployeeIdRehireResponse$Outbound,
  z.ZodTypeDef,
  GetV1EmployeesEmployeeIdRehireResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  rehire: components.Rehire$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    rehire: "Rehire",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1EmployeesEmployeeIdRehireResponse$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdRehireResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdRehireResponse$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdRehireResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdRehireResponse$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdRehireResponse$Outbound` instead. */
  export type Outbound = GetV1EmployeesEmployeeIdRehireResponse$Outbound;
}

export function getV1EmployeesEmployeeIdRehireResponseToJSON(
  getV1EmployeesEmployeeIdRehireResponse:
    GetV1EmployeesEmployeeIdRehireResponse,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdRehireResponse$outboundSchema.parse(
      getV1EmployeesEmployeeIdRehireResponse,
    ),
  );
}

export function getV1EmployeesEmployeeIdRehireResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1EmployeesEmployeeIdRehireResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdRehireResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1EmployeesEmployeeIdRehireResponse' from JSON`,
  );
}
