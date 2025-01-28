/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest = {
  /**
   * The UUID of the company time off policy
   */
  timeOffPolicyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$inboundSchema:
  z.ZodType<
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    time_off_policy_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "time_off_policy_uuid": "timeOffPolicyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound = {
  time_off_policy_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
};

/** @internal */
export const PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$outboundSchema:
  z.ZodType<
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound,
    z.ZodTypeDef,
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest
  > = z.object({
    timeOffPolicyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      timeOffPolicyUuid: "time_off_policy_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$ {
  /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$inboundSchema;
  /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$outboundSchema;
  /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound` instead. */
  export type Outbound =
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound;
}

export function putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequestToJSON(
  putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest:
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
): string {
  return JSON.stringify(
    PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$outboundSchema.parse(
      putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
    ),
  );
}

export function putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest' from JSON`,
  );
}
