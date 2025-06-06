/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
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
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export const HeaderXGustoAPIVersion = {
  TwoThousandAndTwentyFourMinus04Minus01: "2024-04-01",
} as const;
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type HeaderXGustoAPIVersion = ClosedEnum<typeof HeaderXGustoAPIVersion>;

export type PutV1LocationsLocationIdRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version: string;
  phoneNumber?: string | undefined;
  street1?: string | undefined;
  street2?: string | null | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  country?: string | undefined;
  /**
   * For a company location, specify if this location is the company's mailing address. A company has a single mailing address, so this designation will override any previous selection.
   */
  mailingAddress?: boolean | undefined;
  /**
   * For a company location, specify if this location is the company's filing address. A company has a single filing address, so this designation will override any previous selection.
   */
  filingAddress?: boolean | undefined;
};

export type PutV1LocationsLocationIdRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: HeaderXGustoAPIVersion | undefined;
  /**
   * The UUID of the location
   */
  locationId: string;
  requestBody: PutV1LocationsLocationIdRequestBody;
};

export type PutV1LocationsLocationIdResponse = {
  httpMeta: HTTPMetadata;
  /**
   * successful
   */
  location?: Location | undefined;
};

/** @internal */
export const HeaderXGustoAPIVersion$inboundSchema: z.ZodNativeEnum<
  typeof HeaderXGustoAPIVersion
> = z.nativeEnum(HeaderXGustoAPIVersion);

/** @internal */
export const HeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<
  typeof HeaderXGustoAPIVersion
> = HeaderXGustoAPIVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HeaderXGustoAPIVersion$ {
  /** @deprecated use `HeaderXGustoAPIVersion$inboundSchema` instead. */
  export const inboundSchema = HeaderXGustoAPIVersion$inboundSchema;
  /** @deprecated use `HeaderXGustoAPIVersion$outboundSchema` instead. */
  export const outboundSchema = HeaderXGustoAPIVersion$outboundSchema;
}

/** @internal */
export const PutV1LocationsLocationIdRequestBody$inboundSchema: z.ZodType<
  PutV1LocationsLocationIdRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
  phone_number: z.string().optional(),
  street_1: z.string().optional(),
  street_2: z.nullable(z.string()).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
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
export type PutV1LocationsLocationIdRequestBody$Outbound = {
  version: string;
  phone_number?: string | undefined;
  street_1?: string | undefined;
  street_2?: string | null | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  country?: string | undefined;
  mailing_address?: boolean | undefined;
  filing_address?: boolean | undefined;
};

/** @internal */
export const PutV1LocationsLocationIdRequestBody$outboundSchema: z.ZodType<
  PutV1LocationsLocationIdRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1LocationsLocationIdRequestBody
> = z.object({
  version: z.string(),
  phoneNumber: z.string().optional(),
  street1: z.string().optional(),
  street2: z.nullable(z.string()).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
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
export namespace PutV1LocationsLocationIdRequestBody$ {
  /** @deprecated use `PutV1LocationsLocationIdRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1LocationsLocationIdRequestBody$inboundSchema;
  /** @deprecated use `PutV1LocationsLocationIdRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1LocationsLocationIdRequestBody$outboundSchema;
  /** @deprecated use `PutV1LocationsLocationIdRequestBody$Outbound` instead. */
  export type Outbound = PutV1LocationsLocationIdRequestBody$Outbound;
}

export function putV1LocationsLocationIdRequestBodyToJSON(
  putV1LocationsLocationIdRequestBody: PutV1LocationsLocationIdRequestBody,
): string {
  return JSON.stringify(
    PutV1LocationsLocationIdRequestBody$outboundSchema.parse(
      putV1LocationsLocationIdRequestBody,
    ),
  );
}

export function putV1LocationsLocationIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1LocationsLocationIdRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1LocationsLocationIdRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1LocationsLocationIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1LocationsLocationIdRequest$inboundSchema: z.ZodType<
  PutV1LocationsLocationIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": HeaderXGustoAPIVersion$inboundSchema.default(
    "2024-04-01",
  ),
  location_id: z.string(),
  RequestBody: z.lazy(() => PutV1LocationsLocationIdRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "location_id": "locationId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1LocationsLocationIdRequest$Outbound = {
  "X-Gusto-API-Version": string;
  location_id: string;
  RequestBody: PutV1LocationsLocationIdRequestBody$Outbound;
};

/** @internal */
export const PutV1LocationsLocationIdRequest$outboundSchema: z.ZodType<
  PutV1LocationsLocationIdRequest$Outbound,
  z.ZodTypeDef,
  PutV1LocationsLocationIdRequest
> = z.object({
  xGustoAPIVersion: HeaderXGustoAPIVersion$outboundSchema.default("2024-04-01"),
  locationId: z.string(),
  requestBody: z.lazy(() => PutV1LocationsLocationIdRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    xGustoAPIVersion: "X-Gusto-API-Version",
    locationId: "location_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1LocationsLocationIdRequest$ {
  /** @deprecated use `PutV1LocationsLocationIdRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1LocationsLocationIdRequest$inboundSchema;
  /** @deprecated use `PutV1LocationsLocationIdRequest$outboundSchema` instead. */
  export const outboundSchema = PutV1LocationsLocationIdRequest$outboundSchema;
  /** @deprecated use `PutV1LocationsLocationIdRequest$Outbound` instead. */
  export type Outbound = PutV1LocationsLocationIdRequest$Outbound;
}

export function putV1LocationsLocationIdRequestToJSON(
  putV1LocationsLocationIdRequest: PutV1LocationsLocationIdRequest,
): string {
  return JSON.stringify(
    PutV1LocationsLocationIdRequest$outboundSchema.parse(
      putV1LocationsLocationIdRequest,
    ),
  );
}

export function putV1LocationsLocationIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1LocationsLocationIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1LocationsLocationIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1LocationsLocationIdRequest' from JSON`,
  );
}

/** @internal */
export const PutV1LocationsLocationIdResponse$inboundSchema: z.ZodType<
  PutV1LocationsLocationIdResponse,
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
export type PutV1LocationsLocationIdResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Location?: Location$Outbound | undefined;
};

/** @internal */
export const PutV1LocationsLocationIdResponse$outboundSchema: z.ZodType<
  PutV1LocationsLocationIdResponse$Outbound,
  z.ZodTypeDef,
  PutV1LocationsLocationIdResponse
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
export namespace PutV1LocationsLocationIdResponse$ {
  /** @deprecated use `PutV1LocationsLocationIdResponse$inboundSchema` instead. */
  export const inboundSchema = PutV1LocationsLocationIdResponse$inboundSchema;
  /** @deprecated use `PutV1LocationsLocationIdResponse$outboundSchema` instead. */
  export const outboundSchema = PutV1LocationsLocationIdResponse$outboundSchema;
  /** @deprecated use `PutV1LocationsLocationIdResponse$Outbound` instead. */
  export type Outbound = PutV1LocationsLocationIdResponse$Outbound;
}

export function putV1LocationsLocationIdResponseToJSON(
  putV1LocationsLocationIdResponse: PutV1LocationsLocationIdResponse,
): string {
  return JSON.stringify(
    PutV1LocationsLocationIdResponse$outboundSchema.parse(
      putV1LocationsLocationIdResponse,
    ),
  );
}

export function putV1LocationsLocationIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<PutV1LocationsLocationIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1LocationsLocationIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1LocationsLocationIdResponse' from JSON`,
  );
}
