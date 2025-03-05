/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  I9Authorization,
  I9Authorization$inboundSchema,
  I9Authorization$Outbound,
  I9Authorization$outboundSchema,
} from "../components/i9authorization.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The employee's authorization status
 *
 * @remarks
 *
 *   * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
 *   * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
 *   * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
 *   * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.
 */
export const AuthorizationStatus = {
  Citizen: "citizen",
  Noncitizen: "noncitizen",
  PermanentResident: "permanent_resident",
  Alien: "alien",
} as const;
/**
 * The employee's authorization status
 *
 * @remarks
 *
 *   * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
 *   * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
 *   * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
 *   * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.
 */
export type AuthorizationStatus = ClosedEnum<typeof AuthorizationStatus>;

/**
 * The type of document an employee holds, based on their authorization status.
 *
 * @remarks
 *
 *   * This is unused for authorization status `citizen` or `noncitizen`.
 *   * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
 *   * If the authorization status is `alien`, this is required and may be any of the valid values.
 */
export const DocumentType = {
  UscisAlienRegistrationNumber: "uscis_alien_registration_number",
  FormI94: "form_i94",
  ForeignPassport: "foreign_passport",
} as const;
/**
 * The type of document an employee holds, based on their authorization status.
 *
 * @remarks
 *
 *   * This is unused for authorization status `citizen` or `noncitizen`.
 *   * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
 *   * If the authorization status is `alien`, this is required and may be any of the valid values.
 */
export type DocumentType = ClosedEnum<typeof DocumentType>;

export type PutV1EmployeesEmployeeIdI9AuthorizationRequestBody = {
  /**
   * The employee's authorization status
   *
   * @remarks
   *
   *   * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
   *   * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
   *   * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
   *   * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.
   */
  authorizationStatus: AuthorizationStatus;
  /**
   * The type of document an employee holds, based on their authorization status.
   *
   * @remarks
   *
   *   * This is unused for authorization status `citizen` or `noncitizen`.
   *   * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
   *   * If the authorization status is `alien`, this is required and may be any of the valid values.
   */
  documentType?: DocumentType | undefined;
  /**
   * The document number. Formatting depends on the employee's document type.
   *
   * @remarks
   *
   *   * For `document_type:'uscis_alien_registration_number'`, this must be a USCIS Number/A-Number, which is 7 to 9 digits.
   *   * For `document_type:'form_i94'`, this must be a Form I-94 Admission Number, which is 11 digits.
   *   * For `document_type:'foreign_passport'`, this must be the passport number.
   *
   * This is required when the document type is present.
   */
  documentNumber?: string | undefined;
  /**
   * The document's country of issuance.
   *
   * @remarks
   *
   * This is required when the document type is `foreign_passport`.
   */
  country?: string | undefined;
  /**
   * The document's expiration date.
   *
   * @remarks
   *
   * This may only be used when the authorization status is `alien`.
   */
  expirationDate?: string | undefined;
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field. If supplied, this endpoint will update the existing I-9 authorization if it exists.
   */
  version?: string | undefined;
};

export type PutV1EmployeesEmployeeIdI9AuthorizationRequest = {
  /**
   * The UUID of the employee
   */
  employeeId: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1EmployeesEmployeeIdI9AuthorizationRequestBody;
};

export type PutV1EmployeesEmployeeIdI9AuthorizationResponse = {
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
  i9Authorization?: I9Authorization | undefined;
};

/** @internal */
export const AuthorizationStatus$inboundSchema: z.ZodNativeEnum<
  typeof AuthorizationStatus
> = z.nativeEnum(AuthorizationStatus);

/** @internal */
export const AuthorizationStatus$outboundSchema: z.ZodNativeEnum<
  typeof AuthorizationStatus
> = AuthorizationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthorizationStatus$ {
  /** @deprecated use `AuthorizationStatus$inboundSchema` instead. */
  export const inboundSchema = AuthorizationStatus$inboundSchema;
  /** @deprecated use `AuthorizationStatus$outboundSchema` instead. */
  export const outboundSchema = AuthorizationStatus$outboundSchema;
}

/** @internal */
export const DocumentType$inboundSchema: z.ZodNativeEnum<typeof DocumentType> =
  z.nativeEnum(DocumentType);

/** @internal */
export const DocumentType$outboundSchema: z.ZodNativeEnum<typeof DocumentType> =
  DocumentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentType$ {
  /** @deprecated use `DocumentType$inboundSchema` instead. */
  export const inboundSchema = DocumentType$inboundSchema;
  /** @deprecated use `DocumentType$outboundSchema` instead. */
  export const outboundSchema = DocumentType$outboundSchema;
}

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    authorization_status: AuthorizationStatus$inboundSchema,
    document_type: DocumentType$inboundSchema.optional(),
    document_number: z.string().optional(),
    country: z.string().optional(),
    expiration_date: z.string().optional(),
    version: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "authorization_status": "authorizationStatus",
      "document_type": "documentType",
      "document_number": "documentNumber",
      "expiration_date": "expirationDate",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound = {
  authorization_status: string;
  document_type?: string | undefined;
  document_number?: string | undefined;
  country?: string | undefined;
  expiration_date?: string | undefined;
  version?: string | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody
  > = z.object({
    authorizationStatus: AuthorizationStatus$outboundSchema,
    documentType: DocumentType$outboundSchema.optional(),
    documentNumber: z.string().optional(),
    country: z.string().optional(),
    expirationDate: z.string().optional(),
    version: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      authorizationStatus: "authorization_status",
      documentType: "document_type",
      documentNumber: "document_number",
      expirationDate: "expiration_date",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdI9AuthorizationRequestBodyToJSON(
  putV1EmployeesEmployeeIdI9AuthorizationRequestBody:
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdI9AuthorizationRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdI9AuthorizationRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdI9AuthorizationRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdI9AuthorizationRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
    RequestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "X-Gusto-API-Version": "xGustoAPIVersion",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound = {
  employee_id: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdI9AuthorizationRequest
  > = z.object({
    employeeId: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdI9AuthorizationRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdI9AuthorizationRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound;
}

export function putV1EmployeesEmployeeIdI9AuthorizationRequestToJSON(
  putV1EmployeesEmployeeIdI9AuthorizationRequest:
    PutV1EmployeesEmployeeIdI9AuthorizationRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdI9AuthorizationRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdI9AuthorizationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdI9AuthorizationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdI9AuthorizationRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
    "I9-Authorization": I9Authorization$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
      "I9-Authorization": "i9Authorization",
    });
  });

/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "I9-Authorization"?: I9Authorization$Outbound | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdI9AuthorizationResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    i9Authorization: I9Authorization$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      i9Authorization: "I9-Authorization",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdI9AuthorizationResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound` instead. */
  export type Outbound =
    PutV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound;
}

export function putV1EmployeesEmployeeIdI9AuthorizationResponseToJSON(
  putV1EmployeesEmployeeIdI9AuthorizationResponse:
    PutV1EmployeesEmployeeIdI9AuthorizationResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdI9AuthorizationResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdI9AuthorizationResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdI9AuthorizationResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdI9AuthorizationResponse' from JSON`,
  );
}
