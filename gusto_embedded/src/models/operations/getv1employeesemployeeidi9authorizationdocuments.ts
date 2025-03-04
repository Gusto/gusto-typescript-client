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

export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse = {
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
  i9AuthorizationDocumentsObject?:
    | Array<components.I9AuthorizationDocument>
    | undefined;
};

/** @internal */
export const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest,
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
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest
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

/** @internal */
export const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "I9-Authorization-Documents-Object": z.array(
      components.I9AuthorizationDocument$inboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "I9-Authorization-Documents-Object": "i9AuthorizationDocumentsObject",
    });
  });

/** @internal */
export type GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "I9-Authorization-Documents-Object"?:
      | Array<components.I9AuthorizationDocument$Outbound>
      | undefined;
  };

/** @internal */
export const GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema:
  z.ZodType<
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound,
    z.ZodTypeDef,
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    i9AuthorizationDocumentsObject: z.array(
      components.I9AuthorizationDocument$outboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      i9AuthorizationDocumentsObject: "I9-Authorization-Documents-Object",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$ {
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema;
  /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound` instead. */
  export type Outbound =
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound;
}

export function getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponseToJSON(
  getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse:
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse,
): string {
  return JSON.stringify(
    GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema
      .parse(getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse),
  );
}

export function getV1EmployeesEmployeeIdI9AuthorizationDocumentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse' from JSON`,
  );
}
