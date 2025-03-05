/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeBankAccount,
  EmployeeBankAccount$inboundSchema,
  EmployeeBankAccount$Outbound,
  EmployeeBankAccount$outboundSchema,
} from "../components/employeebankaccount.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PutV1EmployeesEmployeeIdBankAccountsAccountType = {
  Checking: "Checking",
  Savings: "Savings",
} as const;
export type PutV1EmployeesEmployeeIdBankAccountsAccountType = ClosedEnum<
  typeof PutV1EmployeesEmployeeIdBankAccountsAccountType
>;

export type PutV1EmployeesEmployeeIdBankAccountsRequestBody = {
  name: string;
  routingNumber: string;
  accountNumber: string;
  accountType: PutV1EmployeesEmployeeIdBankAccountsAccountType;
};

export type PutV1EmployeesEmployeeIdBankAccountsRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * The UUID of the bank account
   */
  bankAccountUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody;
};

export type PutV1EmployeesEmployeeIdBankAccountsResponse = {
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
  employeeBankAccount?: EmployeeBankAccount | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema:
  z.ZodNativeEnum<typeof PutV1EmployeesEmployeeIdBankAccountsAccountType> = z
    .nativeEnum(PutV1EmployeesEmployeeIdBankAccountsAccountType);

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema:
  z.ZodNativeEnum<typeof PutV1EmployeesEmployeeIdBankAccountsAccountType> =
    PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdBankAccountsAccountType$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema;
}

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdBankAccountsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    routing_number: z.string(),
    account_number: z.string(),
    account_type: PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "routing_number": "routingNumber",
      "account_number": "accountNumber",
      "account_type": "accountType",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound = {
  name: string;
  routing_number: string;
  account_number: string;
  account_type: string;
};

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdBankAccountsRequestBody
  > = z.object({
    name: z.string(),
    routingNumber: z.string(),
    accountNumber: z.string(),
    accountType: PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema,
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
export namespace PutV1EmployeesEmployeeIdBankAccountsRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdBankAccountsRequestBodyToJSON(
  putV1EmployeesEmployeeIdBankAccountsRequestBody:
    PutV1EmployeesEmployeeIdBankAccountsRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdBankAccountsRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdBankAccountsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdBankAccountsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdBankAccountsRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdBankAccountsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    bank_account_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "bank_account_uuid": "bankAccountUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
  employee_id: string;
  bank_account_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdBankAccountsRequest
  > = z.object({
    employeeId: z.string(),
    bankAccountUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      bankAccountUuid: "bank_account_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdBankAccountsRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound;
}

export function putV1EmployeesEmployeeIdBankAccountsRequestToJSON(
  putV1EmployeesEmployeeIdBankAccountsRequest:
    PutV1EmployeesEmployeeIdBankAccountsRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdBankAccountsRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdBankAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdBankAccountsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdBankAccountsRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdBankAccountsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Employee-Bank-Account": EmployeeBankAccount$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Employee-Bank-Account": "employeeBankAccount",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Employee-Bank-Account"?: EmployeeBankAccount$Outbound | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdBankAccountsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    employeeBankAccount: EmployeeBankAccount$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      employeeBankAccount: "Employee-Bank-Account",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdBankAccountsResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound;
}

export function putV1EmployeesEmployeeIdBankAccountsResponseToJSON(
  putV1EmployeesEmployeeIdBankAccountsResponse:
    PutV1EmployeesEmployeeIdBankAccountsResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdBankAccountsResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdBankAccountsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdBankAccountsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdBankAccountsResponse' from JSON`,
  );
}
