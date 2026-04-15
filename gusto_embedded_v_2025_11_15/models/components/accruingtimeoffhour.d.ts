import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of an unprocessed termination pay period.
 */
export type AccruingTimeOffHour = {
    /**
     * A unique identifier of the time off policy.
     */
    timeOffPolicyUuid?: string | undefined;
    /**
     * Hours accrued during this pay period.
     */
    hours?: string | undefined;
};
/** @internal */
export declare const AccruingTimeOffHour$inboundSchema: z.ZodType<AccruingTimeOffHour, z.ZodTypeDef, unknown>;
/** @internal */
export type AccruingTimeOffHour$Outbound = {
    time_off_policy_uuid?: string | undefined;
    hours?: string | undefined;
};
/** @internal */
export declare const AccruingTimeOffHour$outboundSchema: z.ZodType<AccruingTimeOffHour$Outbound, z.ZodTypeDef, AccruingTimeOffHour>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccruingTimeOffHour$ {
    /** @deprecated use `AccruingTimeOffHour$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccruingTimeOffHour, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccruingTimeOffHour$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccruingTimeOffHour$Outbound, z.ZodTypeDef, AccruingTimeOffHour>;
    /** @deprecated use `AccruingTimeOffHour$Outbound` instead. */
    type Outbound = AccruingTimeOffHour$Outbound;
}
export declare function accruingTimeOffHourToJSON(accruingTimeOffHour: AccruingTimeOffHour): string;
export declare function accruingTimeOffHourFromJSON(jsonString: string): SafeParseResult<AccruingTimeOffHour, SDKValidationError>;
//# sourceMappingURL=accruingtimeoffhour.d.ts.map