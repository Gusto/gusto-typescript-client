import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MetadataWithOneEntity, MetadataWithOneEntity$Outbound } from "./metadatawithoneentity.js";
/**
 * multiple entities
 */
export type MetadataWithMultipleEntities = {
    entities?: Array<MetadataWithOneEntity> | undefined;
};
/** @internal */
export declare const MetadataWithMultipleEntities$inboundSchema: z.ZodType<MetadataWithMultipleEntities, z.ZodTypeDef, unknown>;
/** @internal */
export type MetadataWithMultipleEntities$Outbound = {
    entities?: Array<MetadataWithOneEntity$Outbound> | undefined;
};
/** @internal */
export declare const MetadataWithMultipleEntities$outboundSchema: z.ZodType<MetadataWithMultipleEntities$Outbound, z.ZodTypeDef, MetadataWithMultipleEntities>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetadataWithMultipleEntities$ {
    /** @deprecated use `MetadataWithMultipleEntities$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MetadataWithMultipleEntities, z.ZodTypeDef, unknown>;
    /** @deprecated use `MetadataWithMultipleEntities$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MetadataWithMultipleEntities$Outbound, z.ZodTypeDef, MetadataWithMultipleEntities>;
    /** @deprecated use `MetadataWithMultipleEntities$Outbound` instead. */
    type Outbound = MetadataWithMultipleEntities$Outbound;
}
export declare function metadataWithMultipleEntitiesToJSON(metadataWithMultipleEntities: MetadataWithMultipleEntities): string;
export declare function metadataWithMultipleEntitiesFromJSON(jsonString: string): SafeParseResult<MetadataWithMultipleEntities, SDKValidationError>;
//# sourceMappingURL=metadatawithmultipleentities.d.ts.map