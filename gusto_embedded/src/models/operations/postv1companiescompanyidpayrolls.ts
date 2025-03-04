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
 * An off cycle payroll reason. Select one from the following list.
 */
export const OffCycleReason = {
  Bonus: "Bonus",
  Correction: "Correction",
  DismissedEmployee: "Dismissed employee",
  TransitionFromOldPaySchedule: "Transition from old pay schedule",
} as const;
/**
 * An off cycle payroll reason. Select one from the following list.
 */
export type OffCycleReason = ClosedEnum<typeof OffCycleReason>;

/**
 * The payment schedule tax rate the payroll is based on.
 */
export const WithholdingPayPeriod = {
  EveryWeek: "Every week",
  EveryOtherWeek: "Every other week",
  TwicePerMonth: "Twice per month",
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  Semiannually: "Semiannually",
  Annually: "Annually",
} as const;
/**
 * The payment schedule tax rate the payroll is based on.
 */
export type WithholdingPayPeriod = ClosedEnum<typeof WithholdingPayPeriod>;

export type PostV1CompaniesCompanyIdPayrollsRequestBody = {
  /**
   * Whether it is an off cycle payroll.
   */
  offCycle: boolean;
  /**
   * An off cycle payroll reason. Select one from the following list.
   */
  offCycleReason: OffCycleReason;
  /**
   * Pay period start date.
   */
  startDate: string;
  /**
   * Pay period end date.
   */
  endDate: string;
  /**
   * A pay schedule is required for transition from old pay schedule payroll to identify the matching transition pay period.
   */
  payScheduleUuid?: string | undefined;
  /**
   * A list of employee uuids to include on the payroll.
   */
  employeeUuids?: Array<string> | undefined;
  /**
   * Payment date.
   */
  checkDate?: string | undefined;
  /**
   * The payment schedule tax rate the payroll is based on.
   */
  withholdingPayPeriod?: WithholdingPayPeriod | undefined;
  /**
   * Block regular deductions and contributions for this payroll.
   */
  skipRegularDeductions?: boolean | undefined;
  /**
   * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages.
   */
  fixedWithholdingRate?: boolean | undefined;
};

export type PostV1CompaniesCompanyIdPayrollsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1CompaniesCompanyIdPayrollsRequestBody;
};

/** @internal */
export const OffCycleReason$inboundSchema: z.ZodNativeEnum<
  typeof OffCycleReason
> = z.nativeEnum(OffCycleReason);

/** @internal */
export const OffCycleReason$outboundSchema: z.ZodNativeEnum<
  typeof OffCycleReason
> = OffCycleReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OffCycleReason$ {
  /** @deprecated use `OffCycleReason$inboundSchema` instead. */
  export const inboundSchema = OffCycleReason$inboundSchema;
  /** @deprecated use `OffCycleReason$outboundSchema` instead. */
  export const outboundSchema = OffCycleReason$outboundSchema;
}

/** @internal */
export const WithholdingPayPeriod$inboundSchema: z.ZodNativeEnum<
  typeof WithholdingPayPeriod
> = z.nativeEnum(WithholdingPayPeriod);

/** @internal */
export const WithholdingPayPeriod$outboundSchema: z.ZodNativeEnum<
  typeof WithholdingPayPeriod
> = WithholdingPayPeriod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WithholdingPayPeriod$ {
  /** @deprecated use `WithholdingPayPeriod$inboundSchema` instead. */
  export const inboundSchema = WithholdingPayPeriod$inboundSchema;
  /** @deprecated use `WithholdingPayPeriod$outboundSchema` instead. */
  export const outboundSchema = WithholdingPayPeriod$outboundSchema;
}

/** @internal */
export const PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPayrollsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    off_cycle: z.boolean(),
    off_cycle_reason: OffCycleReason$inboundSchema,
    start_date: z.string(),
    end_date: z.string(),
    pay_schedule_uuid: z.string().optional(),
    employee_uuids: z.array(z.string()).optional(),
    check_date: z.string().optional(),
    withholding_pay_period: WithholdingPayPeriod$inboundSchema.optional(),
    skip_regular_deductions: z.boolean().optional(),
    fixed_withholding_rate: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "off_cycle": "offCycle",
      "off_cycle_reason": "offCycleReason",
      "start_date": "startDate",
      "end_date": "endDate",
      "pay_schedule_uuid": "payScheduleUuid",
      "employee_uuids": "employeeUuids",
      "check_date": "checkDate",
      "withholding_pay_period": "withholdingPayPeriod",
      "skip_regular_deductions": "skipRegularDeductions",
      "fixed_withholding_rate": "fixedWithholdingRate",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound = {
  off_cycle: boolean;
  off_cycle_reason: string;
  start_date: string;
  end_date: string;
  pay_schedule_uuid?: string | undefined;
  employee_uuids?: Array<string> | undefined;
  check_date?: string | undefined;
  withholding_pay_period?: string | undefined;
  skip_regular_deductions?: boolean | undefined;
  fixed_withholding_rate?: boolean | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdPayrollsRequestBody
  > = z.object({
    offCycle: z.boolean(),
    offCycleReason: OffCycleReason$outboundSchema,
    startDate: z.string(),
    endDate: z.string(),
    payScheduleUuid: z.string().optional(),
    employeeUuids: z.array(z.string()).optional(),
    checkDate: z.string().optional(),
    withholdingPayPeriod: WithholdingPayPeriod$outboundSchema.optional(),
    skipRegularDeductions: z.boolean().optional(),
    fixedWithholdingRate: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      offCycle: "off_cycle",
      offCycleReason: "off_cycle_reason",
      startDate: "start_date",
      endDate: "end_date",
      payScheduleUuid: "pay_schedule_uuid",
      employeeUuids: "employee_uuids",
      checkDate: "check_date",
      withholdingPayPeriod: "withholding_pay_period",
      skipRegularDeductions: "skip_regular_deductions",
      fixedWithholdingRate: "fixed_withholding_rate",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdPayrollsRequestBody$ {
  /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound;
}

export function postV1CompaniesCompanyIdPayrollsRequestBodyToJSON(
  postV1CompaniesCompanyIdPayrollsRequestBody:
    PostV1CompaniesCompanyIdPayrollsRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema.parse(
      postV1CompaniesCompanyIdPayrollsRequestBody,
    ),
  );
}

export function postV1CompaniesCompanyIdPayrollsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdPayrollsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdPayrollsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdPayrollsRequest$inboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdPayrollsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() =>
    PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1CompaniesCompanyIdPayrollsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound;
};

/** @internal */
export const PostV1CompaniesCompanyIdPayrollsRequest$outboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdPayrollsRequest$Outbound,
  z.ZodTypeDef,
  PostV1CompaniesCompanyIdPayrollsRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() =>
    PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdPayrollsRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdPayrollsRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdPayrollsRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequest$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdPayrollsRequest$Outbound;
}

export function postV1CompaniesCompanyIdPayrollsRequestToJSON(
  postV1CompaniesCompanyIdPayrollsRequest:
    PostV1CompaniesCompanyIdPayrollsRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdPayrollsRequest$outboundSchema.parse(
      postV1CompaniesCompanyIdPayrollsRequest,
    ),
  );
}

export function postV1CompaniesCompanyIdPayrollsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdPayrollsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdPayrollsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdPayrollsRequest' from JSON`,
  );
}
