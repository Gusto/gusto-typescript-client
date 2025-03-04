/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1PartnerManagedCompaniesSecurity = {
  systemAccessAuth: string;
};

/**
 * Information for the user who will be the primary payroll administrator for the new company.
 */
export type User = {
  /**
   * The first name of the user who will be the primary payroll admin.
   */
  firstName: string;
  /**
   * The last name of the user who will be the primary payroll admin.
   */
  lastName: string;
  /**
   * The email of the user who will be the primary payroll admin.
   */
  email: string;
  /**
   * The phone number of the user who will be the primary payroll admin.
   */
  phone?: string | undefined;
};

export type Company = {
  /**
   * The legal name of the company.
   */
  name: string;
  /**
   * The name of the company.
   */
  tradeName?: string | undefined;
  /**
   * The employer identification number (EIN) of the company.
   */
  ein?: string | undefined;
  /**
   * Whether the company only supports contractors. Should be set to true if the company has no W-2 employees. If not passed, will default to false (i.e. the company will support both contractors and employees).
   */
  contractorOnly?: boolean | undefined;
};

export type PostV1PartnerManagedCompaniesRequestBody = {
  /**
   * Information for the user who will be the primary payroll administrator for the new company.
   */
  user: User;
  company: Company;
};

export type PostV1PartnerManagedCompaniesRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1PartnerManagedCompaniesRequestBody;
};

/**
 * Object returned when creating a partner managed company
 */
export type PostV1PartnerManagedCompaniesResponseBody = {
  /**
   * Access token that can be used for OAuth access to the account. Access tokens expire 2 hours after they are issued.
   */
  accessToken?: string | undefined;
  /**
   * Refresh token that can be exchanged for a new access token.
   */
  refreshToken?: string | undefined;
  /**
   * Gusto’s UUID for the company
   */
  companyUuid?: string | undefined;
  /**
   * Time of access_token expiration in seconds
   */
  expiresIn?: number | undefined;
};

export type PostV1PartnerManagedCompaniesResponse = {
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
   * OK
   */
  object?: PostV1PartnerManagedCompaniesResponseBody | undefined;
};

/** @internal */
export const PostV1PartnerManagedCompaniesSecurity$inboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  SystemAccessAuth: z.string(),
}).transform((v) => {
  return remap$(v, {
    "SystemAccessAuth": "systemAccessAuth",
  });
});

/** @internal */
export type PostV1PartnerManagedCompaniesSecurity$Outbound = {
  SystemAccessAuth: string;
};

/** @internal */
export const PostV1PartnerManagedCompaniesSecurity$outboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesSecurity$Outbound,
  z.ZodTypeDef,
  PostV1PartnerManagedCompaniesSecurity
> = z.object({
  systemAccessAuth: z.string(),
}).transform((v) => {
  return remap$(v, {
    systemAccessAuth: "SystemAccessAuth",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PartnerManagedCompaniesSecurity$ {
  /** @deprecated use `PostV1PartnerManagedCompaniesSecurity$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PartnerManagedCompaniesSecurity$inboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesSecurity$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PartnerManagedCompaniesSecurity$outboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesSecurity$Outbound` instead. */
  export type Outbound = PostV1PartnerManagedCompaniesSecurity$Outbound;
}

export function postV1PartnerManagedCompaniesSecurityToJSON(
  postV1PartnerManagedCompaniesSecurity: PostV1PartnerManagedCompaniesSecurity,
): string {
  return JSON.stringify(
    PostV1PartnerManagedCompaniesSecurity$outboundSchema.parse(
      postV1PartnerManagedCompaniesSecurity,
    ),
  );
}

export function postV1PartnerManagedCompaniesSecurityFromJSON(
  jsonString: string,
): SafeParseResult<PostV1PartnerManagedCompaniesSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PartnerManagedCompaniesSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1PartnerManagedCompaniesSecurity' from JSON`,
  );
}

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_name": "firstName",
      "last_name": "lastName",
    });
  });

