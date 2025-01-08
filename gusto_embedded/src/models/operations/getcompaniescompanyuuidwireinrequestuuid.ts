/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCompaniesCompanyUuidWireInRequestUuidRequest = {
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
export const GetCompaniesCompanyUuidWireInRequestUuidRequest$inboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidWireInRequestUuidRequest,
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
export type GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema:
  z.ZodType<
    GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound,
    z.ZodTypeDef,
    GetCompaniesCompanyUuidWireInRequestUuidRequest
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
export namespace GetCompaniesCompanyUuidWireInRequestUuidRequest$ {
  /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetCompaniesCompanyUuidWireInRequestUuidRequest$inboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema;
  /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound` instead. */
  export type Outbound =
    GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound;
}

export function getCompaniesCompanyUuidWireInRequestUuidRequestToJSON(
  getCompaniesCompanyUuidWireInRequestUuidRequest:
    GetCompaniesCompanyUuidWireInRequestUuidRequest,
): string {
  return JSON.stringify(
    GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema.parse(
      getCompaniesCompanyUuidWireInRequestUuidRequest,
    ),
  );
}

export function getCompaniesCompanyUuidWireInRequestUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetCompaniesCompanyUuidWireInRequestUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetCompaniesCompanyUuidWireInRequestUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetCompaniesCompanyUuidWireInRequestUuidRequest' from JSON`,
  );
}
