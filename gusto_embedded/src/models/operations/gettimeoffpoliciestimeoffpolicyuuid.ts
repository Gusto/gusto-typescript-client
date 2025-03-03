/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTimeOffPoliciesTimeOffPolicyUuidRequest = {
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
export const GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema:
  z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidRequest, z.ZodTypeDef, unknown> =
    z.object({
      time_off_policy_uuid: z.string(),
      "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
        "2024-04-01",
      ),
    }).transform((v) => {
      return remap$(v, {
        "time_off_policy_uuid": "timeOffPolicyUuid",
        "X-Gusto-API-Version": "xGustoAPIVersion",
      });
    });

/** @internal */
export type GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound = {
  time_off_policy_uuid: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema:
  z.ZodType<
    GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound,
    z.ZodTypeDef,
    GetTimeOffPoliciesTimeOffPolicyUuidRequest
  > = z.object({
    timeOffPolicyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
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
export namespace GetTimeOffPoliciesTimeOffPolicyUuidRequest$ {
  /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema;
  /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema;
  /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound` instead. */
  export type Outbound = GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound;
}

export function getTimeOffPoliciesTimeOffPolicyUuidRequestToJSON(
  getTimeOffPoliciesTimeOffPolicyUuidRequest:
    GetTimeOffPoliciesTimeOffPolicyUuidRequest,
): string {
  return JSON.stringify(
    GetTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema.parse(
      getTimeOffPoliciesTimeOffPolicyUuidRequest,
    ),
  );
}

export function getTimeOffPoliciesTimeOffPolicyUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetTimeOffPoliciesTimeOffPolicyUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetTimeOffPoliciesTimeOffPolicyUuidRequest' from JSON`,
  );
}
