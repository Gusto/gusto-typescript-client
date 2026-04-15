import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PayScheduleAssignmentDepartment = {
    /**
     * The UUID of the department.
     */
    departmentUuid?: string | undefined;
    /**
     * The department's pay schedule UUID.
     */
    payScheduleUuid?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentDepartment$inboundSchema: z.ZodType<PayScheduleAssignmentDepartment, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentDepartment$Outbound = {
    department_uuid?: string | undefined;
    pay_schedule_uuid?: string | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentDepartment$outboundSchema: z.ZodType<PayScheduleAssignmentDepartment$Outbound, z.ZodTypeDef, PayScheduleAssignmentDepartment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentDepartment$ {
    /** @deprecated use `PayScheduleAssignmentDepartment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentDepartment, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentDepartment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentDepartment$Outbound, z.ZodTypeDef, PayScheduleAssignmentDepartment>;
    /** @deprecated use `PayScheduleAssignmentDepartment$Outbound` instead. */
    type Outbound = PayScheduleAssignmentDepartment$Outbound;
}
export declare function payScheduleAssignmentDepartmentToJSON(payScheduleAssignmentDepartment: PayScheduleAssignmentDepartment): string;
export declare function payScheduleAssignmentDepartmentFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentDepartment, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmentdepartment.d.ts.map