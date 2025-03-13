/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeFederalTax,
  EmployeeFederalTax$inboundSchema,
  EmployeeFederalTax$Outbound,
  EmployeeFederalTax$outboundSchema,
} from "../components/employeefederaltax.js";
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

export type PutV1EmployeesEmployeeIdFederalTaxesRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  filingStatus?: string | undefined;
  extraWithholding?: string | null | undefined;
  twoJobs?: boolean | undefined;
  dependentsAmount?: string | undefined;
  otherIncome?: string | undefined;
  deductions?: string | undefined;
  w4DataType?: string | undefined;
};

export type PutV1EmployeesEmployeeIdFederalTaxesRequest = {
  /**
   * The UUID of the employee
   */
  employeeUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1EmployeesEmployeeIdFederalTaxesRequestBody;
};

export type PutV1EmployeesEmployeeIdFederalTaxesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  employeeFederalTax?: EmployeeFederalTax | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    version: z.string(),
    filing_status: z.string().optional(),
    extra_withholding: z.nullable(z.string()).optional(),
    two_jobs: z.boolean().optional(),
    dependents_amount: z.string().optional(),
    other_income: z.string().optional(),
    deductions: z.string().optional(),
    w4_data_type: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "filing_status": "filingStatus",
      "extra_withholding": "extraWithholding",
      "two_jobs": "twoJobs",
      "dependents_amount": "dependentsAmount",
      "other_income": "otherIncome",
      "w4_data_type": "w4DataType",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound = {
  version: string;
  filing_status?: string | undefined;
  extra_withholding?: string | null | undefined;
  two_jobs?: boolean | undefined;
  dependents_amount?: string | undefined;
  other_income?: string | undefined;
  deductions?: string | undefined;
  w4_data_type?: string | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody
  > = z.object({
    version: z.string(),
    filingStatus: z.string().optional(),
    extraWithholding: z.nullable(z.string()).optional(),
    twoJobs: z.boolean().optional(),
    dependentsAmount: z.string().optional(),
    otherIncome: z.string().optional(),
    deductions: z.string().optional(),
    w4DataType: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      filingStatus: "filing_status",
      extraWithholding: "extra_withholding",
      twoJobs: "two_jobs",
      dependentsAmount: "dependents_amount",
      otherIncome: "other_income",
      w4DataType: "w4_data_type",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdFederalTaxesRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdFederalTaxesRequestBodyToJSON(
  putV1EmployeesEmployeeIdFederalTaxesRequestBody:
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdFederalTaxesRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdFederalTaxesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdFederalTaxesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdFederalTaxesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdFederalTaxesRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_uuid": "employeeUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound = {
  employee_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdFederalTaxesRequest
  > = z.object({
    employeeUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeUuid: "employee_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdFederalTaxesRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound;
}

export function putV1EmployeesEmployeeIdFederalTaxesRequestToJSON(
  putV1EmployeesEmployeeIdFederalTaxesRequest:
    PutV1EmployeesEmployeeIdFederalTaxesRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdFederalTaxesRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdFederalTaxesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdFederalTaxesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdFederalTaxesRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdFederalTaxesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Employee-Federal-Tax": EmployeeFederalTax$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Employee-Federal-Tax": "employeeFederalTax",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Employee-Federal-Tax"?: EmployeeFederalTax$Outbound | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdFederalTaxesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    employeeFederalTax: EmployeeFederalTax$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      employeeFederalTax: "Employee-Federal-Tax",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdFederalTaxesResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound;
}

export function putV1EmployeesEmployeeIdFederalTaxesResponseToJSON(
  putV1EmployeesEmployeeIdFederalTaxesResponse:
    PutV1EmployeesEmployeeIdFederalTaxesResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdFederalTaxesResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdFederalTaxesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdFederalTaxesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdFederalTaxesResponse' from JSON`,
  );
}
