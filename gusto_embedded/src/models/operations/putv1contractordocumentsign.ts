/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Fields = {
  /**
   * Unique identifier of the field
   */
  key?: string | undefined;
  /**
   * Value for the field
   */
  value?: string | undefined;
};

export type PutV1ContractorDocumentSignRequestBody = {
  /**
   * List of fields and the values they will be set to.
   */
  fields: Array<Fields>;
  /**
   * Whether you agree to sign electronically
   */
  agree: boolean;
  /**
   * The IP address of the signatory who signed the form.
   */
  signedByIpAddress: string;
};

export type PutV1ContractorDocumentSignRequest = {
  /**
   * The ID or UUID of the document
   */
  documentUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1ContractorDocumentSignRequestBody;
};

export type PutV1ContractorDocumentSignResponse = {
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
  documentSigned?: components.DocumentSigned | undefined;
};

/** @internal */
export const Fields$inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown> = z
  .object({
    key: z.string().optional(),
    value: z.string().optional(),
  });

/** @internal */
export type Fields$Outbound = {
  key?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const Fields$outboundSchema: z.ZodType<
  Fields$Outbound,
  z.ZodTypeDef,
  Fields
> = z.object({
  key: z.string().optional(),
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Fields$ {
  /** @deprecated use `Fields$inboundSchema` instead. */
  export const inboundSchema = Fields$inboundSchema;
  /** @deprecated use `Fields$outboundSchema` instead. */
  export const outboundSchema = Fields$outboundSchema;
  /** @deprecated use `Fields$Outbound` instead. */
  export type Outbound = Fields$Outbound;
}

export function fieldsToJSON(fields: Fields): string {
  return JSON.stringify(Fields$outboundSchema.parse(fields));
}

export function fieldsFromJSON(
  jsonString: string,
): SafeParseResult<Fields, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Fields$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Fields' from JSON`,
  );
}

/** @internal */
export const PutV1ContractorDocumentSignRequestBody$inboundSchema: z.ZodType<
  PutV1ContractorDocumentSignRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.array(z.lazy(() => Fields$inboundSchema)),
  agree: z.boolean(),
  signed_by_ip_address: z.string(),
}).transform((v) => {
  return remap$(v, {
    "signed_by_ip_address": "signedByIpAddress",
  });
});

/** @internal */
export type PutV1ContractorDocumentSignRequestBody$Outbound = {
  fields: Array<Fields$Outbound>;
  agree: boolean;
  signed_by_ip_address: string;
};

/** @internal */
export const PutV1ContractorDocumentSignRequestBody$outboundSchema: z.ZodType<
  PutV1ContractorDocumentSignRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1ContractorDocumentSignRequestBody
> = z.object({
  fields: z.array(z.lazy(() => Fields$outboundSchema)),
  agree: z.boolean(),
  signedByIpAddress: z.string(),
}).transform((v) => {
  return remap$(v, {
    signedByIpAddress: "signed_by_ip_address",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorDocumentSignRequestBody$ {
  /** @deprecated use `PutV1ContractorDocumentSignRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorDocumentSignRequestBody$inboundSchema;
  /** @deprecated use `PutV1ContractorDocumentSignRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorDocumentSignRequestBody$outboundSchema;
  /** @deprecated use `PutV1ContractorDocumentSignRequestBody$Outbound` instead. */
  export type Outbound = PutV1ContractorDocumentSignRequestBody$Outbound;
}

export function putV1ContractorDocumentSignRequestBodyToJSON(
  putV1ContractorDocumentSignRequestBody:
    PutV1ContractorDocumentSignRequestBody,
): string {
  return JSON.stringify(
    PutV1ContractorDocumentSignRequestBody$outboundSchema.parse(
      putV1ContractorDocumentSignRequestBody,
    ),
  );
}

export function putV1ContractorDocumentSignRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1ContractorDocumentSignRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorDocumentSignRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1ContractorDocumentSignRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1ContractorDocumentSignRequest$inboundSchema: z.ZodType<
  PutV1ContractorDocumentSignRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  document_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() =>
    PutV1ContractorDocumentSignRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "document_uuid": "documentUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1ContractorDocumentSignRequest$Outbound = {
  document_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1ContractorDocumentSignRequestBody$Outbound;
};

/** @internal */
export const PutV1ContractorDocumentSignRequest$outboundSchema: z.ZodType<
  PutV1ContractorDocumentSignRequest$Outbound,
  z.ZodTypeDef,
  PutV1ContractorDocumentSignRequest
> = z.object({
  documentUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() =>
    PutV1ContractorDocumentSignRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    documentUuid: "document_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorDocumentSignRequest$ {
  /** @deprecated use `PutV1ContractorDocumentSignRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1ContractorDocumentSignRequest$inboundSchema;
  /** @deprecated use `PutV1ContractorDocumentSignRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorDocumentSignRequest$outboundSchema;
  /** @deprecated use `PutV1ContractorDocumentSignRequest$Outbound` instead. */
  export type Outbound = PutV1ContractorDocumentSignRequest$Outbound;
}

export function putV1ContractorDocumentSignRequestToJSON(
  putV1ContractorDocumentSignRequest: PutV1ContractorDocumentSignRequest,
): string {
  return JSON.stringify(
    PutV1ContractorDocumentSignRequest$outboundSchema.parse(
      putV1ContractorDocumentSignRequest,
    ),
  );
}

export function putV1ContractorDocumentSignRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1ContractorDocumentSignRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorDocumentSignRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1ContractorDocumentSignRequest' from JSON`,
  );
}

/** @internal */
export const PutV1ContractorDocumentSignResponse$inboundSchema: z.ZodType<
  PutV1ContractorDocumentSignResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "Document-Signed": components.DocumentSigned$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Document-Signed": "documentSigned",
  });
});

/** @internal */
export type PutV1ContractorDocumentSignResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Document-Signed"?: components.DocumentSigned$Outbound | undefined;
};

/** @internal */
export const PutV1ContractorDocumentSignResponse$outboundSchema: z.ZodType<
  PutV1ContractorDocumentSignResponse$Outbound,
  z.ZodTypeDef,
  PutV1ContractorDocumentSignResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  documentSigned: components.DocumentSigned$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    documentSigned: "Document-Signed",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorDocumentSignResponse$ {
  /** @deprecated use `PutV1ContractorDocumentSignResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorDocumentSignResponse$inboundSchema;
  /** @deprecated use `PutV1ContractorDocumentSignResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorDocumentSignResponse$outboundSchema;
  /** @deprecated use `PutV1ContractorDocumentSignResponse$Outbound` instead. */
  export type Outbound = PutV1ContractorDocumentSignResponse$Outbound;
}

export function putV1ContractorDocumentSignResponseToJSON(
  putV1ContractorDocumentSignResponse: PutV1ContractorDocumentSignResponse,
): string {
  return JSON.stringify(
    PutV1ContractorDocumentSignResponse$outboundSchema.parse(
      putV1ContractorDocumentSignResponse,
    ),
  );
}

export function putV1ContractorDocumentSignResponseFromJSON(
  jsonString: string,
): SafeParseResult<PutV1ContractorDocumentSignResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorDocumentSignResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1ContractorDocumentSignResponse' from JSON`,
  );
}
