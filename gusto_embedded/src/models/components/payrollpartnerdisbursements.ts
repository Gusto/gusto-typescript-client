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
 * The payment method for the disbursement
 */
export const PayrollPartnerDisbursementsPaymentMethod = {
  DirectDeposit: "Direct Deposit",
  Check: "Check",
} as const;
/**
 * The payment method for the disbursement
 */
export type PayrollPartnerDisbursementsPaymentMethod = ClosedEnum<
  typeof PayrollPartnerDisbursementsPaymentMethod
>;

/**
 * The status of the payment
 */
export const PayrollPartnerDisbursementsPaymentStatus = {
  Pending: "Pending",
  Paid: "Paid",
  NotPartnerManaged: "Not partner managed",
  ConvertedToCheck: "Converted to check",
} as const;
/**
 * The status of the payment
 */
export type PayrollPartnerDisbursementsPaymentStatus = ClosedEnum<
  typeof PayrollPartnerDisbursementsPaymentStatus
>;

export type PayrollPartnerDisbursementsDisbursements = {
  /**
   * The UUID of the employee
   */
  employeeUuid?: string | undefined;
  /**
   * The payment method for the disbursement
   */
  paymentMethod?: PayrollPartnerDisbursementsPaymentMethod | undefined;
  /**
   * The status of the payment
   */
  paymentStatus?: PayrollPartnerDisbursementsPaymentStatus | undefined;
};

/**
 * Partner disbursements for a payroll
 */
export type PayrollPartnerDisbursements = {
  /**
   * The UUID of the payroll
   */
  payrollUuid?: string | undefined;
  /**
   * List of disbursements for the payroll
   */
  disbursements?: Array<PayrollPartnerDisbursementsDisbursements> | undefined;
};

/** @internal */
export const PayrollPartnerDisbursementsPaymentMethod$inboundSchema:
  z.ZodNativeEnum<typeof PayrollPartnerDisbursementsPaymentMethod> = z
    .nativeEnum(PayrollPartnerDisbursementsPaymentMethod);

/** @internal */
export const PayrollPartnerDisbursementsPaymentMethod$outboundSchema:
  z.ZodNativeEnum<typeof PayrollPartnerDisbursementsPaymentMethod> =
    PayrollPartnerDisbursementsPaymentMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollPartnerDisbursementsPaymentMethod$ {
  /** @deprecated use `PayrollPartnerDisbursementsPaymentMethod$inboundSchema` instead. */
  export const inboundSchema =
    PayrollPartnerDisbursementsPaymentMethod$inboundSchema;
  /** @deprecated use `PayrollPartnerDisbursementsPaymentMethod$outboundSchema` instead. */
  export const outboundSchema =
    PayrollPartnerDisbursementsPaymentMethod$outboundSchema;
}

/** @internal */
export const PayrollPartnerDisbursementsPaymentStatus$inboundSchema:
  z.ZodNativeEnum<typeof PayrollPartnerDisbursementsPaymentStatus> = z
    .nativeEnum(PayrollPartnerDisbursementsPaymentStatus);

/** @internal */
export const PayrollPartnerDisbursementsPaymentStatus$outboundSchema:
  z.ZodNativeEnum<typeof PayrollPartnerDisbursementsPaymentStatus> =
    PayrollPartnerDisbursementsPaymentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollPartnerDisbursementsPaymentStatus$ {
  /** @deprecated use `PayrollPartnerDisbursementsPaymentStatus$inboundSchema` instead. */
  export const inboundSchema =
    PayrollPartnerDisbursementsPaymentStatus$inboundSchema;
  /** @deprecated use `PayrollPartnerDisbursementsPaymentStatus$outboundSchema` instead. */
  export const outboundSchema =
    PayrollPartnerDisbursementsPaymentStatus$outboundSchema;
}

/** @internal */
export const PayrollPartnerDisbursementsDisbursements$inboundSchema: z.ZodType<
  PayrollPartnerDisbursementsDisbursements,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string().optional(),
  payment_method: PayrollPartnerDisbursementsPaymentMethod$inboundSchema
    .optional(),
  payment_status: PayrollPartnerDisbursementsPaymentStatus$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "payment_method": "paymentMethod",
    "payment_status": "paymentStatus",
  });
});

