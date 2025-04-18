/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmployeeStateTaxQuestion,
  EmployeeStateTaxQuestion$inboundSchema,
  EmployeeStateTaxQuestion$Outbound,
  EmployeeStateTaxQuestion$outboundSchema,
} from "./employeestatetaxquestion.js";

/**
 * Example response
 */
export type EmployeeStateTax = {
  /**
   * The employee's uuid
   */
  employeeUuid: string;
  /**
   * Two letter US state abbreviation
   */
  state: string;
  fileNewHireReport?: boolean | null | undefined;
  isWorkState?: boolean | undefined;
  questions: Array<EmployeeStateTaxQuestion>;
};

/** @internal */
export const EmployeeStateTax$inboundSchema: z.ZodType<
  EmployeeStateTax,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string(),
  state: z.string(),
  file_new_hire_report: z.nullable(z.boolean()).optional(),
  is_work_state: z.boolean().optional(),
  questions: z.array(EmployeeStateTaxQuestion$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "file_new_hire_report": "fileNewHireReport",
    "is_work_state": "isWorkState",
  });
});

/** @internal */
export type EmployeeStateTax$Outbound = {
  employee_uuid: string;
  state: string;
  file_new_hire_report?: boolean | null | undefined;
  is_work_state?: boolean | undefined;
  questions: Array<EmployeeStateTaxQuestion$Outbound>;
};

/** @internal */
export const EmployeeStateTax$outboundSchema: z.ZodType<
  EmployeeStateTax$Outbound,
  z.ZodTypeDef,
  EmployeeStateTax
> = z.object({
  employeeUuid: z.string(),
  state: z.string(),
  fileNewHireReport: z.nullable(z.boolean()).optional(),
  isWorkState: z.boolean().optional(),
  questions: z.array(EmployeeStateTaxQuestion$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    fileNewHireReport: "file_new_hire_report",
    isWorkState: "is_work_state",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeStateTax$ {
  /** @deprecated use `EmployeeStateTax$inboundSchema` instead. */
  export const inboundSchema = EmployeeStateTax$inboundSchema;
  /** @deprecated use `EmployeeStateTax$outboundSchema` instead. */
  export const outboundSchema = EmployeeStateTax$outboundSchema;
  /** @deprecated use `EmployeeStateTax$Outbound` instead. */
  export type Outbound = EmployeeStateTax$Outbound;
}

export function employeeStateTaxToJSON(
  employeeStateTax: EmployeeStateTax,
): string {
  return JSON.stringify(
    EmployeeStateTax$outboundSchema.parse(employeeStateTax),
  );
}

export function employeeStateTaxFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeStateTax, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeStateTax$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeStateTax' from JSON`,
  );
}
