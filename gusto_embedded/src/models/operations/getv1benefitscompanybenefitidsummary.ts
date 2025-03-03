/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1BenefitsCompanyBenefitIdSummaryRequest = {
  /**
   * The UUID of the company benefit
   */
  companyBenefitId: string;
  /**
   * The start date for which to retrieve company benefit summary
   */
  startDate?: string | undefined;
  /**
   * The end date for which to retrieve company benefit summary. If left empty, defaults to today's date.
   */
  endDate?: string | undefined;
  /**
   * Display employee payroll item summary
   */
  detailed?: boolean | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1BenefitsCompanyBenefitIdSummaryRequest$inboundSchema:
  z.ZodType<
    GetV1BenefitsCompanyBenefitIdSummaryRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_benefit_id: z.string(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    detailed: z.boolean().optional(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_benefit_id": "companyBenefitId",
      "start_date": "startDate",
      "end_date": "endDate",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound = {
  company_benefit_id: string;
  start_date?: string | undefined;
  end_date?: string | undefined;
  detailed?: boolean | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1BenefitsCompanyBenefitIdSummaryRequest$outboundSchema:
  z.ZodType<
    GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound,
    z.ZodTypeDef,
    GetV1BenefitsCompanyBenefitIdSummaryRequest
  > = z.object({
    companyBenefitId: z.string(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    detailed: z.boolean().optional(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      companyBenefitId: "company_benefit_id",
      startDate: "start_date",
      endDate: "end_date",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1BenefitsCompanyBenefitIdSummaryRequest$ {
  /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1BenefitsCompanyBenefitIdSummaryRequest$inboundSchema;
  /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1BenefitsCompanyBenefitIdSummaryRequest$outboundSchema;
  /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound` instead. */
  export type Outbound = GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound;
}

export function getV1BenefitsCompanyBenefitIdSummaryRequestToJSON(
  getV1BenefitsCompanyBenefitIdSummaryRequest:
    GetV1BenefitsCompanyBenefitIdSummaryRequest,
): string {
  return JSON.stringify(
    GetV1BenefitsCompanyBenefitIdSummaryRequest$outboundSchema.parse(
      getV1BenefitsCompanyBenefitIdSummaryRequest,
    ),
  );
}

export function getV1BenefitsCompanyBenefitIdSummaryRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1BenefitsCompanyBenefitIdSummaryRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1BenefitsCompanyBenefitIdSummaryRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1BenefitsCompanyBenefitIdSummaryRequest' from JSON`,
  );
}
