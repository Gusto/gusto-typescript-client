/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCompaniesCompanyUuidHolidayPayPolicyRequest = {
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
export const GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidHolidayPayPolicyRequest,
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
export type GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound,
    z.ZodTypeDef,
    GetCompaniesCompanyUuidHolidayPayPolicyRequest
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
export namespace GetCompaniesCompanyUuidHolidayPayPolicyRequest$ {
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
  export type Outbound =
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}

export function getCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(
  getCompaniesCompanyUuidHolidayPayPolicyRequest:
    GetCompaniesCompanyUuidHolidayPayPolicyRequest,
): string {
  return JSON.stringify(
    GetCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema.parse(
      getCompaniesCompanyUuidHolidayPayPolicyRequest,
    ),
  );
}

export function getCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetCompaniesCompanyUuidHolidayPayPolicyRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetCompaniesCompanyUuidHolidayPayPolicyRequest' from JSON`,
  );
}
