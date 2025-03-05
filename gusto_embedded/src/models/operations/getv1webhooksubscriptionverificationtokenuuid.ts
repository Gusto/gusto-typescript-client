/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1WebhookSubscriptionVerificationTokenUuidSecurity = {
  systemAccessAuth: string;
};

export type GetV1WebhookSubscriptionVerificationTokenUuidRequest = {
  /**
   * The webhook subscription UUID.
   */
  webhookSubscriptionUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1WebhookSubscriptionVerificationTokenUuidResponse = {
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
};

/** @internal */
export const GetV1WebhookSubscriptionVerificationTokenUuidSecurity$inboundSchema:
  z.ZodType<
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity,
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
export type GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema:
  z.ZodType<
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound,
    z.ZodTypeDef,
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity
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
export namespace GetV1WebhookSubscriptionVerificationTokenUuidSecurity$ {
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound` instead. */
  export type Outbound =
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity$Outbound;
}

export function getV1WebhookSubscriptionVerificationTokenUuidSecurityToJSON(
  getV1WebhookSubscriptionVerificationTokenUuidSecurity:
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionVerificationTokenUuidSecurity$outboundSchema.parse(
      getV1WebhookSubscriptionVerificationTokenUuidSecurity,
    ),
  );
}

export function getV1WebhookSubscriptionVerificationTokenUuidSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1WebhookSubscriptionVerificationTokenUuidSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1WebhookSubscriptionVerificationTokenUuidSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1WebhookSubscriptionVerificationTokenUuidSecurity' from JSON`,
  );
}

/** @internal */
export const GetV1WebhookSubscriptionVerificationTokenUuidRequest$inboundSchema:
  z.ZodType<
    GetV1WebhookSubscriptionVerificationTokenUuidRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    webhook_subscription_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "webhook_subscription_uuid": "webhookSubscriptionUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound = {
  webhook_subscription_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema:
  z.ZodType<
    GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound,
    z.ZodTypeDef,
    GetV1WebhookSubscriptionVerificationTokenUuidRequest
  > = z.object({
    webhookSubscriptionUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
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
export namespace GetV1WebhookSubscriptionVerificationTokenUuidRequest$ {
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1WebhookSubscriptionVerificationTokenUuidRequest$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound` instead. */
  export type Outbound =
    GetV1WebhookSubscriptionVerificationTokenUuidRequest$Outbound;
}

export function getV1WebhookSubscriptionVerificationTokenUuidRequestToJSON(
  getV1WebhookSubscriptionVerificationTokenUuidRequest:
    GetV1WebhookSubscriptionVerificationTokenUuidRequest,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionVerificationTokenUuidRequest$outboundSchema.parse(
      getV1WebhookSubscriptionVerificationTokenUuidRequest,
    ),
  );
}

export function getV1WebhookSubscriptionVerificationTokenUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1WebhookSubscriptionVerificationTokenUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1WebhookSubscriptionVerificationTokenUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1WebhookSubscriptionVerificationTokenUuidRequest' from JSON`,
  );
}

/** @internal */
export const GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema:
  z.ZodType<
    GetV1WebhookSubscriptionVerificationTokenUuidResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetV1WebhookSubscriptionVerificationTokenUuidResponse$outboundSchema:
  z.ZodType<
    GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound,
    z.ZodTypeDef,
    GetV1WebhookSubscriptionVerificationTokenUuidResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WebhookSubscriptionVerificationTokenUuidResponse$ {
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1WebhookSubscriptionVerificationTokenUuidResponse$outboundSchema;
  /** @deprecated use `GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound` instead. */
  export type Outbound =
    GetV1WebhookSubscriptionVerificationTokenUuidResponse$Outbound;
}

export function getV1WebhookSubscriptionVerificationTokenUuidResponseToJSON(
  getV1WebhookSubscriptionVerificationTokenUuidResponse:
    GetV1WebhookSubscriptionVerificationTokenUuidResponse,
): string {
  return JSON.stringify(
    GetV1WebhookSubscriptionVerificationTokenUuidResponse$outboundSchema.parse(
      getV1WebhookSubscriptionVerificationTokenUuidResponse,
    ),
  );
}

export function getV1WebhookSubscriptionVerificationTokenUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1WebhookSubscriptionVerificationTokenUuidResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1WebhookSubscriptionVerificationTokenUuidResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1WebhookSubscriptionVerificationTokenUuidResponse' from JSON`,
  );
}
