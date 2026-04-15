import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The contractor's wage type, either "Fixed" or "Hourly".
 */
export declare const WageType: {
    readonly Fixed: "Fixed";
    readonly Hourly: "Hourly";
};
/**
 * The contractor's wage type, either "Fixed" or "Hourly".
 */
export type WageType = ClosedEnum<typeof WageType>;
/**
 * The contractor's type, either "Individual" or "Business".
 */
export declare const ContractorType: {
    readonly Individual: "Individual";
    readonly Business: "Business";
};
/**
 * The contractor's type, either "Individual" or "Business".
 */
export type ContractorType = ClosedEnum<typeof ContractorType>;
/**
 * The contractor’s home address.
 */
export type Address = {
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
};
/**
 * One of the "onboarding_status" enum values.
 */
export declare const ContractorOnboardingStatus1: {
    readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
    readonly AdminOnboardingReview: "admin_onboarding_review";
    readonly SelfOnboardingNotInvited: "self_onboarding_not_invited";
    readonly SelfOnboardingInvited: "self_onboarding_invited";
    readonly SelfOnboardingStarted: "self_onboarding_started";
    readonly SelfOnboardingReview: "self_onboarding_review";
    readonly OnboardingCompleted: "onboarding_completed";
};
/**
 * One of the "onboarding_status" enum values.
 */
export type ContractorOnboardingStatus1 = ClosedEnum<typeof ContractorOnboardingStatus1>;
/**
 * The contractor's payment method.
 */
export declare const ContractorPaymentMethod1: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The contractor's payment method.
 */
export type ContractorPaymentMethod1 = ClosedEnum<typeof ContractorPaymentMethod1>;
/**
 * The representation of a contractor (individual or business) in Gusto.
 */
