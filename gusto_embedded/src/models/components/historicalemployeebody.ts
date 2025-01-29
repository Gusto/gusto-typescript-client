/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkAddress = {
  /**
   * Reference to a company location
   */
  locationUuid?: string | undefined;
};

export type HistoricalEmployeeBodyHomeAddress = {
  street1: string;
  street2?: string | null | undefined;
  city: string;
  state: string;
  zip: string;
};

export type HistoricalEmployeeBodyTermination = {
  /**
   * Date the employee was terminated from the company
   */
  effectiveDate?: RFCDate | undefined;
};

export type HistoricalEmployeeBodyJob = {
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

export type HistoricalEmployeeBody = {
  firstName: string;
  middleInitial?: string | undefined;
  lastName: string;
  preferredFirstName?: string | undefined;
  dateOfBirth: string;
  ssn: string;
  workAddress: WorkAddress;
  homeAddress: HistoricalEmployeeBodyHomeAddress;
  termination: HistoricalEmployeeBodyTermination;
  job: HistoricalEmployeeBodyJob;
  employeeStateTaxes?: EmployeeStateTaxes | undefined;
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
export const HistoricalEmployeeBodyHomeAddress$inboundSchema: z.ZodType<
  HistoricalEmployeeBodyHomeAddress,
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
export type HistoricalEmployeeBodyHomeAddress$Outbound = {
  street_1: string;
  street_2?: string | null | undefined;
  city: string;
  state: string;
  zip: string;
};

/** @internal */
export const HistoricalEmployeeBodyHomeAddress$outboundSchema: z.ZodType<
  HistoricalEmployeeBodyHomeAddress$Outbound,
  z.ZodTypeDef,
  HistoricalEmployeeBodyHomeAddress
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
export namespace HistoricalEmployeeBodyHomeAddress$ {
  /** @deprecated use `HistoricalEmployeeBodyHomeAddress$inboundSchema` instead. */
  export const inboundSchema = HistoricalEmployeeBodyHomeAddress$inboundSchema;
  /** @deprecated use `HistoricalEmployeeBodyHomeAddress$outboundSchema` instead. */
  export const outboundSchema =
    HistoricalEmployeeBodyHomeAddress$outboundSchema;
  /** @deprecated use `HistoricalEmployeeBodyHomeAddress$Outbound` instead. */
  export type Outbound = HistoricalEmployeeBodyHomeAddress$Outbound;
}

export function historicalEmployeeBodyHomeAddressToJSON(
  historicalEmployeeBodyHomeAddress: HistoricalEmployeeBodyHomeAddress,
): string {
  return JSON.stringify(
    HistoricalEmployeeBodyHomeAddress$outboundSchema.parse(
      historicalEmployeeBodyHomeAddress,
    ),
  );
}

export function historicalEmployeeBodyHomeAddressFromJSON(
  jsonString: string,
): SafeParseResult<HistoricalEmployeeBodyHomeAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HistoricalEmployeeBodyHomeAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HistoricalEmployeeBodyHomeAddress' from JSON`,
  );
}

/** @internal */
export const HistoricalEmployeeBodyTermination$inboundSchema: z.ZodType<
  HistoricalEmployeeBodyTermination,
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
export type HistoricalEmployeeBodyTermination$Outbound = {
  effective_date?: string | undefined;
};

/** @internal */
export const HistoricalEmployeeBodyTermination$outboundSchema: z.ZodType<
  HistoricalEmployeeBodyTermination$Outbound,
  z.ZodTypeDef,
  HistoricalEmployeeBodyTermination
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
export namespace HistoricalEmployeeBodyTermination$ {
  /** @deprecated use `HistoricalEmployeeBodyTermination$inboundSchema` instead. */
  export const inboundSchema = HistoricalEmployeeBodyTermination$inboundSchema;
  /** @deprecated use `HistoricalEmployeeBodyTermination$outboundSchema` instead. */
  export const outboundSchema =
    HistoricalEmployeeBodyTermination$outboundSchema;
  /** @deprecated use `HistoricalEmployeeBodyTermination$Outbound` instead. */
  export type Outbound = HistoricalEmployeeBodyTermination$Outbound;
}

export function historicalEmployeeBodyTerminationToJSON(
  historicalEmployeeBodyTermination: HistoricalEmployeeBodyTermination,
): string {
  return JSON.stringify(
    HistoricalEmployeeBodyTermination$outboundSchema.parse(
      historicalEmployeeBodyTermination,
    ),
  );
}

export function historicalEmployeeBodyTerminationFromJSON(
  jsonString: string,
): SafeParseResult<HistoricalEmployeeBodyTermination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HistoricalEmployeeBodyTermination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HistoricalEmployeeBodyTermination' from JSON`,
  );
}

