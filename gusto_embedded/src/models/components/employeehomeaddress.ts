/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EmployeeHomeAddress = {
  street1?: string | null | undefined;
  street2?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  zip?: string | null | undefined;
  country?: string | null | undefined;
  /**
   * The status of the location. Inactive locations have been deleted, but may still have historical data associated with them.
   */
  active?: boolean | undefined;
  /**
   * Unique identifier for this address.
   */
  uuid?: string | undefined;
};

/** @internal */
export const EmployeeHomeAddress$inboundSchema: z.ZodType<
  EmployeeHomeAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  street_1: z.nullable(z.string()).optional(),
  street_2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  zip: z.nullable(z.string()).optional(),
  country: z.nullable(z.string().default("USA")),
  active: z.boolean().optional(),
  uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "street_1": "street1",
    "street_2": "street2",
  });
});

/** @internal */
export type EmployeeHomeAddress$Outbound = {
  street_1?: string | null | undefined;
  street_2?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  zip?: string | null | undefined;
  country: string | null;
  active?: boolean | undefined;
  uuid?: string | undefined;
};

/** @internal */
export const EmployeeHomeAddress$outboundSchema: z.ZodType<
  EmployeeHomeAddress$Outbound,
  z.ZodTypeDef,
  EmployeeHomeAddress
> = z.object({
  street1: z.nullable(z.string()).optional(),
  street2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  zip: z.nullable(z.string()).optional(),
  country: z.nullable(z.string().default("USA")),
  active: z.boolean().optional(),
  uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    street1: "street_1",
    street2: "street_2",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeHomeAddress$ {
  /** @deprecated use `EmployeeHomeAddress$inboundSchema` instead. */
  export const inboundSchema = EmployeeHomeAddress$inboundSchema;
  /** @deprecated use `EmployeeHomeAddress$outboundSchema` instead. */
  export const outboundSchema = EmployeeHomeAddress$outboundSchema;
  /** @deprecated use `EmployeeHomeAddress$Outbound` instead. */
  export type Outbound = EmployeeHomeAddress$Outbound;
}

export function employeeHomeAddressToJSON(
  employeeHomeAddress: EmployeeHomeAddress,
): string {
  return JSON.stringify(
    EmployeeHomeAddress$outboundSchema.parse(employeeHomeAddress),
  );
}

export function employeeHomeAddressFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeHomeAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeHomeAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeHomeAddress' from JSON`,
  );
}
