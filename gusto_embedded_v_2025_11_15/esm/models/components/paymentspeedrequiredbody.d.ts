import * as z from "zod/v3";
import { PaymentSpeedParam } from "./paymentspeedparam.js";
export type PaymentSpeedRequiredBody = {
    /**
     * Fast payment limit. This limit is an aggregate of all fast payrolls amount. This limit is only relevant when payment speed is 1-day or 2-day.
     */
    fastPaymentLimit?: string | undefined;
    /**
     * Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.
     */
    paymentSpeed: PaymentSpeedParam;
};
/** @internal */
export type PaymentSpeedRequiredBody$Outbound = {
    fast_payment_limit?: string | undefined;
    payment_speed: string;
};
/** @internal */
export declare const PaymentSpeedRequiredBody$outboundSchema: z.ZodType<PaymentSpeedRequiredBody$Outbound, z.ZodTypeDef, PaymentSpeedRequiredBody>;
export declare function paymentSpeedRequiredBodyToJSON(paymentSpeedRequiredBody: PaymentSpeedRequiredBody): string;
//# sourceMappingURL=paymentspeedrequiredbody.d.ts.map