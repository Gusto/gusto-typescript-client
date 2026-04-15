import * as z from "zod/v3";
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
export declare function employeeOnboardingStatusOnboardingStepFromJSON(jsonString: string): SafeParseResult<EmployeeOnboardingStatusOnboardingStep, SDKValidationError>;
/** @internal */
export declare const EmployeeOnboardingStatus$inboundSchema: z.ZodType<EmployeeOnboardingStatus, z.ZodTypeDef, unknown>;
export declare function employeeOnboardingStatusFromJSON(jsonString: string): SafeParseResult<EmployeeOnboardingStatus, SDKValidationError>;
//# sourceMappingURL=employeeonboardingstatus.d.ts.map