/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import {
  Employee,
  Employee$inboundSchema,
  Employee$Outbound,
  Employee$outboundSchema,
} from "../components/employee.js";
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

export type WorkAddress = {
  /**
   * Reference to a company location
   */
  locationUuid?: string | undefined;
};

export type PutV1HistoricalEmployeesHomeAddress = {
  street1: string;
  street2?: string | null | undefined;
  city: string;
  state: string;
  zip: string;
};

export type Termination = {
  /**
   * Date the employee was terminated from the company
   */
  effectiveDate?: RFCDate | undefined;
};

export type Job = {
  /**
   * The date when the employee was hired to the company
   */
  hireDate?: RFCDate | undefined;
};

export type EmployeeStateTaxes = {
  /**
   * Whether this job is eligible for workers' compensation coverage in the states of Washington (WA) or Wyoming (WY).
   */
  wcCovered?: boolean | undefined;
  /**
   * The risk class code for workers' compensation in Washington or Wyoming state. For Washington, visit [Washington state's Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more. For Wyoming you can search for the code online using [WY Workforce Services website](https://dws.wyo.gov/dws-division/workers-compensation/) or call the agency at (307) 235-3217.
   */
  wcClassCode?: string | undefined;
};

/**
 * Update a historical employee.
 */
export type PutV1HistoricalEmployeesRequestBody = {
  /**
   * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version: string;
  firstName: string;
  middleInitial?: string | undefined;
  lastName: string;
  preferredFirstName?: string | undefined;
  dateOfBirth: string;
  ssn: string;
  workAddress: WorkAddress;
  homeAddress: PutV1HistoricalEmployeesHomeAddress;
  termination: Termination;
  /**
   * Optional. If provided, the email address will be saved to the employee.
   */
  email?: string | undefined;
  job: Job;
  employeeStateTaxes?: EmployeeStateTaxes | undefined;
};

export type PutV1HistoricalEmployeesRequest = {
  /**
   * The UUID of the company
   */
  companyUuid: string;
  /**
   * The UUID of the historical employee
   */
  historicalEmployeeUuid: string;
  /**
   * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
   */
  xGustoAPIVersion?: VersionHeader | undefined;
  /**
   * Update a historical employee.
   */
  requestBody: PutV1HistoricalEmployeesRequestBody;
};

export type PutV1HistoricalEmployeesResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Example response
   */
  employee?: Employee | undefined;
};

/** @internal */
export const WorkAddress$inboundSchema: z.ZodType<
  WorkAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  location_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "location_uuid": "locationUuid",
  });
});

/** @internal */
export type WorkAddress$Outbound = {
  location_uuid?: string | undefined;
};

/** @internal */
export const WorkAddress$outboundSchema: z.ZodType<
  WorkAddress$Outbound,
  z.ZodTypeDef,
  WorkAddress
> = z.object({
  locationUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    locationUuid: "location_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkAddress$ {
  /** @deprecated use `WorkAddress$inboundSchema` instead. */
  export const inboundSchema = WorkAddress$inboundSchema;
  /** @deprecated use `WorkAddress$outboundSchema` instead. */
  export const outboundSchema = WorkAddress$outboundSchema;
  /** @deprecated use `WorkAddress$Outbound` instead. */
  export type Outbound = WorkAddress$Outbound;
}

export function workAddressToJSON(workAddress: WorkAddress): string {
  return JSON.stringify(WorkAddress$outboundSchema.parse(workAddress));
}

export function workAddressFromJSON(
  jsonString: string,
): SafeParseResult<WorkAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkAddress' from JSON`,
  );
}

/** @internal */
export const PutV1HistoricalEmployeesHomeAddress$inboundSchema: z.ZodType<
  PutV1HistoricalEmployeesHomeAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  street_1: z.string(),
  street_2: z.nullable(z.string()).optional(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
}).transform((v) => {
  return remap$(v, {
    "street_1": "street1",
    "street_2": "street2",
  });
});

/** @internal */
export type PutV1HistoricalEmployeesHomeAddress$Outbound = {
  street_1: string;
  street_2?: string | null | undefined;
  city: string;
  state: string;
  zip: string;
};

/** @internal */
export const PutV1HistoricalEmployeesHomeAddress$outboundSchema: z.ZodType<
  PutV1HistoricalEmployeesHomeAddress$Outbound,
  z.ZodTypeDef,
  PutV1HistoricalEmployeesHomeAddress
