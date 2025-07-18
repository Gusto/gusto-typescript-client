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
  EmployeeStateTaxesRequest,
  EmployeeStateTaxesRequest$inboundSchema,
  EmployeeStateTaxesRequest$Outbound,
  EmployeeStateTaxesRequest$outboundSchema,
} from "../components/employeestatetaxesrequest.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export const PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion = {
  TwoThousandAndTwentyFourMinus04Minus01: "2024-04-01",
} as const;
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion =
  ClosedEnum<typeof PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion>;

export type PutV1EmployeesEmployeeIdStateTaxesRequest = {
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?:
    | PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
    | undefined;
  /**
   * The UUID of the employee
   */
  employeeUuid: string;
  employeeStateTaxesRequest: EmployeeStateTaxesRequest;
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
export const PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema: z.ZodType<
  PutV1EmployeesEmployeeIdStateTaxesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Gusto-API-Version":
    PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion$inboundSchema
      .default("2024-04-01"),
  employee_uuid: z.string(),
  "Employee-State-Taxes-Request": EmployeeStateTaxesRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "employee_uuid": "employeeUuid",
    "Employee-State-Taxes-Request": "employeeStateTaxesRequest",
  });
});

/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound = {
  "X-Gusto-API-Version": string;
  employee_uuid: string;
  "Employee-State-Taxes-Request": EmployeeStateTaxesRequest$Outbound;
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
    employeeStateTaxesRequest: EmployeeStateTaxesRequest$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      xGustoAPIVersion: "X-Gusto-API-Version",
      employeeUuid: "employee_uuid",
      employeeStateTaxesRequest: "Employee-State-Taxes-Request",
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
