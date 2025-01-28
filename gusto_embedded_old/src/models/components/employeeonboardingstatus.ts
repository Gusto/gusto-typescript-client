/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
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
   * When true, this step has been completed.
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
export const EmployeeOnboardingStatusOnboardingStep$inboundSchema: z.ZodType<
  EmployeeOnboardingStatusOnboardingStep,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string().optional(),
  id: z.string().optional(),
  required: z.boolean().optional(),
  completed: z.boolean().optional(),
  requirements: z.array(z.string()).optional(),
});

/** @internal */
export type EmployeeOnboardingStatusOnboardingStep$Outbound = {
  title?: string | undefined;
  id?: string | undefined;
  required?: boolean | undefined;
  completed?: boolean | undefined;
  requirements?: Array<string> | undefined;
};

/** @internal */
export const EmployeeOnboardingStatusOnboardingStep$outboundSchema: z.ZodType<
  EmployeeOnboardingStatusOnboardingStep$Outbound,
  z.ZodTypeDef,
  EmployeeOnboardingStatusOnboardingStep
> = z.object({
  title: z.string().optional(),
  id: z.string().optional(),
  required: z.boolean().optional(),
  completed: z.boolean().optional(),
  requirements: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeOnboardingStatusOnboardingStep$ {
  /** @deprecated use `EmployeeOnboardingStatusOnboardingStep$inboundSchema` instead. */
  export const inboundSchema =
    EmployeeOnboardingStatusOnboardingStep$inboundSchema;
  /** @deprecated use `EmployeeOnboardingStatusOnboardingStep$outboundSchema` instead. */
  export const outboundSchema =
    EmployeeOnboardingStatusOnboardingStep$outboundSchema;
  /** @deprecated use `EmployeeOnboardingStatusOnboardingStep$Outbound` instead. */
  export type Outbound = EmployeeOnboardingStatusOnboardingStep$Outbound;
}

export function employeeOnboardingStatusOnboardingStepToJSON(
  employeeOnboardingStatusOnboardingStep:
    EmployeeOnboardingStatusOnboardingStep,
): string {
  return JSON.stringify(
    EmployeeOnboardingStatusOnboardingStep$outboundSchema.parse(
      employeeOnboardingStatusOnboardingStep,
    ),
  );
}

export function employeeOnboardingStatusOnboardingStepFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeOnboardingStatusOnboardingStep, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EmployeeOnboardingStatusOnboardingStep$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeOnboardingStatusOnboardingStep' from JSON`,
  );
}

/** @internal */
export const EmployeeOnboardingStatus$inboundSchema: z.ZodType<
  EmployeeOnboardingStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  onboarding_status: z.string().optional(),
  onboarding_steps: z.array(
    z.lazy(() => EmployeeOnboardingStatusOnboardingStep$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "onboarding_status": "onboardingStatus",
    "onboarding_steps": "onboardingSteps",
  });
});

/** @internal */
export type EmployeeOnboardingStatus$Outbound = {
  uuid: string;
  onboarding_status?: string | undefined;
  onboarding_steps?:
    | Array<EmployeeOnboardingStatusOnboardingStep$Outbound>
    | undefined;
};

/** @internal */
export const EmployeeOnboardingStatus$outboundSchema: z.ZodType<
  EmployeeOnboardingStatus$Outbound,
  z.ZodTypeDef,
  EmployeeOnboardingStatus
> = z.object({
  uuid: z.string(),
  onboardingStatus: z.string().optional(),
  onboardingSteps: z.array(
    z.lazy(() => EmployeeOnboardingStatusOnboardingStep$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    onboardingStatus: "onboarding_status",
    onboardingSteps: "onboarding_steps",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeOnboardingStatus$ {
  /** @deprecated use `EmployeeOnboardingStatus$inboundSchema` instead. */
  export const inboundSchema = EmployeeOnboardingStatus$inboundSchema;
  /** @deprecated use `EmployeeOnboardingStatus$outboundSchema` instead. */
  export const outboundSchema = EmployeeOnboardingStatus$outboundSchema;
  /** @deprecated use `EmployeeOnboardingStatus$Outbound` instead. */
  export type Outbound = EmployeeOnboardingStatus$Outbound;
}

export function employeeOnboardingStatusToJSON(
  employeeOnboardingStatus: EmployeeOnboardingStatus,
): string {
  return JSON.stringify(
    EmployeeOnboardingStatus$outboundSchema.parse(employeeOnboardingStatus),
  );
}

export function employeeOnboardingStatusFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeOnboardingStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeOnboardingStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeOnboardingStatus' from JSON`,
  );
}
