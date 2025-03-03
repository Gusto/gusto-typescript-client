/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1WebhookSubscriptionUuidSecurity = {
  systemAccessAuth: string;
};

export type GetV1WebhookSubscriptionUuidRequest = {
  /**
   * The webhook subscription UUID.
   */
  webhookSubscriptionUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1WebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<
  GetV1WebhookSubscriptionUuidSecurity,
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
export type GetV1WebhookSubscriptionUuidSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const GetV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<
  GetV1WebhookSubscriptionUuidSecurity$Outbound,
  z.ZodTypeDef,
  GetV1WebhookSubscriptionUuidSecurity
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
export namespace GetV1WebhookSubscriptionUuidSecurity$ {
  /** @deprecated use `GetV1WebhookSubscriptionUuidSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetV1WebhookSubscriptionUuidSecurity$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionUuidSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionUuidSecurity$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionUuidSecurity$Outbound` instead. */
  export type Outbound = GetV1WebhookSubscriptionUuidSecurity$Outbound;
}

export function getV1WebhookSubscriptionUuidSecurityToJSON(
  getV1WebhookSubscriptionUuidSecurity: GetV1WebhookSubscriptionUuidSecurity,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionUuidSecurity$outboundSchema.parse(
      getV1WebhookSubscriptionUuidSecurity,
    ),
  );
}

export function getV1WebhookSubscriptionUuidSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetV1WebhookSubscriptionUuidSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1WebhookSubscriptionUuidSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1WebhookSubscriptionUuidSecurity' from JSON`,
  );
}

/** @internal */
export const GetV1WebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<
  GetV1WebhookSubscriptionUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_subscription_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "webhook_subscription_uuid": "webhookSubscriptionUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1WebhookSubscriptionUuidRequest$Outbound = {
  webhook_subscription_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<
  GetV1WebhookSubscriptionUuidRequest$Outbound,
  z.ZodTypeDef,
  GetV1WebhookSubscriptionUuidRequest
> = z.object({
  webhookSubscriptionUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    webhookSubscriptionUuid: "webhook_subscription_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WebhookSubscriptionUuidRequest$ {
  /** @deprecated use `GetV1WebhookSubscriptionUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1WebhookSubscriptionUuidRequest$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionUuidRequest$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionUuidRequest$Outbound` instead. */
  export type Outbound = GetV1WebhookSubscriptionUuidRequest$Outbound;
}

export function getV1WebhookSubscriptionUuidRequestToJSON(
  getV1WebhookSubscriptionUuidRequest: GetV1WebhookSubscriptionUuidRequest,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionUuidRequest$outboundSchema.parse(
      getV1WebhookSubscriptionUuidRequest,
    ),
  );
}

export function getV1WebhookSubscriptionUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1WebhookSubscriptionUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1WebhookSubscriptionUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1WebhookSubscriptionUuidRequest' from JSON`,
  );
}
