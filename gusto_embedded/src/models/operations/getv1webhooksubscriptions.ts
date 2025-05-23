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
import {
  WebhookSubscription,
  WebhookSubscription$inboundSchema,
  WebhookSubscription$Outbound,
  WebhookSubscription$outboundSchema,
} from "../components/webhooksubscription.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1WebhookSubscriptionsSecurity = {
  systemAccessAuth: string;
};

export type GetV1WebhookSubscriptionsRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1WebhookSubscriptionsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  webhookSubscriptionsList?: Array<WebhookSubscription> | undefined;
};

/** @internal */
export const GetV1WebhookSubscriptionsSecurity$inboundSchema: z.ZodType<
  GetV1WebhookSubscriptionsSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  SystemAccessAuth: z.string(),
}).transform((v) => {
  return remap$(v, {
    "SystemAccessAuth": "systemAccessAuth",
  });
});

/** @internal */
export type GetV1WebhookSubscriptionsSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const GetV1WebhookSubscriptionsSecurity$outboundSchema: z.ZodType<
  GetV1WebhookSubscriptionsSecurity$Outbound,
  z.ZodTypeDef,
  GetV1WebhookSubscriptionsSecurity
> = z.object({
  systemAccessAuth: z.string(),
}).transform((v) => {
  return remap$(v, {
    systemAccessAuth: "SystemAccessAuth",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WebhookSubscriptionsSecurity$ {
  /** @deprecated use `GetV1WebhookSubscriptionsSecurity$inboundSchema` instead. */
  export const inboundSchema = GetV1WebhookSubscriptionsSecurity$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionsSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionsSecurity$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionsSecurity$Outbound` instead. */
  export type Outbound = GetV1WebhookSubscriptionsSecurity$Outbound;
}

export function getV1WebhookSubscriptionsSecurityToJSON(
  getV1WebhookSubscriptionsSecurity: GetV1WebhookSubscriptionsSecurity,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionsSecurity$outboundSchema.parse(
      getV1WebhookSubscriptionsSecurity,
    ),
  );
}

export function getV1WebhookSubscriptionsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetV1WebhookSubscriptionsSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1WebhookSubscriptionsSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1WebhookSubscriptionsSecurity' from JSON`,
  );
}

/** @internal */
export const GetV1WebhookSubscriptionsRequest$inboundSchema: z.ZodType<
  GetV1WebhookSubscriptionsRequest,
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
export type GetV1WebhookSubscriptionsRequest$Outbound = {
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1WebhookSubscriptionsRequest$outboundSchema: z.ZodType<
  GetV1WebhookSubscriptionsRequest$Outbound,
  z.ZodTypeDef,
  GetV1WebhookSubscriptionsRequest
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
export namespace GetV1WebhookSubscriptionsRequest$ {
  /** @deprecated use `GetV1WebhookSubscriptionsRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1WebhookSubscriptionsRequest$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionsRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1WebhookSubscriptionsRequest$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionsRequest$Outbound` instead. */
  export type Outbound = GetV1WebhookSubscriptionsRequest$Outbound;
}

export function getV1WebhookSubscriptionsRequestToJSON(
  getV1WebhookSubscriptionsRequest: GetV1WebhookSubscriptionsRequest,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionsRequest$outboundSchema.parse(
      getV1WebhookSubscriptionsRequest,
    ),
  );
}

export function getV1WebhookSubscriptionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1WebhookSubscriptionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1WebhookSubscriptionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1WebhookSubscriptionsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1WebhookSubscriptionsResponse$inboundSchema: z.ZodType<
  GetV1WebhookSubscriptionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  "Webhook-Subscriptions-List": z.array(WebhookSubscription$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Webhook-Subscriptions-List": "webhookSubscriptionsList",
  });
});

/** @internal */
export type GetV1WebhookSubscriptionsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Webhook-Subscriptions-List"?:
    | Array<WebhookSubscription$Outbound>
    | undefined;
};

/** @internal */
export const GetV1WebhookSubscriptionsResponse$outboundSchema: z.ZodType<
  GetV1WebhookSubscriptionsResponse$Outbound,
  z.ZodTypeDef,
  GetV1WebhookSubscriptionsResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  webhookSubscriptionsList: z.array(WebhookSubscription$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    webhookSubscriptionsList: "Webhook-Subscriptions-List",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WebhookSubscriptionsResponse$ {
  /** @deprecated use `GetV1WebhookSubscriptionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetV1WebhookSubscriptionsResponse$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionsResponse$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionsResponse$Outbound` instead. */
  export type Outbound = GetV1WebhookSubscriptionsResponse$Outbound;
}

export function getV1WebhookSubscriptionsResponseToJSON(
  getV1WebhookSubscriptionsResponse: GetV1WebhookSubscriptionsResponse,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionsResponse$outboundSchema.parse(
      getV1WebhookSubscriptionsResponse,
    ),
  );
}

export function getV1WebhookSubscriptionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1WebhookSubscriptionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1WebhookSubscriptionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1WebhookSubscriptionsResponse' from JSON`,
  );
}
