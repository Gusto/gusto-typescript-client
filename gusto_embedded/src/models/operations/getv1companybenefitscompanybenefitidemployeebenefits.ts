/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeBenefit,
  EmployeeBenefit$inboundSchema,
  EmployeeBenefit$Outbound,
  EmployeeBenefit$outboundSchema,
} from "../components/employeebenefit.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
  /**
   * The UUID of the company benefit
   */
  companyBenefitId: string;
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
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
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
  employeeBenefitList?: Array<EmployeeBenefit> | undefined;
};

/** @internal */
export const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema:
  z.ZodType<
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_benefit_id: z.string(),
    page: z.number().int().optional(),
    per: z.number().int().optional(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_benefit_id": "companyBenefitId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound =
  {
    company_benefit_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema:
  z.ZodType<
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest
  > = z.object({
    companyBenefitId: z.string(),
    page: z.number().int().optional(),
    per: z.number().int().optional(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyBenefitId: "company_benefit_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$ {
  /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema;
  /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema;
  /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound` instead. */
  export type Outbound =
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound;
}

export function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestToJSON(
  getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest:
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
): string {
  return JSON.stringify(
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema
      .parse(getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest),
  );
}

export function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema:
  z.ZodType<
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Employee-Benefit-List": z.array(EmployeeBenefit$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Employee-Benefit-List": "employeeBenefitList",
    });
  });

/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit-List"?: Array<EmployeeBenefit$Outbound> | undefined;
  };

/** @internal */
export const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema:
  z.ZodType<
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    employeeBenefitList: z.array(EmployeeBenefit$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      employeeBenefitList: "Employee-Benefit-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$ {
  /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema;
  /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema;
  /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound` instead. */
  export type Outbound =
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound;
}

export function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseToJSON(
  getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse:
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
): string {
  return JSON.stringify(
    GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema
      .parse(getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse),
  );
}

export function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse' from JSON`,
  );
}
