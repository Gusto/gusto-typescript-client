/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
 */
export const PayrollEmployeeCompensationsTypePaymentMethod = {
  DirectDeposit: "Direct Deposit",
  Check: "Check",
  Historical: "Historical",
} as const;
/**
 * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
 */
export type PayrollEmployeeCompensationsTypePaymentMethod = ClosedEnum<
  typeof PayrollEmployeeCompensationsTypePaymentMethod
>;

export type FixedCompensations = {
  /**
   * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
   */
  name?: string | undefined;
  /**
   * The amount of the compensation for the pay period.
   */
  amount?: string | undefined;
  /**
   * The UUID of the job for the compensation.
   */
  jobUuid?: string | undefined;
};

export type HourlyCompensations = {
  /**
   * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
   */
  name?: string | undefined;
  /**
   * The number of hours to be compensated for this pay period.
   */
  hours?: string | undefined;
  /**
   * The amount of the compensation. This field is only available after the payroll is calculated and cannot be used for updating hourly compensations.
   */
  amount?: string | undefined;
  /**
   * The UUID of the job for the compensation.
   */
  jobUuid?: string | undefined;
  /**
   * The amount multiplied by the base rate to calculate total compensation per hour worked.
   */
  compensationMultiplier?: number | undefined;
  /**
   * The FLSA Status of the employee's primary job compensation
   */
  flsaStatus?: string | undefined;
};

export type PayrollEmployeeCompensationsTypePaidTimeOff = {
  /**
   * The name of the PTO. This also serves as the unique, immutable identifier for the PTO.
   */
  name?: string | undefined;
  /**
   * The hours of this PTO taken during the pay period.
   */
  hours?: string | undefined;
  /**
   * The outstanding hours paid upon termination. This field is only applicable for termination payrolls.
   */
  finalPayoutUnusedHoursInput?: string | undefined;
};

export type Benefits = {
  name?: string | undefined;
  employeeDeduction?: number | undefined;
  companyContribution?: number | undefined;
  imputed?: boolean | undefined;
};

export type Deductions = {
  name?: string | undefined;
  amount?: number | undefined;
};

export type Taxes = {
  name: string;
  employer: boolean;
  amount: number;
};

export type PayrollEmployeeCompensationsType = {
  /**
   * The UUID of the employee.
   */
  employeeUuid?: string | undefined;
  /**
   * This employee will be excluded (skipped) from payroll calculation and will not be paid for the payroll. Cancelling a payroll would reset all employees' excluded back to false.
   */
  excluded?: boolean | undefined;
  /**
   * The current version of this employee compensation. This field is only available for prepared payrolls. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
   */
  version?: string | undefined;
  /**
   * The employee's gross pay, equal to regular wages + cash tips + payroll tips + any other additional earnings, excluding imputed income. This value is only available for processed payrolls.
   */
  grossPay?: number | null | undefined;
  /**
   * The employee's net pay, equal to gross_pay - employee taxes - employee deductions or garnishments - cash tips. This value is only available for processed payrolls.
   */
  netPay?: number | null | undefined;
  /**
   * The employee's check amount, equal to net_pay + reimbursements. This value is only available for processed payrolls.
   */
  checkAmount?: number | null | undefined;
  /**
   * The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.
   */
  paymentMethod?:
    | PayrollEmployeeCompensationsTypePaymentMethod
    | null
    | undefined;
  /**
   * Custom text that will be printed as a personal note to the employee on a paystub.
   */
  memo?: string | null | undefined;
  /**
   * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements. If this payroll has been processed, only fixed compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active fixed compensations are returned.
   */
  fixedCompensations?: Array<FixedCompensations> | undefined;
  /**
   * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours. If this payroll has been processed, only hourly compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active hourly compensations are returned.
   */
  hourlyCompensations?: Array<HourlyCompensations> | undefined;
  /**
   * An array of all paid time off the employee is eligible for this pay period.
   */
  paidTimeOff?: Array<PayrollEmployeeCompensationsTypePaidTimeOff> | undefined;
  /**
   * An array of employee benefits for the pay period. Benefits are only included for processed payroll when the include parameter is present.
   */
  benefits?: Array<Benefits> | undefined;
  /**
   * An array of employee deductions for the pay period. Deductions are only included for processed payroll when the include parameter is present.
   */
  deductions?: Array<Deductions> | undefined;
  /**
   * An array of employer and employee taxes for the pay period. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
   */
  taxes?: Array<Taxes> | undefined;
};

