/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  payScheduleAssignmentBody: components.PayScheduleAssignmentBody;
};

/** @internal */
export const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    "Pay-Schedule-Assignment-Body":
      components.PayScheduleAssignmentBody$inboundSchema,
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
    "X-Gusto-API-Version"?: string | undefined;
    "Pay-Schedule-Assignment-Body":
      components.PayScheduleAssignmentBody$Outbound;
  };

/** @internal */
export const PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    payScheduleAssignmentBody:
      components.PayScheduleAssignmentBody$outboundSchema,
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
