import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export declare const PayScheduleFrequencyCreateUpdate: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
};
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export type PayScheduleFrequencyCreateUpdate = ClosedEnum<typeof PayScheduleFrequencyCreateUpdate>;
/** @internal */
export declare const PayScheduleFrequencyCreateUpdate$inboundSchema: z.ZodNativeEnum<typeof PayScheduleFrequencyCreateUpdate>;
/** @internal */
export declare const PayScheduleFrequencyCreateUpdate$outboundSchema: z.ZodNativeEnum<typeof PayScheduleFrequencyCreateUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleFrequencyCreateUpdate$ {
    /** @deprecated use `PayScheduleFrequencyCreateUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
    /** @deprecated use `PayScheduleFrequencyCreateUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
}
//# sourceMappingURL=payschedulefrequencycreateupdate.d.ts.map