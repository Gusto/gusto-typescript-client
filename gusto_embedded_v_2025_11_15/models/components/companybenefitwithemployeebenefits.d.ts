import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A single tier of a tiered matching scheme.
 */
export type CompanyBenefitWithEmployeeBenefitsValueTiers = {
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
export type CompanyBenefitWithEmployeeBenefitsValue2 = {
    tiers?: Array<CompanyBenefitWithEmployeeBenefitsValueTiers> | undefined;
};
/**
 * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.
 *
 * @remarks
 *
 * For the `tiered` contribution type, an array of tiers.
 */
export type CompanyBenefitWithEmployeeBenefitsValue = CompanyBenefitWithEmployeeBenefitsValue2 | string;
/**
 * An object representing the type and value of the company contribution.
 */
export type CompanyBenefitWithEmployeeBenefitsContribution = {
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
    value?: CompanyBenefitWithEmployeeBenefitsValue2 | string | undefined;
};
export type EmployeeBenefits = {
    /**
     * The UUID of the employee to which the benefit belongs.
     */
    employeeUuid?: string | undefined;
    /**
     * The UUID of the company benefit.
     */
    companyBenefitUuid?: string | undefined;
    /**
     * Whether the employee benefit is active.
     */
    active?: boolean | undefined;
    /**
     * Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.
     */
    deductAsPercentage?: boolean | undefined;
    /**
     * The amount to be deducted, per pay period, from the employee's pay.
     */
    employeeDeduction?: string | undefined;
    /**
     * The value of the company contribution
     */
    companyContribution?: string | undefined;
    uuid?: string | undefined;
    /**
     * An object representing the type and value of the company contribution.
     */
    contribution?: CompanyBenefitWithEmployeeBenefitsContribution | undefined;
};
/**
 * The representation of a company benefit.
 */
export type CompanyBenefitWithEmployeeBenefits = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The UUID of the company.
     */
    companyUuid?: string | undefined;
    /**
     * The UUID of the company benefit.
     */
    uuid: string;
    /**
     * The type of the benefit to which the company benefit belongs (same as benefit_id).
     */
    benefitType?: number | undefined;
    /**
     * Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.
     */
    active?: boolean | undefined;
    /**
     * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     */
    description?: string | undefined;
    /**
     * Whether this company benefit can be deleted. Deletable will be set to true if the benefit has not been used in payroll, has no employee benefits associated, and the benefit is not owned by Gusto or a Partner
     */
    deletable?: boolean | undefined;
    /**
     * Whether employee deductions and company contributions can be set as percentages of payroll for an individual employee. This is determined by the type of benefit and is not configurable by the company.
     */
    supportsPercentageAmounts?: boolean | undefined;
    /**
     * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.
     */
    responsibleForEmployerTaxes?: boolean | undefined;
    /**
     * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.
     */
    responsibleForEmployeeW2?: boolean | undefined;
    employeeBenefits?: Array<EmployeeBenefits> | undefined;
};
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsValueTiers$inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValueTiers, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBenefitWithEmployeeBenefitsValueTiers$Outbound = {
    rate?: string | undefined;
    threshold?: string | undefined;
    threshold_delta?: string | undefined;
};
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsValueTiers$outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValueTiers$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsValueTiers>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBenefitWithEmployeeBenefitsValueTiers$ {
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValueTiers$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValueTiers, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValueTiers$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValueTiers$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsValueTiers>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValueTiers$Outbound` instead. */
    type Outbound = CompanyBenefitWithEmployeeBenefitsValueTiers$Outbound;
}
export declare function companyBenefitWithEmployeeBenefitsValueTiersToJSON(companyBenefitWithEmployeeBenefitsValueTiers: CompanyBenefitWithEmployeeBenefitsValueTiers): string;
export declare function companyBenefitWithEmployeeBenefitsValueTiersFromJSON(jsonString: string): SafeParseResult<CompanyBenefitWithEmployeeBenefitsValueTiers, SDKValidationError>;
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsValue2$inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue2, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBenefitWithEmployeeBenefitsValue2$Outbound = {
    tiers?: Array<CompanyBenefitWithEmployeeBenefitsValueTiers$Outbound> | undefined;
};
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsValue2$outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue2$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsValue2>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBenefitWithEmployeeBenefitsValue2$ {
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValue2$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue2, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValue2$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue2$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsValue2>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValue2$Outbound` instead. */
    type Outbound = CompanyBenefitWithEmployeeBenefitsValue2$Outbound;
}
export declare function companyBenefitWithEmployeeBenefitsValue2ToJSON(companyBenefitWithEmployeeBenefitsValue2: CompanyBenefitWithEmployeeBenefitsValue2): string;
export declare function companyBenefitWithEmployeeBenefitsValue2FromJSON(jsonString: string): SafeParseResult<CompanyBenefitWithEmployeeBenefitsValue2, SDKValidationError>;
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsValue$inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBenefitWithEmployeeBenefitsValue$Outbound = CompanyBenefitWithEmployeeBenefitsValue2$Outbound | string;
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsValue$outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBenefitWithEmployeeBenefitsValue$ {
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsValue$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsValue>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsValue$Outbound` instead. */
    type Outbound = CompanyBenefitWithEmployeeBenefitsValue$Outbound;
}
export declare function companyBenefitWithEmployeeBenefitsValueToJSON(companyBenefitWithEmployeeBenefitsValue: CompanyBenefitWithEmployeeBenefitsValue): string;
export declare function companyBenefitWithEmployeeBenefitsValueFromJSON(jsonString: string): SafeParseResult<CompanyBenefitWithEmployeeBenefitsValue, SDKValidationError>;
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsContribution$inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBenefitWithEmployeeBenefitsContribution$Outbound = {
    type?: string | undefined;
    value?: CompanyBenefitWithEmployeeBenefitsValue2$Outbound | string | undefined;
};
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefitsContribution$outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsContribution$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBenefitWithEmployeeBenefitsContribution$ {
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefitsContribution$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefitsContribution>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefitsContribution$Outbound` instead. */
    type Outbound = CompanyBenefitWithEmployeeBenefitsContribution$Outbound;
}
export declare function companyBenefitWithEmployeeBenefitsContributionToJSON(companyBenefitWithEmployeeBenefitsContribution: CompanyBenefitWithEmployeeBenefitsContribution): string;
export declare function companyBenefitWithEmployeeBenefitsContributionFromJSON(jsonString: string): SafeParseResult<CompanyBenefitWithEmployeeBenefitsContribution, SDKValidationError>;
/** @internal */
export declare const EmployeeBenefits$inboundSchema: z.ZodType<EmployeeBenefits, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBenefits$Outbound = {
    employee_uuid?: string | undefined;
    company_benefit_uuid?: string | undefined;
    active: boolean;
    deduct_as_percentage: boolean;
    employee_deduction: string;
    company_contribution?: string | undefined;
    uuid?: string | undefined;
    contribution?: CompanyBenefitWithEmployeeBenefitsContribution$Outbound | undefined;
};
/** @internal */
export declare const EmployeeBenefits$outboundSchema: z.ZodType<EmployeeBenefits$Outbound, z.ZodTypeDef, EmployeeBenefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBenefits$ {
    /** @deprecated use `EmployeeBenefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBenefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBenefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBenefits$Outbound, z.ZodTypeDef, EmployeeBenefits>;
    /** @deprecated use `EmployeeBenefits$Outbound` instead. */
    type Outbound = EmployeeBenefits$Outbound;
}
export declare function employeeBenefitsToJSON(employeeBenefits: EmployeeBenefits): string;
export declare function employeeBenefitsFromJSON(jsonString: string): SafeParseResult<EmployeeBenefits, SDKValidationError>;
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefits$inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefits, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBenefitWithEmployeeBenefits$Outbound = {
    version?: string | undefined;
    company_uuid?: string | undefined;
    uuid: string;
    benefit_type?: number | undefined;
    active: boolean;
    description?: string | undefined;
    deletable?: boolean | undefined;
    supports_percentage_amounts?: boolean | undefined;
    responsible_for_employer_taxes?: boolean | undefined;
    responsible_for_employee_w2?: boolean | undefined;
    employee_benefits?: Array<EmployeeBenefits$Outbound> | undefined;
};
/** @internal */
export declare const CompanyBenefitWithEmployeeBenefits$outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefits$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBenefitWithEmployeeBenefits$ {
    /** @deprecated use `CompanyBenefitWithEmployeeBenefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBenefitWithEmployeeBenefits$Outbound, z.ZodTypeDef, CompanyBenefitWithEmployeeBenefits>;
    /** @deprecated use `CompanyBenefitWithEmployeeBenefits$Outbound` instead. */
    type Outbound = CompanyBenefitWithEmployeeBenefits$Outbound;
}
export declare function companyBenefitWithEmployeeBenefitsToJSON(companyBenefitWithEmployeeBenefits: CompanyBenefitWithEmployeeBenefits): string;
export declare function companyBenefitWithEmployeeBenefitsFromJSON(jsonString: string): SafeParseResult<CompanyBenefitWithEmployeeBenefits, SDKValidationError>;
//# sourceMappingURL=companybenefitwithemployeebenefits.d.ts.map