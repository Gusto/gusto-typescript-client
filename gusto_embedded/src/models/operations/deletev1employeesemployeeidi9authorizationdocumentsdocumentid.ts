/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest =
  {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The UUID of the document
     */
    documentId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
  };

export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse =
  {
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
  };

/** @internal */
export const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$inboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    document_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "document_id": "documentId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound =
  {
    employee_id: string;
    document_id: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$outboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest
  > = z.object({
    employeeId: z.string(),
    documentId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      documentId: "document_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$ {
  /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$inboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$outboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound;
}

export function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequestToJSON(
  deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest:
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest,
): string {
  return JSON.stringify(
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$outboundSchema
      .parse(
        deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest,
      ),
  );
}

export function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$inboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
  };

/** @internal */
export const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$outboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound,
    z.ZodTypeDef,
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$ {
  /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$inboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$outboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound` instead. */
  export type Outbound =
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound;
}

export function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponseToJSON(
  deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse:
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse,
): string {
  return JSON.stringify(
    DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$outboundSchema
      .parse(
        deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse,
      ),
  );
}

export function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse' from JSON`,
  );
}
