import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OffCycleReasonType } from "./offcyclereasontype.js";
import { PayrollEmployeeCompensationsType, PayrollEmployeeCompensationsType$Outbound } from "./payrollemployeecompensationstype.js";
import { PayrollFixedCompensationTypesType, PayrollFixedCompensationTypesType$Outbound } from "./payrollfixedcompensationtypestype.js";
import { PayrollPaymentSpeedChangedType, PayrollPaymentSpeedChangedType$Outbound } from "./payrollpaymentspeedchangedtype.js";
import { PayrollPayPeriodType, PayrollPayPeriodType$Outbound } from "./payrollpayperiodtype.js";
import { PayrollPayrollStatusMetaType, PayrollPayrollStatusMetaType$Outbound } from "./payrollpayrollstatusmetatype.js";
import { PayrollProcessingRequest, PayrollProcessingRequest$Outbound } from "./payrollprocessingrequest.js";
import { PayrollWithholdingPayPeriodType } from "./payrollwithholdingpayperiodtype.js";
/**
 * An off-cycle payroll
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
    processedDate?: string | undefined;
    /**
     * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
     */
    calculatedAt?: string | undefined;
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
     * Indicates whether the payroll is an auto pilot payroll
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
    skipRegularDeductions?: boolean | undefined;
    /**
     * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages. Only included for off-cycle payrolls.
     */
    fixedWithholdingRate?: boolean | undefined;
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
};
/** @internal */
export declare const PayrollPrepared$inboundSchema: z.ZodType<PayrollPrepared, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollPrepared$Outbound = {
    payroll_deadline?: string | undefined;
    check_date?: string | undefined;
    processed?: boolean | undefined;
    processed_date?: string | undefined;
    calculated_at?: string | undefined;
    uuid?: string | undefined;
    payroll_uuid?: string | undefined;
    company_uuid?: string | undefined;
    off_cycle?: boolean | undefined;
    off_cycle_reason?: string | null | undefined;
    auto_pilot?: boolean | undefined;
    external?: boolean | undefined;
    final_termination_payroll?: boolean | undefined;
    withholding_pay_period?: string | undefined;
    skip_regular_deductions?: boolean | undefined;
    fixed_withholding_rate?: boolean | undefined;
    pay_period?: PayrollPayPeriodType$Outbound | undefined;
    payroll_status_meta?: PayrollPayrollStatusMetaType$Outbound | undefined;
    employee_compensations?: Array<PayrollEmployeeCompensationsType$Outbound> | undefined;
    payment_speed_changed?: PayrollPaymentSpeedChangedType$Outbound | undefined;
    created_at?: string | undefined;
    fixed_compensation_types?: Array<PayrollFixedCompensationTypesType$Outbound> | undefined;
    processing_request?: PayrollProcessingRequest$Outbound | null | undefined;
};
/** @internal */
export declare const PayrollPrepared$outboundSchema: z.ZodType<PayrollPrepared$Outbound, z.ZodTypeDef, PayrollPrepared>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollPrepared$ {
    /** @deprecated use `PayrollPrepared$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollPrepared, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollPrepared$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollPrepared$Outbound, z.ZodTypeDef, PayrollPrepared>;
    /** @deprecated use `PayrollPrepared$Outbound` instead. */
    type Outbound = PayrollPrepared$Outbound;
}
export declare function payrollPreparedToJSON(payrollPrepared: PayrollPrepared): string;
export declare function payrollPreparedFromJSON(jsonString: string): SafeParseResult<PayrollPrepared, SDKValidationError>;
//# sourceMappingURL=payrollprepared.d.ts.map