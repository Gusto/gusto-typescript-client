/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest = {
  /**
   * The UUID of the contractor payment group
   */
  contractorPaymentGroupUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema:
  z.ZodType<
    GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    contractor_payment_group_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
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
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
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
