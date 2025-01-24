/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody = {
  /**
   * The signature
   */
  signatureText: string;
  /**
   * The signer's job title
   */
  signerTitle: string;
  /**
   * The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported.
   */
  signedByIpAddress: string;
  /**
   * Whether you agree to sign electronically
   */
  agree: boolean;
  /**
   * Any additional notes
   */
  additionalInfo?: string | undefined;
  /**
   * Whether an alternative procedure authorized by DHS to examine documents was used
   */
  altProcedure?: boolean | undefined;
};

export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody?:
    | PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody
    | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    signature_text: z.string(),
    signer_title: z.string(),
    signed_by_ip_address: z.string(),
    agree: z.boolean(),
    additional_info: z.string().optional(),
    alt_procedure: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "signature_text": "signatureText",
      "signer_title": "signerTitle",
      "signed_by_ip_address": "signedByIpAddress",
      "additional_info": "additionalInfo",
      "alt_procedure": "altProcedure",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound =
  {
    signature_text: string;
    signer_title: string;
    signed_by_ip_address: string;
    agree: boolean;
    additional_info?: string | undefined;
    alt_procedure?: boolean | undefined;
  };

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody
  > = z.object({
    signatureText: z.string(),
    signerTitle: z.string(),
    signedByIpAddress: z.string(),
    agree: z.boolean(),
    additionalInfo: z.string().optional(),
    altProcedure: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      signatureText: "signature_text",
      signerTitle: "signer_title",
      signedByIpAddress: "signed_by_ip_address",
      additionalInfo: "additional_info",
      altProcedure: "alt_procedure",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBodyToJSON(
  putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody:
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema
      .parse(putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody),
  );
}

export function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound =
  {
    employee_id: string;
    "X-Gusto-API-Version"?: string | undefined;
    RequestBody?:
      | PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound
      | undefined;
  };

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound;
}

export function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestToJSON(
  putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest:
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$outboundSchema
      .parse(putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest),
  );
}

export function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest' from JSON`,
  );
}
