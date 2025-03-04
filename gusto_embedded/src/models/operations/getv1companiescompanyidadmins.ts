/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompaniesCompanyIdAdminsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
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

export type GetV1CompaniesCompanyIdAdminsResponse = {
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
  adminList?: Array<components.Admin> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdAdminsRequest$inboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdAdminsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
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
export type GetV1CompaniesCompanyIdAdminsRequest$Outbound = {
  company_id: string;
  page?: number | undefined;
  per?: number | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdAdminsRequest$outboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdAdminsRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesCompanyIdAdminsRequest
> = z.object({
  companyId: z.string(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
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
export namespace GetV1CompaniesCompanyIdAdminsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdAdminsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdAdminsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdAdminsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdAdminsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdAdminsRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdAdminsRequest$Outbound;
}

export function getV1CompaniesCompanyIdAdminsRequestToJSON(
  getV1CompaniesCompanyIdAdminsRequest: GetV1CompaniesCompanyIdAdminsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdAdminsRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdAdminsRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdAdminsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompaniesCompanyIdAdminsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdAdminsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesCompanyIdAdminsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdAdminsResponse$inboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdAdminsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Admin-List": z.array(components.Admin$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Admin-List": "adminList",
  });
});

/** @internal */
export type GetV1CompaniesCompanyIdAdminsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Admin-List"?: Array<components.Admin$Outbound> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdAdminsResponse$outboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdAdminsResponse$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesCompanyIdAdminsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  adminList: z.array(components.Admin$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    adminList: "Admin-List",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdAdminsResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdAdminsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdAdminsResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdAdminsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdAdminsResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdAdminsResponse$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdAdminsResponse$Outbound;
}

export function getV1CompaniesCompanyIdAdminsResponseToJSON(
  getV1CompaniesCompanyIdAdminsResponse: GetV1CompaniesCompanyIdAdminsResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdAdminsResponse$outboundSchema.parse(
      getV1CompaniesCompanyIdAdminsResponse,
    ),
  );
}

export function getV1CompaniesCompanyIdAdminsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompaniesCompanyIdAdminsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdAdminsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompaniesCompanyIdAdminsResponse' from JSON`,
  );
}
