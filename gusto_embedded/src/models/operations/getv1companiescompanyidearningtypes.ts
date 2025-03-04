/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdEarningTypesRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

export type GetV1CompaniesCompanyIdEarningTypesResponse = {
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
  earningTypeList?: components.EarningTypeList | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdEarningTypesRequest$inboundSchema:
  z.ZodType<GetV1CompaniesCompanyIdEarningTypesRequest, z.ZodTypeDef, unknown> =
    z.object({
      company_id: z.string(),
      "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
        "2024-04-01",
      ),
    }).transform((v) => {
      return remap$(v, {
        "company_id": "companyId",
        "X-Gusto-API-Version": "xGustoAPIVersion",
      });
    });

/** @internal */
export type GetV1CompaniesCompanyIdEarningTypesRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdEarningTypesRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdEarningTypesRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdEarningTypesRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdEarningTypesRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdEarningTypesRequest$Outbound;
}

export function getV1CompaniesCompanyIdEarningTypesRequestToJSON(
  getV1CompaniesCompanyIdEarningTypesRequest:
    GetV1CompaniesCompanyIdEarningTypesRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdEarningTypesRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdEarningTypesRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdEarningTypesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdEarningTypesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdEarningTypesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdEarningTypesRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdEarningTypesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Earning-Type-List": components.EarningTypeList$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Earning-Type-List": "earningTypeList",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyIdEarningTypesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Earning-Type-List"?: components.EarningTypeList$Outbound | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdEarningTypesResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyIdEarningTypesResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyIdEarningTypesResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    earningTypeList: components.EarningTypeList$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      earningTypeList: "Earning-Type-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdEarningTypesResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdEarningTypesResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEarningTypesResponse$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdEarningTypesResponse$Outbound;
}

export function getV1CompaniesCompanyIdEarningTypesResponseToJSON(
  getV1CompaniesCompanyIdEarningTypesResponse:
    GetV1CompaniesCompanyIdEarningTypesResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdEarningTypesResponse$outboundSchema.parse(
      getV1CompaniesCompanyIdEarningTypesResponse,
    ),
  );
}

export function getV1CompaniesCompanyIdEarningTypesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdEarningTypesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdEarningTypesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdEarningTypesResponse' from JSON`,
  );
}
