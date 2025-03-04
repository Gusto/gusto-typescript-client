/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCompaniesCompanyUuidReportTemplatesReportTypeRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * The report type
   */
  reportType: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$inboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    report_type: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "report_type": "reportType",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound = {
  company_uuid: string;
  report_type: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound,
    z.ZodTypeDef,
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest
  > = z.object({
    companyUuid: z.string(),
    reportType: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      reportType: "report_type",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$ {
  /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$inboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound` instead. */
  export type Outbound =
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$Outbound;
}

export function getCompaniesCompanyUuidReportTemplatesReportTypeRequestToJSON(
  getCompaniesCompanyUuidReportTemplatesReportTypeRequest:
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest,
): string {
  return JSON.stringify(
    GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$outboundSchema
      .parse(getCompaniesCompanyUuidReportTemplatesReportTypeRequest),
  );
}

export function getCompaniesCompanyUuidReportTemplatesReportTypeRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetCompaniesCompanyUuidReportTemplatesReportTypeRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetCompaniesCompanyUuidReportTemplatesReportTypeRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetCompaniesCompanyUuidReportTemplatesReportTypeRequest' from JSON`,
  );
}
