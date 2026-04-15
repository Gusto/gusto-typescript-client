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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody;
};
export type PutV1EmployeeBenefitsEmployeeBenefitIdResponse = {
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
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdType>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdType$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Amount: "amount";
        readonly Percentage: "percentage";
        readonly Tiered: "tiered";
    }>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Amount: "amount";
        readonly Percentage: "percentage";
        readonly Tiered: "tiered";
    }>;
}
/** @internal */
export declare const Value2$inboundSchema: z.ZodType<Value2, z.ZodTypeDef, unknown>;
/** @internal */
export type Value2$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
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
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdValue$inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdValue, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound = string | Array<Value2$Outbound>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdValue$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdValue>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound` instead. */
    type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdValue$Outbound;
}
export declare function putV1EmployeeBenefitsEmployeeBenefitIdValueToJSON(putV1EmployeeBenefitsEmployeeBenefitIdValue: PutV1EmployeeBenefitsEmployeeBenefitIdValue): string;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdValueFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeBenefitsEmployeeBenefitIdValue, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound = {
    type?: string | undefined;
    value?: string | Array<Value2$Outbound> | undefined;
};
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdContribution$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdContribution>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound` instead. */
    type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdContribution$Outbound;
}
export declare function putV1EmployeeBenefitsEmployeeBenefitIdContributionToJSON(putV1EmployeeBenefitsEmployeeBenefitIdContribution: PutV1EmployeeBenefitsEmployeeBenefitIdContribution): string;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdContributionFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeBenefitsEmployeeBenefitIdContribution, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Family: "Family";
        readonly Individual: "Individual";
        readonly JointFilingOrSingle: "Joint Filing or Single";
        readonly MarriedAndFilingSeparately: "Married and Filing Separately";
    }>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdLimitOption$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Family: "Family";
        readonly Individual: "Individual";
        readonly JointFilingOrSingle: "Joint Filing or Single";
        readonly MarriedAndFilingSeparately: "Married and Filing Separately";
    }>;
}
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unset: "unset";
        readonly ReducesTaxableIncome: "reduces_taxable_income";
        readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
    }>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdDeductionReducesTaxableIncome$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unset: "unset";
        readonly ReducesTaxableIncome: "reduces_taxable_income";
        readonly DoesNotReduceTaxableIncome: "does_not_reduce_taxable_income";
    }>;
}
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound = {
    version: string;
    active?: boolean | undefined;
    employee_deduction: string;
    deduct_as_percentage?: boolean | undefined;
    employee_deduction_annual_maximum?: string | null | undefined;
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
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound;
}
export declare function putV1EmployeeBenefitsEmployeeBenefitIdRequestBodyToJSON(putV1EmployeeBenefitsEmployeeBenefitIdRequestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody): string;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
    employee_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeeBenefitsEmployeeBenefitIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdRequest$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdRequest>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound` instead. */
    type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound;
}
export declare function putV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(putV1EmployeeBenefitsEmployeeBenefitIdRequest: PutV1EmployeeBenefitsEmployeeBenefitIdRequest): string;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeBenefitsEmployeeBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit"?: components.EmployeeBenefit$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeeBenefitsEmployeeBenefitIdResponse$outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeBenefitsEmployeeBenefitIdResponse$ {
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound, z.ZodTypeDef, PutV1EmployeeBenefitsEmployeeBenefitIdResponse>;
    /** @deprecated use `PutV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound` instead. */
    type Outbound = PutV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound;
}
export declare function putV1EmployeeBenefitsEmployeeBenefitIdResponseToJSON(putV1EmployeeBenefitsEmployeeBenefitIdResponse: PutV1EmployeeBenefitsEmployeeBenefitIdResponse): string;
export declare function putV1EmployeeBenefitsEmployeeBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeBenefitsEmployeeBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeebenefitsemployeebenefitid.d.ts.map