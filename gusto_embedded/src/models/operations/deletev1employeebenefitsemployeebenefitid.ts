/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest = {
  /**
   * The UUID of the employee benefit.
   */
  employeeBenefitId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema:
  z.ZodType<
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_benefit_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_benefit_id": "employeeBenefitId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
  employee_benefit_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema:
  z.ZodType<
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest
  > = z.object({
    employeeBenefitId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
      "2024-04-01",
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeBenefitId: "employee_benefit_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$ {
  /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema;
  /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema;
  /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound;
}

export function deleteV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(
  deleteV1EmployeeBenefitsEmployeeBenefitIdRequest:
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest,
): string {
  return JSON.stringify(
    DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema.parse(
      deleteV1EmployeeBenefitsEmployeeBenefitIdRequest,
    ),
  );
}

export function deleteV1EmployeeBenefitsEmployeeBenefitIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest' from JSON`,
  );
}
