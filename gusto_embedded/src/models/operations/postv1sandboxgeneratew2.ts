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
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1SandboxGenerateW2RequestBody = {
  /**
   * The employee UUID.
   */
  employeeId: string;
  /**
   * Must be equal to or more recent than 2015. If not specified, defaults to the previous year.
   *
   * @remarks
   */
  year?: number | undefined;
};

export type PostV1SandboxGenerateW2Request = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PostV1SandboxGenerateW2RequestBody;
};

/**
 * OK
 */
export type PostV1SandboxGenerateW2Form = {
  /**
   * The UUID of the employee
   */
  employeeUuid?: string | undefined;
  /**
   * The UUID of the form
   */
  uuid: string;
  /**
   * The type identifier of the form
   */
  name?: string | undefined;
  /**
   * The title of the form
   */
  title?: string | undefined;
  /**
   * The description of the form
   */
  description?: string | undefined;
  /**
   * If the form is in a draft state. E.g. End of year tax forms may be provided in a draft state prior to being finalized.
   */
  draft?: boolean | undefined;
  /**
   * The year of this form. For some forms, e.g. tax forms, this is the year which the form represents. A W2 for January - December 2022 would be delivered in January 2023 and have a year value of 2022. This value is nullable and will not be present on all forms.
   */
  year?: number | null | undefined;
  /**
   * The quarter of this form. For some forms, e.g. tax forms, this is the calendar quarter which this form represents. An Employer's Quarterly Federal Tax Return (Form 941) for April, May, June 2022 would have a quarter value of 2 (and a year value of 2022). This value is nullable and will not be present on all forms.
   */
  quarter?: number | null | undefined;
  /**
   * A boolean flag that indicates whether the form needs signing or not. Note that this value will change after the form is signed.
   */
  requiresSigning?: boolean | undefined;
  /**
   * The content type of the associated document. Most forms are PDFs with a content type of `application/pdf`. Some tax file packages will be zip files (containing PDFs) with a content type of `application/zip`. This attribute will be `null` when the document has not been prepared.
   */
  documentContentType?: string | null | undefined;
};

export type PostV1SandboxGenerateW2Response = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  form?: PostV1SandboxGenerateW2Form | undefined;
};

/** @internal */
export const PostV1SandboxGenerateW2RequestBody$inboundSchema: z.ZodType<
  PostV1SandboxGenerateW2RequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  year: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
  });
});

/** @internal */
export type PostV1SandboxGenerateW2RequestBody$Outbound = {
  employee_id: string;
  year?: number | undefined;
};

/** @internal */
export const PostV1SandboxGenerateW2RequestBody$outboundSchema: z.ZodType<
  PostV1SandboxGenerateW2RequestBody$Outbound,
  z.ZodTypeDef,
  PostV1SandboxGenerateW2RequestBody
> = z.object({
  employeeId: z.string(),
  year: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SandboxGenerateW2RequestBody$ {
  /** @deprecated use `PostV1SandboxGenerateW2RequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV1SandboxGenerateW2RequestBody$inboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2RequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1SandboxGenerateW2RequestBody$outboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2RequestBody$Outbound` instead. */
  export type Outbound = PostV1SandboxGenerateW2RequestBody$Outbound;
}

export function postV1SandboxGenerateW2RequestBodyToJSON(
  postV1SandboxGenerateW2RequestBody: PostV1SandboxGenerateW2RequestBody,
): string {
  return JSON.stringify(
    PostV1SandboxGenerateW2RequestBody$outboundSchema.parse(
      postV1SandboxGenerateW2RequestBody,
    ),
  );
}

export function postV1SandboxGenerateW2RequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SandboxGenerateW2RequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1SandboxGenerateW2RequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SandboxGenerateW2RequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1SandboxGenerateW2Request$inboundSchema: z.ZodType<
  PostV1SandboxGenerateW2Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() => PostV1SandboxGenerateW2RequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1SandboxGenerateW2Request$Outbound = {
  "X-Gusto-API-Version": string;
  RequestBody: PostV1SandboxGenerateW2RequestBody$Outbound;
};

/** @internal */
export const PostV1SandboxGenerateW2Request$outboundSchema: z.ZodType<
  PostV1SandboxGenerateW2Request$Outbound,
  z.ZodTypeDef,
  PostV1SandboxGenerateW2Request
> = z.object({
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() => PostV1SandboxGenerateW2RequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SandboxGenerateW2Request$ {
  /** @deprecated use `PostV1SandboxGenerateW2Request$inboundSchema` instead. */
  export const inboundSchema = PostV1SandboxGenerateW2Request$inboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2Request$outboundSchema` instead. */
  export const outboundSchema = PostV1SandboxGenerateW2Request$outboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2Request$Outbound` instead. */
  export type Outbound = PostV1SandboxGenerateW2Request$Outbound;
}

export function postV1SandboxGenerateW2RequestToJSON(
  postV1SandboxGenerateW2Request: PostV1SandboxGenerateW2Request,
): string {
  return JSON.stringify(
    PostV1SandboxGenerateW2Request$outboundSchema.parse(
      postV1SandboxGenerateW2Request,
    ),
  );
}

export function postV1SandboxGenerateW2RequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SandboxGenerateW2Request, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SandboxGenerateW2Request$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SandboxGenerateW2Request' from JSON`,
  );
}

/** @internal */
export const PostV1SandboxGenerateW2Form$inboundSchema: z.ZodType<
  PostV1SandboxGenerateW2Form,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string().optional(),
  uuid: z.string(),
  name: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
  year: z.nullable(z.number().int()).optional(),
  quarter: z.nullable(z.number().int()).optional(),
  requires_signing: z.boolean().optional(),
  document_content_type: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "requires_signing": "requiresSigning",
    "document_content_type": "documentContentType",
  });
});

