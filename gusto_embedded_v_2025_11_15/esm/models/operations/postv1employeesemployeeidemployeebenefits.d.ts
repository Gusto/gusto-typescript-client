import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { EmployeeBenefit } from "../components/employeebenefit.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
     * Specifies the upper limit (inclusive) percentage of the employee contribution that this tier applies to.
     *
     * @remarks
     *
     * Use threshold to define each tier's end point, with tiers applied cumulatively from 0% upwards.
     *
     * For example:
     *
     * If the first tier has a threshold of "3", and rate of "100", the company will match 100% of employee contributions from 0% up to and including 3% of payroll.
     *
     * If the next tier has a threshold of "5" and a rate of "50", the company will match 50% of contributions from above 3% up to and including 5% of payroll.
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
    /**
     * The date the employee benefit will start. If not provided, the benefit will be effective from 1970-01-01 (unix epoch).
     */
    effectiveDate?: RFCDate | undefined;
    /**
     * The date the employee benefit will expire. A null value indicates the benefit will not expire.
     */
    expirationDate?: RFCDate | null | undefined;
};
export type PostV1EmployeesEmployeeIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody;
};
export type PostV1EmployeesEmployeeIdEmployeeBenefitsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBenefit?: EmployeeBenefit | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsType$outboundSchema: z.ZodNativeEnum<typeof PostV1EmployeesEmployeeIdEmployeeBenefitsType>;
/** @internal */
export type Two$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
};
/** @internal */
export declare const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two>;
export declare function twoToJSON(two: Two): string;
/** @internal */
export type Value$Outbound = string | Array<Two$Outbound>;
/** @internal */
export declare const Value$outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
export declare function valueToJSON(value: Value): string;
/** @internal */
export type Contribution$Outbound = {
    type?: string | undefined;
    value?: string | Array<Two$Outbound> | undefined;
};
/** @internal */
export declare const Contribution$outboundSchema: z.ZodType<Contribution$Outbound, z.ZodTypeDef, Contribution>;
export declare function contributionToJSON(contribution: Contribution): string;
/** @internal */
export declare const LimitOption$outboundSchema: z.ZodNativeEnum<typeof LimitOption>;
/** @internal */
export declare const DeductionReducesTaxableIncome$outboundSchema: z.ZodNativeEnum<typeof DeductionReducesTaxableIncome>;
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
    effective_date: string;
    expiration_date: string | null;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody>;
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsRequestBodyToJSON(postV1EmployeesEmployeeIdEmployeeBenefitsRequestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody): string;
/** @internal */
export type PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdEmployeeBenefitsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdEmployeeBenefitsRequest>;
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsRequestToJSON(postV1EmployeesEmployeeIdEmployeeBenefitsRequest: PostV1EmployeesEmployeeIdEmployeeBenefitsRequest): string;
/** @internal */
export declare const PostV1EmployeesEmployeeIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
export declare function postV1EmployeesEmployeeIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidemployeebenefits.d.ts.map