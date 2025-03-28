/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Compensation,
  Compensation$inboundSchema,
  Compensation$Outbound,
  Compensation$outboundSchema,
} from "../components/compensation.js";
import {
  FlsaStatusType,
  FlsaStatusType$inboundSchema,
  FlsaStatusType$outboundSchema,
} from "../components/flsastatustype.js";
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
 * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
 */
export const PutV1CompensationsCompensationIdPaymentUnit = {
  Hour: "Hour",
  Week: "Week",
  Month: "Month",
  Year: "Year",
  Paycheck: "Paycheck",
} as const;
/**
 * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
 */
export type PutV1CompensationsCompensationIdPaymentUnit = ClosedEnum<
  typeof PutV1CompensationsCompensationIdPaymentUnit
>;

/**
 * The minimum wage record you want to apply to the compensation
 */
export type PutV1CompensationsCompensationIdMinimumWages = {
  /**
   * The UUID of the minimum wage record. Required if adjust_for_minimum_wage set to true
   */
  uuid?: string | undefined;
};

export type PutV1CompensationsCompensationIdRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  /**
   * The dollar amount paid per payment unit.
   */
  rate?: string | undefined;
  /**
   * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
   */
  paymentUnit?: PutV1CompensationsCompensationIdPaymentUnit | undefined;
  /**
   * The FLSA status for this compensation. Salaried ('Exempt') employees are paid a fixed salary every pay period. Salaried with overtime ('Salaried Nonexempt') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly ('Nonexempt') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees ('Commission Only Exempt') earn wages based only on commission. Commissioned with overtime ('Commission Only Nonexempt') earn wages based on commission, and receive overtime pay when applicable. Owners ('Owner') are employees that own at least twenty percent of the company.
   */
  flsaStatus?: FlsaStatusType | undefined;
  /**
   * Determines whether the compensation should be adjusted for minimum wage. Only applies to Nonexempt employees.
   */
  adjustForMinimumWage?: boolean | undefined;
  minimumWages?:
    | Array<PutV1CompensationsCompensationIdMinimumWages>
    | undefined;
};

export type PutV1CompensationsCompensationIdRequest = {
  /**
   * The UUID of the compensation
   */
  compensationId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1CompensationsCompensationIdRequestBody;
};

export type PutV1CompensationsCompensationIdResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  compensation?: Compensation | undefined;
};

/** @internal */
export const PutV1CompensationsCompensationIdPaymentUnit$inboundSchema:
  z.ZodNativeEnum<typeof PutV1CompensationsCompensationIdPaymentUnit> = z
    .nativeEnum(PutV1CompensationsCompensationIdPaymentUnit);

/** @internal */
export const PutV1CompensationsCompensationIdPaymentUnit$outboundSchema:
  z.ZodNativeEnum<typeof PutV1CompensationsCompensationIdPaymentUnit> =
    PutV1CompensationsCompensationIdPaymentUnit$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompensationsCompensationIdPaymentUnit$ {
  /** @deprecated use `PutV1CompensationsCompensationIdPaymentUnit$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompensationsCompensationIdPaymentUnit$inboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdPaymentUnit$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompensationsCompensationIdPaymentUnit$outboundSchema;
}

/** @internal */
export const PutV1CompensationsCompensationIdMinimumWages$inboundSchema:
  z.ZodType<
    PutV1CompensationsCompensationIdMinimumWages,
    z.ZodTypeDef,
    unknown
  > = z.object({
    uuid: z.string().optional(),
  });

/** @internal */
export type PutV1CompensationsCompensationIdMinimumWages$Outbound = {
  uuid?: string | undefined;
};

/** @internal */
export const PutV1CompensationsCompensationIdMinimumWages$outboundSchema:
  z.ZodType<
    PutV1CompensationsCompensationIdMinimumWages$Outbound,
    z.ZodTypeDef,
    PutV1CompensationsCompensationIdMinimumWages
  > = z.object({
    uuid: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompensationsCompensationIdMinimumWages$ {
  /** @deprecated use `PutV1CompensationsCompensationIdMinimumWages$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompensationsCompensationIdMinimumWages$inboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdMinimumWages$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompensationsCompensationIdMinimumWages$outboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdMinimumWages$Outbound` instead. */
  export type Outbound = PutV1CompensationsCompensationIdMinimumWages$Outbound;
}

export function putV1CompensationsCompensationIdMinimumWagesToJSON(
  putV1CompensationsCompensationIdMinimumWages:
    PutV1CompensationsCompensationIdMinimumWages,
): string {
  return JSON.stringify(
    PutV1CompensationsCompensationIdMinimumWages$outboundSchema.parse(
      putV1CompensationsCompensationIdMinimumWages,
    ),
  );
}

export function putV1CompensationsCompensationIdMinimumWagesFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompensationsCompensationIdMinimumWages,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompensationsCompensationIdMinimumWages$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompensationsCompensationIdMinimumWages' from JSON`,
  );
}

/** @internal */
export const PutV1CompensationsCompensationIdRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompensationsCompensationIdRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    version: z.string(),
    rate: z.string().optional(),
    payment_unit: PutV1CompensationsCompensationIdPaymentUnit$inboundSchema
      .optional(),
    flsa_status: FlsaStatusType$inboundSchema.optional(),
    adjust_for_minimum_wage: z.boolean().optional(),
    minimum_wages: z.array(
      z.lazy(() => PutV1CompensationsCompensationIdMinimumWages$inboundSchema),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "payment_unit": "paymentUnit",
      "flsa_status": "flsaStatus",
      "adjust_for_minimum_wage": "adjustForMinimumWage",
      "minimum_wages": "minimumWages",
    });
  });

