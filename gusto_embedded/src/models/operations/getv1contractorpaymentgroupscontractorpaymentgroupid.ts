/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ContractorPaymentGroup,
  ContractorPaymentGroup$inboundSchema,
  ContractorPaymentGroup$Outbound,
  ContractorPaymentGroup$outboundSchema,
} from "../components/contractorpaymentgroup.js";
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

export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest = {
  /**
   * The UUID of the contractor payment group
   */
  contractorPaymentGroupUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Full contractor payment group object
   */
  contractorPaymentGroup?: ContractorPaymentGroup | undefined;
};

/** @internal */
export const GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema:
  z.ZodType<
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
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
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound =
  {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema:
  z.ZodType<
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound,
    z.ZodTypeDef,
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest
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
export namespace GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$ {
  /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema;
  /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema;
  /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound` instead. */
  export type Outbound =
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound;
}

export function getV1ContractorPaymentGroupsContractorPaymentGroupIdRequestToJSON(
  getV1ContractorPaymentGroupsContractorPaymentGroupIdRequest:
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
): string {
  return JSON.stringify(
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema
      .parse(getV1ContractorPaymentGroupsContractorPaymentGroupIdRequest),
  );
}

export function getV1ContractorPaymentGroupsContractorPaymentGroupIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest' from JSON`,
  );
}

/** @internal */
export const GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema:
  z.ZodType<
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Contractor-Payment-Group": ContractorPaymentGroup$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Contractor-Payment-Group": "contractorPaymentGroup",
    });
  });

/** @internal */
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    "Contractor-Payment-Group"?: ContractorPaymentGroup$Outbound | undefined;
  };

/** @internal */
export const GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema:
  z.ZodType<
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound,
    z.ZodTypeDef,
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    contractorPaymentGroup: ContractorPaymentGroup$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      contractorPaymentGroup: "Contractor-Payment-Group",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$ {
  /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema;
  /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema;
  /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound` instead. */
  export type Outbound =
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound;
}

export function getV1ContractorPaymentGroupsContractorPaymentGroupIdResponseToJSON(
  getV1ContractorPaymentGroupsContractorPaymentGroupIdResponse:
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
): string {
  return JSON.stringify(
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema
      .parse(getV1ContractorPaymentGroupsContractorPaymentGroupIdResponse),
  );
}

export function getV1ContractorPaymentGroupsContractorPaymentGroupIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse' from JSON`,
  );
}
