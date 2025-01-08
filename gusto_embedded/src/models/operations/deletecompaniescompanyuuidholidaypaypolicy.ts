/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteCompaniesCompanyUuidHolidayPayPolicyRequest = {
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
export const DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema:
  z.ZodType<
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema:
  z.ZodType<
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound,
    z.ZodTypeDef,
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
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
export namespace DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$ {
  /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema;
  /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema;
  /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
  export type Outbound =
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}

export function deleteCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(
  deleteCompaniesCompanyUuidHolidayPayPolicyRequest:
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest,
): string {
  return JSON.stringify(
    DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema.parse(
      deleteCompaniesCompanyUuidHolidayPayPolicyRequest,
    ),
  );
}

export function deleteCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteCompaniesCompanyUuidHolidayPayPolicyRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteCompaniesCompanyUuidHolidayPayPolicyRequest' from JSON`,
  );
}
