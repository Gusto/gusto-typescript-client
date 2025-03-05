/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Employee,
  Employee$inboundSchema,
  Employee$Outbound,
  Employee$outboundSchema,
} from "../components/employee.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Include = {
  AllCompensations: "all_compensations",
  CustomFields: "custom_fields",
} as const;
export type Include = ClosedEnum<typeof Include>;

export type GetV1CompaniesCompanyIdEmployeesRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * Filters employees by the provided boolean
   */
  terminated?: boolean | undefined;
  /**
   * Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options:
   *
   * @remarks
   * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
   * - custom_fields: Include employees' custom fields
   */
  include?: Array<Include> | undefined;
  /**
   * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
   */
  page?: number | undefined;
  /**
   * Number of objects per page. For majority of endpoints will default to 25
   */
  per?: number | undefined;
  /**
   * A string to search for in the object's names
   */
  searchTerm?: string | undefined;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type GetV1CompaniesCompanyIdEmployeesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Example response
   */
  employeeList?: Array<Employee> | undefined;
};

/** @internal */
export const Include$inboundSchema: z.ZodNativeEnum<typeof Include> = z
  .nativeEnum(Include);

/** @internal */
export const Include$outboundSchema: z.ZodNativeEnum<typeof Include> =
  Include$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Include$ {
  /** @deprecated use `Include$inboundSchema` instead. */
  export const inboundSchema = Include$inboundSchema;
  /** @deprecated use `Include$outboundSchema` instead. */
  export const outboundSchema = Include$outboundSchema;
}

/** @internal */
export const GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdEmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string(),
  terminated: z.boolean().optional(),
  include: z.array(Include$inboundSchema).optional(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
  search_term: z.string().optional(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "search_term": "searchTerm",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompaniesCompanyIdEmployeesRequest$Outbound = {
  company_id: string;
  terminated?: boolean | undefined;
  include?: Array<string> | undefined;
  page?: number | undefined;
  per?: number | undefined;
  search_term?: string | undefined;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompaniesCompanyIdEmployeesRequest$outboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdEmployeesRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesCompanyIdEmployeesRequest
> = z.object({
  companyId: z.string(),
  terminated: z.boolean().optional(),
  include: z.array(Include$outboundSchema).optional(),
  page: z.number().int().optional(),
  per: z.number().int().optional(),
  searchTerm: z.string().optional(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    searchTerm: "search_term",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdEmployeesRequest$ {
  /** @deprecated use `GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEmployeesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdEmployeesRequest$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEmployeesRequest$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdEmployeesRequest$Outbound;
}

export function getV1CompaniesCompanyIdEmployeesRequestToJSON(
  getV1CompaniesCompanyIdEmployeesRequest:
    GetV1CompaniesCompanyIdEmployeesRequest,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdEmployeesRequest$outboundSchema.parse(
      getV1CompaniesCompanyIdEmployeesRequest,
    ),
  );
}

export function getV1CompaniesCompanyIdEmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdEmployeesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdEmployeesRequest' from JSON`,
  );
}

/** @internal */
export const GetV1CompaniesCompanyIdEmployeesResponse$inboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdEmployeesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Employee-List": z.array(Employee$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Employee-List": "employeeList",
  });
});

/** @internal */
export type GetV1CompaniesCompanyIdEmployeesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Employee-List"?: Array<Employee$Outbound> | undefined;
};

/** @internal */
export const GetV1CompaniesCompanyIdEmployeesResponse$outboundSchema: z.ZodType<
  GetV1CompaniesCompanyIdEmployeesResponse$Outbound,
  z.ZodTypeDef,
  GetV1CompaniesCompanyIdEmployeesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  employeeList: z.array(Employee$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    employeeList: "Employee-List",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompaniesCompanyIdEmployeesResponse$ {
  /** @deprecated use `GetV1CompaniesCompanyIdEmployeesResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetV1CompaniesCompanyIdEmployeesResponse$inboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEmployeesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetV1CompaniesCompanyIdEmployeesResponse$outboundSchema;
  /** @deprecated use `GetV1CompaniesCompanyIdEmployeesResponse$Outbound` instead. */
  export type Outbound = GetV1CompaniesCompanyIdEmployeesResponse$Outbound;
}

export function getV1CompaniesCompanyIdEmployeesResponseToJSON(
  getV1CompaniesCompanyIdEmployeesResponse:
    GetV1CompaniesCompanyIdEmployeesResponse,
): string {
  return JSON.stringify(
    GetV1CompaniesCompanyIdEmployeesResponse$outboundSchema.parse(
      getV1CompaniesCompanyIdEmployeesResponse,
    ),
  );
}

export function getV1CompaniesCompanyIdEmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV1CompaniesCompanyIdEmployeesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV1CompaniesCompanyIdEmployeesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV1CompaniesCompanyIdEmployeesResponse' from JSON`,
  );
}
