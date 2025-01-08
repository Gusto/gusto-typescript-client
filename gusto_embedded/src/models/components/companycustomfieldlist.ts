/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CompanyCustomField,
  CompanyCustomField$inboundSchema,
  CompanyCustomField$Outbound,
  CompanyCustomField$outboundSchema,
} from "./companycustomfield.js";

/**
 * Example response
 */
export type CompanyCustomFieldList = {
  customFields?: Array<CompanyCustomField> | undefined;
};

/** @internal */
export const CompanyCustomFieldList$inboundSchema: z.ZodType<
  CompanyCustomFieldList,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom_fields: z.array(CompanyCustomField$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_fields": "customFields",
  });
});

/** @internal */
export type CompanyCustomFieldList$Outbound = {
  custom_fields?: Array<CompanyCustomField$Outbound> | undefined;
};

/** @internal */
export const CompanyCustomFieldList$outboundSchema: z.ZodType<
  CompanyCustomFieldList$Outbound,
  z.ZodTypeDef,
  CompanyCustomFieldList
> = z.object({
  customFields: z.array(CompanyCustomField$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    customFields: "custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyCustomFieldList$ {
  /** @deprecated use `CompanyCustomFieldList$inboundSchema` instead. */
  export const inboundSchema = CompanyCustomFieldList$inboundSchema;
  /** @deprecated use `CompanyCustomFieldList$outboundSchema` instead. */
  export const outboundSchema = CompanyCustomFieldList$outboundSchema;
  /** @deprecated use `CompanyCustomFieldList$Outbound` instead. */
  export type Outbound = CompanyCustomFieldList$Outbound;
}

export function companyCustomFieldListToJSON(
  companyCustomFieldList: CompanyCustomFieldList,
): string {
  return JSON.stringify(
    CompanyCustomFieldList$outboundSchema.parse(companyCustomFieldList),
  );
}

export function companyCustomFieldListFromJSON(
  jsonString: string,
): SafeParseResult<CompanyCustomFieldList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompanyCustomFieldList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompanyCustomFieldList' from JSON`,
  );
}
