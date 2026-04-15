import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Pay schedule assignment transition pay period information.
 */
export type PayScheduleAssignmentTransitionPayPeriod = {
    /**
     * Pay period start date.
     */
    startDate?: string | undefined;
    /**
     * Pay period end date.
     */
    endDate?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentTransitionPayPeriod$inboundSchema: z.ZodType<PayScheduleAssignmentTransitionPayPeriod, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentTransitionPayPeriod$Outbound = {
    start_date?: string | undefined;
    end_date?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentTransitionPayPeriod$outboundSchema: z.ZodType<PayScheduleAssignmentTransitionPayPeriod$Outbound, z.ZodTypeDef, PayScheduleAssignmentTransitionPayPeriod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentTransitionPayPeriod$ {
    /** @deprecated use `PayScheduleAssignmentTransitionPayPeriod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentTransitionPayPeriod, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentTransitionPayPeriod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentTransitionPayPeriod$Outbound, z.ZodTypeDef, PayScheduleAssignmentTransitionPayPeriod>;
    /** @deprecated use `PayScheduleAssignmentTransitionPayPeriod$Outbound` instead. */
    type Outbound = PayScheduleAssignmentTransitionPayPeriod$Outbound;
}
export declare function payScheduleAssignmentTransitionPayPeriodToJSON(payScheduleAssignmentTransitionPayPeriod: PayScheduleAssignmentTransitionPayPeriod): string;
export declare function payScheduleAssignmentTransitionPayPeriodFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentTransitionPayPeriod, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmenttransitionpayperiod.d.ts.map