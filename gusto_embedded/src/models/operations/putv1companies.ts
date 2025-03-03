/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompaniesRequestBody = {
  /**
   * Whether the company only supports contractors. Must be updated in order for the company to start supporting W-2 employees. Can only be updated from true to false. Note that updating this value will require additional onboarding steps to be completed in order for the company to support W-2 employees.
   */
  contractorOnly: boolean;
};

export type PutV1CompaniesRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1CompaniesRequestBody;
};

/** @internal */
export const PutV1CompaniesRequestBody$inboundSchema: z.ZodType<
  PutV1CompaniesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  contractor_only: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "contractor_only": "contractorOnly",
  });
});

/** @internal */
export type PutV1CompaniesRequestBody$Outbound = {
  contractor_only: boolean;
};

/** @internal */
export const PutV1CompaniesRequestBody$outboundSchema: z.ZodType<
  PutV1CompaniesRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1CompaniesRequestBody
> = z.object({
  contractorOnly: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    contractorOnly: "contractor_only",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesRequestBody$ {
  /** @deprecated use `PutV1CompaniesRequestBody$inboundSchema` instead. */
  export const inboundSchema = PutV1CompaniesRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompaniesRequestBody$outboundSchema` instead. */
  export const outboundSchema = PutV1CompaniesRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompaniesRequestBody$Outbound` instead. */
  export type Outbound = PutV1CompaniesRequestBody$Outbound;
}

export function putV1CompaniesRequestBodyToJSON(
  putV1CompaniesRequestBody: PutV1CompaniesRequestBody,
): string {
  return JSON.stringify(
    PutV1CompaniesRequestBody$outboundSchema.parse(putV1CompaniesRequestBody),
  );
}

export function putV1CompaniesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1CompaniesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1CompaniesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesRequest$inboundSchema: z.ZodType<
  PutV1CompaniesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() => PutV1CompaniesRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1CompaniesRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1CompaniesRequestBody$Outbound;
};

/** @internal */
export const PutV1CompaniesRequest$outboundSchema: z.ZodType<
  PutV1CompaniesRequest$Outbound,
  z.ZodTypeDef,
  PutV1CompaniesRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() => PutV1CompaniesRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesRequest$ {
  /** @deprecated use `PutV1CompaniesRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1CompaniesRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesRequest$outboundSchema` instead. */
  export const outboundSchema = PutV1CompaniesRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesRequest$Outbound` instead. */
  export type Outbound = PutV1CompaniesRequest$Outbound;
}

export function putV1CompaniesRequestToJSON(
  putV1CompaniesRequest: PutV1CompaniesRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesRequest$outboundSchema.parse(putV1CompaniesRequest),
  );
}

export function putV1CompaniesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1CompaniesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1CompaniesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesRequest' from JSON`,
  );
}
