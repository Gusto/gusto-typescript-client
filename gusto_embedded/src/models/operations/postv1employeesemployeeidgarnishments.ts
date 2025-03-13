/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Garnishment,
  Garnishment$inboundSchema,
  Garnishment$Outbound,
  Garnishment$outboundSchema,
} from "../components/garnishment.js";
import {
  GarnishmentChildSupport,
  GarnishmentChildSupport$inboundSchema,
  GarnishmentChildSupport$Outbound,
  GarnishmentChildSupport$outboundSchema,
} from "../components/garnishmentchildsupport.js";
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
 * The specific type of garnishment for court ordered garnishments.
 */
export const GarnishmentType = {
  ChildSupport: "child_support",
  FederalTaxLien: "federal_tax_lien",
  StateTaxLien: "state_tax_lien",
  StudentLoan: "student_loan",
  CreditorGarnishment: "creditor_garnishment",
  FederalLoan: "federal_loan",
  OtherGarnishment: "other_garnishment",
} as const;
/**
 * The specific type of garnishment for court ordered garnishments.
 */
export type GarnishmentType = ClosedEnum<typeof GarnishmentType>;

export type PostV1EmployeesEmployeeIdGarnishmentsRequestBody = {
  /**
   * Whether or not this garnishment is currently active.
   */
  active?: boolean | undefined;
  /**
   * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. "8.00".
   */
  amount: string;
  /**
   * The description of the garnishment.
   */
  description?: string | undefined;
  /**
   * Whether the garnishment is court ordered.
   */
  courtOrdered: boolean;
  /**
   * The specific type of garnishment for court ordered garnishments.
   */
  garnishmentType?: GarnishmentType | null | undefined;
  /**
   * The number of times to apply the garnishment. Ignored if recurring is true.
   */
  times?: number | null | undefined;
  /**
   * Whether the garnishment should recur indefinitely.
   */
  recurring?: boolean | undefined;
  /**
   * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. "200.00".
   */
  annualMaximum?: string | null | undefined;
  /**
   * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. "16.00".
   */
  payPeriodMaximum?: string | null | undefined;
  /**
   * Whether the amount should be treated as a percentage to be deducted per pay period.
   */
  deductAsPercentage?: boolean | undefined;
  /**
   * A maximum total deduction for the lifetime of this garnishment. A null value indicates no maximum.
   */
  totalAmount?: string | undefined;
  /**
   * Additional child support order details
   */
  childSupport?: GarnishmentChildSupport | null | undefined;
};

export type PostV1EmployeesEmployeeIdGarnishmentsRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PostV1EmployeesEmployeeIdGarnishmentsRequestBody;
};

export type PostV1EmployeesEmployeeIdGarnishmentsResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  garnishment?: Garnishment | undefined;
};

/** @internal */
export const GarnishmentType$inboundSchema: z.ZodNativeEnum<
  typeof GarnishmentType
> = z.nativeEnum(GarnishmentType);

/** @internal */
export const GarnishmentType$outboundSchema: z.ZodNativeEnum<
  typeof GarnishmentType
> = GarnishmentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GarnishmentType$ {
  /** @deprecated use `GarnishmentType$inboundSchema` instead. */
  export const inboundSchema = GarnishmentType$inboundSchema;
  /** @deprecated use `GarnishmentType$outboundSchema` instead. */
  export const outboundSchema = GarnishmentType$outboundSchema;
}

/** @internal */
export const PostV1EmployeesEmployeeIdGarnishmentsRequestBody$inboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    active: z.boolean().default(true),
    amount: z.string(),
    description: z.string().optional(),
    court_ordered: z.boolean(),
    garnishment_type: z.nullable(GarnishmentType$inboundSchema).optional(),
    times: z.nullable(z.number().int()).default(null),
    recurring: z.boolean().default(false),
    annual_maximum: z.nullable(z.string()).default(null),
    pay_period_maximum: z.nullable(z.string()).default(null),
    deduct_as_percentage: z.boolean().default(false),
    total_amount: z.string().optional(),
    child_support: z.nullable(GarnishmentChildSupport$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "court_ordered": "courtOrdered",
      "garnishment_type": "garnishmentType",
      "annual_maximum": "annualMaximum",
      "pay_period_maximum": "payPeriodMaximum",
      "deduct_as_percentage": "deductAsPercentage",
      "total_amount": "totalAmount",
      "child_support": "childSupport",
    });
  });

