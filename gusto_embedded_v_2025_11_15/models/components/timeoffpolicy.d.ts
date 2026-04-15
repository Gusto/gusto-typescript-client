import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Type of the time off policy
 */
export declare const PolicyType: {
    readonly Vacation: "vacation";
    readonly Sick: "sick";
};
/**
 * Type of the time off policy
 */
export type PolicyType = ClosedEnum<typeof PolicyType>;
export type TimeOffPolicyEmployees = {
    uuid?: string | undefined;
};
/**
 * Representation of a Time Off Policy
 */
export type TimeOffPolicy = {
    /**
     * Unique identifier of a time off policy
     */
    uuid: string;
    /**
     * Unique identifier for the company owning the time off policy
     */
    companyUuid: string;
    /**
     * Name of the time off policy
     */
    name: string;
    /**
     * Type of the time off policy
     */
    policyType: PolicyType;
    /**
     * Policy time off accrual method
     */
    accrualMethod: string;
    /**
     * The rate at which the time off hours will accrue for an employee on the policy. Represented as a float, e.g. "40.0".
     */
    accrualRate?: string | undefined;
    /**
     * The number of hours an employee has to work or be paid for to accrue the number of hours set in the accrual rate. Only used for hourly policies (per_hour_paid, per_hour_paid_no_overtime, per_hour_work, per_hour_worked_no_overtime). Represented as a float, e.g. "40.0".
     */
    accrualRateUnit?: string | undefined;
    /**
     * Boolean representing if an employee's accrued time off hours will be paid out on termination
     */
    paidOutOnTermination?: boolean | undefined;
    /**
     * Number of days before an employee on the policy will begin accruing time off hours
     */
    accrualWaitingPeriodDays?: number | undefined;
    /**
     * The max number of hours an employee can carryover from one year to the next
     */
    carryoverLimitHours?: string | undefined;
    /**
     * The max number of hours an employee can accrue in a year
     */
    maxAccrualHoursPerYear?: string | undefined;
    /**
     * The max number of hours an employee can accrue
     */
    maxHours?: string | undefined;
    /**
     * boolean representing if a policy has completed configuration
     */
    complete?: boolean | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * boolean representing if a policy is active or not
     */
    isActive: boolean;
    /**
     * List of employee UUIDs under a time off policy
     */
    employees: Array<TimeOffPolicyEmployees>;
};
/** @internal */
export declare const PolicyType$inboundSchema: z.ZodNativeEnum<typeof PolicyType>;
/** @internal */
export declare const PolicyType$outboundSchema: z.ZodNativeEnum<typeof PolicyType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyType$ {
    /** @deprecated use `PolicyType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Vacation: "vacation";
        readonly Sick: "sick";
    }>;
    /** @deprecated use `PolicyType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Vacation: "vacation";
        readonly Sick: "sick";
    }>;
}
/** @internal */
export declare const TimeOffPolicyEmployees$inboundSchema: z.ZodType<TimeOffPolicyEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type TimeOffPolicyEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const TimeOffPolicyEmployees$outboundSchema: z.ZodType<TimeOffPolicyEmployees$Outbound, z.ZodTypeDef, TimeOffPolicyEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeOffPolicyEmployees$ {
    /** @deprecated use `TimeOffPolicyEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimeOffPolicyEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimeOffPolicyEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimeOffPolicyEmployees$Outbound, z.ZodTypeDef, TimeOffPolicyEmployees>;
    /** @deprecated use `TimeOffPolicyEmployees$Outbound` instead. */
    type Outbound = TimeOffPolicyEmployees$Outbound;
}
export declare function timeOffPolicyEmployeesToJSON(timeOffPolicyEmployees: TimeOffPolicyEmployees): string;
export declare function timeOffPolicyEmployeesFromJSON(jsonString: string): SafeParseResult<TimeOffPolicyEmployees, SDKValidationError>;
/** @internal */
export declare const TimeOffPolicy$inboundSchema: z.ZodType<TimeOffPolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type TimeOffPolicy$Outbound = {
    uuid: string;
    company_uuid: string;
    name: string;
    policy_type: string;
    accrual_method: string;
    accrual_rate?: string | undefined;
    accrual_rate_unit?: string | undefined;
    paid_out_on_termination?: boolean | undefined;
    accrual_waiting_period_days?: number | undefined;
    carryover_limit_hours?: string | undefined;
    max_accrual_hours_per_year?: string | undefined;
    max_hours?: string | undefined;
    complete?: boolean | undefined;
    version?: string | undefined;
    is_active: boolean;
    employees: Array<TimeOffPolicyEmployees$Outbound>;
};
/** @internal */
export declare const TimeOffPolicy$outboundSchema: z.ZodType<TimeOffPolicy$Outbound, z.ZodTypeDef, TimeOffPolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeOffPolicy$ {
    /** @deprecated use `TimeOffPolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimeOffPolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimeOffPolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimeOffPolicy$Outbound, z.ZodTypeDef, TimeOffPolicy>;
    /** @deprecated use `TimeOffPolicy$Outbound` instead. */
    type Outbound = TimeOffPolicy$Outbound;
}
export declare function timeOffPolicyToJSON(timeOffPolicy: TimeOffPolicy): string;
export declare function timeOffPolicyFromJSON(jsonString: string): SafeParseResult<TimeOffPolicy, SDKValidationError>;
//# sourceMappingURL=timeoffpolicy.d.ts.map