/** @internal */
export const PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema:
  z.ZodNativeEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod> = z
    .nativeEnum(PayrollEmployeeCompensationsTypePaymentMethod);

/** @internal */
export const PayrollEmployeeCompensationsTypePaymentMethod$outboundSchema:
  z.ZodNativeEnum<typeof PayrollEmployeeCompensationsTypePaymentMethod> =
    PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollEmployeeCompensationsTypePaymentMethod$ {
  /** @deprecated use `PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema` instead. */
  export const inboundSchema =
    PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema;
  /** @deprecated use `PayrollEmployeeCompensationsTypePaymentMethod$outboundSchema` instead. */
  export const outboundSchema =
    PayrollEmployeeCompensationsTypePaymentMethod$outboundSchema;
}

/** @internal */
export const FixedCompensations$inboundSchema: z.ZodType<
  FixedCompensations,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  amount: z.string().optional(),
  job_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "job_uuid": "jobUuid",
  });
});

/** @internal */
export type FixedCompensations$Outbound = {
  name?: string | undefined;
  amount?: string | undefined;
  job_uuid?: string | undefined;
};

/** @internal */
export const FixedCompensations$outboundSchema: z.ZodType<
  FixedCompensations$Outbound,
  z.ZodTypeDef,
  FixedCompensations
> = z.object({
  name: z.string().optional(),
  amount: z.string().optional(),
  jobUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    jobUuid: "job_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FixedCompensations$ {
  /** @deprecated use `FixedCompensations$inboundSchema` instead. */
  export const inboundSchema = FixedCompensations$inboundSchema;
  /** @deprecated use `FixedCompensations$outboundSchema` instead. */
  export const outboundSchema = FixedCompensations$outboundSchema;
  /** @deprecated use `FixedCompensations$Outbound` instead. */
  export type Outbound = FixedCompensations$Outbound;
}

export function fixedCompensationsToJSON(
  fixedCompensations: FixedCompensations,
): string {
  return JSON.stringify(
    FixedCompensations$outboundSchema.parse(fixedCompensations),
  );
}

export function fixedCompensationsFromJSON(
  jsonString: string,
): SafeParseResult<FixedCompensations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FixedCompensations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FixedCompensations' from JSON`,
  );
}

/** @internal */
export const HourlyCompensations$inboundSchema: z.ZodType<
  HourlyCompensations,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  hours: z.string().optional(),
  amount: z.string().optional(),
  job_uuid: z.string().optional(),
  compensation_multiplier: z.number().optional(),
  flsa_status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "job_uuid": "jobUuid",
    "compensation_multiplier": "compensationMultiplier",
    "flsa_status": "flsaStatus",
  });
});

/** @internal */
export type HourlyCompensations$Outbound = {
  name?: string | undefined;
  hours?: string | undefined;
  amount?: string | undefined;
  job_uuid?: string | undefined;
  compensation_multiplier?: number | undefined;
  flsa_status?: string | undefined;
};

/** @internal */
export const HourlyCompensations$outboundSchema: z.ZodType<
  HourlyCompensations$Outbound,
  z.ZodTypeDef,
  HourlyCompensations
