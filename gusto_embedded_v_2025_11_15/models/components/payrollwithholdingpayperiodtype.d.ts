import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
 */
export declare const PayrollWithholdingPayPeriodType: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
    readonly Quarterly: "Quarterly";
    readonly Semiannually: "Semiannually";
    readonly Annually: "Annually";
};
/**
 * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
 */
export type PayrollWithholdingPayPeriodType = ClosedEnum<typeof PayrollWithholdingPayPeriodType>;
/** @internal */
export declare const PayrollWithholdingPayPeriodType$inboundSchema: z.ZodNativeEnum<typeof PayrollWithholdingPayPeriodType>;
/** @internal */
export declare const PayrollWithholdingPayPeriodType$outboundSchema: z.ZodNativeEnum<typeof PayrollWithholdingPayPeriodType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollWithholdingPayPeriodType$ {
    /** @deprecated use `PayrollWithholdingPayPeriodType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
        readonly Quarterly: "Quarterly";
        readonly Semiannually: "Semiannually";
        readonly Annually: "Annually";
    }>;
    /** @deprecated use `PayrollWithholdingPayPeriodType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
        readonly Quarterly: "Quarterly";
        readonly Semiannually: "Semiannually";
        readonly Annually: "Annually";
    }>;
}
//# sourceMappingURL=payrollwithholdingpayperiodtype.d.ts.map