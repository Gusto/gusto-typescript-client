/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import {
  EmployeeAddress,
  EmployeeAddress$inboundSchema,
  EmployeeAddress$Outbound,
  EmployeeAddress$outboundSchema,
} from "../components/employeeaddress.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1EmployeesEmployeeIdHomeAddressesRequestBody = {
  street1?: string | undefined;
  street2?: string | null | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  effectiveDate?: RFCDate | undefined;
  courtesyWithholding?: boolean | undefined;
};

export type PostV1EmployeesEmployeeIdHomeAddressesRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PostV1EmployeesEmployeeIdHomeAddressesRequestBody;
};

export type PostV1EmployeesEmployeeIdHomeAddressesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  employeeAddress?: EmployeeAddress | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    street_1: z.string().optional(),
    street_2: z.nullable(z.string()).optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    effective_date: z.string().transform(v => new RFCDate(v)).optional(),
    courtesy_withholding: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "street_1": "street1",
      "street_2": "street2",
      "effective_date": "effectiveDate",
      "courtesy_withholding": "courtesyWithholding",
    });
  });

/** @internal */
export type PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound = {
  street_1?: string | undefined;
  street_2?: string | null | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  effective_date?: string | undefined;
  courtesy_withholding?: boolean | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody
  > = z.object({
    street1: z.string().optional(),
    street2: z.nullable(z.string()).optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    effectiveDate: z.instanceof(RFCDate).transform(v => v.toString())
      .optional(),
    courtesyWithholding: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      street1: "street_1",
      street2: "street_2",
      effectiveDate: "effective_date",
      courtesyWithholding: "courtesy_withholding",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesEmployeeIdHomeAddressesRequestBody$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound;
}

export function postV1EmployeesEmployeeIdHomeAddressesRequestBodyToJSON(
  postV1EmployeesEmployeeIdHomeAddressesRequestBody:
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema.parse(
      postV1EmployeesEmployeeIdHomeAddressesRequestBody,
    ),
  );
}

export function postV1EmployeesEmployeeIdHomeAddressesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdHomeAddressesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdHomeAddressesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdHomeAddressesRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostV1EmployeesEmployeeIdHomeAddressesRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1EmployeesEmployeeIdHomeAddressesRequestBody$Outbound;
};

/** @internal */
export const PostV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound,
    z.ZodTypeDef,
    PostV1EmployeesEmployeeIdHomeAddressesRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostV1EmployeesEmployeeIdHomeAddressesRequestBody$outboundSchema
    ),
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
export namespace PostV1EmployeesEmployeeIdHomeAddressesRequest$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound` instead. */
  export type Outbound = PostV1EmployeesEmployeeIdHomeAddressesRequest$Outbound;
}

export function postV1EmployeesEmployeeIdHomeAddressesRequestToJSON(
  postV1EmployeesEmployeeIdHomeAddressesRequest:
    PostV1EmployeesEmployeeIdHomeAddressesRequest,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema.parse(
      postV1EmployeesEmployeeIdHomeAddressesRequest,
    ),
  );
}

export function postV1EmployeesEmployeeIdHomeAddressesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdHomeAddressesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdHomeAddressesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdHomeAddressesRequest' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdHomeAddressesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Employee-Address": EmployeeAddress$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Employee-Address": "employeeAddress",
    });
  });

/** @internal */
export type PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Employee-Address"?: EmployeeAddress$Outbound | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound,
    z.ZodTypeDef,
    PostV1EmployeesEmployeeIdHomeAddressesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    employeeAddress: EmployeeAddress$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      employeeAddress: "Employee-Address",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesEmployeeIdHomeAddressesResponse$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound` instead. */
  export type Outbound =
    PostV1EmployeesEmployeeIdHomeAddressesResponse$Outbound;
}

export function postV1EmployeesEmployeeIdHomeAddressesResponseToJSON(
  postV1EmployeesEmployeeIdHomeAddressesResponse:
    PostV1EmployeesEmployeeIdHomeAddressesResponse,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdHomeAddressesResponse$outboundSchema.parse(
      postV1EmployeesEmployeeIdHomeAddressesResponse,
    ),
  );
}

export function postV1EmployeesEmployeeIdHomeAddressesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdHomeAddressesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdHomeAddressesResponse' from JSON`,
  );
}
