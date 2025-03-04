/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ContractorsContractorUuidAddressRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type GetV1ContractorsContractorUuidAddressResponse = {
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
  contractorAddress?: components.ContractorAddress | undefined;
};

/** @internal */
export const GetV1ContractorsContractorUuidAddressRequest$inboundSchema:
  z.ZodType<
    GetV1ContractorsContractorUuidAddressRequest,
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
export type GetV1ContractorsContractorUuidAddressRequest$Outbound = {
  contractor_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1ContractorsContractorUuidAddressRequest$outboundSchema:
  z.ZodType<
    GetV1ContractorsContractorUuidAddressRequest$Outbound,
    z.ZodTypeDef,
    GetV1ContractorsContractorUuidAddressRequest
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
export namespace GetV1ContractorsContractorUuidAddressRequest$ {
  /** @deprecated use `GetV1ContractorsContractorUuidAddressRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorsContractorUuidAddressRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidAddressRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorsContractorUuidAddressRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidAddressRequest$Outbound` instead. */
  export type Outbound = GetV1ContractorsContractorUuidAddressRequest$Outbound;
}

export function getV1ContractorsContractorUuidAddressRequestToJSON(
  getV1ContractorsContractorUuidAddressRequest:
    GetV1ContractorsContractorUuidAddressRequest,
): string {
  return JSON.stringify(
    GetV1ContractorsContractorUuidAddressRequest$outboundSchema.parse(
      getV1ContractorsContractorUuidAddressRequest,
    ),
  );
}

export function getV1ContractorsContractorUuidAddressRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ContractorsContractorUuidAddressRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorsContractorUuidAddressRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1ContractorsContractorUuidAddressRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ContractorsContractorUuidAddressResponse$inboundSchema:
  z.ZodType<
    GetV1ContractorsContractorUuidAddressResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Contractor-Address": components.ContractorAddress$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Contractor-Address": "contractorAddress",
    });
  });

/** @internal */
export type GetV1ContractorsContractorUuidAddressResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Contractor-Address"?: components.ContractorAddress$Outbound | undefined;
};

/** @internal */
export const GetV1ContractorsContractorUuidAddressResponse$outboundSchema:
  z.ZodType<
    GetV1ContractorsContractorUuidAddressResponse$Outbound,
    z.ZodTypeDef,
    GetV1ContractorsContractorUuidAddressResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    contractorAddress: components.ContractorAddress$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      contractorAddress: "Contractor-Address",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorsContractorUuidAddressResponse$ {
  /** @deprecated use `GetV1ContractorsContractorUuidAddressResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorsContractorUuidAddressResponse$inboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidAddressResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorsContractorUuidAddressResponse$outboundSchema;
  /** @deprecated use `GetV1ContractorsContractorUuidAddressResponse$Outbound` instead. */
  export type Outbound = GetV1ContractorsContractorUuidAddressResponse$Outbound;
}

export function getV1ContractorsContractorUuidAddressResponseToJSON(
  getV1ContractorsContractorUuidAddressResponse:
    GetV1ContractorsContractorUuidAddressResponse,
): string {
  return JSON.stringify(
    GetV1ContractorsContractorUuidAddressResponse$outboundSchema.parse(
      getV1ContractorsContractorUuidAddressResponse,
    ),
  );
}

export function getV1ContractorsContractorUuidAddressResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ContractorsContractorUuidAddressResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorsContractorUuidAddressResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1ContractorsContractorUuidAddressResponse' from JSON`,
  );
}
