import * as z from "zod/v3";
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
//# sourceMappingURL=payrollwithholdingpayperiodtype.d.ts.map