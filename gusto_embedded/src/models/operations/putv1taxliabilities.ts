/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LiabilitySelections = {
  /**
   * The ID of the tax.
   */
  taxId: number;
  /**
   * The UUID of the last unpaid external payroll uuid. It should be null when the full amount of tax liability has been paid.
   */
  lastUnpaidExternalPayrollUuid: string | null;
  /**
   * A selection of unpaid liability amount.
   */
  unpaidLiabilityAmount: number;
};

export type PutV1TaxLiabilitiesRequestBody = {
  liabilitySelections?: Array<LiabilitySelections> | undefined;
};

export type PutV1TaxLiabilitiesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1TaxLiabilitiesRequestBody;
};

/** @internal */
export const LiabilitySelections$inboundSchema: z.ZodType<
  LiabilitySelections,
  z.ZodTypeDef,
  unknown
> = z.object({
  tax_id: z.number().int(),
  last_unpaid_external_payroll_uuid: z.nullable(z.string()),
  unpaid_liability_amount: z.number(),
}).transform((v) => {
  return remap$(v, {
    "tax_id": "taxId",
    "last_unpaid_external_payroll_uuid": "lastUnpaidExternalPayrollUuid",
    "unpaid_liability_amount": "unpaidLiabilityAmount",
  });
});

/** @internal */
export type LiabilitySelections$Outbound = {
  tax_id: number;
  last_unpaid_external_payroll_uuid: string | null;
  unpaid_liability_amount: number;
};

/** @internal */
export const LiabilitySelections$outboundSchema: z.ZodType<
  LiabilitySelections$Outbound,
  z.ZodTypeDef,
  LiabilitySelections
> = z.object({
  taxId: z.number().int(),
  lastUnpaidExternalPayrollUuid: z.nullable(z.string()),
  unpaidLiabilityAmount: z.number(),
}).transform((v) => {
  return remap$(v, {
    taxId: "tax_id",
    lastUnpaidExternalPayrollUuid: "last_unpaid_external_payroll_uuid",
    unpaidLiabilityAmount: "unpaid_liability_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiabilitySelections$ {
  /** @deprecated use `LiabilitySelections$inboundSchema` instead. */
  export const inboundSchema = LiabilitySelections$inboundSchema;
  /** @deprecated use `LiabilitySelections$outboundSchema` instead. */
  export const outboundSchema = LiabilitySelections$outboundSchema;
  /** @deprecated use `LiabilitySelections$Outbound` instead. */
  export type Outbound = LiabilitySelections$Outbound;
}

export function liabilitySelectionsToJSON(
  liabilitySelections: LiabilitySelections,
): string {
  return JSON.stringify(
    LiabilitySelections$outboundSchema.parse(liabilitySelections),
  );
}

export function liabilitySelectionsFromJSON(
  jsonString: string,
): SafeParseResult<LiabilitySelections, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiabilitySelections$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiabilitySelections' from JSON`,
  );
}

/** @internal */
export const PutV1TaxLiabilitiesRequestBody$inboundSchema: z.ZodType<
  PutV1TaxLiabilitiesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  liability_selections: z.array(z.lazy(() => LiabilitySelections$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "liability_selections": "liabilitySelections",
  });
});

/** @internal */
export type PutV1TaxLiabilitiesRequestBody$Outbound = {
  liability_selections?: Array<LiabilitySelections$Outbound> | undefined;
};

/** @internal */
export const PutV1TaxLiabilitiesRequestBody$outboundSchema: z.ZodType<
  PutV1TaxLiabilitiesRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1TaxLiabilitiesRequestBody
> = z.object({
  liabilitySelections: z.array(z.lazy(() => LiabilitySelections$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    liabilitySelections: "liability_selections",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1TaxLiabilitiesRequestBody$ {
  /** @deprecated use `PutV1TaxLiabilitiesRequestBody$inboundSchema` instead. */
  export const inboundSchema = PutV1TaxLiabilitiesRequestBody$inboundSchema;
  /** @deprecated use `PutV1TaxLiabilitiesRequestBody$outboundSchema` instead. */
  export const outboundSchema = PutV1TaxLiabilitiesRequestBody$outboundSchema;
  /** @deprecated use `PutV1TaxLiabilitiesRequestBody$Outbound` instead. */
  export type Outbound = PutV1TaxLiabilitiesRequestBody$Outbound;
}

export function putV1TaxLiabilitiesRequestBodyToJSON(
  putV1TaxLiabilitiesRequestBody: PutV1TaxLiabilitiesRequestBody,
): string {
  return JSON.stringify(
    PutV1TaxLiabilitiesRequestBody$outboundSchema.parse(
      putV1TaxLiabilitiesRequestBody,
    ),
  );
}

export function putV1TaxLiabilitiesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1TaxLiabilitiesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1TaxLiabilitiesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1TaxLiabilitiesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1TaxLiabilitiesRequest$inboundSchema: z.ZodType<
  PutV1TaxLiabilitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() => PutV1TaxLiabilitiesRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1TaxLiabilitiesRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1TaxLiabilitiesRequestBody$Outbound;
};

/** @internal */
export const PutV1TaxLiabilitiesRequest$outboundSchema: z.ZodType<
  PutV1TaxLiabilitiesRequest$Outbound,
  z.ZodTypeDef,
  PutV1TaxLiabilitiesRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() => PutV1TaxLiabilitiesRequestBody$outboundSchema),
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
export namespace PutV1TaxLiabilitiesRequest$ {
  /** @deprecated use `PutV1TaxLiabilitiesRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1TaxLiabilitiesRequest$inboundSchema;
  /** @deprecated use `PutV1TaxLiabilitiesRequest$outboundSchema` instead. */
  export const outboundSchema = PutV1TaxLiabilitiesRequest$outboundSchema;
  /** @deprecated use `PutV1TaxLiabilitiesRequest$Outbound` instead. */
  export type Outbound = PutV1TaxLiabilitiesRequest$Outbound;
}

export function putV1TaxLiabilitiesRequestToJSON(
  putV1TaxLiabilitiesRequest: PutV1TaxLiabilitiesRequest,
): string {
  return JSON.stringify(
    PutV1TaxLiabilitiesRequest$outboundSchema.parse(putV1TaxLiabilitiesRequest),
  );
}

export function putV1TaxLiabilitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1TaxLiabilitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1TaxLiabilitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1TaxLiabilitiesRequest' from JSON`,
  );
}
