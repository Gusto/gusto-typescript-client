import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Type of the time off activity
 */
export declare const TimeOffType: {
    readonly Vacation: "vacation";
    readonly Sick: "sick";
};
/**
 * Type of the time off activity
 */
export type TimeOffType = ClosedEnum<typeof TimeOffType>;
/**
 * Representation of a Time Off Activity
 */
export type TimeOffActivity = {
    /**
     * unique identifier of a time off policy
     */
    policyUuid?: string | undefined;
    /**
     * Type of the time off activity
     */
    timeOffType?: TimeOffType | undefined;
    /**
     * The name of the time off policy for this activity
     */
    policyName?: string | undefined;
    /**
     * The type of the time off event/activity
     */
    eventType?: string | undefined;
    /**
     * A description for the time off event/activity
     */
    eventDescription?: string | undefined;
    /**
     * The datetime of the time off activity
     */
    effectiveTime?: string | undefined;
    /**
     * The time off balance at the time of the activity
     */
    balance?: string | undefined;
    /**
     * The amount the time off balance changed as a result of the activity
     */
    balanceChange?: string | undefined;
};
/** @internal */
export declare const TimeOffType$inboundSchema: z.ZodNativeEnum<typeof TimeOffType>;
/** @internal */
export declare const TimeOffType$outboundSchema: z.ZodNativeEnum<typeof TimeOffType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeOffType$ {
    /** @deprecated use `TimeOffType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Vacation: "vacation";
        readonly Sick: "sick";
    }>;
    /** @deprecated use `TimeOffType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Vacation: "vacation";
        readonly Sick: "sick";
    }>;
}
/** @internal */
export declare const TimeOffActivity$inboundSchema: z.ZodType<TimeOffActivity, z.ZodTypeDef, unknown>;
/** @internal */
export type TimeOffActivity$Outbound = {
    policy_uuid?: string | undefined;
    time_off_type?: string | undefined;
    policy_name?: string | undefined;
    event_type?: string | undefined;
    event_description?: string | undefined;
    effective_time?: string | undefined;
    balance?: string | undefined;
    balance_change?: string | undefined;
};
/** @internal */
export declare const TimeOffActivity$outboundSchema: z.ZodType<TimeOffActivity$Outbound, z.ZodTypeDef, TimeOffActivity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeOffActivity$ {
    /** @deprecated use `TimeOffActivity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimeOffActivity, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimeOffActivity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimeOffActivity$Outbound, z.ZodTypeDef, TimeOffActivity>;
    /** @deprecated use `TimeOffActivity$Outbound` instead. */
    type Outbound = TimeOffActivity$Outbound;
}
export declare function timeOffActivityToJSON(timeOffActivity: TimeOffActivity): string;
export declare function timeOffActivityFromJSON(jsonString: string): SafeParseResult<TimeOffActivity, SDKValidationError>;
//# sourceMappingURL=timeoffactivity.d.ts.map