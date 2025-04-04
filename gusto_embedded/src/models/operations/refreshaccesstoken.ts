/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Authentication,
  Authentication$inboundSchema,
  Authentication$Outbound,
  Authentication$outboundSchema,
} from "../components/authentication.js";
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

export type RefreshAccessTokenRequestBody = {
  /**
   * Your client id
   */
  clientId: string;
  /**
   * Your client secret
   */
  clientSecret: string;
  /**
   * The redirect URI you set up via the Developer Portal
   */
  redirectUri?: string | undefined;
  /**
   * The `refresh_token` being exchanged for an access token code
   */
  refreshToken: string;
  /**
   * this should be the literal string 'refresh_token'
   */
  grantType: string;
};

export type RefreshAccessTokenRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: RefreshAccessTokenRequestBody;
};

export type RefreshAccessTokenResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  authentication?: Authentication | undefined;
};

/** @internal */
export const RefreshAccessTokenRequestBody$inboundSchema: z.ZodType<
  RefreshAccessTokenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  redirect_uri: z.string().optional(),
  refresh_token: z.string(),
  grant_type: z.string(),
}).transform((v) => {
  return remap$(v, {
    "client_id": "clientId",
    "client_secret": "clientSecret",
    "redirect_uri": "redirectUri",
    "refresh_token": "refreshToken",
    "grant_type": "grantType",
  });
});

/** @internal */
export type RefreshAccessTokenRequestBody$Outbound = {
  client_id: string;
  client_secret: string;
  redirect_uri?: string | undefined;
  refresh_token: string;
  grant_type: string;
};

/** @internal */
export const RefreshAccessTokenRequestBody$outboundSchema: z.ZodType<
  RefreshAccessTokenRequestBody$Outbound,
  z.ZodTypeDef,
  RefreshAccessTokenRequestBody
> = z.object({
  clientId: z.string(),
  clientSecret: z.string(),
  redirectUri: z.string().optional(),
  refreshToken: z.string(),
  grantType: z.string(),
}).transform((v) => {
  return remap$(v, {
    clientId: "client_id",
    clientSecret: "client_secret",
    redirectUri: "redirect_uri",
    refreshToken: "refresh_token",
    grantType: "grant_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefreshAccessTokenRequestBody$ {
  /** @deprecated use `RefreshAccessTokenRequestBody$inboundSchema` instead. */
  export const inboundSchema = RefreshAccessTokenRequestBody$inboundSchema;
  /** @deprecated use `RefreshAccessTokenRequestBody$outboundSchema` instead. */
  export const outboundSchema = RefreshAccessTokenRequestBody$outboundSchema;
  /** @deprecated use `RefreshAccessTokenRequestBody$Outbound` instead. */
  export type Outbound = RefreshAccessTokenRequestBody$Outbound;
}

export function refreshAccessTokenRequestBodyToJSON(
  refreshAccessTokenRequestBody: RefreshAccessTokenRequestBody,
): string {
  return JSON.stringify(
    RefreshAccessTokenRequestBody$outboundSchema.parse(
      refreshAccessTokenRequestBody,
    ),
  );
}

export function refreshAccessTokenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<RefreshAccessTokenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefreshAccessTokenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefreshAccessTokenRequestBody' from JSON`,
  );
}

/** @internal */
export const RefreshAccessTokenRequest$inboundSchema: z.ZodType<
  RefreshAccessTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() => RefreshAccessTokenRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type RefreshAccessTokenRequest$Outbound = {
  "X-Gusto-API-Version": string;
  RequestBody: RefreshAccessTokenRequestBody$Outbound;
};

/** @internal */
export const RefreshAccessTokenRequest$outboundSchema: z.ZodType<
  RefreshAccessTokenRequest$Outbound,
  z.ZodTypeDef,
  RefreshAccessTokenRequest
> = z.object({
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() => RefreshAccessTokenRequestBody$outboundSchema),
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
export namespace RefreshAccessTokenRequest$ {
  /** @deprecated use `RefreshAccessTokenRequest$inboundSchema` instead. */
  export const inboundSchema = RefreshAccessTokenRequest$inboundSchema;
  /** @deprecated use `RefreshAccessTokenRequest$outboundSchema` instead. */
  export const outboundSchema = RefreshAccessTokenRequest$outboundSchema;
  /** @deprecated use `RefreshAccessTokenRequest$Outbound` instead. */
  export type Outbound = RefreshAccessTokenRequest$Outbound;
}

export function refreshAccessTokenRequestToJSON(
  refreshAccessTokenRequest: RefreshAccessTokenRequest,
): string {
  return JSON.stringify(
    RefreshAccessTokenRequest$outboundSchema.parse(refreshAccessTokenRequest),
  );
}

export function refreshAccessTokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<RefreshAccessTokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefreshAccessTokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefreshAccessTokenRequest' from JSON`,
  );
}

/** @internal */
export const RefreshAccessTokenResponse$inboundSchema: z.ZodType<
  RefreshAccessTokenResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Authentication: Authentication$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Authentication": "authentication",
  });
});

/** @internal */
export type RefreshAccessTokenResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Authentication?: Authentication$Outbound | undefined;
};

/** @internal */
export const RefreshAccessTokenResponse$outboundSchema: z.ZodType<
  RefreshAccessTokenResponse$Outbound,
  z.ZodTypeDef,
  RefreshAccessTokenResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  authentication: Authentication$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    authentication: "Authentication",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefreshAccessTokenResponse$ {
  /** @deprecated use `RefreshAccessTokenResponse$inboundSchema` instead. */
  export const inboundSchema = RefreshAccessTokenResponse$inboundSchema;
  /** @deprecated use `RefreshAccessTokenResponse$outboundSchema` instead. */
  export const outboundSchema = RefreshAccessTokenResponse$outboundSchema;
  /** @deprecated use `RefreshAccessTokenResponse$Outbound` instead. */
  export type Outbound = RefreshAccessTokenResponse$Outbound;
}

export function refreshAccessTokenResponseToJSON(
  refreshAccessTokenResponse: RefreshAccessTokenResponse,
): string {
  return JSON.stringify(
    RefreshAccessTokenResponse$outboundSchema.parse(refreshAccessTokenResponse),
  );
}

export function refreshAccessTokenResponseFromJSON(
  jsonString: string,
): SafeParseResult<RefreshAccessTokenResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefreshAccessTokenResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefreshAccessTokenResponse' from JSON`,
  );
}
