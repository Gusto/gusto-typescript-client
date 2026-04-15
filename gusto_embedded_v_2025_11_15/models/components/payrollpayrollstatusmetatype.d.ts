import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Information about the payroll's status and expected dates
 */
export type PayrollPayrollStatusMetaType = {
    /**
     * true if the payroll may be cancelled.
     */
    cancellable?: boolean | undefined;
    /**
     * The date an employee will be paid if the payroll is submitted now.
     */
    expectedCheckDate?: string | undefined;
    /**
     * The normal check date for the associated pay period.
     */
    initialCheckDate?: string | undefined;
    /**
     * The time the employer's account will be debited if the payroll is submitted now.
     */
    expectedDebitTime?: string | undefined;
    /**
     * expected_check_date > initial_check_date.
     */
    payrollLate?: boolean | undefined;
    /**
     * Payroll must be submitted at or before this time to avoid late payroll.
     */
    initialDebitCutoffTime?: string | undefined;
};
/** @internal */
export declare const PayrollPayrollStatusMetaType$inboundSchema: z.ZodType<PayrollPayrollStatusMetaType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollPayrollStatusMetaType$Outbound = {
    cancellable?: boolean | undefined;
    expected_check_date?: string | undefined;
    initial_check_date?: string | undefined;
    expected_debit_time?: string | undefined;
    payroll_late?: boolean | undefined;
    initial_debit_cutoff_time?: string | undefined;
};
/** @internal */
export declare const PayrollPayrollStatusMetaType$outboundSchema: z.ZodType<PayrollPayrollStatusMetaType$Outbound, z.ZodTypeDef, PayrollPayrollStatusMetaType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollPayrollStatusMetaType$ {
    /** @deprecated use `PayrollPayrollStatusMetaType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollPayrollStatusMetaType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollPayrollStatusMetaType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollPayrollStatusMetaType$Outbound, z.ZodTypeDef, PayrollPayrollStatusMetaType>;
    /** @deprecated use `PayrollPayrollStatusMetaType$Outbound` instead. */
    type Outbound = PayrollPayrollStatusMetaType$Outbound;
}
export declare function payrollPayrollStatusMetaTypeToJSON(payrollPayrollStatusMetaType: PayrollPayrollStatusMetaType): string;
export declare function payrollPayrollStatusMetaTypeFromJSON(jsonString: string): SafeParseResult<PayrollPayrollStatusMetaType, SDKValidationError>;
//# sourceMappingURL=payrollpayrollstatusmetatype.d.ts.map