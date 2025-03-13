/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
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

export type GetV1CompaniesCompanyUuidTaxRequirementsRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type ResponseBody = {
  /**
   * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
   */
  state: string;
  /**
   * If all requirements for the state have been satisfied such that the company can complete
   *
   * @remarks
   * onboarding, the company is `setup_complete` in the state. A company must be `setup_complete` in
   * all relevant states to complete the `state_setup` company onboarding step.
   */
  setupComplete: boolean;
};

export type GetV1CompaniesCompanyUuidTaxRequirementsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  responseBodies?: Array<ResponseBody> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyUuidTaxRequirementsRequest$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidTaxRequirementsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyUuidTaxRequirementsRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyUuidTaxRequirementsRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyUuidTaxRequirementsRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound;
}

export function getV1CompaniesCompanyUuidTaxRequirementsRequestToJSON(
  getV1CompaniesCompanyUuidTaxRequirementsRequest:
    GetV1CompaniesCompanyUuidTaxRequirementsRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema.parse(
      getV1CompaniesCompanyUuidTaxRequirementsRequest,
    ),
  );
}

export function getV1CompaniesCompanyUuidTaxRequirementsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyUuidTaxRequirementsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyUuidTaxRequirementsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyUuidTaxRequirementsRequest' from JSON`,
  );
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<
  ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  state: z.string(),
  setup_complete: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "setup_complete": "setupComplete",
  });
});

/** @internal */
export type ResponseBody$Outbound = {
  state: string;
  setup_complete: boolean;
};

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
  ResponseBody$Outbound,
  z.ZodTypeDef,
  ResponseBody
> = z.object({
  state: z.string(),
  setupComplete: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    setupComplete: "setup_complete",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
  /** @deprecated use `ResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResponseBody$inboundSchema;
  /** @deprecated use `ResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResponseBody$outboundSchema;
  /** @deprecated use `ResponseBody$Outbound` instead. */
  export type Outbound = ResponseBody$Outbound;
}

export function responseBodyToJSON(responseBody: ResponseBody): string {
  return JSON.stringify(ResponseBody$outboundSchema.parse(responseBody));
}

export function responseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResponseBody' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidTaxRequirementsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    responseBodies: z.array(z.lazy(() => ResponseBody$inboundSchema))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
    });
  });

/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  responseBodies?: Array<ResponseBody$Outbound> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyUuidTaxRequirementsResponse$outboundSchema:
  z.ZodType<
    GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound,
    z.ZodTypeDef,
    GetV1CompaniesCompanyUuidTaxRequirementsResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    responseBodies: z.array(z.lazy(() => ResponseBody$outboundSchema))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyUuidTaxRequirementsResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyUuidTaxRequirementsResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound` instead. */
  export type Outbound =
    GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound;
}

export function getV1CompaniesCompanyUuidTaxRequirementsResponseToJSON(
  getV1CompaniesCompanyUuidTaxRequirementsResponse:
    GetV1CompaniesCompanyUuidTaxRequirementsResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyUuidTaxRequirementsResponse$outboundSchema.parse(
      getV1CompaniesCompanyUuidTaxRequirementsResponse,
    ),
  );
}

export function getV1CompaniesCompanyUuidTaxRequirementsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyUuidTaxRequirementsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyUuidTaxRequirementsResponse' from JSON`,
  );
}
