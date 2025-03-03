/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ProcessingStatuses = {
  Unprocessed: "unprocessed",
  Processed: "processed",
} as const;
export type ProcessingStatuses = ClosedEnum<typeof ProcessingStatuses>;

export const PayrollTypes = {
  Regular: "regular",
  OffCycle: "off_cycle",
  External: "external",
} as const;
export type PayrollTypes = ClosedEnum<typeof PayrollTypes>;

export const GetV1CompaniesCompanyIdPayrollsQueryParamInclude = {
  Totals: "totals",
  PayrollStatusMeta: "payroll_status_meta",
  RiskBlockers: "risk_blockers",
} as const;
export type GetV1CompaniesCompanyIdPayrollsQueryParamInclude = ClosedEnum<
  typeof GetV1CompaniesCompanyIdPayrollsQueryParamInclude
>;

export type GetV1CompaniesCompanyIdPayrollsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Whether to include processed and/or unprocessed payrolls in the response, defaults to processed, for multiple attributes comma separate the values, i.e. `?processing_statuses=processed,unprocessed`
   */
  processingStatuses?: Array<ProcessingStatuses> | undefined;
  /**
   * Whether to include regular and/or off_cycle payrolls in the response, defaults to regular, for multiple attributes comma separate the values, i.e. `?payroll_types=regular,off_cycle`
   */
  payrollTypes?: Array<PayrollTypes> | undefined;
  /**
   * Include the requested attribute in the response. The risk_blockers option will include submission_blockers and credit_blockers if applicable. In v2023-04-01 totals are no longer included by default. For multiple attributes comma separate the values, i.e. `?include=totals,payroll_status_meta`
   */
  include?: Array<GetV1CompaniesCompanyIdPayrollsQueryParamInclude> | undefined;
  /**
   * Return payrolls whose pay period is after the start date
   */
  startDate?: string | undefined;
  /**
   * Return payrolls whose pay period is before the end date. If left empty, defaults to today's date.
   */
  endDate?: string | undefined;
  /**
   * A string indicating whether to sort resulting events in ascending (asc) or descending (desc) chronological order. Events are sorted by their `timestamp`. Defaults to asc if left empty.
   */
  sortOrder?: components.SortOrder | undefined;
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
export const ProcessingStatuses$inboundSchema: z.ZodNativeEnum<
  typeof ProcessingStatuses
> = z.nativeEnum(ProcessingStatuses);

/** @internal */
export const ProcessingStatuses$outboundSchema: z.ZodNativeEnum<
  typeof ProcessingStatuses
> = ProcessingStatuses$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProcessingStatuses$ {
  /** @deprecated use `ProcessingStatuses$inboundSchema` instead. */
  export const inboundSchema = ProcessingStatuses$inboundSchema;
  /** @deprecated use `ProcessingStatuses$outboundSchema` instead. */
  export const outboundSchema = ProcessingStatuses$outboundSchema;
}

/** @internal */
export const PayrollTypes$inboundSchema: z.ZodNativeEnum<typeof PayrollTypes> =
  z.nativeEnum(PayrollTypes);

/** @internal */
export const PayrollTypes$outboundSchema: z.ZodNativeEnum<typeof PayrollTypes> =
  PayrollTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollTypes$ {
  /** @deprecated use `PayrollTypes$inboundSchema` instead. */
  export const inboundSchema = PayrollTypes$inboundSchema;
  /** @deprecated use `PayrollTypes$outboundSchema` instead. */
  export const outboundSchema = PayrollTypes$outboundSchema;
}

/** @internal */
export const GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema:
  z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsQueryParamInclude> = z
    .nativeEnum(GetV1CompaniesCompanyIdPayrollsQueryParamInclude);

/** @internal */
export const GetV1CompaniesCompanyIdPayrollsQueryParamInclude$outboundSchema:
  z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPayrollsQueryParamInclude> =
    GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdPayrollsQueryParamInclude$ {
  /** @deprecated use `GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPayrollsQueryParamInclude$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdPayrollsQueryParamInclude$outboundSchema;
}

/** @internal */
export const GetV1CompaniesCompanyIdPayrollsRequest$inboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdPayrollsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  processing_statuses: z.array(ProcessingStatuses$inboundSchema).optional(),
  payroll_types: z.array(PayrollTypes$inboundSchema).optional(),
  include: z.array(
    GetV1CompaniesCompanyIdPayrollsQueryParamInclude$inboundSchema,
  ).optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  sort_order: components.SortOrder$inboundSchema.optional(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "processing_statuses": "processingStatuses",
    "payroll_types": "payrollTypes",
    "start_date": "startDate",
    "end_date": "endDate",
    "sort_order": "sortOrder",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompaniesCompanyIdPayrollsRequest$Outbound = {
  company_id: string;
  processing_statuses?: Array<string> | undefined;
  payroll_types?: Array<string> | undefined;
  include?: Array<string> | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
  sort_order?: string | undefined;
  page?: number | undefined;
  per?: number | undefined;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdPayrollsRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesCompanyIdPayrollsRequest
> = z.object({
  companyId: z.string(),
  processingStatuses: z.array(ProcessingStatuses$outboundSchema).optional(),
  payrollTypes: z.array(PayrollTypes$outboundSchema).optional(),
  include: z.array(
    GetV1CompaniesCompanyIdPayrollsQueryParamInclude$outboundSchema,
  ).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  sortOrder: components.SortOrder$outboundSchema.optional(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    processingStatuses: "processing_statuses",
    payrollTypes: "payroll_types",
    startDate: "start_date",
    endDate: "end_date",
    sortOrder: "sort_order",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdPayrollsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdPayrollsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdPayrollsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPayrollsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdPayrollsRequest$Outbound;
}

export function getV1CompaniesCompanyIdPayrollsRequestToJSON(
  getV1CompaniesCompanyIdPayrollsRequest:
    GetV1CompaniesCompanyIdPayrollsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdPayrollsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdPayrollsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdPayrollsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompaniesCompanyIdPayrollsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdPayrollsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesCompanyIdPayrollsRequest' from JSON`,
  );
}
