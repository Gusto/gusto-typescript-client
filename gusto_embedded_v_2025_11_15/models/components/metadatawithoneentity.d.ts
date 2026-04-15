import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * single entity
 */
export type MetadataWithOneEntity = {
    /**
     * Name of the entity that the error corresponds to.
     */
    entityType?: string | undefined;
    /**
     * Unique identifier for the entity.
     */
    entityUuid?: string | undefined;
    validFrom?: string | undefined;
    validUpTo?: string | undefined;
    key?: string | undefined;
    state?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/** @internal */
export declare const MetadataWithOneEntity$inboundSchema: z.ZodType<MetadataWithOneEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type MetadataWithOneEntity$Outbound = {
    entity_type?: string | undefined;
    entity_uuid?: string | undefined;
    valid_from?: string | undefined;
    valid_up_to?: string | undefined;
    key?: string | undefined;
    state?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const MetadataWithOneEntity$outboundSchema: z.ZodType<MetadataWithOneEntity$Outbound, z.ZodTypeDef, MetadataWithOneEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetadataWithOneEntity$ {
    /** @deprecated use `MetadataWithOneEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MetadataWithOneEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `MetadataWithOneEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MetadataWithOneEntity$Outbound, z.ZodTypeDef, MetadataWithOneEntity>;
    /** @deprecated use `MetadataWithOneEntity$Outbound` instead. */
    type Outbound = MetadataWithOneEntity$Outbound;
}
export declare function metadataWithOneEntityToJSON(metadataWithOneEntity: MetadataWithOneEntity): string;
export declare function metadataWithOneEntityFromJSON(jsonString: string): SafeParseResult<MetadataWithOneEntity, SDKValidationError>;
//# sourceMappingURL=metadatawithoneentity.d.ts.map