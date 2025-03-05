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

export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest = {
  /**
   * The UUID of the company
   */
  companyId: string;
  /**
   * The UUID of the earning type
   */
  earningTypeUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
};

export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse = {
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
export const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_id: z.string(),
    earning_type_uuid: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "earning_type_uuid": "earningTypeUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound =
  {
    company_id: string;
    earning_type_uuid: string;
    "X-Gusto-API-Version": string;
  };

/** @internal */
export const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest
  > = z.object({
    companyId: z.string(),
    earningTypeUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  }).transform((v) => {
    return remap$(v, {
      companyId: "company_id",
      earningTypeUuid: "earning_type_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$ {
  /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound;
}

export function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestToJSON(
  deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest:
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
): string {
  return JSON.stringify(
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema
      .parse(deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest),
  );
}

export function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse,
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
export type DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound =
  {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
  };

/** @internal */
export const DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema:
  z.ZodType<
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound,
    z.ZodTypeDef,
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse
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
export namespace DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$ {
  /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema;
  /** @deprecated use `DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound` instead. */
  export type Outbound =
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound;
}

export function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseToJSON(
  deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse:
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse,
): string {
  return JSON.stringify(
    DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema
      .parse(deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse),
  );
}

export function deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse' from JSON`,
  );
}