export type Contractor = {
    /**
     * The UUID of the contractor in Gusto.
     */
    uuid: string;
    /**
     * The UUID of the company the contractor is employed by.
     */
    companyUuid?: string | undefined;
    /**
     * The contractor's wage type, either "Fixed" or "Hourly".
     */
    wageType?: WageType | undefined;
    /**
     * The status of the contractor with the company.
     */
    isActive?: boolean | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The contractor's type, either "Individual" or "Business".
     */
    type?: ContractorType | undefined;
    /**
     * The contractor’s first name. This attribute is required for “Individual” contractors and will be ignored for “Business” contractors.
     */
    firstName?: string | null | undefined;
    /**
     * The contractor’s last name. This attribute is required for “Individual” contractors and will be ignored for “Business” contractors.
     */
    lastName?: string | null | undefined;
    /**
     * The contractor’s middle initial. This attribute is optional for “Individual” contractors and will be ignored for “Business” contractors.
     */
    middleInitial?: string | null | undefined;
    /**
     * The name of the contractor business. This attribute is required for “Business” contractors and will be ignored for “Individual” contractors.
     */
    businessName?: string | null | undefined;
    /**
     * The Federal Employer Identification Number of the contractor business. This attribute is optional for “Business” contractors and will be ignored for “Individual” contractors.
     */
    ein?: string | null | undefined;
    /**
     * Whether company's Employer Identification Number (EIN) is present
     */
    hasEin?: boolean | null | undefined;
    /**
     * The contractor’s email address. This attribute is optional for “Individual” contractors and will be ignored for “Business” contractors.
     */
    email?: string | null | undefined;
    /**
     * The contractor's start date.
     */
    startDate?: string | undefined;
    /**
     * The contractor’s home address.
     */
    address?: Address | null | undefined;
    /**
     * The contractor’s hourly rate. This attribute is required if the wage_type is “Hourly”.
     */
    hourlyRate?: string | undefined;
    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the contractor
     */
    fileNewHireReport?: boolean | undefined;
    /**
     * State where the contractor will be conducting the majority of their work for the company.
     *
     * @remarks
     * This value is used when generating the new hire report.
     */
    workState?: string | null | undefined;
    /**
     * The updated onboarding status for the contractor
     */
    onboarded?: boolean | undefined;
    /**
     * One of the "onboarding_status" enum values.
     */
    onboardingStatus?: ContractorOnboardingStatus1 | undefined;
    /**
     * The contractor's payment method.
     */
    paymentMethod?: ContractorPaymentMethod1 | null | undefined;
    /**
     * Indicates whether the contractor has an SSN in Gusto.
     */
    hasSsn?: boolean | undefined;
    /**
     * The UUID of the department the contractor is under
     */
    departmentUuid?: string | null | undefined;
};
/** @internal */
export declare const WageType$inboundSchema: z.ZodNativeEnum<typeof WageType>;
/** @internal */
export declare const WageType$outboundSchema: z.ZodNativeEnum<typeof WageType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WageType$ {
    /** @deprecated use `WageType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "Fixed";
        readonly Hourly: "Hourly";
    }>;
    /** @deprecated use `WageType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "Fixed";
        readonly Hourly: "Hourly";
    }>;
}
/** @internal */
export declare const ContractorType$inboundSchema: z.ZodNativeEnum<typeof ContractorType>;
/** @internal */
export declare const ContractorType$outboundSchema: z.ZodNativeEnum<typeof ContractorType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorType$ {
    /** @deprecated use `ContractorType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Individual: "Individual";
        readonly Business: "Business";
    }>;
    /** @deprecated use `ContractorType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Individual: "Individual";
        readonly Business: "Business";
    }>;
}
/** @internal */
export declare const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown>;
/** @internal */
export type Address$Outbound = {
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
};
/** @internal */
export declare const Address$outboundSchema: z.ZodType<Address$Outbound, z.ZodTypeDef, Address>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Address$ {
    /** @deprecated use `Address$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown>;
    /** @deprecated use `Address$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Address$Outbound, z.ZodTypeDef, Address>;
    /** @deprecated use `Address$Outbound` instead. */
    type Outbound = Address$Outbound;
}
export declare function addressToJSON(address: Address): string;
export declare function addressFromJSON(jsonString: string): SafeParseResult<Address, SDKValidationError>;
/** @internal */
export declare const ContractorOnboardingStatus1$inboundSchema: z.ZodNativeEnum<typeof ContractorOnboardingStatus1>;
/** @internal */
export declare const ContractorOnboardingStatus1$outboundSchema: z.ZodNativeEnum<typeof ContractorOnboardingStatus1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorOnboardingStatus1$ {
    /** @deprecated use `ContractorOnboardingStatus1$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
        readonly AdminOnboardingReview: "admin_onboarding_review";
        readonly SelfOnboardingNotInvited: "self_onboarding_not_invited";
        readonly SelfOnboardingInvited: "self_onboarding_invited";
        readonly SelfOnboardingStarted: "self_onboarding_started";
        readonly SelfOnboardingReview: "self_onboarding_review";
        readonly OnboardingCompleted: "onboarding_completed";
    }>;
    /** @deprecated use `ContractorOnboardingStatus1$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
        readonly AdminOnboardingReview: "admin_onboarding_review";
        readonly SelfOnboardingNotInvited: "self_onboarding_not_invited";
        readonly SelfOnboardingInvited: "self_onboarding_invited";
        readonly SelfOnboardingStarted: "self_onboarding_started";
        readonly SelfOnboardingReview: "self_onboarding_review";
        readonly OnboardingCompleted: "onboarding_completed";
    }>;
}
/** @internal */
export declare const ContractorPaymentMethod1$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentMethod1>;
/** @internal */
export declare const ContractorPaymentMethod1$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentMethod1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentMethod1$ {
    /** @deprecated use `ContractorPaymentMethod1$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `ContractorPaymentMethod1$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const Contractor$inboundSchema: z.ZodType<Contractor, z.ZodTypeDef, unknown>;
/** @internal */
export type Contractor$Outbound = {
    uuid: string;
    company_uuid?: string | undefined;
    wage_type?: string | undefined;
    is_active: boolean;
    version?: string | undefined;
    type?: string | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    middle_initial?: string | null | undefined;
    business_name?: string | null | undefined;
    ein?: string | null | undefined;
    has_ein?: boolean | null | undefined;
    email?: string | null | undefined;
    start_date?: string | undefined;
    address?: Address$Outbound | null | undefined;
    hourly_rate?: string | undefined;
    file_new_hire_report: boolean;
    work_state?: string | null | undefined;
    onboarded?: boolean | undefined;
    onboarding_status?: string | undefined;
    payment_method?: string | null | undefined;
    has_ssn?: boolean | undefined;
    department_uuid?: string | null | undefined;
};
/** @internal */
export declare const Contractor$outboundSchema: z.ZodType<Contractor$Outbound, z.ZodTypeDef, Contractor>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Contractor$ {
    /** @deprecated use `Contractor$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Contractor, z.ZodTypeDef, unknown>;
    /** @deprecated use `Contractor$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Contractor$Outbound, z.ZodTypeDef, Contractor>;
    /** @deprecated use `Contractor$Outbound` instead. */
    type Outbound = Contractor$Outbound;
}
export declare function contractorToJSON(contractor: Contractor): string;
export declare function contractorFromJSON(jsonString: string): SafeParseResult<Contractor, SDKValidationError>;
//# sourceMappingURL=contractor.d.ts.map