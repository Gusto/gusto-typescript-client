/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompanyFormPdfRequest = {
  /**
   * The UUID of the form
   */
  formId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
};

/** @internal */
export const GetV1CompanyFormPdfRequest$inboundSchema: z.ZodType<
  GetV1CompanyFormPdfRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  form_id: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    "form_id": "formId",
    "X-Gusto-API-Version": "xGustoAPIVersion",
  });
});

/** @internal */
export type GetV1CompanyFormPdfRequest$Outbound = {
  form_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompanyFormPdfRequest$outboundSchema: z.ZodType<
  GetV1CompanyFormPdfRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompanyFormPdfRequest
> = z.object({
  formId: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
}).transform((v) => {
  return remap$(v, {
    formId: "form_id",
    xGustoAPIVersion: "X-Gusto-API-Version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1CompanyFormPdfRequest$ {
  /** @deprecated use `GetV1CompanyFormPdfRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1CompanyFormPdfRequest$inboundSchema;
  /** @deprecated use `GetV1CompanyFormPdfRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1CompanyFormPdfRequest$outboundSchema;
  /** @deprecated use `GetV1CompanyFormPdfRequest$Outbound` instead. */
  export type Outbound = GetV1CompanyFormPdfRequest$Outbound;
}

export function getV1CompanyFormPdfRequestToJSON(
  getV1CompanyFormPdfRequest: GetV1CompanyFormPdfRequest,
): string {
  return JSON.stringify(
    GetV1CompanyFormPdfRequest$outboundSchema.parse(getV1CompanyFormPdfRequest),
  );
}

export function getV1CompanyFormPdfRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompanyFormPdfRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1CompanyFormPdfRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyFormPdfRequest' from JSON`,
  );
}
