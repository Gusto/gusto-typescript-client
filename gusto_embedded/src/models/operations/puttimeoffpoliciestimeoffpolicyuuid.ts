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

/**
 * Accrual method of the time off policy
 */
export const AccrualMethod = {
  Unlimited: "unlimited",
  PerPayPeriod: "per_pay_period",
  PerCalendarYear: "per_calendar_year",
  PerAnniversaryYear: "per_anniversary_year",
  PerHourWorked: "per_hour_worked",
  PerHourWorkedNoOvertime: "per_hour_worked_no_overtime",
  PerHourPaid: "per_hour_paid",
  PerHourPaidNoOvertime: "per_hour_paid_no_overtime",
} as const;
/**
 * Accrual method of the time off policy
 */
export type AccrualMethod = ClosedEnum<typeof AccrualMethod>;

/**
 * Can update any attributes of the time off policy except policy_type, is_active, complete & employees
 */
export type PutTimeOffPoliciesTimeOffPolicyUuidRequestBody = {
  /**
   * Name of the time off policy
   */
  name?: string | undefined;
  /**
   * Accrual method of the time off policy
   */
  accrualMethod?: AccrualMethod | undefined;
  /**
   * The rate at which the time off hours will accrue for an employee on the policy. Represented as a float, e.g. "40.0".
   */
  accrualRate?: string | undefined;
  /**
   * The number of hours an employee has to work or be paid for to accrue the number of hours set in the accrual rate. Only used for hourly policies (per_hour_paid, per_hour_paid_no_overtime, per_hour_work, per_hour_worked_no_overtime). Represented as a float, e.g. "40.0".
   */
  accrualRateUnit?: string | undefined;
  /**
   * Boolean representing if an employee's accrued time off hours will be paid out on termination
   */
  paidOutOnTermination?: boolean | undefined;
  /**
   * Number of days before an employee on the policy will begin accruing time off hours. If accrual_method is per_anniversary_year, per_calendar_year, or unlimited, then accrual_waiting_period_days should be 0.
   */
  accrualWaitingPeriodDays?: number | undefined;
  /**
   * The max number of hours an employee can carryover from one year to the next. If accrual_method is unlimited, then carryover_limit_hours must be blank.
   */
  carryoverLimitHours?: string | undefined;
  /**
   * The max number of hours an employee can accrue in a year. If accrual_method is unlimited, then max_accrual_hours_per_year must be blank.
   */
  maxAccrualHoursPerYear?: string | undefined;
  /**
   * The max number of hours an employee can accrue. If accrual_method is unlimited, then max_hours must be blank.
   */
  maxHours?: string | undefined;
};

export type PutTimeOffPoliciesTimeOffPolicyUuidRequest = {
  /**
   * The UUID of the company time off policy
   */
  timeOffPolicyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  /**
   * Can update any attributes of the time off policy except policy_type, is_active, complete & employees
   */
  requestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody;
};

export type PutTimeOffPoliciesTimeOffPolicyUuidResponse = {
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
   * OK
   */
  timeOffPolicy?: components.TimeOffPolicy | undefined;
};

/** @internal */
export const AccrualMethod$inboundSchema: z.ZodNativeEnum<
  typeof AccrualMethod
> = z.nativeEnum(AccrualMethod);

/** @internal */
export const AccrualMethod$outboundSchema: z.ZodNativeEnum<
  typeof AccrualMethod
> = AccrualMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccrualMethod$ {
  /** @deprecated use `AccrualMethod$inboundSchema` instead. */
  export const inboundSchema = AccrualMethod$inboundSchema;
  /** @deprecated use `AccrualMethod$outboundSchema` instead. */
  export const outboundSchema = AccrualMethod$outboundSchema;
}

/** @internal */
export const PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema:
  z.ZodType<
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string().optional(),
    accrual_method: AccrualMethod$inboundSchema.optional(),
    accrual_rate: z.string().optional(),
    accrual_rate_unit: z.string().optional(),
    paid_out_on_termination: z.boolean().optional(),
    accrual_waiting_period_days: z.number().int().optional(),
    carryover_limit_hours: z.string().optional(),
    max_accrual_hours_per_year: z.string().optional(),
    max_hours: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "accrual_method": "accrualMethod",
      "accrual_rate": "accrualRate",
      "accrual_rate_unit": "accrualRateUnit",
      "paid_out_on_termination": "paidOutOnTermination",
      "accrual_waiting_period_days": "accrualWaitingPeriodDays",
      "carryover_limit_hours": "carryoverLimitHours",
      "max_accrual_hours_per_year": "maxAccrualHoursPerYear",
      "max_hours": "maxHours",
    });
  });

/** @internal */
export type PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound = {
  name?: string | undefined;
  accrual_method?: string | undefined;
  accrual_rate?: string | undefined;
  accrual_rate_unit?: string | undefined;
  paid_out_on_termination?: boolean | undefined;
  accrual_waiting_period_days?: number | undefined;
  carryover_limit_hours?: string | undefined;
  max_accrual_hours_per_year?: string | undefined;
  max_hours?: string | undefined;
};

