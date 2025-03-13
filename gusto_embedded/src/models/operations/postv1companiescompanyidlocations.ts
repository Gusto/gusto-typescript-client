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
  Location,
  Location$inboundSchema,
  Location$Outbound,
  Location$outboundSchema,
} from "../components/location.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Create a company location.
 */
export type PostV1CompaniesCompanyIdLocationsRequestBody = {
  phoneNumber: string;
  street1: string;
  street2?: string | null | undefined;
  city: string;
  state: string;
  zip: string;
  /**
   * Specify if this location is the company's mailing address.
   */
  mailingAddress?: boolean | undefined;
  /**
   * Specify if this location is the company's filing address.
   */
  filingAddress?: boolean | undefined;
};

export type PostV1CompaniesCompanyIdLocationsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  /**
   * Create a company location.
   */
  requestBody: PostV1CompaniesCompanyIdLocationsRequestBody;
};

export type PostV1CompaniesCompanyIdLocationsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  location?: Location | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdLocationsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    phone_number: z.string(),
    street_1: z.string(),
    street_2: z.nullable(z.string()).optional(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    mailing_address: z.boolean().optional(),
    filing_address: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "phone_number": "phoneNumber",
      "street_1": "street1",
      "street_2": "street2",
      "mailing_address": "mailingAddress",
      "filing_address": "filingAddress",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdLocationsRequestBody$Outbound = {
  phone_number: string;
  street_1: string;
  street_2?: string | null | undefined;
  city: string;
  state: string;
  zip: string;
  mailing_address?: boolean | undefined;
  filing_address?: boolean | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdLocationsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdLocationsRequestBody
  > = z.object({
    phoneNumber: z.string(),
    street1: z.string(),
    street2: z.nullable(z.string()).optional(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    mailingAddress: z.boolean().optional(),
    filingAddress: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      phoneNumber: "phone_number",
      street1: "street_1",
      street2: "street_2",
      mailingAddress: "mailing_address",
      filingAddress: "filing_address",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdLocationsRequestBody$ {
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequestBody$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdLocationsRequestBody$Outbound;
}

export function postV1CompaniesCompanyIdLocationsRequestBodyToJSON(
  postV1CompaniesCompanyIdLocationsRequestBody:
    PostV1CompaniesCompanyIdLocationsRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema.parse(
      postV1CompaniesCompanyIdLocationsRequestBody,
    ),
  );
}

export function postV1CompaniesCompanyIdLocationsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdLocationsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdLocationsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdLocationsRequest$inboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdLocationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() =>
    PostV1CompaniesCompanyIdLocationsRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1CompaniesCompanyIdLocationsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1CompaniesCompanyIdLocationsRequestBody$Outbound;
};

/** @internal */
export const PostV1CompaniesCompanyIdLocationsRequest$outboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdLocationsRequest$Outbound,
  z.ZodTypeDef,
  PostV1CompaniesCompanyIdLocationsRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() =>
    PostV1CompaniesCompanyIdLocationsRequestBody$outboundSchema
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
export namespace PostV1CompaniesCompanyIdLocationsRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdLocationsRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdLocationsRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsRequest$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdLocationsRequest$Outbound;
}

export function postV1CompaniesCompanyIdLocationsRequestToJSON(
  postV1CompaniesCompanyIdLocationsRequest:
    PostV1CompaniesCompanyIdLocationsRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdLocationsRequest$outboundSchema.parse(
      postV1CompaniesCompanyIdLocationsRequest,
    ),
  );
}

export function postV1CompaniesCompanyIdLocationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdLocationsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdLocationsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdLocationsRequest' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdLocationsResponse$inboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdLocationsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Location: Location$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Location": "location",
  });
});

/** @internal */
export type PostV1CompaniesCompanyIdLocationsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Location?: Location$Outbound | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdLocationsResponse$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdLocationsResponse$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdLocationsResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    location: Location$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      location: "Location",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdLocationsResponse$ {
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdLocationsResponse$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdLocationsResponse$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdLocationsResponse$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdLocationsResponse$Outbound;
}

export function postV1CompaniesCompanyIdLocationsResponseToJSON(
  postV1CompaniesCompanyIdLocationsResponse:
    PostV1CompaniesCompanyIdLocationsResponse,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdLocationsResponse$outboundSchema.parse(
      postV1CompaniesCompanyIdLocationsResponse,
    ),
  );
}

export function postV1CompaniesCompanyIdLocationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdLocationsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdLocationsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdLocationsResponse' from JSON`,
  );
}
