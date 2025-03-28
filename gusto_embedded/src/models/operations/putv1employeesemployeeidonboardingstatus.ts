/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
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
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1EmployeesEmployeeIdOnboardingStatusRequestBody = {
  /**
   * The updated onboarding status for the employee
   */
  onboardingStatus: string;
};

export type PutV1EmployeesEmployeeIdOnboardingStatusRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody;
};

export type PutV1EmployeesEmployeeIdOnboardingStatusResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response.
   */
  employeeOnboardingStatus?: EmployeeOnboardingStatus | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    onboarding_status: z.string(),
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
    onboardingStatus: z.string(),
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
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdOnboardingStatusRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
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
