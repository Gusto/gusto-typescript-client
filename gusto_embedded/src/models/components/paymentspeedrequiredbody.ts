/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentSpeedParam,
  PaymentSpeedParam$inboundSchema,
  PaymentSpeedParam$outboundSchema,
} from "./paymentspeedparam.js";

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
export const PaymentSpeedRequiredBody$inboundSchema: z.ZodType<
  PaymentSpeedRequiredBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  fast_payment_limit: z.string().optional(),
  payment_speed: PaymentSpeedParam$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "fast_payment_limit": "fastPaymentLimit",
    "payment_speed": "paymentSpeed",
  });
});

/** @internal */
export type PaymentSpeedRequiredBody$Outbound = {
  fast_payment_limit?: string | undefined;
  payment_speed: string;
};

/** @internal */
export const PaymentSpeedRequiredBody$outboundSchema: z.ZodType<
  PaymentSpeedRequiredBody$Outbound,
  z.ZodTypeDef,
  PaymentSpeedRequiredBody
> = z.object({
  fastPaymentLimit: z.string().optional(),
  paymentSpeed: PaymentSpeedParam$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    fastPaymentLimit: "fast_payment_limit",
    paymentSpeed: "payment_speed",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentSpeedRequiredBody$ {
  /** @deprecated use `PaymentSpeedRequiredBody$inboundSchema` instead. */
  export const inboundSchema = PaymentSpeedRequiredBody$inboundSchema;
  /** @deprecated use `PaymentSpeedRequiredBody$outboundSchema` instead. */
  export const outboundSchema = PaymentSpeedRequiredBody$outboundSchema;
  /** @deprecated use `PaymentSpeedRequiredBody$Outbound` instead. */
  export type Outbound = PaymentSpeedRequiredBody$Outbound;
}

export function paymentSpeedRequiredBodyToJSON(
  paymentSpeedRequiredBody: PaymentSpeedRequiredBody,
): string {
  return JSON.stringify(
    PaymentSpeedRequiredBody$outboundSchema.parse(paymentSpeedRequiredBody),
  );
}

export function paymentSpeedRequiredBodyFromJSON(
  jsonString: string,
): SafeParseResult<PaymentSpeedRequiredBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentSpeedRequiredBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentSpeedRequiredBody' from JSON`,
  );
}
