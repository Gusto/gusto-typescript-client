/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CompanyAttachment,
  CompanyAttachment$inboundSchema,
  CompanyAttachment$Outbound,
  CompanyAttachment$outboundSchema,
} from "../components/companyattachment.js";
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

export type GetV1CompaniesAttachmentsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompaniesAttachmentsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  companyAttachmentList?: Array<CompanyAttachment> | undefined;
};

/** @internal */
export const GetV1CompaniesAttachmentsRequest$inboundSchema: z.ZodType<
  GetV1CompaniesAttachmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompaniesAttachmentsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesAttachmentsRequest$outboundSchema: z.ZodType<
  GetV1CompaniesAttachmentsRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesAttachmentsRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
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
export namespace GetV1CompaniesAttachmentsRequest$ {
  /** @deprecated use `GetV1CompaniesAttachmentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1CompaniesAttachmentsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesAttachmentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1CompaniesAttachmentsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesAttachmentsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesAttachmentsRequest$Outbound;
}

export function getV1CompaniesAttachmentsRequestToJSON(
  getV1CompaniesAttachmentsRequest: GetV1CompaniesAttachmentsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesAttachmentsRequest$outboundSchema.parse(
      getV1CompaniesAttachmentsRequest,
    ),
  );
}

export function getV1CompaniesAttachmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompaniesAttachmentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1CompaniesAttachmentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesAttachmentsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesAttachmentsResponse$inboundSchema: z.ZodType<
  GetV1CompaniesAttachmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  "Company-Attachment-List": z.array(CompanyAttachment$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Company-Attachment-List": "companyAttachmentList",
  });
});

/** @internal */
export type GetV1CompaniesAttachmentsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Company-Attachment-List"?: Array<CompanyAttachment$Outbound> | undefined;
};

/** @internal */
export const GetV1CompaniesAttachmentsResponse$outboundSchema: z.ZodType<
  GetV1CompaniesAttachmentsResponse$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesAttachmentsResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  companyAttachmentList: z.array(CompanyAttachment$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    companyAttachmentList: "Company-Attachment-List",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesAttachmentsResponse$ {
  /** @deprecated use `GetV1CompaniesAttachmentsResponse$inboundSchema` instead. */
  export const inboundSchema = GetV1CompaniesAttachmentsResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesAttachmentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesAttachmentsResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesAttachmentsResponse$Outbound` instead. */
  export type Outbound = GetV1CompaniesAttachmentsResponse$Outbound;
}

export function getV1CompaniesAttachmentsResponseToJSON(
  getV1CompaniesAttachmentsResponse: GetV1CompaniesAttachmentsResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesAttachmentsResponse$outboundSchema.parse(
      getV1CompaniesAttachmentsResponse,
    ),
  );
}

export function getV1CompaniesAttachmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompaniesAttachmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1CompaniesAttachmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesAttachmentsResponse' from JSON`,
  );
}
