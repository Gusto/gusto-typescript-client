/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAchTransactionsRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * The UUID of the contractor payment
   */
  contractorPaymentUuid?: string | undefined;
  /**
   * The UUID of the payroll
   */
  payrollUuid?: string | undefined;
  /**
   * Used to filter the ACH transactions to only include those with a specific transaction type, such as "Credit employee pay".
   */
  transactionType?: string | undefined;
  /**
   * Used to filter the ACH transactions to only include those with a specific payment direction, either "credit" or "debit".
   */
  paymentDirection?: string | undefined;
  /**
   * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
   */
  page?: number | undefined;
  /**
   * Number of objects per page. For majority of endpoints will default to 25
   */
  per?: number | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type GetAchTransactionsResponse = {
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
  achTransactionList?: Array<components.AchTransaction> | undefined;
};

/** @internal */
export const GetAchTransactionsRequest$inboundSchema: z.ZodType<
  GetAchTransactionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  contractor_payment_uuid: z.string().optional(),
  payroll_uuid: z.string().optional(),
  transaction_type: z.string().optional(),
  payment_direction: z.string().optional(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "contractor_payment_uuid": "contractorPaymentUuid",
    "payroll_uuid": "payrollUuid",
    "transaction_type": "transactionType",
    "payment_direction": "paymentDirection",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetAchTransactionsRequest$Outbound = {
  company_uuid: string;
  contractor_payment_uuid?: string | undefined;
  payroll_uuid?: string | undefined;
  transaction_type?: string | undefined;
  payment_direction?: string | undefined;
  page?: number | undefined;
  per?: number | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetAchTransactionsRequest$outboundSchema: z.ZodType<
  GetAchTransactionsRequest$Outbound,
  z.ZodTypeDef,
  GetAchTransactionsRequest
> = z.object({
  companyUuid: z.string(),
  contractorPaymentUuid: z.string().optional(),
  payrollUuid: z.string().optional(),
  transactionType: z.string().optional(),
  paymentDirection: z.string().optional(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    contractorPaymentUuid: "contractor_payment_uuid",
    payrollUuid: "payroll_uuid",
    transactionType: "transaction_type",
    paymentDirection: "payment_direction",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAchTransactionsRequest$ {
  /** @deprecated use `GetAchTransactionsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAchTransactionsRequest$inboundSchema;
  /** @deprecated use `GetAchTransactionsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAchTransactionsRequest$outboundSchema;
  /** @deprecated use `GetAchTransactionsRequest$Outbound` instead. */
  export type Outbound = GetAchTransactionsRequest$Outbound;
}

export function getAchTransactionsRequestToJSON(
  getAchTransactionsRequest: GetAchTransactionsRequest,
): string {
  return JSON.stringify(
    GetAchTransactionsRequest$outboundSchema.parse(getAchTransactionsRequest),
  );
}

export function getAchTransactionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAchTransactionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAchTransactionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAchTransactionsRequest' from JSON`,
  );
}

/** @internal */
export const GetAchTransactionsResponse$inboundSchema: z.ZodType<
  GetAchTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Ach-Transaction-List": z.array(components.AchTransaction$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Ach-Transaction-List": "achTransactionList",
  });
});

/** @internal */
export type GetAchTransactionsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Ach-Transaction-List"?:
    | Array<components.AchTransaction$Outbound>
    | undefined;
};

/** @internal */
export const GetAchTransactionsResponse$outboundSchema: z.ZodType<
  GetAchTransactionsResponse$Outbound,
  z.ZodTypeDef,
  GetAchTransactionsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  achTransactionList: z.array(components.AchTransaction$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    achTransactionList: "Ach-Transaction-List",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAchTransactionsResponse$ {
  /** @deprecated use `GetAchTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAchTransactionsResponse$inboundSchema;
  /** @deprecated use `GetAchTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAchTransactionsResponse$outboundSchema;
  /** @deprecated use `GetAchTransactionsResponse$Outbound` instead. */
  export type Outbound = GetAchTransactionsResponse$Outbound;
}

export function getAchTransactionsResponseToJSON(
  getAchTransactionsResponse: GetAchTransactionsResponse,
): string {
  return JSON.stringify(
    GetAchTransactionsResponse$outboundSchema.parse(getAchTransactionsResponse),
  );
}

export function getAchTransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAchTransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAchTransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAchTransactionsResponse' from JSON`,
  );
}
