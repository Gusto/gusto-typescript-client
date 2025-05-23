/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ContractorPaymentSummary,
  ContractorPaymentSummary$inboundSchema,
  ContractorPaymentSummary$Outbound,
  ContractorPaymentSummary$outboundSchema,
} from "../components/contractorpaymentsummary.js";
import {
  ContractorPaymentSummaryByDates,
  ContractorPaymentSummaryByDates$inboundSchema,
  ContractorPaymentSummaryByDates$Outbound,
  ContractorPaymentSummaryByDates$outboundSchema,
} from "../components/contractorpaymentsummarybydates.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
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
  xGustoAPIVersion?: VersionHeader | undefined;
};

/**
 * A JSON object containing contractor payments information
 */
export type GetV1CompaniesCompanyIdContractorPaymentsResponseBody =
  | ContractorPaymentSummary
  | ContractorPaymentSummaryByDates;

export type GetV1CompaniesCompanyIdContractorPaymentsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * A JSON object containing contractor payments information
   */
  oneOf?:
    | ContractorPaymentSummary
    | ContractorPaymentSummaryByDates
    | undefined;
};

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
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
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
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
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
    ContractorPaymentSummary$inboundSchema,
    ContractorPaymentSummaryByDates$inboundSchema,
  ]);

/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound =
  | ContractorPaymentSummary$Outbound
  | ContractorPaymentSummaryByDates$Outbound;

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsResponseBody$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdContractorPaymentsResponseBody
  > = z.union([
    ContractorPaymentSummary$outboundSchema,
    ContractorPaymentSummaryByDates$outboundSchema,
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

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    oneOf: z.union([
      ContractorPaymentSummary$inboundSchema,
      ContractorPaymentSummaryByDates$inboundSchema,
    ]).optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  oneOf?:
    | ContractorPaymentSummary$Outbound
    | ContractorPaymentSummaryByDates$Outbound
    | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdContractorPaymentsResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    oneOf: z.union([
      ContractorPaymentSummary$outboundSchema,
      ContractorPaymentSummaryByDates$outboundSchema,
    ]).optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdContractorPaymentsResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdContractorPaymentsResponse$Outbound;
}

export function getV1CompaniesCompanyIdContractorPaymentsResponseToJSON(
  getV1CompaniesCompanyIdContractorPaymentsResponse:
    GetV1CompaniesCompanyIdContractorPaymentsResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema.parse(
      getV1CompaniesCompanyIdContractorPaymentsResponse,
    ),
  );
}

export function getV1CompaniesCompanyIdContractorPaymentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdContractorPaymentsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdContractorPaymentsResponse' from JSON`,
  );
}
