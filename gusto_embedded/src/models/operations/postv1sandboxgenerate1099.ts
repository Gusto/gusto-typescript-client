/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1SandboxGenerate1099RequestBody = {
  /**
   * The contractor UUID.
   */
  contractorId: string;
  /**
   * Must be equal to or more recent than 2015. If not specified, defaults to the previous year.
   *
   * @remarks
   */
  year?: number | undefined;
};

export type PostV1SandboxGenerate1099Request = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1SandboxGenerate1099RequestBody;
};

/** @internal */
export const PostV1SandboxGenerate1099RequestBody$inboundSchema: z.ZodType<
  PostV1SandboxGenerate1099RequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  contractor_id: z.string(),
  year: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "contractor_id": "contractorId",
  });
});

/** @internal */
export type PostV1SandboxGenerate1099RequestBody$Outbound = {
  contractor_id: string;
  year?: number | undefined;
};

/** @internal */
export const PostV1SandboxGenerate1099RequestBody$outboundSchema: z.ZodType<
  PostV1SandboxGenerate1099RequestBody$Outbound,
  z.ZodTypeDef,
  PostV1SandboxGenerate1099RequestBody
> = z.object({
  contractorId: z.string(),
  year: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    contractorId: "contractor_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SandboxGenerate1099RequestBody$ {
  /** @deprecated use `PostV1SandboxGenerate1099RequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1SandboxGenerate1099RequestBody$inboundSchema;
  /** @deprecated use `PostV1SandboxGenerate1099RequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1SandboxGenerate1099RequestBody$outboundSchema;
  /** @deprecated use `PostV1SandboxGenerate1099RequestBody$Outbound` instead. */
  export type Outbound = PostV1SandboxGenerate1099RequestBody$Outbound;
}

export function postV1SandboxGenerate1099RequestBodyToJSON(
  postV1SandboxGenerate1099RequestBody: PostV1SandboxGenerate1099RequestBody,
): string {
  return JSON.stringify(
    PostV1SandboxGenerate1099RequestBody$outboundSchema.parse(
      postV1SandboxGenerate1099RequestBody,
    ),
  );
}

export function postV1SandboxGenerate1099RequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SandboxGenerate1099RequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1SandboxGenerate1099RequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SandboxGenerate1099RequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1SandboxGenerate1099Request$inboundSchema: z.ZodType<
  PostV1SandboxGenerate1099Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() => PostV1SandboxGenerate1099RequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1SandboxGenerate1099Request$Outbound = {
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PostV1SandboxGenerate1099RequestBody$Outbound;
};

/** @internal */
export const PostV1SandboxGenerate1099Request$outboundSchema: z.ZodType<
  PostV1SandboxGenerate1099Request$Outbound,
  z.ZodTypeDef,
  PostV1SandboxGenerate1099Request
> = z.object({
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() =>
    PostV1SandboxGenerate1099RequestBody$outboundSchema
  ),
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
export namespace PostV1SandboxGenerate1099Request$ {
  /** @deprecated use `PostV1SandboxGenerate1099Request$inboundSchema` instead. */
  export const inboundSchema = PostV1SandboxGenerate1099Request$inboundSchema;
  /** @deprecated use `PostV1SandboxGenerate1099Request$outboundSchema` instead. */
  export const outboundSchema = PostV1SandboxGenerate1099Request$outboundSchema;
  /** @deprecated use `PostV1SandboxGenerate1099Request$Outbound` instead. */
  export type Outbound = PostV1SandboxGenerate1099Request$Outbound;
}

export function postV1SandboxGenerate1099RequestToJSON(
  postV1SandboxGenerate1099Request: PostV1SandboxGenerate1099Request,
): string {
  return JSON.stringify(
    PostV1SandboxGenerate1099Request$outboundSchema.parse(
      postV1SandboxGenerate1099Request,
    ),
  );
}

export function postV1SandboxGenerate1099RequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SandboxGenerate1099Request, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SandboxGenerate1099Request$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SandboxGenerate1099Request' from JSON`,
  );
}
