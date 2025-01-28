/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const VersionHeader = {
  TwoThousandAndTwentyFive0201: "2025-02-01",
} as const;
export type VersionHeader = ClosedEnum<typeof VersionHeader>;

/** @internal */
export const VersionHeader$inboundSchema: z.ZodNativeEnum<
  typeof VersionHeader
> = z.nativeEnum(VersionHeader);

/** @internal */
export const VersionHeader$outboundSchema: z.ZodNativeEnum<
  typeof VersionHeader
> = VersionHeader$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VersionHeader$ {
  /** @deprecated use `VersionHeader$inboundSchema` instead. */
  export const inboundSchema = VersionHeader$inboundSchema;
  /** @deprecated use `VersionHeader$outboundSchema` instead. */
  export const outboundSchema = VersionHeader$outboundSchema;
}
