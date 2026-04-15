import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.
 */
export declare const PaymentSpeedParam: {
    readonly OneDay: "1-day";
    readonly TwoDay: "2-day";
    readonly FourDay: "4-day";
};
/**
 * Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.
 */
export type PaymentSpeedParam = ClosedEnum<typeof PaymentSpeedParam>;
/** @internal */
export declare const PaymentSpeedParam$inboundSchema: z.ZodNativeEnum<typeof PaymentSpeedParam>;
/** @internal */
export declare const PaymentSpeedParam$outboundSchema: z.ZodNativeEnum<typeof PaymentSpeedParam>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentSpeedParam$ {
    /** @deprecated use `PaymentSpeedParam$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly OneDay: "1-day";
        readonly TwoDay: "2-day";
        readonly FourDay: "4-day";
    }>;
    /** @deprecated use `PaymentSpeedParam$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly OneDay: "1-day";
        readonly TwoDay: "2-day";
        readonly FourDay: "4-day";
    }>;
}
//# sourceMappingURL=paymentspeedparam.d.ts.map