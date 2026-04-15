import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PayScheduleAssignmentPayPeriod, PayScheduleAssignmentPayPeriod$Outbound } from "./payscheduleassignmentpayperiod.js";
import { PayScheduleAssignmentTransitionPayPeriod, PayScheduleAssignmentTransitionPayPeriod$Outbound } from "./payscheduleassignmenttransitionpayperiod.js";
export type PayScheduleAssignmentEmployeeChange = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * The employee's first name.
     */
    firstName?: string | undefined;
    /**
     * The employee's last name.
     */
    lastName?: string | undefined;
    /**
     * New pay schedule frequency and name.
     */
    payFrequency?: string | undefined;
    /**
     * Pay schedule assignment first pay period information.
     */
    firstPayPeriod?: PayScheduleAssignmentPayPeriod | undefined;
    /**
     * Pay schedule assignment transition pay period information.
     */
    transitionPayPeriod?: PayScheduleAssignmentTransitionPayPeriod | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentEmployeeChange$inboundSchema: z.ZodType<PayScheduleAssignmentEmployeeChange, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentEmployeeChange$Outbound = {
    employee_uuid?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    pay_frequency?: string | undefined;
    first_pay_period?: PayScheduleAssignmentPayPeriod$Outbound | undefined;
    transition_pay_period?: PayScheduleAssignmentTransitionPayPeriod$Outbound | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentEmployeeChange$outboundSchema: z.ZodType<PayScheduleAssignmentEmployeeChange$Outbound, z.ZodTypeDef, PayScheduleAssignmentEmployeeChange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentEmployeeChange$ {
    /** @deprecated use `PayScheduleAssignmentEmployeeChange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentEmployeeChange, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentEmployeeChange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentEmployeeChange$Outbound, z.ZodTypeDef, PayScheduleAssignmentEmployeeChange>;
    /** @deprecated use `PayScheduleAssignmentEmployeeChange$Outbound` instead. */
    type Outbound = PayScheduleAssignmentEmployeeChange$Outbound;
}
export declare function payScheduleAssignmentEmployeeChangeToJSON(payScheduleAssignmentEmployeeChange: PayScheduleAssignmentEmployeeChange): string;
export declare function payScheduleAssignmentEmployeeChangeFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentEmployeeChange, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmentemployeechange.d.ts.map