/** @internal */
export type User$Outbound = {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | undefined;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string().optional(),
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
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

export function userToJSON(user: User): string {
  return JSON.stringify(User$outboundSchema.parse(user));
}

export function userFromJSON(
  jsonString: string,
): SafeParseResult<User, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => User$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'User' from JSON`,
  );
}

/** @internal */
export const Company$inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown> =
  z.object({
    name: z.string(),
    trade_name: z.string().optional(),
    ein: z.string().optional(),
    contractor_only: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "trade_name": "tradeName",
      "contractor_only": "contractorOnly",
    });
  });

/** @internal */
export type Company$Outbound = {
  name: string;
  trade_name?: string | undefined;
  ein?: string | undefined;
  contractor_only?: boolean | undefined;
};

/** @internal */
export const Company$outboundSchema: z.ZodType<
  Company$Outbound,
  z.ZodTypeDef,
  Company
> = z.object({
  name: z.string(),
  tradeName: z.string().optional(),
  ein: z.string().optional(),
  contractorOnly: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    tradeName: "trade_name",
    contractorOnly: "contractor_only",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Company$ {
  /** @deprecated use `Company$inboundSchema` instead. */
  export const inboundSchema = Company$inboundSchema;
  /** @deprecated use `Company$outboundSchema` instead. */
  export const outboundSchema = Company$outboundSchema;
  /** @deprecated use `Company$Outbound` instead. */
  export type Outbound = Company$Outbound;
}

export function companyToJSON(company: Company): string {
  return JSON.stringify(Company$outboundSchema.parse(company));
}

export function companyFromJSON(
  jsonString: string,
): SafeParseResult<Company, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Company$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Company' from JSON`,
  );
}

/** @internal */
export const PostV1PartnerManagedCompaniesRequestBody$inboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  user: z.lazy(() => User$inboundSchema),
  company: z.lazy(() => Company$inboundSchema),
});

/** @internal */
export type PostV1PartnerManagedCompaniesRequestBody$Outbound = {
  user: User$Outbound;
  company: Company$Outbound;
};

/** @internal */
export const PostV1PartnerManagedCompaniesRequestBody$outboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1PartnerManagedCompaniesRequestBody
> = z.object({
  user: z.lazy(() => User$outboundSchema),
  company: z.lazy(() => Company$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PartnerManagedCompaniesRequestBody$ {
  /** @deprecated use `PostV1PartnerManagedCompaniesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PartnerManagedCompaniesRequestBody$inboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PartnerManagedCompaniesRequestBody$outboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesRequestBody$Outbound` instead. */
  export type Outbound = PostV1PartnerManagedCompaniesRequestBody$Outbound;
}

export function postV1PartnerManagedCompaniesRequestBodyToJSON(
  postV1PartnerManagedCompaniesRequestBody:
    PostV1PartnerManagedCompaniesRequestBody,
): string {
  return JSON.stringify(
    PostV1PartnerManagedCompaniesRequestBody$outboundSchema.parse(
      postV1PartnerManagedCompaniesRequestBody,
    ),
  );
}

export function postV1PartnerManagedCompaniesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PartnerManagedCompaniesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PartnerManagedCompaniesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1PartnerManagedCompaniesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1PartnerManagedCompaniesRequest$inboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() =>
    PostV1PartnerManagedCompaniesRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1PartnerManagedCompaniesRequest$Outbound = {
  "X-Gusto-API-Version": string;
  RequestBody: PostV1PartnerManagedCompaniesRequestBody$Outbound;
};

/** @internal */
export const PostV1PartnerManagedCompaniesRequest$outboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesRequest$Outbound,
  z.ZodTypeDef,
  PostV1PartnerManagedCompaniesRequest
> = z.object({
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() =>
    PostV1PartnerManagedCompaniesRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PartnerManagedCompaniesRequest$ {
  /** @deprecated use `PostV1PartnerManagedCompaniesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PartnerManagedCompaniesRequest$inboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PartnerManagedCompaniesRequest$outboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesRequest$Outbound` instead. */
  export type Outbound = PostV1PartnerManagedCompaniesRequest$Outbound;
}

export function postV1PartnerManagedCompaniesRequestToJSON(
  postV1PartnerManagedCompaniesRequest: PostV1PartnerManagedCompaniesRequest,
): string {
  return JSON.stringify(
    PostV1PartnerManagedCompaniesRequest$outboundSchema.parse(
      postV1PartnerManagedCompaniesRequest,
    ),
  );
}

export function postV1PartnerManagedCompaniesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1PartnerManagedCompaniesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PartnerManagedCompaniesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1PartnerManagedCompaniesRequest' from JSON`,
  );
}

/** @internal */
export const PostV1PartnerManagedCompaniesResponseBody$inboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  access_token: z.string().optional(),
  refresh_token: z.string().optional(),
  company_uuid: z.string().optional(),
  expires_in: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "access_token": "accessToken",
    "refresh_token": "refreshToken",
    "company_uuid": "companyUuid",
    "expires_in": "expiresIn",
  });
});

