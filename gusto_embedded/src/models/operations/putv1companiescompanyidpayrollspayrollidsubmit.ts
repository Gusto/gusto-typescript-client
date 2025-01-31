/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubmissionBlockers = {
  /**
   * The type of submission_blocker that is blocking the payment.
   */
  blockerType?: string | undefined;
  /**
   * The selected option to unblock the payment's submission_blocker.
   */
  selectedOption?: string | undefined;
};

export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody = {
  /**
   * An array of submission_blockers, each with a selected unblock option.
   */
  submissionBlockers?: Array<SubmissionBlockers> | undefined;
};

export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * The UUID of the payroll
   */
  payrollId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody;
};

/** @internal */
export const SubmissionBlockers$inboundSchema: z.ZodType<
  SubmissionBlockers,
  z.ZodTypeDef,
  unknown
> = z.object({
  blocker_type: z.string().optional(),
  selected_option: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "blocker_type": "blockerType",
    "selected_option": "selectedOption",
  });
});

/** @internal */
export type SubmissionBlockers$Outbound = {
  blocker_type?: string | undefined;
  selected_option?: string | undefined;
};

/** @internal */
export const SubmissionBlockers$outboundSchema: z.ZodType<
  SubmissionBlockers$Outbound,
  z.ZodTypeDef,
  SubmissionBlockers
> = z.object({
  blockerType: z.string().optional(),
  selectedOption: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    blockerType: "blocker_type",
    selectedOption: "selected_option",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmissionBlockers$ {
  /** @deprecated use `SubmissionBlockers$inboundSchema` instead. */
  export const inboundSchema = SubmissionBlockers$inboundSchema;
  /** @deprecated use `SubmissionBlockers$outboundSchema` instead. */
  export const outboundSchema = SubmissionBlockers$outboundSchema;
  /** @deprecated use `SubmissionBlockers$Outbound` instead. */
  export type Outbound = SubmissionBlockers$Outbound;
}

export function submissionBlockersToJSON(
  submissionBlockers: SubmissionBlockers,
): string {
  return JSON.stringify(
    SubmissionBlockers$outboundSchema.parse(submissionBlockers),
  );
}

export function submissionBlockersFromJSON(
  jsonString: string,
): SafeParseResult<SubmissionBlockers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmissionBlockers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmissionBlockers' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    submission_blockers: z.array(z.lazy(() => SubmissionBlockers$inboundSchema))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "submission_blockers": "submissionBlockers",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound =
  {
    submission_blockers?: Array<SubmissionBlockers$Outbound> | undefined;
  };

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody
  > = z.object({
    submissionBlockers: z.array(z.lazy(() => SubmissionBlockers$outboundSchema))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      submissionBlockers: "submission_blockers",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$ {
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound;
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBodyToJSON(
  putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody:
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema
      .parse(putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody),
  );
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    payroll_id: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "payroll_id": "payrollId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound = {
  company_id: string;
  payroll_id: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody:
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound;
};

/** @internal */
export const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest
  > = z.object({
    companyId: z.string(),
    payrollId: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      payrollId: "payroll_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$ {
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound;
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestToJSON(
  putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest:
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$outboundSchema.parse(
      putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest,
    ),
  );
}

export function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest' from JSON`,
  );
}
