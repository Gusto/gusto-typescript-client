import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PaymentSpeedParam } from "./paymentspeedparam.js";
export type FastPaymentLimitRequiredBody = {
    /**
     * Fast payment limit. This limit is an aggregate of all fast payrolls amount. This limit is only relevant when payment speed is 1-day or 2-day.
     */
    fastPaymentLimit: string;
    /**
     * Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.
     */
    paymentSpeed?: PaymentSpeedParam | undefined;
};
/** @internal */
export declare const FastPaymentLimitRequiredBody$inboundSchema: z.ZodType<FastPaymentLimitRequiredBody, z.ZodTypeDef, unknown>;
/** @internal */
export type FastPaymentLimitRequiredBody$Outbound = {
    fast_payment_limit: string;
    payment_speed?: string | undefined;
};
/** @internal */
export declare const FastPaymentLimitRequiredBody$outboundSchema: z.ZodType<FastPaymentLimitRequiredBody$Outbound, z.ZodTypeDef, FastPaymentLimitRequiredBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FastPaymentLimitRequiredBody$ {
    /** @deprecated use `FastPaymentLimitRequiredBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FastPaymentLimitRequiredBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `FastPaymentLimitRequiredBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FastPaymentLimitRequiredBody$Outbound, z.ZodTypeDef, FastPaymentLimitRequiredBody>;
    /** @deprecated use `FastPaymentLimitRequiredBody$Outbound` instead. */
    type Outbound = FastPaymentLimitRequiredBody$Outbound;
}
export declare function fastPaymentLimitRequiredBodyToJSON(fastPaymentLimitRequiredBody: FastPaymentLimitRequiredBody): string;
export declare function fastPaymentLimitRequiredBodyFromJSON(jsonString: string): SafeParseResult<FastPaymentLimitRequiredBody, SDKValidationError>;
//# sourceMappingURL=fastpaymentlimitrequiredbody.d.ts.map