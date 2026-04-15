import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The string identifier for each onboarding step
 */
export declare const Id: {
    readonly AddAddresses: "add_addresses";
    readonly FederalTaxSetup: "federal_tax_setup";
    readonly SelectIndustry: "select_industry";
    readonly AddBankInfo: "add_bank_info";
    readonly AddEmployees: "add_employees";
    readonly StateSetup: "state_setup";
    readonly PayrollSchedule: "payroll_schedule";
    readonly SignAllForms: "sign_all_forms";
    readonly VerifyBankInfo: "verify_bank_info";
    readonly ExternalPayroll: "external_payroll";
};
/**
 * The string identifier for each onboarding step
 */
export type Id = ClosedEnum<typeof Id>;
export declare const Requirements: {
    readonly AddAddresses: "add_addresses";
    readonly FederalTaxSetup: "federal_tax_setup";
    readonly SelectIndustry: "select_industry";
    readonly AddBankInfo: "add_bank_info";
    readonly AddEmployees: "add_employees";
    readonly StateSetup: "state_setup";
    readonly PayrollSchedule: "payroll_schedule";
    readonly SignAllForms: "sign_all_forms";
    readonly VerifyBankInfo: "verify_bank_info";
    readonly ExternalPayroll: "external_payroll";
};
export type Requirements = ClosedEnum<typeof Requirements>;
export type OnboardingStep = {
    /**
     * The display name of the onboarding step
     */
    title?: string | undefined;
    /**
     * The string identifier for each onboarding step
     */
    id?: Id | undefined;
    /**
     * The boolean flag indicating whether the step is required or optional
     */
    required?: boolean | undefined;
    /**
     * The boolean flag indicating whether the step is completed or not.
     */
    completed?: boolean | undefined;
    /**
     * The boolean flag indicating whether the step can be skipped or not.
     */
    skippable?: boolean | undefined;
    /**
     * A list of onboarding step that are required to be completed in order to proceed with the current onboarding step.
     */
    requirements?: Array<Requirements> | undefined;
};
/**
 * The representation of a company's onboarding status
 */
export type CompanyOnboardingStatus = {
    /**
     * the UUID of the company
     */
    uuid: string;
    /**
     * a boolean flag for the company's onboarding status
     */
    onboardingCompleted?: boolean | undefined;
    /**
     * a list of company onboarding steps
     */
    onboardingSteps?: Array<OnboardingStep> | undefined;
};
/** @internal */
export declare const Id$inboundSchema: z.ZodNativeEnum<typeof Id>;
/** @internal */
export declare const Id$outboundSchema: z.ZodNativeEnum<typeof Id>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Id$ {
    /** @deprecated use `Id$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AddAddresses: "add_addresses";
        readonly FederalTaxSetup: "federal_tax_setup";
        readonly SelectIndustry: "select_industry";
        readonly AddBankInfo: "add_bank_info";
        readonly AddEmployees: "add_employees";
        readonly StateSetup: "state_setup";
        readonly PayrollSchedule: "payroll_schedule";
        readonly SignAllForms: "sign_all_forms";
        readonly VerifyBankInfo: "verify_bank_info";
        readonly ExternalPayroll: "external_payroll";
    }>;
    /** @deprecated use `Id$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AddAddresses: "add_addresses";
        readonly FederalTaxSetup: "federal_tax_setup";
        readonly SelectIndustry: "select_industry";
        readonly AddBankInfo: "add_bank_info";
        readonly AddEmployees: "add_employees";
        readonly StateSetup: "state_setup";
        readonly PayrollSchedule: "payroll_schedule";
        readonly SignAllForms: "sign_all_forms";
        readonly VerifyBankInfo: "verify_bank_info";
        readonly ExternalPayroll: "external_payroll";
    }>;
}
/** @internal */
export declare const Requirements$inboundSchema: z.ZodNativeEnum<typeof Requirements>;
/** @internal */
export declare const Requirements$outboundSchema: z.ZodNativeEnum<typeof Requirements>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Requirements$ {
    /** @deprecated use `Requirements$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AddAddresses: "add_addresses";
        readonly FederalTaxSetup: "federal_tax_setup";
        readonly SelectIndustry: "select_industry";
        readonly AddBankInfo: "add_bank_info";
        readonly AddEmployees: "add_employees";
        readonly StateSetup: "state_setup";
        readonly PayrollSchedule: "payroll_schedule";
        readonly SignAllForms: "sign_all_forms";
        readonly VerifyBankInfo: "verify_bank_info";
        readonly ExternalPayroll: "external_payroll";
    }>;
    /** @deprecated use `Requirements$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AddAddresses: "add_addresses";
        readonly FederalTaxSetup: "federal_tax_setup";
        readonly SelectIndustry: "select_industry";
        readonly AddBankInfo: "add_bank_info";
        readonly AddEmployees: "add_employees";
        readonly StateSetup: "state_setup";
        readonly PayrollSchedule: "payroll_schedule";
        readonly SignAllForms: "sign_all_forms";
        readonly VerifyBankInfo: "verify_bank_info";
        readonly ExternalPayroll: "external_payroll";
    }>;
}
/** @internal */
export declare const OnboardingStep$inboundSchema: z.ZodType<OnboardingStep, z.ZodTypeDef, unknown>;
/** @internal */
export type OnboardingStep$Outbound = {
    title?: string | undefined;
    id?: string | undefined;
    required?: boolean | undefined;
    completed?: boolean | undefined;
    skippable?: boolean | undefined;
    requirements?: Array<string> | undefined;
};
/** @internal */
export declare const OnboardingStep$outboundSchema: z.ZodType<OnboardingStep$Outbound, z.ZodTypeDef, OnboardingStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OnboardingStep$ {
    /** @deprecated use `OnboardingStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OnboardingStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `OnboardingStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OnboardingStep$Outbound, z.ZodTypeDef, OnboardingStep>;
    /** @deprecated use `OnboardingStep$Outbound` instead. */
    type Outbound = OnboardingStep$Outbound;
}
export declare function onboardingStepToJSON(onboardingStep: OnboardingStep): string;
export declare function onboardingStepFromJSON(jsonString: string): SafeParseResult<OnboardingStep, SDKValidationError>;
/** @internal */
export declare const CompanyOnboardingStatus$inboundSchema: z.ZodType<CompanyOnboardingStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyOnboardingStatus$Outbound = {
    uuid: string;
    onboarding_completed?: boolean | undefined;
    onboarding_steps?: Array<OnboardingStep$Outbound> | undefined;
};
/** @internal */
export declare const CompanyOnboardingStatus$outboundSchema: z.ZodType<CompanyOnboardingStatus$Outbound, z.ZodTypeDef, CompanyOnboardingStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyOnboardingStatus$ {
    /** @deprecated use `CompanyOnboardingStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyOnboardingStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyOnboardingStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyOnboardingStatus$Outbound, z.ZodTypeDef, CompanyOnboardingStatus>;
    /** @deprecated use `CompanyOnboardingStatus$Outbound` instead. */
    type Outbound = CompanyOnboardingStatus$Outbound;
}
export declare function companyOnboardingStatusToJSON(companyOnboardingStatus: CompanyOnboardingStatus): string;
export declare function companyOnboardingStatusFromJSON(jsonString: string): SafeParseResult<CompanyOnboardingStatus, SDKValidationError>;
//# sourceMappingURL=companyonboardingstatus.d.ts.map