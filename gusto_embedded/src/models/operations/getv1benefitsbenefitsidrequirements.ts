/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1BenefitsBenefitsIdRequirementsRequest = {
  /**
   * The benefit type in Gusto.
   */
  benefitId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1BenefitsBenefitsIdRequirementsRequest$inboundSchema:
  z.ZodType<GetV1BenefitsBenefitsIdRequirementsRequest, z.ZodTypeDef, unknown> =
    z.object({
      benefit_id: z.string(),
      "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
        "2024-04-01",
      ),
    }).transform((v) => {
      return remap$(v, {
        "benefit_id": "benefitId",
        "X-Gusto-API-Version": "xGustoAPIVersion",
      });
    });

/** @internal */
export type GetV1BenefitsBenefitsIdRequirementsRequest$Outbound = {
  benefit_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema:
  z.ZodType<
    GetV1BenefitsBenefitsIdRequirementsRequest$Outbound,
    z.ZodTypeDef,
    GetV1BenefitsBenefitsIdRequirementsRequest
  > = z.object({
    benefitId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      benefitId: "benefit_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1BenefitsBenefitsIdRequirementsRequest$ {
  /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1BenefitsBenefitsIdRequirementsRequest$inboundSchema;
  /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema;
  /** @deprecated use `GetV1BenefitsBenefitsIdRequirementsRequest$Outbound` instead. */
  export type Outbound = GetV1BenefitsBenefitsIdRequirementsRequest$Outbound;
}

export function getV1BenefitsBenefitsIdRequirementsRequestToJSON(
  getV1BenefitsBenefitsIdRequirementsRequest:
    GetV1BenefitsBenefitsIdRequirementsRequest,
): string {
  return JSON.stringify(
    GetV1BenefitsBenefitsIdRequirementsRequest$outboundSchema.parse(
      getV1BenefitsBenefitsIdRequirementsRequest,
    ),
  );
}

export function getV1BenefitsBenefitsIdRequirementsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1BenefitsBenefitsIdRequirementsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1BenefitsBenefitsIdRequirementsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1BenefitsBenefitsIdRequirementsRequest' from JSON`,
  );
}
