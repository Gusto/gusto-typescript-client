/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Update a job.
 */
export type PutV1JobsJobIdRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  /**
   * The job title
   */
  title?: string | undefined;
  /**
   * The date when the employee was hired or rehired for the job.
   */
  hireDate?: string | undefined;
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

export type PutV1JobsJobIdRequest = {
  /**
   * The UUID of the job
   */
  jobId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  /**
   * Update a job.
   */
  requestBody?: PutV1JobsJobIdRequestBody | undefined;
};

/** @internal */
export const PutV1JobsJobIdRequestBody$inboundSchema: z.ZodType<
  PutV1JobsJobIdRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
  title: z.string().optional(),
  hire_date: z.string().optional(),
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
export type PutV1JobsJobIdRequestBody$Outbound = {
  version: string;
  title?: string | undefined;
  hire_date?: string | undefined;
  two_percent_shareholder?: boolean | undefined;
  state_wc_covered?: boolean | null | undefined;
  state_wc_class_code?: string | null | undefined;
};

/** @internal */
export const PutV1JobsJobIdRequestBody$outboundSchema: z.ZodType<
  PutV1JobsJobIdRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1JobsJobIdRequestBody
> = z.object({
  version: z.string(),
  title: z.string().optional(),
  hireDate: z.string().optional(),
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
export namespace PutV1JobsJobIdRequestBody$ {
  /** @deprecated use `PutV1JobsJobIdRequestBody$inboundSchema` instead. */
  export const inboundSchema = PutV1JobsJobIdRequestBody$inboundSchema;
  /** @deprecated use `PutV1JobsJobIdRequestBody$outboundSchema` instead. */
  export const outboundSchema = PutV1JobsJobIdRequestBody$outboundSchema;
  /** @deprecated use `PutV1JobsJobIdRequestBody$Outbound` instead. */
  export type Outbound = PutV1JobsJobIdRequestBody$Outbound;
}

export function putV1JobsJobIdRequestBodyToJSON(
  putV1JobsJobIdRequestBody: PutV1JobsJobIdRequestBody,
): string {
  return JSON.stringify(
    PutV1JobsJobIdRequestBody$outboundSchema.parse(putV1JobsJobIdRequestBody),
  );
}

export function putV1JobsJobIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1JobsJobIdRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1JobsJobIdRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1JobsJobIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1JobsJobIdRequest$inboundSchema: z.ZodType<
  PutV1JobsJobIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() => PutV1JobsJobIdRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "job_id": "jobId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1JobsJobIdRequest$Outbound = {
  job_id: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody?: PutV1JobsJobIdRequestBody$Outbound | undefined;
};

/** @internal */
export const PutV1JobsJobIdRequest$outboundSchema: z.ZodType<
  PutV1JobsJobIdRequest$Outbound,
  z.ZodTypeDef,
  PutV1JobsJobIdRequest
> = z.object({
  jobId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() => PutV1JobsJobIdRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    jobId: "job_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1JobsJobIdRequest$ {
  /** @deprecated use `PutV1JobsJobIdRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1JobsJobIdRequest$inboundSchema;
  /** @deprecated use `PutV1JobsJobIdRequest$outboundSchema` instead. */
  export const outboundSchema = PutV1JobsJobIdRequest$outboundSchema;
  /** @deprecated use `PutV1JobsJobIdRequest$Outbound` instead. */
  export type Outbound = PutV1JobsJobIdRequest$Outbound;
}

export function putV1JobsJobIdRequestToJSON(
  putV1JobsJobIdRequest: PutV1JobsJobIdRequest,
): string {
  return JSON.stringify(
    PutV1JobsJobIdRequest$outboundSchema.parse(putV1JobsJobIdRequest),
  );
}

export function putV1JobsJobIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1JobsJobIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1JobsJobIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1JobsJobIdRequest' from JSON`,
  );
}
