import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's compensation payment method.
 */
export declare const PayrollEmployeeCompensationsTypePaymentMethod: {
    readonly Check: "Check";
    readonly DirectDeposit: "Direct Deposit";
};
/**
 * The employee's compensation payment method.
 */
export type PayrollEmployeeCompensationsTypePaymentMethod = ClosedEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod>;
export type FixedCompensations = {
    /**
     * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
     */
    name?: string | undefined;
    /**
     * The amount of the compensation for the pay period.
     */
    amount?: string | undefined;
    /**
     * The UUID of the job for the compensation.
     */
    jobUuid?: string | undefined;
};
export type HourlyCompensations = {
    /**
     * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
     */
    name?: string | undefined;
    /**
     * The number of hours to be compensated for this pay period.
     */
    hours?: string | undefined;
    /**
     * The amount of the compensation. This field is only available after the payroll is calculated and cannot be used for updating hourly compensations.
     */
    amount?: string | undefined;
    /**
     * The UUID of the job for the compensation.
     */
    jobUuid?: string | undefined;
    /**
     * The amount multiplied by the base rate to calculate total compensation per hour worked.
     */
    compensationMultiplier?: number | undefined;
    /**
     * The FLSA Status of the employee's primary job compensation
     */
    flsaStatus?: string | undefined;
};
export type PayrollEmployeeCompensationsTypePaidTimeOff = {
    /**
     * The name of the PTO. This also serves as the unique, immutable identifier for the PTO.
     */
    name?: string | undefined;
    /**
     * The hours of this PTO taken during the pay period.
     */
    hours?: string | undefined;
    /**
     * The outstanding hours paid upon termination. This field is only applicable for termination payrolls.
     */
    finalPayoutUnusedHoursInput?: string | undefined;
};
export type Benefits = {
    name?: string | undefined;
    employeeDeduction?: number | undefined;
    companyContribution?: number | undefined;
    imputed?: boolean | undefined;
};
export type Deductions = {
    name?: string | undefined;
    amount?: number | undefined;
};
export type Taxes = {
    name: string;
    employer: boolean;
    amount: number;
};
export type PayrollEmployeeCompensationsType = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * This employee will be excluded (skipped) from payroll calculation and will not be paid for the payroll. Cancelling a payroll would reset all employees' excluded back to false.
     */
    excluded?: boolean | undefined;
    /**
     * The current version of this employee compensation. This field is only available for prepared payrolls. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The employee's gross pay, equal to regular wages + cash tips + payroll tips + any other additional earnings, excluding imputed income. This value is only available for processed payrolls.
     */
    grossPay?: number | null | undefined;
    /**
     * The employee's net pay, equal to gross_pay - employee taxes - employee deductions or garnishments - cash tips. This value is only available for processed payrolls.
     */
    netPay?: number | null | undefined;
    /**
     * The employee's check amount, equal to net_pay + reimbursements. This value is only available for processed payrolls.
     */
    checkAmount?: number | null | undefined;
    /**
     * The employee's compensation payment method.
     */
    paymentMethod?: PayrollEmployeeCompensationsTypePaymentMethod | null | undefined;
    /**
     * Custom text that will be printed as a personal note to the employee on a paystub.
     */
    memo?: string | null | undefined;
    /**
     * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements. If this payroll has been processed, only fixed compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active fixed compensations are returned.
     */
    fixedCompensations?: Array<FixedCompensations> | undefined;
    /**
     * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours. If this payroll has been processed, only hourly compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active hourly compensations are returned.
     */
    hourlyCompensations?: Array<HourlyCompensations> | undefined;
    /**
     * An array of all paid time off the employee is eligible for this pay period.
     */
    paidTimeOff?: Array<PayrollEmployeeCompensationsTypePaidTimeOff> | undefined;
    /**
     * An array of employee benefits for the pay period. Benefits are only included for processed payroll when the include parameter is present.
     */
    benefits?: Array<Benefits> | undefined;
    /**
     * An array of employee deductions for the pay period. Deductions are only included for processed payroll when the include parameter is present.
     */
    deductions?: Array<Deductions> | undefined;
    /**
     * An array of employer and employee taxes for the pay period. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
     */
    taxes?: Array<Taxes> | undefined;
};
/** @internal */
export declare const PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod>;
/** @internal */
export declare const PayrollEmployeeCompensationsTypePaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollEmployeeCompensationsTypePaymentMethod$ {
    /** @deprecated use `PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Check: "Check";
        readonly DirectDeposit: "Direct Deposit";
    }>;
    /** @deprecated use `PayrollEmployeeCompensationsTypePaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Check: "Check";
        readonly DirectDeposit: "Direct Deposit";
    }>;
}
/** @internal */
export declare const FixedCompensations$inboundSchema: z.ZodType<FixedCompensations, z.ZodTypeDef, unknown>;
/** @internal */
export type FixedCompensations$Outbound = {
    name?: string | undefined;
    amount?: string | undefined;
    job_uuid?: string | undefined;
};
/** @internal */
export declare const FixedCompensations$outboundSchema: z.ZodType<FixedCompensations$Outbound, z.ZodTypeDef, FixedCompensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FixedCompensations$ {
    /** @deprecated use `FixedCompensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FixedCompensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `FixedCompensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FixedCompensations$Outbound, z.ZodTypeDef, FixedCompensations>;
    /** @deprecated use `FixedCompensations$Outbound` instead. */
    type Outbound = FixedCompensations$Outbound;
}
export declare function fixedCompensationsToJSON(fixedCompensations: FixedCompensations): string;
export declare function fixedCompensationsFromJSON(jsonString: string): SafeParseResult<FixedCompensations, SDKValidationError>;
/** @internal */
export declare const HourlyCompensations$inboundSchema: z.ZodType<HourlyCompensations, z.ZodTypeDef, unknown>;
/** @internal */
export type HourlyCompensations$Outbound = {
    name?: string | undefined;
    hours?: string | undefined;
    amount?: string | undefined;
    job_uuid?: string | undefined;
    compensation_multiplier?: number | undefined;
    flsa_status?: string | undefined;
};
/** @internal */
export declare const HourlyCompensations$outboundSchema: z.ZodType<HourlyCompensations$Outbound, z.ZodTypeDef, HourlyCompensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HourlyCompensations$ {
    /** @deprecated use `HourlyCompensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HourlyCompensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `HourlyCompensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HourlyCompensations$Outbound, z.ZodTypeDef, HourlyCompensations>;
    /** @deprecated use `HourlyCompensations$Outbound` instead. */
    type Outbound = HourlyCompensations$Outbound;
}
export declare function hourlyCompensationsToJSON(hourlyCompensations: HourlyCompensations): string;
export declare function hourlyCompensationsFromJSON(jsonString: string): SafeParseResult<HourlyCompensations, SDKValidationError>;
/** @internal */
export declare const PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema: z.ZodType<PayrollEmployeeCompensationsTypePaidTimeOff, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollEmployeeCompensationsTypePaidTimeOff$Outbound = {
    name?: string | undefined;
    hours?: string | undefined;
    final_payout_unused_hours_input?: string | undefined;
};
/** @internal */
export declare const PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema: z.ZodType<PayrollEmployeeCompensationsTypePaidTimeOff$Outbound, z.ZodTypeDef, PayrollEmployeeCompensationsTypePaidTimeOff>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollEmployeeCompensationsTypePaidTimeOff$ {
    /** @deprecated use `PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollEmployeeCompensationsTypePaidTimeOff, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollEmployeeCompensationsTypePaidTimeOff$Outbound, z.ZodTypeDef, PayrollEmployeeCompensationsTypePaidTimeOff>;
    /** @deprecated use `PayrollEmployeeCompensationsTypePaidTimeOff$Outbound` instead. */
    type Outbound = PayrollEmployeeCompensationsTypePaidTimeOff$Outbound;
}
export declare function payrollEmployeeCompensationsTypePaidTimeOffToJSON(payrollEmployeeCompensationsTypePaidTimeOff: PayrollEmployeeCompensationsTypePaidTimeOff): string;
export declare function payrollEmployeeCompensationsTypePaidTimeOffFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsTypePaidTimeOff, SDKValidationError>;
/** @internal */
export declare const Benefits$inboundSchema: z.ZodType<Benefits, z.ZodTypeDef, unknown>;
/** @internal */
export type Benefits$Outbound = {
    name?: string | undefined;
    employee_deduction?: number | undefined;
    company_contribution?: number | undefined;
    imputed?: boolean | undefined;
};
/** @internal */
export declare const Benefits$outboundSchema: z.ZodType<Benefits$Outbound, z.ZodTypeDef, Benefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Benefits$ {
    /** @deprecated use `Benefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Benefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `Benefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Benefits$Outbound, z.ZodTypeDef, Benefits>;
    /** @deprecated use `Benefits$Outbound` instead. */
    type Outbound = Benefits$Outbound;
}
export declare function benefitsToJSON(benefits: Benefits): string;
export declare function benefitsFromJSON(jsonString: string): SafeParseResult<Benefits, SDKValidationError>;
/** @internal */
export declare const Deductions$inboundSchema: z.ZodType<Deductions, z.ZodTypeDef, unknown>;
/** @internal */
export type Deductions$Outbound = {
    name?: string | undefined;
    amount?: number | undefined;
};
/** @internal */
export declare const Deductions$outboundSchema: z.ZodType<Deductions$Outbound, z.ZodTypeDef, Deductions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Deductions$ {
    /** @deprecated use `Deductions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Deductions, z.ZodTypeDef, unknown>;
    /** @deprecated use `Deductions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Deductions$Outbound, z.ZodTypeDef, Deductions>;
    /** @deprecated use `Deductions$Outbound` instead. */
    type Outbound = Deductions$Outbound;
}
export declare function deductionsToJSON(deductions: Deductions): string;
export declare function deductionsFromJSON(jsonString: string): SafeParseResult<Deductions, SDKValidationError>;
/** @internal */
export declare const Taxes$inboundSchema: z.ZodType<Taxes, z.ZodTypeDef, unknown>;
/** @internal */
export type Taxes$Outbound = {
    name: string;
    employer: boolean;
    amount: number;
};
/** @internal */
export declare const Taxes$outboundSchema: z.ZodType<Taxes$Outbound, z.ZodTypeDef, Taxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Taxes$ {
    /** @deprecated use `Taxes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Taxes, z.ZodTypeDef, unknown>;
    /** @deprecated use `Taxes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Taxes$Outbound, z.ZodTypeDef, Taxes>;
    /** @deprecated use `Taxes$Outbound` instead. */
    type Outbound = Taxes$Outbound;
}
export declare function taxesToJSON(taxes: Taxes): string;
export declare function taxesFromJSON(jsonString: string): SafeParseResult<Taxes, SDKValidationError>;
/** @internal */
export declare const PayrollEmployeeCompensationsType$inboundSchema: z.ZodType<PayrollEmployeeCompensationsType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollEmployeeCompensationsType$Outbound = {
    employee_uuid?: string | undefined;
    excluded?: boolean | undefined;
    version?: string | undefined;
    gross_pay?: number | null | undefined;
    net_pay?: number | null | undefined;
    check_amount?: number | null | undefined;
    payment_method?: string | null | undefined;
    memo?: string | null | undefined;
    fixed_compensations?: Array<FixedCompensations$Outbound> | undefined;
    hourly_compensations?: Array<HourlyCompensations$Outbound> | undefined;
    paid_time_off?: Array<PayrollEmployeeCompensationsTypePaidTimeOff$Outbound> | undefined;
    benefits?: Array<Benefits$Outbound> | undefined;
    deductions?: Array<Deductions$Outbound> | undefined;
    taxes?: Array<Taxes$Outbound> | undefined;
};
/** @internal */
export declare const PayrollEmployeeCompensationsType$outboundSchema: z.ZodType<PayrollEmployeeCompensationsType$Outbound, z.ZodTypeDef, PayrollEmployeeCompensationsType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollEmployeeCompensationsType$ {
    /** @deprecated use `PayrollEmployeeCompensationsType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollEmployeeCompensationsType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollEmployeeCompensationsType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollEmployeeCompensationsType$Outbound, z.ZodTypeDef, PayrollEmployeeCompensationsType>;
    /** @deprecated use `PayrollEmployeeCompensationsType$Outbound` instead. */
    type Outbound = PayrollEmployeeCompensationsType$Outbound;
}
export declare function payrollEmployeeCompensationsTypeToJSON(payrollEmployeeCompensationsType: PayrollEmployeeCompensationsType): string;
export declare function payrollEmployeeCompensationsTypeFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsType, SDKValidationError>;
//# sourceMappingURL=payrollemployeecompensationstype.d.ts.map