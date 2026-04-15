import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Name of the parent resource of the described entity.
 */
export declare const ResourceType: {
    readonly Company: "Company";
};
/**
 * Name of the parent resource of the described entity.
 */
export type ResourceType = ClosedEnum<typeof ResourceType>;
/**
 * Representation of an Event
 */
export type Event = {
    /**
     * Unique identifier for the event.
     */
    uuid: string;
    /**
     * Description of the event (e.g., payroll.submitted, or company.form.signed).
     */
    eventType?: string | undefined;
    /**
     * Name of the parent resource of the described entity.
     */
    resourceType?: ResourceType | undefined;
    /**
     * Unique identifier for the parent resource.
     */
    resourceUuid?: string | undefined;
    /**
     * Name of the entity that the event corresponds to.
     */
    entityType?: string | undefined;
    /**
     * Unique identifier for the entity.
     */
    entityUuid?: string | undefined;
    /**
     * Time at which this event was created. Measured in seconds since the Unix epoch.
     */
    timestamp?: number | undefined;
};
/** @internal */
export declare const ResourceType$inboundSchema: z.ZodNativeEnum<typeof ResourceType>;
/** @internal */
export declare const ResourceType$outboundSchema: z.ZodNativeEnum<typeof ResourceType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResourceType$ {
    /** @deprecated use `ResourceType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
    }>;
    /** @deprecated use `ResourceType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
    }>;
}
/** @internal */
export declare const Event$inboundSchema: z.ZodType<Event, z.ZodTypeDef, unknown>;
/** @internal */
export type Event$Outbound = {
    uuid: string;
    event_type?: string | undefined;
    resource_type?: string | undefined;
    resource_uuid?: string | undefined;
    entity_type?: string | undefined;
    entity_uuid?: string | undefined;
    timestamp?: number | undefined;
};
/** @internal */
export declare const Event$outboundSchema: z.ZodType<Event$Outbound, z.ZodTypeDef, Event>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Event$ {
    /** @deprecated use `Event$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Event, z.ZodTypeDef, unknown>;
    /** @deprecated use `Event$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Event$Outbound, z.ZodTypeDef, Event>;
    /** @deprecated use `Event$Outbound` instead. */
    type Outbound = Event$Outbound;
}
export declare function eventToJSON(event: Event): string;
export declare function eventFromJSON(jsonString: string): SafeParseResult<Event, SDKValidationError>;
//# sourceMappingURL=event.d.ts.map