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
 * The company contribution scheme.
 *
 * @remarks
 *
 * `amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
 *
 * `percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
 *
 * `tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.
 */
export const PutV1EmployeeBenefitsEmployeeBenefitIdType = {
  Amount: "amount",
  Percentage: "percentage",
  Tiered: "tiered",
} as const;
/**
 * The company contribution scheme.
 *
 * @remarks
 *
 * `amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
 *
 * `percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
 *
 * `tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.
 */
export type PutV1EmployeeBenefitsEmployeeBenefitIdType = ClosedEnum<
  typeof PutV1EmployeeBenefitsEmployeeBenefitIdType
>;

/**
 * A single tier of a tiered matching scheme.
 */
export type Value2 = {
  /**
   * The percentage of employee deduction within this tier the company contribution will match.
   */
  rate?: string | undefined;
  /**
   * The percentage threshold at which this tier ends (inclusive).
   *
   * @remarks
   *
   * For example, a value of "5" means the company contribution will match employee deductions from the previous tier's threshold up to and including 5% of payroll.
   *
   * If this is the first tier, a value of "5" means the company contribution will match employee deductions from 0% up to and including 5% of payroll.
   */
  threshold?: string | undefined;
};

/**
 * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
 *
 * @remarks
 *
 * For the `tiered` contribution type, an array of tiers.
 */
export type PutV1EmployeeBenefitsEmployeeBenefitIdValue =
  | string
  | Array<Value2>;

/**
 * An object representing the type and value of the company contribution.
 */
export type PutV1EmployeeBenefitsEmployeeBenefitIdContribution = {
  /**
   * The company contribution scheme.
   *
   * @remarks
   *
   * `amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
   *
   * `percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
   *
   * `tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.
   */
  type?: PutV1EmployeeBenefitsEmployeeBenefitIdType | undefined;
  /**
   * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
   *
   * @remarks
   *
   * For the `tiered` contribution type, an array of tiers.
   */
  value?: string | Array<Value2> | undefined;
};

/**
 * Some benefits require additional information to determine
 *
 * @remarks
 * their limit.
 *
 * `Family` or `Individual`: Applicable to HSA benefit.
 *
 * `Joint Filing or Single` or `Married and Filing Separately`: Applicable to Dependent Care FSA benefit.
 */
export const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption = {
  Family: "Family",
  Individual: "Individual",
  JointFilingOrSingle: "Joint Filing or Single",
  MarriedAndFilingSeparately: "Married and Filing Separately",
} as const;
/**
 * Some benefits require additional information to determine
 *
 * @remarks
 * their limit.
 *
 * `Family` or `Individual`: Applicable to HSA benefit.
 *
 * `Joint Filing or Single` or `Married and Filing Separately`: Applicable to Dependent Care FSA benefit.
 */
export type PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption = ClosedEnum<
  typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption
>;

/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome =
  {
    Unset: "unset",
    ReducesTaxableIncome: "reduces_taxable_income",
    DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income",
  } as const;
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export type PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome =
  ClosedEnum<
    typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome
  >;

export type PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  /**
   * Whether the employee benefit is active.
   */
  active?: boolean | undefined;
  /**
   * The amount to be deducted, per pay period, from the employee's pay.
   */
  employeeDeduction?: string | undefined;
  /**
   * Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.
   */
  deductAsPercentage?: boolean | undefined;
  /**
   * The maximum employee deduction amount per year. A null value signifies no limit.
   */
  employeeDeductionAnnualMaximum?: string | null | undefined;
  /**
   * An object representing the type and value of the company contribution.
   */
  contribution?: PutV1EmployeeBenefitsEmployeeBenefitIdContribution | undefined;
  /**
   * Whether the company contribution is elective (aka "matching"). For `tiered`, `elective_amount`, and `elective_percentage` contribution types this is ignored and assumed to be `true`.
   */
  elective?: boolean | undefined;
  /**
   * The maximum company contribution amount per year. A null value signifies no limit.
   */
  companyContributionAnnualMaximum?: string | null | undefined;
  /**
   * Some benefits require additional information to determine
   *
   * @remarks
   * their limit.
   *
   * `Family` or `Individual`: Applicable to HSA benefit.
   *
   * `Joint Filing or Single` or `Married and Filing Separately`: Applicable to Dependent Care FSA benefit.
   */
  limitOption?:
    | PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption
    | null
    | undefined;
  /**
   * Whether the employee should use a benefit’s "catch up" rate. Only Roth 401k and 401k benefits use this value for employees over 50.
   */
  catchUp?: boolean | undefined;
  /**
   * The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.
   */
  coverageAmount?: string | null | undefined;
  /**
   * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
   */
  deductionReducesTaxableIncome?:
    | PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome
    | null
    | undefined;
  /**
   * The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.
   */
  coverageSalaryMultiplier?: string | undefined;
  /**
   * The amount to be paid, per pay period, by the company.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  companyContribution?: string | undefined;
  /**
   * Whether the company contribution amount should be treated as a percentage to be deducted from each payroll.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  contributeAsPercentage?: boolean | undefined;
};

export type PutV1EmployeeBenefitsEmployeeBenefitIdRequest = {
  /**
   * The UUID of the employee benefit.
   */
  employeeBenefitId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody;
};

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema:
  z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdType> = z
    .nativeEnum(PutV1EmployeeBenefitsEmployeeBenefitIdType);

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema:
  z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdType> =
    PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdType$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema;
}

