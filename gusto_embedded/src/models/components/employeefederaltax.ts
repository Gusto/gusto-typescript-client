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
 * The version of w4 form.
 */
export const W4DataType = {
  Pre2020W4: "pre_2020_w4",
  Rev2020W4: "rev_2020_w4",
} as const;
/**
 * The version of w4 form.
 */
export type W4DataType = ClosedEnum<typeof W4DataType>;

/**
 * Example response
 */
export type EmployeeFederalTax = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version: string;
  /**
   * It determines which tax return form an individual will use and is an important factor in computing taxable income. One of:
   *
   * @remarks
   * - Single
   * - Married
   * - Head of Household
   * - Exempt from withholding
   * - Married, but withhold as Single (does not apply to rev_2020_w4 form)
   */
  filingStatus: string | null;
  /**
   * An employee can request an additional amount to be withheld from each paycheck.
   */
  extraWithholding: string | null;
  /**
   * If there are only two jobs (i.e., you and your spouse each have a job, or you have two), you can set it to true.
   */
  twoJobs: boolean | null;
  /**
   * A dependent is a person other than the taxpayer or spouse who entitles the taxpayer to claim a dependency exemption.
   */
  dependentsAmount: string | null;
  /**
   * Other income amount.
   */
  otherIncome: string | null;
  /**
   * Deductions other than the standard deduction to reduce withholding.
   */
  deductions: string | null;
  /**
   * The version of w4 form.
   */
  w4DataType: W4DataType;
  /**
   * *does not apply to rev_2020_w4 form*
   *
   * @remarks
   *
   * An exemption from paying a certain amount of income tax.
   */
  federalWithholdingAllowance?: number | undefined;
  /**
   * *does not apply to rev_2020_w4 form*
   *
   * @remarks
   *
   * An additional withholding dollar amount
   */
  additionalWithholding?: string | undefined;
};

/** @internal */
export const W4DataType$inboundSchema: z.ZodNativeEnum<typeof W4DataType> = z
  .nativeEnum(W4DataType);

/** @internal */
export const W4DataType$outboundSchema: z.ZodNativeEnum<typeof W4DataType> =
  W4DataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace W4DataType$ {
  /** @deprecated use `W4DataType$inboundSchema` instead. */
  export const inboundSchema = W4DataType$inboundSchema;
  /** @deprecated use `W4DataType$outboundSchema` instead. */
  export const outboundSchema = W4DataType$outboundSchema;
}

/** @internal */
export const EmployeeFederalTax$inboundSchema: z.ZodType<
  EmployeeFederalTax,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
  filing_status: z.nullable(z.string()),
  extra_withholding: z.nullable(z.string()),
  two_jobs: z.nullable(z.boolean()),
  dependents_amount: z.nullable(z.string()),
  other_income: z.nullable(z.string()),
  deductions: z.nullable(z.string()),
  w4_data_type: W4DataType$inboundSchema,
  federal_withholding_allowance: z.number().optional(),
  additional_withholding: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "filing_status": "filingStatus",
    "extra_withholding": "extraWithholding",
    "two_jobs": "twoJobs",
    "dependents_amount": "dependentsAmount",
    "other_income": "otherIncome",
    "w4_data_type": "w4DataType",
    "federal_withholding_allowance": "federalWithholdingAllowance",
    "additional_withholding": "additionalWithholding",
  });
});

/** @internal */
export type EmployeeFederalTax$Outbound = {
  version: string;
  filing_status: string | null;
  extra_withholding: string | null;
  two_jobs: boolean | null;
  dependents_amount: string | null;
  other_income: string | null;
  deductions: string | null;
  w4_data_type: string;
  federal_withholding_allowance?: number | undefined;
  additional_withholding?: string | undefined;
};

/** @internal */
export const EmployeeFederalTax$outboundSchema: z.ZodType<
  EmployeeFederalTax$Outbound,
  z.ZodTypeDef,
  EmployeeFederalTax
> = z.object({
  version: z.string(),
  filingStatus: z.nullable(z.string()),
  extraWithholding: z.nullable(z.string()),
  twoJobs: z.nullable(z.boolean()),
  dependentsAmount: z.nullable(z.string()),
  otherIncome: z.nullable(z.string()),
  deductions: z.nullable(z.string()),
  w4DataType: W4DataType$outboundSchema,
  federalWithholdingAllowance: z.number().optional(),
  additionalWithholding: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    filingStatus: "filing_status",
    extraWithholding: "extra_withholding",
    twoJobs: "two_jobs",
    dependentsAmount: "dependents_amount",
    otherIncome: "other_income",
    w4DataType: "w4_data_type",
    federalWithholdingAllowance: "federal_withholding_allowance",
    additionalWithholding: "additional_withholding",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeFederalTax$ {
  /** @deprecated use `EmployeeFederalTax$inboundSchema` instead. */
  export const inboundSchema = EmployeeFederalTax$inboundSchema;
  /** @deprecated use `EmployeeFederalTax$outboundSchema` instead. */
  export const outboundSchema = EmployeeFederalTax$outboundSchema;
  /** @deprecated use `EmployeeFederalTax$Outbound` instead. */
  export type Outbound = EmployeeFederalTax$Outbound;
}

export function employeeFederalTaxToJSON(
  employeeFederalTax: EmployeeFederalTax,
): string {
  return JSON.stringify(
    EmployeeFederalTax$outboundSchema.parse(employeeFederalTax),
  );
}

export function employeeFederalTaxFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeFederalTax, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeFederalTax$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeFederalTax' from JSON`,
  );
}
