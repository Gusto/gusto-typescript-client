/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1GarnishmentsGarnishmentIdRequestBody = {
  /**
   * Whether or not this garnishment is currently active.
   */
  active?: boolean | undefined;
  /**
   * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. "8.00".
   */
  amount?: string | undefined;
  /**
   * The description of the garnishment.
   */
  description?: string | undefined;
  /**
   * Whether the garnishment is court ordered.
   */
  courtOrdered?: boolean | undefined;
  /**
   * The number of times to apply the garnishment. Ignored if recurring is true.
   */
  times?: number | null | undefined;
  /**
   * Whether the garnishment should recur indefinitely.
   */
  recurring?: boolean | undefined;
  /**
   * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. "200.00".
   */
  annualMaximum?: string | null | undefined;
  /**
   * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. "16.00".
   */
  payPeriodMaximum?: string | null | undefined;
  /**
   * Whether the amount should be treated as a percentage to be deducted per pay period.
   */
  deductAsPercentage?: boolean | undefined;
  /**
   * A maximum total deduction for the lifetime of this garnishment. A null value indicates no maximum.
   */
  totalAmount?: string | undefined;
  /**
   * Additional child support order details
   */
  childSupport?: components.GarnishmentChildSupportInput | null | undefined;
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
};

export type PutV1GarnishmentsGarnishmentIdRequest = {
  /**
   * The UUID of the garnishment
   */
  garnishmentId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody?: PutV1GarnishmentsGarnishmentIdRequestBody | undefined;
};

/** @internal */
export const PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema: z.ZodType<
  PutV1GarnishmentsGarnishmentIdRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().default(true),
  amount: z.string().optional(),
  description: z.string().optional(),
  court_ordered: z.boolean().optional(),
  times: z.nullable(z.number().int()).default(null),
  recurring: z.boolean().default(false),
  annual_maximum: z.nullable(z.string()).default(null),
  pay_period_maximum: z.nullable(z.string()).default(null),
  deduct_as_percentage: z.boolean().default(false),
  total_amount: z.string().optional(),
  child_support: z.nullable(
    components.GarnishmentChildSupportInput$inboundSchema,
  ).optional(),
  version: z.string(),
}).transform((v) => {
  return remap$(v, {
    "court_ordered": "courtOrdered",
    "annual_maximum": "annualMaximum",
    "pay_period_maximum": "payPeriodMaximum",
    "deduct_as_percentage": "deductAsPercentage",
    "total_amount": "totalAmount",
    "child_support": "childSupport",
  });
});

/** @internal */
export type PutV1GarnishmentsGarnishmentIdRequestBody$Outbound = {
  active: boolean;
  amount?: string | undefined;
  description?: string | undefined;
  court_ordered?: boolean | undefined;
  times: number | null;
  recurring: boolean;
  annual_maximum: string | null;
  pay_period_maximum: string | null;
  deduct_as_percentage: boolean;
  total_amount?: string | undefined;
  child_support?:
    | components.GarnishmentChildSupportInput$Outbound
    | null
    | undefined;
  version: string;
};

/** @internal */
export const PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema:
  z.ZodType<
    PutV1GarnishmentsGarnishmentIdRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1GarnishmentsGarnishmentIdRequestBody
  > = z.object({
    active: z.boolean().default(true),
    amount: z.string().optional(),
    description: z.string().optional(),
    courtOrdered: z.boolean().optional(),
    times: z.nullable(z.number().int()).default(null),
    recurring: z.boolean().default(false),
    annualMaximum: z.nullable(z.string()).default(null),
    payPeriodMaximum: z.nullable(z.string()).default(null),
    deductAsPercentage: z.boolean().default(false),
    totalAmount: z.string().optional(),
    childSupport: z.nullable(
      components.GarnishmentChildSupportInput$outboundSchema,
    ).optional(),
    version: z.string(),
  }).transform((v) => {
    return remap$(v, {
      courtOrdered: "court_ordered",
      annualMaximum: "annual_maximum",
      payPeriodMaximum: "pay_period_maximum",
      deductAsPercentage: "deduct_as_percentage",
      totalAmount: "total_amount",
      childSupport: "child_support",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1GarnishmentsGarnishmentIdRequestBody$ {
  /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema;
  /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema;
  /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequestBody$Outbound` instead. */
  export type Outbound = PutV1GarnishmentsGarnishmentIdRequestBody$Outbound;
}

export function putV1GarnishmentsGarnishmentIdRequestBodyToJSON(
  putV1GarnishmentsGarnishmentIdRequestBody:
    PutV1GarnishmentsGarnishmentIdRequestBody,
): string {
  return JSON.stringify(
    PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema.parse(
      putV1GarnishmentsGarnishmentIdRequestBody,
    ),
  );
}

export function putV1GarnishmentsGarnishmentIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1GarnishmentsGarnishmentIdRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1GarnishmentsGarnishmentIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1GarnishmentsGarnishmentIdRequest$inboundSchema: z.ZodType<
  PutV1GarnishmentsGarnishmentIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  garnishment_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() =>
    PutV1GarnishmentsGarnishmentIdRequestBody$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "garnishment_id": "garnishmentId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1GarnishmentsGarnishmentIdRequest$Outbound = {
  garnishment_id: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody?: PutV1GarnishmentsGarnishmentIdRequestBody$Outbound | undefined;
};

/** @internal */
export const PutV1GarnishmentsGarnishmentIdRequest$outboundSchema: z.ZodType<
  PutV1GarnishmentsGarnishmentIdRequest$Outbound,
  z.ZodTypeDef,
  PutV1GarnishmentsGarnishmentIdRequest
> = z.object({
  garnishmentId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() =>
    PutV1GarnishmentsGarnishmentIdRequestBody$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    garnishmentId: "garnishment_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1GarnishmentsGarnishmentIdRequest$ {
  /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1GarnishmentsGarnishmentIdRequest$inboundSchema;
  /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1GarnishmentsGarnishmentIdRequest$outboundSchema;
  /** @deprecated use `PutV1GarnishmentsGarnishmentIdRequest$Outbound` instead. */
  export type Outbound = PutV1GarnishmentsGarnishmentIdRequest$Outbound;
}

export function putV1GarnishmentsGarnishmentIdRequestToJSON(
  putV1GarnishmentsGarnishmentIdRequest: PutV1GarnishmentsGarnishmentIdRequest,
): string {
  return JSON.stringify(
    PutV1GarnishmentsGarnishmentIdRequest$outboundSchema.parse(
      putV1GarnishmentsGarnishmentIdRequest,
    ),
  );
}

export function putV1GarnishmentsGarnishmentIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1GarnishmentsGarnishmentIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1GarnishmentsGarnishmentIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1GarnishmentsGarnishmentIdRequest' from JSON`,
  );
}
