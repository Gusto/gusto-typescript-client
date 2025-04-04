/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ContractorPaymentForGroup,
  ContractorPaymentForGroup$inboundSchema,
  ContractorPaymentForGroup$Outbound,
  ContractorPaymentForGroup$outboundSchema,
} from "./contractorpaymentforgroup.js";

/**
 * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
 */
export const ContractorPaymentGroupStatus = {
  Unfunded: "Unfunded",
  Funded: "Funded",
} as const;
/**
 * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
 */
export type ContractorPaymentGroupStatus = ClosedEnum<
  typeof ContractorPaymentGroupStatus
>;

export type ContractorPaymentGroupTotals = {
  /**
   * The total amount for the group of contractor payments.
   */
  amount?: string | undefined;
  /**
   * The total debit amount for the group of contractor payments. Sum of wage & reimbursement amount.
   */
  debitAmount?: string | undefined;
  /**
   * The total wage amount for the group of contractor payments.
   */
  wageAmount?: string | undefined;
  /**
   * The total reimbursement amount for the group of contractor payments.
   */
  reimbursementAmount?: string | undefined;
};

/**
 * The full contractor payment group, including associated contractor payments.
 */
export type ContractorPaymentGroup = {
  /**
   * The unique identifier of the contractor payment group.
   */
  uuid?: string | undefined;
  /**
   * The UUID of the company.
   */
  companyUuid?: string | undefined;
  /**
   * The check date of the contractor payment group.
   */
  checkDate?: string | undefined;
  /**
   * The debit date of the contractor payment group.
   */
  debitDate?: string | undefined;
  /**
   * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
   */
  status?: ContractorPaymentGroupStatus | undefined;
  /**
   * Token used to make contractor payment group creation idempotent.  Will error if attempting to create a group with a duplicate token.
   */
  creationToken?: string | null | undefined;
  totals?: ContractorPaymentGroupTotals | undefined;
  contractorPayments?: Array<ContractorPaymentForGroup> | undefined;
};

/** @internal */
export const ContractorPaymentGroupStatus$inboundSchema: z.ZodNativeEnum<
  typeof ContractorPaymentGroupStatus
> = z.nativeEnum(ContractorPaymentGroupStatus);

/** @internal */
export const ContractorPaymentGroupStatus$outboundSchema: z.ZodNativeEnum<
  typeof ContractorPaymentGroupStatus
> = ContractorPaymentGroupStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContractorPaymentGroupStatus$ {
  /** @deprecated use `ContractorPaymentGroupStatus$inboundSchema` instead. */
  export const inboundSchema = ContractorPaymentGroupStatus$inboundSchema;
  /** @deprecated use `ContractorPaymentGroupStatus$outboundSchema` instead. */
  export const outboundSchema = ContractorPaymentGroupStatus$outboundSchema;
}

/** @internal */
export const ContractorPaymentGroupTotals$inboundSchema: z.ZodType<
  ContractorPaymentGroupTotals,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.string().optional(),
  debit_amount: z.string().optional(),
  wage_amount: z.string().optional(),
  reimbursement_amount: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "debit_amount": "debitAmount",
    "wage_amount": "wageAmount",
    "reimbursement_amount": "reimbursementAmount",
  });
});

/** @internal */
export type ContractorPaymentGroupTotals$Outbound = {
  amount?: string | undefined;
  debit_amount?: string | undefined;
  wage_amount?: string | undefined;
  reimbursement_amount?: string | undefined;
};

/** @internal */
export const ContractorPaymentGroupTotals$outboundSchema: z.ZodType<
  ContractorPaymentGroupTotals$Outbound,
  z.ZodTypeDef,
  ContractorPaymentGroupTotals
