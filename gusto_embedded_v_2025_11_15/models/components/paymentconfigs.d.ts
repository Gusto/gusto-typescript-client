import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type PaymentConfigs = {
    /**
     * Company uuid
     */
    companyUuid?: string | undefined;
    /**
     * Partner uuid
     */
    partnerUuid?: string | undefined;
    /**
     * Payment limit for 1-day or 2-day payroll
     */
    fastPaymentLimit?: string | undefined;
    /**
     * Payment speed for 1-day, 2-day, 4-day
     */
    paymentSpeed?: string | undefined;
};
/** @internal */
export declare const PaymentConfigs$inboundSchema: z.ZodType<PaymentConfigs, z.ZodTypeDef, unknown>;
/** @internal */
export type PaymentConfigs$Outbound = {
    company_uuid?: string | undefined;
    partner_uuid?: string | undefined;
    fast_payment_limit?: string | undefined;
    payment_speed?: string | undefined;
};
/** @internal */
export declare const PaymentConfigs$outboundSchema: z.ZodType<PaymentConfigs$Outbound, z.ZodTypeDef, PaymentConfigs>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentConfigs$ {
    /** @deprecated use `PaymentConfigs$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaymentConfigs, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaymentConfigs$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaymentConfigs$Outbound, z.ZodTypeDef, PaymentConfigs>;
    /** @deprecated use `PaymentConfigs$Outbound` instead. */
    type Outbound = PaymentConfigs$Outbound;
}
export declare function paymentConfigsToJSON(paymentConfigs: PaymentConfigs): string;
export declare function paymentConfigsFromJSON(jsonString: string): SafeParseResult<PaymentConfigs, SDKValidationError>;
//# sourceMappingURL=paymentconfigs.d.ts.map