import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Accrual method of the time off policy
 */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod: {
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
export type PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod = ClosedEnum<typeof PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod>;
/**
 * Requires a policy name, a policy_type, and an accrual_method
 */
export type PostCompaniesCompanyUuidTimeOffPoliciesRequestBody = {
    /**
     * Name of the time off policy
     */
    name: string;
    /**
     * Type of the time off policy. Currently only "vacation" and "sick" are supported
     */
    policyType: string;
    /**
     * Accrual method of the time off policy
     */
    accrualMethod: PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod;
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
export type PostCompaniesCompanyUuidTimeOffPoliciesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Requires a policy name, a policy_type, and an accrual_method
     */
    requestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody;
};
export type PostCompaniesCompanyUuidTimeOffPoliciesResponse = {
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
     * Created
     */
    timeOffPolicy?: components.TimeOffPolicy | undefined;
};
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema: z.ZodNativeEnum<typeof PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod>;
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$outboundSchema: z.ZodNativeEnum<typeof PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$ {
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$inboundSchema` instead. */
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
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesAccrualMethod$outboundSchema` instead. */
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
export declare const PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound = {
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
};
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidTimeOffPoliciesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$ {
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidTimeOffPoliciesRequestBody>;
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound;
}
export declare function postCompaniesCompanyUuidTimeOffPoliciesRequestBodyToJSON(postCompaniesCompanyUuidTimeOffPoliciesRequestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody): string;
export declare function postCompaniesCompanyUuidTimeOffPoliciesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidTimeOffPoliciesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostCompaniesCompanyUuidTimeOffPoliciesRequestBody$Outbound;
};
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidTimeOffPoliciesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidTimeOffPoliciesRequest$ {
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidTimeOffPoliciesRequest>;
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidTimeOffPoliciesRequest$Outbound;
}
export declare function postCompaniesCompanyUuidTimeOffPoliciesRequestToJSON(postCompaniesCompanyUuidTimeOffPoliciesRequest: PostCompaniesCompanyUuidTimeOffPoliciesRequest): string;
export declare function postCompaniesCompanyUuidTimeOffPoliciesRequestFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidTimeOffPoliciesRequest, SDKValidationError>;
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesResponse$inboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const PostCompaniesCompanyUuidTimeOffPoliciesResponse$outboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidTimeOffPoliciesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesCompanyUuidTimeOffPoliciesResponse$ {
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound, z.ZodTypeDef, PostCompaniesCompanyUuidTimeOffPoliciesResponse>;
    /** @deprecated use `PostCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound` instead. */
    type Outbound = PostCompaniesCompanyUuidTimeOffPoliciesResponse$Outbound;
}
export declare function postCompaniesCompanyUuidTimeOffPoliciesResponseToJSON(postCompaniesCompanyUuidTimeOffPoliciesResponse: PostCompaniesCompanyUuidTimeOffPoliciesResponse): string;
export declare function postCompaniesCompanyUuidTimeOffPoliciesResponseFromJSON(jsonString: string): SafeParseResult<PostCompaniesCompanyUuidTimeOffPoliciesResponse, SDKValidationError>;
//# sourceMappingURL=postcompaniescompanyuuidtimeoffpolicies.d.ts.map