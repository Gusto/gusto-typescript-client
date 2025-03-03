/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1CompanyBenefitsCompanyBenefitIdRequest = {
  /**
   * The UUID of the company benefit
   */
  companyBenefitId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const DeleteV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema:
  z.ZodType<
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_benefit_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_benefit_id": "companyBenefitId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
  company_benefit_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema:
  z.ZodType<
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest
  > = z.object({
    companyBenefitId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      companyBenefitId: "company_benefit_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1CompanyBenefitsCompanyBenefitIdRequest$ {
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema;
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema;
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest$Outbound;
}

export function deleteV1CompanyBenefitsCompanyBenefitIdRequestToJSON(
  deleteV1CompanyBenefitsCompanyBenefitIdRequest:
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
): string {
  return JSON.stringify(
    DeleteV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema.parse(
      deleteV1CompanyBenefitsCompanyBenefitIdRequest,
    ),
  );
}

export function deleteV1CompanyBenefitsCompanyBenefitIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1CompanyBenefitsCompanyBenefitIdRequest' from JSON`,
  );
}
