/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ContractorDocumentsRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1ContractorDocumentsRequest$inboundSchema: z.ZodType<
  GetV1ContractorDocumentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  contractor_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "contractor_uuid": "contractorUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1ContractorDocumentsRequest$Outbound = {
  contractor_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ContractorDocumentsRequest$outboundSchema: z.ZodType<
  GetV1ContractorDocumentsRequest$Outbound,
  z.ZodTypeDef,
  GetV1ContractorDocumentsRequest
> = z.object({
  contractorUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    contractorUuid: "contractor_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorDocumentsRequest$ {
  /** @deprecated use `GetV1ContractorDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1ContractorDocumentsRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1ContractorDocumentsRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorDocumentsRequest$Outbound` instead. */
  export type Outbound = GetV1ContractorDocumentsRequest$Outbound;
}

export function getV1ContractorDocumentsRequestToJSON(
  getV1ContractorDocumentsRequest: GetV1ContractorDocumentsRequest,
): string {
  return JSON.stringify(
    GetV1ContractorDocumentsRequest$outboundSchema.parse(
      getV1ContractorDocumentsRequest,
    ),
  );
}

export function getV1ContractorDocumentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ContractorDocumentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1ContractorDocumentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorDocumentsRequest' from JSON`,
  );
}
