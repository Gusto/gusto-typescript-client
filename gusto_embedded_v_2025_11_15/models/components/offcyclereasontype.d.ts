import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * The off-cycle reason. Only included for off-cycle payrolls.
 */
export declare const OffCycleReasonType: {
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
/**
 * The off-cycle reason. Only included for off-cycle payrolls.
 */
export type OffCycleReasonType = ClosedEnum<typeof OffCycleReasonType>;
/** @internal */
export declare const OffCycleReasonType$inboundSchema: z.ZodNativeEnum<typeof OffCycleReasonType>;
/** @internal */
export declare const OffCycleReasonType$outboundSchema: z.ZodNativeEnum<typeof OffCycleReasonType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OffCycleReasonType$ {
    /** @deprecated use `OffCycleReasonType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
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
    }>;
    /** @deprecated use `OffCycleReasonType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
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
    }>;
}
//# sourceMappingURL=offcyclereasontype.d.ts.map