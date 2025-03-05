/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  EmployeeStateTax,
  EmployeeStateTax$inboundSchema,
  EmployeeStateTax$Outbound,
  EmployeeStateTax$outboundSchema,
} from "../components/employeestatetax.js";
import {
  VersionHeader,
  VersionHeader$inboundSchema,
  VersionHeader$outboundSchema,
} from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Answers = {
  value: string;
  validFrom: string;
  validUpTo?: any | null | undefined;
};

export type Questions = {
  key: string;
  answers?: Array<Answers> | undefined;
};

export type States = {
  state: string;
  questions?: Array<Questions> | undefined;
};

export type PutV1EmployeesEmployeeIdStateTaxesRequestBody = {
  states: Array<States>;
};

export type PutV1EmployeesEmployeeIdStateTaxesRequest = {
  /**
   * The UUID of the employee
   */
  employeeUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  requestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody;
};

export type PutV1EmployeesEmployeeIdStateTaxesResponse = {
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
  employeeStateTaxesList?: Array<EmployeeStateTax> | undefined;
};

/** @internal */
export const Answers$inboundSchema: z.ZodType<Answers, z.ZodTypeDef, unknown> =
  z.object({
    value: z.string(),
    valid_from: z.string(),
    valid_up_to: z.nullable(z.any()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "valid_from": "validFrom",
      "valid_up_to": "validUpTo",
    });
  });

/** @internal */
export type Answers$Outbound = {
  value: string;
  valid_from: string;
  valid_up_to?: any | null | undefined;
};

/** @internal */
export const Answers$outboundSchema: z.ZodType<
  Answers$Outbound,
  z.ZodTypeDef,
  Answers
> = z.object({
  value: z.string(),
  validFrom: z.string(),
  validUpTo: z.nullable(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    validFrom: "valid_from",
    validUpTo: "valid_up_to",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Answers$ {
  /** @deprecated use `Answers$inboundSchema` instead. */
  export const inboundSchema = Answers$inboundSchema;
  /** @deprecated use `Answers$outboundSchema` instead. */
  export const outboundSchema = Answers$outboundSchema;
  /** @deprecated use `Answers$Outbound` instead. */
  export type Outbound = Answers$Outbound;
}

export function answersToJSON(answers: Answers): string {
  return JSON.stringify(Answers$outboundSchema.parse(answers));
}

export function answersFromJSON(
  jsonString: string,
): SafeParseResult<Answers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Answers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Answers' from JSON`,
  );
}

/** @internal */
export const Questions$inboundSchema: z.ZodType<
  Questions,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  answers: z.array(z.lazy(() => Answers$inboundSchema)).optional(),
});

/** @internal */
export type Questions$Outbound = {
  key: string;
  answers?: Array<Answers$Outbound> | undefined;
};

/** @internal */
export const Questions$outboundSchema: z.ZodType<
  Questions$Outbound,
  z.ZodTypeDef,
  Questions
