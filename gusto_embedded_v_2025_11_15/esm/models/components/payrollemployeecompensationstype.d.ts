import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
 */
export declare const PayrollEmployeeCompensationsTypePaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly Historical: "Historical";
};
/**
 * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
 */
export type PayrollEmployeeCompensationsTypePaymentMethod = ClosedEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod>;
export type PayrollEmployeeCompensationsTypeFixedCompensations = {
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
export type PayrollEmployeeCompensationsTypeHourlyCompensations = {
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
    finalPayoutUnusedHoursInput?: string | null | undefined;
};
export type PayrollEmployeeCompensationsTypeReimbursements = {
    /**
     * The dollar amount of the reimbursement for the pay period.
     */
    amount: string;
    /**
     * The description of the reimbursement. Null for unnamed reimbursements.
     */
    description: string | null;
    /**
     * The UUID of the reimbursement. Null for unnamed reimbursements. This field is only available for unprocessed payrolls.
     */
    uuid?: string | null | undefined;
    /**
     * Whether the reimbursement is recurring. This field is only available for unprocessed payrolls.
     */
    recurring?: boolean | undefined;
};
/**
 * The amount type of the deduction for the pay period. Only present for calculated or processed payrolls.
 */
export declare const AmountType: {
    readonly Fixed: "fixed";
    readonly Percent: "percent";
};
/**
 * The amount type of the deduction for the pay period. Only present for calculated or processed payrolls.
 */
export type AmountType = ClosedEnum<typeof AmountType>;
export type Deductions = {
    /**
     * The name of the deduction.
     */
    name?: string | undefined;
    /**
     * The amount of the deduction for the pay period.
     */
    amount?: number | undefined;
    /**
     * The amount type of the deduction for the pay period. Only present for calculated or processed payrolls.
     */
    amountType?: AmountType | undefined;
    /**
     * The UUID of the deduction. Only present for calculated or processed payrolls.
     */
    uuid?: string | undefined;
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
     * The first name of the employee. Requires `employees:read` scope.
     */
    firstName?: string | null | undefined;
    /**
     * The preferred first name of the employee. Requires `employees:read` scope.
     */
    preferredFirstName?: string | null | undefined;
    /**
     * The last name of the employee. Requires `employees:read` scope.
     */
    lastName?: string | null | undefined;
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
     * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
     */
    paymentMethod?: PayrollEmployeeCompensationsTypePaymentMethod | null | undefined;
    /**
     * Custom text that will be printed as a personal note to the employee on a paystub.
     */
    memo?: string | null | undefined;
    /**
     * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements. If this payroll has been processed, only fixed compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active fixed compensations are returned.
     */
    fixedCompensations?: Array<PayrollEmployeeCompensationsTypeFixedCompensations> | undefined;
    /**
     * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours. If this payroll has been processed, only hourly compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active hourly compensations are returned.
     */
    hourlyCompensations?: Array<PayrollEmployeeCompensationsTypeHourlyCompensations> | undefined;
    /**
     * An array of all paid time off the employee is eligible for this pay period.
     */
    paidTimeOff?: Array<PayrollEmployeeCompensationsTypePaidTimeOff> | undefined;
    /**
     * An array of reimbursements for the employee.
     */
    reimbursements?: Array<PayrollEmployeeCompensationsTypeReimbursements> | undefined;
    /**
     * The current version of this employee compensation. This field is only available for prepared payrolls. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: any | undefined;
    /**
     * An array of deductions for the employee. This field is included by default for regular payrolls in version `v2025-06-15` and later.
     */
    deductions?: Array<Deductions> | undefined;
};
/** @internal */
export declare const PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod>;
/** @internal */
export declare const PayrollEmployeeCompensationsTypeFixedCompensations$inboundSchema: z.ZodType<PayrollEmployeeCompensationsTypeFixedCompensations, z.ZodTypeDef, unknown>;
export declare function payrollEmployeeCompensationsTypeFixedCompensationsFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsTypeFixedCompensations, SDKValidationError>;
/** @internal */
export declare const PayrollEmployeeCompensationsTypeHourlyCompensations$inboundSchema: z.ZodType<PayrollEmployeeCompensationsTypeHourlyCompensations, z.ZodTypeDef, unknown>;
export declare function payrollEmployeeCompensationsTypeHourlyCompensationsFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsTypeHourlyCompensations, SDKValidationError>;
/** @internal */
export declare const PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema: z.ZodType<PayrollEmployeeCompensationsTypePaidTimeOff, z.ZodTypeDef, unknown>;
export declare function payrollEmployeeCompensationsTypePaidTimeOffFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsTypePaidTimeOff, SDKValidationError>;
/** @internal */
export declare const PayrollEmployeeCompensationsTypeReimbursements$inboundSchema: z.ZodType<PayrollEmployeeCompensationsTypeReimbursements, z.ZodTypeDef, unknown>;
export declare function payrollEmployeeCompensationsTypeReimbursementsFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsTypeReimbursements, SDKValidationError>;
/** @internal */
export declare const AmountType$inboundSchema: z.ZodNativeEnum<typeof AmountType>;
/** @internal */
export declare const Deductions$inboundSchema: z.ZodType<Deductions, z.ZodTypeDef, unknown>;
export declare function deductionsFromJSON(jsonString: string): SafeParseResult<Deductions, SDKValidationError>;
/** @internal */
export declare const PayrollEmployeeCompensationsType$inboundSchema: z.ZodType<PayrollEmployeeCompensationsType, z.ZodTypeDef, unknown>;
export declare function payrollEmployeeCompensationsTypeFromJSON(jsonString: string): SafeParseResult<PayrollEmployeeCompensationsType, SDKValidationError>;
//# sourceMappingURL=payrollemployeecompensationstype.d.ts.map