/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompanyFinishOnboardingRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompanyFinishOnboardingRequest$inboundSchema: z.ZodType<
  GetV1CompanyFinishOnboardingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompanyFinishOnboardingRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompanyFinishOnboardingRequest$outboundSchema: z.ZodType<
  GetV1CompanyFinishOnboardingRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompanyFinishOnboardingRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompanyFinishOnboardingRequest$ {
  /** @deprecated use `GetV1CompanyFinishOnboardingRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompanyFinishOnboardingRequest$inboundSchema;
  /** @deprecated use `GetV1CompanyFinishOnboardingRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompanyFinishOnboardingRequest$outboundSchema;
  /** @deprecated use `GetV1CompanyFinishOnboardingRequest$Outbound` instead. */
  export type Outbound = GetV1CompanyFinishOnboardingRequest$Outbound;
}

export function getV1CompanyFinishOnboardingRequestToJSON(
  getV1CompanyFinishOnboardingRequest: GetV1CompanyFinishOnboardingRequest,
): string {
  return JSON.stringify(
    GetV1CompanyFinishOnboardingRequest$outboundSchema.parse(
      getV1CompanyFinishOnboardingRequest,
    ),
  );
}

export function getV1CompanyFinishOnboardingRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompanyFinishOnboardingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompanyFinishOnboardingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyFinishOnboardingRequest' from JSON`,
  );
}
