/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest = {
  /**
   * The UUID of the contractor payment group
   */
  contractorPaymentGroupUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse = {
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
};

/** @internal */
export const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema:
  z.ZodType<
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    contractor_payment_group_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "contractor_payment_group_uuid": "contractorPaymentGroupUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound =
  {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema:
  z.ZodType<
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest
  > = z.object({
    contractorPaymentGroupUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      contractorPaymentGroupUuid: "contractor_payment_group_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$ {
  /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema;
  /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema;
  /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound;
}

export function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequestToJSON(
  deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest:
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
): string {
  return JSON.stringify(
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema
      .parse(deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest),
  );
}

export function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema:
  z.ZodType<
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
  };

/** @internal */
export const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema:
  z.ZodType<
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound,
    z.ZodTypeDef,
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$ {
  /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema;
  /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema;
  /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound` instead. */
  export type Outbound =
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound;
}

export function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponseToJSON(
  deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse:
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
): string {
  return JSON.stringify(
    DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema
      .parse(deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse),
  );
}

export function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse' from JSON`,
  );
}
