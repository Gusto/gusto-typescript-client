/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Employee,
  Employee$inboundSchema,
  Employee$Outbound,
  Employee$outboundSchema,
} from "../components/employee.js";
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

/**
 * Create an employee.
 */
export type PostV1EmployeesRequestBody = {
  firstName: string;
  middleInitial?: string | undefined;
  lastName: string;
  preferredFirstName?: string | undefined;
  dateOfBirth?: string | undefined;
  /**
   * The employee's personal email address.
   */
  email?: string | undefined;
  ssn?: string | undefined;
  /**
   * If true, employee is expected to self-onboard. If false, payroll admin is expected to enter in the employee's onboarding information
   */
  selfOnboarding?: boolean | undefined;
};

export type PostV1EmployeesRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  /**
   * Create an employee.
   */
  requestBody: PostV1EmployeesRequestBody;
};

export type PostV1EmployeesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  employee?: Employee | undefined;
};

/** @internal */
export const PostV1EmployeesRequestBody$inboundSchema: z.ZodType<
  PostV1EmployeesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  first_name: z.string(),
  middle_initial: z.string().optional(),
  last_name: z.string(),
  preferred_first_name: z.string().optional(),
  date_of_birth: z.string().optional(),
  email: z.string().optional(),
  ssn: z.string().optional(),
  self_onboarding: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "middle_initial": "middleInitial",
    "last_name": "lastName",
    "preferred_first_name": "preferredFirstName",
    "date_of_birth": "dateOfBirth",
    "self_onboarding": "selfOnboarding",
  });
});

/** @internal */
export type PostV1EmployeesRequestBody$Outbound = {
  first_name: string;
  middle_initial?: string | undefined;
  last_name: string;
  preferred_first_name?: string | undefined;
  date_of_birth?: string | undefined;
  email?: string | undefined;
  ssn?: string | undefined;
  self_onboarding?: boolean | undefined;
};

/** @internal */
export const PostV1EmployeesRequestBody$outboundSchema: z.ZodType<
  PostV1EmployeesRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1EmployeesRequestBody
> = z.object({
  firstName: z.string(),
  middleInitial: z.string().optional(),
  lastName: z.string(),
  preferredFirstName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().optional(),
  ssn: z.string().optional(),
  selfOnboarding: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    middleInitial: "middle_initial",
    lastName: "last_name",
    preferredFirstName: "preferred_first_name",
    dateOfBirth: "date_of_birth",
    selfOnboarding: "self_onboarding",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesRequestBody$ {
  /** @deprecated use `PostV1EmployeesRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV1EmployeesRequestBody$inboundSchema;
  /** @deprecated use `PostV1EmployeesRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV1EmployeesRequestBody$outboundSchema;
  /** @deprecated use `PostV1EmployeesRequestBody$Outbound` instead. */
  export type Outbound = PostV1EmployeesRequestBody$Outbound;
}

export function postV1EmployeesRequestBodyToJSON(
  postV1EmployeesRequestBody: PostV1EmployeesRequestBody,
): string {
  return JSON.stringify(
    PostV1EmployeesRequestBody$outboundSchema.parse(postV1EmployeesRequestBody),
  );
}

export function postV1EmployeesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1EmployeesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1EmployeesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1EmployeesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesRequest$inboundSchema: z.ZodType<
  PostV1EmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() => PostV1EmployeesRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1EmployeesRequest$Outbound = {
  company_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1EmployeesRequestBody$Outbound;
};

/** @internal */
export const PostV1EmployeesRequest$outboundSchema: z.ZodType<
  PostV1EmployeesRequest$Outbound,
  z.ZodTypeDef,
  PostV1EmployeesRequest
> = z.object({
  companyId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() => PostV1EmployeesRequestBody$outboundSchema),
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
export namespace PostV1EmployeesRequest$ {
  /** @deprecated use `PostV1EmployeesRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1EmployeesRequest$inboundSchema;
  /** @deprecated use `PostV1EmployeesRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1EmployeesRequest$outboundSchema;
  /** @deprecated use `PostV1EmployeesRequest$Outbound` instead. */
  export type Outbound = PostV1EmployeesRequest$Outbound;
}

export function postV1EmployeesRequestToJSON(
  postV1EmployeesRequest: PostV1EmployeesRequest,
): string {
  return JSON.stringify(
    PostV1EmployeesRequest$outboundSchema.parse(postV1EmployeesRequest),
  );
}

export function postV1EmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1EmployeesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1EmployeesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1EmployeesRequest' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesResponse$inboundSchema: z.ZodType<
  PostV1EmployeesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Employee: Employee$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Employee": "employee",
  });
});

/** @internal */
export type PostV1EmployeesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Employee?: Employee$Outbound | undefined;
};

/** @internal */
export const PostV1EmployeesResponse$outboundSchema: z.ZodType<
  PostV1EmployeesResponse$Outbound,
  z.ZodTypeDef,
  PostV1EmployeesResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  employee: Employee$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    employee: "Employee",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesResponse$ {
  /** @deprecated use `PostV1EmployeesResponse$inboundSchema` instead. */
  export const inboundSchema = PostV1EmployeesResponse$inboundSchema;
  /** @deprecated use `PostV1EmployeesResponse$outboundSchema` instead. */
  export const outboundSchema = PostV1EmployeesResponse$outboundSchema;
  /** @deprecated use `PostV1EmployeesResponse$Outbound` instead. */
  export type Outbound = PostV1EmployeesResponse$Outbound;
}

export function postV1EmployeesResponseToJSON(
  postV1EmployeesResponse: PostV1EmployeesResponse,
): string {
  return JSON.stringify(
    PostV1EmployeesResponse$outboundSchema.parse(postV1EmployeesResponse),
  );
}

export function postV1EmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1EmployeesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1EmployeesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1EmployeesResponse' from JSON`,
  );
}
