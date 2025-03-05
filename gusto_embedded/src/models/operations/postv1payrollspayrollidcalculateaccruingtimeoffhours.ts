/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  AccruingTimeOffHour,
  AccruingTimeOffHour$inboundSchema,
  AccruingTimeOffHour$Outbound,
  AccruingTimeOffHour$outboundSchema,
} from "../components/accruingtimeoffhour.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody = {
  /**
   * regular hours worked in this pay period
   */
  regularHoursWorked?: number | undefined;
  /**
   * overtime hours worked in this pay period
   */
  overtimeHoursWorked?: number | undefined;
  /**
   * double overtime hours worked in this pay period
   */
  doubleOvertimeHoursWorked?: number | undefined;
  /**
   * paid time off hours used in this pay period
   */
  ptoHoursUsed?: number | undefined;
  /**
   * sick hours used in this pay period
   */
  sickHoursUsed?: number | undefined;
};

export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest = {
  /**
   * The UUID of the payroll
   */
  payrollId: string;
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody;
};

export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse = {
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
  accruingTimeOffHourObject?: Array<AccruingTimeOffHour> | undefined;
};

/** @internal */
export const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    regular_hours_worked: z.number().optional(),
    overtime_hours_worked: z.number().optional(),
    double_overtime_hours_worked: z.number().optional(),
    pto_hours_used: z.number().optional(),
    sick_hours_used: z.number().optional(),
  }).transform((v) => {
    return remap$(v, {
      "regular_hours_worked": "regularHoursWorked",
      "overtime_hours_worked": "overtimeHoursWorked",
      "double_overtime_hours_worked": "doubleOvertimeHoursWorked",
      "pto_hours_used": "ptoHoursUsed",
      "sick_hours_used": "sickHoursUsed",
    });
  });

/** @internal */
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound =
  {
    regular_hours_worked?: number | undefined;
    overtime_hours_worked?: number | undefined;
    double_overtime_hours_worked?: number | undefined;
    pto_hours_used?: number | undefined;
    sick_hours_used?: number | undefined;
  };

/** @internal */
export const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody
  > = z.object({
    regularHoursWorked: z.number().optional(),
    overtimeHoursWorked: z.number().optional(),
    doubleOvertimeHoursWorked: z.number().optional(),
    ptoHoursUsed: z.number().optional(),
    sickHoursUsed: z.number().optional(),
  }).transform((v) => {
    return remap$(v, {
      regularHoursWorked: "regular_hours_worked",
      overtimeHoursWorked: "overtime_hours_worked",
      doubleOvertimeHoursWorked: "double_overtime_hours_worked",
      ptoHoursUsed: "pto_hours_used",
      sickHoursUsed: "sick_hours_used",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$ {
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound;
}

export function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBodyToJSON(
  postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody:
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody,
): string {
  return JSON.stringify(
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema
      .parse(postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody),
  );
}

export function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$inboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    payroll_id: z.string(),
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "payroll_id": "payrollId",
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound =
  {
    payroll_id: string;
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody:
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound;
  };

/** @internal */
export const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound,
    z.ZodTypeDef,
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest
  > = z.object({
    payrollId: z.string(),
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      payrollId: "payroll_id",
      employeeId: "employee_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$ {
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$inboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound` instead. */
  export type Outbound =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound;
}

export function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestToJSON(
  postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest:
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
): string {
  return JSON.stringify(
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema
      .parse(postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest),
  );
}

export function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest' from JSON`,
  );
}

/** @internal */
export const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Accruing-Time-Off-Hour-Object": z.array(AccruingTimeOffHour$inboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Accruing-Time-Off-Hour-Object": "accruingTimeOffHourObject",
    });
  });

/** @internal */
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Accruing-Time-Off-Hour-Object"?:
      | Array<AccruingTimeOffHour$Outbound>
      | undefined;
  };

/** @internal */
export const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$outboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound,
    z.ZodTypeDef,
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    accruingTimeOffHourObject: z.array(AccruingTimeOffHour$outboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      accruingTimeOffHourObject: "Accruing-Time-Off-Hour-Object",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$ {
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$outboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound` instead. */
  export type Outbound =
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound;
}

export function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponseToJSON(
  postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse:
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
): string {
  return JSON.stringify(
    PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$outboundSchema
      .parse(postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse),
  );
}

export function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse' from JSON`,
  );
}
