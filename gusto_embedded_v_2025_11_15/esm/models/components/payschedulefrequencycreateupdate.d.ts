import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Pay frequency when creating or updating a schedule. Only weekly, bi-weekly, twice per month, and monthly are supported via the API.
 *
 * @remarks
 *
 * - `Every week`: Weekly pay.
 * - `Every other week`: Biweekly pay.
 * - `Twice per month`: Two pay dates per month; require day_1 and day_2 (use 31 for last day of month).
 * - `Monthly`: One pay date per month; require day_1 (1-31).
 */
export declare const PayScheduleFrequencyCreateUpdate: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
};
/**
 * Pay frequency when creating or updating a schedule. Only weekly, bi-weekly, twice per month, and monthly are supported via the API.
 *
 * @remarks
 *
 * - `Every week`: Weekly pay.
 * - `Every other week`: Biweekly pay.
 * - `Twice per month`: Two pay dates per month; require day_1 and day_2 (use 31 for last day of month).
 * - `Monthly`: One pay date per month; require day_1 (1-31).
 */
export type PayScheduleFrequencyCreateUpdate = ClosedEnum<typeof PayScheduleFrequencyCreateUpdate>;
/** @internal */
export declare const PayScheduleFrequencyCreateUpdate$outboundSchema: z.ZodNativeEnum<typeof PayScheduleFrequencyCreateUpdate>;
//# sourceMappingURL=payschedulefrequencycreateupdate.d.ts.map