> = z.object({
  name: z.string().optional(),
  hours: z.string().optional(),
  amount: z.string().optional(),
  jobUuid: z.string().optional(),
  compensationMultiplier: z.number().optional(),
  flsaStatus: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    jobUuid: "job_uuid",
    compensationMultiplier: "compensation_multiplier",
    flsaStatus: "flsa_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HourlyCompensations$ {
  /** @deprecated use `HourlyCompensations$inboundSchema` instead. */
  export const inboundSchema = HourlyCompensations$inboundSchema;
  /** @deprecated use `HourlyCompensations$outboundSchema` instead. */
  export const outboundSchema = HourlyCompensations$outboundSchema;
  /** @deprecated use `HourlyCompensations$Outbound` instead. */
  export type Outbound = HourlyCompensations$Outbound;
}

export function hourlyCompensationsToJSON(
  hourlyCompensations: HourlyCompensations,
): string {
  return JSON.stringify(
    HourlyCompensations$outboundSchema.parse(hourlyCompensations),
  );
}

export function hourlyCompensationsFromJSON(
  jsonString: string,
): SafeParseResult<HourlyCompensations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HourlyCompensations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HourlyCompensations' from JSON`,
  );
}

/** @internal */
export const PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema:
  z.ZodType<
    PayrollEmployeeCompensationsTypePaidTimeOff,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string().optional(),
    hours: z.string().optional(),
    final_payout_unused_hours_input: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "final_payout_unused_hours_input": "finalPayoutUnusedHoursInput",
    });
  });

/** @internal */
export type PayrollEmployeeCompensationsTypePaidTimeOff$Outbound = {
  name?: string | undefined;
  hours?: string | undefined;
  final_payout_unused_hours_input?: string | undefined;
};

/** @internal */
export const PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema:
  z.ZodType<
    PayrollEmployeeCompensationsTypePaidTimeOff$Outbound,
    z.ZodTypeDef,
    PayrollEmployeeCompensationsTypePaidTimeOff
  > = z.object({
    name: z.string().optional(),
    hours: z.string().optional(),
    finalPayoutUnusedHoursInput: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      finalPayoutUnusedHoursInput: "final_payout_unused_hours_input",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollEmployeeCompensationsTypePaidTimeOff$ {
  /** @deprecated use `PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema` instead. */
  export const inboundSchema =
    PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema;
  /** @deprecated use `PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema` instead. */
  export const outboundSchema =
    PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema;
  /** @deprecated use `PayrollEmployeeCompensationsTypePaidTimeOff$Outbound` instead. */
  export type Outbound = PayrollEmployeeCompensationsTypePaidTimeOff$Outbound;
}

export function payrollEmployeeCompensationsTypePaidTimeOffToJSON(
  payrollEmployeeCompensationsTypePaidTimeOff:
    PayrollEmployeeCompensationsTypePaidTimeOff,
): string {
  return JSON.stringify(
    PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema.parse(
      payrollEmployeeCompensationsTypePaidTimeOff,
    ),
  );
}

export function payrollEmployeeCompensationsTypePaidTimeOffFromJSON(
  jsonString: string,
): SafeParseResult<
  PayrollEmployeeCompensationsTypePaidTimeOff,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PayrollEmployeeCompensationsTypePaidTimeOff' from JSON`,
  );
}

/** @internal */
export const Benefits$inboundSchema: z.ZodType<
  Benefits,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  employee_deduction: z.number().optional(),
  company_contribution: z.number().optional(),
  imputed: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_deduction": "employeeDeduction",
    "company_contribution": "companyContribution",
  });
});

/** @internal */
export type Benefits$Outbound = {
  name?: string | undefined;
  employee_deduction?: number | undefined;
  company_contribution?: number | undefined;
  imputed?: boolean | undefined;
};

/** @internal */
export const Benefits$outboundSchema: z.ZodType<
  Benefits$Outbound,
  z.ZodTypeDef,
  Benefits
