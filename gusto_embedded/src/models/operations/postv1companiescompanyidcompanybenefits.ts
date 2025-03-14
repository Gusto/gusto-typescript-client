/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CompanyBenefit,
  CompanyBenefit$inboundSchema,
  CompanyBenefit$Outbound,
  CompanyBenefit$outboundSchema,
} from "../components/companybenefit.js";
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

export type PostV1CompaniesCompanyIdCompanyBenefitsRequestBody = {
  /**
   * The ID of the benefit to which the company benefit belongs.
   */
  benefitType?: number | undefined;
  /**
   * Whether this benefit is active for employee participation.
   */
  active?: boolean | undefined;
  /**
   * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
   */
  description: string;
  /**
   * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.
   */
  responsibleForEmployerTaxes?: boolean | undefined;
  /**
   * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.
   */
  responsibleForEmployeeW2?: boolean | undefined;
};

export type PostV1CompaniesCompanyIdCompanyBenefitsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody;
};

export type PostV1CompaniesCompanyIdCompanyBenefitsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  companyBenefit?: CompanyBenefit | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    benefit_type: z.number().int().optional(),
    active: z.boolean().default(true),
    description: z.string(),
    responsible_for_employer_taxes: z.boolean().optional(),
    responsible_for_employee_w2: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "benefit_type": "benefitType",
      "responsible_for_employer_taxes": "responsibleForEmployerTaxes",
      "responsible_for_employee_w2": "responsibleForEmployeeW2",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound = {
  benefit_type?: number | undefined;
  active: boolean;
  description: string;
  responsible_for_employer_taxes?: boolean | undefined;
  responsible_for_employee_w2?: boolean | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody
  > = z.object({
    benefitType: z.number().int().optional(),
    active: z.boolean().default(true),
    description: z.string(),
    responsibleForEmployerTaxes: z.boolean().optional(),
    responsibleForEmployeeW2: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      benefitType: "benefit_type",
      responsibleForEmployerTaxes: "responsible_for_employer_taxes",
      responsibleForEmployeeW2: "responsible_for_employee_w2",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$ {
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound;
}

export function postV1CompaniesCompanyIdCompanyBenefitsRequestBodyToJSON(
  postV1CompaniesCompanyIdCompanyBenefitsRequestBody:
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema.parse(
      postV1CompaniesCompanyIdCompanyBenefitsRequestBody,
    ),
  );
}

export function postV1CompaniesCompanyIdCompanyBenefitsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdCompanyBenefitsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdCompanyBenefitsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdCompanyBenefitsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound;
};

/** @internal */
export const PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdCompanyBenefitsRequest
  > = z.object({
    companyId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdCompanyBenefitsRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound;
}

export function postV1CompaniesCompanyIdCompanyBenefitsRequestToJSON(
  postV1CompaniesCompanyIdCompanyBenefitsRequest:
    PostV1CompaniesCompanyIdCompanyBenefitsRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema.parse(
      postV1CompaniesCompanyIdCompanyBenefitsRequest,
    ),
  );
}

export function postV1CompaniesCompanyIdCompanyBenefitsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdCompanyBenefitsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdCompanyBenefitsRequest' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdCompanyBenefitsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Company-Benefit": CompanyBenefit$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Company-Benefit": "companyBenefit",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Company-Benefit"?: CompanyBenefit$Outbound | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdCompanyBenefitsResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    companyBenefit: CompanyBenefit$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      companyBenefit: "Company-Benefit",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdCompanyBenefitsResponse$ {
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound;
}

export function postV1CompaniesCompanyIdCompanyBenefitsResponseToJSON(
  postV1CompaniesCompanyIdCompanyBenefitsResponse:
    PostV1CompaniesCompanyIdCompanyBenefitsResponse,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema.parse(
      postV1CompaniesCompanyIdCompanyBenefitsResponse,
    ),
  );
}

export function postV1CompaniesCompanyIdCompanyBenefitsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdCompanyBenefitsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdCompanyBenefitsResponse' from JSON`,
  );
}
