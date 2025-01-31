/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1CompaniesCompanyIdAdminsRequestBody = {
  /**
   * The first name of the admin.
   */
  firstName: string;
  /**
   * The last name of the admin.
   */
  lastName: string;
  /**
   * The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them.
   */
  email: string;
};

export type PostV1CompaniesCompanyIdAdminsRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1CompaniesCompanyIdAdminsRequestBody;
};

/** @internal */
export const PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdAdminsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
  });
});

/** @internal */
export type PostV1CompaniesCompanyIdAdminsRequestBody$Outbound = {
  first_name: string;
  last_name: string;
  email: string;
};

/** @internal */
export const PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyIdAdminsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyIdAdminsRequestBody
  > = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
  }).transform((v) => {
    return remap$(v, {
      firstName: "first_name",
      lastName: "last_name",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyIdAdminsRequestBody$ {
  /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequestBody$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdAdminsRequestBody$Outbound;
}

export function postV1CompaniesCompanyIdAdminsRequestBodyToJSON(
  postV1CompaniesCompanyIdAdminsRequestBody:
    PostV1CompaniesCompanyIdAdminsRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema.parse(
      postV1CompaniesCompanyIdAdminsRequestBody,
    ),
  );
}

export function postV1CompaniesCompanyIdAdminsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyIdAdminsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyIdAdminsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyIdAdminsRequest$inboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdAdminsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() =>
    PostV1CompaniesCompanyIdAdminsRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1CompaniesCompanyIdAdminsRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PostV1CompaniesCompanyIdAdminsRequestBody$Outbound;
};

/** @internal */
export const PostV1CompaniesCompanyIdAdminsRequest$outboundSchema: z.ZodType<
  PostV1CompaniesCompanyIdAdminsRequest$Outbound,
  z.ZodTypeDef,
  PostV1CompaniesCompanyIdAdminsRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() =>
    PostV1CompaniesCompanyIdAdminsRequestBody$outboundSchema
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
export namespace PostV1CompaniesCompanyIdAdminsRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyIdAdminsRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyIdAdminsRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyIdAdminsRequest$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyIdAdminsRequest$Outbound;
}

export function postV1CompaniesCompanyIdAdminsRequestToJSON(
  postV1CompaniesCompanyIdAdminsRequest: PostV1CompaniesCompanyIdAdminsRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyIdAdminsRequest$outboundSchema.parse(
      postV1CompaniesCompanyIdAdminsRequest,
    ),
  );
}

export function postV1CompaniesCompanyIdAdminsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1CompaniesCompanyIdAdminsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyIdAdminsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompaniesCompanyIdAdminsRequest' from JSON`,
  );
}
