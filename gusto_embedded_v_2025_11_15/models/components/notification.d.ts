import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Resources = {
    /**
     * The type of entity being described, could be “Contractor”, “Employee”, “BankAccount”, “Payroll”, “ContractorPayment”, “RecoveryCase”, or “Signatory”
     */
    entityType: string;
    /**
     * Unique identifier of the entity
     */
    entityUuid: string;
    /**
     * Optional. The type of a resource that is related to the one described by entity_type and entity_uuid. For instance, if the entity_type is “BankAccount”, the reference_type could be the “Employee” or “Contractor” to whom the bank account belongs.
     */
    referenceType?: string | undefined;
    /**
     * Optional. Unique identifier of the reference.
     */
    referenceUuid?: string | undefined;
};
/**
 * Representation of a notification
 */
export type Notification = {
    /**
     * Unique identifier of a notification.
     */
    uuid: string;
    /**
     * Unique identifier of the company to which the notification belongs.
     */
    companyUuid?: string | undefined;
    /**
     * The title of the notification. This highlights the actionable component of the notification.
     */
    title?: string | undefined;
    /**
     * The message of the notification. This provides additional context for the user and recommends a specific action to resolve the notification.
     */
    message?: string | undefined;
    /**
     * The notification's category.
     */
    category?: string | undefined;
    /**
     * Indicates whether a notification requires action or not. If false, the notification provides critical information only.
     */
    actionable?: boolean | undefined;
    /**
     * Timestamp of when the notification was published.
     */
    publishedAt?: string | undefined;
    /**
     * Timestamp of when the notification is due. If the notification has no due date, this field will be null.
     */
    dueAt?: string | undefined;
    /**
     * An array of entities relevant to the notification
     */
    resources?: Array<Resources> | undefined;
};
/** @internal */
export declare const Resources$inboundSchema: z.ZodType<Resources, z.ZodTypeDef, unknown>;
/** @internal */
export type Resources$Outbound = {
    entity_type: string;
    entity_uuid: string;
    reference_type?: string | undefined;
    reference_uuid?: string | undefined;
};
/** @internal */
export declare const Resources$outboundSchema: z.ZodType<Resources$Outbound, z.ZodTypeDef, Resources>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Resources$ {
    /** @deprecated use `Resources$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Resources, z.ZodTypeDef, unknown>;
    /** @deprecated use `Resources$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Resources$Outbound, z.ZodTypeDef, Resources>;
    /** @deprecated use `Resources$Outbound` instead. */
    type Outbound = Resources$Outbound;
}
export declare function resourcesToJSON(resources: Resources): string;
export declare function resourcesFromJSON(jsonString: string): SafeParseResult<Resources, SDKValidationError>;
/** @internal */
export declare const Notification$inboundSchema: z.ZodType<Notification, z.ZodTypeDef, unknown>;
/** @internal */
export type Notification$Outbound = {
    uuid: string;
    company_uuid?: string | undefined;
    title?: string | undefined;
    message?: string | undefined;
    category?: string | undefined;
    actionable?: boolean | undefined;
    published_at?: string | undefined;
    due_at?: string | undefined;
    resources?: Array<Resources$Outbound> | undefined;
};
/** @internal */
export declare const Notification$outboundSchema: z.ZodType<Notification$Outbound, z.ZodTypeDef, Notification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Notification$ {
    /** @deprecated use `Notification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Notification, z.ZodTypeDef, unknown>;
    /** @deprecated use `Notification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Notification$Outbound, z.ZodTypeDef, Notification>;
    /** @deprecated use `Notification$Outbound` instead. */
    type Outbound = Notification$Outbound;
}
export declare function notificationToJSON(notification: Notification): string;
export declare function notificationFromJSON(jsonString: string): SafeParseResult<Notification, SDKValidationError>;
//# sourceMappingURL=notification.d.ts.map