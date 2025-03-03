/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1WebhookSubscriptionUuidSecurity = {
  systemAccessAuth: string;
};

export type DeleteV1WebhookSubscriptionUuidRequest = {
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
export const DeleteV1WebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<
  DeleteV1WebhookSubscriptionUuidSecurity,
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
export type DeleteV1WebhookSubscriptionUuidSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<
  DeleteV1WebhookSubscriptionUuidSecurity$Outbound,
  z.ZodTypeDef,
  DeleteV1WebhookSubscriptionUuidSecurity
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
export namespace DeleteV1WebhookSubscriptionUuidSecurity$ {
  /** @deprecated use `DeleteV1WebhookSubscriptionUuidSecurity$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1WebhookSubscriptionUuidSecurity$inboundSchema;
  /** @deprecated use `DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema;
  /** @deprecated use `DeleteV1WebhookSubscriptionUuidSecurity$Outbound` instead. */
  export type Outbound = DeleteV1WebhookSubscriptionUuidSecurity$Outbound;
}

export function deleteV1WebhookSubscriptionUuidSecurityToJSON(
  deleteV1WebhookSubscriptionUuidSecurity:
    DeleteV1WebhookSubscriptionUuidSecurity,
): string {
  return JSON.stringify(
    DeleteV1WebhookSubscriptionUuidSecurity$outboundSchema.parse(
      deleteV1WebhookSubscriptionUuidSecurity,
    ),
  );
}

export function deleteV1WebhookSubscriptionUuidSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1WebhookSubscriptionUuidSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1WebhookSubscriptionUuidSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1WebhookSubscriptionUuidSecurity' from JSON`,
  );
}

/** @internal */
export const DeleteV1WebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<
  DeleteV1WebhookSubscriptionUuidRequest,
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
export type DeleteV1WebhookSubscriptionUuidRequest$Outbound = {
  webhook_subscription_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<
  DeleteV1WebhookSubscriptionUuidRequest$Outbound,
  z.ZodTypeDef,
  DeleteV1WebhookSubscriptionUuidRequest
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
export namespace DeleteV1WebhookSubscriptionUuidRequest$ {
  /** @deprecated use `DeleteV1WebhookSubscriptionUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1WebhookSubscriptionUuidRequest$inboundSchema;
  /** @deprecated use `DeleteV1WebhookSubscriptionUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1WebhookSubscriptionUuidRequest$outboundSchema;
  /** @deprecated use `DeleteV1WebhookSubscriptionUuidRequest$Outbound` instead. */
  export type Outbound = DeleteV1WebhookSubscriptionUuidRequest$Outbound;
}

export function deleteV1WebhookSubscriptionUuidRequestToJSON(
  deleteV1WebhookSubscriptionUuidRequest:
    DeleteV1WebhookSubscriptionUuidRequest,
): string {
  return JSON.stringify(
    DeleteV1WebhookSubscriptionUuidRequest$outboundSchema.parse(
      deleteV1WebhookSubscriptionUuidRequest,
    ),
  );
}

export function deleteV1WebhookSubscriptionUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteV1WebhookSubscriptionUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1WebhookSubscriptionUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1WebhookSubscriptionUuidRequest' from JSON`,
  );
}
