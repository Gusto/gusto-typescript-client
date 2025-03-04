/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * The UUID of the signatory
   */
  signatoryUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse = {
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
export const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    signatory_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "signatory_uuid": "signatoryUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound =
  {
    company_uuid: string;
    signatory_uuid: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest
  > = z.object({
    companyUuid: z.string(),
    signatoryUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      signatoryUuid: "signatory_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$ {
  /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound;
}

export function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestToJSON(
  deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest:
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
): string {
  return JSON.stringify(
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema
      .parse(deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest),
  );
}

export function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
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
export type DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
  };

/** @internal */
export const DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound,
    z.ZodTypeDef,
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse
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
export namespace DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$ {
  /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound` instead. */
  export type Outbound =
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound;
}

export function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseToJSON(
  deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse:
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
): string {
  return JSON.stringify(
    DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema
      .parse(deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse),
  );
}

export function deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse' from JSON`,
  );
}
