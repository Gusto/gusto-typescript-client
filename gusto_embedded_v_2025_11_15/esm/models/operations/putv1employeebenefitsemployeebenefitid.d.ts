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
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdType: {
    readonly Amount: "amount";
    readonly Percentage: "percentage";
    readonly Tiered: "tiered";
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
export type PutV1EmployeeBenefitsEmployeeBenefitIdType = ClosedEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdType>;
/**
 * A single tier of a tiered matching scheme.
 */
export type Value2 = {
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
export type PutV1EmployeeBenefitsEmployeeBenefitIdValue = string | Array<Value2>;
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
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption: {
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
export type PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption = ClosedEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption>;
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome: {
    readonly Unset: "unset";
    readonly ReducesTaxableIncome: "reduces_taxable_income";
    readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
};
/**
 * Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.
 */
export type PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome = ClosedEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome>;
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
     * The date the employee benefit will start.
     */
    effectiveDate?: RFCDate | undefined;
    /**
     * The date the employee benefit will expire. A null value indicates the benefit will not expire.
     */
    expirationDate?: RFCDate | null | undefined;
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
    limitOption?: PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption | null | undefined;
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
    deductionReducesTaxableIncome?: PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome | null | undefined;
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody;
};
export type PutV1EmployeeBenefitsEmployeeBenefitIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBenefit?: EmployeeBenefit | undefined;
};
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdType>;
/** @internal */
export type Value2$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
};
/** @internal */
export declare const Value2$outboundSchema: z.ZodType<Value2$Outbound, z.ZodTypeDef, Value2>;
export declare function value2ToJSON(value2: Value2): string;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound = string | Array<Value2$Outbound>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdValue>;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdValueToJSON(putV1EmployeeBenefitsEmployeeBenefitIdValue: PutV1EmployeeBenefitsEmployeeBenefitIdValue): string;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound = {
    type?: string | undefined;
    value?: string | Array<Value2$Outbound> | undefined;
};
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdContribution>;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdContributionToJSON(putV1EmployeeBenefitsEmployeeBenefitIdContribution: PutV1EmployeeBenefitsEmployeeBenefitIdContribution): string;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome>;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound = {
    version: string;
    active?: boolean | undefined;
    employee_deduction: string;
    deduct_as_percentage?: boolean | undefined;
    employee_deduction_annual_maximum?: string | null | undefined;
    effective_date?: string | undefined;
    expiration_date?: string | null | undefined;
    contribution?: PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound | undefined;
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
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody>;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdRequestBodyToJSON(putV1EmployeeBenefitsEmployeeBenefitIdRequestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody): string;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
    employee_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdRequest>;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(putV1EmployeeBenefitsEmployeeBenefitIdRequest: PutV1EmployeeBenefitsEmployeeBenefitIdRequest): string;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeBenefitsEmployeeBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeebenefitsemployeebenefitid.d.ts.map