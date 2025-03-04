/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody = {
  /**
   * The list of employee benefits to create or update
   */
  employeeBenefits: Array<components.EmployeeBenefitForCompanyBenefit>;
};

export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
  /**
   * The UUID of the company benefit
   */
  companyBenefitId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody;
};

export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
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
  employeeBenefitList?: Array<components.EmployeeBenefit> | undefined;
};

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_benefits: z.array(
      components.EmployeeBenefitForCompanyBenefit$inboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_benefits": "employeeBenefits",
    });
  });

/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound =
  {
    employee_benefits: Array<
      components.EmployeeBenefitForCompanyBenefit$Outbound
    >;
  };

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody
  > = z.object({
    employeeBenefits: z.array(
      components.EmployeeBenefitForCompanyBenefit$outboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeBenefits: "employee_benefits",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$ {
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound;
}

export function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBodyToJSON(
  putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody:
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody,
): string {
  return JSON.stringify(
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema
      .parse(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody),
  );
}

export function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_benefit_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
    RequestBody: z.lazy(() =>
      PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_benefit_id": "companyBenefitId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound =
  {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody:
      PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound;
  };

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest
  > = z.object({
    companyBenefitId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
    requestBody: z.lazy(() =>
      PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyBenefitId: "company_benefit_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$ {
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound;
}

export function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestToJSON(
  putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest:
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
): string {
  return JSON.stringify(
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema
      .parse(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest),
  );
}

export function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest' from JSON`,
  );
}

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Employee-Benefit-List": z.array(components.EmployeeBenefit$inboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Employee-Benefit-List": "employeeBenefitList",
    });
  });

/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit-List"?:
      | Array<components.EmployeeBenefit$Outbound>
      | undefined;
  };

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound,
    z.ZodTypeDef,
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    employeeBenefitList: z.array(components.EmployeeBenefit$outboundSchema)
      .optional(),
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
export namespace PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$ {
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound` instead. */
  export type Outbound =
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound;
}

export function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseToJSON(
  putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse:
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
): string {
  return JSON.stringify(
    PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema
      .parse(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse),
  );
}

export function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse' from JSON`,
  );
}
