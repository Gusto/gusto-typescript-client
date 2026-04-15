import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PayrollCompanyTaxesType } from "./payrollcompanytaxestype.js";
import { PayrollCreditBlockerType } from "./payrollcreditblockertype.js";
import { PayrollEmployeeCompensationsType } from "./payrollemployeecompensationstype.js";
import { PayrollFixedCompensationTypesType } from "./payrollfixedcompensationtypestype.js";
import { PayrollPaymentSpeedChangedType } from "./payrollpaymentspeedchangedtype.js";
import { PayrollPayPeriodType } from "./payrollpayperiodtype.js";
import { PayrollPayrollStatusMetaType } from "./payrollpayrollstatusmetatype.js";
import { PayrollProcessingRequest } from "./payrollprocessingrequest.js";
import { PayrollSubmissionBlockerType } from "./payrollsubmissionblockertype.js";
import { PayrollTaxesType } from "./payrolltaxestype.js";
import { PayrollTotalsType } from "./payrolltotalstype.js";
import { PayrollUnprocessedEmployeeCompensationsType } from "./payrollunprocessedemployeecompensationstype.js";
import { PayrollWithholdingPayPeriodType } from "./payrollwithholdingpayperiodtype.js";
export declare const OffCycleReasonType: {
    readonly Adhoc: "Adhoc";
    readonly BenefitReversal: "Benefit reversal";
    readonly Bonus: "Bonus";
    readonly Correction: "Correction";
    readonly DismissedEmployee: "Dismissed employee";
    readonly HiredEmployee: "Hired employee";
    readonly WageCorrection: "Wage correction";
    readonly TaxReconciliation: "Tax reconciliation";
    readonly Reversal: "Reversal";
    readonly DisabilityInsuranceDistribution: "Disability insurance distribution";
    readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
};
export type OffCycleReasonType = ClosedEnum<typeof OffCycleReasonType>;
export type Payroll = {
    /**
     * A timestamp that is the deadline for the payroll to be run in order for employees to be paid on time.  If payroll has not been run by the deadline, a prepare request will update both the check date and deadline to reflect the soonest employees can be paid and the deadline by which the payroll must be run in order for said check date to be met.
     */
    payrollDeadline?: Date | undefined;
    /**
     * The date on which employees will be paid for the payroll.
     */
    checkDate?: string | undefined;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     */
    processed?: boolean | undefined;
    /**
     * The date at which the payroll was processed. Null if the payroll isn't processed yet.
     */
    processedDate?: string | null | undefined;
    /**
     * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
     */
    calculatedAt?: Date | null | undefined;
    /**
     * The UUID of the payroll.
     */
    uuid?: string | undefined;
    /**
     * The UUID of the payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The UUID of the company for the payroll.
     */
    companyUuid?: string | undefined;
    /**
     * Indicates whether the payroll is an off-cycle payroll
     */
    offCycle?: boolean | undefined;
    /**
     * The off-cycle reason. Only included for off-cycle payrolls.
     */
    offCycleReason?: OffCycleReasonType | null | undefined;
    /**
     * Indicates whether the payroll has automatic payroll enabled
     */
    autoPayroll?: boolean | undefined;
    /**
     * Indicates whether the payroll is an external payroll
     */
    external?: boolean | undefined;
    /**
     * Indicates whether the payroll is the final payroll for a terminated employee. Only included for off-cycle payrolls.
     */
    finalTerminationPayroll?: boolean | undefined;
    /**
     * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
     */
    withholdingPayPeriod?: PayrollWithholdingPayPeriodType | undefined;
    /**
     * Block regular deductions and contributions for this payroll.  Only included for off-cycle payrolls.
     */
    skipRegularDeductions?: boolean | null | undefined;
    /**
     * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages. Only included for off-cycle payrolls.
     */
    fixedWithholdingRate?: boolean | null | undefined;
    payPeriod?: PayrollPayPeriodType | undefined;
    /**
     * Information about the payroll's status and expected dates
     */
    payrollStatusMeta?: PayrollPayrollStatusMetaType | undefined;
    /**
     * The subtotals for the payroll.
     */
    totals?: PayrollTotalsType | undefined;
    /**
     * An array of taxes applicable to this payroll in addition to taxes included in `employee_compensations`. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
     */
    companyTaxes?: Array<PayrollCompanyTaxesType> | undefined;
    /**
     * An array of tax totals applicable to this payroll. Only included for processed or calculated payrolls when `payroll_taxes` is present in the `include` parameter.
     */
    payrollTaxes?: Array<PayrollTaxesType> | undefined;
    /**
     * Only applicable when a payroll is moved to four day processing instead of fast ach.
     */
    paymentSpeedChanged?: PayrollPaymentSpeedChangedType | undefined;
    /**
     * Datetime for when the resource was created.
     */
    createdAt?: Date | undefined;
    /**
     * Only included for processed or calculated payrolls
     */
    submissionBlockers?: Array<PayrollSubmissionBlockerType> | undefined;
    /**
     * Only included for processed payrolls
     */
    creditBlockers?: Array<PayrollCreditBlockerType> | undefined;
    processingRequest?: PayrollProcessingRequest | null | undefined;
    /**
     * Will money movement for the payroll be performed by the partner rather than by Gusto?
     */
    partnerOwnedDisbursement?: boolean | null | undefined;
};
/**
 * An unprocessed payroll with employee compensations.
 */
