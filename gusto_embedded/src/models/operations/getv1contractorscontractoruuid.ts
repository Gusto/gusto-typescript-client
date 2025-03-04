/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ContractorsContractorUuidRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type GetV1ContractorsContractorUuidResponse = {
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
  /**
   * Example response
   */
  contractor?: components.Contractor | undefined;
};

/** @internal */
export const GetV1ContractorsContractorUuidRequest$inboundSchema: z.ZodType<
  GetV1ContractorsContractorUuidRequest,
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
export type GetV1ContractorsContractorUuidRequest$Outbound = {
  contractor_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ContractorsContractorUuidRequest$outboundSchema: z.ZodType<
  GetV1ContractorsContractorUuidRequest$Outbound,
  z.ZodTypeDef,
  GetV1ContractorsContractorUuidRequest
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
export namespace GetV1ContractorsContractorUuidRequest$ {
  /** @deprecated use `GetV1ContractorsContractorUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorsContractorUuidRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorsContractorUuidRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidRequest$Outbound` instead. */
  export type Outbound = GetV1ContractorsContractorUuidRequest$Outbound;
}

export function getV1ContractorsContractorUuidRequestToJSON(
  getV1ContractorsContractorUuidRequest: GetV1ContractorsContractorUuidRequest,
): string {
  return JSON.stringify(
    GetV1ContractorsContractorUuidRequest$outboundSchema.parse(
      getV1ContractorsContractorUuidRequest,
    ),
  );
}

export function getV1ContractorsContractorUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ContractorsContractorUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorsContractorUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorsContractorUuidRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ContractorsContractorUuidResponse$inboundSchema: z.ZodType<
  GetV1ContractorsContractorUuidResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Contractor: components.Contractor$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Contractor": "contractor",
  });
});

/** @internal */
export type GetV1ContractorsContractorUuidResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Contractor?: components.Contractor$Outbound | undefined;
};

/** @internal */
export const GetV1ContractorsContractorUuidResponse$outboundSchema: z.ZodType<
  GetV1ContractorsContractorUuidResponse$Outbound,
  z.ZodTypeDef,
  GetV1ContractorsContractorUuidResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  contractor: components.Contractor$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    contractor: "Contractor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorsContractorUuidResponse$ {
  /** @deprecated use `GetV1ContractorsContractorUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorsContractorUuidResponse$inboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorsContractorUuidResponse$outboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidResponse$Outbound` instead. */
  export type Outbound = GetV1ContractorsContractorUuidResponse$Outbound;
}

export function getV1ContractorsContractorUuidResponseToJSON(
  getV1ContractorsContractorUuidResponse:
    GetV1ContractorsContractorUuidResponse,
): string {
  return JSON.stringify(
    GetV1ContractorsContractorUuidResponse$outboundSchema.parse(
      getV1ContractorsContractorUuidResponse,
    ),
  );
}

export function getV1ContractorsContractorUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1ContractorsContractorUuidResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorsContractorUuidResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorsContractorUuidResponse' from JSON`,
  );
}
