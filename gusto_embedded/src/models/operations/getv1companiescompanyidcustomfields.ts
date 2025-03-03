/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdCustomFieldsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
   */
  page?: number | undefined;
  /**
   * Number of objects per page. For majority of endpoints will default to 25
   */
  per?: number | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdCustomFieldsRequest$inboundSchema:
  z.ZodType<GetV1CompaniesCompanyIdCustomFieldsRequest, z.ZodTypeDef, unknown> =
    z.object({
      company_id: z.string(),
      page: z.number().int().optional(),
      per: z.number().int().optional(),
      "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
        "2024-04-01",
      ),
    }).transform((v) => {
      return remap$(v, {
        "company_id": "companyId",
        "X-Gusto-API-Version": "xGustoAPIVersion",
      });
    });

/** @internal */
export type GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound = {
  company_id: string;
  page?: number | undefined;
  per?: number | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdCustomFieldsRequest
  > = z.object({
    companyId: z.string(),
    page: z.number().int().optional(),
    per: z.number().int().optional(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
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
export namespace GetV1CompaniesCompanyIdCustomFieldsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdCustomFieldsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdCustomFieldsRequest$Outbound;
}

export function getV1CompaniesCompanyIdCustomFieldsRequestToJSON(
  getV1CompaniesCompanyIdCustomFieldsRequest:
    GetV1CompaniesCompanyIdCustomFieldsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdCustomFieldsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdCustomFieldsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdCustomFieldsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdCustomFieldsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdCustomFieldsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdCustomFieldsRequest' from JSON`,
  );
}