> = z.object({
  name: z.string().optional(),
  employeeDeduction: z.number().optional(),
  companyContribution: z.number().optional(),
  imputed: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeDeduction: "employee_deduction",
    companyContribution: "company_contribution",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Benefits$ {
  /** @deprecated use `Benefits$inboundSchema` instead. */
  export const inboundSchema = Benefits$inboundSchema;
  /** @deprecated use `Benefits$outboundSchema` instead. */
  export const outboundSchema = Benefits$outboundSchema;
  /** @deprecated use `Benefits$Outbound` instead. */
  export type Outbound = Benefits$Outbound;
}

export function benefitsToJSON(benefits: Benefits): string {
  return JSON.stringify(Benefits$outboundSchema.parse(benefits));
}

export function benefitsFromJSON(
  jsonString: string,
): SafeParseResult<Benefits, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Benefits$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Benefits' from JSON`,
  );
}

/** @internal */
export const Deductions$inboundSchema: z.ZodType<
  Deductions,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  amount: z.number().optional(),
});

/** @internal */
export type Deductions$Outbound = {
  name?: string | undefined;
  amount?: number | undefined;
};

/** @internal */
export const Deductions$outboundSchema: z.ZodType<
  Deductions$Outbound,
  z.ZodTypeDef,
  Deductions
> = z.object({
  name: z.string().optional(),
  amount: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Deductions$ {
  /** @deprecated use `Deductions$inboundSchema` instead. */
  export const inboundSchema = Deductions$inboundSchema;
  /** @deprecated use `Deductions$outboundSchema` instead. */
  export const outboundSchema = Deductions$outboundSchema;
  /** @deprecated use `Deductions$Outbound` instead. */
  export type Outbound = Deductions$Outbound;
}

export function deductionsToJSON(deductions: Deductions): string {
  return JSON.stringify(Deductions$outboundSchema.parse(deductions));
}

export function deductionsFromJSON(
  jsonString: string,
): SafeParseResult<Deductions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Deductions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Deductions' from JSON`,
  );
}

/** @internal */
export const Taxes$inboundSchema: z.ZodType<Taxes, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string(),
    employer: z.boolean(),
    amount: z.number(),
  });

/** @internal */
export type Taxes$Outbound = {
  name: string;
  employer: boolean;
  amount: number;
};

/** @internal */
export const Taxes$outboundSchema: z.ZodType<
  Taxes$Outbound,
  z.ZodTypeDef,
  Taxes
> = z.object({
  name: z.string(),
  employer: z.boolean(),
  amount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Taxes$ {
  /** @deprecated use `Taxes$inboundSchema` instead. */
  export const inboundSchema = Taxes$inboundSchema;
  /** @deprecated use `Taxes$outboundSchema` instead. */
  export const outboundSchema = Taxes$outboundSchema;
  /** @deprecated use `Taxes$Outbound` instead. */
  export type Outbound = Taxes$Outbound;
}

export function taxesToJSON(taxes: Taxes): string {
  return JSON.stringify(Taxes$outboundSchema.parse(taxes));
}

export function taxesFromJSON(
  jsonString: string,
): SafeParseResult<Taxes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Taxes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Taxes' from JSON`,
  );
}

/** @internal */
export const PayrollEmployeeCompensationsType$inboundSchema: z.ZodType<
  PayrollEmployeeCompensationsType,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string().optional(),
  excluded: z.boolean().optional(),
  version: z.string().optional(),
  gross_pay: z.nullable(z.number()).optional(),
  net_pay: z.nullable(z.number()).optional(),
  check_amount: z.nullable(z.number()).optional(),
  payment_method: z.nullable(
    PayrollEmployeeCompensationsTypePaymentMethod$inboundSchema,
  ).optional(),
  memo: z.nullable(z.string()).optional(),
  fixed_compensations: z.array(z.lazy(() => FixedCompensations$inboundSchema))
    .optional(),
  hourly_compensations: z.array(z.lazy(() => HourlyCompensations$inboundSchema))
    .optional(),
  paid_time_off: z.array(
    z.lazy(() => PayrollEmployeeCompensationsTypePaidTimeOff$inboundSchema),
  ).optional(),
  benefits: z.array(z.lazy(() => Benefits$inboundSchema)).optional(),
  deductions: z.array(z.lazy(() => Deductions$inboundSchema)).optional(),
  taxes: z.array(z.lazy(() => Taxes$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "gross_pay": "grossPay",
    "net_pay": "netPay",
    "check_amount": "checkAmount",
    "payment_method": "paymentMethod",
    "fixed_compensations": "fixedCompensations",
    "hourly_compensations": "hourlyCompensations",
    "paid_time_off": "paidTimeOff",
  });
});