> = z.object({
  amount: z.string().optional(),
  debitAmount: z.string().optional(),
  wageAmount: z.string().optional(),
  reimbursementAmount: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    debitAmount: "debit_amount",
    wageAmount: "wage_amount",
    reimbursementAmount: "reimbursement_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContractorPaymentGroupTotals$ {
  /** @deprecated use `ContractorPaymentGroupTotals$inboundSchema` instead. */
  export const inboundSchema = ContractorPaymentGroupTotals$inboundSchema;
  /** @deprecated use `ContractorPaymentGroupTotals$outboundSchema` instead. */
  export const outboundSchema = ContractorPaymentGroupTotals$outboundSchema;
  /** @deprecated use `ContractorPaymentGroupTotals$Outbound` instead. */
  export type Outbound = ContractorPaymentGroupTotals$Outbound;
}

export function contractorPaymentGroupTotalsToJSON(
  contractorPaymentGroupTotals: ContractorPaymentGroupTotals,
): string {
  return JSON.stringify(
    ContractorPaymentGroupTotals$outboundSchema.parse(
      contractorPaymentGroupTotals,
    ),
  );
}

export function contractorPaymentGroupTotalsFromJSON(
  jsonString: string,
): SafeParseResult<ContractorPaymentGroupTotals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContractorPaymentGroupTotals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContractorPaymentGroupTotals' from JSON`,
  );
}

/** @internal */
export const ContractorPaymentGroup$inboundSchema: z.ZodType<
  ContractorPaymentGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  company_uuid: z.string().optional(),
  check_date: z.string().optional(),
  debit_date: z.string().optional(),
  status: ContractorPaymentGroupStatus$inboundSchema.optional(),
  creation_token: z.nullable(z.string()).optional(),
  totals: z.lazy(() => ContractorPaymentGroupTotals$inboundSchema).optional(),
  contractor_payments: z.array(ContractorPaymentForGroup$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "company_uuid": "companyUuid",
    "check_date": "checkDate",
    "debit_date": "debitDate",
    "creation_token": "creationToken",
    "contractor_payments": "contractorPayments",
  });
});

/** @internal */
export type ContractorPaymentGroup$Outbound = {
  uuid?: string | undefined;
  company_uuid?: string | undefined;
  check_date?: string | undefined;
  debit_date?: string | undefined;
  status?: string | undefined;
  creation_token?: string | null | undefined;
  totals?: ContractorPaymentGroupTotals$Outbound | undefined;
  contractor_payments?: Array<ContractorPaymentForGroup$Outbound> | undefined;
};

/** @internal */
export const ContractorPaymentGroup$outboundSchema: z.ZodType<
  ContractorPaymentGroup$Outbound,
  z.ZodTypeDef,
  ContractorPaymentGroup
> = z.object({
  uuid: z.string().optional(),
  companyUuid: z.string().optional(),
  checkDate: z.string().optional(),
  debitDate: z.string().optional(),
  status: ContractorPaymentGroupStatus$outboundSchema.optional(),
  creationToken: z.nullable(z.string()).optional(),
  totals: z.lazy(() => ContractorPaymentGroupTotals$outboundSchema).optional(),
  contractorPayments: z.array(ContractorPaymentForGroup$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    companyUuid: "company_uuid",
    checkDate: "check_date",
    debitDate: "debit_date",
    creationToken: "creation_token",
    contractorPayments: "contractor_payments",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContractorPaymentGroup$ {
  /** @deprecated use `ContractorPaymentGroup$inboundSchema` instead. */
  export const inboundSchema = ContractorPaymentGroup$inboundSchema;
  /** @deprecated use `ContractorPaymentGroup$outboundSchema` instead. */
  export const outboundSchema = ContractorPaymentGroup$outboundSchema;
  /** @deprecated use `ContractorPaymentGroup$Outbound` instead. */
  export type Outbound = ContractorPaymentGroup$Outbound;
}

export function contractorPaymentGroupToJSON(
  contractorPaymentGroup: ContractorPaymentGroup,
): string {
  return JSON.stringify(
    ContractorPaymentGroup$outboundSchema.parse(contractorPaymentGroup),
  );
}

export function contractorPaymentGroupFromJSON(
  jsonString: string,
): SafeParseResult<ContractorPaymentGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContractorPaymentGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContractorPaymentGroup' from JSON`,
  );
}
