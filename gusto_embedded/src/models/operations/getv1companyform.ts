/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV1CompanyFormRequest = {
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
export const GetV1CompanyFormRequest$inboundSchema: z.ZodType<
  GetV1CompanyFormRequest,
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
export type GetV1CompanyFormRequest$Outbound = {
  form_id: string;
  "X-Gusto-API-Version": string;
};

/** @internal */
export const GetV1CompanyFormRequest$outboundSchema: z.ZodType<
  GetV1CompanyFormRequest$Outbound,
  z.ZodTypeDef,
  GetV1CompanyFormRequest
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
export namespace GetV1CompanyFormRequest$ {
  /** @deprecated use `GetV1CompanyFormRequest$inboundSchema` instead. */
  export const inboundSchema = GetV1CompanyFormRequest$inboundSchema;
  /** @deprecated use `GetV1CompanyFormRequest$outboundSchema` instead. */
  export const outboundSchema = GetV1CompanyFormRequest$outboundSchema;
  /** @deprecated use `GetV1CompanyFormRequest$Outbound` instead. */
  export type Outbound = GetV1CompanyFormRequest$Outbound;
}

export function getV1CompanyFormRequestToJSON(
  getV1CompanyFormRequest: GetV1CompanyFormRequest,
): string {
  return JSON.stringify(
    GetV1CompanyFormRequest$outboundSchema.parse(getV1CompanyFormRequest),
  );
}

export function getV1CompanyFormRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV1CompanyFormRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV1CompanyFormRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV1CompanyFormRequest' from JSON`,
  );
}