> = z.object({
  key: z.string(),
  answers: z.array(z.lazy(() => Answers$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Questions$ {
  /** @deprecated use `Questions$inboundSchema` instead. */
  export const inboundSchema = Questions$inboundSchema;
  /** @deprecated use `Questions$outboundSchema` instead. */
  export const outboundSchema = Questions$outboundSchema;
  /** @deprecated use `Questions$Outbound` instead. */
  export type Outbound = Questions$Outbound;
}

export function questionsToJSON(questions: Questions): string {
  return JSON.stringify(Questions$outboundSchema.parse(questions));
}

export function questionsFromJSON(
  jsonString: string,
): SafeParseResult<Questions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Questions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Questions' from JSON`,
  );
}

/** @internal */
export const States$inboundSchema: z.ZodType<States, z.ZodTypeDef, unknown> = z
  .object({
    state: z.string(),
    questions: z.array(z.lazy(() => Questions$inboundSchema)).optional(),
  });

/** @internal */
export type States$Outbound = {
  state: string;
  questions?: Array<Questions$Outbound> | undefined;
};

/** @internal */
export const States$outboundSchema: z.ZodType<
  States$Outbound,
  z.ZodTypeDef,
  States
> = z.object({
  state: z.string(),
  questions: z.array(z.lazy(() => Questions$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace States$ {
  /** @deprecated use `States$inboundSchema` instead. */
  export const inboundSchema = States$inboundSchema;
  /** @deprecated use `States$outboundSchema` instead. */
  export const outboundSchema = States$outboundSchema;
  /** @deprecated use `States$Outbound` instead. */
  export type Outbound = States$Outbound;
}

export function statesToJSON(states: States): string {
  return JSON.stringify(States$outboundSchema.parse(states));
}

export function statesFromJSON(
  jsonString: string,
): SafeParseResult<States, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => States$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'States' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    states: z.array(z.lazy(() => States$inboundSchema)),
  });

/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound = {
  states: Array<States$Outbound>;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdStateTaxesRequestBody
  > = z.object({
    states: z.array(z.lazy(() => States$outboundSchema)),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdStateTaxesRequestBody$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound;
}

export function putV1EmployeesEmployeeIdStateTaxesRequestBodyToJSON(
  putV1EmployeesEmployeeIdStateTaxesRequestBody:
    PutV1EmployeesEmployeeIdStateTaxesRequestBody,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema.parse(
      putV1EmployeesEmployeeIdStateTaxesRequestBody,
    ),
  );
}

export function putV1EmployeesEmployeeIdStateTaxesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdStateTaxesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdStateTaxesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema: z.ZodType<
  PutV1EmployeesEmployeeIdStateTaxesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() =>
    PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound = {
  employee_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdStateTaxesRequest
  > = z.object({
    employeeUuid: z.string(),
    xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
    requestBody: z.lazy(() =>
      PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      employeeUuid: "employee_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdStateTaxesRequest$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound;
}

export function putV1EmployeesEmployeeIdStateTaxesRequestToJSON(
  putV1EmployeesEmployeeIdStateTaxesRequest:
    PutV1EmployeesEmployeeIdStateTaxesRequest,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema.parse(
      putV1EmployeesEmployeeIdStateTaxesRequest,
    ),
  );
}

export function putV1EmployeesEmployeeIdStateTaxesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdStateTaxesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdStateTaxesRequest' from JSON`,
  );
}

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema:
  z.ZodType<PutV1EmployeesEmployeeIdStateTaxesResponse, z.ZodTypeDef, unknown> =
    z.object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      "Employee-State-Taxes-List": z.array(EmployeeStateTax$inboundSchema)
        .optional(),
    }).transform((v) => {
      return remap$(v, {
        "ContentType": "contentType",
        "StatusCode": "statusCode",
        "RawResponse": "rawResponse",
        "Employee-State-Taxes-List": "employeeStateTaxesList",
      });
    });

/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "Employee-State-Taxes-List"?: Array<EmployeeStateTax$Outbound> | undefined;
};

/** @internal */
export const PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema:
  z.ZodType<
    PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound,
    z.ZodTypeDef,
    PutV1EmployeesEmployeeIdStateTaxesResponse
  > = z.object({
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    employeeStateTaxesList: z.array(EmployeeStateTax$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      employeeStateTaxesList: "Employee-State-Taxes-List",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1EmployeesEmployeeIdStateTaxesResponse$ {
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema;
  /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound` instead. */
  export type Outbound = PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound;
}

export function putV1EmployeesEmployeeIdStateTaxesResponseToJSON(
  putV1EmployeesEmployeeIdStateTaxesResponse:
    PutV1EmployeesEmployeeIdStateTaxesResponse,
): string {
  return JSON.stringify(
    PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema.parse(
      putV1EmployeesEmployeeIdStateTaxesResponse,
    ),
  );
}

export function putV1EmployeesEmployeeIdStateTaxesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  PutV1EmployeesEmployeeIdStateTaxesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PutV1EmployeesEmployeeIdStateTaxesResponse' from JSON`,
  );
}
