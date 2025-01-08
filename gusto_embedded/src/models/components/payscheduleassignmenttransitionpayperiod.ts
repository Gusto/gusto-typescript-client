/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Pay schedule assignment transition pay period information.
 */
export type PayScheduleAssignmentTransitionPayPeriod = {
  /**
   * Pay period start date.
   */
  startDate?: string | undefined;
  /**
   * Pay period end date.
   */
  endDate?: string | undefined;
};

/** @internal */
export const PayScheduleAssignmentTransitionPayPeriod$inboundSchema: z.ZodType<
  PayScheduleAssignmentTransitionPayPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  start_date: z.string().optional(),
  end_date: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "start_date": "startDate",
    "end_date": "endDate",
  });
});

/** @internal */
export type PayScheduleAssignmentTransitionPayPeriod$Outbound = {
  start_date?: string | undefined;
  end_date?: string | undefined;
};

/** @internal */
export const PayScheduleAssignmentTransitionPayPeriod$outboundSchema: z.ZodType<
  PayScheduleAssignmentTransitionPayPeriod$Outbound,
  z.ZodTypeDef,
  PayScheduleAssignmentTransitionPayPeriod
> = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    startDate: "start_date",
    endDate: "end_date",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayScheduleAssignmentTransitionPayPeriod$ {
  /** @deprecated use `PayScheduleAssignmentTransitionPayPeriod$inboundSchema` instead. */
  export const inboundSchema =
    PayScheduleAssignmentTransitionPayPeriod$inboundSchema;
  /** @deprecated use `PayScheduleAssignmentTransitionPayPeriod$outboundSchema` instead. */
  export const outboundSchema =
    PayScheduleAssignmentTransitionPayPeriod$outboundSchema;
  /** @deprecated use `PayScheduleAssignmentTransitionPayPeriod$Outbound` instead. */
  export type Outbound = PayScheduleAssignmentTransitionPayPeriod$Outbound;
}

export function payScheduleAssignmentTransitionPayPeriodToJSON(
  payScheduleAssignmentTransitionPayPeriod:
    PayScheduleAssignmentTransitionPayPeriod,
): string {
  return JSON.stringify(
    PayScheduleAssignmentTransitionPayPeriod$outboundSchema.parse(
      payScheduleAssignmentTransitionPayPeriod,
    ),
  );
}

export function payScheduleAssignmentTransitionPayPeriodFromJSON(
  jsonString: string,
): SafeParseResult<
  PayScheduleAssignmentTransitionPayPeriod,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PayScheduleAssignmentTransitionPayPeriod$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PayScheduleAssignmentTransitionPayPeriod' from JSON`,
  );
}
