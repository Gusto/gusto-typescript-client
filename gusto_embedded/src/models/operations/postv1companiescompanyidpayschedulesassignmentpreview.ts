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
  PayScheduleAssignmentBody,
  PayScheduleAssignmentBody$inboundSchema,
  PayScheduleAssignmentBody$Outbound,
  PayScheduleAssignmentBody$outboundSchema,
} from "../components/payscheduleassignmentbody.js";
import {
  PayScheduleAssignmentPreview,
  PayScheduleAssignmentPreview$inboundSchema,
  PayScheduleAssignmentPreview$Outbound,
  PayScheduleAssignmentPreview$outboundSchema,
} from "../components/payscheduleassignmentpreview.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  payScheduleAssignmentBody: PayScheduleAssignmentBody;
};

export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  payScheduleAssignmentPreview?: PayScheduleAssignmentPreview | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    "Pay-Schedule-Assignment-Body": PayScheduleAssignmentBody$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "Pay-Schedule-Assignment-Body": "payScheduleAssignmentBody",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound =
  {
    company_id: string;
    "X-Gusto-API-Version": string;
    "Pay-Schedule-Assignment-Body": PayScheduleAssignmentBody$Outbound;
  };

/** @internal */
export const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    payScheduleAssignmentBody: PayScheduleAssignmentBody$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      payScheduleAssignmentBody: "Pay-Schedule-Assignment-Body",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound;
}

export function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequestToJSON(
  postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest:
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema
      .parse(postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest),
  );
}

export function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Pay-Schedule-Assignment-Preview":
      PayScheduleAssignmentPreview$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Pay-Schedule-Assignment-Preview": "payScheduleAssignmentPreview",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    "Pay-Schedule-Assignment-Preview"?:
      | PayScheduleAssignmentPreview$Outbound
      | undefined;
  };

/** @internal */
export const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    payScheduleAssignmentPreview: PayScheduleAssignmentPreview$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      payScheduleAssignmentPreview: "Pay-Schedule-Assignment-Preview",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$ {
  /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$Outbound;
}

export function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponseToJSON(
  postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse:
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$outboundSchema
      .parse(postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse),
  );
}

export function postV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse' from JSON`,
  );
}
