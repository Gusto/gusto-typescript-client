/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldType,
  CustomFieldType$inboundSchema,
  CustomFieldType$outboundSchema,
} from "./customfieldtype.js";

/**
 * A custom field of an employee
 */
export type EmployeeCustomField = {
  id: string;
  /**
   * This is the id of the response object from when you get the company custom fields
   */
  companyCustomFieldId: string;
  name: string;
  /**
   * Input type for the custom field.
   */
  type: CustomFieldType;
  description?: string | undefined;
  value: string;
  /**
   * An array of options for fields of type radio. Otherwise, null.
   */
  selectionOptions?: Array<string> | null | undefined;
};

/** @internal */
export const EmployeeCustomField$inboundSchema: z.ZodType<
  EmployeeCustomField,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  company_custom_field_id: z.string(),
  name: z.string(),
  type: CustomFieldType$inboundSchema,
  description: z.string().optional(),
  value: z.string(),
  selection_options: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_custom_field_id": "companyCustomFieldId",
    "selection_options": "selectionOptions",
  });
});

/** @internal */
export type EmployeeCustomField$Outbound = {
  id: string;
  company_custom_field_id: string;
  name: string;
  type: string;
  description?: string | undefined;
  value: string;
  selection_options?: Array<string> | null | undefined;
};

/** @internal */
export const EmployeeCustomField$outboundSchema: z.ZodType<
  EmployeeCustomField$Outbound,
  z.ZodTypeDef,
  EmployeeCustomField
> = z.object({
  id: z.string(),
  companyCustomFieldId: z.string(),
  name: z.string(),
  type: CustomFieldType$outboundSchema,
  description: z.string().optional(),
  value: z.string(),
  selectionOptions: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    companyCustomFieldId: "company_custom_field_id",
    selectionOptions: "selection_options",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeCustomField$ {
  /** @deprecated use `EmployeeCustomField$inboundSchema` instead. */
  export const inboundSchema = EmployeeCustomField$inboundSchema;
  /** @deprecated use `EmployeeCustomField$outboundSchema` instead. */
  export const outboundSchema = EmployeeCustomField$outboundSchema;
  /** @deprecated use `EmployeeCustomField$Outbound` instead. */
  export type Outbound = EmployeeCustomField$Outbound;
}

export function employeeCustomFieldToJSON(
  employeeCustomField: EmployeeCustomField,
): string {
  return JSON.stringify(
    EmployeeCustomField$outboundSchema.parse(employeeCustomField),
  );
}

export function employeeCustomFieldFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeCustomField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeCustomField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeCustomField' from JSON`,
  );
}
