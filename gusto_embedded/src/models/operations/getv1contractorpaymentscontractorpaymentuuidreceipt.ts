/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ContractorPaymentReceipt,
  ContractorPaymentReceipt$inboundSchema,
  ContractorPaymentReceipt$Outbound,
  ContractorPaymentReceipt$outboundSchema,
} from "../components/contractorpaymentreceipt.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest = {
  /**
   * The UUID of the contractor payment
   */
  contractorPaymentUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  contractorPaymentReceipt?: ContractorPaymentReceipt | undefined;
};

/** @internal */
export const GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$inboundSchema:
  z.ZodType<
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    contractor_payment_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "contractor_payment_uuid": "contractorPaymentUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound =
  {
    contractor_payment_uuid: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema:
  z.ZodType<
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound,
    z.ZodTypeDef,
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest
  > = z.object({
    contractorPaymentUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      contractorPaymentUuid: "contractor_payment_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$ {
  /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound` instead. */
  export type Outbound =
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound;
}

export function getV1ContractorPaymentsContractorPaymentUuidReceiptRequestToJSON(
  getV1ContractorPaymentsContractorPaymentUuidReceiptRequest:
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest,
): string {
  return JSON.stringify(
    GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema
      .parse(getV1ContractorPaymentsContractorPaymentUuidReceiptRequest),
  );
}

export function getV1ContractorPaymentsContractorPaymentUuidReceiptRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema:
  z.ZodType<
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Contractor-Payment-Receipt": ContractorPaymentReceipt$inboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Contractor-Payment-Receipt": "contractorPaymentReceipt",
    });
  });

/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    "Contractor-Payment-Receipt"?:
      | ContractorPaymentReceipt$Outbound
      | undefined;
  };

/** @internal */
export const GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$outboundSchema:
  z.ZodType<
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound,
    z.ZodTypeDef,
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    contractorPaymentReceipt: ContractorPaymentReceipt$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      contractorPaymentReceipt: "Contractor-Payment-Receipt",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$ {
  /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema;
  /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$outboundSchema;
  /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound` instead. */
  export type Outbound =
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound;
}

export function getV1ContractorPaymentsContractorPaymentUuidReceiptResponseToJSON(
  getV1ContractorPaymentsContractorPaymentUuidReceiptResponse:
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse,
): string {
  return JSON.stringify(
    GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$outboundSchema
      .parse(getV1ContractorPaymentsContractorPaymentUuidReceiptResponse),
  );
}

export function getV1ContractorPaymentsContractorPaymentUuidReceiptResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse' from JSON`,
  );
}
