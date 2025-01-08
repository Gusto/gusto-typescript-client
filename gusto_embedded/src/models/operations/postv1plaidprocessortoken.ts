/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The owner type of the bank account
 */
export const OwnerType = {
  Company: "Company",
} as const;
/**
 * The owner type of the bank account
 */
export type OwnerType = ClosedEnum<typeof OwnerType>;

export type PostV1PlaidProcessorTokenRequestBody = {
  /**
   * The owner type of the bank account
   */
  ownerType: OwnerType;
  /**
   * The owner uuid of the bank account
   */
  ownerId: string;
  /**
   * The Plaid processor token
   */
  processorToken: string;
};

export type PostV1PlaidProcessorTokenRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody?: PostV1PlaidProcessorTokenRequestBody | undefined;
};

/**
 * A JSON object containing bank information
 */
export type PostV1PlaidProcessorTokenResponseBody =
  components.CompanyBankAccount;

/** @internal */
export const OwnerType$inboundSchema: z.ZodNativeEnum<typeof OwnerType> = z
  .nativeEnum(OwnerType);

/** @internal */
export const OwnerType$outboundSchema: z.ZodNativeEnum<typeof OwnerType> =
  OwnerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OwnerType$ {
  /** @deprecated use `OwnerType$inboundSchema` instead. */
  export const inboundSchema = OwnerType$inboundSchema;
  /** @deprecated use `OwnerType$outboundSchema` instead. */
  export const outboundSchema = OwnerType$outboundSchema;
}

/** @internal */
export const PostV1PlaidProcessorTokenRequestBody$inboundSchema: z.ZodType<
  PostV1PlaidProcessorTokenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  owner_type: OwnerType$inboundSchema,
  owner_id: z.string(),
  processor_token: z.string(),
}).transform((v) => {
  return remap$(v, {
    "owner_type": "ownerType",
    "owner_id": "ownerId",
    "processor_token": "processorToken",
  });
});

/** @internal */
export type PostV1PlaidProcessorTokenRequestBody$Outbound = {
  owner_type: string;
  owner_id: string;
  processor_token: string;
};

/** @internal */
export const PostV1PlaidProcessorTokenRequestBody$outboundSchema: z.ZodType<
  PostV1PlaidProcessorTokenRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1PlaidProcessorTokenRequestBody
> = z.object({
  ownerType: OwnerType$outboundSchema,
  ownerId: z.string(),
  processorToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    ownerType: "owner_type",
    ownerId: "owner_id",
    processorToken: "processor_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PlaidProcessorTokenRequestBody$ {
  /** @deprecated use `PostV1PlaidProcessorTokenRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PlaidProcessorTokenRequestBody$inboundSchema;
  /** @deprecated use `PostV1PlaidProcessorTokenRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PlaidProcessorTokenRequestBody$outboundSchema;
  /** @deprecated use `PostV1PlaidProcessorTokenRequestBody$Outbound` instead. */
  export type Outbound = PostV1PlaidProcessorTokenRequestBody$Outbound;
}

export function postV1PlaidProcessorTokenRequestBodyToJSON(
  postV1PlaidProcessorTokenRequestBody: PostV1PlaidProcessorTokenRequestBody,
): string {
  return JSON.stringify(
    PostV1PlaidProcessorTokenRequestBody$outboundSchema.parse(
      postV1PlaidProcessorTokenRequestBody,
    ),
  );
}

export function postV1PlaidProcessorTokenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1PlaidProcessorTokenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PlaidProcessorTokenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1PlaidProcessorTokenRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1PlaidProcessorTokenRequest$inboundSchema: z.ZodType<
  PostV1PlaidProcessorTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() => PostV1PlaidProcessorTokenRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1PlaidProcessorTokenRequest$Outbound = {
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody?: PostV1PlaidProcessorTokenRequestBody$Outbound | undefined;
};

/** @internal */
export const PostV1PlaidProcessorTokenRequest$outboundSchema: z.ZodType<
  PostV1PlaidProcessorTokenRequest$Outbound,
  z.ZodTypeDef,
  PostV1PlaidProcessorTokenRequest
> = z.object({
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() => PostV1PlaidProcessorTokenRequestBody$outboundSchema)
    .optional(),
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
export namespace PostV1PlaidProcessorTokenRequest$ {
  /** @deprecated use `PostV1PlaidProcessorTokenRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1PlaidProcessorTokenRequest$inboundSchema;
  /** @deprecated use `PostV1PlaidProcessorTokenRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1PlaidProcessorTokenRequest$outboundSchema;
  /** @deprecated use `PostV1PlaidProcessorTokenRequest$Outbound` instead. */
  export type Outbound = PostV1PlaidProcessorTokenRequest$Outbound;
}

export function postV1PlaidProcessorTokenRequestToJSON(
  postV1PlaidProcessorTokenRequest: PostV1PlaidProcessorTokenRequest,
): string {
  return JSON.stringify(
    PostV1PlaidProcessorTokenRequest$outboundSchema.parse(
      postV1PlaidProcessorTokenRequest,
    ),
  );
}

export function postV1PlaidProcessorTokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1PlaidProcessorTokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1PlaidProcessorTokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1PlaidProcessorTokenRequest' from JSON`,
  );
}

/** @internal */
export const PostV1PlaidProcessorTokenResponseBody$inboundSchema: z.ZodType<
  PostV1PlaidProcessorTokenResponseBody,
  z.ZodTypeDef,
  unknown
> = components.CompanyBankAccount$inboundSchema;

/** @internal */
export type PostV1PlaidProcessorTokenResponseBody$Outbound =
  components.CompanyBankAccount$Outbound;

/** @internal */
export const PostV1PlaidProcessorTokenResponseBody$outboundSchema: z.ZodType<
  PostV1PlaidProcessorTokenResponseBody$Outbound,
  z.ZodTypeDef,
  PostV1PlaidProcessorTokenResponseBody
> = components.CompanyBankAccount$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PlaidProcessorTokenResponseBody$ {
  /** @deprecated use `PostV1PlaidProcessorTokenResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PlaidProcessorTokenResponseBody$inboundSchema;
  /** @deprecated use `PostV1PlaidProcessorTokenResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PlaidProcessorTokenResponseBody$outboundSchema;
  /** @deprecated use `PostV1PlaidProcessorTokenResponseBody$Outbound` instead. */
  export type Outbound = PostV1PlaidProcessorTokenResponseBody$Outbound;
}

export function postV1PlaidProcessorTokenResponseBodyToJSON(
  postV1PlaidProcessorTokenResponseBody: PostV1PlaidProcessorTokenResponseBody,
): string {
  return JSON.stringify(
    PostV1PlaidProcessorTokenResponseBody$outboundSchema.parse(
      postV1PlaidProcessorTokenResponseBody,
    ),
  );
}

export function postV1PlaidProcessorTokenResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1PlaidProcessorTokenResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PlaidProcessorTokenResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1PlaidProcessorTokenResponseBody' from JSON`,
  );
}
