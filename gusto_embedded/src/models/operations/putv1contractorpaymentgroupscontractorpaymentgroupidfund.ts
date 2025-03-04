/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest = {
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
export const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$inboundSchema:
  z.ZodType<
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest,
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
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound =
  {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema:
  z.ZodType<
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound,
    z.ZodTypeDef,
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest
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
export namespace PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$ {
  /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$inboundSchema;
  /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema;
  /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound` instead. */
  export type Outbound =
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound;
}

export function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequestToJSON(
  putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest:
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest,
): string {
  return JSON.stringify(
    PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema
      .parse(putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest),
  );
}

export function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest' from JSON`,
  );
}
