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
 * Bank account type
 */
export const EmployeeBankAccountAccountType = {
  Checking: "Checking",
  Savings: "Savings",
} as const;
/**
 * Bank account type
 */
export type EmployeeBankAccountAccountType = ClosedEnum<
  typeof EmployeeBankAccountAccountType
>;

/**
 * Example response
 */
export type EmployeeBankAccount = {
  /**
   * UUID of the bank account
   */
  uuid: string;
  /**
   * UUID of the employee
   */
  employeeUuid?: string | undefined;
  /**
   * Bank account type
   */
  accountType?: EmployeeBankAccountAccountType | undefined;
  /**
   * Name for the bank account
   */
  name?: string | undefined;
  /**
   * The bank account's routing number
   */
  routingNumber?: string | undefined;
  /**
   * Masked bank account number
   */
  hiddenAccountNumber?: string | undefined;
};

/** @internal */
export const EmployeeBankAccountAccountType$inboundSchema: z.ZodNativeEnum<
  typeof EmployeeBankAccountAccountType
> = z.nativeEnum(EmployeeBankAccountAccountType);

/** @internal */
export const EmployeeBankAccountAccountType$outboundSchema: z.ZodNativeEnum<
  typeof EmployeeBankAccountAccountType
> = EmployeeBankAccountAccountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeBankAccountAccountType$ {
  /** @deprecated use `EmployeeBankAccountAccountType$inboundSchema` instead. */
  export const inboundSchema = EmployeeBankAccountAccountType$inboundSchema;
  /** @deprecated use `EmployeeBankAccountAccountType$outboundSchema` instead. */
  export const outboundSchema = EmployeeBankAccountAccountType$outboundSchema;
}

/** @internal */
export const EmployeeBankAccount$inboundSchema: z.ZodType<
  EmployeeBankAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  employee_uuid: z.string().optional(),
  account_type: EmployeeBankAccountAccountType$inboundSchema.optional(),
  name: z.string().optional(),
  routing_number: z.string().optional(),
  hidden_account_number: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "account_type": "accountType",
    "routing_number": "routingNumber",
    "hidden_account_number": "hiddenAccountNumber",
  });
});

/** @internal */
export type EmployeeBankAccount$Outbound = {
  uuid: string;
  employee_uuid?: string | undefined;
  account_type?: string | undefined;
  name?: string | undefined;
  routing_number?: string | undefined;
  hidden_account_number?: string | undefined;
};

/** @internal */
export const EmployeeBankAccount$outboundSchema: z.ZodType<
  EmployeeBankAccount$Outbound,
  z.ZodTypeDef,
  EmployeeBankAccount
> = z.object({
  uuid: z.string(),
  employeeUuid: z.string().optional(),
  accountType: EmployeeBankAccountAccountType$outboundSchema.optional(),
  name: z.string().optional(),
  routingNumber: z.string().optional(),
  hiddenAccountNumber: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    accountType: "account_type",
    routingNumber: "routing_number",
    hiddenAccountNumber: "hidden_account_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeBankAccount$ {
  /** @deprecated use `EmployeeBankAccount$inboundSchema` instead. */
  export const inboundSchema = EmployeeBankAccount$inboundSchema;
  /** @deprecated use `EmployeeBankAccount$outboundSchema` instead. */
  export const outboundSchema = EmployeeBankAccount$outboundSchema;
  /** @deprecated use `EmployeeBankAccount$Outbound` instead. */
  export type Outbound = EmployeeBankAccount$Outbound;
}

export function employeeBankAccountToJSON(
  employeeBankAccount: EmployeeBankAccount,
): string {
  return JSON.stringify(
    EmployeeBankAccount$outboundSchema.parse(employeeBankAccount),
  );
}

export function employeeBankAccountFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeBankAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeBankAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeBankAccount' from JSON`,
  );
}
