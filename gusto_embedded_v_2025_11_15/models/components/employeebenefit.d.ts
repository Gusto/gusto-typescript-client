import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A single tier of a tiered matching scheme.
 */
export type Tiers = {
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
    /**
     * The step up difference between this tier's threshold and the previous tier's threshold. In the first tier, this is equivalent to threshold.
     */
    thresholdDelta?: string | undefined;
};
export type Two = {
    tiers?: Array<Tiers> | undefined;
};
/**
 * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
 *
 * @remarks
 *
 * For the `tiered` contribution type, an array of tiers.
 */
export type EmployeeBenefitValue = Two | string;
/**
 * An object representing the type and value of the company contribution.
 */
export type Contribution = {
    /**
     * The company contribution scheme.
     *
     * @remarks
     *
     * "amount": The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.
     *
     * "percentage": The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.
     *
     * "tiered": The company contribution varies according to the size of the employee deduction.
     */
    type?: string | undefined;
    /**
     * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
     *
     * @remarks
     *
     * For the `tiered` contribution type, an array of tiers.
     */
    value?: Two | string | undefined;
};
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export declare const DeductionReducesTaxableIncome: {
    readonly Unset: "unset";
    readonly ReducesTaxableIncome: "reduces_taxable_income";
    readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
};
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export type DeductionReducesTaxableIncome = ClosedEnum<typeof DeductionReducesTaxableIncome>;
/**
 * The representation of an employee benefit.
 */
