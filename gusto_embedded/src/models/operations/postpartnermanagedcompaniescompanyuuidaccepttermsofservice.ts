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

export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody =
  {
    /**
     * The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints.
     */
    email: string;
    /**
     * The IP address of the user who viewed and accepted the Terms of Service.
     */
    ipAddress: string;
    /**
     * The user ID on your platform.
     */
    externalUserId: string;
  };

export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest =
  {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody:
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody;
  };

/**
 * Example response
 */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody =
  {
    /**
     * Whether the latest terms have been accepted by the user.
     */
    latestTermsAccepted?: boolean | undefined;
  };

export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse =
  {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    object?:
      | PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody
      | undefined;
  };

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    email: z.string(),
    ip_address: z.string(),
    external_user_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "ip_address": "ipAddress",
      "external_user_id": "externalUserId",
    });
  });

/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound =
  {
    email: string;
    ip_address: string;
    external_user_id: string;
  };

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound,
    z.ZodTypeDef,
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody
  > = z.object({
    email: z.string(),
    ipAddress: z.string(),
    externalUserId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      ipAddress: "ip_address",
      externalUserId: "external_user_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$ {
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound` instead. */
  export type Outbound =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound;
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBodyToJSON(
  postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody:
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody,
): string {
  return JSON.stringify(
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema
      .parse(
        postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody,
      ),
  );
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody' from JSON`,
  );
}

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$inboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound =
  {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody:
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$Outbound;
  };

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound,
    z.ZodTypeDef,
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$ {
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$inboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound` instead. */
  export type Outbound =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$Outbound;
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestToJSON(
  postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest:
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
): string {
  return JSON.stringify(
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$outboundSchema
      .parse(postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest),
  );
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest' from JSON`,
  );
}

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    latest_terms_accepted: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "latest_terms_accepted": "latestTermsAccepted",
    });
  });

/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound =
  {
    latest_terms_accepted?: boolean | undefined;
  };

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound,
    z.ZodTypeDef,
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody
  > = z.object({
    latestTermsAccepted: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      latestTermsAccepted: "latest_terms_accepted",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$ {
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound` instead. */
  export type Outbound =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound;
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBodyToJSON(
  postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody:
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody,
): string {
  return JSON.stringify(
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema
      .parse(
        postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody,
      ),
  );
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody' from JSON`,
  );
}

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    object: z.lazy(() =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
    });
  });

/** @internal */
export type PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    object?:
      | PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$Outbound
      | undefined;
  };

/** @internal */
export const PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$outboundSchema:
  z.ZodType<
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound,
    z.ZodTypeDef,
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    object: z.lazy(() =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseBody$outboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$ {
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$outboundSchema;
  /** @deprecated use `PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound` instead. */
  export type Outbound =
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$Outbound;
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseToJSON(
  postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse:
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
): string {
  return JSON.stringify(
    PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$outboundSchema
      .parse(
        postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
      ),
  );
}

export function postPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse' from JSON`,
  );
}
