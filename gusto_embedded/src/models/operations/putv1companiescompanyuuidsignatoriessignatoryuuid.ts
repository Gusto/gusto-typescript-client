/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress = {
  street1?: string | undefined;
  street2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
};

export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody = {
  /**
   * The current version of the object. See the versioning guide for information on how to use this field.
   */
  version?: string | undefined;
  firstName?: string | undefined;
  middleInitial?: string | undefined;
  lastName?: string | undefined;
  title?: string | undefined;
  phone?: string | undefined;
  birthday?: string | undefined;
  ssn?: string | undefined;
  homeAddress?:
    | PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress
    | undefined;
};

export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
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
  requestBody: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody;
};

/** @internal */
export const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress,
    z.ZodTypeDef,
    unknown
  > = z.object({
    street_1: z.string().optional(),
    street_2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "street_1": "street1",
      "street_2": "street2",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound =
  {
    street_1?: string | undefined;
    street_2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
  };

/** @internal */
export const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress
  > = z.object({
    street1: z.string().optional(),
    street2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      street1: "street_1",
      street2: "street_2",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$ {
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound;
}

export function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddressToJSON(
  putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress:
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema
      .parse(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress),
  );
}

export function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddressFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    version: z.string().optional(),
    first_name: z.string().optional(),
    middle_initial: z.string().optional(),
    last_name: z.string().optional(),
    title: z.string().optional(),
    phone: z.string().optional(),
    birthday: z.string().optional(),
    ssn: z.string().optional(),
    home_address: z.lazy(() =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_name": "firstName",
      "middle_initial": "middleInitial",
      "last_name": "lastName",
      "home_address": "homeAddress",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound =
  {
    version?: string | undefined;
    first_name?: string | undefined;
    middle_initial?: string | undefined;
    last_name?: string | undefined;
    title?: string | undefined;
    phone?: string | undefined;
    birthday?: string | undefined;
    ssn?: string | undefined;
    home_address?:
      | PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound
      | undefined;
  };

/** @internal */
export const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody
  > = z.object({
    version: z.string().optional(),
    firstName: z.string().optional(),
    middleInitial: z.string().optional(),
    lastName: z.string().optional(),
    title: z.string().optional(),
    phone: z.string().optional(),
    birthday: z.string().optional(),
    ssn: z.string().optional(),
    homeAddress: z.lazy(() =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      firstName: "first_name",
      middleInitial: "middle_initial",
      lastName: "last_name",
      homeAddress: "home_address",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$ {
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound;
}

export function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyToJSON(
  putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody:
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema
      .parse(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody),
  );
}

export function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    signatory_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "signatory_uuid": "signatoryUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound =
  {
    company_uuid: string;
    signatory_uuid: string;
    "X-Gusto-API-Version"?: string | undefined;
    RequestBody:
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound;
  };

/** @internal */
export const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest
  > = z.object({
    companyUuid: z.string(),
    signatoryUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      signatoryUuid: "signatory_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$ {
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound;
}

export function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestToJSON(
  putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest:
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema
      .parse(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest),
  );
}

export function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest' from JSON`,
  );
}
