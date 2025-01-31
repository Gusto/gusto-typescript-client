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

export type PutV1WebhookSubscriptionUuidSecurity = {
  systemAccessAuth: string;
};

export const PutV1WebhookSubscriptionUuidSubscriptionTypes = {
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
export type PutV1WebhookSubscriptionUuidSubscriptionTypes = ClosedEnum<
  typeof PutV1WebhookSubscriptionUuidSubscriptionTypes
>;

export type PutV1WebhookSubscriptionUuidRequestBody = {
  subscriptionTypes: Array<PutV1WebhookSubscriptionUuidSubscriptionTypes>;
};

export type PutV1WebhookSubscriptionUuidRequest = {
  /**
   * The webhook subscription UUID.
   */
  webhookSubscriptionUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1WebhookSubscriptionUuidRequestBody;
};

/** @internal */
export const PutV1WebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<
  PutV1WebhookSubscriptionUuidSecurity,
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
export type PutV1WebhookSubscriptionUuidSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const PutV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<
  PutV1WebhookSubscriptionUuidSecurity$Outbound,
  z.ZodTypeDef,
  PutV1WebhookSubscriptionUuidSecurity
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
export namespace PutV1WebhookSubscriptionUuidSecurity$ {
  /** @deprecated use `PutV1WebhookSubscriptionUuidSecurity$inboundSchema` instead. */
  export const inboundSchema =
    PutV1WebhookSubscriptionUuidSecurity$inboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidSecurity$outboundSchema` instead. */
  export const outboundSchema =
    PutV1WebhookSubscriptionUuidSecurity$outboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidSecurity$Outbound` instead. */
  export type Outbound = PutV1WebhookSubscriptionUuidSecurity$Outbound;
}

export function putV1WebhookSubscriptionUuidSecurityToJSON(
  putV1WebhookSubscriptionUuidSecurity: PutV1WebhookSubscriptionUuidSecurity,
): string {
  return JSON.stringify(
    PutV1WebhookSubscriptionUuidSecurity$outboundSchema.parse(
      putV1WebhookSubscriptionUuidSecurity,
    ),
  );
}

export function putV1WebhookSubscriptionUuidSecurityFromJSON(
  jsonString: string,
): SafeParseResult<PutV1WebhookSubscriptionUuidSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1WebhookSubscriptionUuidSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1WebhookSubscriptionUuidSecurity' from JSON`,
  );
}

/** @internal */
export const PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema:
  z.ZodNativeEnum<typeof PutV1WebhookSubscriptionUuidSubscriptionTypes> = z
    .nativeEnum(PutV1WebhookSubscriptionUuidSubscriptionTypes);

/** @internal */
export const PutV1WebhookSubscriptionUuidSubscriptionTypes$outboundSchema:
  z.ZodNativeEnum<typeof PutV1WebhookSubscriptionUuidSubscriptionTypes> =
    PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1WebhookSubscriptionUuidSubscriptionTypes$ {
  /** @deprecated use `PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema` instead. */
  export const inboundSchema =
    PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidSubscriptionTypes$outboundSchema` instead. */
  export const outboundSchema =
    PutV1WebhookSubscriptionUuidSubscriptionTypes$outboundSchema;
}

/** @internal */
export const PutV1WebhookSubscriptionUuidRequestBody$inboundSchema: z.ZodType<
  PutV1WebhookSubscriptionUuidRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscription_types: z.array(
    PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema,
  ),
}).transform((v) => {
  return remap$(v, {
    "subscription_types": "subscriptionTypes",
  });
});

/** @internal */
export type PutV1WebhookSubscriptionUuidRequestBody$Outbound = {
  subscription_types: Array<string>;
};

/** @internal */
export const PutV1WebhookSubscriptionUuidRequestBody$outboundSchema: z.ZodType<
  PutV1WebhookSubscriptionUuidRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1WebhookSubscriptionUuidRequestBody
> = z.object({
  subscriptionTypes: z.array(
    PutV1WebhookSubscriptionUuidSubscriptionTypes$outboundSchema,
  ),
}).transform((v) => {
  return remap$(v, {
    subscriptionTypes: "subscription_types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1WebhookSubscriptionUuidRequestBody$ {
  /** @deprecated use `PutV1WebhookSubscriptionUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1WebhookSubscriptionUuidRequestBody$inboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1WebhookSubscriptionUuidRequestBody$outboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidRequestBody$Outbound` instead. */
  export type Outbound = PutV1WebhookSubscriptionUuidRequestBody$Outbound;
}

export function putV1WebhookSubscriptionUuidRequestBodyToJSON(
  putV1WebhookSubscriptionUuidRequestBody:
    PutV1WebhookSubscriptionUuidRequestBody,
): string {
  return JSON.stringify(
    PutV1WebhookSubscriptionUuidRequestBody$outboundSchema.parse(
      putV1WebhookSubscriptionUuidRequestBody,
    ),
  );
}

export function putV1WebhookSubscriptionUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1WebhookSubscriptionUuidRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1WebhookSubscriptionUuidRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1WebhookSubscriptionUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1WebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<
  PutV1WebhookSubscriptionUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_subscription_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() =>
    PutV1WebhookSubscriptionUuidRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "webhook_subscription_uuid": "webhookSubscriptionUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1WebhookSubscriptionUuidRequest$Outbound = {
  webhook_subscription_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PutV1WebhookSubscriptionUuidRequestBody$Outbound;
};

/** @internal */
export const PutV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<
  PutV1WebhookSubscriptionUuidRequest$Outbound,
  z.ZodTypeDef,
  PutV1WebhookSubscriptionUuidRequest
> = z.object({
  webhookSubscriptionUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() =>
    PutV1WebhookSubscriptionUuidRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    webhookSubscriptionUuid: "webhook_subscription_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1WebhookSubscriptionUuidRequest$ {
  /** @deprecated use `PutV1WebhookSubscriptionUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1WebhookSubscriptionUuidRequest$inboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1WebhookSubscriptionUuidRequest$outboundSchema;
  /** @deprecated use `PutV1WebhookSubscriptionUuidRequest$Outbound` instead. */
  export type Outbound = PutV1WebhookSubscriptionUuidRequest$Outbound;
}

export function putV1WebhookSubscriptionUuidRequestToJSON(
  putV1WebhookSubscriptionUuidRequest: PutV1WebhookSubscriptionUuidRequest,
): string {
  return JSON.stringify(
    PutV1WebhookSubscriptionUuidRequest$outboundSchema.parse(
      putV1WebhookSubscriptionUuidRequest,
    ),
  );
}

export function putV1WebhookSubscriptionUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1WebhookSubscriptionUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1WebhookSubscriptionUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1WebhookSubscriptionUuidRequest' from JSON`,
  );
}
