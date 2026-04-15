import * as z from "zod";
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
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsType: {
    readonly Tiered: "tiered";
    readonly Percentage: "percentage";
    readonly Amount: "amount";
};
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
export type PostV1EmployeesEmployeeIdEmployeeBenefitsType = ClosedEnum<typeof PostV1EmployeesEmployeeIdEmployeeBenefitsType>;
/**
 * A single tier of a tiered matching scheme.
 */
export type Two = {
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
export type Value = string | Array<Two>;
/**
 * An object representing the company contribution type and value.
 */
export type Contribution = {
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
    type?: PostV1EmployeesEmployeeIdEmployeeBenefitsType | undefined;
    /**
     * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
     *
     * @remarks
     *
     * For the `tiered` contribution type, an array of tiers.
     */
    value?: string | Array<Two> | undefined;
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
export declare const LimitOption: {
    readonly Family: "Family";
    readonly Individual: "Individual";
    readonly JointFilingOrSingle: "Joint Filing or Single";
    readonly MarriedAndFilingSeparately: "Married and Filing Separately";
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
export type LimitOption = ClosedEnum<typeof LimitOption>;
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
export type PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody = {
    /**
     * The UUID of the company benefit.
     */
    companyBenefitUuid: string;
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
     * An object representing the company contribution type and value.
     */
    contribution?: Contribution | undefined;
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
    limitOption?: LimitOption | null | undefined;
    /**
     * Whether the employee should use a benefit’s "catch up" rate. Only Roth 401k and 401k benefits use this value for employees over 50.
     */
    catchUp?: boolean | undefined;
    /**
     * The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.
     */
    coverageAmount?: string | null | undefined;
    /**
     * The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.
     */
    coverageSalaryMultiplier?: string | undefined;
    /**
     * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
     */
    deductionReducesTaxableIncome?: DeductionReducesTaxableIncome | null | undefined;
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
export type PostV1EmployeesEmployeeIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody;
};
export type PostV1EmployeesEmployeeIdEmployeeBenefitsResponse = {
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
     * Example response
     */
    employeeBenefit?: components.EmployeeBenefit | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsType$inboundSchema: z.ZodNativeEnum<typeof PostV1EmployeesEmployeeIdEmployeeBenefitsType>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsType$outboundSchema: z.ZodNativeEnum<typeof PostV1EmployeesEmployeeIdEmployeeBenefitsType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdEmployeeBenefitsType$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Tiered: "tiered";
        readonly Percentage: "percentage";
        readonly Amount: "amount";
    }>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Tiered: "tiered";
        readonly Percentage: "percentage";
        readonly Amount: "amount";
    }>;
}
/** @internal */
export declare const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown>;
/** @internal */
export type Two$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
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
export declare const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
/** @internal */
export type Value$Outbound = string | Array<Two$Outbound>;
/** @internal */
export declare const Value$outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Value$ {
    /** @deprecated use `Value$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
    /** @deprecated use `Value$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
    /** @deprecated use `Value$Outbound` instead. */
    type Outbound = Value$Outbound;
}
export declare function valueToJSON(value: Value): string;
export declare function valueFromJSON(jsonString: string): SafeParseResult<Value, SDKValidationError>;
/** @internal */
export declare const Contribution$inboundSchema: z.ZodType<Contribution, z.ZodTypeDef, unknown>;
/** @internal */
export type Contribution$Outbound = {
    type?: string | undefined;
    value?: string | Array<Two$Outbound> | undefined;
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
export declare const LimitOption$inboundSchema: z.ZodNativeEnum<typeof LimitOption>;
/** @internal */
export declare const LimitOption$outboundSchema: z.ZodNativeEnum<typeof LimitOption>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LimitOption$ {
    /** @deprecated use `LimitOption$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Family: "Family";
        readonly Individual: "Individual";
        readonly JointFilingOrSingle: "Joint Filing or Single";
        readonly MarriedAndFilingSeparately: "Married and Filing Separately";
    }>;
    /** @deprecated use `LimitOption$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Family: "Family";
        readonly Individual: "Individual";
        readonly JointFilingOrSingle: "Joint Filing or Single";
        readonly MarriedAndFilingSeparately: "Married and Filing Separately";
    }>;
}
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
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound = {
    company_benefit_uuid: string;
    active: boolean;
    employee_deduction: string;
    deduct_as_percentage: boolean;
    employee_deduction_annual_maximum?: string | null | undefined;
    contribution?: Contribution$Outbound | undefined;
    elective: boolean;
    company_contribution_annual_maximum?: string | null | undefined;
    limit_option?: string | null | undefined;
    catch_up: boolean;
    coverage_amount?: string | null | undefined;
    coverage_salary_multiplier: string;
    deduction_reduces_taxable_income?: string | null | undefined;
    company_contribution: string;
    contribute_as_percentage: boolean;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound;
}
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyToJSON(postV1EmployeesEmployeeIdEmployeeBenefitsRequestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody): string;
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsRequest>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound;
}
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsRequestToJSON(postV1EmployeesEmployeeIdEmployeeBenefitsRequest: PostV1EmployeesEmployeeIdEmployeeBenefitsRequest): string;
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsRequestFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdEmployeeBenefitsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit"?: components.EmployeeBenefit$Outbound | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsResponse>;
    /** @deprecated use `PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound;
}
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsResponseToJSON(postV1EmployeesEmployeeIdEmployeeBenefitsResponse: PostV1EmployeesEmployeeIdEmployeeBenefitsResponse): string;
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidemployeebenefits.d.ts.map