/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MetadataWithOneEntity,
  MetadataWithOneEntity$inboundSchema,
  MetadataWithOneEntity$Outbound,
  MetadataWithOneEntity$outboundSchema,
} from "./metadatawithoneentity.js";

/**
 * multiple entities
 */
export type MetadataWithMultipleEntities = {
  entities: Array<MetadataWithOneEntity>;
};

/** @internal */
export const MetadataWithMultipleEntities$inboundSchema: z.ZodType<
  MetadataWithMultipleEntities,
  z.ZodTypeDef,
  unknown
> = z.object({
  entities: z.array(MetadataWithOneEntity$inboundSchema),
});

/** @internal */
export type MetadataWithMultipleEntities$Outbound = {
  entities: Array<MetadataWithOneEntity$Outbound>;
};

/** @internal */
export const MetadataWithMultipleEntities$outboundSchema: z.ZodType<
  MetadataWithMultipleEntities$Outbound,
  z.ZodTypeDef,
  MetadataWithMultipleEntities
> = z.object({
  entities: z.array(MetadataWithOneEntity$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetadataWithMultipleEntities$ {
  /** @deprecated use `MetadataWithMultipleEntities$inboundSchema` instead. */
  export const inboundSchema = MetadataWithMultipleEntities$inboundSchema;
  /** @deprecated use `MetadataWithMultipleEntities$outboundSchema` instead. */
  export const outboundSchema = MetadataWithMultipleEntities$outboundSchema;
  /** @deprecated use `MetadataWithMultipleEntities$Outbound` instead. */
  export type Outbound = MetadataWithMultipleEntities$Outbound;
}

export function metadataWithMultipleEntitiesToJSON(
  metadataWithMultipleEntities: MetadataWithMultipleEntities,
): string {
  return JSON.stringify(
    MetadataWithMultipleEntities$outboundSchema.parse(
      metadataWithMultipleEntities,
    ),
  );
}

export function metadataWithMultipleEntitiesFromJSON(
  jsonString: string,
): SafeParseResult<MetadataWithMultipleEntities, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetadataWithMultipleEntities$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetadataWithMultipleEntities' from JSON`,
  );
}