/** @internal */
export type PostV1PartnerManagedCompaniesResponseBody$Outbound = {
  access_token?: string | undefined;
  refresh_token?: string | undefined;
  company_uuid?: string | undefined;
  expires_in?: number | undefined;
};

/** @internal */
export const PostV1PartnerManagedCompaniesResponseBody$outboundSchema:
  z.ZodType<
    PostV1PartnerManagedCompaniesResponseBody$Outbound,
    z.ZodTypeDef,
    PostV1PartnerManagedCompaniesResponseBody
  > = z.object({
    accessToken: z.string().optional(),
    refreshToken: z.string().optional(),
    companyUuid: z.string().optional(),
    expiresIn: z.number().int().optional(),
  }).transform((v) => {
    return remap$(v, {
      accessToken: "access_token",
      refreshToken: "refresh_token",
      companyUuid: "company_uuid",
      expiresIn: "expires_in",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PartnerManagedCompaniesResponseBody$ {
  /** @deprecated use `PostV1PartnerManagedCompaniesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PartnerManagedCompaniesResponseBody$inboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PartnerManagedCompaniesResponseBody$outboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesResponseBody$Outbound` instead. */
  export type Outbound = PostV1PartnerManagedCompaniesResponseBody$Outbound;
}

export function postV1PartnerManagedCompaniesResponseBodyToJSON(
  postV1PartnerManagedCompaniesResponseBody:
    PostV1PartnerManagedCompaniesResponseBody,
): string {
  return JSON.stringify(
    PostV1PartnerManagedCompaniesResponseBody$outboundSchema.parse(
      postV1PartnerManagedCompaniesResponseBody,
    ),
  );
}

export function postV1PartnerManagedCompaniesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PartnerManagedCompaniesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PartnerManagedCompaniesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1PartnerManagedCompaniesResponseBody' from JSON`,
  );
}

/** @internal */
export const PostV1PartnerManagedCompaniesResponse$inboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => PostV1PartnerManagedCompaniesResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type PostV1PartnerManagedCompaniesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: PostV1PartnerManagedCompaniesResponseBody$Outbound | undefined;
};

/** @internal */
export const PostV1PartnerManagedCompaniesResponse$outboundSchema: z.ZodType<
  PostV1PartnerManagedCompaniesResponse$Outbound,
  z.ZodTypeDef,
  PostV1PartnerManagedCompaniesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => PostV1PartnerManagedCompaniesResponseBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PartnerManagedCompaniesResponse$ {
  /** @deprecated use `PostV1PartnerManagedCompaniesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PartnerManagedCompaniesResponse$inboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PartnerManagedCompaniesResponse$outboundSchema;
  /** @deprecated use `PostV1PartnerManagedCompaniesResponse$Outbound` instead. */
  export type Outbound = PostV1PartnerManagedCompaniesResponse$Outbound;
}

export function postV1PartnerManagedCompaniesResponseToJSON(
  postV1PartnerManagedCompaniesResponse: PostV1PartnerManagedCompaniesResponse,
): string {
  return JSON.stringify(
    PostV1PartnerManagedCompaniesResponse$outboundSchema.parse(
      postV1PartnerManagedCompaniesResponse,
    ),
  );
}

export function postV1PartnerManagedCompaniesResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1PartnerManagedCompaniesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PartnerManagedCompaniesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1PartnerManagedCompaniesResponse' from JSON`,
  );
}
