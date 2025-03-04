/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompanyOnboardingStatusRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Comma delimited string indicating whether to include any additional steps of onboarding. Currently only supports the value "external_payroll".
   */
  additionalSteps?: string | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompanyOnboardingStatusRequest$inboundSchema: z.ZodType<
  GetV1CompanyOnboardingStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  additional_steps: z.string().optional(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "additional_steps": "additionalSteps",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompanyOnboardingStatusRequest$Outbound = {
  company_uuid: string;
  additional_steps?: string | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompanyOnboardingStatusRequest$outboundSchema: z.ZodType<
  GetV1CompanyOnboardingStatusRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompanyOnboardingStatusRequest
> = z.object({
  companyUuid: z.string(),
  additionalSteps: z.string().optional(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    additionalSteps: "additional_steps",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompanyOnboardingStatusRequest$ {
  /** @deprecated use `GetV1CompanyOnboardingStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompanyOnboardingStatusRequest$inboundSchema;
  /** @deprecated use `GetV1CompanyOnboardingStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompanyOnboardingStatusRequest$outboundSchema;
  /** @deprecated use `GetV1CompanyOnboardingStatusRequest$Outbound` instead. */
  export type Outbound = GetV1CompanyOnboardingStatusRequest$Outbound;
}

export function getV1CompanyOnboardingStatusRequestToJSON(
  getV1CompanyOnboardingStatusRequest: GetV1CompanyOnboardingStatusRequest,
): string {
  return JSON.stringify(
    GetV1CompanyOnboardingStatusRequest$outboundSchema.parse(
      getV1CompanyOnboardingStatusRequest,
    ),
  );
}

export function getV1CompanyOnboardingStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompanyOnboardingStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompanyOnboardingStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyOnboardingStatusRequest' from JSON`,
  );
}