export type PayrollUnprocessed = {
    /**
     * A timestamp that is the deadline for the payroll to be run in order for employees to be paid on time.  If payroll has not been run by the deadline, a prepare request will update both the check date and deadline to reflect the soonest employees can be paid and the deadline by which the payroll must be run in order for said check date to be met.
     */
    payrollDeadline?: Date | undefined;
    /**
     * The date on which employees will be paid for the payroll.
     */
    checkDate?: string | undefined;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     */
    processed?: boolean | undefined;
    /**
     * The date at which the payroll was processed. Null if the payroll isn't processed yet.
     */
    processedDate?: string | null | undefined;
    /**
     * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
     */
    calculatedAt?: Date | null | undefined;
    /**
     * The UUID of the payroll.
     */
    uuid?: string | undefined;
    /**
     * The UUID of the payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The UUID of the company for the payroll.
     */
    companyUuid?: string | undefined;
    /**
     * Indicates whether the payroll is an off-cycle payroll
     */
    offCycle?: boolean | undefined;
    /**
     * The off-cycle reason. Only included for off-cycle payrolls.
     */
    offCycleReason?: OffCycleReasonType | null | undefined;
    /**
     * Indicates whether the payroll has automatic payroll enabled
     */
    autoPilot?: boolean | undefined;
    /**
     * Indicates whether the payroll is an external payroll
     */
    external?: boolean | undefined;
    /**
     * Indicates whether the payroll is the final payroll for a terminated employee. Only included for off-cycle payrolls.
     */
    finalTerminationPayroll?: boolean | undefined;
    /**
     * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
     */
    withholdingPayPeriod?: PayrollWithholdingPayPeriodType | undefined;
    /**
     * Block regular deductions and contributions for this payroll.  Only included for off-cycle payrolls.
     */
    skipRegularDeductions?: boolean | null | undefined;
    /**
     * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages. Only included for off-cycle payrolls.
     */
    fixedWithholdingRate?: boolean | null | undefined;
    payPeriod?: PayrollPayPeriodType | undefined;
    /**
     * Information about the payroll's status and expected dates
     */
    payrollStatusMeta?: PayrollPayrollStatusMetaType | undefined;
    employeeCompensations?: Array<PayrollUnprocessedEmployeeCompensationsType> | undefined;
    /**
     * Only applicable when a payroll is moved to four day processing instead of fast ach.
     */
    paymentSpeedChanged?: PayrollPaymentSpeedChangedType | undefined;
    /**
     * Datetime for when the resource was created.
     */
    createdAt?: Date | undefined;
    fixedCompensationTypes?: Array<PayrollFixedCompensationTypesType> | undefined;
    processingRequest?: PayrollProcessingRequest | null | undefined;
    /**
     * Will money movement for the payroll be performed by the partner rather than by Gusto?
     */
    partnerOwnedDisbursement?: boolean | null | undefined;
};
/**
 * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
 */
