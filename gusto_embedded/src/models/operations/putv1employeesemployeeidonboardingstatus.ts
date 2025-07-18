/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeOnboardingStatus,
  EmployeeOnboardingStatus$inboundSchema,
  EmployeeOnboardingStatus$Outbound,
  EmployeeOnboardingStatus$outboundSchema,
} from "../components/employeeonboardingstatus.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export const PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion = {
  TwoThousandAndTwentyFourMinus04Minus01: "2024-04-01",
} as const;
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion =
  ClosedEnum<
    typeof PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
  >;

/**
 * Onboarding status value
 */
export const OnboardingStatus = {
  AdminOnboardingIncomplete: "admin_onboarding_incomplete",
  SelfOnboardingPendingInvite: "self_onboarding_pending_invite",
  SelfOnboardingInvited: "self_onboarding_invited",
  SelfOnboardingInvitedStarted: "self_onboarding_invited_started",
  SelfOnboardingInvitedOverdue: "self_onboarding_invited_overdue",
  SelfOnboardingCompletedByEmployee: "self_onboarding_completed_by_employee",
  SelfOnboardingAwaitingAdminReview: "self_onboarding_awaiting_admin_review",
  OnboardingCompleted: "onboarding_completed",
} as const;
/**
 * Onboarding status value
 */
export type OnboardingStatus = ClosedEnum<typeof OnboardingStatus>;

export type PutV1EmployeesEmployeeIdOnboardingStatusRequestBody = {
  /**
   * Onboarding status value
   */
  onboardingStatus: OnboardingStatus;
};

export type PutV1EmployeesEmployeeIdOnboardingStatusRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?:
    | PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
    | undefined;
  /**
   * The UUID of the employee
   */
  employeeId: string;
  requestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody;
};

export type PutV1EmployeesEmployeeIdOnboardingStatusResponse = {
  httpMeta: HTTPMetadata;
  /**
   * successful
   */
  employeeOnboardingStatus?: EmployeeOnboardingStatus | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$inboundSchema:
  z.ZodNativeEnum<
    typeof PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
  > = z.nativeEnum(
    PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion,
  );

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$outboundSchema:
  z.ZodNativeEnum<
    typeof PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
  > =
    PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$outboundSchema;
}

/** @internal */
export const OnboardingStatus$inboundSchema: z.ZodNativeEnum<
  typeof OnboardingStatus
> = z.nativeEnum(OnboardingStatus);

/** @internal */
export const OnboardingStatus$outboundSchema: z.ZodNativeEnum<
  typeof OnboardingStatus
> = OnboardingStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OnboardingStatus$ {
  /** @deprecated use `OnboardingStatus$inboundSchema` instead. */
  export const inboundSchema = OnboardingStatus$inboundSchema;
  /** @deprecated use `OnboardingStatus$outboundSchema` instead. */
  export const outboundSchema = OnboardingStatus$outboundSchema;
}

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    onboarding_status: OnboardingStatus$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "onboarding_status": "onboardingStatus",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound = {
  onboarding_status: string;
};

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody
  > = z.object({
    onboardingStatus: OnboardingStatus$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      onboardingStatus: "onboarding_status",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdOnboardingStatusRequestBodyToJSON(
  putV1EmployeesEmployeeIdOnboardingStatusRequestBody:
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdOnboardingStatusRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdOnboardingStatusRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdOnboardingStatusRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdOnboardingStatusRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "X-Gusto-API-Version":
      PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$inboundSchema
        .default("2024-04-01"),
    employee_id: z.string(),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "employee_id": "employeeId",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound = {
  "X-Gusto-API-Version": string;
  employee_id: string;
  RequestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdOnboardingStatusRequest
  > = z.object({
    xGustoAPIVersion:
      PutV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion$outboundSchema
        .default("2024-04-01"),
    employeeId: z.string(),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      xGustoAPIVersion: "X-Gusto-API-Version",
      employeeId: "employee_id",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdOnboardingStatusRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound;
}

export function putV1EmployeesEmployeeIdOnboardingStatusRequestToJSON(
  putV1EmployeesEmployeeIdOnboardingStatusRequest:
    PutV1EmployeesEmployeeIdOnboardingStatusRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdOnboardingStatusRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdOnboardingStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdOnboardingStatusRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdOnboardingStatusRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Employee-Onboarding-Status": EmployeeOnboardingStatus$inboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Employee-Onboarding-Status": "employeeOnboardingStatus",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Employee-Onboarding-Status"?: EmployeeOnboardingStatus$Outbound | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdOnboardingStatusResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    employeeOnboardingStatus: EmployeeOnboardingStatus$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      employeeOnboardingStatus: "Employee-Onboarding-Status",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdOnboardingStatusResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound;
}

export function putV1EmployeesEmployeeIdOnboardingStatusResponseToJSON(
  putV1EmployeesEmployeeIdOnboardingStatusResponse:
    PutV1EmployeesEmployeeIdOnboardingStatusResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdOnboardingStatusResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdOnboardingStatusResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdOnboardingStatusResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdOnboardingStatusResponse' from JSON`,
  );
}