/** @internal */
export type PayrollEmployeeCompensationsType$Outbound = {
  employee_uuid?: string | undefined;
  excluded?: boolean | undefined;
  version?: string | undefined;
  gross_pay?: number | null | undefined;
  net_pay?: number | null | undefined;
  check_amount?: number | null | undefined;
  payment_method?: string | null | undefined;
  memo?: string | null | undefined;
  fixed_compensations?: Array<FixedCompensations$Outbound> | undefined;
  hourly_compensations?: Array<HourlyCompensations$Outbound> | undefined;
  paid_time_off?:
    | Array<PayrollEmployeeCompensationsTypePaidTimeOff$Outbound>
    | undefined;
  benefits?: Array<Benefits$Outbound> | undefined;
  deductions?: Array<Deductions$Outbound> | undefined;
  taxes?: Array<Taxes$Outbound> | undefined;
};

/** @internal */
export const PayrollEmployeeCompensationsType$outboundSchema: z.ZodType<
  PayrollEmployeeCompensationsType$Outbound,
  z.ZodTypeDef,
  PayrollEmployeeCompensationsType
> = z.object({
  employeeUuid: z.string().optional(),
  excluded: z.boolean().optional(),
  version: z.string().optional(),
  grossPay: z.nullable(z.number()).optional(),
  netPay: z.nullable(z.number()).optional(),
  checkAmount: z.nullable(z.number()).optional(),
  paymentMethod: z.nullable(
    PayrollEmployeeCompensationsTypePaymentMethod$outboundSchema,
  ).optional(),
  memo: z.nullable(z.string()).optional(),
  fixedCompensations: z.array(z.lazy(() => FixedCompensations$outboundSchema))
    .optional(),
  hourlyCompensations: z.array(z.lazy(() => HourlyCompensations$outboundSchema))
    .optional(),
  paidTimeOff: z.array(
    z.lazy(() => PayrollEmployeeCompensationsTypePaidTimeOff$outboundSchema),
  ).optional(),
  benefits: z.array(z.lazy(() => Benefits$outboundSchema)).optional(),
  deductions: z.array(z.lazy(() => Deductions$outboundSchema)).optional(),
  taxes: z.array(z.lazy(() => Taxes$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    grossPay: "gross_pay",
    netPay: "net_pay",
    checkAmount: "check_amount",
    paymentMethod: "payment_method",
    fixedCompensations: "fixed_compensations",
    hourlyCompensations: "hourly_compensations",
    paidTimeOff: "paid_time_off",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollEmployeeCompensationsType$ {
  /** @deprecated use `PayrollEmployeeCompensationsType$inboundSchema` instead. */
  export const inboundSchema = PayrollEmployeeCompensationsType$inboundSchema;
  /** @deprecated use `PayrollEmployeeCompensationsType$outboundSchema` instead. */
  export const outboundSchema = PayrollEmployeeCompensationsType$outboundSchema;
  /** @deprecated use `PayrollEmployeeCompensationsType$Outbound` instead. */
  export type Outbound = PayrollEmployeeCompensationsType$Outbound;
}

export function payrollEmployeeCompensationsTypeToJSON(
  payrollEmployeeCompensationsType: PayrollEmployeeCompensationsType,
): string {
  return JSON.stringify(
    PayrollEmployeeCompensationsType$outboundSchema.parse(
      payrollEmployeeCompensationsType,
    ),
  );
}

export function payrollEmployeeCompensationsTypeFromJSON(
  jsonString: string,
): SafeParseResult<PayrollEmployeeCompensationsType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollEmployeeCompensationsType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollEmployeeCompensationsType' from JSON`,
  );
}
