/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  SupportedBenefit,
  SupportedBenefit$inboundSchema,
  SupportedBenefit$Outbound,
  SupportedBenefit$outboundSchema,
} from "../components/supportedbenefit.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1BenefitsRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1BenefitsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Example response
   */
  supportedBenefitList?: Array<SupportedBenefit> | undefined;
};

/** @internal */
export const GetV1BenefitsRequest$inboundSchema: z.ZodType<
  GetV1BenefitsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1BenefitsRequest$Outbound = {
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1BenefitsRequest$outboundSchema: z.ZodType<
  GetV1BenefitsRequest$Outbound,
  z.ZodTypeDef,
  GetV1BenefitsRequest
> = z.object({
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1BenefitsRequest$ {
  /** @deprecated use `GetV1BenefitsRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1BenefitsRequest$inboundSchema;
  /** @deprecated use `GetV1BenefitsRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1BenefitsRequest$outboundSchema;
  /** @deprecated use `GetV1BenefitsRequest$Outbound` instead. */
  export type Outbound = GetV1BenefitsRequest$Outbound;
}

export function getV1BenefitsRequestToJSON(
  getV1BenefitsRequest: GetV1BenefitsRequest,
): string {
  return JSON.stringify(
    GetV1BenefitsRequest$outboundSchema.parse(getV1BenefitsRequest),
  );
}

export function getV1BenefitsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1BenefitsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1BenefitsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1BenefitsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1BenefitsResponse$inboundSchema: z.ZodType<
  GetV1BenefitsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Supported-Benefit-List": z.array(SupportedBenefit$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Supported-Benefit-List": "supportedBenefitList",
  });
});

/** @internal */
export type GetV1BenefitsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Supported-Benefit-List"?: Array<SupportedBenefit$Outbound> | undefined;
};

/** @internal */
export const GetV1BenefitsResponse$outboundSchema: z.ZodType<
  GetV1BenefitsResponse$Outbound,
  z.ZodTypeDef,
  GetV1BenefitsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  supportedBenefitList: z.array(SupportedBenefit$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    supportedBenefitList: "Supported-Benefit-List",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1BenefitsResponse$ {
  /** @deprecated use `GetV1BenefitsResponse$inboundSchema` instead. */
  export const inboundSchema = GetV1BenefitsResponse$inboundSchema;
  /** @deprecated use `GetV1BenefitsResponse$outboundSchema` instead. */
  export const outboundSchema = GetV1BenefitsResponse$outboundSchema;
  /** @deprecated use `GetV1BenefitsResponse$Outbound` instead. */
  export type Outbound = GetV1BenefitsResponse$Outbound;
}

export function getV1BenefitsResponseToJSON(
  getV1BenefitsResponse: GetV1BenefitsResponse,
): string {
  return JSON.stringify(
    GetV1BenefitsResponse$outboundSchema.parse(getV1BenefitsResponse),
  );
}

export function getV1BenefitsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1BenefitsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1BenefitsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1BenefitsResponse' from JSON`,
  );
}
