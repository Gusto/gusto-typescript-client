/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Rehire,
  Rehire$inboundSchema,
  Rehire$Outbound,
  Rehire$outboundSchema,
} from "../components/rehire.js";
import {
  RehireBody,
  RehireBody$inboundSchema,
  RehireBody$Outbound,
  RehireBody$outboundSchema,
} from "../components/rehirebody.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1EmployeesEmployeeIdRehireRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  rehireBody: RehireBody;
};

export type PostV1EmployeesEmployeeIdRehireResponse = {
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
  rehire?: Rehire | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<
  PostV1EmployeesEmployeeIdRehireRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  "Rehire-Body": RehireBody$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "Rehire-Body": "rehireBody",
  });
});

/** @internal */
export type PostV1EmployeesEmployeeIdRehireRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  "Rehire-Body": RehireBody$Outbound;
};

/** @internal */
export const PostV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<
  PostV1EmployeesEmployeeIdRehireRequest$Outbound,
  z.ZodTypeDef,
  PostV1EmployeesEmployeeIdRehireRequest
> = z.object({
  employeeId: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  rehireBody: RehireBody$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
    rehireBody: "Rehire-Body",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesEmployeeIdRehireRequest$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdRehireRequest$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdRehireRequest$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
  export type Outbound = PostV1EmployeesEmployeeIdRehireRequest$Outbound;
}

export function postV1EmployeesEmployeeIdRehireRequestToJSON(
  postV1EmployeesEmployeeIdRehireRequest:
    PostV1EmployeesEmployeeIdRehireRequest,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdRehireRequest$outboundSchema.parse(
      postV1EmployeesEmployeeIdRehireRequest,
    ),
  );
}

export function postV1EmployeesEmployeeIdRehireRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1EmployeesEmployeeIdRehireRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdRehireRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1EmployeesEmployeeIdRehireRequest' from JSON`,
  );
}

/** @internal */
export const PostV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<
  PostV1EmployeesEmployeeIdRehireResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Rehire: Rehire$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Rehire": "rehire",
  });
});

/** @internal */
export type PostV1EmployeesEmployeeIdRehireResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Rehire?: Rehire$Outbound | undefined;
};

/** @internal */
export const PostV1EmployeesEmployeeIdRehireResponse$outboundSchema: z.ZodType<
  PostV1EmployeesEmployeeIdRehireResponse$Outbound,
  z.ZodTypeDef,
  PostV1EmployeesEmployeeIdRehireResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  rehire: Rehire$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    rehire: "Rehire",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1EmployeesEmployeeIdRehireResponse$ {
  /** @deprecated use `PostV1EmployeesEmployeeIdRehireResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1EmployeesEmployeeIdRehireResponse$inboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdRehireResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1EmployeesEmployeeIdRehireResponse$outboundSchema;
  /** @deprecated use `PostV1EmployeesEmployeeIdRehireResponse$Outbound` instead. */
  export type Outbound = PostV1EmployeesEmployeeIdRehireResponse$Outbound;
}

export function postV1EmployeesEmployeeIdRehireResponseToJSON(
  postV1EmployeesEmployeeIdRehireResponse:
    PostV1EmployeesEmployeeIdRehireResponse,
): string {
  return JSON.stringify(
    PostV1EmployeesEmployeeIdRehireResponse$outboundSchema.parse(
      postV1EmployeesEmployeeIdRehireResponse,
    ),
  );
}

export function postV1EmployeesEmployeeIdRehireResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1EmployeesEmployeeIdRehireResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1EmployeesEmployeeIdRehireResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1EmployeesEmployeeIdRehireResponse' from JSON`,
  );
}
