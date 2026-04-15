import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EmployeeCustomField, EmployeeCustomField$Outbound } from "./employeecustomfield.js";
import { Garnishment, Garnishment$Outbound } from "./garnishment.js";
import { Job, Job$Outbound } from "./job.js";
import { PaidTimeOff, PaidTimeOff$Outbound } from "./paidtimeoff.js";
import { Termination, Termination$Outbound } from "./termination.js";
/**
 * The current onboarding status of the employee
 */
export declare const OnboardingStatus: {
    readonly OnboardingCompleted: "onboarding_completed";
    readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
    readonly SelfOnboardingPendingInvite: "self_onboarding_pending_invite";
    readonly SelfOnboardingInvited: "self_onboarding_invited";
    readonly SelfOnboardingInvitedStarted: "self_onboarding_invited_started";
    readonly SelfOnboardingInvitedOverdue: "self_onboarding_invited_overdue";
    readonly SelfOnboardingCompletedByEmployee: "self_onboarding_completed_by_employee";
    readonly SelfOnboardingAwaitingAdminReview: "self_onboarding_awaiting_admin_review";
};
/**
 * The current onboarding status of the employee
 */
export type OnboardingStatus = ClosedEnum<typeof OnboardingStatus>;
/**
 * Configuration for an employee onboarding documents during onboarding
 */
export type OnboardingDocumentsConfig = {
    /**
     * The UUID of the onboarding documents config
     */
    uuid?: string | null | undefined;
    /**
     * Whether to include Form I-9 for an employee during onboarding
     */
    i9Document?: boolean | undefined;
};
/**
 * The employee's payment method
 */
export declare const PaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The employee's payment method
 */
export type PaymentMethod = ClosedEnum<typeof PaymentMethod>;
/**
 * The current employment status of the employee. Full-time employees work 30+ hours per week. Part-time employees are split into two groups: those that work 20-29 hours a week, and those that work under 20 hours a week. Variable employees have hours that vary each week. Seasonal employees are hired for 6 months of the year or less.
 */
export declare const CurrentEmploymentStatus: {
    readonly FullTime: "full_time";
    readonly PartTimeUnderTwentyHours: "part_time_under_twenty_hours";
    readonly PartTimeTwentyPlusHours: "part_time_twenty_plus_hours";
    readonly Variable: "variable";
    readonly Seasonal: "seasonal";
};
/**
 * The current employment status of the employee. Full-time employees work 30+ hours per week. Part-time employees are split into two groups: those that work 20-29 hours a week, and those that work under 20 hours a week. Variable employees have hours that vary each week. Seasonal employees are hired for 6 months of the year or less.
 */
export type CurrentEmploymentStatus = ClosedEnum<typeof CurrentEmploymentStatus>;
/**
 * The representation of an employee in Gusto.
 */
