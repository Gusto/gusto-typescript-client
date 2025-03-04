/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
 */
export const EntityType = {
  Company: "Company",
  Employee: "Employee",
} as const;
/**
 * the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
 */
export type EntityType = ClosedEnum<typeof EntityType>;

export type PostV1CompanyFlowsRequestBody = {
  /**
   * flow type
   */
  flowType: string;
  /**
   * UUID of the target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
   */
  entityUuid?: string | undefined;
  /**
   * the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
   */
  entityType?: EntityType | undefined;
};

export type PostV1CompanyFlowsRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PostV1CompanyFlowsRequestBody;
};

/** @internal */
export const EntityType$inboundSchema: z.ZodNativeEnum<typeof EntityType> = z
  .nativeEnum(EntityType);

/** @internal */
export const EntityType$outboundSchema: z.ZodNativeEnum<typeof EntityType> =
  EntityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityType$ {
  /** @deprecated use `EntityType$inboundSchema` instead. */
  export const inboundSchema = EntityType$inboundSchema;
  /** @deprecated use `EntityType$outboundSchema` instead. */
  export const outboundSchema = EntityType$outboundSchema;
}

/** @internal */
export const PostV1CompanyFlowsRequestBody$inboundSchema: z.ZodType<
  PostV1CompanyFlowsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  flow_type: z.string(),
  entity_uuid: z.string().optional(),
  entity_type: EntityType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "flow_type": "flowType",
    "entity_uuid": "entityUuid",
    "entity_type": "entityType",
  });
});

/** @internal */
export type PostV1CompanyFlowsRequestBody$Outbound = {
  flow_type: string;
  entity_uuid?: string | undefined;
  entity_type?: string | undefined;
};

/** @internal */
export const PostV1CompanyFlowsRequestBody$outboundSchema: z.ZodType<
  PostV1CompanyFlowsRequestBody$Outbound,
  z.ZodTypeDef,
  PostV1CompanyFlowsRequestBody
> = z.object({
  flowType: z.string(),
  entityUuid: z.string().optional(),
  entityType: EntityType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    flowType: "flow_type",
    entityUuid: "entity_uuid",
    entityType: "entity_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompanyFlowsRequestBody$ {
  /** @deprecated use `PostV1CompanyFlowsRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV1CompanyFlowsRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompanyFlowsRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV1CompanyFlowsRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompanyFlowsRequestBody$Outbound` instead. */
  export type Outbound = PostV1CompanyFlowsRequestBody$Outbound;
}

export function postV1CompanyFlowsRequestBodyToJSON(
  postV1CompanyFlowsRequestBody: PostV1CompanyFlowsRequestBody,
): string {
  return JSON.stringify(
    PostV1CompanyFlowsRequestBody$outboundSchema.parse(
      postV1CompanyFlowsRequestBody,
    ),
  );
}

export function postV1CompanyFlowsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV1CompanyFlowsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1CompanyFlowsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompanyFlowsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompanyFlowsRequest$inboundSchema: z.ZodType<
  PostV1CompanyFlowsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.default(
    "2024-04-01",
  ),
  RequestBody: z.lazy(() => PostV1CompanyFlowsRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV1CompanyFlowsRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PostV1CompanyFlowsRequestBody$Outbound;
};

/** @internal */
export const PostV1CompanyFlowsRequest$outboundSchema: z.ZodType<
  PostV1CompanyFlowsRequest$Outbound,
  z.ZodTypeDef,
  PostV1CompanyFlowsRequest
> = z.object({
  companyUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.default(
    "2024-04-01",
  ),
  requestBody: z.lazy(() => PostV1CompanyFlowsRequestBody$outboundSchema),
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
export namespace PostV1CompanyFlowsRequest$ {
  /** @deprecated use `PostV1CompanyFlowsRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1CompanyFlowsRequest$inboundSchema;
  /** @deprecated use `PostV1CompanyFlowsRequest$outboundSchema` instead. */
  export const outboundSchema = PostV1CompanyFlowsRequest$outboundSchema;
  /** @deprecated use `PostV1CompanyFlowsRequest$Outbound` instead. */
  export type Outbound = PostV1CompanyFlowsRequest$Outbound;
}

export function postV1CompanyFlowsRequestToJSON(
  postV1CompanyFlowsRequest: PostV1CompanyFlowsRequest,
): string {
  return JSON.stringify(
    PostV1CompanyFlowsRequest$outboundSchema.parse(postV1CompanyFlowsRequest),
  );
}

export function postV1CompanyFlowsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1CompanyFlowsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1CompanyFlowsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1CompanyFlowsRequest' from JSON`,
  );
}
