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

export type PostV1WebhookSubscriptionSecurity = {
  systemAccessAuth: string;
};

export const SubscriptionTypes = {
  BankAccount: "BankAccount",
  Company: "Company",
  CompanyBenefit: "CompanyBenefit",
  Contractor: "Contractor",
  ContractorPayment: "ContractorPayment",
  Employee: "Employee",
  EmployeeBenefit: "EmployeeBenefit",
  EmployeeJobCompensation: "EmployeeJobCompensation",
  ExternalPayroll: "ExternalPayroll",
  Form: "Form",
  Location: "Location",
  Notification: "Notification",
  Payroll: "Payroll",
  PaySchedule: "PaySchedule",
  Signatory: "Signatory",
} as const;
export type SubscriptionTypes = ClosedEnum<typeof SubscriptionTypes>;

export type PostV1WebhookSubscriptionRequestBody = {
  url: string;
  subscriptionTypes: Array<SubscriptionTypes>;
};

export type PostV1WebhookSubscriptionRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1WebhookSubscriptionRequestBody;
};

/** @internal */
export const PostV1WebhookSubscriptionSecurity$inboundSchema: z.ZodType<
  PostV1WebhookSubscriptionSecurity,
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
export type PostV1WebhookSubscriptionSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const PostV1WebhookSubscriptionSecurity$outboundSchema: z.ZodType<
  PostV1WebhookSubscriptionSecurity$Outbound,
  z.ZodTypeDef,
  PostV1WebhookSubscriptionSecurity
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
export namespace PostV1WebhookSubscriptionSecurity$ {
  /** @deprecated use `PostV1WebhookSubscriptionSecurity$inboundSchema` instead. */
  export const inboundSchema = PostV1WebhookSubscriptionSecurity$inboundSchema;
  /** @deprecated use `PostV1WebhookSubscriptionSecurity$outboundSchema` instead. */
  export const outboundSchema =
    PostV1WebhookSubscriptionSecurity$outboundSchema;
  /** @deprecated use `PostV1WebhookSubscriptionSecurity$Outbound` instead. */
  export type Outbound = PostV1WebhookSubscriptionSecurity$Outbound;
}

export function postV1WebhookSubscriptionSecurityToJSON(
  postV1WebhookSubscriptionSecurity: PostV1WebhookSubscriptionSecurity,
): string {
  return JSON.stringify(
    PostV1WebhookSubscriptionSecurity$outboundSchema.parse(
      postV1WebhookSubscriptionSecurity,
    ),
  );
}

export function postV1WebhookSubscriptionSecurityFromJSON(
  jsonString: string,
): SafeParseResult<PostV1WebhookSubscriptionSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1WebhookSubscriptionSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1WebhookSubscriptionSecurity' from JSON`,
  );
}

/** @internal */
export const SubscriptionTypes$inboundSchema: z.ZodNativeEnum<
  typeof SubscriptionTypes
> = z.nativeEnum(SubscriptionTypes);

/** @internal */
export const SubscriptionTypes$outboundSchema: z.ZodNativeEnum<
  typeof SubscriptionTypes
> = SubscriptionTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionTypes$ {
  /** @deprecated use `SubscriptionTypes$inboundSchema` instead. */
  export const inboundSchema = SubscriptionTypes$inboundSchema;
  /** @deprecated use `SubscriptionTypes$outboundSchema` instead. */
  export const outboundSchema = SubscriptionTypes$outboundSchema;
}

/** @internal */
export const PostV1WebhookSubscriptionRequestBody$inboundSchema: z.ZodType<
  PostV1WebhookSubscriptionRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  subscription_types: z.array(SubscriptionTypes$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "subscription_types": "subscriptionTypes",
  });
});

/** @internal */
export type PostV1WebhookSubscriptionRequestBody$Outbound = {
  url: string;
  subscription_types: Array<string>;
};

/** @internal */
export const PostV1WebhookSubscriptionRequestBody$outboundSchema: z.ZodType<
  PostV1WebhookSubscriptionRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1WebhookSubscriptionRequestBody
> = z.object({
  url: z.string(),
  subscriptionTypes: z.array(SubscriptionTypes$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    subscriptionTypes: "subscription_types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1WebhookSubscriptionRequestBody$ {
  /** @deprecated use `PostV1WebhookSubscriptionRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1WebhookSubscriptionRequestBody$inboundSchema;
  /** @deprecated use `PostV1WebhookSubscriptionRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1WebhookSubscriptionRequestBody$outboundSchema;
  /** @deprecated use `PostV1WebhookSubscriptionRequestBody$Outbound` instead. */
  export type Outbound = PostV1WebhookSubscriptionRequestBody$Outbound;
}

export function postV1WebhookSubscriptionRequestBodyToJSON(
  postV1WebhookSubscriptionRequestBody: PostV1WebhookSubscriptionRequestBody,
): string {
  return JSON.stringify(
    PostV1WebhookSubscriptionRequestBody$outboundSchema.parse(
      postV1WebhookSubscriptionRequestBody,
    ),
  );
}

export function postV1WebhookSubscriptionRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1WebhookSubscriptionRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1WebhookSubscriptionRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1WebhookSubscriptionRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1WebhookSubscriptionRequest$inboundSchema: z.ZodType<
  PostV1WebhookSubscriptionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() => PostV1WebhookSubscriptionRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1WebhookSubscriptionRequest$Outbound = {
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PostV1WebhookSubscriptionRequestBody$Outbound;
};

/** @internal */
export const PostV1WebhookSubscriptionRequest$outboundSchema: z.ZodType<
  PostV1WebhookSubscriptionRequest$Outbound,
  z.ZodTypeDef,
  PostV1WebhookSubscriptionRequest
> = z.object({
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() =>
    PostV1WebhookSubscriptionRequestBody$outboundSchema
  ),
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
export namespace PostV1WebhookSubscriptionRequest$ {
  /** @deprecated use `PostV1WebhookSubscriptionRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1WebhookSubscriptionRequest$inboundSchema;
  /** @deprecated use `PostV1WebhookSubscriptionRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1WebhookSubscriptionRequest$outboundSchema;
  /** @deprecated use `PostV1WebhookSubscriptionRequest$Outbound` instead. */
  export type Outbound = PostV1WebhookSubscriptionRequest$Outbound;
}

export function postV1WebhookSubscriptionRequestToJSON(
  postV1WebhookSubscriptionRequest: PostV1WebhookSubscriptionRequest,
): string {
  return JSON.stringify(
    PostV1WebhookSubscriptionRequest$outboundSchema.parse(
      postV1WebhookSubscriptionRequest,
    ),
  );
}

export function postV1WebhookSubscriptionRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1WebhookSubscriptionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1WebhookSubscriptionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1WebhookSubscriptionRequest' from JSON`,
  );
}
