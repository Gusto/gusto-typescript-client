/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PostV1ContractorsContractorUuidBankAccountsAccountType = {
  Checking: "Checking",
  Savings: "Savings",
} as const;
export type PostV1ContractorsContractorUuidBankAccountsAccountType = ClosedEnum<
  typeof PostV1ContractorsContractorUuidBankAccountsAccountType
>;

export type PostV1ContractorsContractorUuidBankAccountsRequestBody = {
  name: string;
  routingNumber: string;
  accountNumber: string;
  accountType: PostV1ContractorsContractorUuidBankAccountsAccountType;
};

export type PostV1ContractorsContractorUuidBankAccountsRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody;
};

/** @internal */
export const PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema:
  z.ZodNativeEnum<
    typeof PostV1ContractorsContractorUuidBankAccountsAccountType
  > = z.nativeEnum(PostV1ContractorsContractorUuidBankAccountsAccountType);

/** @internal */
export const PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema:
  z.ZodNativeEnum<
    typeof PostV1ContractorsContractorUuidBankAccountsAccountType
  > = PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ContractorsContractorUuidBankAccountsAccountType$ {
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema;
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema;
}

/** @internal */
export const PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema:
  z.ZodType<
    PostV1ContractorsContractorUuidBankAccountsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    routing_number: z.string(),
    account_number: z.string(),
    account_type:
      PostV1ContractorsContractorUuidBankAccountsAccountType$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "routing_number": "routingNumber",
      "account_number": "accountNumber",
      "account_type": "accountType",
    });
  });

/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound = {
  name: string;
  routing_number: string;
  account_number: string;
  account_type: string;
};

/** @internal */
export const PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema:
  z.ZodType<
    PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1ContractorsContractorUuidBankAccountsRequestBody
  > = z.object({
    name: z.string(),
    routingNumber: z.string(),
    accountNumber: z.string(),
    accountType:
      PostV1ContractorsContractorUuidBankAccountsAccountType$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      routingNumber: "routing_number",
      accountNumber: "account_number",
      accountType: "account_type",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ContractorsContractorUuidBankAccountsRequestBody$ {
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema;
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema;
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound;
}

export function postV1ContractorsContractorUuidBankAccountsRequestBodyToJSON(
  postV1ContractorsContractorUuidBankAccountsRequestBody:
    PostV1ContractorsContractorUuidBankAccountsRequestBody,
): string {
  return JSON.stringify(
    PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema.parse(
      postV1ContractorsContractorUuidBankAccountsRequestBody,
    ),
  );
}

export function postV1ContractorsContractorUuidBankAccountsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1ContractorsContractorUuidBankAccountsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1ContractorsContractorUuidBankAccountsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1ContractorsContractorUuidBankAccountsRequest$inboundSchema:
  z.ZodType<
    PostV1ContractorsContractorUuidBankAccountsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    contractor_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PostV1ContractorsContractorUuidBankAccountsRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "contractor_uuid": "contractorUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1ContractorsContractorUuidBankAccountsRequest$Outbound = {
  contractor_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PostV1ContractorsContractorUuidBankAccountsRequestBody$Outbound;
};

/** @internal */
export const PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema:
  z.ZodType<
    PostV1ContractorsContractorUuidBankAccountsRequest$Outbound,
    z.ZodTypeDef,
    PostV1ContractorsContractorUuidBankAccountsRequest
  > = z.object({
    contractorUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PostV1ContractorsContractorUuidBankAccountsRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      contractorUuid: "contractor_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ContractorsContractorUuidBankAccountsRequest$ {
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1ContractorsContractorUuidBankAccountsRequest$inboundSchema;
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema;
  /** @deprecated use `PostV1ContractorsContractorUuidBankAccountsRequest$Outbound` instead. */
  export type Outbound =
    PostV1ContractorsContractorUuidBankAccountsRequest$Outbound;
}

export function postV1ContractorsContractorUuidBankAccountsRequestToJSON(
  postV1ContractorsContractorUuidBankAccountsRequest:
    PostV1ContractorsContractorUuidBankAccountsRequest,
): string {
  return JSON.stringify(
    PostV1ContractorsContractorUuidBankAccountsRequest$outboundSchema.parse(
      postV1ContractorsContractorUuidBankAccountsRequest,
    ),
  );
}

export function postV1ContractorsContractorUuidBankAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1ContractorsContractorUuidBankAccountsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1ContractorsContractorUuidBankAccountsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1ContractorsContractorUuidBankAccountsRequest' from JSON`,
  );
}
