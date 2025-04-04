/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Employee,
  Employee$inboundSchema,
  Employee$Outbound,
  Employee$outboundSchema,
} from "../components/employee.js";
import {
  HistoricalEmployeeBody,
  HistoricalEmployeeBody$inboundSchema,
  HistoricalEmployeeBody$Outbound,
  HistoricalEmployeeBody$outboundSchema,
} from "../components/historicalemployeebody.js";
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

export type PostV1HistoricalEmployeesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  /**
   * Create a historical employee.
   */
  historicalEmployeeBody: HistoricalEmployeeBody;
};

export type PostV1HistoricalEmployeesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  employee?: Employee | undefined;
};

/** @internal */
export const PostV1HistoricalEmployeesRequest$inboundSchema: z.ZodType<
  PostV1HistoricalEmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  "Historical-Employee-Body": HistoricalEmployeeBody$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "Historical-Employee-Body": "historicalEmployeeBody",
  });
});

/** @internal */
export type PostV1HistoricalEmployeesRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
  "Historical-Employee-Body": HistoricalEmployeeBody$Outbound;
};

/** @internal */
export const PostV1HistoricalEmployeesRequest$outboundSchema: z.ZodType<
  PostV1HistoricalEmployeesRequest$Outbound,
  z.ZodTypeDef,
  PostV1HistoricalEmployeesRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  historicalEmployeeBody: HistoricalEmployeeBody$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    historicalEmployeeBody: "Historical-Employee-Body",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1HistoricalEmployeesRequest$ {
  /** @deprecated use `PostV1HistoricalEmployeesRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1HistoricalEmployeesRequest$inboundSchema;
  /** @deprecated use `PostV1HistoricalEmployeesRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1HistoricalEmployeesRequest$outboundSchema;
  /** @deprecated use `PostV1HistoricalEmployeesRequest$Outbound` instead. */
  export type Outbound = PostV1HistoricalEmployeesRequest$Outbound;
}

export function postV1HistoricalEmployeesRequestToJSON(
  postV1HistoricalEmployeesRequest: PostV1HistoricalEmployeesRequest,
): string {
  return JSON.stringify(
    PostV1HistoricalEmployeesRequest$outboundSchema.parse(
      postV1HistoricalEmployeesRequest,
    ),
  );
}

export function postV1HistoricalEmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1HistoricalEmployeesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1HistoricalEmployeesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1HistoricalEmployeesRequest' from JSON`,
  );
}

/** @internal */
export const PostV1HistoricalEmployeesResponse$inboundSchema: z.ZodType<
  PostV1HistoricalEmployeesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Employee: Employee$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Employee": "employee",
  });
});

/** @internal */
export type PostV1HistoricalEmployeesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Employee?: Employee$Outbound | undefined;
};

/** @internal */
export const PostV1HistoricalEmployeesResponse$outboundSchema: z.ZodType<
  PostV1HistoricalEmployeesResponse$Outbound,
  z.ZodTypeDef,
  PostV1HistoricalEmployeesResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  employee: Employee$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    employee: "Employee",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1HistoricalEmployeesResponse$ {
  /** @deprecated use `PostV1HistoricalEmployeesResponse$inboundSchema` instead. */
  export const inboundSchema = PostV1HistoricalEmployeesResponse$inboundSchema;
  /** @deprecated use `PostV1HistoricalEmployeesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1HistoricalEmployeesResponse$outboundSchema;
  /** @deprecated use `PostV1HistoricalEmployeesResponse$Outbound` instead. */
  export type Outbound = PostV1HistoricalEmployeesResponse$Outbound;
}

export function postV1HistoricalEmployeesResponseToJSON(
  postV1HistoricalEmployeesResponse: PostV1HistoricalEmployeesResponse,
): string {
  return JSON.stringify(
    PostV1HistoricalEmployeesResponse$outboundSchema.parse(
      postV1HistoricalEmployeesResponse,
    ),
  );
}

export function postV1HistoricalEmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1HistoricalEmployeesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1HistoricalEmployeesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1HistoricalEmployeesResponse' from JSON`,
  );
}
