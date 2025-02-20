/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * |   |   |
 *
 * @remarks
 * |---|---|
 * |__Status__| __Description__ |
 * | Pass | Signatory can sign all forms |
 * | Fail | Signatory cannot sign forms |
 * | Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
 * | null | Identity verification process has not been completed |
 */
export const IdentityVerificationStatus = {
  Pass: "Pass",
  Fail: "Fail",
  Skipped: "Skipped",
} as const;
/**
 * |   |   |
 *
 * @remarks
 * |---|---|
 * |__Status__| __Description__ |
 * | Pass | Signatory can sign all forms |
 * | Fail | Signatory cannot sign forms |
 * | Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
 * | null | Identity verification process has not been completed |
 */
export type IdentityVerificationStatus = ClosedEnum<
  typeof IdentityVerificationStatus
>;

export type HomeAddress = {
  street1?: string | undefined;
  street2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  country?: string | undefined;
};

/**
 * The representation of a company's signatory
 */
export type Signatory = {
  uuid: string;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  title?: string | null | undefined;
  phone?: string | null | undefined;
  email?: string | undefined;
  birthday?: string | null | undefined;
  /**
   * Whether or not the signatory is also the payroll admin of the company.
   */
  isAdmin?: boolean | undefined;
  /**
   * Indicates whether the signatory has an SSN in Gusto.
   */
  hasSsn?: boolean | undefined;
  /**
   * The current version of the signatory. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version?: string | undefined;
  /**
   * |   |   |
   *
   * @remarks
   * |---|---|
   * |__Status__| __Description__ |
   * | Pass | Signatory can sign all forms |
   * | Fail | Signatory cannot sign forms |
   * | Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
   * | null | Identity verification process has not been completed |
   */
  identityVerificationStatus?: IdentityVerificationStatus | null | undefined;
  homeAddress?: HomeAddress | null | undefined;
};

/** @internal */
export const IdentityVerificationStatus$inboundSchema: z.ZodNativeEnum<
  typeof IdentityVerificationStatus
> = z.nativeEnum(IdentityVerificationStatus);

/** @internal */
export const IdentityVerificationStatus$outboundSchema: z.ZodNativeEnum<
  typeof IdentityVerificationStatus
> = IdentityVerificationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IdentityVerificationStatus$ {
  /** @deprecated use `IdentityVerificationStatus$inboundSchema` instead. */
  export const inboundSchema = IdentityVerificationStatus$inboundSchema;
  /** @deprecated use `IdentityVerificationStatus$outboundSchema` instead. */
  export const outboundSchema = IdentityVerificationStatus$outboundSchema;
}

/** @internal */
export const HomeAddress$inboundSchema: z.ZodType<
  HomeAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  street_1: z.string().optional(),
  street_2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().default("USA"),
}).transform((v) => {
  return remap$(v, {
    "street_1": "street1",
    "street_2": "street2",
  });
});

/** @internal */
export type HomeAddress$Outbound = {
  street_1?: string | undefined;
  street_2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  country: string;
};

/** @internal */
export const HomeAddress$outboundSchema: z.ZodType<
  HomeAddress$Outbound,
  z.ZodTypeDef,
  HomeAddress
> = z.object({
  street1: z.string().optional(),
  street2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().default("USA"),
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
export namespace HomeAddress$ {
  /** @deprecated use `HomeAddress$inboundSchema` instead. */
  export const inboundSchema = HomeAddress$inboundSchema;
  /** @deprecated use `HomeAddress$outboundSchema` instead. */
  export const outboundSchema = HomeAddress$outboundSchema;
  /** @deprecated use `HomeAddress$Outbound` instead. */
  export type Outbound = HomeAddress$Outbound;
}

export function homeAddressToJSON(homeAddress: HomeAddress): string {
  return JSON.stringify(HomeAddress$outboundSchema.parse(homeAddress));
}

export function homeAddressFromJSON(
  jsonString: string,
): SafeParseResult<HomeAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HomeAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HomeAddress' from JSON`,
  );
}

/** @internal */
export const Signatory$inboundSchema: z.ZodType<
  Signatory,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  first_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
  email: z.string().optional(),
  birthday: z.nullable(z.string()).optional(),
  is_admin: z.boolean().optional(),
  has_ssn: z.boolean().optional(),
  version: z.string().optional(),
  identity_verification_status: z.nullable(
    IdentityVerificationStatus$inboundSchema,
  ).optional(),
  home_address: z.nullable(z.lazy(() => HomeAddress$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "is_admin": "isAdmin",
    "has_ssn": "hasSsn",
    "identity_verification_status": "identityVerificationStatus",
    "home_address": "homeAddress",
  });
});

/** @internal */
export type Signatory$Outbound = {
  uuid: string;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  title?: string | null | undefined;
  phone?: string | null | undefined;
  email?: string | undefined;
  birthday?: string | null | undefined;
  is_admin?: boolean | undefined;
  has_ssn?: boolean | undefined;
  version?: string | undefined;
  identity_verification_status?: string | null | undefined;
  home_address?: HomeAddress$Outbound | null | undefined;
};

/** @internal */
export const Signatory$outboundSchema: z.ZodType<
  Signatory$Outbound,
  z.ZodTypeDef,
  Signatory
> = z.object({
  uuid: z.string(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
  email: z.string().optional(),
  birthday: z.nullable(z.string()).optional(),
  isAdmin: z.boolean().optional(),
  hasSsn: z.boolean().optional(),
  version: z.string().optional(),
  identityVerificationStatus: z.nullable(
    IdentityVerificationStatus$outboundSchema,
  ).optional(),
  homeAddress: z.nullable(z.lazy(() => HomeAddress$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    isAdmin: "is_admin",
    hasSsn: "has_ssn",
    identityVerificationStatus: "identity_verification_status",
    homeAddress: "home_address",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Signatory$ {
  /** @deprecated use `Signatory$inboundSchema` instead. */
  export const inboundSchema = Signatory$inboundSchema;
  /** @deprecated use `Signatory$outboundSchema` instead. */
  export const outboundSchema = Signatory$outboundSchema;
  /** @deprecated use `Signatory$Outbound` instead. */
  export type Outbound = Signatory$Outbound;
}

export function signatoryToJSON(signatory: Signatory): string {
  return JSON.stringify(Signatory$outboundSchema.parse(signatory));
}

export function signatoryFromJSON(
  jsonString: string,
): SafeParseResult<Signatory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Signatory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Signatory' from JSON`,
  );
}
