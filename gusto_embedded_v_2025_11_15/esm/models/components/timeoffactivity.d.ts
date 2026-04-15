import * as z from "zod/v3";
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
export declare const TimeOffActivity$inboundSchema: z.ZodType<TimeOffActivity, z.ZodTypeDef, unknown>;
export declare function timeOffActivityFromJSON(jsonString: string): SafeParseResult<TimeOffActivity, SDKValidationError>;
//# sourceMappingURL=timeoffactivity.d.ts.map