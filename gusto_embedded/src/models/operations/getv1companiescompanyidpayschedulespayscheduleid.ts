/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  PaySchedule,
  PaySchedule$inboundSchema,
  PaySchedule$Outbound,
  PaySchedule$outboundSchema,
} from "../components/payschedule.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * The UUID of the pay schedule
   */
  payScheduleId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  paySchedule?: PaySchedule | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    pay_schedule_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "pay_schedule_id": "payScheduleId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound = {
  company_id: string;
  pay_schedule_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest
  > = z.object({
    companyId: z.string(),
    payScheduleId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      payScheduleId: "pay_schedule_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound;
}

export function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestToJSON(
  getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest:
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema
      .parse(getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest),
  );
}

export function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Pay-Schedule": PaySchedule$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Pay-Schedule": "paySchedule",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    "Pay-Schedule"?: PaySchedule$Outbound | undefined;
  };

/** @internal */
export const GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    paySchedule: PaySchedule$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      paySchedule: "Pay-Schedule",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound;
}

export function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseToJSON(
  getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse:
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema
      .parse(getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse),
  );
}

export function getV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse' from JSON`,
  );
}