/** @internal */
export const Value2$inboundSchema: z.ZodType<Value2, z.ZodTypeDef, unknown> = z
  .object({
    rate: z.string().optional(),
    threshold: z.string().optional(),
  });

/** @internal */
export type Value2$Outbound = {
  rate?: string | undefined;
  threshold?: string | undefined;
};

/** @internal */
export const Value2$outboundSchema: z.ZodType<
  Value2$Outbound,
  z.ZodTypeDef,
  Value2
> = z.object({
  rate: z.string().optional(),
  threshold: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value2$ {
  /** @deprecated use `Value2$inboundSchema` instead. */
  export const inboundSchema = Value2$inboundSchema;
  /** @deprecated use `Value2$outboundSchema` instead. */
  export const outboundSchema = Value2$outboundSchema;
  /** @deprecated use `Value2$Outbound` instead. */
  export type Outbound = Value2$Outbound;
}

export function value2ToJSON(value2: Value2): string {
  return JSON.stringify(Value2$outboundSchema.parse(value2));
}

export function value2FromJSON(
  jsonString: string,
): SafeParseResult<Value2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Value2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Value2' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdValue$inboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdValue,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.lazy(() => Value2$inboundSchema))]);

/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound =
  | string
  | Array<Value2$Outbound>;

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound,
    z.ZodTypeDef,
    PutV1EmployeeBenefitsEmployeeBenefitIdValue
  > = z.union([z.string(), z.array(z.lazy(() => Value2$outboundSchema))]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdValue$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdValue$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdValue$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound` instead. */
  export type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound;
}

export function putV1EmployeeBenefitsEmployeeBenefitIdValueToJSON(
  putV1EmployeeBenefitsEmployeeBenefitIdValue:
    PutV1EmployeeBenefitsEmployeeBenefitIdValue,
): string {
  return JSON.stringify(
    PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema.parse(
      putV1EmployeeBenefitsEmployeeBenefitIdValue,
    ),
  );
}

export function putV1EmployeeBenefitsEmployeeBenefitIdValueFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeeBenefitsEmployeeBenefitIdValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeeBenefitsEmployeeBenefitIdValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeeBenefitsEmployeeBenefitIdValue' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema.optional(),
    value: z.union([z.string(), z.array(z.lazy(() => Value2$inboundSchema))])
      .optional(),
  });

/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound = {
  type?: string | undefined;
  value?: string | Array<Value2$Outbound> | undefined;
};

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound,
    z.ZodTypeDef,
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution
  > = z.object({
    type: PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema.optional(),
    value: z.union([z.string(), z.array(z.lazy(() => Value2$outboundSchema))])
      .optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdContribution$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound` instead. */
  export type Outbound =
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound;
}

export function putV1EmployeeBenefitsEmployeeBenefitIdContributionToJSON(
  putV1EmployeeBenefitsEmployeeBenefitIdContribution:
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution,
): string {
  return JSON.stringify(
    PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema.parse(
      putV1EmployeeBenefitsEmployeeBenefitIdContribution,
    ),
  );
}

export function putV1EmployeeBenefitsEmployeeBenefitIdContributionFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeeBenefitsEmployeeBenefitIdContribution,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeeBenefitsEmployeeBenefitIdContribution' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema:
  z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption> = z
    .nativeEnum(PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption);

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema:
  z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption> =
    PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema;
}

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema:
  z.ZodNativeEnum<
    typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome
  > = z.nativeEnum(
    PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome,
  );

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema:
  z.ZodNativeEnum<
    typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome
  > =
    PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema;
}

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    version: z.string(),
    active: z.boolean().optional(),
    employee_deduction: z.string().default("0.00"),
    deduct_as_percentage: z.boolean().optional(),
    employee_deduction_annual_maximum: z.nullable(z.string()).optional(),
    contribution: z.lazy(() =>
      PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema
    ).optional(),
    elective: z.boolean().default(false),
    company_contribution_annual_maximum: z.nullable(z.string()).optional(),
    limit_option: z.nullable(
      PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema,
    ).optional(),
    catch_up: z.boolean().default(false),
    coverage_amount: z.nullable(z.string()).optional(),
    deduction_reduces_taxable_income: z.nullable(
      PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema
        .default("unset"),
    ),
    coverage_salary_multiplier: z.string().default("0.00"),
    company_contribution: z.string().default("0.00"),
    contribute_as_percentage: z.boolean().default(false),
  }).transform((v) => {
    return remap$(v, {
      "employee_deduction": "employeeDeduction",
      "deduct_as_percentage": "deductAsPercentage",
      "employee_deduction_annual_maximum": "employeeDeductionAnnualMaximum",
      "company_contribution_annual_maximum": "companyContributionAnnualMaximum",
      "limit_option": "limitOption",
      "catch_up": "catchUp",
      "coverage_amount": "coverageAmount",
      "deduction_reduces_taxable_income": "deductionReducesTaxableIncome",
      "coverage_salary_multiplier": "coverageSalaryMultiplier",
      "company_contribution": "companyContribution",
      "contribute_as_percentage": "contributeAsPercentage",
    });
  });

