/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeStateTaxesList,
  EmployeeStateTaxesList$inboundSchema,
  EmployeeStateTaxesList$Outbound,
  EmployeeStateTaxesList$outboundSchema,
} from "../components/employeestatetaxeslist.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Determines the date-based API version associated with your API call.
 */
export const PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion = {
  TwoThousandAndTwentyFourMinus04Minus01: "2024-04-01",
} as const;
/**
 * Determines the date-based API version associated with your API call.
 */
export type PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion =
  ClosedEnum<typeof PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion>;

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

export type PutV1EmployeesEmployeeIdStateTaxesRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
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

export type PutV1EmployeesEmployeeIdStateTaxesRequest = {
  /**
   * Determines the date-based API version associated with your API call.
   */
  xGustoAPIVersion?:
    | PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
    | undefined;
  /**
   * The UUID of the employee
   */
  employeeUuid: string;
  requestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody;
};

export type PutV1EmployeesEmployeeIdStateTaxesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * successful
   */
  employeeStateTaxesList?: Array<EmployeeStateTaxesList> | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$inboundSchema:
  z.ZodNativeEnum<
    typeof PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
  > = z.nativeEnum(PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion);

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$outboundSchema:
  z.ZodNativeEnum<
    typeof PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
  > = PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$outboundSchema;
}

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
export const PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesRequestBody,
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
export type PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound = {
  version: string;
  type: string;
  split_by?: string | undefined;
  splits?: Array<Splits$Outbound> | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdStateTaxesRequestBody
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
export namespace PutV1EmployeesEmployeeIdStateTaxesRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdStateTaxesRequestBodyToJSON(
  putV1EmployeesEmployeeIdStateTaxesRequestBody:
    PutV1EmployeesEmployeeIdStateTaxesRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdStateTaxesRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdStateTaxesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdStateTaxesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdStateTaxesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema: z.ZodType<
  PutV1EmployeesEmployeeIdStateTaxesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version":
    PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$inboundSchema
      .default("2024-04-01"),
  employee_uuid: z.string(),
  RequestBody: z.lazy(() =>
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "employee_uuid": "employeeUuid",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound = {
  "X-Gusto-API-Version": string;
  employee_uuid: string;
  RequestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdStateTaxesRequest
  > = z.object({
    xGustoAPIVersion:
      PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$outboundSchema
        .default("2024-04-01"),
    employeeUuid: z.string(),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      xGustoAPIVersion: "X-Gusto-API-Version",
      employeeUuid: "employee_uuid",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdStateTaxesRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound;
}

export function putV1EmployeesEmployeeIdStateTaxesRequestToJSON(
  putV1EmployeesEmployeeIdStateTaxesRequest:
    PutV1EmployeesEmployeeIdStateTaxesRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdStateTaxesRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdStateTaxesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdStateTaxesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdStateTaxesRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema:
  z.ZodType<PutV1EmployeesEmployeeIdStateTaxesResponse, z.ZodTypeDef, unknown> =
    z.object({
      HttpMeta: HTTPMetadata$inboundSchema,
      "Employee-State-Taxes-List": z.array(EmployeeStateTaxesList$inboundSchema)
        .optional(),
    }).transform((v) => {
      return remap$(v, {
        "HttpMeta": "httpMeta",
        "Employee-State-Taxes-List": "employeeStateTaxesList",
      });
    });

/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  "Employee-State-Taxes-List"?:
    | Array<EmployeeStateTaxesList$Outbound>
    | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdStateTaxesResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    employeeStateTaxesList: z.array(EmployeeStateTaxesList$outboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      employeeStateTaxesList: "Employee-State-Taxes-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdStateTaxesResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound;
}

export function putV1EmployeesEmployeeIdStateTaxesResponseToJSON(
  putV1EmployeesEmployeeIdStateTaxesResponse:
    PutV1EmployeesEmployeeIdStateTaxesResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdStateTaxesResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdStateTaxesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdStateTaxesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdStateTaxesResponse' from JSON`,
  );
}