> = z.object({
  street1: z.string(),
  street2: z.nullable(z.string()).optional(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
}).transform((v) => {
  return remap$(v, {
    street1: "street_1",
    street2: "street_2",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1HistoricalEmployeesHomeAddress$ {
  /** @deprecated use `PutV1HistoricalEmployeesHomeAddress$inboundSchema` instead. */
  export const inboundSchema =
    PutV1HistoricalEmployeesHomeAddress$inboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesHomeAddress$outboundSchema` instead. */
  export const outboundSchema =
    PutV1HistoricalEmployeesHomeAddress$outboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesHomeAddress$Outbound` instead. */
  export type Outbound = PutV1HistoricalEmployeesHomeAddress$Outbound;
}

export function putV1HistoricalEmployeesHomeAddressToJSON(
  putV1HistoricalEmployeesHomeAddress: PutV1HistoricalEmployeesHomeAddress,
): string {
  return JSON.stringify(
    PutV1HistoricalEmployeesHomeAddress$outboundSchema.parse(
      putV1HistoricalEmployeesHomeAddress,
    ),
  );
}

export function putV1HistoricalEmployeesHomeAddressFromJSON(
  jsonString: string,
): SafeParseResult<PutV1HistoricalEmployeesHomeAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1HistoricalEmployeesHomeAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1HistoricalEmployeesHomeAddress' from JSON`,
  );
}

/** @internal */
export const Termination$inboundSchema: z.ZodType<
  Termination,
  z.ZodTypeDef,
  unknown
> = z.object({
  effective_date: z.string().transform(v => new RFCDate(v)).optional(),
}).transform((v) => {
  return remap$(v, {
    "effective_date": "effectiveDate",
  });
});

/** @internal */
export type Termination$Outbound = {
  effective_date?: string | undefined;
};

/** @internal */
export const Termination$outboundSchema: z.ZodType<
  Termination$Outbound,
  z.ZodTypeDef,
  Termination
> = z.object({
  effectiveDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
}).transform((v) => {
  return remap$(v, {
    effectiveDate: "effective_date",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Termination$ {
  /** @deprecated use `Termination$inboundSchema` instead. */
  export const inboundSchema = Termination$inboundSchema;
  /** @deprecated use `Termination$outboundSchema` instead. */
  export const outboundSchema = Termination$outboundSchema;
  /** @deprecated use `Termination$Outbound` instead. */
  export type Outbound = Termination$Outbound;
}

export function terminationToJSON(termination: Termination): string {
  return JSON.stringify(Termination$outboundSchema.parse(termination));
}

export function terminationFromJSON(
  jsonString: string,
): SafeParseResult<Termination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Termination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Termination' from JSON`,
  );
}

/** @internal */
export const Job$inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown> = z
  .object({
    hire_date: z.string().transform(v => new RFCDate(v)).optional(),
  }).transform((v) => {
    return remap$(v, {
      "hire_date": "hireDate",
    });
  });

/** @internal */
export type Job$Outbound = {
  hire_date?: string | undefined;
};

/** @internal */
export const Job$outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job> = z
  .object({
    hireDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
  }).transform((v) => {
    return remap$(v, {
      hireDate: "hire_date",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Job$ {
  /** @deprecated use `Job$inboundSchema` instead. */
  export const inboundSchema = Job$inboundSchema;
  /** @deprecated use `Job$outboundSchema` instead. */
  export const outboundSchema = Job$outboundSchema;
  /** @deprecated use `Job$Outbound` instead. */
  export type Outbound = Job$Outbound;
}

export function jobToJSON(job: Job): string {
  return JSON.stringify(Job$outboundSchema.parse(job));
}

export function jobFromJSON(
  jsonString: string,
): SafeParseResult<Job, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Job$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Job' from JSON`,
  );
}

/** @internal */
export const EmployeeStateTaxes$inboundSchema: z.ZodType<
  EmployeeStateTaxes,
  z.ZodTypeDef,
  unknown
> = z.object({
  wc_covered: z.boolean().optional(),
  wc_class_code: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "wc_covered": "wcCovered",
    "wc_class_code": "wcClassCode",
  });
});

/** @internal */
export type EmployeeStateTaxes$Outbound = {
  wc_covered?: boolean | undefined;
  wc_class_code?: string | undefined;
};

/** @internal */
export const EmployeeStateTaxes$outboundSchema: z.ZodType<
  EmployeeStateTaxes$Outbound,
  z.ZodTypeDef,
  EmployeeStateTaxes
> = z.object({
  wcCovered: z.boolean().optional(),
  wcClassCode: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    wcCovered: "wc_covered",
    wcClassCode: "wc_class_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeStateTaxes$ {
  /** @deprecated use `EmployeeStateTaxes$inboundSchema` instead. */
  export const inboundSchema = EmployeeStateTaxes$inboundSchema;
  /** @deprecated use `EmployeeStateTaxes$outboundSchema` instead. */
  export const outboundSchema = EmployeeStateTaxes$outboundSchema;
  /** @deprecated use `EmployeeStateTaxes$Outbound` instead. */
  export type Outbound = EmployeeStateTaxes$Outbound;
}

export function employeeStateTaxesToJSON(
  employeeStateTaxes: EmployeeStateTaxes,
): string {
  return JSON.stringify(
    EmployeeStateTaxes$outboundSchema.parse(employeeStateTaxes),
  );
}

export function employeeStateTaxesFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeStateTaxes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeStateTaxes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeStateTaxes' from JSON`,
  );
}

/** @internal */
export const PutV1HistoricalEmployeesRequestBody$inboundSchema: z.ZodType<
  PutV1HistoricalEmployeesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
  first_name: z.string(),
  middle_initial: z.string().optional(),
  last_name: z.string(),
  preferred_first_name: z.string().optional(),
  date_of_birth: z.string(),
  ssn: z.string(),
  work_address: z.lazy(() => WorkAddress$inboundSchema),
  home_address: z.lazy(() => PutV1HistoricalEmployeesHomeAddress$inboundSchema),
  termination: z.lazy(() => Termination$inboundSchema),
  email: z.string().optional(),
  job: z.lazy(() => Job$inboundSchema),
  employee_state_taxes: z.lazy(() => EmployeeStateTaxes$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "middle_initial": "middleInitial",
    "last_name": "lastName",
    "preferred_first_name": "preferredFirstName",
    "date_of_birth": "dateOfBirth",
    "work_address": "workAddress",
    "home_address": "homeAddress",
    "employee_state_taxes": "employeeStateTaxes",
  });
});

/** @internal */
export type PutV1HistoricalEmployeesRequestBody$Outbound = {
  version: string;
  first_name: string;
  middle_initial?: string | undefined;
  last_name: string;
  preferred_first_name?: string | undefined;
  date_of_birth: string;
  ssn: string;
  work_address: WorkAddress$Outbound;
  home_address: PutV1HistoricalEmployeesHomeAddress$Outbound;
  termination: Termination$Outbound;
  email?: string | undefined;
  job: Job$Outbound;
  employee_state_taxes?: EmployeeStateTaxes$Outbound | undefined;
};

/** @internal */
export const PutV1HistoricalEmployeesRequestBody$outboundSchema: z.ZodType<
  PutV1HistoricalEmployeesRequestBody$Outbound,
  z.ZodTypeDef,
  PutV1HistoricalEmployeesRequestBody
> = z.object({
  version: z.string(),
  firstName: z.string(),
  middleInitial: z.string().optional(),
  lastName: z.string(),
  preferredFirstName: z.string().optional(),
  dateOfBirth: z.string(),
  ssn: z.string(),
  workAddress: z.lazy(() => WorkAddress$outboundSchema),
  homeAddress: z.lazy(() => PutV1HistoricalEmployeesHomeAddress$outboundSchema),
  termination: z.lazy(() => Termination$outboundSchema),
  email: z.string().optional(),
  job: z.lazy(() => Job$outboundSchema),
  employeeStateTaxes: z.lazy(() => EmployeeStateTaxes$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    middleInitial: "middle_initial",
    lastName: "last_name",
    preferredFirstName: "preferred_first_name",
    dateOfBirth: "date_of_birth",
    workAddress: "work_address",
    homeAddress: "home_address",
    employeeStateTaxes: "employee_state_taxes",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1HistoricalEmployeesRequestBody$ {
  /** @deprecated use `PutV1HistoricalEmployeesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV1HistoricalEmployeesRequestBody$inboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV1HistoricalEmployeesRequestBody$outboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesRequestBody$Outbound` instead. */
  export type Outbound = PutV1HistoricalEmployeesRequestBody$Outbound;
}

export function putV1HistoricalEmployeesRequestBodyToJSON(
  putV1HistoricalEmployeesRequestBody: PutV1HistoricalEmployeesRequestBody,
): string {
  return JSON.stringify(
    PutV1HistoricalEmployeesRequestBody$outboundSchema.parse(
      putV1HistoricalEmployeesRequestBody,
    ),
  );
}

export function putV1HistoricalEmployeesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutV1HistoricalEmployeesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1HistoricalEmployeesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1HistoricalEmployeesRequestBody' from JSON`,
  );
}

/** @internal */
export const PutV1HistoricalEmployeesRequest$inboundSchema: z.ZodType<
  PutV1HistoricalEmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_uuid: z.string(),
  historical_employee_uuid: z.string(),
  "X-Gusto-API-Version": VersionHeader$inboundSchema.default("2024-04-01"),
  RequestBody: z.lazy(() => PutV1HistoricalEmployeesRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "historical_employee_uuid": "historicalEmployeeUuid",
    "X-Gusto-API-Version": "xGustoAPIVersion",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutV1HistoricalEmployeesRequest$Outbound = {
  company_uuid: string;
  historical_employee_uuid: string;
  "X-Gusto-API-Version": string;
  RequestBody: PutV1HistoricalEmployeesRequestBody$Outbound;
};

/** @internal */
export const PutV1HistoricalEmployeesRequest$outboundSchema: z.ZodType<
  PutV1HistoricalEmployeesRequest$Outbound,
  z.ZodTypeDef,
  PutV1HistoricalEmployeesRequest
> = z.object({
  companyUuid: z.string(),
  historicalEmployeeUuid: z.string(),
  xGustoAPIVersion: VersionHeader$outboundSchema.default("2024-04-01"),
  requestBody: z.lazy(() => PutV1HistoricalEmployeesRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    historicalEmployeeUuid: "historical_employee_uuid",
    xGustoAPIVersion: "X-Gusto-API-Version",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1HistoricalEmployeesRequest$ {
  /** @deprecated use `PutV1HistoricalEmployeesRequest$inboundSchema` instead. */
  export const inboundSchema = PutV1HistoricalEmployeesRequest$inboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesRequest$outboundSchema` instead. */
  export const outboundSchema = PutV1HistoricalEmployeesRequest$outboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesRequest$Outbound` instead. */
  export type Outbound = PutV1HistoricalEmployeesRequest$Outbound;
}

export function putV1HistoricalEmployeesRequestToJSON(
  putV1HistoricalEmployeesRequest: PutV1HistoricalEmployeesRequest,
): string {
  return JSON.stringify(
    PutV1HistoricalEmployeesRequest$outboundSchema.parse(
      putV1HistoricalEmployeesRequest,
    ),
  );
}

export function putV1HistoricalEmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutV1HistoricalEmployeesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1HistoricalEmployeesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1HistoricalEmployeesRequest' from JSON`,
  );
}

/** @internal */
export const PutV1HistoricalEmployeesResponse$inboundSchema: z.ZodType<
  PutV1HistoricalEmployeesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Employee: Employee$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Employee": "employee",
  });
});

