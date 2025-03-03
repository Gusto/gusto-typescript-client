/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompanyPaymentConfigsRequestBody =
  | components.FastPaymentLimitRequiredBody
  | components.PaymentSpeedRequiredBody;

export type PutV1CompanyPaymentConfigsRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody:
    | components.FastPaymentLimitRequiredBody
    | components.PaymentSpeedRequiredBody;
};

/** @internal */
export const PutV1CompanyPaymentConfigsRequestBody$inboundSchema: z.ZodType<
  PutV1CompanyPaymentConfigsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.FastPaymentLimitRequiredBody$inboundSchema,
  components.PaymentSpeedRequiredBody$inboundSchema,
]);

/** @internal */
export type PutV1CompanyPaymentConfigsRequestBody$Outbound =
  | components.FastPaymentLimitRequiredBody$Outbound
  | components.PaymentSpeedRequiredBody$Outbound;

/** @internal */
export const PutV1CompanyPaymentConfigsRequestBody$outboundSchema: z.ZodType<
  PutV1CompanyPaymentConfigsRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1CompanyPaymentConfigsRequestBody
> = z.union([
  components.FastPaymentLimitRequiredBody$outboundSchema,
  components.PaymentSpeedRequiredBody$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompanyPaymentConfigsRequestBody$ {
  /** @deprecated use `PutV1CompanyPaymentConfigsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyPaymentConfigsRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompanyPaymentConfigsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyPaymentConfigsRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompanyPaymentConfigsRequestBody$Outbound` instead. */
  export type Outbound = PutV1CompanyPaymentConfigsRequestBody$Outbound;
}

export function putV1CompanyPaymentConfigsRequestBodyToJSON(
  putV1CompanyPaymentConfigsRequestBody: PutV1CompanyPaymentConfigsRequestBody,
): string {
  return JSON.stringify(
    PutV1CompanyPaymentConfigsRequestBody$outboundSchema.parse(
      putV1CompanyPaymentConfigsRequestBody,
    ),
  );
}

export function putV1CompanyPaymentConfigsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1CompanyPaymentConfigsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyPaymentConfigsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompanyPaymentConfigsRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompanyPaymentConfigsRequest$inboundSchema: z.ZodType<
  PutV1CompanyPaymentConfigsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.union([
    components.FastPaymentLimitRequiredBody$inboundSchema,
    components.PaymentSpeedRequiredBody$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1CompanyPaymentConfigsRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody:
    | components.FastPaymentLimitRequiredBody$Outbound
    | components.PaymentSpeedRequiredBody$Outbound;
};

/** @internal */
export const PutV1CompanyPaymentConfigsRequest$outboundSchema: z.ZodType<
  PutV1CompanyPaymentConfigsRequest$Outbound,
  z.ZodTypeDef,
  PutV1CompanyPaymentConfigsRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.union([
    components.FastPaymentLimitRequiredBody$outboundSchema,
    components.PaymentSpeedRequiredBody$outboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompanyPaymentConfigsRequest$ {
  /** @deprecated use `PutV1CompanyPaymentConfigsRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1CompanyPaymentConfigsRequest$inboundSchema;
  /** @deprecated use `PutV1CompanyPaymentConfigsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyPaymentConfigsRequest$outboundSchema;
  /** @deprecated use `PutV1CompanyPaymentConfigsRequest$Outbound` instead. */
  export type Outbound = PutV1CompanyPaymentConfigsRequest$Outbound;
}

export function putV1CompanyPaymentConfigsRequestToJSON(
  putV1CompanyPaymentConfigsRequest: PutV1CompanyPaymentConfigsRequest,
): string {
  return JSON.stringify(
    PutV1CompanyPaymentConfigsRequest$outboundSchema.parse(
      putV1CompanyPaymentConfigsRequest,
    ),
  );
}

export function putV1CompanyPaymentConfigsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1CompanyPaymentConfigsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1CompanyPaymentConfigsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompanyPaymentConfigsRequest' from JSON`,
  );
}
