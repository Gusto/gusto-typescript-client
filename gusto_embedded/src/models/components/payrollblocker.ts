/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Example response
 */
export type PayrollBlocker = {
  /**
   * The unique identifier of the reason
   */
  key?: string | undefined;
  /**
   * User-friendly message describing the payroll blocker.
   */
  message?: string | undefined;
};

/** @internal */
export const PayrollBlocker$inboundSchema: z.ZodType<
  PayrollBlocker,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  message: z.string().optional(),
});

/** @internal */
export type PayrollBlocker$Outbound = {
  key?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const PayrollBlocker$outboundSchema: z.ZodType<
  PayrollBlocker$Outbound,
  z.ZodTypeDef,
  PayrollBlocker
> = z.object({
  key: z.string().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollBlocker$ {
  /** @deprecated use `PayrollBlocker$inboundSchema` instead. */
  export const inboundSchema = PayrollBlocker$inboundSchema;
  /** @deprecated use `PayrollBlocker$outboundSchema` instead. */
  export const outboundSchema = PayrollBlocker$outboundSchema;
  /** @deprecated use `PayrollBlocker$Outbound` instead. */
  export type Outbound = PayrollBlocker$Outbound;
}

export function payrollBlockerToJSON(payrollBlocker: PayrollBlocker): string {
  return JSON.stringify(PayrollBlocker$outboundSchema.parse(payrollBlocker));
}

export function payrollBlockerFromJSON(
  jsonString: string,
): SafeParseResult<PayrollBlocker, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollBlocker$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollBlocker' from JSON`,
  );
}
