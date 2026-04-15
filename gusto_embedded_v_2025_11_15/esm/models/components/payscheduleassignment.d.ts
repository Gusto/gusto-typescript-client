import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PayScheduleAssignmentDepartment } from "./payscheduleassignmentdepartment.js";
import { PayScheduleAssignmentEmployee } from "./payscheduleassignmentemployee.js";
export declare const Type: {
    readonly Single: "single";
    readonly HourlySalaried: "hourly_salaried";
    readonly ByEmployee: "by_employee";
    readonly ByDepartment: "by_department";
};
export type Type = ClosedEnum<typeof Type>;
/**
 * The representation of a pay schedule assignment.
 */
export type PayScheduleAssignment = {
    /**
     * The pay schedule assignment type.
     */
    type?: Type | null | undefined;
    /**
     * Pay schedule for hourly employees.
     */
    hourlyPayScheduleUuid?: string | null | undefined;
    /**
     * Pay schedule for salaried employees.
     */
    salariedPayScheduleUuid?: string | null | undefined;
    /**
     * Default pay schedule for employees.
     */
    defaultPayScheduleUuid?: string | null | undefined;
    /**
     * List of employees and their pay schedules.
     */
    employees?: Array<PayScheduleAssignmentEmployee> | null | undefined;
    /**
     * List of departments and their pay schedules.
     */
    departments?: Array<PayScheduleAssignmentDepartment> | null | undefined;
};
/** @internal */
export declare const Type$inboundSchema: z.ZodNativeEnum<typeof Type>;
/** @internal */
export declare const PayScheduleAssignment$inboundSchema: z.ZodType<PayScheduleAssignment, z.ZodTypeDef, unknown>;
export declare function payScheduleAssignmentFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignment, SDKValidationError>;
//# sourceMappingURL=payscheduleassignment.d.ts.map