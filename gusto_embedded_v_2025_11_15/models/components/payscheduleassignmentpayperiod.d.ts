import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Pay schedule assignment first pay period information.
 */
export type PayScheduleAssignmentPayPeriod = {
    /**
     * The pay schedule UUID.
     */
    payScheduleUuid?: string | undefined;
    /**
     * Pay period start date.
     */
    startDate?: string | undefined;
    /**
     * Pay period end date.
     */
    endDate?: string | undefined;
    /**
     * Pay period check date.
     */
    checkDate?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentPayPeriod$inboundSchema: z.ZodType<PayScheduleAssignmentPayPeriod, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentPayPeriod$Outbound = {
    pay_schedule_uuid?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    check_date?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentPayPeriod$outboundSchema: z.ZodType<PayScheduleAssignmentPayPeriod$Outbound, z.ZodTypeDef, PayScheduleAssignmentPayPeriod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentPayPeriod$ {
    /** @deprecated use `PayScheduleAssignmentPayPeriod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentPayPeriod, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentPayPeriod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentPayPeriod$Outbound, z.ZodTypeDef, PayScheduleAssignmentPayPeriod>;
    /** @deprecated use `PayScheduleAssignmentPayPeriod$Outbound` instead. */
    type Outbound = PayScheduleAssignmentPayPeriod$Outbound;
}
export declare function payScheduleAssignmentPayPeriodToJSON(payScheduleAssignmentPayPeriod: PayScheduleAssignmentPayPeriod): string;
export declare function payScheduleAssignmentPayPeriodFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentPayPeriod, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmentpayperiod.d.ts.map