/** @internal */
export type PutV1CompensationsCompensationIdRequestBody$Outbound = {
  version: string;
  rate?: string | undefined;
  payment_unit?: string | undefined;
  flsa_status?: string | undefined;
  adjust_for_minimum_wage?: boolean | undefined;
  minimum_wages?:
    | Array<PutV1CompensationsCompensationIdMinimumWages$Outbound>
    | undefined;
};

/** @internal */
export const PutV1CompensationsCompensationIdRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompensationsCompensationIdRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompensationsCompensationIdRequestBody
  > = z.object({
    version: z.string(),
    rate: z.string().optional(),
    paymentUnit: PutV1CompensationsCompensationIdPaymentUnit$outboundSchema
      .optional(),
    flsaStatus: FlsaStatusType$outboundSchema.optional(),
    adjustForMinimumWage: z.boolean().optional(),
    minimumWages: z.array(
      z.lazy(() => PutV1CompensationsCompensationIdMinimumWages$outboundSchema),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      paymentUnit: "payment_unit",
      flsaStatus: "flsa_status",
      adjustForMinimumWage: "adjust_for_minimum_wage",
      minimumWages: "minimum_wages",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompensationsCompensationIdRequestBody$ {
  /** @deprecated use `PutV1CompensationsCompensationIdRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompensationsCompensationIdRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompensationsCompensationIdRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdRequestBody$Outbound` instead. */
  export type Outbound = PutV1CompensationsCompensationIdRequestBody$Outbound;
}

export function putV1CompensationsCompensationIdRequestBodyToJSON(
  putV1CompensationsCompensationIdRequestBody:
    PutV1CompensationsCompensationIdRequestBody,
): string {
  return JSON.stringify(
    PutV1CompensationsCompensationIdRequestBody$outboundSchema.parse(
      putV1CompensationsCompensationIdRequestBody,
    ),
  );
}

export function putV1CompensationsCompensationIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompensationsCompensationIdRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompensationsCompensationIdRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompensationsCompensationIdRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompensationsCompensationIdRequest$inboundSchema: z.ZodType<
  PutV1CompensationsCompensationIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  compensation_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() =>
    PutV1CompensationsCompensationIdRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "compensation_id": "compensationId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1CompensationsCompensationIdRequest$Outbound = {
  compensation_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1CompensationsCompensationIdRequestBody$Outbound;
};

/** @internal */
export const PutV1CompensationsCompensationIdRequest$outboundSchema: z.ZodType<
  PutV1CompensationsCompensationIdRequest$Outbound,
  z.ZodTypeDef,
  PutV1CompensationsCompensationIdRequest
> = z.object({
  compensationId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() =>
    PutV1CompensationsCompensationIdRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    compensationId: "compensation_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompensationsCompensationIdRequest$ {
  /** @deprecated use `PutV1CompensationsCompensationIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompensationsCompensationIdRequest$inboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompensationsCompensationIdRequest$outboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdRequest$Outbound` instead. */
  export type Outbound = PutV1CompensationsCompensationIdRequest$Outbound;
}

export function putV1CompensationsCompensationIdRequestToJSON(
  putV1CompensationsCompensationIdRequest:
    PutV1CompensationsCompensationIdRequest,
): string {
  return JSON.stringify(
    PutV1CompensationsCompensationIdRequest$outboundSchema.parse(
      putV1CompensationsCompensationIdRequest,
    ),
  );
}

export function putV1CompensationsCompensationIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompensationsCompensationIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompensationsCompensationIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompensationsCompensationIdRequest' from JSON`,
  );
}

/** @internal */
export const PutV1CompensationsCompensationIdResponse$inboundSchema: z.ZodType<
  PutV1CompensationsCompensationIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Compensation: Compensation$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Compensation": "compensation",
  });
});

/** @internal */
export type PutV1CompensationsCompensationIdResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Compensation?: Compensation$Outbound | undefined;
};

/** @internal */
export const PutV1CompensationsCompensationIdResponse$outboundSchema: z.ZodType<
  PutV1CompensationsCompensationIdResponse$Outbound,
  z.ZodTypeDef,
  PutV1CompensationsCompensationIdResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  compensation: Compensation$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    compensation: "Compensation",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompensationsCompensationIdResponse$ {
  /** @deprecated use `PutV1CompensationsCompensationIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompensationsCompensationIdResponse$inboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompensationsCompensationIdResponse$outboundSchema;
  /** @deprecated use `PutV1CompensationsCompensationIdResponse$Outbound` instead. */
  export type Outbound = PutV1CompensationsCompensationIdResponse$Outbound;
}

export function putV1CompensationsCompensationIdResponseToJSON(
  putV1CompensationsCompensationIdResponse:
    PutV1CompensationsCompensationIdResponse,
): string {
  return JSON.stringify(
    PutV1CompensationsCompensationIdResponse$outboundSchema.parse(
      putV1CompensationsCompensationIdResponse,
    ),
  );
}

export function putV1CompensationsCompensationIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompensationsCompensationIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompensationsCompensationIdResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompensationsCompensationIdResponse' from JSON`,
  );
}