/** @internal */
export type PutV1HistoricalEmployeesResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Employee?: Employee$Outbound | undefined;
};

/** @internal */
export const PutV1HistoricalEmployeesResponse$outboundSchema: z.ZodType<
  PutV1HistoricalEmployeesResponse$Outbound,
  z.ZodTypeDef,
  PutV1HistoricalEmployeesResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  employee: Employee$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    employee: "Employee",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1HistoricalEmployeesResponse$ {
  /** @deprecated use `PutV1HistoricalEmployeesResponse$inboundSchema` instead. */
  export const inboundSchema = PutV1HistoricalEmployeesResponse$inboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesResponse$outboundSchema` instead. */
  export const outboundSchema = PutV1HistoricalEmployeesResponse$outboundSchema;
  /** @deprecated use `PutV1HistoricalEmployeesResponse$Outbound` instead. */
  export type Outbound = PutV1HistoricalEmployeesResponse$Outbound;
}

export function putV1HistoricalEmployeesResponseToJSON(
  putV1HistoricalEmployeesResponse: PutV1HistoricalEmployeesResponse,
): string {
  return JSON.stringify(
    PutV1HistoricalEmployeesResponse$outboundSchema.parse(
      putV1HistoricalEmployeesResponse,
    ),
  );
}

export function putV1HistoricalEmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<PutV1HistoricalEmployeesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1HistoricalEmployeesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1HistoricalEmployeesResponse' from JSON`,
  );
}
