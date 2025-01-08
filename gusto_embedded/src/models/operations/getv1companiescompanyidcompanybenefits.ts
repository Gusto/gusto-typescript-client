/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdCompanyBenefitsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Whether to return employee enrollment count
   */
  enrollmentCount?: boolean | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdCompanyBenefitsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    enrollment_count: z.boolean().optional(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "enrollment_count": "enrollmentCount",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound = {
  company_id: string;
  enrollment_count?: boolean | undefined;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdCompanyBenefitsRequest
  > = z.object({
    companyId: z.string(),
    enrollmentCount: z.boolean().optional(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      enrollmentCount: "enrollment_count",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdCompanyBenefitsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound;
}

export function getV1CompaniesCompanyIdCompanyBenefitsRequestToJSON(
  getV1CompaniesCompanyIdCompanyBenefitsRequest:
    GetV1CompaniesCompanyIdCompanyBenefitsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdCompanyBenefitsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdCompanyBenefitsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdCompanyBenefitsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdCompanyBenefitsRequest' from JSON`,
  );
}
