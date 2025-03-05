/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeAddress,
  EmployeeAddress$inboundSchema,
  EmployeeAddress$Outbound,
  EmployeeAddress$outboundSchema,
} from "../components/employeeaddress.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1EmployeesEmployeeIdHomeAddressesRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1EmployeesEmployeeIdHomeAddressesResponse = {
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
   * List of employee addresses
   */
  employeeAddressList?: Array<EmployeeAddress> | undefined;
};

/** @internal */
export const GetV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdHomeAddressesRequest,
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
export type GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdHomeAddressesRequest
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
export namespace GetV1EmployeesEmployeeIdHomeAddressesRequest$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound` instead. */
  export type Outbound = GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound;
}

export function getV1EmployeesEmployeeIdHomeAddressesRequestToJSON(
  getV1EmployeesEmployeeIdHomeAddressesRequest:
    GetV1EmployeesEmployeeIdHomeAddressesRequest,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema.parse(
      getV1EmployeesEmployeeIdHomeAddressesRequest,
    ),
  );
}

export function getV1EmployeesEmployeeIdHomeAddressesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1EmployeesEmployeeIdHomeAddressesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1EmployeesEmployeeIdHomeAddressesRequest' from JSON`,
  );
}

/** @internal */
export const GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdHomeAddressesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Employee-Address-List": z.array(EmployeeAddress$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Employee-Address-List": "employeeAddressList",
    });
  });

/** @internal */
export type GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Employee-Address-List"?: Array<EmployeeAddress$Outbound> | undefined;
};

/** @internal */
export const GetV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdHomeAddressesResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    employeeAddressList: z.array(EmployeeAddress$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      employeeAddressList: "Employee-Address-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1EmployeesEmployeeIdHomeAddressesResponse$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound` instead. */
  export type Outbound = GetV1EmployeesEmployeeIdHomeAddressesResponse$Outbound;
}

export function getV1EmployeesEmployeeIdHomeAddressesResponseToJSON(
  getV1EmployeesEmployeeIdHomeAddressesResponse:
    GetV1EmployeesEmployeeIdHomeAddressesResponse,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema.parse(
      getV1EmployeesEmployeeIdHomeAddressesResponse,
    ),
  );
}

export function getV1EmployeesEmployeeIdHomeAddressesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1EmployeesEmployeeIdHomeAddressesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1EmployeesEmployeeIdHomeAddressesResponse' from JSON`,
  );
}