/** @internal */
export const HistoricalEmployeeBodyJob$inboundSchema: z.ZodType<
  HistoricalEmployeeBodyJob,
  z.ZodTypeDef,
  unknown
> = z.object({
  hire_date: z.string().transform(v => new RFCDate(v)).optional(),
}).transform((v) => {
  return remap$(v, {
    "hire_date": "hireDate",
  });
});

/** @internal */
export type HistoricalEmployeeBodyJob$Outbound = {
  hire_date?: string | undefined;
};

/** @internal */
export const HistoricalEmployeeBodyJob$outboundSchema: z.ZodType<
  HistoricalEmployeeBodyJob$Outbound,
  z.ZodTypeDef,
  HistoricalEmployeeBodyJob
> = z.object({
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
export namespace HistoricalEmployeeBodyJob$ {
  /** @deprecated use `HistoricalEmployeeBodyJob$inboundSchema` instead. */
  export const inboundSchema = HistoricalEmployeeBodyJob$inboundSchema;
  /** @deprecated use `HistoricalEmployeeBodyJob$outboundSchema` instead. */
  export const outboundSchema = HistoricalEmployeeBodyJob$outboundSchema;
  /** @deprecated use `HistoricalEmployeeBodyJob$Outbound` instead. */
  export type Outbound = HistoricalEmployeeBodyJob$Outbound;
}

export function historicalEmployeeBodyJobToJSON(
  historicalEmployeeBodyJob: HistoricalEmployeeBodyJob,
): string {
  return JSON.stringify(
    HistoricalEmployeeBodyJob$outboundSchema.parse(historicalEmployeeBodyJob),
  );
}

export function historicalEmployeeBodyJobFromJSON(
  jsonString: string,
): SafeParseResult<HistoricalEmployeeBodyJob, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HistoricalEmployeeBodyJob$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HistoricalEmployeeBodyJob' from JSON`,
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
export const HistoricalEmployeeBody$inboundSchema: z.ZodType<
  HistoricalEmployeeBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  first_name: z.string(),
  middle_initial: z.string().optional(),
  last_name: z.string(),
  preferred_first_name: z.string().optional(),
  date_of_birth: z.string(),
  ssn: z.string(),
  work_address: z.lazy(() => WorkAddress$inboundSchema),
  home_address: z.lazy(() => HistoricalEmployeeBodyHomeAddress$inboundSchema),
  termination: z.lazy(() => HistoricalEmployeeBodyTermination$inboundSchema),
  job: z.lazy(() => HistoricalEmployeeBodyJob$inboundSchema),
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
export type HistoricalEmployeeBody$Outbound = {
  first_name: string;
  middle_initial?: string | undefined;
  last_name: string;
  preferred_first_name?: string | undefined;
  date_of_birth: string;
  ssn: string;
  work_address: WorkAddress$Outbound;
  home_address: HistoricalEmployeeBodyHomeAddress$Outbound;
  termination: HistoricalEmployeeBodyTermination$Outbound;
  job: HistoricalEmployeeBodyJob$Outbound;
  employee_state_taxes?: EmployeeStateTaxes$Outbound | undefined;
};

/** @internal */
export const HistoricalEmployeeBody$outboundSchema: z.ZodType<
  HistoricalEmployeeBody$Outbound,
  z.ZodTypeDef,
  HistoricalEmployeeBody
> = z.object({
  firstName: z.string(),
  middleInitial: z.string().optional(),
  lastName: z.string(),
  preferredFirstName: z.string().optional(),
  dateOfBirth: z.string(),
  ssn: z.string(),
  workAddress: z.lazy(() => WorkAddress$outboundSchema),
  homeAddress: z.lazy(() => HistoricalEmployeeBodyHomeAddress$outboundSchema),
  termination: z.lazy(() => HistoricalEmployeeBodyTermination$outboundSchema),
  job: z.lazy(() => HistoricalEmployeeBodyJob$outboundSchema),
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
export namespace HistoricalEmployeeBody$ {
  /** @deprecated use `HistoricalEmployeeBody$inboundSchema` instead. */
  export const inboundSchema = HistoricalEmployeeBody$inboundSchema;
  /** @deprecated use `HistoricalEmployeeBody$outboundSchema` instead. */
  export const outboundSchema = HistoricalEmployeeBody$outboundSchema;
  /** @deprecated use `HistoricalEmployeeBody$Outbound` instead. */
  export type Outbound = HistoricalEmployeeBody$Outbound;
}

export function historicalEmployeeBodyToJSON(
  historicalEmployeeBody: HistoricalEmployeeBody,
): string {
  return JSON.stringify(
    HistoricalEmployeeBody$outboundSchema.parse(historicalEmployeeBody),
  );
}

export function historicalEmployeeBodyFromJSON(
  jsonString: string,
): SafeParseResult<HistoricalEmployeeBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HistoricalEmployeeBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HistoricalEmployeeBody' from JSON`,
  );
}