/** @internal */
export const PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema:
  z.ZodType<
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound,
    z.ZodTypeDef,
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody
  > = z.object({
    name: z.string().optional(),
    accrualMethod: AccrualMethod$outboundSchema.optional(),
    accrualRate: z.string().optional(),
    accrualRateUnit: z.string().optional(),
    paidOutOnTermination: z.boolean().optional(),
    accrualWaitingPeriodDays: z.number().int().optional(),
    carryoverLimitHours: z.string().optional(),
    maxAccrualHoursPerYear: z.string().optional(),
    maxHours: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      accrualMethod: "accrual_method",
      accrualRate: "accrual_rate",
      accrualRateUnit: "accrual_rate_unit",
      paidOutOnTermination: "paid_out_on_termination",
      accrualWaitingPeriodDays: "accrual_waiting_period_days",
      carryoverLimitHours: "carryover_limit_hours",
      maxAccrualHoursPerYear: "max_accrual_hours_per_year",
      maxHours: "max_hours",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$ {
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema;
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema;
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound` instead. */
  export type Outbound =
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound;
}

export function putTimeOffPoliciesTimeOffPolicyUuidRequestBodyToJSON(
  putTimeOffPoliciesTimeOffPolicyUuidRequestBody:
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody,
): string {
  return JSON.stringify(
    PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema.parse(
      putTimeOffPoliciesTimeOffPolicyUuidRequestBody,
    ),
  );
}

export function putTimeOffPoliciesTimeOffPolicyUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutTimeOffPoliciesTimeOffPolicyUuidRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutTimeOffPoliciesTimeOffPolicyUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const PutTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema:
  z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequest, z.ZodTypeDef, unknown> =
    z.object({
      time_off_policy_uuid: z.string(),
      "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
        "2024-04-01",
      ),
      RequestBody: z.lazy(() =>
        PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema
      ),
    }).transform((v) => {
      return remap$(v, {
        "time_off_policy_uuid": "timeOffPolicyUuid",
        "X-Gusto-API-Version": "xGustoAPIVersion",
        "RequestBody": "requestBody",
      });
    });

/** @internal */
export type PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound = {
  time_off_policy_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound;
};

/** @internal */
export const PutTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema:
  z.ZodType<
    PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound,
    z.ZodTypeDef,
    PutTimeOffPoliciesTimeOffPolicyUuidRequest
  > = z.object({
    timeOffPolicyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
    requestBody: z.lazy(() =>
      PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      timeOffPolicyUuid: "time_off_policy_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutTimeOffPoliciesTimeOffPolicyUuidRequest$ {
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema;
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema;
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound` instead. */
  export type Outbound = PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound;
}

export function putTimeOffPoliciesTimeOffPolicyUuidRequestToJSON(
  putTimeOffPoliciesTimeOffPolicyUuidRequest:
    PutTimeOffPoliciesTimeOffPolicyUuidRequest,
): string {
  return JSON.stringify(
    PutTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema.parse(
      putTimeOffPoliciesTimeOffPolicyUuidRequest,
    ),
  );
}

export function putTimeOffPoliciesTimeOffPolicyUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutTimeOffPoliciesTimeOffPolicyUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutTimeOffPoliciesTimeOffPolicyUuidRequest' from JSON`,
  );
}

/** @internal */
export const PutTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema:
  z.ZodType<
    PutTimeOffPoliciesTimeOffPolicyUuidResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Time-Off-Policy": components.TimeOffPolicy$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Time-Off-Policy": "timeOffPolicy",
    });
  });

/** @internal */
export type PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};

/** @internal */
export const PutTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema:
  z.ZodType<
    PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound,
    z.ZodTypeDef,
    PutTimeOffPoliciesTimeOffPolicyUuidResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    timeOffPolicy: components.TimeOffPolicy$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      timeOffPolicy: "Time-Off-Policy",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutTimeOffPoliciesTimeOffPolicyUuidResponse$ {
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema;
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema;
  /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound` instead. */
  export type Outbound = PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound;
}

export function putTimeOffPoliciesTimeOffPolicyUuidResponseToJSON(
  putTimeOffPoliciesTimeOffPolicyUuidResponse:
    PutTimeOffPoliciesTimeOffPolicyUuidResponse,
): string {
  return JSON.stringify(
    PutTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema.parse(
      putTimeOffPoliciesTimeOffPolicyUuidResponse,
    ),
  );
}

export function putTimeOffPoliciesTimeOffPolicyUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutTimeOffPoliciesTimeOffPolicyUuidResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutTimeOffPoliciesTimeOffPolicyUuidResponse' from JSON`,
  );
}
