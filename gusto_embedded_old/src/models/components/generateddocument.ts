/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Current status of the Generated Document
 */
export const GeneratedDocumentStatus = {
  Pending: "pending",
  Started: "started",
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
/**
 * Current status of the Generated Document
 */
export type GeneratedDocumentStatus = ClosedEnum<
  typeof GeneratedDocumentStatus
>;

/**
 * Example response
 */
export type GeneratedDocument = {
  /**
   * A unique identifier of the Generated Document request
   */
  requestUuid?: string | undefined;
  /**
   * Current status of the Generated Document
   */
  status?: GeneratedDocumentStatus | undefined;
  /**
   * The array of urls to access the documents.
   */
  documentUrls?: Array<string> | undefined;
};

/** @internal */
export const GeneratedDocumentStatus$inboundSchema: z.ZodNativeEnum<
  typeof GeneratedDocumentStatus
> = z.nativeEnum(GeneratedDocumentStatus);

/** @internal */
export const GeneratedDocumentStatus$outboundSchema: z.ZodNativeEnum<
  typeof GeneratedDocumentStatus
> = GeneratedDocumentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratedDocumentStatus$ {
  /** @deprecated use `GeneratedDocumentStatus$inboundSchema` instead. */
  export const inboundSchema = GeneratedDocumentStatus$inboundSchema;
  /** @deprecated use `GeneratedDocumentStatus$outboundSchema` instead. */
  export const outboundSchema = GeneratedDocumentStatus$outboundSchema;
}

/** @internal */
export const GeneratedDocument$inboundSchema: z.ZodType<
  GeneratedDocument,
  z.ZodTypeDef,
  unknown
> = z.object({
  request_uuid: z.string().optional(),
  status: GeneratedDocumentStatus$inboundSchema.optional(),
  document_urls: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "request_uuid": "requestUuid",
    "document_urls": "documentUrls",
  });
});

/** @internal */
export type GeneratedDocument$Outbound = {
  request_uuid?: string | undefined;
  status?: string | undefined;
  document_urls?: Array<string> | undefined;
};

/** @internal */
export const GeneratedDocument$outboundSchema: z.ZodType<
  GeneratedDocument$Outbound,
  z.ZodTypeDef,
  GeneratedDocument
> = z.object({
  requestUuid: z.string().optional(),
  status: GeneratedDocumentStatus$outboundSchema.optional(),
  documentUrls: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    requestUuid: "request_uuid",
    documentUrls: "document_urls",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratedDocument$ {
  /** @deprecated use `GeneratedDocument$inboundSchema` instead. */
  export const inboundSchema = GeneratedDocument$inboundSchema;
  /** @deprecated use `GeneratedDocument$outboundSchema` instead. */
  export const outboundSchema = GeneratedDocument$outboundSchema;
  /** @deprecated use `GeneratedDocument$Outbound` instead. */
  export type Outbound = GeneratedDocument$Outbound;
}

export function generatedDocumentToJSON(
  generatedDocument: GeneratedDocument,
): string {
  return JSON.stringify(
    GeneratedDocument$outboundSchema.parse(generatedDocument),
  );
}

export function generatedDocumentFromJSON(
  jsonString: string,
): SafeParseResult<GeneratedDocument, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GeneratedDocument$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GeneratedDocument' from JSON`,
  );
}
