/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Document = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * The category of a company attachment.
 */
export const Category = {
  GepNotice: "gep_notice",
  Compliance: "compliance",
} as const;
/**
 * The category of a company attachment.
 */
export type Category = ClosedEnum<typeof Category>;

/**
 * The binary payload of the file and the company attachment category.
 */
export type PostV1CompaniesAttachmentRequestBody = {
  /**
   * The category of a company attachment.
   */
  category: Category;
  /**
   * The binary payload of the file to be uploaded.
   */
  document: Document | Blob;
};

export type PostV1CompaniesAttachmentRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1CompaniesAttachmentRequestBody;
};

/** @internal */
export const Document$inboundSchema: z.ZodType<
  Document,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type Document$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const Document$outboundSchema: z.ZodType<
  Document$Outbound,
  z.ZodTypeDef,
  Document
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Document$ {
  /** @deprecated use `Document$inboundSchema` instead. */
  export const inboundSchema = Document$inboundSchema;
  /** @deprecated use `Document$outboundSchema` instead. */
  export const outboundSchema = Document$outboundSchema;
  /** @deprecated use `Document$Outbound` instead. */
  export type Outbound = Document$Outbound;
}

export function documentToJSON(document: Document): string {
  return JSON.stringify(Document$outboundSchema.parse(document));
}

export function documentFromJSON(
  jsonString: string,
): SafeParseResult<Document, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Document$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Document' from JSON`,
  );
}

/** @internal */
export const Category$inboundSchema: z.ZodNativeEnum<typeof Category> = z
  .nativeEnum(Category);

/** @internal */
export const Category$outboundSchema: z.ZodNativeEnum<typeof Category> =
  Category$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Category$ {
  /** @deprecated use `Category$inboundSchema` instead. */
  export const inboundSchema = Category$inboundSchema;
  /** @deprecated use `Category$outboundSchema` instead. */
  export const outboundSchema = Category$outboundSchema;
}

/** @internal */
export const PostV1CompaniesAttachmentRequestBody$inboundSchema: z.ZodType<
  PostV1CompaniesAttachmentRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  category: Category$inboundSchema,
  document: z.lazy(() => Document$inboundSchema),
});

/** @internal */
export type PostV1CompaniesAttachmentRequestBody$Outbound = {
  category: string;
  document: Document$Outbound | Blob;
};

/** @internal */
export const PostV1CompaniesAttachmentRequestBody$outboundSchema: z.ZodType<
  PostV1CompaniesAttachmentRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1CompaniesAttachmentRequestBody
> = z.object({
  category: Category$outboundSchema,
  document: z.lazy(() => Document$outboundSchema).or(blobLikeSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesAttachmentRequestBody$ {
  /** @deprecated use `PostV1CompaniesAttachmentRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesAttachmentRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesAttachmentRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesAttachmentRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesAttachmentRequestBody$Outbound` instead. */
  export type Outbound = PostV1CompaniesAttachmentRequestBody$Outbound;
}

export function postV1CompaniesAttachmentRequestBodyToJSON(
  postV1CompaniesAttachmentRequestBody: PostV1CompaniesAttachmentRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesAttachmentRequestBody$outboundSchema.parse(
      postV1CompaniesAttachmentRequestBody,
    ),
  );
}

export function postV1CompaniesAttachmentRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1CompaniesAttachmentRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesAttachmentRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompaniesAttachmentRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesAttachmentRequest$inboundSchema: z.ZodType<
  PostV1CompaniesAttachmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() => PostV1CompaniesAttachmentRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1CompaniesAttachmentRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1CompaniesAttachmentRequestBody$Outbound;
};

/** @internal */
export const PostV1CompaniesAttachmentRequest$outboundSchema: z.ZodType<
  PostV1CompaniesAttachmentRequest$Outbound,
  z.ZodTypeDef,
  PostV1CompaniesAttachmentRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() =>
    PostV1CompaniesAttachmentRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesAttachmentRequest$ {
  /** @deprecated use `PostV1CompaniesAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1CompaniesAttachmentRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1CompaniesAttachmentRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesAttachmentRequest$Outbound` instead. */
  export type Outbound = PostV1CompaniesAttachmentRequest$Outbound;
}

export function postV1CompaniesAttachmentRequestToJSON(
  postV1CompaniesAttachmentRequest: PostV1CompaniesAttachmentRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesAttachmentRequest$outboundSchema.parse(
      postV1CompaniesAttachmentRequest,
    ),
  );
}

export function postV1CompaniesAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1CompaniesAttachmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1CompaniesAttachmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompaniesAttachmentRequest' from JSON`,
  );
}
