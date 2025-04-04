/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
 */
export const EmploymentStatus = {
  PartTime: "part_time",
  FullTime: "full_time",
  PartTimeEligible: "part_time_eligible",
  Variable: "variable",
  Seasonal: "seasonal",
  NotSet: "not_set",
} as const;
/**
 * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
 */
export type EmploymentStatus = ClosedEnum<typeof EmploymentStatus>;

export type RehireBody = {
  /**
   * The day when the employee returns to work.
   */
  effectiveDate: string;
  /**
   * The boolean flag indicating whether Gusto will file a new hire report for the employee.
   */
  fileNewHireReport: boolean;
  /**
   * The uuid of the employee's work location.
   */
  workLocationUuid: string;
  /**
   * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
   */
  employmentStatus?: EmploymentStatus | undefined;
  /**
   * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
   */
  twoPercentShareholder?: boolean | undefined;
};

/** @internal */
export const EmploymentStatus$inboundSchema: z.ZodNativeEnum<
  typeof EmploymentStatus
> = z.nativeEnum(EmploymentStatus);

/** @internal */
export const EmploymentStatus$outboundSchema: z.ZodNativeEnum<
  typeof EmploymentStatus
> = EmploymentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentStatus$ {
  /** @deprecated use `EmploymentStatus$inboundSchema` instead. */
  export const inboundSchema = EmploymentStatus$inboundSchema;
  /** @deprecated use `EmploymentStatus$outboundSchema` instead. */
  export const outboundSchema = EmploymentStatus$outboundSchema;
}

/** @internal */
export const RehireBody$inboundSchema: z.ZodType<
  RehireBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  effective_date: z.string(),
  file_new_hire_report: z.boolean(),
  work_location_uuid: z.string(),
  employment_status: EmploymentStatus$inboundSchema.optional(),
  two_percent_shareholder: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "effective_date": "effectiveDate",
    "file_new_hire_report": "fileNewHireReport",
    "work_location_uuid": "workLocationUuid",
    "employment_status": "employmentStatus",
    "two_percent_shareholder": "twoPercentShareholder",
  });
});

/** @internal */
export type RehireBody$Outbound = {
  effective_date: string;
  file_new_hire_report: boolean;
  work_location_uuid: string;
  employment_status?: string | undefined;
  two_percent_shareholder?: boolean | undefined;
};

/** @internal */
export const RehireBody$outboundSchema: z.ZodType<
  RehireBody$Outbound,
  z.ZodTypeDef,
  RehireBody
> = z.object({
  effectiveDate: z.string(),
  fileNewHireReport: z.boolean(),
  workLocationUuid: z.string(),
  employmentStatus: EmploymentStatus$outboundSchema.optional(),
  twoPercentShareholder: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    effectiveDate: "effective_date",
    fileNewHireReport: "file_new_hire_report",
    workLocationUuid: "work_location_uuid",
    employmentStatus: "employment_status",
    twoPercentShareholder: "two_percent_shareholder",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RehireBody$ {
  /** @deprecated use `RehireBody$inboundSchema` instead. */
  export const inboundSchema = RehireBody$inboundSchema;
  /** @deprecated use `RehireBody$outboundSchema` instead. */
  export const outboundSchema = RehireBody$outboundSchema;
  /** @deprecated use `RehireBody$Outbound` instead. */
  export type Outbound = RehireBody$Outbound;
}

export function rehireBodyToJSON(rehireBody: RehireBody): string {
  return JSON.stringify(RehireBody$outboundSchema.parse(rehireBody));
}

export function rehireBodyFromJSON(
  jsonString: string,
): SafeParseResult<RehireBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RehireBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RehireBody' from JSON`,
  );
}
