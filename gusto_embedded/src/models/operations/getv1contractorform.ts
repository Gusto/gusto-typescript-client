/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ContractorFormRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * The UUID of the form
   */
  formId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1ContractorFormRequest$inboundSchema: z.ZodType<
  GetV1ContractorFormRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  contractor_uuid: z.string(),
  form_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "contractor_uuid": "contractorUuid",
    "form_id": "formId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1ContractorFormRequest$Outbound = {
  contractor_uuid: string;
  form_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ContractorFormRequest$outboundSchema: z.ZodType<
  GetV1ContractorFormRequest$Outbound,
  z.ZodTypeDef,
  GetV1ContractorFormRequest
> = z.object({
  contractorUuid: z.string(),
  formId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    contractorUuid: "contractor_uuid",
    formId: "form_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorFormRequest$ {
  /** @deprecated use `GetV1ContractorFormRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1ContractorFormRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorFormRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1ContractorFormRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorFormRequest$Outbound` instead. */
  export type Outbound = GetV1ContractorFormRequest$Outbound;
}

export function getV1ContractorFormRequestToJSON(
  getV1ContractorFormRequest: GetV1ContractorFormRequest,
): string {
  return JSON.stringify(
    GetV1ContractorFormRequest$outboundSchema.parse(getV1ContractorFormRequest),
  );
}

export function getV1ContractorFormRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ContractorFormRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1ContractorFormRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorFormRequest' from JSON`,
  );
}
