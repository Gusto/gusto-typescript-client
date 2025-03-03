/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Ytd Benefit Amounts From Different Company
 */
export type YtdBenefitAmountsFromDifferentCompany = {
  /**
   * The unique identifier for this benefit amount record.
   */
  uuid: string;
  /**
   * The benefit type supported by Gusto. See [Benefit Types](https://docs.gusto.com/embedded-payroll/reference/get-v1-benefits) for more information.
   */
  benefitType: number;
  /**
   * The year-to-date employee deduction made outside the current company.
   */
  ytdEmployeeDeductionAmount: string;
  /**
   * The year-to-date company contribution made outside the current company.
   */
  ytdCompanyContributionAmount: string;
};

/** @internal */
export const YtdBenefitAmountsFromDifferentCompany$inboundSchema: z.ZodType<
  YtdBenefitAmountsFromDifferentCompany,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  benefit_type: z.number().int(),
  ytd_employee_deduction_amount: z.string(),
  ytd_company_contribution_amount: z.string(),
}).transform((v) => {
  return remap$(v, {
    "benefit_type": "benefitType",
    "ytd_employee_deduction_amount": "ytdEmployeeDeductionAmount",
    "ytd_company_contribution_amount": "ytdCompanyContributionAmount",
  });
});

/** @internal */
export type YtdBenefitAmountsFromDifferentCompany$Outbound = {
  uuid: string;
  benefit_type: number;
  ytd_employee_deduction_amount: string;
  ytd_company_contribution_amount: string;
};

/** @internal */
export const YtdBenefitAmountsFromDifferentCompany$outboundSchema: z.ZodType<
  YtdBenefitAmountsFromDifferentCompany$Outbound,
  z.ZodTypeDef,
  YtdBenefitAmountsFromDifferentCompany
> = z.object({
  uuid: z.string(),
  benefitType: z.number().int(),
  ytdEmployeeDeductionAmount: z.string(),
  ytdCompanyContributionAmount: z.string(),
}).transform((v) => {
  return remap$(v, {
    benefitType: "benefit_type",
    ytdEmployeeDeductionAmount: "ytd_employee_deduction_amount",
    ytdCompanyContributionAmount: "ytd_company_contribution_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace YtdBenefitAmountsFromDifferentCompany$ {
  /** @deprecated use `YtdBenefitAmountsFromDifferentCompany$inboundSchema` instead. */
  export const inboundSchema =
    YtdBenefitAmountsFromDifferentCompany$inboundSchema;
  /** @deprecated use `YtdBenefitAmountsFromDifferentCompany$outboundSchema` instead. */
  export const outboundSchema =
    YtdBenefitAmountsFromDifferentCompany$outboundSchema;
  /** @deprecated use `YtdBenefitAmountsFromDifferentCompany$Outbound` instead. */
  export type Outbound = YtdBenefitAmountsFromDifferentCompany$Outbound;
}

export function ytdBenefitAmountsFromDifferentCompanyToJSON(
  ytdBenefitAmountsFromDifferentCompany: YtdBenefitAmountsFromDifferentCompany,
): string {
  return JSON.stringify(
    YtdBenefitAmountsFromDifferentCompany$outboundSchema.parse(
      ytdBenefitAmountsFromDifferentCompany,
    ),
  );
}

export function ytdBenefitAmountsFromDifferentCompanyFromJSON(
  jsonString: string,
): SafeParseResult<YtdBenefitAmountsFromDifferentCompany, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      YtdBenefitAmountsFromDifferentCompany$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'YtdBenefitAmountsFromDifferentCompany' from JSON`,
  );
}
