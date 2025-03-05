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
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompanyBenefitsCompanyBenefitIdRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  /**
   * Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.
   */
  active?: boolean | undefined;
  /**
   * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
   */
  description?: string | undefined;
};

export type PutV1CompanyBenefitsCompanyBenefitIdRequest = {
  /**
   * The UUID of the company benefit
   */
  companyBenefitId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody;
};

export type PutV1CompanyBenefitsCompanyBenefitIdResponse = {
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
  companyBenefit?: CompanyBenefit | undefined;
};

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    version: z.string(),
    active: z.boolean().optional(),
    description: z.string().optional(),
  });

/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound = {
  version: string;
  active?: boolean | undefined;
  description?: string | undefined;
};

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody
  > = z.object({
    version: z.string(),
    active: z.boolean().optional(),
    description: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompanyBenefitsCompanyBenefitIdRequestBody$ {
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound;
}

export function putV1CompanyBenefitsCompanyBenefitIdRequestBodyToJSON(
  putV1CompanyBenefitsCompanyBenefitIdRequestBody:
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody,
): string {
  return JSON.stringify(
    PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema.parse(
      putV1CompanyBenefitsCompanyBenefitIdRequestBody,
    ),
  );
}

export function putV1CompanyBenefitsCompanyBenefitIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompanyBenefitsCompanyBenefitIdRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompanyBenefitsCompanyBenefitIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_benefit_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1CompanyBenefitsCompanyBenefitIdRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_benefit_id": "companyBenefitId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
  company_benefit_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound;
};

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompanyBenefitsCompanyBenefitIdRequest
  > = z.object({
    companyBenefitId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema
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
export namespace PutV1CompanyBenefitsCompanyBenefitIdRequest$ {
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound` instead. */
  export type Outbound = PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound;
}

export function putV1CompanyBenefitsCompanyBenefitIdRequestToJSON(
  putV1CompanyBenefitsCompanyBenefitIdRequest:
    PutV1CompanyBenefitsCompanyBenefitIdRequest,
): string {
  return JSON.stringify(
    PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema.parse(
      putV1CompanyBenefitsCompanyBenefitIdRequest,
    ),
  );
}

export function putV1CompanyBenefitsCompanyBenefitIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompanyBenefitsCompanyBenefitIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyBenefitsCompanyBenefitIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompanyBenefitsCompanyBenefitIdRequest' from JSON`,
  );
}

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "Company-Benefit": CompanyBenefit$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "Company-Benefit": "companyBenefit",
    });
  });

/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Company-Benefit"?: CompanyBenefit$Outbound | undefined;
};

/** @internal */
export const PutV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema:
  z.ZodType<
    PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound,
    z.ZodTypeDef,
    PutV1CompanyBenefitsCompanyBenefitIdResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    companyBenefit: CompanyBenefit$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      companyBenefit: "Company-Benefit",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompanyBenefitsCompanyBenefitIdResponse$ {
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema;
  /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound` instead. */
  export type Outbound = PutV1CompanyBenefitsCompanyBenefitIdResponse$Outbound;
}

export function putV1CompanyBenefitsCompanyBenefitIdResponseToJSON(
  putV1CompanyBenefitsCompanyBenefitIdResponse:
    PutV1CompanyBenefitsCompanyBenefitIdResponse,
): string {
  return JSON.stringify(
    PutV1CompanyBenefitsCompanyBenefitIdResponse$outboundSchema.parse(
      putV1CompanyBenefitsCompanyBenefitIdResponse,
    ),
  );
}

export function putV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompanyBenefitsCompanyBenefitIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompanyBenefitsCompanyBenefitIdResponse' from JSON`,
  );
}