/** @internal */
export type PostV1SandboxGenerateW2Form$Outbound = {
  employee_uuid?: string | undefined;
  uuid: string;
  name?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  draft?: boolean | undefined;
  year?: number | null | undefined;
  quarter?: number | null | undefined;
  requires_signing?: boolean | undefined;
  document_content_type?: string | null | undefined;
};

/** @internal */
export const PostV1SandboxGenerateW2Form$outboundSchema: z.ZodType<
  PostV1SandboxGenerateW2Form$Outbound,
  z.ZodTypeDef,
  PostV1SandboxGenerateW2Form
> = z.object({
  employeeUuid: z.string().optional(),
  uuid: z.string(),
  name: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
  year: z.nullable(z.number().int()).optional(),
  quarter: z.nullable(z.number().int()).optional(),
  requiresSigning: z.boolean().optional(),
  documentContentType: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    requiresSigning: "requires_signing",
    documentContentType: "document_content_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SandboxGenerateW2Form$ {
  /** @deprecated use `PostV1SandboxGenerateW2Form$inboundSchema` instead. */
  export const inboundSchema = PostV1SandboxGenerateW2Form$inboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2Form$outboundSchema` instead. */
  export const outboundSchema = PostV1SandboxGenerateW2Form$outboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2Form$Outbound` instead. */
  export type Outbound = PostV1SandboxGenerateW2Form$Outbound;
}

export function postV1SandboxGenerateW2FormToJSON(
  postV1SandboxGenerateW2Form: PostV1SandboxGenerateW2Form,
): string {
  return JSON.stringify(
    PostV1SandboxGenerateW2Form$outboundSchema.parse(
      postV1SandboxGenerateW2Form,
    ),
  );
}

export function postV1SandboxGenerateW2FormFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SandboxGenerateW2Form, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SandboxGenerateW2Form$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SandboxGenerateW2Form' from JSON`,
  );
}

/** @internal */
export const PostV1SandboxGenerateW2Response$inboundSchema: z.ZodType<
  PostV1SandboxGenerateW2Response,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Form: z.lazy(() => PostV1SandboxGenerateW2Form$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Form": "form",
  });
});

/** @internal */
export type PostV1SandboxGenerateW2Response$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Form?: PostV1SandboxGenerateW2Form$Outbound | undefined;
};

/** @internal */
export const PostV1SandboxGenerateW2Response$outboundSchema: z.ZodType<
  PostV1SandboxGenerateW2Response$Outbound,
  z.ZodTypeDef,
  PostV1SandboxGenerateW2Response
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  form: z.lazy(() => PostV1SandboxGenerateW2Form$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    form: "Form",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SandboxGenerateW2Response$ {
  /** @deprecated use `PostV1SandboxGenerateW2Response$inboundSchema` instead. */
  export const inboundSchema = PostV1SandboxGenerateW2Response$inboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2Response$outboundSchema` instead. */
  export const outboundSchema = PostV1SandboxGenerateW2Response$outboundSchema;
  /** @deprecated use `PostV1SandboxGenerateW2Response$Outbound` instead. */
  export type Outbound = PostV1SandboxGenerateW2Response$Outbound;
}

export function postV1SandboxGenerateW2ResponseToJSON(
  postV1SandboxGenerateW2Response: PostV1SandboxGenerateW2Response,
): string {
  return JSON.stringify(
    PostV1SandboxGenerateW2Response$outboundSchema.parse(
      postV1SandboxGenerateW2Response,
    ),
  );
}

export function postV1SandboxGenerateW2ResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SandboxGenerateW2Response, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SandboxGenerateW2Response$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SandboxGenerateW2Response' from JSON`,
  );
}
