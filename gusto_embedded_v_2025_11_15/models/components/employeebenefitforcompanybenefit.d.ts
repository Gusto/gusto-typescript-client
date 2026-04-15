import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A single tier of a tiered matching scheme.
 */
export type ValueTiers = {
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
export type Value2 = {
    tiers?: Array<ValueTiers> | undefined;
};
/**
 * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
 *
 * @remarks
 *
 * For the `tiered` contribution type, an array of tiers.
 */
export type EmployeeBenefitForCompanyBenefitValue = Value2 | string;
/**
 * An object representing the type and value of the company contribution.
 */
export type EmployeeBenefitForCompanyBenefitContribution = {
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
    value?: Value2 | string | undefined;
};
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export declare const EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome: {
    readonly Unset: "unset";
    readonly ReducesTaxableIncome: "reduces_taxable_income";
    readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
};
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export type EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome = ClosedEnum<typeof EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome>;
/**
 * The representation of an employee benefit for a company benefit.
 */
export type EmployeeBenefitForCompanyBenefit = {
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
    contribution?: EmployeeBenefitForCompanyBenefitContribution | undefined;
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
    deductionReducesTaxableIncome?: EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome | null | undefined;
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
    employeeUuid: string;
};
/** @internal */
export declare const ValueTiers$inboundSchema: z.ZodType<ValueTiers, z.ZodTypeDef, unknown>;
/** @internal */
export type ValueTiers$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
    threshold_delta?: string | undefined;
};
/** @internal */
export declare const ValueTiers$outboundSchema: z.ZodType<ValueTiers$Outbound, z.ZodTypeDef, ValueTiers>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ValueTiers$ {
    /** @deprecated use `ValueTiers$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ValueTiers, z.ZodTypeDef, unknown>;
    /** @deprecated use `ValueTiers$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ValueTiers$Outbound, z.ZodTypeDef, ValueTiers>;
    /** @deprecated use `ValueTiers$Outbound` instead. */
    type Outbound = ValueTiers$Outbound;
}
export declare function valueTiersToJSON(valueTiers: ValueTiers): string;
export declare function valueTiersFromJSON(jsonString: string): SafeParseResult<ValueTiers, SDKValidationError>;
/** @internal */
export declare const Value2$inboundSchema: z.ZodType<Value2, z.ZodTypeDef, unknown>;
/** @internal */
export type Value2$Outbound = {
    tiers?: Array<ValueTiers$Outbound> | undefined;
};
/** @internal */
export declare const Value2$outboundSchema: z.ZodType<Value2$Outbound, z.ZodTypeDef, Value2>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Value2$ {
    /** @deprecated use `Value2$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Value2, z.ZodTypeDef, unknown>;
    /** @deprecated use `Value2$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Value2$Outbound, z.ZodTypeDef, Value2>;
    /** @deprecated use `Value2$Outbound` instead. */
    type Outbound = Value2$Outbound;
}
export declare function value2ToJSON(value2: Value2): string;
export declare function value2FromJSON(jsonString: string): SafeParseResult<Value2, SDKValidationError>;
/** @internal */
export declare const EmployeeBenefitForCompanyBenefitValue$inboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBenefitForCompanyBenefitValue$Outbound = Value2$Outbound | string;
/** @internal */
export declare const EmployeeBenefitForCompanyBenefitValue$outboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitValue$Outbound, z.ZodTypeDef, EmployeeBenefitForCompanyBenefitValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefitForCompanyBenefitValue$ {
    /** @deprecated use `EmployeeBenefitForCompanyBenefitValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefitValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitValue$Outbound, z.ZodTypeDef, EmployeeBenefitForCompanyBenefitValue>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefitValue$Outbound` instead. */
    type Outbound = EmployeeBenefitForCompanyBenefitValue$Outbound;
}
export declare function employeeBenefitForCompanyBenefitValueToJSON(employeeBenefitForCompanyBenefitValue: EmployeeBenefitForCompanyBenefitValue): string;
export declare function employeeBenefitForCompanyBenefitValueFromJSON(jsonString: string): SafeParseResult<EmployeeBenefitForCompanyBenefitValue, SDKValidationError>;
/** @internal */
export declare const EmployeeBenefitForCompanyBenefitContribution$inboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBenefitForCompanyBenefitContribution$Outbound = {
    type?: string | undefined;
    value?: Value2$Outbound | string | undefined;
};
/** @internal */
export declare const EmployeeBenefitForCompanyBenefitContribution$outboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitContribution$Outbound, z.ZodTypeDef, EmployeeBenefitForCompanyBenefitContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefitForCompanyBenefitContribution$ {
    /** @deprecated use `EmployeeBenefitForCompanyBenefitContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefitContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefitContribution$Outbound, z.ZodTypeDef, EmployeeBenefitForCompanyBenefitContribution>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefitContribution$Outbound` instead. */
    type Outbound = EmployeeBenefitForCompanyBenefitContribution$Outbound;
}
export declare function employeeBenefitForCompanyBenefitContributionToJSON(employeeBenefitForCompanyBenefitContribution: EmployeeBenefitForCompanyBenefitContribution): string;
export declare function employeeBenefitForCompanyBenefitContributionFromJSON(jsonString: string): SafeParseResult<EmployeeBenefitForCompanyBenefitContribution, SDKValidationError>;
/** @internal */
export declare const EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome$inboundSchema: z.ZodNativeEnum<typeof EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome>;
/** @internal */
export declare const EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome$outboundSchema: z.ZodNativeEnum<typeof EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome$ {
    /** @deprecated use `EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unset: "unset";
        readonly ReducesTaxableIncome: "reduces_taxable_income";
        readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
    }>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefitDeductionReducesTaxableIncome$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unset: "unset";
        readonly ReducesTaxableIncome: "reduces_taxable_income";
        readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
    }>;
}
/** @internal */
export declare const EmployeeBenefitForCompanyBenefit$inboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefit, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBenefitForCompanyBenefit$Outbound = {
    version?: string | undefined;
    active: boolean;
    employee_deduction: string;
    deduct_as_percentage: boolean;
    employee_deduction_annual_maximum?: string | null | undefined;
    contribution?: EmployeeBenefitForCompanyBenefitContribution$Outbound | undefined;
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
    employee_uuid: string;
};
/** @internal */
export declare const EmployeeBenefitForCompanyBenefit$outboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefit$Outbound, z.ZodTypeDef, EmployeeBenefitForCompanyBenefit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefitForCompanyBenefit$ {
    /** @deprecated use `EmployeeBenefitForCompanyBenefit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefit, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBenefitForCompanyBenefit$Outbound, z.ZodTypeDef, EmployeeBenefitForCompanyBenefit>;
    /** @deprecated use `EmployeeBenefitForCompanyBenefit$Outbound` instead. */
    type Outbound = EmployeeBenefitForCompanyBenefit$Outbound;
}
export declare function employeeBenefitForCompanyBenefitToJSON(employeeBenefitForCompanyBenefit: EmployeeBenefitForCompanyBenefit): string;
export declare function employeeBenefitForCompanyBenefitFromJSON(jsonString: string): SafeParseResult<EmployeeBenefitForCompanyBenefit, SDKValidationError>;
//# sourceMappingURL=employeebenefitforcompanybenefit.d.ts.map