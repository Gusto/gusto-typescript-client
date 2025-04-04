/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
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

export type Requirements = {
  /**
   * An identifier for an individual requirement. Uniqueness is guaranteed within a requirement set.
   */
  key?: string | undefined;
  value?: string | null | undefined;
};

export type RequirementSets = {
  /**
   * An identifier for a set of requirements. A list of requirement sets can contain multiple sets with the same `key` and different `effective_from` values.
   */
  key?: string | undefined;
  /**
   * An ISO 8601 formatted date representing the date values became effective. Some requirement sets are effective dated, while others are not. Multiple requirement sets for the same state/key can/will exist with unique effective dates. If a requirement set is has an `effective_from` value, all requirement sets with the same key will also have an `effective_from` value.
   */
  effectiveFrom?: string | null | undefined;
  /**
   * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
   */
  state?: string | undefined;
  requirements?: Array<Requirements> | undefined;
};

export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody = {
  requirementSets?: Array<RequirementSets> | undefined;
};

export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * 2-letter US state abbreviation
   */
  state: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody;
};

export type PutV1CompaniesCompanyUuidTaxRequirementsStateResponse = {
  httpMeta: HTTPMetadata;
};

/** @internal */
export const Requirements$inboundSchema: z.ZodType<
  Requirements,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  value: z.nullable(z.string()).optional(),
});

/** @internal */
export type Requirements$Outbound = {
  key?: string | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const Requirements$outboundSchema: z.ZodType<
  Requirements$Outbound,
  z.ZodTypeDef,
  Requirements
> = z.object({
  key: z.string().optional(),
  value: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Requirements$ {
  /** @deprecated use `Requirements$inboundSchema` instead. */
  export const inboundSchema = Requirements$inboundSchema;
  /** @deprecated use `Requirements$outboundSchema` instead. */
  export const outboundSchema = Requirements$outboundSchema;
  /** @deprecated use `Requirements$Outbound` instead. */
  export type Outbound = Requirements$Outbound;
}

export function requirementsToJSON(requirements: Requirements): string {
  return JSON.stringify(Requirements$outboundSchema.parse(requirements));
}

export function requirementsFromJSON(
  jsonString: string,
): SafeParseResult<Requirements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Requirements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Requirements' from JSON`,
  );
}

/** @internal */
export const RequirementSets$inboundSchema: z.ZodType<
  RequirementSets,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  effective_from: z.nullable(z.string()).optional(),
  state: z.string().optional(),
  requirements: z.array(z.lazy(() => Requirements$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "effective_from": "effectiveFrom",
  });
});

/** @internal */
export type RequirementSets$Outbound = {
  key?: string | undefined;
  effective_from?: string | null | undefined;
  state?: string | undefined;
  requirements?: Array<Requirements$Outbound> | undefined;
};

/** @internal */
export const RequirementSets$outboundSchema: z.ZodType<
  RequirementSets$Outbound,
  z.ZodTypeDef,
  RequirementSets
> = z.object({
  key: z.string().optional(),
  effectiveFrom: z.nullable(z.string()).optional(),
  state: z.string().optional(),
  requirements: z.array(z.lazy(() => Requirements$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    effectiveFrom: "effective_from",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequirementSets$ {
  /** @deprecated use `RequirementSets$inboundSchema` instead. */
  export const inboundSchema = RequirementSets$inboundSchema;
  /** @deprecated use `RequirementSets$outboundSchema` instead. */
  export const outboundSchema = RequirementSets$outboundSchema;
  /** @deprecated use `RequirementSets$Outbound` instead. */
  export type Outbound = RequirementSets$Outbound;
}

export function requirementSetsToJSON(
  requirementSets: RequirementSets,
): string {
  return JSON.stringify(RequirementSets$outboundSchema.parse(requirementSets));
}

export function requirementSetsFromJSON(
  jsonString: string,
): SafeParseResult<RequirementSets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequirementSets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequirementSets' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    requirement_sets: z.array(z.lazy(() => RequirementSets$inboundSchema))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "requirement_sets": "requirementSets",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound =
  {
    requirement_sets?: Array<RequirementSets$Outbound> | undefined;
  };

/** @internal */
export const PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody
  > = z.object({
    requirementSets: z.array(z.lazy(() => RequirementSets$outboundSchema))
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      requirementSets: "requirement_sets",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$ {
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound;
}

export function putV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyToJSON(
  putV1CompaniesCompanyUuidTaxRequirementsStateRequestBody:
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema
      .parse(putV1CompaniesCompanyUuidTaxRequirementsStateRequestBody),
  );
}

export function putV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    state: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound = {
  company_uuid: string;
  state: string;
  "X-Gusto-API-Version": string;
  RequestBody:
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound;
};

/** @internal */
export const PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest
  > = z.object({
    companyUuid: z.string(),
    state: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      companyUuid: "company_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$ {
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound;
}

export function putV1CompaniesCompanyUuidTaxRequirementsStateRequestToJSON(
  putV1CompaniesCompanyUuidTaxRequirementsStateRequest:
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema.parse(
      putV1CompaniesCompanyUuidTaxRequirementsStateRequest,
    ),
  );
}

export function putV1CompaniesCompanyUuidTaxRequirementsStateRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyUuidTaxRequirementsStateRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompaniesCompanyUuidTaxRequirementsStateRequest' from JSON`,
  );
}

/** @internal */
export const PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: HTTPMetadata$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
    });
  });

/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
};

/** @internal */
export const PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema:
  z.ZodType<
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound,
    z.ZodTypeDef,
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse
  > = z.object({
    httpMeta: HTTPMetadata$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$ {
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema;
  /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound` instead. */
  export type Outbound =
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound;
}

export function putV1CompaniesCompanyUuidTaxRequirementsStateResponseToJSON(
  putV1CompaniesCompanyUuidTaxRequirementsStateResponse:
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse,
): string {
  return JSON.stringify(
    PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema.parse(
      putV1CompaniesCompanyUuidTaxRequirementsStateResponse,
    ),
  );
}

export function putV1CompaniesCompanyUuidTaxRequirementsStateResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1CompaniesCompanyUuidTaxRequirementsStateResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1CompaniesCompanyUuidTaxRequirementsStateResponse' from JSON`,
  );
}
