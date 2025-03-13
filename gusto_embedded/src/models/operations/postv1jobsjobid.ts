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
  Job,
  Job$inboundSchema,
  Job$Outbound,
  Job$outboundSchema,
} from "../components/job.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Create a job.
 */
export type PostV1JobsJobIdRequestBody = {
  /**
   * The job title
   */
  title: string;
  /**
   * The date when the employee was hired or rehired for the job.
   */
  hireDate: string;
  /**
   * Whether the employee owns at least 2% of the company.
   */
  twoPercentShareholder?: boolean | undefined;
  /**
   * Whether this job is eligible for workers' compensation coverage in the state of Washington (WA).
   */
  stateWcCovered?: boolean | null | undefined;
  /**
   * The risk class code for workers' compensation in Washington state. Please visit [Washington state's Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.
   */
  stateWcClassCode?: string | null | undefined;
};

export type PostV1JobsJobIdRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  /**
   * Create a job.
   */
  requestBody: PostV1JobsJobIdRequestBody;
};

export type PostV1JobsJobIdResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  job?: Job | undefined;
};

/** @internal */
export const PostV1JobsJobIdRequestBody$inboundSchema: z.ZodType<
  PostV1JobsJobIdRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string(),
  hire_date: z.string(),
  two_percent_shareholder: z.boolean().optional(),
  state_wc_covered: z.nullable(z.boolean()).optional(),
  state_wc_class_code: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "hire_date": "hireDate",
    "two_percent_shareholder": "twoPercentShareholder",
    "state_wc_covered": "stateWcCovered",
    "state_wc_class_code": "stateWcClassCode",
  });
});

/** @internal */
export type PostV1JobsJobIdRequestBody$Outbound = {
  title: string;
  hire_date: string;
  two_percent_shareholder?: boolean | undefined;
  state_wc_covered?: boolean | null | undefined;
  state_wc_class_code?: string | null | undefined;
};

/** @internal */
export const PostV1JobsJobIdRequestBody$outboundSchema: z.ZodType<
  PostV1JobsJobIdRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1JobsJobIdRequestBody
> = z.object({
  title: z.string(),
  hireDate: z.string(),
  twoPercentShareholder: z.boolean().optional(),
  stateWcCovered: z.nullable(z.boolean()).optional(),
  stateWcClassCode: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    hireDate: "hire_date",
    twoPercentShareholder: "two_percent_shareholder",
    stateWcCovered: "state_wc_covered",
    stateWcClassCode: "state_wc_class_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1JobsJobIdRequestBody$ {
  /** @deprecated use `PostV1JobsJobIdRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV1JobsJobIdRequestBody$inboundSchema;
  /** @deprecated use `PostV1JobsJobIdRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV1JobsJobIdRequestBody$outboundSchema;
  /** @deprecated use `PostV1JobsJobIdRequestBody$Outbound` instead. */
  export type Outbound = PostV1JobsJobIdRequestBody$Outbound;
}

export function postV1JobsJobIdRequestBodyToJSON(
  postV1JobsJobIdRequestBody: PostV1JobsJobIdRequestBody,
): string {
  return JSON.stringify(
    PostV1JobsJobIdRequestBody$outboundSchema.parse(postV1JobsJobIdRequestBody),
  );
}

export function postV1JobsJobIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1JobsJobIdRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1JobsJobIdRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1JobsJobIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1JobsJobIdRequest$inboundSchema: z.ZodType<
  PostV1JobsJobIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() => PostV1JobsJobIdRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1JobsJobIdRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1JobsJobIdRequestBody$Outbound;
};

/** @internal */
export const PostV1JobsJobIdRequest$outboundSchema: z.ZodType<
  PostV1JobsJobIdRequest$Outbound,
  z.ZodTypeDef,
  PostV1JobsJobIdRequest
> = z.object({
  employeeId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() => PostV1JobsJobIdRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1JobsJobIdRequest$ {
  /** @deprecated use `PostV1JobsJobIdRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1JobsJobIdRequest$inboundSchema;
  /** @deprecated use `PostV1JobsJobIdRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1JobsJobIdRequest$outboundSchema;
  /** @deprecated use `PostV1JobsJobIdRequest$Outbound` instead. */
  export type Outbound = PostV1JobsJobIdRequest$Outbound;
}

export function postV1JobsJobIdRequestToJSON(
  postV1JobsJobIdRequest: PostV1JobsJobIdRequest,
): string {
  return JSON.stringify(
    PostV1JobsJobIdRequest$outboundSchema.parse(postV1JobsJobIdRequest),
  );
}

export function postV1JobsJobIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1JobsJobIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1JobsJobIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1JobsJobIdRequest' from JSON`,
  );
}

/** @internal */
export const PostV1JobsJobIdResponse$inboundSchema: z.ZodType<
  PostV1JobsJobIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Job: Job$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Job": "job",
  });
});

/** @internal */
export type PostV1JobsJobIdResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Job?: Job$Outbound | undefined;
};

/** @internal */
export const PostV1JobsJobIdResponse$outboundSchema: z.ZodType<
  PostV1JobsJobIdResponse$Outbound,
  z.ZodTypeDef,
  PostV1JobsJobIdResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  job: Job$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    job: "Job",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1JobsJobIdResponse$ {
  /** @deprecated use `PostV1JobsJobIdResponse$inboundSchema` instead. */
  export const inboundSchema = PostV1JobsJobIdResponse$inboundSchema;
  /** @deprecated use `PostV1JobsJobIdResponse$outboundSchema` instead. */
  export const outboundSchema = PostV1JobsJobIdResponse$outboundSchema;
  /** @deprecated use `PostV1JobsJobIdResponse$Outbound` instead. */
  export type Outbound = PostV1JobsJobIdResponse$Outbound;
}

export function postV1JobsJobIdResponseToJSON(
  postV1JobsJobIdResponse: PostV1JobsJobIdResponse,
): string {
  return JSON.stringify(
    PostV1JobsJobIdResponse$outboundSchema.parse(postV1JobsJobIdResponse),
  );
}

export function postV1JobsJobIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1JobsJobIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1JobsJobIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1JobsJobIdResponse' from JSON`,
  );
}
