import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type EmployeeOnboardingStatusOnboardingStep = {
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
 * The representation of an employee's onboarding status.
 */
export type EmployeeOnboardingStatus = {
    /**
     * Unique identifier for this employee.
     */
    uuid: string;
    /**
     * One of the "onboarding_status" enum values.
     */
    onboardingStatus?: string | undefined;
    /**
     * List of steps required to onboard an employee.
     */
    onboardingSteps?: Array<EmployeeOnboardingStatusOnboardingStep> | undefined;
};
/** @internal */
export declare const EmployeeOnboardingStatusOnboardingStep$inboundSchema: z.ZodType<EmployeeOnboardingStatusOnboardingStep, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeOnboardingStatusOnboardingStep$Outbound = {
    title?: string | undefined;
    id?: string | undefined;
    required?: boolean | undefined;
    completed?: boolean | undefined;
    requirements?: Array<string> | undefined;
};
/** @internal */
export declare const EmployeeOnboardingStatusOnboardingStep$outboundSchema: z.ZodType<EmployeeOnboardingStatusOnboardingStep$Outbound, z.ZodTypeDef, EmployeeOnboardingStatusOnboardingStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeOnboardingStatusOnboardingStep$ {
    /** @deprecated use `EmployeeOnboardingStatusOnboardingStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeOnboardingStatusOnboardingStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeOnboardingStatusOnboardingStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeOnboardingStatusOnboardingStep$Outbound, z.ZodTypeDef, EmployeeOnboardingStatusOnboardingStep>;
    /** @deprecated use `EmployeeOnboardingStatusOnboardingStep$Outbound` instead. */
    type Outbound = EmployeeOnboardingStatusOnboardingStep$Outbound;
}
export declare function employeeOnboardingStatusOnboardingStepToJSON(employeeOnboardingStatusOnboardingStep: EmployeeOnboardingStatusOnboardingStep): string;
export declare function employeeOnboardingStatusOnboardingStepFromJSON(jsonString: string): SafeParseResult<EmployeeOnboardingStatusOnboardingStep, SDKValidationError>;
/** @internal */
export declare const EmployeeOnboardingStatus$inboundSchema: z.ZodType<EmployeeOnboardingStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeOnboardingStatus$Outbound = {
    uuid: string;
    onboarding_status?: string | undefined;
    onboarding_steps?: Array<EmployeeOnboardingStatusOnboardingStep$Outbound> | undefined;
};
/** @internal */
export declare const EmployeeOnboardingStatus$outboundSchema: z.ZodType<EmployeeOnboardingStatus$Outbound, z.ZodTypeDef, EmployeeOnboardingStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeOnboardingStatus$ {
    /** @deprecated use `EmployeeOnboardingStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeOnboardingStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeOnboardingStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeOnboardingStatus$Outbound, z.ZodTypeDef, EmployeeOnboardingStatus>;
    /** @deprecated use `EmployeeOnboardingStatus$Outbound` instead. */
    type Outbound = EmployeeOnboardingStatus$Outbound;
}
export declare function employeeOnboardingStatusToJSON(employeeOnboardingStatus: EmployeeOnboardingStatus): string;
export declare function employeeOnboardingStatusFromJSON(jsonString: string): SafeParseResult<EmployeeOnboardingStatus, SDKValidationError>;
//# sourceMappingURL=employeeonboardingstatus.d.ts.map