export type EmployeeBenefit = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
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
    contribution?: Contribution | undefined;
    /**
     * Whether the company contribution is elective (aka matching). For "tiered" contribution types, this is always true.
     */
    elective?: boolean | undefined;
    /**
     * The maximum company contribution amount per year. A null value signifies no limit.
     */
    companyContributionAnnualMaximum?: string | null | undefined;
    /**
     * Some benefits require additional information to determine their limit.
     *
     * @remarks
     *
     * `Family` and `Individual` are applicable to HSA benefit.
     *
     * `Joint Filing or Single` and `Married and Filing Separately` are applicable to Dependent Care FSA benefit.
     */
    limitOption?: string | null | undefined;
    /**
     * Whether the employee should use a benefit’s "catch up" rate. Only Roth 401k and 401k benefits use this value for employees over 50.
     */
    catchUp?: boolean | undefined;
    /**
     * Identifier for a 401(k) loan assigned by the 401(k) provider
     */
    retirementLoanIdentifier?: string | undefined;
    /**
     * The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.
     */
    coverageAmount?: string | null | undefined;
    /**
     * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
     */
    deductionReducesTaxableIncome?: DeductionReducesTaxableIncome | null | undefined;
    /**
     * The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.
     */
    coverageSalaryMultiplier?: string | undefined;
    /**
     * The amount to be paid, per pay period, by the company. This field will not appear for tiered contribution types.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    companyContribution?: string | undefined;
    /**
     * Whether the company_contribution value should be treated as a percentage to be added to each payroll. This field will not appear for tiered contribution types.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    contributeAsPercentage?: boolean | undefined;
    /**
     * The UUID of the employee to which the benefit belongs.
     */
    employeeUuid?: string | undefined;
    /**
     * The UUID of the company benefit.
     */
    companyBenefitUuid?: string | undefined;
    /**
     * The UUID of the employee benefit.
     */
    uuid: string;
};
/** @internal */
export declare const Tiers$inboundSchema: z.ZodType<Tiers, z.ZodTypeDef, unknown>;
/** @internal */
export type Tiers$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
    threshold_delta?: string | undefined;
};
/** @internal */
export declare const Tiers$outboundSchema: z.ZodType<Tiers$Outbound, z.ZodTypeDef, Tiers>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Tiers$ {
    /** @deprecated use `Tiers$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Tiers, z.ZodTypeDef, unknown>;
    /** @deprecated use `Tiers$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Tiers$Outbound, z.ZodTypeDef, Tiers>;
    /** @deprecated use `Tiers$Outbound` instead. */
    type Outbound = Tiers$Outbound;
}
export declare function tiersToJSON(tiers: Tiers): string;
export declare function tiersFromJSON(jsonString: string): SafeParseResult<Tiers, SDKValidationError>;
/** @internal */
export declare const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown>;
/** @internal */
export type Two$Outbound = {
    tiers?: Array<Tiers$Outbound> | undefined;
};
/** @internal */
export declare const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Two$ {
    /** @deprecated use `Two$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown>;
    /** @deprecated use `Two$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two>;
    /** @deprecated use `Two$Outbound` instead. */
    type Outbound = Two$Outbound;
}
export declare function twoToJSON(two: Two): string;
export declare function twoFromJSON(jsonString: string): SafeParseResult<Two, SDKValidationError>;
/** @internal */
export declare const EmployeeBenefitValue$inboundSchema: z.ZodType<EmployeeBenefitValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBenefitValue$Outbound = Two$Outbound | string;
/** @internal */
export declare const EmployeeBenefitValue$outboundSchema: z.ZodType<EmployeeBenefitValue$Outbound, z.ZodTypeDef, EmployeeBenefitValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefitValue$ {
    /** @deprecated use `EmployeeBenefitValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBenefitValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBenefitValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBenefitValue$Outbound, z.ZodTypeDef, EmployeeBenefitValue>;
    /** @deprecated use `EmployeeBenefitValue$Outbound` instead. */
    type Outbound = EmployeeBenefitValue$Outbound;
}
export declare function employeeBenefitValueToJSON(employeeBenefitValue: EmployeeBenefitValue): string;
export declare function employeeBenefitValueFromJSON(jsonString: string): SafeParseResult<EmployeeBenefitValue, SDKValidationError>;
/** @internal */
export declare const Contribution$inboundSchema: z.ZodType<Contribution, z.ZodTypeDef, unknown>;
/** @internal */
export type Contribution$Outbound = {
    type?: string | undefined;
    value?: Two$Outbound | string | undefined;
};
/** @internal */
export declare const Contribution$outboundSchema: z.ZodType<Contribution$Outbound, z.ZodTypeDef, Contribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Contribution$ {
    /** @deprecated use `Contribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Contribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `Contribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Contribution$Outbound, z.ZodTypeDef, Contribution>;
    /** @deprecated use `Contribution$Outbound` instead. */
    type Outbound = Contribution$Outbound;
}
export declare function contributionToJSON(contribution: Contribution): string;
export declare function contributionFromJSON(jsonString: string): SafeParseResult<Contribution, SDKValidationError>;
/** @internal */
export declare const DeductionReducesTaxableIncome$inboundSchema: z.ZodNativeEnum<typeof DeductionReducesTaxableIncome>;
/** @internal */
export declare const DeductionReducesTaxableIncome$outboundSchema: z.ZodNativeEnum<typeof DeductionReducesTaxableIncome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeductionReducesTaxableIncome$ {
    /** @deprecated use `DeductionReducesTaxableIncome$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unset: "unset";
        readonly ReducesTaxableIncome: "reduces_taxable_income";
        readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
    }>;
    /** @deprecated use `DeductionReducesTaxableIncome$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unset: "unset";
        readonly ReducesTaxableIncome: "reduces_taxable_income";
        readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
    }>;
}
/** @internal */
export declare const EmployeeBenefit$inboundSchema: z.ZodType<EmployeeBenefit, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBenefit$Outbound = {
    version?: string | undefined;
    active: boolean;
    employee_deduction: string;
    deduct_as_percentage: boolean;
    employee_deduction_annual_maximum?: string | null | undefined;
    contribution?: Contribution$Outbound | undefined;
    elective: boolean;
    company_contribution_annual_maximum?: string | null | undefined;
    limit_option?: string | null | undefined;
    catch_up: boolean;
    retirement_loan_identifier?: string | undefined;
    coverage_amount?: string | null | undefined;
    deduction_reduces_taxable_income: string | null;
    coverage_salary_multiplier: string;
    company_contribution: string;
    contribute_as_percentage: boolean;
    employee_uuid?: string | undefined;
    company_benefit_uuid?: string | undefined;
    uuid: string;
};
/** @internal */
export declare const EmployeeBenefit$outboundSchema: z.ZodType<EmployeeBenefit$Outbound, z.ZodTypeDef, EmployeeBenefit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefit$ {
    /** @deprecated use `EmployeeBenefit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBenefit, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBenefit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBenefit$Outbound, z.ZodTypeDef, EmployeeBenefit>;
    /** @deprecated use `EmployeeBenefit$Outbound` instead. */
    type Outbound = EmployeeBenefit$Outbound;
}
export declare function employeeBenefitToJSON(employeeBenefit: EmployeeBenefit): string;
export declare function employeeBenefitFromJSON(jsonString: string): SafeParseResult<EmployeeBenefit, SDKValidationError>;
//# sourceMappingURL=employeebenefit.d.ts.map