export declare const PayrollShowPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly Historical: "Historical";
};
/**
 * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
 */
export type PayrollShowPaymentMethod = ClosedEnum<typeof PayrollShowPaymentMethod>;
export type PayrollShowFixedCompensations = {
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
export type PayrollShowHourlyCompensations = {
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
export type PayrollShowPaidTimeOff = {
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
export type PayrollShowReimbursements = {
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
export declare const PayrollShowAmountType: {
    readonly Fixed: "fixed";
    readonly Percent: "percent";
};
/**
 * The amount type of the deduction for the pay period. Only present for calculated or processed payrolls.
 */
export type PayrollShowAmountType = ClosedEnum<typeof PayrollShowAmountType>;
export type PayrollShowDeductions = {
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
    amountType?: PayrollShowAmountType | undefined;
    /**
     * The UUID of the deduction. Only present for calculated or processed payrolls.
     */
    uuid?: string | undefined;
};
export type PayrollShowTaxes = {
    name: string;
    employer: boolean;
    amount: number;
};
export type PayrollShowBenefits = {
    name?: string | undefined;
    employeeDeduction?: number | undefined;
    companyContribution?: number | undefined;
    imputed?: boolean | undefined;
};
export type EmployeeCompensations = {
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
    paymentMethod?: PayrollShowPaymentMethod | null | undefined;
    /**
     * Custom text that will be printed as a personal note to the employee on a paystub.
     */
    memo?: string | null | undefined;
    /**
     * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements. If this payroll has been processed, only fixed compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active fixed compensations are returned.
     */
    fixedCompensations?: Array<PayrollShowFixedCompensations> | undefined;
    /**
     * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours. If this payroll has been processed, only hourly compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active hourly compensations are returned.
     */
    hourlyCompensations?: Array<PayrollShowHourlyCompensations> | undefined;
    /**
     * An array of all paid time off the employee is eligible for this pay period.
     */
    paidTimeOff?: Array<PayrollShowPaidTimeOff> | undefined;
    /**
     * An array of reimbursements for the employee.
     */
    reimbursements?: Array<PayrollShowReimbursements> | undefined;
    /**
     * The current version of this employee compensation. This field is only available for prepared payrolls. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: any | undefined;
    /**
     * An array of employee deductions for the pay period. Only included when `deductions` is present in the `include` parameter.
     */
    deductions?: Array<PayrollShowDeductions> | undefined;
    /**
     * An array of employer and employee taxes for the pay period. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
     */
    taxes?: Array<PayrollShowTaxes> | undefined;
    /**
     * An array of employee benefits for the pay period. Benefits are only included for processed payroll when the include parameter is present.
     */
    benefits?: Array<PayrollShowBenefits> | undefined;
    additionalProperties?: {
        [k: string]: any;
    } | undefined;
};
export type PayrollShow = {
    /**
     * A timestamp that is the deadline for the payroll to be run in order for employees to be paid on time.  If payroll has not been run by the deadline, a prepare request will update both the check date and deadline to reflect the soonest employees can be paid and the deadline by which the payroll must be run in order for said check date to be met.
     */
    payrollDeadline?: Date | undefined;
    /**
     * The date on which employees will be paid for the payroll.
     */
    checkDate?: string | undefined;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     */
    processed?: boolean | undefined;
    /**
     * The date at which the payroll was processed. Null if the payroll isn't processed yet.
     */
    processedDate?: string | null | undefined;
    /**
     * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
     */
    calculatedAt?: Date | null | undefined;
    /**
     * The UUID of the payroll.
     */
    uuid?: string | undefined;
    /**
     * The UUID of the payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The UUID of the company for the payroll.
     */
    companyUuid?: string | undefined;
    /**
     * Indicates whether the payroll is an off-cycle payroll
     */
    offCycle?: boolean | undefined;
    /**
     * The off-cycle reason. Only included for off-cycle payrolls.
     */
    offCycleReason?: OffCycleReasonType | null | undefined;
    /**
     * Indicates whether the payroll has automatic payroll enabled
     */
    autoPayroll?: boolean | undefined;
    /**
     * Indicates whether the payroll is an external payroll
     */
    external?: boolean | undefined;
    /**
     * Indicates whether the payroll is the final payroll for a terminated employee. Only included for off-cycle payrolls.
     */
    finalTerminationPayroll?: boolean | undefined;
    /**
     * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
     */
    withholdingPayPeriod?: PayrollWithholdingPayPeriodType | undefined;
    /**
     * Block regular deductions and contributions for this payroll.  Only included for off-cycle payrolls.
     */
    skipRegularDeductions?: boolean | null | undefined;
    /**
     * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages. Only included for off-cycle payrolls.
     */
    fixedWithholdingRate?: boolean | null | undefined;
    payPeriod?: PayrollPayPeriodType | undefined;
    /**
     * Information about the payroll's status and expected dates
     */
    payrollStatusMeta?: PayrollPayrollStatusMetaType | undefined;
    /**
     * The subtotals for the payroll.
     */
    totals?: PayrollTotalsType | undefined;
    /**
     * An array of taxes applicable to this payroll in addition to taxes included in `employee_compensations`. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
     */
    companyTaxes?: Array<PayrollCompanyTaxesType> | undefined;
    /**
     * An array of tax totals applicable to this payroll. Only included for processed or calculated payrolls when `payroll_taxes` is present in the `include` parameter.
     */
    payrollTaxes?: Array<PayrollTaxesType> | undefined;
    /**
     * Only applicable when a payroll is moved to four day processing instead of fast ach.
     */
    paymentSpeedChanged?: PayrollPaymentSpeedChangedType | undefined;
    /**
     * Datetime for when the resource was created.
     */
    createdAt?: Date | undefined;
    /**
     * Only included for processed or calculated payrolls
     */
    submissionBlockers?: Array<PayrollSubmissionBlockerType> | undefined;
    /**
     * Only included for processed payrolls
     */
    creditBlockers?: Array<PayrollCreditBlockerType> | undefined;
    processingRequest?: PayrollProcessingRequest | null | undefined;
    /**
     * Will money movement for the payroll be performed by the partner rather than by Gusto?
     */
    partnerOwnedDisbursement?: boolean | null | undefined;
    employeeCompensations?: Array<EmployeeCompensations> | undefined;
};
/**
 * The response from preparing a payroll for update. Contains refreshed employee compensations, updated payroll dates, and version information needed for subsequent payroll updates.
 */
export type PayrollPrepared = {
    /**
     * A timestamp that is the deadline for the payroll to be run in order for employees to be paid on time.  If payroll has not been run by the deadline, a prepare request will update both the check date and deadline to reflect the soonest employees can be paid and the deadline by which the payroll must be run in order for said check date to be met.
     */
    payrollDeadline?: Date | undefined;
    /**
     * The date on which employees will be paid for the payroll.
     */
    checkDate?: string | undefined;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     */
    processed?: boolean | undefined;
    /**
     * The date at which the payroll was processed. Null if the payroll isn't processed yet.
     */
    processedDate?: string | null | undefined;
    /**
     * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
     */
    calculatedAt?: Date | null | undefined;
    /**
     * The UUID of the payroll.
     */
    uuid?: string | undefined;
    /**
     * The UUID of the payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The UUID of the company for the payroll.
     */
    companyUuid?: string | undefined;
    /**
     * Indicates whether the payroll is an off-cycle payroll
     */
    offCycle?: boolean | undefined;
    /**
     * The off-cycle reason. Only included for off-cycle payrolls.
     */
    offCycleReason?: OffCycleReasonType | null | undefined;
    /**
     * Indicates whether the payroll has automatic payroll enabled
     */
    autoPayroll?: boolean | undefined;
    /**
     * Indicates whether the payroll is an external payroll
     */
    external?: boolean | undefined;
    /**
     * Indicates whether the payroll is the final payroll for a terminated employee. Only included for off-cycle payrolls.
     */
    finalTerminationPayroll?: boolean | undefined;
    /**
     * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
     */
    withholdingPayPeriod?: PayrollWithholdingPayPeriodType | undefined;
    /**
     * Block regular deductions and contributions for this payroll.  Only included for off-cycle payrolls.
     */
    skipRegularDeductions?: boolean | null | undefined;
    /**
     * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages. Only included for off-cycle payrolls.
     */
    fixedWithholdingRate?: boolean | null | undefined;
    payPeriod?: PayrollPayPeriodType | undefined;
    /**
     * Information about the payroll's status and expected dates
     */
    payrollStatusMeta?: PayrollPayrollStatusMetaType | undefined;
    employeeCompensations?: Array<PayrollEmployeeCompensationsType> | undefined;
    /**
     * Only applicable when a payroll is moved to four day processing instead of fast ach.
     */
    paymentSpeedChanged?: PayrollPaymentSpeedChangedType | undefined;
    /**
     * Datetime for when the resource was created.
     */
    createdAt?: Date | undefined;
    fixedCompensationTypes?: Array<PayrollFixedCompensationTypesType> | undefined;
    processingRequest?: PayrollProcessingRequest | null | undefined;
    /**
     * Will money movement for the payroll be performed by the partner rather than by Gusto?
     */
    partnerOwnedDisbursement?: boolean | null | undefined;
};
/**
 * A payroll that has been transitioned back to unprocessed state after cancellation.
 */
export type UnprocessedPayroll = {
    /**
     * A timestamp that is the deadline for the payroll to be run in order for employees to be paid on time.  If payroll has not been run by the deadline, a prepare request will update both the check date and deadline to reflect the soonest employees can be paid and the deadline by which the payroll must be run in order for said check date to be met.
     */
    payrollDeadline?: Date | undefined;
    /**
     * The date on which employees will be paid for the payroll.
     */
    checkDate?: string | undefined;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     */
    processed?: boolean | undefined;
    /**
     * The date at which the payroll was processed. Null if the payroll isn't processed yet.
     */
    processedDate?: string | null | undefined;
    /**
     * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
     */
    calculatedAt?: Date | null | undefined;
    /**
     * The UUID of the payroll.
     */
    uuid?: string | undefined;
    /**
     * The UUID of the payroll.
     */
    payrollUuid?: string | undefined;
    /**
     * The UUID of the company for the payroll.
     */
    companyUuid?: string | undefined;
    /**
     * Indicates whether the payroll is an off-cycle payroll
     */
    offCycle?: boolean | undefined;
    /**
     * The off-cycle reason. Only included for off-cycle payrolls.
     */
    offCycleReason?: OffCycleReasonType | null | undefined;
    /**
     * Indicates whether the payroll has automatic payroll enabled
     */
    autoPayroll?: boolean | undefined;
    /**
     * Indicates whether the payroll is an external payroll
     */
    external?: boolean | undefined;
    payPeriod?: PayrollPayPeriodType | undefined;
    /**
     * Datetime for when the resource was created.
     */
    createdAt?: Date | undefined;
    /**
     * Will money movement for the payroll be performed by the partner rather than by Gusto?
     */
    partnerOwnedDisbursement?: boolean | null | undefined;
};
/** @internal */
export declare const OffCycleReasonType$inboundSchema: z.ZodNativeEnum<typeof OffCycleReasonType>;
/** @internal */
export declare const Payroll$inboundSchema: z.ZodType<Payroll, z.ZodTypeDef, unknown>;
export declare function payrollFromJSON(jsonString: string): SafeParseResult<Payroll, SDKValidationError>;
/** @internal */
export declare const PayrollUnprocessed$inboundSchema: z.ZodType<PayrollUnprocessed, z.ZodTypeDef, unknown>;
export declare function payrollUnprocessedFromJSON(jsonString: string): SafeParseResult<PayrollUnprocessed, SDKValidationError>;
/** @internal */
export declare const PayrollShowPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PayrollShowPaymentMethod>;
/** @internal */
export declare const PayrollShowFixedCompensations$inboundSchema: z.ZodType<PayrollShowFixedCompensations, z.ZodTypeDef, unknown>;
export declare function payrollShowFixedCompensationsFromJSON(jsonString: string): SafeParseResult<PayrollShowFixedCompensations, SDKValidationError>;
/** @internal */
export declare const PayrollShowHourlyCompensations$inboundSchema: z.ZodType<PayrollShowHourlyCompensations, z.ZodTypeDef, unknown>;
export declare function payrollShowHourlyCompensationsFromJSON(jsonString: string): SafeParseResult<PayrollShowHourlyCompensations, SDKValidationError>;
/** @internal */
export declare const PayrollShowPaidTimeOff$inboundSchema: z.ZodType<PayrollShowPaidTimeOff, z.ZodTypeDef, unknown>;
export declare function payrollShowPaidTimeOffFromJSON(jsonString: string): SafeParseResult<PayrollShowPaidTimeOff, SDKValidationError>;
/** @internal */
export declare const PayrollShowReimbursements$inboundSchema: z.ZodType<PayrollShowReimbursements, z.ZodTypeDef, unknown>;
export declare function payrollShowReimbursementsFromJSON(jsonString: string): SafeParseResult<PayrollShowReimbursements, SDKValidationError>;
/** @internal */
export declare const PayrollShowAmountType$inboundSchema: z.ZodNativeEnum<typeof PayrollShowAmountType>;
/** @internal */
export declare const PayrollShowDeductions$inboundSchema: z.ZodType<PayrollShowDeductions, z.ZodTypeDef, unknown>;
export declare function payrollShowDeductionsFromJSON(jsonString: string): SafeParseResult<PayrollShowDeductions, SDKValidationError>;
/** @internal */
export declare const PayrollShowTaxes$inboundSchema: z.ZodType<PayrollShowTaxes, z.ZodTypeDef, unknown>;
export declare function payrollShowTaxesFromJSON(jsonString: string): SafeParseResult<PayrollShowTaxes, SDKValidationError>;
/** @internal */
export declare const PayrollShowBenefits$inboundSchema: z.ZodType<PayrollShowBenefits, z.ZodTypeDef, unknown>;
export declare function payrollShowBenefitsFromJSON(jsonString: string): SafeParseResult<PayrollShowBenefits, SDKValidationError>;
/** @internal */
export declare const EmployeeCompensations$inboundSchema: z.ZodType<EmployeeCompensations, z.ZodTypeDef, unknown>;
export declare function employeeCompensationsFromJSON(jsonString: string): SafeParseResult<EmployeeCompensations, SDKValidationError>;
/** @internal */
export declare const PayrollShow$inboundSchema: z.ZodType<PayrollShow, z.ZodTypeDef, unknown>;
export declare function payrollShowFromJSON(jsonString: string): SafeParseResult<PayrollShow, SDKValidationError>;
/** @internal */
export declare const PayrollPrepared$inboundSchema: z.ZodType<PayrollPrepared, z.ZodTypeDef, unknown>;
export declare function payrollPreparedFromJSON(jsonString: string): SafeParseResult<PayrollPrepared, SDKValidationError>;
/** @internal */
export declare const UnprocessedPayroll$inboundSchema: z.ZodType<UnprocessedPayroll, z.ZodTypeDef, unknown>;
export declare function unprocessedPayrollFromJSON(jsonString: string): SafeParseResult<UnprocessedPayroll, SDKValidationError>;
//# sourceMappingURL=payroll.d.ts.map