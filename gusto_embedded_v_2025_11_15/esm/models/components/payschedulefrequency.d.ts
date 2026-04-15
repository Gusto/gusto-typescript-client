import * as z from "zod/v3";
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
//# sourceMappingURL=payschedulefrequency.d.ts.map