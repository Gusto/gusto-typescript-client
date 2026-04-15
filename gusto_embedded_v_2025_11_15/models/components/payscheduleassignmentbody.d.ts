import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The pay schedule assignment type.
 */
export declare const PayScheduleAssignmentBodyType: {
    readonly Single: "single";
    readonly HourlySalaried: "hourly_salaried";
    readonly ByEmployee: "by_employee";
    readonly ByDepartment: "by_department";
};
/**
 * The pay schedule assignment type.
 */
export type PayScheduleAssignmentBodyType = ClosedEnum<typeof PayScheduleAssignmentBodyType>;
export type Employees = {
    /**
     * Employee UUID
     */
    employeeUuid?: string | undefined;
    /**
     * Pay schedule UUID
     */
    payScheduleUuid?: string | undefined;
};
export type Departments = {
    /**
     * Department UUID
     */
    departmentUuid?: string | undefined;
    /**
     * Pay schedule UUID
     */
    payScheduleUuid?: string | undefined;
};
export type PayScheduleAssignmentBody = {
    /**
     * The pay schedule assignment type.
     */
    type: PayScheduleAssignmentBodyType | null;
    /**
     * Pay schedule for hourly employees.
     */
    hourlyPayScheduleUuid?: string | undefined;
    /**
     * Pay schedule for salaried employees.
     */
    salariedPayScheduleUuid?: string | undefined;
    /**
     * Default pay schedule for employees.
     */
    defaultPayScheduleUuid?: string | undefined;
    /**
     * Indicates whether the request provides pay schedule assignments for a partial list of employees or departments of the company. By default, this is set to false.
     */
    partialAssignment?: boolean | undefined;
    /**
     * List of employees and their pay schedules.
     */
    employees?: Array<Employees> | undefined;
    /**
     * List of departments and their pay schedules.
     */
    departments?: Array<Departments> | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentBodyType$inboundSchema: z.ZodNativeEnum<typeof PayScheduleAssignmentBodyType>;
/** @internal */
export declare const PayScheduleAssignmentBodyType$outboundSchema: z.ZodNativeEnum<typeof PayScheduleAssignmentBodyType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentBodyType$ {
    /** @deprecated use `PayScheduleAssignmentBodyType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
    /** @deprecated use `PayScheduleAssignmentBodyType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Single: "single";
        readonly HourlySalaried: "hourly_salaried";
        readonly ByEmployee: "by_employee";
        readonly ByDepartment: "by_department";
    }>;
}
/** @internal */
export declare const Employees$inboundSchema: z.ZodType<Employees, z.ZodTypeDef, unknown>;
/** @internal */
export type Employees$Outbound = {
    employee_uuid?: string | undefined;
    pay_schedule_uuid?: string | undefined;
};
/** @internal */
export declare const Employees$outboundSchema: z.ZodType<Employees$Outbound, z.ZodTypeDef, Employees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Employees$ {
    /** @deprecated use `Employees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Employees, z.ZodTypeDef, unknown>;
    /** @deprecated use `Employees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Employees$Outbound, z.ZodTypeDef, Employees>;
    /** @deprecated use `Employees$Outbound` instead. */
    type Outbound = Employees$Outbound;
}
export declare function employeesToJSON(employees: Employees): string;
export declare function employeesFromJSON(jsonString: string): SafeParseResult<Employees, SDKValidationError>;
/** @internal */
export declare const Departments$inboundSchema: z.ZodType<Departments, z.ZodTypeDef, unknown>;
/** @internal */
export type Departments$Outbound = {
    department_uuid?: string | undefined;
    pay_schedule_uuid?: string | undefined;
};
/** @internal */
export declare const Departments$outboundSchema: z.ZodType<Departments$Outbound, z.ZodTypeDef, Departments>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Departments$ {
    /** @deprecated use `Departments$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Departments, z.ZodTypeDef, unknown>;
    /** @deprecated use `Departments$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Departments$Outbound, z.ZodTypeDef, Departments>;
    /** @deprecated use `Departments$Outbound` instead. */
    type Outbound = Departments$Outbound;
}
export declare function departmentsToJSON(departments: Departments): string;
export declare function departmentsFromJSON(jsonString: string): SafeParseResult<Departments, SDKValidationError>;
/** @internal */
export declare const PayScheduleAssignmentBody$inboundSchema: z.ZodType<PayScheduleAssignmentBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PayScheduleAssignmentBody$Outbound = {
    type: string | null;
    hourly_pay_schedule_uuid?: string | undefined;
    salaried_pay_schedule_uuid?: string | undefined;
    default_pay_schedule_uuid?: string | undefined;
    partial_assignment?: boolean | undefined;
    employees?: Array<Employees$Outbound> | undefined;
    departments?: Array<Departments$Outbound> | undefined;
};
/** @internal */
export declare const PayScheduleAssignmentBody$outboundSchema: z.ZodType<PayScheduleAssignmentBody$Outbound, z.ZodTypeDef, PayScheduleAssignmentBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayScheduleAssignmentBody$ {
    /** @deprecated use `PayScheduleAssignmentBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayScheduleAssignmentBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayScheduleAssignmentBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayScheduleAssignmentBody$Outbound, z.ZodTypeDef, PayScheduleAssignmentBody>;
    /** @deprecated use `PayScheduleAssignmentBody$Outbound` instead. */
    type Outbound = PayScheduleAssignmentBody$Outbound;
}
export declare function payScheduleAssignmentBodyToJSON(payScheduleAssignmentBody: PayScheduleAssignmentBody): string;
export declare function payScheduleAssignmentBodyFromJSON(jsonString: string): SafeParseResult<PayScheduleAssignmentBody, SDKValidationError>;
//# sourceMappingURL=payscheduleassignmentbody.d.ts.map