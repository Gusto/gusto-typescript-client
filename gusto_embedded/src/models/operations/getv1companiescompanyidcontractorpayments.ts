/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdContractorPaymentsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * The time period for which to retrieve contractor payments
   */
  startDate: string;
  /**
   * The time period for which to retrieve contractor payments. If left empty, defaults to today's date.
   */
  endDate: string;
  /**
   * The UUID of the contractor. When specified, will load all payments for that contractor.
   */
  contractorUuid?: string | undefined;
  /**
   * Display contractor payments results group by check date if set to true.
   */
  groupByDate?: boolean | undefined;
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

/**
 * A JSON object containing contractor payments information
 */
export type GetV1CompaniesCompanyIdContractorPaymentsResponseBody =
  | components.ContractorPaymentSummary
  | components.ContractorPaymentSummaryByDates;

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    contractor_uuid: z.string().optional(),
    group_by_date: z.boolean().optional(),
    page: z.number().int().optional(),
    per: z.number().int().optional(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "start_date": "startDate",
      "end_date": "endDate",
      "contractor_uuid": "contractorUuid",
      "group_by_date": "groupByDate",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound = {
  company_id: string;
  start_date: string;
  end_date: string;
  contractor_uuid?: string | undefined;
  group_by_date?: boolean | undefined;
  page?: number | undefined;
  per?: number | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdContractorPaymentsRequest
  > = z.object({
    companyId: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    contractorUuid: z.string().optional(),
    groupByDate: z.boolean().optional(),
    page: z.number().int().optional(),
    per: z.number().int().optional(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      startDate: "start_date",
      endDate: "end_date",
      contractorUuid: "contractor_uuid",
      groupByDate: "group_by_date",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdContractorPaymentsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdContractorPaymentsRequest$Outbound;
}

export function getV1CompaniesCompanyIdContractorPaymentsRequestToJSON(
  getV1CompaniesCompanyIdContractorPaymentsRequest:
    GetV1CompaniesCompanyIdContractorPaymentsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdContractorPaymentsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdContractorPaymentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdContractorPaymentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdContractorPaymentsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsResponseBody$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.union([
    components.ContractorPaymentSummary$inboundSchema,
    components.ContractorPaymentSummaryByDates$inboundSchema,
  ]);

/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound =
  | components.ContractorPaymentSummary$Outbound
  | components.ContractorPaymentSummaryByDates$Outbound;

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody
  > = z.union([
    components.ContractorPaymentSummary$outboundSchema,
    components.ContractorPaymentSummaryByDates$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdContractorPaymentsResponseBody$ {
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound;
}

export function getV1CompaniesCompanyIdContractorPaymentsResponseBodyToJSON(
  getV1CompaniesCompanyIdContractorPaymentsResponseBody:
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema.parse(
      getV1CompaniesCompanyIdContractorPaymentsResponseBody,
    ),
  );
}

export function getV1CompaniesCompanyIdContractorPaymentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdContractorPaymentsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdContractorPaymentsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdContractorPaymentsResponseBody' from JSON`,
  );
}
