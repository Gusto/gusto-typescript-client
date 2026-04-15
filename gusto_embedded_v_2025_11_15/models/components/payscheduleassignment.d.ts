import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PayScheduleAssignmentDepartment, PayScheduleAssignmentDepartment$Outbound } from "./payscheduleassignmentdepartment.js";
import { PayScheduleAssignmentEmployee, PayScheduleAssignmentEmployee$Outbound } from "./payscheduleassignmentemployee.js";
/**
 * The pay schedule assignment type.
 */
export declare const Type: {
    readonly Single: "single";
    readonly HourlySalaried: "hourly_salaried";
    readonly ByEmployee: "by_employee";
    readonly ByDepartment: "by_department";
};
/**
 * The pay schedule assignment type.
 */
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
export declare const Type$outboundSchema: z.ZodNativeEnum<typeof Type>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
    /** @deprecated use `Type$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
}
/** @internal */
export declare const PayScheduleAssignment$inboundSchema: z.ZodType<PayScheduleAssignment, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignment$Outbound = {
    type?: string | null | undefined;
    hourly_pay_schedule_uuid?: string | null | undefined;
    salaried_pay_schedule_uuid?: string | null | undefined;
    default_pay_schedule_uuid?: string | null | undefined;
    employees?: Array<PayScheduleAssignmentEmployee$Outbound> | null | undefined;
    departments?: Array<PayScheduleAssignmentDepartment$Outbound> | null | undefined;
};
/** @internal */
export declare const PayScheduleAssignment$outboundSchema: z.ZodType<PayScheduleAssignment$Outbound, z.ZodTypeDef, PayScheduleAssignment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignment$ {
    /** @deprecated use `PayScheduleAssignment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignment, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignment$Outbound, z.ZodTypeDef, PayScheduleAssignment>;
    /** @deprecated use `PayScheduleAssignment$Outbound` instead. */
    type Outbound = PayScheduleAssignment$Outbound;
}
export declare function payScheduleAssignmentToJSON(payScheduleAssignment: PayScheduleAssignment): string;
export declare function payScheduleAssignmentFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignment, SDKValidationError>;
//# sourceMappingURL=payscheduleassignment.d.ts.map