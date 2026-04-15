import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.
 */
export declare const PaymentSpeedParam: {
    readonly OneMinusDay: "1-day";
    readonly TwoMinusDay: "2-day";
    readonly FourMinusDay: "4-day";
};
/**
 * Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.
 */
export type PaymentSpeedParam = ClosedEnum<typeof PaymentSpeedParam>;
/** @internal */
export declare const PaymentSpeedParam$outboundSchema: z.ZodNativeEnum<typeof PaymentSpeedParam>;
//# sourceMappingURL=paymentspeedparam.d.ts.map