/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$Outbound;
}

export function getV1CompaniesCompanyIdPaySchedulesAssignmentsRequestToJSON(
  getV1CompaniesCompanyIdPaySchedulesAssignmentsRequest:
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdPaySchedulesAssignmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest' from JSON`,
  );
}
