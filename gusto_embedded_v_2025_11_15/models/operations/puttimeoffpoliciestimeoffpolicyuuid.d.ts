import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Accrual method of the time off policy
 */
export declare const AccrualMethod: {
    readonly Unlimited: "unlimited";
    readonly PerPayPeriod: "per_pay_period";
    readonly PerCalendarYear: "per_calendar_year";
    readonly PerAnniversaryYear: "per_anniversary_year";
    readonly PerHourWorked: "per_hour_worked";
    readonly PerHourWorkedNoOvertime: "per_hour_worked_no_overtime";
    readonly PerHourPaid: "per_hour_paid";
    readonly PerHourPaidNoOvertime: "per_hour_paid_no_overtime";
};
/**
 * Accrual method of the time off policy
 */
export type AccrualMethod = ClosedEnum<typeof AccrualMethod>;
/**
 * Can update any attributes of the time off policy except policy_type, is_active, complete & employees
 */
export type PutTimeOffPoliciesTimeOffPolicyUuidRequestBody = {
    /**
     * Name of the time off policy
     */
    name?: string | undefined;
    /**
     * Accrual method of the time off policy
     */
    accrualMethod?: AccrualMethod | undefined;
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
     * Number of days before an employee on the policy will begin accruing time off hours. If accrual_method is per_anniversary_year, per_calendar_year, or unlimited, then accrual_waiting_period_days should be 0.
     */
    accrualWaitingPeriodDays?: number | undefined;
    /**
     * The max number of hours an employee can carryover from one year to the next. If accrual_method is unlimited, then carryover_limit_hours must be blank.
     */
    carryoverLimitHours?: string | undefined;
    /**
     * The max number of hours an employee can accrue in a year. If accrual_method is unlimited, then max_accrual_hours_per_year must be blank.
     */
    maxAccrualHoursPerYear?: string | undefined;
    /**
     * The max number of hours an employee can accrue. If accrual_method is unlimited, then max_hours must be blank.
     */
    maxHours?: string | undefined;
};
export type PutTimeOffPoliciesTimeOffPolicyUuidRequest = {
    /**
     * The UUID of the company time off policy
     */
    timeOffPolicyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Can update any attributes of the time off policy except policy_type, is_active, complete & employees
     */
    requestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody;
};
export type PutTimeOffPoliciesTimeOffPolicyUuidResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * OK
     */
    timeOffPolicy?: components.TimeOffPolicy | undefined;
};
/** @internal */
export declare const AccrualMethod$inboundSchema: z.ZodNativeEnum<typeof AccrualMethod>;
/** @internal */
export declare const AccrualMethod$outboundSchema: z.ZodNativeEnum<typeof AccrualMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccrualMethod$ {
    /** @deprecated use `AccrualMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unlimited: "unlimited";
        readonly PerPayPeriod: "per_pay_period";
        readonly PerCalendarYear: "per_calendar_year";
        readonly PerAnniversaryYear: "per_anniversary_year";
        readonly PerHourWorked: "per_hour_worked";
        readonly PerHourWorkedNoOvertime: "per_hour_worked_no_overtime";
        readonly PerHourPaid: "per_hour_paid";
        readonly PerHourPaidNoOvertime: "per_hour_paid_no_overtime";
    }>;
    /** @deprecated use `AccrualMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unlimited: "unlimited";
        readonly PerPayPeriod: "per_pay_period";
        readonly PerCalendarYear: "per_calendar_year";
        readonly PerAnniversaryYear: "per_anniversary_year";
        readonly PerHourWorked: "per_hour_worked";
        readonly PerHourWorkedNoOvertime: "per_hour_worked_no_overtime";
        readonly PerHourPaid: "per_hour_paid";
        readonly PerHourPaidNoOvertime: "per_hour_paid_no_overtime";
    }>;
}
/** @internal */
export declare const PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound = {
    name?: string | undefined;
    accrual_method?: string | undefined;
    accrual_rate?: string | undefined;
    accrual_rate_unit?: string | undefined;
    paid_out_on_termination?: boolean | undefined;
    accrual_waiting_period_days?: number | undefined;
    carryover_limit_hours?: string | undefined;
    max_accrual_hours_per_year?: string | undefined;
    max_hours?: string | undefined;
};
/** @internal */
export declare const PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound, z.ZodTypeDef, PutTimeOffPoliciesTimeOffPolicyUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$ {
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound, z.ZodTypeDef, PutTimeOffPoliciesTimeOffPolicyUuidRequestBody>;
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound` instead. */
    type Outbound = PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound;
}
export declare function putTimeOffPoliciesTimeOffPolicyUuidRequestBodyToJSON(putTimeOffPoliciesTimeOffPolicyUuidRequestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody): string;
export declare function putTimeOffPoliciesTimeOffPolicyUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutTimeOffPoliciesTimeOffPolicyUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound = {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutTimeOffPoliciesTimeOffPolicyUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound, z.ZodTypeDef, PutTimeOffPoliciesTimeOffPolicyUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutTimeOffPoliciesTimeOffPolicyUuidRequest$ {
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound, z.ZodTypeDef, PutTimeOffPoliciesTimeOffPolicyUuidRequest>;
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound` instead. */
    type Outbound = PutTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound;
}
export declare function putTimeOffPoliciesTimeOffPolicyUuidRequestToJSON(putTimeOffPoliciesTimeOffPolicyUuidRequest: PutTimeOffPoliciesTimeOffPolicyUuidRequest): string;
export declare function putTimeOffPoliciesTimeOffPolicyUuidRequestFromJSON(jsonString: string): SafeParseResult<PutTimeOffPoliciesTimeOffPolicyUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound, z.ZodTypeDef, PutTimeOffPoliciesTimeOffPolicyUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutTimeOffPoliciesTimeOffPolicyUuidResponse$ {
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound, z.ZodTypeDef, PutTimeOffPoliciesTimeOffPolicyUuidResponse>;
    /** @deprecated use `PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound` instead. */
    type Outbound = PutTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound;
}
export declare function putTimeOffPoliciesTimeOffPolicyUuidResponseToJSON(putTimeOffPoliciesTimeOffPolicyUuidResponse: PutTimeOffPoliciesTimeOffPolicyUuidResponse): string;
export declare function putTimeOffPoliciesTimeOffPolicyUuidResponseFromJSON(jsonString: string): SafeParseResult<PutTimeOffPoliciesTimeOffPolicyUuidResponse, SDKValidationError>;
//# sourceMappingURL=puttimeoffpoliciestimeoffpolicyuuid.d.ts.map