/** @internal */
export type PayrollPartnerDisbursementsDisbursements$Outbound = {
  employee_uuid?: string | undefined;
  payment_method?: string | undefined;
  payment_status?: string | undefined;
};

/** @internal */
export const PayrollPartnerDisbursementsDisbursements$outboundSchema: z.ZodType<
  PayrollPartnerDisbursementsDisbursements$Outbound,
  z.ZodTypeDef,
  PayrollPartnerDisbursementsDisbursements
> = z.object({
  employeeUuid: z.string().optional(),
  paymentMethod: PayrollPartnerDisbursementsPaymentMethod$outboundSchema
    .optional(),
  paymentStatus: PayrollPartnerDisbursementsPaymentStatus$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    paymentMethod: "payment_method",
    paymentStatus: "payment_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollPartnerDisbursementsDisbursements$ {
  /** @deprecated use `PayrollPartnerDisbursementsDisbursements$inboundSchema` instead. */
  export const inboundSchema =
    PayrollPartnerDisbursementsDisbursements$inboundSchema;
  /** @deprecated use `PayrollPartnerDisbursementsDisbursements$outboundSchema` instead. */
  export const outboundSchema =
    PayrollPartnerDisbursementsDisbursements$outboundSchema;
  /** @deprecated use `PayrollPartnerDisbursementsDisbursements$Outbound` instead. */
  export type Outbound = PayrollPartnerDisbursementsDisbursements$Outbound;
}

export function payrollPartnerDisbursementsDisbursementsToJSON(
  payrollPartnerDisbursementsDisbursements:
    PayrollPartnerDisbursementsDisbursements,
): string {
  return JSON.stringify(
    PayrollPartnerDisbursementsDisbursements$outboundSchema.parse(
      payrollPartnerDisbursementsDisbursements,
    ),
  );
}

export function payrollPartnerDisbursementsDisbursementsFromJSON(
  jsonString: string,
): SafeParseResult<
  PayrollPartnerDisbursementsDisbursements,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PayrollPartnerDisbursementsDisbursements$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PayrollPartnerDisbursementsDisbursements' from JSON`,
  );
}

/** @internal */
export const PayrollPartnerDisbursements$inboundSchema: z.ZodType<
  PayrollPartnerDisbursements,
  z.ZodTypeDef,
  unknown
> = z.object({
  payroll_uuid: z.string().optional(),
  disbursements: z.array(
    z.lazy(() => PayrollPartnerDisbursementsDisbursements$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "payroll_uuid": "payrollUuid",
  });
});

/** @internal */
export type PayrollPartnerDisbursements$Outbound = {
  payroll_uuid?: string | undefined;
  disbursements?:
    | Array<PayrollPartnerDisbursementsDisbursements$Outbound>
    | undefined;
};

/** @internal */
export const PayrollPartnerDisbursements$outboundSchema: z.ZodType<
  PayrollPartnerDisbursements$Outbound,
  z.ZodTypeDef,
  PayrollPartnerDisbursements
> = z.object({
  payrollUuid: z.string().optional(),
  disbursements: z.array(
    z.lazy(() => PayrollPartnerDisbursementsDisbursements$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    payrollUuid: "payroll_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollPartnerDisbursements$ {
  /** @deprecated use `PayrollPartnerDisbursements$inboundSchema` instead. */
  export const inboundSchema = PayrollPartnerDisbursements$inboundSchema;
  /** @deprecated use `PayrollPartnerDisbursements$outboundSchema` instead. */
  export const outboundSchema = PayrollPartnerDisbursements$outboundSchema;
  /** @deprecated use `PayrollPartnerDisbursements$Outbound` instead. */
  export type Outbound = PayrollPartnerDisbursements$Outbound;
}

export function payrollPartnerDisbursementsToJSON(
  payrollPartnerDisbursements: PayrollPartnerDisbursements,
): string {
  return JSON.stringify(
    PayrollPartnerDisbursements$outboundSchema.parse(
      payrollPartnerDisbursements,
    ),
  );
}

export function payrollPartnerDisbursementsFromJSON(
  jsonString: string,
): SafeParseResult<PayrollPartnerDisbursements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollPartnerDisbursements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollPartnerDisbursements' from JSON`,
  );
}
