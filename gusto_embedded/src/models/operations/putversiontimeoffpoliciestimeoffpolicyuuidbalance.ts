/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees = {
  uuid?: string | undefined;
  balance?: string | undefined;
};

/**
 * A list of employee objects containing the employee uuid and time off hours balance
 */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody = {
  employees?:
    | Array<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees>
    | undefined;
};

export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest = {
  /**
   * The UUID of the company time off policy
   */
  timeOffPolicyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  /**
   * A list of employee objects containing the employee uuid and time off hours balance
   */
  requestBody?:
    | PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody
    | undefined;
};

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees,
    z.ZodTypeDef,
    unknown
  > = z.object({
    uuid: z.string().optional(),
    balance: z.string().optional(),
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound =
  {
    uuid?: string | undefined;
    balance?: string | undefined;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees
  > = z.object({
    uuid: z.string().optional(),
    balance: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployeesToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployeesFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees' from JSON`,
  );
}

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employees: z.array(
      z.lazy(() =>
        PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema
      ),
    ).optional(),
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound =
  {
    employees?:
      | Array<
        PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound
      >
      | undefined;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody
  > = z.object({
    employees: z.array(
      z.lazy(() =>
        PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema
      ),
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody' from JSON`,
  );
}

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$inboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    time_off_policy_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "time_off_policy_uuid": "timeOffPolicyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound =
  {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version"?: string | undefined;
    RequestBody?:
      | PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound
      | undefined;
  };

/** @internal */
export const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$outboundSchema:
  z.ZodType<
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound,
    z.ZodTypeDef,
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest
  > = z.object({
    timeOffPolicyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema
    ).optional(),
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
export namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$ {
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$inboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$outboundSchema;
  /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound` instead. */
  export type Outbound =
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound;
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestToJSON(
  putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest:
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest,
): string {
  return JSON.stringify(
    PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$outboundSchema
      .parse(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest),
  );
}

export function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest' from JSON`,
  );
}
