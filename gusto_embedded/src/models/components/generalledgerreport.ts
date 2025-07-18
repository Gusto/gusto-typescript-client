/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The breakdown level used for the report
 */
export const Aggregation = {
  Default: "default",
  Job: "job",
  Department: "department",
  Integration: "integration",
} as const;
/**
 * The breakdown level used for the report
 */
export type Aggregation = ClosedEnum<typeof Aggregation>;

/**
 * The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.
 */
export const IntegrationType = {
  Xero: "xero",
  Qbo: "qbo",
} as const;
/**
 * The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.
 */
export type IntegrationType = ClosedEnum<typeof IntegrationType>;

/**
 * Successful response for general ledger report generation
 */
export type GeneralLedgerReport = {
  /**
   * The UUID of the payroll record for which the report was generated
   */
  payrollUuid?: string | undefined;
  /**
   * The breakdown level used for the report
   */
  aggregation?: Aggregation | undefined;
  /**
   * The `integration_type` used for the report, if `aggregation` was 'integration.' Otherwise, this will be null.
   */
  integrationType?: IntegrationType | null | undefined;
  /**
   * UUID to use for polling the report status
   */
  requestUuid?: string | undefined;
};

/** @internal */
export const Aggregation$inboundSchema: z.ZodNativeEnum<typeof Aggregation> = z
  .nativeEnum(Aggregation);

/** @internal */
export const Aggregation$outboundSchema: z.ZodNativeEnum<typeof Aggregation> =
  Aggregation$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Aggregation$ {
  /** @deprecated use `Aggregation$inboundSchema` instead. */
  export const inboundSchema = Aggregation$inboundSchema;
  /** @deprecated use `Aggregation$outboundSchema` instead. */
  export const outboundSchema = Aggregation$outboundSchema;
}

/** @internal */
export const IntegrationType$inboundSchema: z.ZodNativeEnum<
  typeof IntegrationType
> = z.nativeEnum(IntegrationType);

/** @internal */
export const IntegrationType$outboundSchema: z.ZodNativeEnum<
  typeof IntegrationType
> = IntegrationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationType$ {
  /** @deprecated use `IntegrationType$inboundSchema` instead. */
  export const inboundSchema = IntegrationType$inboundSchema;
  /** @deprecated use `IntegrationType$outboundSchema` instead. */
  export const outboundSchema = IntegrationType$outboundSchema;
}

/** @internal */
export const GeneralLedgerReport$inboundSchema: z.ZodType<
  GeneralLedgerReport,
  z.ZodTypeDef,
  unknown
> = z.object({
  payroll_uuid: z.string().optional(),
  aggregation: Aggregation$inboundSchema.optional(),
  integration_type: z.nullable(IntegrationType$inboundSchema).optional(),
  request_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "payroll_uuid": "payrollUuid",
    "integration_type": "integrationType",
    "request_uuid": "requestUuid",
  });
});

/** @internal */
export type GeneralLedgerReport$Outbound = {
  payroll_uuid?: string | undefined;
  aggregation?: string | undefined;
  integration_type?: string | null | undefined;
  request_uuid?: string | undefined;
};

/** @internal */
export const GeneralLedgerReport$outboundSchema: z.ZodType<
  GeneralLedgerReport$Outbound,
  z.ZodTypeDef,
  GeneralLedgerReport
> = z.object({
  payrollUuid: z.string().optional(),
  aggregation: Aggregation$outboundSchema.optional(),
  integrationType: z.nullable(IntegrationType$outboundSchema).optional(),
  requestUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    payrollUuid: "payroll_uuid",
    integrationType: "integration_type",
    requestUuid: "request_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneralLedgerReport$ {
  /** @deprecated use `GeneralLedgerReport$inboundSchema` instead. */
  export const inboundSchema = GeneralLedgerReport$inboundSchema;
  /** @deprecated use `GeneralLedgerReport$outboundSchema` instead. */
  export const outboundSchema = GeneralLedgerReport$outboundSchema;
  /** @deprecated use `GeneralLedgerReport$Outbound` instead. */
  export type Outbound = GeneralLedgerReport$Outbound;
}

export function generalLedgerReportToJSON(
  generalLedgerReport: GeneralLedgerReport,
): string {
  return JSON.stringify(
    GeneralLedgerReport$outboundSchema.parse(generalLedgerReport),
  );
}

export function generalLedgerReportFromJSON(
  jsonString: string,
): SafeParseResult<GeneralLedgerReport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GeneralLedgerReport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GeneralLedgerReport' from JSON`,
  );
}
