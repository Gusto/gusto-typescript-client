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
export const PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod = {
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
export type PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod = ClosedEnum<
  typeof PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod
>;

/**
 * Requires a policy name, a policy_type, and an accrual_method
 */
export type PostCompaniesCompanyUuidTimeOffPoliciesRequestBody = {
  /**
   * Name of the time off policy
   */
  name: string;
  /**
   * Type of the time off policy. Currently only "vacation" and "sick" are supported
   */
  policyType: string;
  /**
   * Accrual method of the time off policy
   */
  accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod;
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

export type PostCompaniesCompanyUuidTimeOffPoliciesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  /**
   * Requires a policy name, a policy_type, and an accrual_method
   */
  requestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody;
};

/** @internal */
export const PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema:
  z.ZodNativeEnum<typeof PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod> =
    z.nativeEnum(PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod);

/** @internal */
export const PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$outboundSchema:
  z.ZodNativeEnum<typeof PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod> =
    PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$ {
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$outboundSchema;
}

/** @internal */
export const PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    policy_type: z.string(),
    accrual_method:
      PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema,
    accrual_rate: z.string().optional(),
    accrual_rate_unit: z.string().optional(),
    paid_out_on_termination: z.boolean().optional(),
    accrual_waiting_period_days: z.number().int().optional(),
    carryover_limit_hours: z.string().optional(),
    max_accrual_hours_per_year: z.string().optional(),
    max_hours: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "policy_type": "policyType",
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
export type PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound = {
  name: string;
  policy_type: string;
  accrual_method: string;
  accrual_rate?: string | undefined;
  accrual_rate_unit?: string | undefined;
  paid_out_on_termination?: boolean | undefined;
  accrual_waiting_period_days?: number | undefined;
  carryover_limit_hours?: string | undefined;
  max_accrual_hours_per_year?: string | undefined;
  max_hours?: string | undefined;
};

/** @internal */
export const PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound,
    z.ZodTypeDef,
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody
  > = z.object({
    name: z.string(),
    policyType: z.string(),
    accrualMethod:
      PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$outboundSchema,
    accrualRate: z.string().optional(),
    accrualRateUnit: z.string().optional(),
    paidOutOnTermination: z.boolean().optional(),
    accrualWaitingPeriodDays: z.number().int().optional(),
    carryoverLimitHours: z.string().optional(),
    maxAccrualHoursPerYear: z.string().optional(),
    maxHours: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      policyType: "policy_type",
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
export namespace PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$ {
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound` instead. */
  export type Outbound =
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound;
}

export function postCompaniesCompanyUuidTimeOffPoliciesRequestBodyToJSON(
  postCompaniesCompanyUuidTimeOffPoliciesRequestBody:
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema.parse(
      postCompaniesCompanyUuidTimeOffPoliciesRequestBody,
    ),
  );
}

export function postCompaniesCompanyUuidTimeOffPoliciesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostCompaniesCompanyUuidTimeOffPoliciesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostCompaniesCompanyUuidTimeOffPoliciesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidTimeOffPoliciesRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
    RequestBody: z.lazy(() =>
      PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound;
};

/** @internal */
export const PostCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema:
  z.ZodType<
    PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound,
    z.ZodTypeDef,
    PostCompaniesCompanyUuidTimeOffPoliciesRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
    requestBody: z.lazy(() =>
      PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostCompaniesCompanyUuidTimeOffPoliciesRequest$ {
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema;
  /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound` instead. */
  export type Outbound =
    PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound;
}

export function postCompaniesCompanyUuidTimeOffPoliciesRequestToJSON(
  postCompaniesCompanyUuidTimeOffPoliciesRequest:
    PostCompaniesCompanyUuidTimeOffPoliciesRequest,
): string {
  return JSON.stringify(
    PostCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema.parse(
      postCompaniesCompanyUuidTimeOffPoliciesRequest,
    ),
  );
}

export function postCompaniesCompanyUuidTimeOffPoliciesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostCompaniesCompanyUuidTimeOffPoliciesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostCompaniesCompanyUuidTimeOffPoliciesRequest' from JSON`,
  );
}
