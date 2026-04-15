import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Whether it is regular pay period or transition pay period.
 */
export declare const PayrollType: {
    readonly Regular: "regular";
    readonly Transition: "transition";
};
/**
 * Whether it is regular pay period or transition pay period.
 */
export type PayrollType = ClosedEnum<typeof PayrollType>;
/**
 * Information about the payroll for the pay period.
 */
export type PayPeriodPayroll = {
    /**
     * The UUID of the payroll for this pay period.
     */
    payrollUuid?: string | undefined;
    /**
     * The date on which employees will be paid for the payroll if the payroll is submitted on time.
     */
    checkDate?: string | undefined;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     */
    processed?: boolean | undefined;
    /**
     * The date by which payroll should be run for employees to be paid on time. Payroll data, such as time and attendance data, should be submitted on or before this date.
     */
    payrollDeadline?: Date | undefined;
    /**
     * Whether it is regular pay period or transition pay period.
     */
    payrollType?: PayrollType | undefined;
};
/**
 * The representation of a pay period.
 */
export type PayPeriod = {
    /**
     * The start date, inclusive, of the pay period.
     */
    startDate?: string | undefined;
    /**
     * The end date, inclusive, of the pay period.
     */
    endDate?: string | undefined;
    /**
     * A unique identifier of the pay schedule to which the pay period belongs.
     */
    payScheduleUuid?: string | undefined;
    /**
     * Information about the payroll for the pay period.
     */
    payroll?: PayPeriodPayroll | undefined;
};
/** @internal */
export declare const PayrollType$inboundSchema: z.ZodNativeEnum<typeof PayrollType>;
/** @internal */
export declare const PayrollType$outboundSchema: z.ZodNativeEnum<typeof PayrollType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollType$ {
    /** @deprecated use `PayrollType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Regular: "regular";
        readonly Transition: "transition";
    }>;
    /** @deprecated use `PayrollType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Regular: "regular";
        readonly Transition: "transition";
    }>;
}
/** @internal */
export declare const PayPeriodPayroll$inboundSchema: z.ZodType<PayPeriodPayroll, z.ZodTypeDef, unknown>;
/** @internal */
export type PayPeriodPayroll$Outbound = {
    payroll_uuid?: string | undefined;
    check_date?: string | undefined;
    processed?: boolean | undefined;
    payroll_deadline?: string | undefined;
    payroll_type?: string | undefined;
};
/** @internal */
export declare const PayPeriodPayroll$outboundSchema: z.ZodType<PayPeriodPayroll$Outbound, z.ZodTypeDef, PayPeriodPayroll>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayPeriodPayroll$ {
    /** @deprecated use `PayPeriodPayroll$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayPeriodPayroll, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayPeriodPayroll$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayPeriodPayroll$Outbound, z.ZodTypeDef, PayPeriodPayroll>;
    /** @deprecated use `PayPeriodPayroll$Outbound` instead. */
    type Outbound = PayPeriodPayroll$Outbound;
}
export declare function payPeriodPayrollToJSON(payPeriodPayroll: PayPeriodPayroll): string;
export declare function payPeriodPayrollFromJSON(jsonString: string): SafeParseResult<PayPeriodPayroll, SDKValidationError>;
/** @internal */
export declare const PayPeriod$inboundSchema: z.ZodType<PayPeriod, z.ZodTypeDef, unknown>;
/** @internal */
export type PayPeriod$Outbound = {
    start_date?: string | undefined;
    end_date?: string | undefined;
    pay_schedule_uuid?: string | undefined;
    payroll?: PayPeriodPayroll$Outbound | undefined;
};
/** @internal */
export declare const PayPeriod$outboundSchema: z.ZodType<PayPeriod$Outbound, z.ZodTypeDef, PayPeriod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayPeriod$ {
    /** @deprecated use `PayPeriod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayPeriod, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayPeriod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayPeriod$Outbound, z.ZodTypeDef, PayPeriod>;
    /** @deprecated use `PayPeriod$Outbound` instead. */
    type Outbound = PayPeriod$Outbound;
}
export declare function payPeriodToJSON(payPeriod: PayPeriod): string;
export declare function payPeriodFromJSON(jsonString: string): SafeParseResult<PayPeriod, SDKValidationError>;
//# sourceMappingURL=payperiod.d.ts.map