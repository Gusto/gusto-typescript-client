/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The representation of an admin user in Gusto.
 */
export type Admin = {
  /**
   * The unique id of the admin.
   */
  uuid: string;
  /**
   * The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them.
   */
  email?: string | undefined;
  /**
   * The first name of the admin.
   */
  firstName?: string | undefined;
  /**
   * The last name of the admin.
   */
  lastName?: string | undefined;
};

/** @internal */
export const Admin$inboundSchema: z.ZodType<Admin, z.ZodTypeDef, unknown> = z
  .object({
    uuid: z.string(),
    email: z.string().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_name": "firstName",
      "last_name": "lastName",
    });
  });

/** @internal */
export type Admin$Outbound = {
  uuid: string;
  email?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
};

/** @internal */
export const Admin$outboundSchema: z.ZodType<
  Admin$Outbound,
  z.ZodTypeDef,
  Admin
> = z.object({
  uuid: z.string(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Admin$ {
  /** @deprecated use `Admin$inboundSchema` instead. */
  export const inboundSchema = Admin$inboundSchema;
  /** @deprecated use `Admin$outboundSchema` instead. */
  export const outboundSchema = Admin$outboundSchema;
  /** @deprecated use `Admin$Outbound` instead. */
  export type Outbound = Admin$Outbound;
}

export function adminToJSON(admin: Admin): string {
  return JSON.stringify(Admin$outboundSchema.parse(admin));
}

export function adminFromJSON(
  jsonString: string,
): SafeParseResult<Admin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Admin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Admin' from JSON`,
  );
}
