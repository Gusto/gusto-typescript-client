/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The representation of a termination in Gusto.
 */
export type Termination = {
  /**
   * The UUID of the termination object.
   */
  uuid: string;
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version?: string | undefined;
  /**
   * The UUID of the employee to which this termination is attached.
   */
  employeeUuid?: string | undefined;
  /**
   * Whether the employee's termination has gone into effect.
   */
  active?: boolean | undefined;
  /**
   * Whether the employee's termination is cancelable. Cancelable is true if `run_termination_payroll` is false and `effective_date` is in the future.
   */
  cancelable?: boolean | undefined;
  /**
   * The employee's last day of work.
   */
  effectiveDate?: string | undefined;
  /**
   * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
   */
  runTerminationPayroll?: boolean | undefined;
};

/** @internal */
export const Termination$inboundSchema: z.ZodType<
  Termination,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  version: z.string().optional(),
  employee_uuid: z.string().optional(),
  active: z.boolean().optional(),
  cancelable: z.boolean().optional(),
  effective_date: z.string().optional(),
  run_termination_payroll: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "effective_date": "effectiveDate",
    "run_termination_payroll": "runTerminationPayroll",
  });
});

/** @internal */
export type Termination$Outbound = {
  uuid: string;
  version?: string | undefined;
  employee_uuid?: string | undefined;
  active?: boolean | undefined;
  cancelable?: boolean | undefined;
  effective_date?: string | undefined;
  run_termination_payroll?: boolean | undefined;
};

/** @internal */
export const Termination$outboundSchema: z.ZodType<
  Termination$Outbound,
  z.ZodTypeDef,
  Termination
> = z.object({
  uuid: z.string(),
  version: z.string().optional(),
  employeeUuid: z.string().optional(),
  active: z.boolean().optional(),
  cancelable: z.boolean().optional(),
  effectiveDate: z.string().optional(),
  runTerminationPayroll: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    effectiveDate: "effective_date",
    runTerminationPayroll: "run_termination_payroll",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Termination$ {
  /** @deprecated use `Termination$inboundSchema` instead. */
  export const inboundSchema = Termination$inboundSchema;
  /** @deprecated use `Termination$outboundSchema` instead. */
  export const outboundSchema = Termination$outboundSchema;
  /** @deprecated use `Termination$Outbound` instead. */
  export type Outbound = Termination$Outbound;
}

export function terminationToJSON(termination: Termination): string {
  return JSON.stringify(Termination$outboundSchema.parse(termination));
}

export function terminationFromJSON(
  jsonString: string,
): SafeParseResult<Termination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Termination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Termination' from JSON`,
  );
}
