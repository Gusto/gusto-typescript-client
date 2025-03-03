/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostEmployeeYtdBenefitAmountsFromDifferentCompany = {
  /**
   * The benefit type supported by Gusto.
   */
  benefitType?: number | undefined;
  /**
   * The tax year for which this amount applies.
   */
  taxYear: number;
  /**
   * The year-to-date employee deduction made outside the current company.
   */
  ytdEmployeeDeductionAmount?: string | undefined;
  /**
   * The year-to-date company contribution made outside the current company.
   */
  ytdCompanyContributionAmount?: string | undefined;
};

/** @internal */
export const PostEmployeeYtdBenefitAmountsFromDifferentCompany$inboundSchema:
  z.ZodType<
    PostEmployeeYtdBenefitAmountsFromDifferentCompany,
    z.ZodTypeDef,
    unknown
  > = z.object({
    benefit_type: z.number().int().optional(),
    tax_year: z.number(),
    ytd_employee_deduction_amount: z.string().default("0.00"),
    ytd_company_contribution_amount: z.string().default("0.00"),
  }).transform((v) => {
    return remap$(v, {
      "benefit_type": "benefitType",
      "tax_year": "taxYear",
      "ytd_employee_deduction_amount": "ytdEmployeeDeductionAmount",
      "ytd_company_contribution_amount": "ytdCompanyContributionAmount",
    });
  });

/** @internal */
export type PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound = {
  benefit_type?: number | undefined;
  tax_year: number;
  ytd_employee_deduction_amount: string;
  ytd_company_contribution_amount: string;
};

/** @internal */
export const PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema:
  z.ZodType<
    PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound,
    z.ZodTypeDef,
    PostEmployeeYtdBenefitAmountsFromDifferentCompany
  > = z.object({
    benefitType: z.number().int().optional(),
    taxYear: z.number(),
    ytdEmployeeDeductionAmount: z.string().default("0.00"),
    ytdCompanyContributionAmount: z.string().default("0.00"),
  }).transform((v) => {
    return remap$(v, {
      benefitType: "benefit_type",
      taxYear: "tax_year",
      ytdEmployeeDeductionAmount: "ytd_employee_deduction_amount",
      ytdCompanyContributionAmount: "ytd_company_contribution_amount",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostEmployeeYtdBenefitAmountsFromDifferentCompany$ {
  /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompany$inboundSchema` instead. */
  export const inboundSchema =
    PostEmployeeYtdBenefitAmountsFromDifferentCompany$inboundSchema;
  /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema` instead. */
  export const outboundSchema =
    PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema;
  /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound` instead. */
  export type Outbound =
    PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound;
}

export function postEmployeeYtdBenefitAmountsFromDifferentCompanyToJSON(
  postEmployeeYtdBenefitAmountsFromDifferentCompany:
    PostEmployeeYtdBenefitAmountsFromDifferentCompany,
): string {
  return JSON.stringify(
    PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema.parse(
      postEmployeeYtdBenefitAmountsFromDifferentCompany,
    ),
  );
}

export function postEmployeeYtdBenefitAmountsFromDifferentCompanyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostEmployeeYtdBenefitAmountsFromDifferentCompany,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostEmployeeYtdBenefitAmountsFromDifferentCompany$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostEmployeeYtdBenefitAmountsFromDifferentCompany' from JSON`,
  );
}
