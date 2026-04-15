import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PayScheduleAssignmentEmployee = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * The employee's pay schedule UUID.
     */
    payScheduleUuid?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentEmployee$inboundSchema: z.ZodType<PayScheduleAssignmentEmployee, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentEmployee$Outbound = {
    employee_uuid?: string | undefined;
    pay_schedule_uuid?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentEmployee$outboundSchema: z.ZodType<PayScheduleAssignmentEmployee$Outbound, z.ZodTypeDef, PayScheduleAssignmentEmployee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentEmployee$ {
    /** @deprecated use `PayScheduleAssignmentEmployee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentEmployee, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentEmployee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentEmployee$Outbound, z.ZodTypeDef, PayScheduleAssignmentEmployee>;
    /** @deprecated use `PayScheduleAssignmentEmployee$Outbound` instead. */
    type Outbound = PayScheduleAssignmentEmployee$Outbound;
}
export declare function payScheduleAssignmentEmployeeToJSON(payScheduleAssignmentEmployee: PayScheduleAssignmentEmployee): string;
export declare function payScheduleAssignmentEmployeeFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentEmployee, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmentemployee.d.ts.map