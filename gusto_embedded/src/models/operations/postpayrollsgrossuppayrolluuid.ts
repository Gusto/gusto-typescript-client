/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostPayrollsGrossUpPayrollUuidRequestBody = {
  /**
   * Employee UUID
   */
  employeeUuid: string;
  /**
   * Employee net earnings
   */
  netPay: string;
};

export type PostPayrollsGrossUpPayrollUuidRequest = {
  /**
   * The UUID of the payroll
   */
  payrollUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostPayrollsGrossUpPayrollUuidRequestBody;
};

/** @internal */
export const PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema: z.ZodType<
  PostPayrollsGrossUpPayrollUuidRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string(),
  net_pay: z.string(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "net_pay": "netPay",
  });
});

/** @internal */
export type PostPayrollsGrossUpPayrollUuidRequestBody$Outbound = {
  employee_uuid: string;
  net_pay: string;
};

/** @internal */
export const PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema:
  z.ZodType<
    PostPayrollsGrossUpPayrollUuidRequestBody$Outbound,
    z.ZodTypeDef,
    PostPayrollsGrossUpPayrollUuidRequestBody
  > = z.object({
    employeeUuid: z.string(),
    netPay: z.string(),
  }).transform((v) => {
    return remap$(v, {
      employeeUuid: "employee_uuid",
      netPay: "net_pay",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPayrollsGrossUpPayrollUuidRequestBody$ {
  /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema;
  /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema;
  /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequestBody$Outbound` instead. */
  export type Outbound = PostPayrollsGrossUpPayrollUuidRequestBody$Outbound;
}

export function postPayrollsGrossUpPayrollUuidRequestBodyToJSON(
  postPayrollsGrossUpPayrollUuidRequestBody:
    PostPayrollsGrossUpPayrollUuidRequestBody,
): string {
  return JSON.stringify(
    PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema.parse(
      postPayrollsGrossUpPayrollUuidRequestBody,
    ),
  );
}

export function postPayrollsGrossUpPayrollUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostPayrollsGrossUpPayrollUuidRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostPayrollsGrossUpPayrollUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const PostPayrollsGrossUpPayrollUuidRequest$inboundSchema: z.ZodType<
  PostPayrollsGrossUpPayrollUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  payroll_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() =>
    PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "payroll_uuid": "payrollUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostPayrollsGrossUpPayrollUuidRequest$Outbound = {
  payroll_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostPayrollsGrossUpPayrollUuidRequestBody$Outbound;
};

/** @internal */
export const PostPayrollsGrossUpPayrollUuidRequest$outboundSchema: z.ZodType<
  PostPayrollsGrossUpPayrollUuidRequest$Outbound,
  z.ZodTypeDef,
  PostPayrollsGrossUpPayrollUuidRequest
> = z.object({
  payrollUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() =>
    PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    payrollUuid: "payroll_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPayrollsGrossUpPayrollUuidRequest$ {
  /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostPayrollsGrossUpPayrollUuidRequest$inboundSchema;
  /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostPayrollsGrossUpPayrollUuidRequest$outboundSchema;
  /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequest$Outbound` instead. */
  export type Outbound = PostPayrollsGrossUpPayrollUuidRequest$Outbound;
}

export function postPayrollsGrossUpPayrollUuidRequestToJSON(
  postPayrollsGrossUpPayrollUuidRequest: PostPayrollsGrossUpPayrollUuidRequest,
): string {
  return JSON.stringify(
    PostPayrollsGrossUpPayrollUuidRequest$outboundSchema.parse(
      postPayrollsGrossUpPayrollUuidRequest,
    ),
  );
}

export function postPayrollsGrossUpPayrollUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostPayrollsGrossUpPayrollUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostPayrollsGrossUpPayrollUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostPayrollsGrossUpPayrollUuidRequest' from JSON`,
  );
}
