/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeePaymentMethod,
  EmployeePaymentMethod$inboundSchema,
  EmployeePaymentMethod$Outbound,
  EmployeePaymentMethod$outboundSchema,
} from "../components/employeepaymentmethod.js";
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
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export const Type = {
  DirectDeposit: "Direct Deposit",
  Check: "Check",
} as const;
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export const SplitBy = {
  Amount: "Amount",
  Percentage: "Percentage",
} as const;
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export type SplitBy = ClosedEnum<typeof SplitBy>;

export type Splits = {
  /**
   * The bank account ID
   *
   * @remarks
   */
  uuid?: string | undefined;
  /**
   * The bank account name
   */
  name?: string | undefined;
  /**
   * The order of priority for each payment split, with priority 1 being the first bank account paid. Priority must be unique and sequential.
   */
  priority?: number | undefined;
  /**
   * The cents amount allocated for each payment split
   */
  splitAmount?: number | null | undefined;
};

export type PutV1EmployeesEmployeeIdPaymentMethodRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
   */
  version: string;
  /**
   * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
   */
  type: Type;
  /**
   * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
   */
  splitBy?: SplitBy | undefined;
  splits?: Array<Splits> | undefined;
};

export type PutV1EmployeesEmployeeIdPaymentMethodRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody;
};

export type PutV1EmployeesEmployeeIdPaymentMethodResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  employeePaymentMethod?: EmployeePaymentMethod | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const SplitBy$inboundSchema: z.ZodNativeEnum<typeof SplitBy> = z
  .nativeEnum(SplitBy);

/** @internal */
export const SplitBy$outboundSchema: z.ZodNativeEnum<typeof SplitBy> =
  SplitBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SplitBy$ {
  /** @deprecated use `SplitBy$inboundSchema` instead. */
  export const inboundSchema = SplitBy$inboundSchema;
  /** @deprecated use `SplitBy$outboundSchema` instead. */
  export const outboundSchema = SplitBy$outboundSchema;
}

/** @internal */
export const Splits$inboundSchema: z.ZodType<Splits, z.ZodTypeDef, unknown> = z
  .object({
    uuid: z.string().optional(),
    name: z.string().optional(),
    priority: z.number().int().optional(),
    split_amount: z.nullable(z.number().int()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "split_amount": "splitAmount",
    });
  });

/** @internal */
export type Splits$Outbound = {
  uuid?: string | undefined;
  name?: string | undefined;
  priority?: number | undefined;
  split_amount?: number | null | undefined;
};

/** @internal */
export const Splits$outboundSchema: z.ZodType<
  Splits$Outbound,
  z.ZodTypeDef,
  Splits
> = z.object({
  uuid: z.string().optional(),
  name: z.string().optional(),
  priority: z.number().int().optional(),
  splitAmount: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    splitAmount: "split_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Splits$ {
  /** @deprecated use `Splits$inboundSchema` instead. */
  export const inboundSchema = Splits$inboundSchema;
  /** @deprecated use `Splits$outboundSchema` instead. */
  export const outboundSchema = Splits$outboundSchema;
  /** @deprecated use `Splits$Outbound` instead. */
  export type Outbound = Splits$Outbound;
}

export function splitsToJSON(splits: Splits): string {
  return JSON.stringify(Splits$outboundSchema.parse(splits));
}

export function splitsFromJSON(
  jsonString: string,
): SafeParseResult<Splits, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Splits$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Splits' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    version: z.string(),
    type: Type$inboundSchema,
    split_by: SplitBy$inboundSchema.optional(),
    splits: z.array(z.lazy(() => Splits$inboundSchema)).optional(),
  }).transform((v) => {
    return remap$(v, {
      "split_by": "splitBy",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound = {
  version: string;
  type: string;
  split_by?: string | undefined;
  splits?: Array<Splits$Outbound> | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody
  > = z.object({
    version: z.string(),
    type: Type$outboundSchema,
    splitBy: SplitBy$outboundSchema.optional(),
    splits: z.array(z.lazy(() => Splits$outboundSchema)).optional(),
  }).transform((v) => {
    return remap$(v, {
      splitBy: "split_by",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdPaymentMethodRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdPaymentMethodRequestBodyToJSON(
  putV1EmployeesEmployeeIdPaymentMethodRequestBody:
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdPaymentMethodRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdPaymentMethodRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdPaymentMethodRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdPaymentMethodRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdPaymentMethodRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdPaymentMethodRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema
    ),
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
export namespace PutV1EmployeesEmployeeIdPaymentMethodRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound;
}

export function putV1EmployeesEmployeeIdPaymentMethodRequestToJSON(
  putV1EmployeesEmployeeIdPaymentMethodRequest:
    PutV1EmployeesEmployeeIdPaymentMethodRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdPaymentMethodRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdPaymentMethodRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdPaymentMethodRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdPaymentMethodRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdPaymentMethodResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Employee-Payment-Method": EmployeePaymentMethod$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Employee-Payment-Method": "employeePaymentMethod",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Employee-Payment-Method"?: EmployeePaymentMethod$Outbound | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdPaymentMethodResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    employeePaymentMethod: EmployeePaymentMethod$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      employeePaymentMethod: "Employee-Payment-Method",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdPaymentMethodResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound;
}

export function putV1EmployeesEmployeeIdPaymentMethodResponseToJSON(
  putV1EmployeesEmployeeIdPaymentMethodResponse:
    PutV1EmployeesEmployeeIdPaymentMethodResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdPaymentMethodResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdPaymentMethodResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdPaymentMethodResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdPaymentMethodResponse' from JSON`,
  );
}
