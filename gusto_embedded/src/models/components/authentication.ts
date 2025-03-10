/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Example response
 */
export type Authentication = {
  /**
   * A new access token that can be used for subsequent authenticated requests
   */
  accessToken?: string | undefined;
  /**
   * The literal string 'bearer'
   */
  tokenType?: string | undefined;
  /**
   * The TTL of this token. After this amount of time, you must hit the refresh token endpoint to continue making authenticated requests.
   */
  expiresIn?: number | undefined;
  /**
   * A token that must be passed to the refresh token endpoint to get a new authenticated token.
   */
  refreshToken?: string | undefined;
  /**
   * Datetime for when the new access token is created.
   */
  createdAt?: string | undefined;
  /**
   * All of the scopes for which the access token provides access.
   */
  scope?: string | undefined;
};

/** @internal */
export const Authentication$inboundSchema: z.ZodType<
  Authentication,
  z.ZodTypeDef,
  unknown
> = z.object({
  access_token: z.string().optional(),
  token_type: z.string().default("bearer"),
  expires_in: z.number().default(7200),
  refresh_token: z.string().optional(),
  created_at: z.string().optional(),
  scope: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "access_token": "accessToken",
    "token_type": "tokenType",
    "expires_in": "expiresIn",
    "refresh_token": "refreshToken",
    "created_at": "createdAt",
  });
});

/** @internal */
export type Authentication$Outbound = {
  access_token?: string | undefined;
  token_type: string;
  expires_in: number;
  refresh_token?: string | undefined;
  created_at?: string | undefined;
  scope?: string | undefined;
};

/** @internal */
export const Authentication$outboundSchema: z.ZodType<
  Authentication$Outbound,
  z.ZodTypeDef,
  Authentication
> = z.object({
  accessToken: z.string().optional(),
  tokenType: z.string().default("bearer"),
  expiresIn: z.number().default(7200),
  refreshToken: z.string().optional(),
  createdAt: z.string().optional(),
  scope: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    accessToken: "access_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
    refreshToken: "refresh_token",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Authentication$ {
  /** @deprecated use `Authentication$inboundSchema` instead. */
  export const inboundSchema = Authentication$inboundSchema;
  /** @deprecated use `Authentication$outboundSchema` instead. */
  export const outboundSchema = Authentication$outboundSchema;
  /** @deprecated use `Authentication$Outbound` instead. */
  export type Outbound = Authentication$Outbound;
}

export function authenticationToJSON(authentication: Authentication): string {
  return JSON.stringify(Authentication$outboundSchema.parse(authentication));
}

export function authenticationFromJSON(
  jsonString: string,
): SafeParseResult<Authentication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Authentication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Authentication' from JSON`,
  );
}
