/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdPayPeriodsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  startDate?: string | undefined;
  /**
   * If left empty, defaults to today's date.
   */
  endDate?: string | undefined;
  /**
   * regular and/or transition. Multiple options are comma separated. The default is regular pay periods if nothing is passed in.
   */
  payrollTypes?: string | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdPayPeriodsRequest$inboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdPayPeriodsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  payroll_types: z.string().optional(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "start_date": "startDate",
    "end_date": "endDate",
    "payroll_types": "payrollTypes",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound = {
  company_id: string;
  start_date?: string | undefined;
  end_date?: string | undefined;
  payroll_types?: string | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdPayPeriodsRequest$outboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesCompanyIdPayPeriodsRequest
> = z.object({
  companyId: z.string(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  payrollTypes: z.string().optional(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    startDate: "start_date",
    endDate: "end_date",
    payrollTypes: "payroll_types",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdPayPeriodsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdPayPeriodsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdPayPeriodsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdPayPeriodsRequest$Outbound;
}

export function getV1CompaniesCompanyIdPayPeriodsRequestToJSON(
  getV1CompaniesCompanyIdPayPeriodsRequest:
    GetV1CompaniesCompanyIdPayPeriodsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdPayPeriodsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdPayPeriodsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdPayPeriodsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdPayPeriodsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdPayPeriodsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdPayPeriodsRequest' from JSON`,
  );
}
