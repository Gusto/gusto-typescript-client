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
 * The contractor type.
 */
export const PostV1CompaniesCompanyUuidContractorsType = {
  Individual: "Individual",
  Business: "Business",
} as const;
/**
 * The contractor type.
 */
export type PostV1CompaniesCompanyUuidContractorsType = ClosedEnum<
  typeof PostV1CompaniesCompanyUuidContractorsType
>;

/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export const WageType = {
  Fixed: "Fixed",
  Hourly: "Hourly",
} as const;
/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export type WageType = ClosedEnum<typeof WageType>;

/**
 * Create an individual or business contractor.
 */
export type PostV1CompaniesCompanyUuidContractorsRequestBody = {
  /**
   * The contractor type.
   */
  type?: PostV1CompaniesCompanyUuidContractorsType | undefined;
  /**
   * The contractor’s wage type.
   *
   * @remarks
   */
  wageType: WageType;
  /**
   * The day when the contractor will start working for the company.
   *
   * @remarks
   */
  startDate: string;
  /**
   * The contractor’s hourly rate. This attribute is required if the wage_type is `Hourly`.
   */
  hourlyRate?: string | undefined;
  /**
   * Whether the contractor or the payroll admin will complete onboarding in Gusto.
   *
   * @remarks
   * Self-onboarding is recommended so that contractors receive Gusto accounts.
   * If self_onboarding is true, then email is required.
   */
  selfOnboarding?: boolean | undefined;
  /**
   * The contractor’s email address.
   */
  email?: string | undefined;
  /**
   * The contractor’s first name.
   *
   * @remarks
   * This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.
   */
  firstName?: string | undefined;
  /**
   * The contractor’s last name.
   *
   * @remarks
   * This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.
   */
  lastName?: string | undefined;
  /**
   * The contractor’s middle initial.
   *
   * @remarks
   * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
   */
  middleInitial?: string | undefined;
  /**
   * The boolean flag indicating whether Gusto will file a new hire report for the contractor.
   *
   * @remarks
   * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
   */
  fileNewHireReport?: boolean | undefined;
  /**
   * State where the contractor will be conducting the majority of their work for the company.
   *
   * @remarks
   * This value is used when generating the new hire report.
   * This attribute is required for `Individual` contractors if `file_new_hire_report` is true and will be ignored for `Business` contractors.
   */
  workState?: string | null | undefined;
  /**
   * This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.
   *
   * @remarks
   * Social security number is needed to file the annual 1099 tax form.
   */
  ssn?: string | undefined;
  /**
   * The name of the contractor business. This attribute is required for `Business` contractors and will be ignored for `Individual` contractors.
   */
  businessName?: string | undefined;
  /**
   * The employer identification number of the contractor business.
   *
   * @remarks
   * This attribute is optional for `Business` contractors and will be ignored for `Individual` contractors.
   */
  ein?: string | undefined;
  /**
   * The status of the contractor. If the contractor's start date is in the future, updating this field to true means we are setting the start date to today.
   */
  isActive?: boolean | undefined;
};

export type PostV1CompaniesCompanyUuidContractorsRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  /**
   * Create an individual or business contractor.
   */
  requestBody?: PostV1CompaniesCompanyUuidContractorsRequestBody | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyUuidContractorsType$inboundSchema:
  z.ZodNativeEnum<typeof PostV1CompaniesCompanyUuidContractorsType> = z
    .nativeEnum(PostV1CompaniesCompanyUuidContractorsType);

/** @internal */
export const PostV1CompaniesCompanyUuidContractorsType$outboundSchema:
  z.ZodNativeEnum<typeof PostV1CompaniesCompanyUuidContractorsType> =
    PostV1CompaniesCompanyUuidContractorsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyUuidContractorsType$ {
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsType$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyUuidContractorsType$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsType$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyUuidContractorsType$outboundSchema;
}

/** @internal */
export const WageType$inboundSchema: z.ZodNativeEnum<typeof WageType> = z
  .nativeEnum(WageType);

/** @internal */
export const WageType$outboundSchema: z.ZodNativeEnum<typeof WageType> =
  WageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WageType$ {
  /** @deprecated use `WageType$inboundSchema` instead. */
  export const inboundSchema = WageType$inboundSchema;
  /** @deprecated use `WageType$outboundSchema` instead. */
  export const outboundSchema = WageType$outboundSchema;
}

