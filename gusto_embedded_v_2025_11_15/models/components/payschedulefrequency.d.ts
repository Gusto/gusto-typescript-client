import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export declare const PayScheduleFrequency: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
    readonly Quarterly: "Quarterly";
    readonly Annually: "Annually";
};
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export type PayScheduleFrequency = ClosedEnum<typeof PayScheduleFrequency>;
/** @internal */
export declare const PayScheduleFrequency$inboundSchema: z.ZodNativeEnum<typeof PayScheduleFrequency>;
/** @internal */
export declare const PayScheduleFrequency$outboundSchema: z.ZodNativeEnum<typeof PayScheduleFrequency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleFrequency$ {
    /** @deprecated use `PayScheduleFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
        readonly Quarterly: "Quarterly";
        readonly Annually: "Annually";
    }>;
    /** @deprecated use `PayScheduleFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
        readonly Quarterly: "Quarterly";
        readonly Annually: "Annually";
    }>;
}
//# sourceMappingURL=payschedulefrequency.d.ts.map