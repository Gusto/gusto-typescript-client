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
export const PutV1ContractorsContractorUuidType = {
  Individual: "Individual",
  Business: "Business",
} as const;
/**
 * The contractor type.
 */
export type PutV1ContractorsContractorUuidType = ClosedEnum<
  typeof PutV1ContractorsContractorUuidType
>;

/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export const PutV1ContractorsContractorUuidWageType = {
  Fixed: "Fixed",
  Hourly: "Hourly",
} as const;
/**
 * The contractor’s wage type.
 *
 * @remarks
 */
export type PutV1ContractorsContractorUuidWageType = ClosedEnum<
  typeof PutV1ContractorsContractorUuidWageType
>;

export type PutV1ContractorsContractorUuidRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version: string;
  /**
   * The contractor type.
   */
  type?: PutV1ContractorsContractorUuidType | undefined;
  /**
   * The contractor’s wage type.
   *
   * @remarks
   */
  wageType?: PutV1ContractorsContractorUuidWageType | undefined;
  /**
   * The day when the contractor will start working for the company.
   *
   * @remarks
   */
  startDate?: string | undefined;
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

export type PutV1ContractorsContractorUuidRequest = {
  /**
   * The UUID of the contractor
   */
  contractorUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: components.VersionHeader | undefined;
  requestBody: PutV1ContractorsContractorUuidRequestBody;
};

/** @internal */
export const PutV1ContractorsContractorUuidType$inboundSchema: z.ZodNativeEnum<
  typeof PutV1ContractorsContractorUuidType
> = z.nativeEnum(PutV1ContractorsContractorUuidType);

/** @internal */
export const PutV1ContractorsContractorUuidType$outboundSchema: z.ZodNativeEnum<
  typeof PutV1ContractorsContractorUuidType
> = PutV1ContractorsContractorUuidType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorsContractorUuidType$ {
  /** @deprecated use `PutV1ContractorsContractorUuidType$inboundSchema` instead. */
  export const inboundSchema = PutV1ContractorsContractorUuidType$inboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidType$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorsContractorUuidType$outboundSchema;
}

/** @internal */
export const PutV1ContractorsContractorUuidWageType$inboundSchema:
  z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidWageType> = z.nativeEnum(
    PutV1ContractorsContractorUuidWageType,
  );

/** @internal */
export const PutV1ContractorsContractorUuidWageType$outboundSchema:
  z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidWageType> =
    PutV1ContractorsContractorUuidWageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorsContractorUuidWageType$ {
  /** @deprecated use `PutV1ContractorsContractorUuidWageType$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorsContractorUuidWageType$inboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidWageType$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorsContractorUuidWageType$outboundSchema;
}

/** @internal */
export const PutV1ContractorsContractorUuidRequestBody$inboundSchema: z.ZodType<
  PutV1ContractorsContractorUuidRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
  type: PutV1ContractorsContractorUuidType$inboundSchema.default("Individual"),
  wage_type: PutV1ContractorsContractorUuidWageType$inboundSchema.optional(),
  start_date: z.string().optional(),
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
export type PutV1ContractorsContractorUuidRequestBody$Outbound = {
  version: string;
  type: string;
  wage_type?: string | undefined;
  start_date?: string | undefined;
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
export const PutV1ContractorsContractorUuidRequestBody$outboundSchema:
  z.ZodType<
    PutV1ContractorsContractorUuidRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1ContractorsContractorUuidRequestBody
  > = z.object({
    version: z.string(),
    type: PutV1ContractorsContractorUuidType$outboundSchema.default(
      "Individual",
    ),
    wageType: PutV1ContractorsContractorUuidWageType$outboundSchema.optional(),
    startDate: z.string().optional(),
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
export namespace PutV1ContractorsContractorUuidRequestBody$ {
  /** @deprecated use `PutV1ContractorsContractorUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorsContractorUuidRequestBody$inboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorsContractorUuidRequestBody$outboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidRequestBody$Outbound` instead. */
  export type Outbound = PutV1ContractorsContractorUuidRequestBody$Outbound;
}

export function putV1ContractorsContractorUuidRequestBodyToJSON(
  putV1ContractorsContractorUuidRequestBody:
    PutV1ContractorsContractorUuidRequestBody,
): string {
  return JSON.stringify(
    PutV1ContractorsContractorUuidRequestBody$outboundSchema.parse(
      putV1ContractorsContractorUuidRequestBody,
    ),
  );
}

export function putV1ContractorsContractorUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1ContractorsContractorUuidRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorsContractorUuidRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1ContractorsContractorUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1ContractorsContractorUuidRequest$inboundSchema: z.ZodType<
  PutV1ContractorsContractorUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  contractor_uuid: z.string(),
  "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  RequestBody: z.lazy(() =>
    PutV1ContractorsContractorUuidRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "contractor_uuid": "contractorUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1ContractorsContractorUuidRequest$Outbound = {
  contractor_uuid: string;
  "X-Gusto-API-Version"?: string | undefined;
  RequestBody: PutV1ContractorsContractorUuidRequestBody$Outbound;
};

/** @internal */
export const PutV1ContractorsContractorUuidRequest$outboundSchema: z.ZodType<
  PutV1ContractorsContractorUuidRequest$Outbound,
  z.ZodTypeDef,
  PutV1ContractorsContractorUuidRequest
> = z.object({
  contractorUuid: z.string(),
  xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  requestBody: z.lazy(() =>
    PutV1ContractorsContractorUuidRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    contractorUuid: "contractor_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1ContractorsContractorUuidRequest$ {
  /** @deprecated use `PutV1ContractorsContractorUuidRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1ContractorsContractorUuidRequest$inboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1ContractorsContractorUuidRequest$outboundSchema;
  /** @deprecated use `PutV1ContractorsContractorUuidRequest$Outbound` instead. */
  export type Outbound = PutV1ContractorsContractorUuidRequest$Outbound;
}

export function putV1ContractorsContractorUuidRequestToJSON(
  putV1ContractorsContractorUuidRequest: PutV1ContractorsContractorUuidRequest,
): string {
  return JSON.stringify(
    PutV1ContractorsContractorUuidRequest$outboundSchema.parse(
      putV1ContractorsContractorUuidRequest,
    ),
  );
}

export function putV1ContractorsContractorUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1ContractorsContractorUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1ContractorsContractorUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1ContractorsContractorUuidRequest' from JSON`,
  );
}
