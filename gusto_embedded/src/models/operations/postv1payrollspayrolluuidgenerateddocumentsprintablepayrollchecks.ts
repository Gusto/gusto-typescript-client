/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import {
  PayrollCheck,
  PayrollCheck$inboundSchema,
  PayrollCheck$Outbound,
  PayrollCheck$outboundSchema,
} from "../components/payrollcheck.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
 */
export const PrintingFormat = {
  Top: "top",
  Bottom: "bottom",
} as const;
/**
 * The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
 */
export type PrintingFormat = ClosedEnum<typeof PrintingFormat>;

export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody =
  {
    /**
     * The type of check stock being printed. Check the "Types of check stock" section in this [link](https://support.gusto.com/article/999877761000000/Pay-your-team-by-check) for more info on check types
     */
    printingFormat: PrintingFormat;
    /**
     * The starting check number we will start generating checks from. Use to override the sequence that will be used to generate check numbers.
     */
    startingCheckNumber?: number | undefined;
  };

export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest =
  {
    /**
     * The UUID of the payroll
     */
    payrollUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody:
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody;
  };

export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse =
  {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    payrollCheck?: PayrollCheck | undefined;
  };

/** @internal */
export const PrintingFormat$inboundSchema: z.ZodNativeEnum<
  typeof PrintingFormat
> = z.nativeEnum(PrintingFormat);

/** @internal */
export const PrintingFormat$outboundSchema: z.ZodNativeEnum<
  typeof PrintingFormat
> = PrintingFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrintingFormat$ {
  /** @deprecated use `PrintingFormat$inboundSchema` instead. */
  export const inboundSchema = PrintingFormat$inboundSchema;
  /** @deprecated use `PrintingFormat$outboundSchema` instead. */
  export const outboundSchema = PrintingFormat$outboundSchema;
}

/** @internal */
export const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    printing_format: PrintingFormat$inboundSchema,
    starting_check_number: z.number().int().optional(),
  }).transform((v) => {
    return remap$(v, {
      "printing_format": "printingFormat",
      "starting_check_number": "startingCheckNumber",
    });
  });

/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound =
  {
    printing_format: string;
    starting_check_number?: number | undefined;
  };

/** @internal */
export const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody
  > = z.object({
    printingFormat: PrintingFormat$outboundSchema,
    startingCheckNumber: z.number().int().optional(),
  }).transform((v) => {
    return remap$(v, {
      printingFormat: "printing_format",
      startingCheckNumber: "starting_check_number",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$ {
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound;
}

export function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBodyToJSON(
  postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody:
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody,
): string {
  return JSON.stringify(
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema
      .parse(
        postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody,
      ),
  );
}

export function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$inboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    payroll_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "payroll_uuid": "payrollUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound =
  {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody:
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$Outbound;
  };

/** @internal */
export const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound,
    z.ZodTypeDef,
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest
  > = z.object({
    payrollUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      payrollUuid: "payroll_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$ {
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$inboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound` instead. */
  export type Outbound =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$Outbound;
}

export function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestToJSON(
  postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest:
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
): string {
  return JSON.stringify(
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$outboundSchema
      .parse(
        postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
      ),
  );
}

export function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest' from JSON`,
  );
}

/** @internal */
export const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
    "Payroll-Check": PayrollCheck$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "Payroll-Check": "payrollCheck",
    });
  });

/** @internal */
export type PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound =
  {
    HttpMeta: HTTPMetadata$Outbound;
    "Payroll-Check"?: PayrollCheck$Outbound | undefined;
  };

/** @internal */
export const PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$outboundSchema:
  z.ZodType<
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound,
    z.ZodTypeDef,
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
    payrollCheck: PayrollCheck$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      payrollCheck: "Payroll-Check",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$ {
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$outboundSchema;
  /** @deprecated use `PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound` instead. */
  export type Outbound =
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$Outbound;
}

export function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponseToJSON(
  postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse:
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse,
): string {
  return JSON.stringify(
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$outboundSchema
      .parse(
        postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse,
      ),
  );
}

export function postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse' from JSON`,
  );
}
