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
  TimeOffPolicy,
  TimeOffPolicy$inboundSchema,
  TimeOffPolicy$Outbound,
  TimeOffPolicy$outboundSchema,
} from "../components/timeoffpolicy.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees = {
  uuid?: string | undefined;
  balance?: string | undefined;
};

/**
 * A list of employee objects containing the employee uuid
 */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody =
  {
    employees?:
      | Array<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees>
      | undefined;
  };

export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest = {
  /**
   * The UUID of the company time off policy
   */
  timeOffPolicyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  /**
   * A list of employee objects containing the employee uuid
   */
  requestBody:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody;
};

export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  timeOffPolicy?: TimeOffPolicy | undefined;
};

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees,
    z.ZodTypeDef,
    unknown
  > = z.object({
    uuid: z.string().optional(),
    balance: z.string().optional(),
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound =
  {
    uuid?: string | undefined;
    balance?: string | undefined;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees
  > = z.object({
    uuid: z.string().optional(),
    balance: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployeesToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployeesFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees' from JSON`,
  );
}

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employees: z.array(
      z.lazy(() =>
        PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema
      ),
    ).optional(),
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound =
  {
    employees?:
      | Array<
        PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound
      >
      | undefined;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody
  > = z.object({
    employees: z.array(
      z.lazy(() =>
        PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema
      ),
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    time_off_policy_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "time_off_policy_uuid": "timeOffPolicyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound =
  {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody:
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest
  > = z.object({
    timeOffPolicyUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      timeOffPolicyUuid: "time_off_policy_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest' from JSON`,
  );
}

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Time-Off-Policy": TimeOffPolicy$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Time-Off-Policy": "timeOffPolicy",
    });
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    "Time-Off-Policy"?: TimeOffPolicy$Outbound | undefined;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    timeOffPolicy: TimeOffPolicy$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      timeOffPolicy: "Time-Off-Policy",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponseToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse' from JSON`,
  );
}