/** @internal */
export const PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyUuidContractorsRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: PostV1CompaniesCompanyUuidContractorsType$inboundSchema.default(
      "Individual",
    ),
    wage_type: WageType$inboundSchema,
    start_date: z.string(),
    hourly_rate: z.string().optional(),
    self_onboarding: z.boolean().default(false),
    email: z.string().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    middle_initial: z.string().optional(),
    file_new_hire_report: z.boolean().default(false),
    work_state: z.nullable(z.string()).optional(),
    ssn: z.string().optional(),
    business_name: z.string().optional(),
    ein: z.string().optional(),
    is_active: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "wage_type": "wageType",
      "start_date": "startDate",
      "hourly_rate": "hourlyRate",
      "self_onboarding": "selfOnboarding",
      "first_name": "firstName",
      "last_name": "lastName",
      "middle_initial": "middleInitial",
      "file_new_hire_report": "fileNewHireReport",
      "work_state": "workState",
      "business_name": "businessName",
      "is_active": "isActive",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound = {
  type: string;
  wage_type: string;
  start_date: string;
  hourly_rate?: string | undefined;
  self_onboarding: boolean;
  email?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  middle_initial?: string | undefined;
  file_new_hire_report: boolean;
  work_state?: string | null | undefined;
  ssn?: string | undefined;
  business_name?: string | undefined;
  ein?: string | undefined;
  is_active?: boolean | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyUuidContractorsRequestBody
  > = z.object({
    type: PostV1CompaniesCompanyUuidContractorsType$outboundSchema.default(
      "Individual",
    ),
    wageType: WageType$outboundSchema,
    startDate: z.string(),
    hourlyRate: z.string().optional(),
    selfOnboarding: z.boolean().default(false),
    email: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    middleInitial: z.string().optional(),
    fileNewHireReport: z.boolean().default(false),
    workState: z.nullable(z.string()).optional(),
    ssn: z.string().optional(),
    businessName: z.string().optional(),
    ein: z.string().optional(),
    isActive: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      wageType: "wage_type",
      startDate: "start_date",
      hourlyRate: "hourly_rate",
      selfOnboarding: "self_onboarding",
      firstName: "first_name",
      lastName: "last_name",
      middleInitial: "middle_initial",
      fileNewHireReport: "file_new_hire_report",
      workState: "work_state",
      businessName: "business_name",
      isActive: "is_active",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1CompaniesCompanyUuidContractorsRequestBody$ {
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound` instead. */
  export type Outbound =
    PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound;
}

export function postV1CompaniesCompanyUuidContractorsRequestBodyToJSON(
  postV1CompaniesCompanyUuidContractorsRequestBody:
    PostV1CompaniesCompanyUuidContractorsRequestBody,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema.parse(
      postV1CompaniesCompanyUuidContractorsRequestBody,
    ),
  );
}

export function postV1CompaniesCompanyUuidContractorsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyUuidContractorsRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyUuidContractorsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV1CompaniesCompanyUuidContractorsRequest$inboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyUuidContractorsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    company_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
    RequestBody: z.lazy(() =>
      PostV1CompaniesCompanyUuidContractorsRequestBody$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_uuid": "companyUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostV1CompaniesCompanyUuidContractorsRequest$Outbound = {
  company_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody?:
    | PostV1CompaniesCompanyUuidContractorsRequestBody$Outbound
    | undefined;
};

/** @internal */
export const PostV1CompaniesCompanyUuidContractorsRequest$outboundSchema:
  z.ZodType<
    PostV1CompaniesCompanyUuidContractorsRequest$Outbound,
    z.ZodTypeDef,
    PostV1CompaniesCompanyUuidContractorsRequest
  > = z.object({
    companyUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
    requestBody: z.lazy(() =>
      PostV1CompaniesCompanyUuidContractorsRequestBody$outboundSchema
    ).optional(),
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
export namespace PostV1CompaniesCompanyUuidContractorsRequest$ {
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV1CompaniesCompanyUuidContractorsRequest$inboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1CompaniesCompanyUuidContractorsRequest$outboundSchema;
  /** @deprecated use `PostV1CompaniesCompanyUuidContractorsRequest$Outbound` instead. */
  export type Outbound = PostV1CompaniesCompanyUuidContractorsRequest$Outbound;
}

export function postV1CompaniesCompanyUuidContractorsRequestToJSON(
  postV1CompaniesCompanyUuidContractorsRequest:
    PostV1CompaniesCompanyUuidContractorsRequest,
): string {
  return JSON.stringify(
    PostV1CompaniesCompanyUuidContractorsRequest$outboundSchema.parse(
      postV1CompaniesCompanyUuidContractorsRequest,
    ),
  );
}

export function postV1CompaniesCompanyUuidContractorsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1CompaniesCompanyUuidContractorsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1CompaniesCompanyUuidContractorsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1CompaniesCompanyUuidContractorsRequest' from JSON`,
  );
}
