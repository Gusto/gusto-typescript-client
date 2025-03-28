/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  DocumentPdf,
  DocumentPdf$inboundSchema,
  DocumentPdf$Outbound,
  DocumentPdf$outboundSchema,
} from "../components/documentpdf.js";
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

export type GetV1ContractorDocumentPdfRequest = {
  /**
   * The ID or UUID of the document
   */
  documentUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1ContractorDocumentPdfResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  documentPdf?: DocumentPdf | undefined;
};

/** @internal */
export const GetV1ContractorDocumentPdfRequest$inboundSchema: z.ZodType<
  GetV1ContractorDocumentPdfRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  document_uuid: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "document_uuid": "documentUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1ContractorDocumentPdfRequest$Outbound = {
  document_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ContractorDocumentPdfRequest$outboundSchema: z.ZodType<
  GetV1ContractorDocumentPdfRequest$Outbound,
  z.ZodTypeDef,
  GetV1ContractorDocumentPdfRequest
> = z.object({
  documentUuid: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    documentUuid: "document_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorDocumentPdfRequest$ {
  /** @deprecated use `GetV1ContractorDocumentPdfRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1ContractorDocumentPdfRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorDocumentPdfRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorDocumentPdfRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorDocumentPdfRequest$Outbound` instead. */
  export type Outbound = GetV1ContractorDocumentPdfRequest$Outbound;
}

export function getV1ContractorDocumentPdfRequestToJSON(
  getV1ContractorDocumentPdfRequest: GetV1ContractorDocumentPdfRequest,
): string {
  return JSON.stringify(
    GetV1ContractorDocumentPdfRequest$outboundSchema.parse(
      getV1ContractorDocumentPdfRequest,
    ),
  );
}

export function getV1ContractorDocumentPdfRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ContractorDocumentPdfRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1ContractorDocumentPdfRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorDocumentPdfRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ContractorDocumentPdfResponse$inboundSchema: z.ZodType<
  GetV1ContractorDocumentPdfResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  "Document-Pdf": DocumentPdf$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Document-Pdf": "documentPdf",
  });
});

/** @internal */
export type GetV1ContractorDocumentPdfResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Document-Pdf"?: DocumentPdf$Outbound | undefined;
};

/** @internal */
export const GetV1ContractorDocumentPdfResponse$outboundSchema: z.ZodType<
  GetV1ContractorDocumentPdfResponse$Outbound,
  z.ZodTypeDef,
  GetV1ContractorDocumentPdfResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  documentPdf: DocumentPdf$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    documentPdf: "Document-Pdf",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorDocumentPdfResponse$ {
  /** @deprecated use `GetV1ContractorDocumentPdfResponse$inboundSchema` instead. */
  export const inboundSchema = GetV1ContractorDocumentPdfResponse$inboundSchema;
  /** @deprecated use `GetV1ContractorDocumentPdfResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorDocumentPdfResponse$outboundSchema;
  /** @deprecated use `GetV1ContractorDocumentPdfResponse$Outbound` instead. */
  export type Outbound = GetV1ContractorDocumentPdfResponse$Outbound;
}

export function getV1ContractorDocumentPdfResponseToJSON(
  getV1ContractorDocumentPdfResponse: GetV1ContractorDocumentPdfResponse,
): string {
  return JSON.stringify(
    GetV1ContractorDocumentPdfResponse$outboundSchema.parse(
      getV1ContractorDocumentPdfResponse,
    ),
  );
}

export function getV1ContractorDocumentPdfResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ContractorDocumentPdfResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorDocumentPdfResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorDocumentPdfResponse' from JSON`,
  );
}