/** @internal */
export type PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound = {
  active: boolean;
  amount: string;
  description?: string | undefined;
  court_ordered: boolean;
  garnishment_type?: string | null | undefined;
  times: number | null;
  recurring: boolean;
  annual_maximum: string | null;
  pay_period_maximum: string | null;
  deduct_as_percentage: boolean;
  total_amount?: string | undefined;
  child_support?: GarnishmentChildSupport$Outbound | null | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdGarnishmentsRequestBody$outboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody
  > = z.object({
    active: z.boolean().default(true),
    amount: z.string(),
    description: z.string().optional(),
    courtOrdered: z.boolean(),
    garnishmentType: z.nullable(GarnishmentType$outboundSchema).optional(),
    times: z.nullable(z.number().int()).default(null),
    recurring: z.boolean().default(false),
    annualMaximum: z.nullable(z.string()).default(null),
    payPeriodMaximum: z.nullable(z.string()).default(null),
    deductAsPercentage: z.boolean().default(false),
    totalAmount: z.string().optional(),
    childSupport: z.nullable(GarnishmentChildSupport$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      courtOrdered: "court_ordered",
      garnishmentType: "garnishment_type",
      annualMaximum: "annual_maximum",
      payPeriodMaximum: "pay_period_maximum",
      deductAsPercentage: "deduct_as_percentage",
      totalAmount: "total_amount",
      childSupport: "child_support",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesEmployeeIdGarnishmentsRequestBody$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound;
}

export function postV1EmployeesEmployeeIdGarnishmentsRequestBodyToJSON(
  postV1EmployeesEmployeeIdGarnishmentsRequestBody:
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdGarnishmentsRequestBody$outboundSchema.parse(
      postV1EmployeesEmployeeIdGarnishmentsRequestBody,
    ),
  );
}

export function postV1EmployeesEmployeeIdGarnishmentsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdGarnishmentsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdGarnishmentsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdGarnishmentsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdGarnishmentsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostV1EmployeesEmployeeIdGarnishmentsRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1EmployeesEmployeeIdGarnishmentsRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1EmployeesEmployeeIdGarnishmentsRequestBody$Outbound;
};

/** @internal */
export const PostV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdGarnishmentsRequest$Outbound,
    z.ZodTypeDef,
    PostV1EmployeesEmployeeIdGarnishmentsRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostV1EmployeesEmployeeIdGarnishmentsRequestBody$outboundSchema
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
export namespace PostV1EmployeesEmployeeIdGarnishmentsRequest$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsRequest$Outbound` instead. */
  export type Outbound = PostV1EmployeesEmployeeIdGarnishmentsRequest$Outbound;
}

export function postV1EmployeesEmployeeIdGarnishmentsRequestToJSON(
  postV1EmployeesEmployeeIdGarnishmentsRequest:
    PostV1EmployeesEmployeeIdGarnishmentsRequest,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdGarnishmentsRequest$outboundSchema.parse(
      postV1EmployeesEmployeeIdGarnishmentsRequest,
    ),
  );
}

export function postV1EmployeesEmployeeIdGarnishmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdGarnishmentsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdGarnishmentsRequest' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdGarnishmentsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    Garnishment: Garnishment$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Garnishment": "garnishment",
    });
  });

/** @internal */
export type PostV1EmployeesEmployeeIdGarnishmentsResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Garnishment?: Garnishment$Outbound | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdGarnishmentsResponse$outboundSchema:
  z.ZodType<
    PostV1EmployeesEmployeeIdGarnishmentsResponse$Outbound,
    z.ZodTypeDef,
    PostV1EmployeesEmployeeIdGarnishmentsResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    garnishment: Garnishment$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      garnishment: "Garnishment",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesEmployeeIdGarnishmentsResponse$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdGarnishmentsResponse$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdGarnishmentsResponse$Outbound` instead. */
  export type Outbound = PostV1EmployeesEmployeeIdGarnishmentsResponse$Outbound;
}

export function postV1EmployeesEmployeeIdGarnishmentsResponseToJSON(
  postV1EmployeesEmployeeIdGarnishmentsResponse:
    PostV1EmployeesEmployeeIdGarnishmentsResponse,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdGarnishmentsResponse$outboundSchema.parse(
      postV1EmployeesEmployeeIdGarnishmentsResponse,
    ),
  );
}

export function postV1EmployeesEmployeeIdGarnishmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdGarnishmentsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdGarnishmentsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdGarnishmentsResponse' from JSON`,
  );
}
