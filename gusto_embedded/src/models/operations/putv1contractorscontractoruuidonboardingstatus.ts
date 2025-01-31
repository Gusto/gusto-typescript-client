/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The updated onboarding status for the contractor
 */
export const OnboardingStatus = {
  OnboardingCompleted: "onboarding_completed",
} as const;
/**
 * The updated onboarding status for the contractor
 */
export type OnboardingStatus = ClosedEnum<typeof OnboardingStatus>;

export type PutV1ContractorsContractorUuidOnboardingStatusRequestBody = {
  /**
   * The updated onboarding status for the contractor
   */
  onboardingStatus?: OnboardingStatus | undefined;
};

export type PutV1ContractorsContractorUuidOnboardingStatusRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody;
};

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
export const PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema:
  z.ZodType<
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    onboarding_status: OnboardingStatus$inboundSchema.default(
      "onboarding_completed",
    ),
  }).transform((v) => {
    return remap$(v, {
      "onboarding_status": "onboardingStatus",
    });
  });

/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound =
  {
    onboarding_status: string;
  };

/** @internal */
export const PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema:
  z.ZodType<
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody
  > = z.object({
    onboardingStatus: OnboardingStatus$outboundSchema.default(
      "onboarding_completed",
    ),
  }).transform((v) => {
    return remap$(v, {
      onboardingStatus: "onboarding_status",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorsContractorUuidOnboardingStatusRequestBody$ {
  /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound;
}

export function putV1ContractorsContractorUuidOnboardingStatusRequestBodyToJSON(
  putV1ContractorsContractorUuidOnboardingStatusRequestBody:
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody,
): string {
  return JSON.stringify(
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema
      .parse(putV1ContractorsContractorUuidOnboardingStatusRequestBody),
  );
}

export function putV1ContractorsContractorUuidOnboardingStatusRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1ContractorsContractorUuidOnboardingStatusRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1ContractorsContractorUuidOnboardingStatusRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema:
  z.ZodType<
    PutV1ContractorsContractorUuidOnboardingStatusRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    contractor_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "contractor_uuid": "contractorUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound = {
  contractor_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody:
    PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound;
};

/** @internal */
export const PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema:
  z.ZodType<
    PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound,
    z.ZodTypeDef,
    PutV1ContractorsContractorUuidOnboardingStatusRequest
  > = z.object({
    contractorUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      contractorUuid: "contractor_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorsContractorUuidOnboardingStatusRequest$ {
  /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound` instead. */
  export type Outbound =
    PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound;
}

export function putV1ContractorsContractorUuidOnboardingStatusRequestToJSON(
  putV1ContractorsContractorUuidOnboardingStatusRequest:
    PutV1ContractorsContractorUuidOnboardingStatusRequest,
): string {
  return JSON.stringify(
    PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema.parse(
      putV1ContractorsContractorUuidOnboardingStatusRequest,
    ),
  );
}

export function putV1ContractorsContractorUuidOnboardingStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1ContractorsContractorUuidOnboardingStatusRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1ContractorsContractorUuidOnboardingStatusRequest' from JSON`,
  );
}