/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound = {
  version: string;
  active?: boolean | undefined;
  employee_deduction: string;
  deduct_as_percentage?: boolean | undefined;
  employee_deduction_annual_maximum?: string | null | undefined;
  contribution?:
    | PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound
    | undefined;
  elective: boolean;
  company_contribution_annual_maximum?: string | null | undefined;
  limit_option?: string | null | undefined;
  catch_up: boolean;
  coverage_amount?: string | null | undefined;
  deduction_reduces_taxable_income: string | null;
  coverage_salary_multiplier: string;
  company_contribution: string;
  contribute_as_percentage: boolean;
};

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody
  > = z.object({
    version: z.string(),
    active: z.boolean().optional(),
    employeeDeduction: z.string().default("0.00"),
    deductAsPercentage: z.boolean().optional(),
    employeeDeductionAnnualMaximum: z.nullable(z.string()).optional(),
    contribution: z.lazy(() =>
      PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema
    ).optional(),
    elective: z.boolean().default(false),
    companyContributionAnnualMaximum: z.nullable(z.string()).optional(),
    limitOption: z.nullable(
      PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema,
    ).optional(),
    catchUp: z.boolean().default(false),
    coverageAmount: z.nullable(z.string()).optional(),
    deductionReducesTaxableIncome: z.nullable(
      PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema
        .default("unset"),
    ),
    coverageSalaryMultiplier: z.string().default("0.00"),
    companyContribution: z.string().default("0.00"),
    contributeAsPercentage: z.boolean().default(false),
  }).transform((v) => {
    return remap$(v, {
      employeeDeduction: "employee_deduction",
      deductAsPercentage: "deduct_as_percentage",
      employeeDeductionAnnualMaximum: "employee_deduction_annual_maximum",
      companyContributionAnnualMaximum: "company_contribution_annual_maximum",
      limitOption: "limit_option",
      catchUp: "catch_up",
      coverageAmount: "coverage_amount",
      deductionReducesTaxableIncome: "deduction_reduces_taxable_income",
      coverageSalaryMultiplier: "coverage_salary_multiplier",
      companyContribution: "company_contribution",
      contributeAsPercentage: "contribute_as_percentage",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound;
}

export function putV1EmployeeBenefitsEmployeeBenefitIdRequestBodyToJSON(
  putV1EmployeeBenefitsEmployeeBenefitIdRequestBody:
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema.parse(
      putV1EmployeeBenefitsEmployeeBenefitIdRequestBody,
    ),
  );
}

export function putV1EmployeeBenefitsEmployeeBenefitIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_benefit_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
    RequestBody: z.lazy(() =>
      PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_benefit_id": "employeeBenefitId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
  employee_benefit_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest
  > = z.object({
    employeeBenefitId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
    requestBody: z.lazy(() =>
      PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeBenefitId: "employee_benefit_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeeBenefitsEmployeeBenefitIdRequest$ {
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound;
}

export function putV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(
  putV1EmployeeBenefitsEmployeeBenefitIdRequest:
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest,
): string {
  return JSON.stringify(
    PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema.parse(
      putV1EmployeeBenefitsEmployeeBenefitIdRequest,
    ),
  );
}

export function putV1EmployeeBenefitsEmployeeBenefitIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeeBenefitsEmployeeBenefitIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeeBenefitsEmployeeBenefitIdRequest' from JSON`,
  );
}
