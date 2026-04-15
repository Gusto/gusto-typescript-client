import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitSummaryPayPeriod = {
    /**
     * The beginning of the payroll's pay period.
     */
    startDate?: string | null | undefined;
    /**
     * The end of the payroll's pay period.
     */
    endDate?: string | null | undefined;
};
export type PayrollBenefits = {
    payrollUuid?: string | undefined;
    /**
     * Whether it is regular or bonus payroll
     */
    payrollType?: string | undefined;
    /**
     * Check date of this payroll.
     */
    checkDate?: string | undefined;
    /**
     * Gross pay for this employee on the payroll.
     */
    grossPay?: string | undefined;
    /**
     * Total imputed pay for this employee on the payroll.
     */
    imputedPay?: string | undefined;
    /**
     * The employee benefit deduction amount for this employee on the payroll.
     */
    companyBenefitDeduction?: string | undefined;
    /**
     * The company contribution amount for this employee on the payroll.
     */
    companyBenefitContribution?: string | undefined;
    payPeriod?: BenefitSummaryPayPeriod | undefined;
};
export type BenefitSummaryEmployees = {
    /**
     * The UUID of the employee
     */
    uuid?: string | undefined;
    /**
     * The sum of employee deduction for this employee given the period of time and the specific company benefit.
     */
    companyBenefitDeduction?: string | undefined;
    /**
     * The sum of company contribution for this employee given the period of time and the specific company benefit.
     */
    companyBenefitContribution?: string | undefined;
    /**
     * The sum of employee benefit deduction for this employee given the period of time and the benefit type.
     */
    benefitDeduction?: string | undefined;
    /**
     * The sum of company contribution for this employee given the period of time and the benefit type.
     */
    benefitContribution?: string | undefined;
    /**
     * Gross pay for this employee given the period of time.
     */
    grossPay?: string | undefined;
    /**
     * Total imputed pay for this employee given the period of time (not scoped to a benefit type).
     */
    imputedPay?: string | undefined;
    payrollBenefits?: PayrollBenefits | undefined;
};
/**
 * Benefit summary response
 */
export type BenefitSummary = {
    /**
     * The start date of benefit summary.
     */
    startDate?: string | undefined;
    /**
     * The end date of benefit summary.
     */
    endDate?: string | undefined;
    /**
     * Description of the benefit.
     */
    description?: string | undefined;
    /**
     * The aggregate of employee deduction for all employees given the period of time and the specific company benefit.
     */
    companyBenefitDeduction?: string | undefined;
    /**
     * The aggregate of company contribution for all employees given the period of time and the specific company benefit.
     */
    companyBenefitContribution?: string | undefined;
    employees?: BenefitSummaryEmployees | undefined;
};
/** @internal */
export declare const BenefitSummaryPayPeriod$inboundSchema: z.ZodType<BenefitSummaryPayPeriod, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitSummaryPayPeriod$Outbound = {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
};
/** @internal */
export declare const BenefitSummaryPayPeriod$outboundSchema: z.ZodType<BenefitSummaryPayPeriod$Outbound, z.ZodTypeDef, BenefitSummaryPayPeriod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitSummaryPayPeriod$ {
    /** @deprecated use `BenefitSummaryPayPeriod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitSummaryPayPeriod, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitSummaryPayPeriod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitSummaryPayPeriod$Outbound, z.ZodTypeDef, BenefitSummaryPayPeriod>;
    /** @deprecated use `BenefitSummaryPayPeriod$Outbound` instead. */
    type Outbound = BenefitSummaryPayPeriod$Outbound;
}
export declare function benefitSummaryPayPeriodToJSON(benefitSummaryPayPeriod: BenefitSummaryPayPeriod): string;
export declare function benefitSummaryPayPeriodFromJSON(jsonString: string): SafeParseResult<BenefitSummaryPayPeriod, SDKValidationError>;
/** @internal */
export declare const PayrollBenefits$inboundSchema: z.ZodType<PayrollBenefits, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollBenefits$Outbound = {
    payroll_uuid?: string | undefined;
    payroll_type?: string | undefined;
    check_date?: string | undefined;
    gross_pay?: string | undefined;
    imputed_pay?: string | undefined;
    company_benefit_deduction?: string | undefined;
    company_benefit_contribution?: string | undefined;
    pay_period?: BenefitSummaryPayPeriod$Outbound | undefined;
};
/** @internal */
export declare const PayrollBenefits$outboundSchema: z.ZodType<PayrollBenefits$Outbound, z.ZodTypeDef, PayrollBenefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollBenefits$ {
    /** @deprecated use `PayrollBenefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollBenefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollBenefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollBenefits$Outbound, z.ZodTypeDef, PayrollBenefits>;
    /** @deprecated use `PayrollBenefits$Outbound` instead. */
    type Outbound = PayrollBenefits$Outbound;
}
export declare function payrollBenefitsToJSON(payrollBenefits: PayrollBenefits): string;
export declare function payrollBenefitsFromJSON(jsonString: string): SafeParseResult<PayrollBenefits, SDKValidationError>;
/** @internal */
export declare const BenefitSummaryEmployees$inboundSchema: z.ZodType<BenefitSummaryEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitSummaryEmployees$Outbound = {
    uuid?: string | undefined;
    company_benefit_deduction?: string | undefined;
    company_benefit_contribution?: string | undefined;
    benefit_deduction?: string | undefined;
    benefit_contribution?: string | undefined;
    gross_pay?: string | undefined;
    imputed_pay?: string | undefined;
    payroll_benefits?: PayrollBenefits$Outbound | undefined;
};
/** @internal */
export declare const BenefitSummaryEmployees$outboundSchema: z.ZodType<BenefitSummaryEmployees$Outbound, z.ZodTypeDef, BenefitSummaryEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitSummaryEmployees$ {
    /** @deprecated use `BenefitSummaryEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitSummaryEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitSummaryEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitSummaryEmployees$Outbound, z.ZodTypeDef, BenefitSummaryEmployees>;
    /** @deprecated use `BenefitSummaryEmployees$Outbound` instead. */
    type Outbound = BenefitSummaryEmployees$Outbound;
}
export declare function benefitSummaryEmployeesToJSON(benefitSummaryEmployees: BenefitSummaryEmployees): string;
export declare function benefitSummaryEmployeesFromJSON(jsonString: string): SafeParseResult<BenefitSummaryEmployees, SDKValidationError>;
/** @internal */
export declare const BenefitSummary$inboundSchema: z.ZodType<BenefitSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitSummary$Outbound = {
    start_date?: string | undefined;
    end_date?: string | undefined;
    description?: string | undefined;
    company_benefit_deduction?: string | undefined;
    company_benefit_contribution?: string | undefined;
    employees?: BenefitSummaryEmployees$Outbound | undefined;
};
/** @internal */
export declare const BenefitSummary$outboundSchema: z.ZodType<BenefitSummary$Outbound, z.ZodTypeDef, BenefitSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitSummary$ {
    /** @deprecated use `BenefitSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitSummary$Outbound, z.ZodTypeDef, BenefitSummary>;
    /** @deprecated use `BenefitSummary$Outbound` instead. */
    type Outbound = BenefitSummary$Outbound;
}
export declare function benefitSummaryToJSON(benefitSummary: BenefitSummary): string;
export declare function benefitSummaryFromJSON(jsonString: string): SafeParseResult<BenefitSummary, SDKValidationError>;
//# sourceMappingURL=benefitsummary.d.ts.map