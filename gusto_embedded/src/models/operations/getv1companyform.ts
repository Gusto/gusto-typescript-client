/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Form,
  Form$inboundSchema,
  Form$Outbound,
  Form$outboundSchema,
} from "../components/form.js";
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

export type GetV1CompanyFormRequest = {
  /**
   * The UUID of the form
   */
  formId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompanyFormResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  form?: Form | undefined;
};

/** @internal */
export const GetV1CompanyFormRequest$inboundSchema: z.ZodType<
  GetV1CompanyFormRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  form_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "form_id": "formId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompanyFormRequest$Outbound = {
  form_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompanyFormRequest$outboundSchema: z.ZodType<
  GetV1CompanyFormRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompanyFormRequest
> = z.object({
  formId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    formId: "form_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompanyFormRequest$ {
  /** @deprecated use `GetV1CompanyFormRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1CompanyFormRequest$inboundSchema;
  /** @deprecated use `GetV1CompanyFormRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1CompanyFormRequest$outboundSchema;
  /** @deprecated use `GetV1CompanyFormRequest$Outbound` instead. */
  export type Outbound = GetV1CompanyFormRequest$Outbound;
}

export function getV1CompanyFormRequestToJSON(
  getV1CompanyFormRequest: GetV1CompanyFormRequest,
): string {
  return JSON.stringify(
    GetV1CompanyFormRequest$outboundSchema.parse(getV1CompanyFormRequest),
  );
}

export function getV1CompanyFormRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompanyFormRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1CompanyFormRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyFormRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompanyFormResponse$inboundSchema: z.ZodType<
  GetV1CompanyFormResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Form: Form$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Form": "form",
  });
});

/** @internal */
export type GetV1CompanyFormResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Form?: Form$Outbound | undefined;
};

/** @internal */
export const GetV1CompanyFormResponse$outboundSchema: z.ZodType<
  GetV1CompanyFormResponse$Outbound,
  z.ZodTypeDef,
  GetV1CompanyFormResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  form: Form$outboundSchema.optional(),
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
export namespace GetV1CompanyFormResponse$ {
  /** @deprecated use `GetV1CompanyFormResponse$inboundSchema` instead. */
  export const inboundSchema = GetV1CompanyFormResponse$inboundSchema;
  /** @deprecated use `GetV1CompanyFormResponse$outboundSchema` instead. */
  export const outboundSchema = GetV1CompanyFormResponse$outboundSchema;
  /** @deprecated use `GetV1CompanyFormResponse$Outbound` instead. */
  export type Outbound = GetV1CompanyFormResponse$Outbound;
}

export function getV1CompanyFormResponseToJSON(
  getV1CompanyFormResponse: GetV1CompanyFormResponse,
): string {
  return JSON.stringify(
    GetV1CompanyFormResponse$outboundSchema.parse(getV1CompanyFormResponse),
  );
}

export function getV1CompanyFormResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompanyFormResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1CompanyFormResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyFormResponse' from JSON`,
  );
}