export type Employee = {
    /**
     * The UUID of the employee in Gusto.
     */
    uuid: string;
    firstName: string;
    middleInitial?: string | null | undefined;
    lastName: string;
    /**
     * The personal email address of the employee. This is provided to support syncing users between our system and yours. You may not use this email address for any other purpose (e.g. marketing).
     */
    email?: string | null | undefined;
    /**
     * The UUID of the company the employee is employed by.
     */
    companyUuid?: string | undefined;
    /**
     * The UUID of the employee's manager.
     */
    managerUuid?: string | null | undefined;
    /**
     * The current version of the employee. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The employee's department in the company.
     */
    department?: string | null | undefined;
    /**
     * Whether the employee is terminated.
     */
    terminated?: boolean | undefined;
    /**
     * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
     */
    twoPercentShareholder?: boolean | null | undefined;
    /**
     * Whether the employee has completed onboarding.
     */
    onboarded?: boolean | undefined;
    /**
     * The current onboarding status of the employee
     */
    onboardingStatus?: OnboardingStatus | undefined;
    /**
     * Configuration for an employee onboarding documents during onboarding
     */
    onboardingDocumentsConfig?: OnboardingDocumentsConfig | undefined;
    jobs?: Array<Job> | undefined;
    eligiblePaidTimeOff?: Array<PaidTimeOff> | undefined;
    terminations?: Array<Termination> | undefined;
    garnishments?: Array<Garnishment> | undefined;
    /**
     * Custom fields are only included for the employee if the include param has the custom_fields value set
     */
    customFields?: Array<EmployeeCustomField> | undefined;
    dateOfBirth?: string | null | undefined;
    /**
     * Indicates whether the employee has an SSN in Gusto.
     */
    hasSsn?: boolean | undefined;
    /**
     * Deprecated. This field always returns an empty string.
     */
    ssn?: string | undefined;
    phone?: string | null | undefined;
    preferredFirstName?: string | null | undefined;
    /**
     * The employee's payment method
     */
    paymentMethod?: PaymentMethod | undefined;
    /**
     * The work email address of the employee. This is provided to support syncing users between our system and yours. You may not use this email address for any other purpose (e.g. marketing).
     */
    workEmail?: string | null | undefined;
    /**
     * The current employment status of the employee. Full-time employees work 30+ hours per week. Part-time employees are split into two groups: those that work 20-29 hours a week, and those that work under 20 hours a week. Variable employees have hours that vary each week. Seasonal employees are hired for 6 months of the year or less.
     */
    currentEmploymentStatus?: CurrentEmploymentStatus | null | undefined;
};
/** @internal */
export declare const OnboardingStatus$inboundSchema: z.ZodNativeEnum<typeof OnboardingStatus>;
/** @internal */
export declare const OnboardingStatus$outboundSchema: z.ZodNativeEnum<typeof OnboardingStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OnboardingStatus$ {
    /** @deprecated use `OnboardingStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly OnboardingCompleted: "onboarding_completed";
        readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
        readonly SelfOnboardingPendingInvite: "self_onboarding_pending_invite";
        readonly SelfOnboardingInvited: "self_onboarding_invited";
        readonly SelfOnboardingInvitedStarted: "self_onboarding_invited_started";
        readonly SelfOnboardingInvitedOverdue: "self_onboarding_invited_overdue";
        readonly SelfOnboardingCompletedByEmployee: "self_onboarding_completed_by_employee";
        readonly SelfOnboardingAwaitingAdminReview: "self_onboarding_awaiting_admin_review";
    }>;
    /** @deprecated use `OnboardingStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly OnboardingCompleted: "onboarding_completed";
        readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
        readonly SelfOnboardingPendingInvite: "self_onboarding_pending_invite";
        readonly SelfOnboardingInvited: "self_onboarding_invited";
        readonly SelfOnboardingInvitedStarted: "self_onboarding_invited_started";
        readonly SelfOnboardingInvitedOverdue: "self_onboarding_invited_overdue";
        readonly SelfOnboardingCompletedByEmployee: "self_onboarding_completed_by_employee";
        readonly SelfOnboardingAwaitingAdminReview: "self_onboarding_awaiting_admin_review";
    }>;
}
/** @internal */
export declare const OnboardingDocumentsConfig$inboundSchema: z.ZodType<OnboardingDocumentsConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type OnboardingDocumentsConfig$Outbound = {
    uuid?: string | null | undefined;
    i9_document?: boolean | undefined;
};
/** @internal */
export declare const OnboardingDocumentsConfig$outboundSchema: z.ZodType<OnboardingDocumentsConfig$Outbound, z.ZodTypeDef, OnboardingDocumentsConfig>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OnboardingDocumentsConfig$ {
    /** @deprecated use `OnboardingDocumentsConfig$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OnboardingDocumentsConfig, z.ZodTypeDef, unknown>;
    /** @deprecated use `OnboardingDocumentsConfig$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OnboardingDocumentsConfig$Outbound, z.ZodTypeDef, OnboardingDocumentsConfig>;
    /** @deprecated use `OnboardingDocumentsConfig$Outbound` instead. */
    type Outbound = OnboardingDocumentsConfig$Outbound;
}
export declare function onboardingDocumentsConfigToJSON(onboardingDocumentsConfig: OnboardingDocumentsConfig): string;
export declare function onboardingDocumentsConfigFromJSON(jsonString: string): SafeParseResult<OnboardingDocumentsConfig, SDKValidationError>;
/** @internal */
export declare const PaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PaymentMethod>;
/** @internal */
export declare const PaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentMethod$ {
    /** @deprecated use `PaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `PaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const CurrentEmploymentStatus$inboundSchema: z.ZodNativeEnum<typeof CurrentEmploymentStatus>;
/** @internal */
export declare const CurrentEmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof CurrentEmploymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CurrentEmploymentStatus$ {
    /** @deprecated use `CurrentEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly FullTime: "full_time";
        readonly PartTimeUnderTwentyHours: "part_time_under_twenty_hours";
        readonly PartTimeTwentyPlusHours: "part_time_twenty_plus_hours";
        readonly Variable: "variable";
        readonly Seasonal: "seasonal";
    }>;
    /** @deprecated use `CurrentEmploymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly FullTime: "full_time";
        readonly PartTimeUnderTwentyHours: "part_time_under_twenty_hours";
        readonly PartTimeTwentyPlusHours: "part_time_twenty_plus_hours";
        readonly Variable: "variable";
        readonly Seasonal: "seasonal";
    }>;
}
/** @internal */
export declare const Employee$inboundSchema: z.ZodType<Employee, z.ZodTypeDef, unknown>;
/** @internal */
export type Employee$Outbound = {
    uuid: string;
    first_name: string;
    middle_initial?: string | null | undefined;
    last_name: string;
    email?: string | null | undefined;
    company_uuid?: string | undefined;
    manager_uuid?: string | null | undefined;
    version?: string | undefined;
    department?: string | null | undefined;
    terminated?: boolean | undefined;
    two_percent_shareholder?: boolean | null | undefined;
    onboarded?: boolean | undefined;
    onboarding_status?: string | undefined;
    onboarding_documents_config?: OnboardingDocumentsConfig$Outbound | undefined;
    jobs?: Array<Job$Outbound> | undefined;
    eligible_paid_time_off?: Array<PaidTimeOff$Outbound> | undefined;
    terminations?: Array<Termination$Outbound> | undefined;
    garnishments?: Array<Garnishment$Outbound> | undefined;
    custom_fields?: Array<EmployeeCustomField$Outbound> | undefined;
    date_of_birth?: string | null | undefined;
    has_ssn?: boolean | undefined;
    ssn?: string | undefined;
    phone?: string | null | undefined;
    preferred_first_name?: string | null | undefined;
    payment_method: string;
    work_email?: string | null | undefined;
    current_employment_status?: string | null | undefined;
};
/** @internal */
export declare const Employee$outboundSchema: z.ZodType<Employee$Outbound, z.ZodTypeDef, Employee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Employee$ {
    /** @deprecated use `Employee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Employee, z.ZodTypeDef, unknown>;
    /** @deprecated use `Employee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Employee$Outbound, z.ZodTypeDef, Employee>;
    /** @deprecated use `Employee$Outbound` instead. */
    type Outbound = Employee$Outbound;
}
export declare function employeeToJSON(employee: Employee): string;
export declare function employeeFromJSON(jsonString: string): SafeParseResult<Employee, SDKValidationError>;
//# sourceMappingURL=employee.d.ts.map