import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * One of the "onboarding_status" enum values.
 */
export declare const ContractorOnboardingStatusOnboardingStatus: {
    readonly OnboardingCompleted: "onboarding_completed";
    readonly AdminOnboardingReview: "admin_onboarding_review";
    readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
};
/**
 * One of the "onboarding_status" enum values.
 */
export type ContractorOnboardingStatusOnboardingStatus = ClosedEnum<typeof ContractorOnboardingStatusOnboardingStatus>;
export type ContractorOnboardingStatusOnboardingStep = {
    /**
     * User-friendly description of the onboarding step.
     */
    title?: string | undefined;
    /**
     * String identifier for the onboarding step.
     */
    id?: string | undefined;
    /**
     * When true, this step is required.
     */
    required?: boolean | undefined;
    /**
     * When true, this step has been completed.
     */
    completed?: boolean | undefined;
    /**
     * A list of onboarding steps required to begin this step.
     */
    requirements?: Array<string> | undefined;
};
/**
 * The representation of an contractor's onboarding status.
 */
export type ContractorOnboardingStatus = {
    /**
     * Unique identifier for this contractor.
     */
    uuid: string;
    /**
     * One of the "onboarding_status" enum values.
     */
    onboardingStatus?: ContractorOnboardingStatusOnboardingStatus | undefined;
    /**
     * List of steps required to onboard a contractor.
     */
    onboardingSteps?: Array<ContractorOnboardingStatusOnboardingStep> | undefined;
};
/** @internal */
export declare const ContractorOnboardingStatusOnboardingStatus$inboundSchema: z.ZodNativeEnum<typeof ContractorOnboardingStatusOnboardingStatus>;
/** @internal */
export declare const ContractorOnboardingStatusOnboardingStatus$outboundSchema: z.ZodNativeEnum<typeof ContractorOnboardingStatusOnboardingStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorOnboardingStatusOnboardingStatus$ {
    /** @deprecated use `ContractorOnboardingStatusOnboardingStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly OnboardingCompleted: "onboarding_completed";
        readonly AdminOnboardingReview: "admin_onboarding_review";
        readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
    }>;
    /** @deprecated use `ContractorOnboardingStatusOnboardingStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly OnboardingCompleted: "onboarding_completed";
        readonly AdminOnboardingReview: "admin_onboarding_review";
        readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
    }>;
}
/** @internal */
export declare const ContractorOnboardingStatusOnboardingStep$inboundSchema: z.ZodType<ContractorOnboardingStatusOnboardingStep, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorOnboardingStatusOnboardingStep$Outbound = {
    title?: string | undefined;
    id?: string | undefined;
    required?: boolean | undefined;
    completed?: boolean | undefined;
    requirements?: Array<string> | undefined;
};
/** @internal */
export declare const ContractorOnboardingStatusOnboardingStep$outboundSchema: z.ZodType<ContractorOnboardingStatusOnboardingStep$Outbound, z.ZodTypeDef, ContractorOnboardingStatusOnboardingStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorOnboardingStatusOnboardingStep$ {
    /** @deprecated use `ContractorOnboardingStatusOnboardingStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorOnboardingStatusOnboardingStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorOnboardingStatusOnboardingStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorOnboardingStatusOnboardingStep$Outbound, z.ZodTypeDef, ContractorOnboardingStatusOnboardingStep>;
    /** @deprecated use `ContractorOnboardingStatusOnboardingStep$Outbound` instead. */
    type Outbound = ContractorOnboardingStatusOnboardingStep$Outbound;
}
export declare function contractorOnboardingStatusOnboardingStepToJSON(contractorOnboardingStatusOnboardingStep: ContractorOnboardingStatusOnboardingStep): string;
export declare function contractorOnboardingStatusOnboardingStepFromJSON(jsonString: string): SafeParseResult<ContractorOnboardingStatusOnboardingStep, SDKValidationError>;
/** @internal */
export declare const ContractorOnboardingStatus$inboundSchema: z.ZodType<ContractorOnboardingStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorOnboardingStatus$Outbound = {
    uuid: string;
    onboarding_status?: string | undefined;
    onboarding_steps?: Array<ContractorOnboardingStatusOnboardingStep$Outbound> | undefined;
};
/** @internal */
export declare const ContractorOnboardingStatus$outboundSchema: z.ZodType<ContractorOnboardingStatus$Outbound, z.ZodTypeDef, ContractorOnboardingStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorOnboardingStatus$ {
    /** @deprecated use `ContractorOnboardingStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorOnboardingStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorOnboardingStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorOnboardingStatus$Outbound, z.ZodTypeDef, ContractorOnboardingStatus>;
    /** @deprecated use `ContractorOnboardingStatus$Outbound` instead. */
    type Outbound = ContractorOnboardingStatus$Outbound;
}
export declare function contractorOnboardingStatusToJSON(contractorOnboardingStatus: ContractorOnboardingStatus): string;
export declare function contractorOnboardingStatusFromJSON(jsonString: string): SafeParseResult<ContractorOnboardingStatus, SDKValidationError>;
//# sourceMappingURL=contractoronboardingstatus.d.ts.map