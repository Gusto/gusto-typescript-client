/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EarningType,
  EarningType$inboundSchema,
  EarningType$Outbound,
  EarningType$outboundSchema,
} from "../components/earningtype.js";
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

export type PostV1CompaniesCompanyIdEarningTypesRequestBody = {
  /**
   * The name of the custom earning type.
   */
  name: string;
};

export type PostV1CompaniesCompanyIdEarningTypesRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody;
};

export type PostV1CompaniesCompanyIdEarningTypesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  earningType?: EarningType | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdEarningTypesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
  });

/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound = {
  name: string;
};

/** @internal */
export const PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdEarningTypesRequestBody
  > = z.object({
    name: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdEarningTypesRequestBody$ {
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound;
}

export function postV1CompaniesCompanyIdEarningTypesRequestBodyToJSON(
  postV1CompaniesCompanyIdEarningTypesRequestBody:
    PostV1CompaniesCompanyIdEarningTypesRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema.parse(
      postV1CompaniesCompanyIdEarningTypesRequestBody,
    ),
  );
}

export function postV1CompaniesCompanyIdEarningTypesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdEarningTypesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdEarningTypesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdEarningTypesRequest$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdEarningTypesRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound;
};

/** @internal */
export const PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdEarningTypesRequest$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdEarningTypesRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema
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
export namespace PostV1CompaniesCompanyIdEarningTypesRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdEarningTypesRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequest$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdEarningTypesRequest$Outbound;
}

export function postV1CompaniesCompanyIdEarningTypesRequestToJSON(
  postV1CompaniesCompanyIdEarningTypesRequest:
    PostV1CompaniesCompanyIdEarningTypesRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema.parse(
      postV1CompaniesCompanyIdEarningTypesRequest,
    ),
  );
}

export function postV1CompaniesCompanyIdEarningTypesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdEarningTypesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdEarningTypesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdEarningTypesRequest' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdEarningTypesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Earning-Type": EarningType$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Earning-Type": "earningType",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Earning-Type"?: EarningType$Outbound | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdEarningTypesResponse$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdEarningTypesResponse$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdEarningTypesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    earningType: EarningType$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      earningType: "Earning-Type",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdEarningTypesResponse$ {
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdEarningTypesResponse$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesResponse$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdEarningTypesResponse$Outbound;
}

export function postV1CompaniesCompanyIdEarningTypesResponseToJSON(
  postV1CompaniesCompanyIdEarningTypesResponse:
    PostV1CompaniesCompanyIdEarningTypesResponse,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdEarningTypesResponse$outboundSchema.parse(
      postV1CompaniesCompanyIdEarningTypesResponse,
    ),
  );
}

export function postV1CompaniesCompanyIdEarningTypesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdEarningTypesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdEarningTypesResponse' from JSON`,
  );
}
