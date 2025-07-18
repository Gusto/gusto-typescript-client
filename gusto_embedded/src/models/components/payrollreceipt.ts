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
 * The subtotals for the payroll.
 */
export type Totals = {
  /**
   * The total company debit for the payroll.
   */
  companyDebit?: string | undefined;
  /**
   * The total company net pay for the payroll.
   */
  netPayDebit?: string | undefined;
  /**
   * The total child support debit for the payroll.
   */
  childSupportDebit?: string | undefined;
  /**
   * The total reimbursements for the payroll.
   */
  reimbursementDebit?: string | undefined;
  /**
   * The total tax debit for the payroll.
   */
  taxDebit?: string | undefined;
};

export type PayrollReceiptTaxes = {
  /**
   * The amount paid for this tax.
   */
  name?: string | undefined;
  /**
   * The total amount paid by both employer and employee for this tax.
   */
  amount?: string | undefined;
};

/**
 * The employee's compensation payment method.
 */
export const PayrollReceiptPaymentMethod = {
  DirectDeposit: "Direct Deposit",
  Check: "Check",
} as const;
/**
 * The employee's compensation payment method.
 */
export type PayrollReceiptPaymentMethod = ClosedEnum<
  typeof PayrollReceiptPaymentMethod
>;

export type PayrollReceiptEmployeeCompensations = {
  /**
   * The UUID of the employee.
   */
  employeeUuid?: string | undefined;
  /**
   * The first name of the employee.
   */
  employeeFirstName?: string | undefined;
  /**
   * The last name of the employee.
   */
  employeeLastName?: string | undefined;
  /**
   * The employee's compensation payment method.
   */
  paymentMethod?: PayrollReceiptPaymentMethod | undefined;
  /**
   * The employee's net pay. Net pay paid by check is available for reference but is not included in the `["totals"]["net_pay_debit"]` amount.
   */
  netPay?: string | undefined;
  /**
   * The total of employer and employee taxes for the pay period.
   */
  totalTax?: string | undefined;
  /**
   * The total garnishments for the pay period.
   */
  totalGarnishments?: string | undefined;
  /**
   * The total child support garnishment for the pay period.
   */
  childSupportGarnishment?: string | undefined;
  /**
   * The total reimbursement for the pay period.
   */
  totalReimbursement?: string | undefined;
};

/**
 * The licensed payroll processor
 */
export type Licensee = {
  /**
   * Always the fixed string "Gusto, Zenpayroll Inc."
   */
  name?: string | undefined;
  /**
   * Always the fixed string "525 20th St"
   */
  address?: string | undefined;
  /**
   * Always the fixed string "San Francisco"
   */
  city?: string | undefined;
  /**
   * Always the fixed string "CA"
   */
  state?: string | undefined;
  /**
   * Always the fixed string "94107"
   */
  postalCode?: string | undefined;
  /**
   * Always the fixed string "4157778888"
   */
  phoneNumber?: string | undefined;
};

export type PayrollReceipt = {
  /**
   * A unique identifier of the payroll receipt.
   */
  payrollUuid?: string | undefined;
  /**
   * A unique identifier of the company for the payroll.
   */
  companyUuid?: string | undefined;
  /**
   * The name of the company by whom the payroll was paid
   */
  nameOfSender?: string | undefined;
  /**
   * Always the fixed string "Payroll Recipients"
   */
  nameOfRecipient?: string | undefined;
  /**
   * Always the fixed string "Payroll recipients include the employees listed below plus the tax agencies for the taxes listed below."
   */
  recipientNotice?: string | undefined;
  /**
   * The debit or funding date for the payroll
   */
  debitDate?: string | undefined;
  /**
   * Always the fixed string "ZenPayroll, Inc., dba Gusto is a licensed money transmitter. For more about Gusto’s licenses and your state-specific rights to request information, submit complaints, dispute errors, or cancel transactions, visit our license page."
   */
  license?: string | undefined;
  /**
   * URL for the license information for the licensed payroll processor. Always the fixed string "https://gusto.com/about/licenses"
   */
  licenseUri?: string | undefined;
  rightToRefund?: string | undefined;
  liabilityOfLicensee?: string | undefined;
  /**
   * The subtotals for the payroll.
   */
  totals?: Totals | undefined;
  /**
   * An array of totaled employer and employee taxes for the pay period.
   */
  taxes?: Array<PayrollReceiptTaxes> | undefined;
  /**
   * An array of employee compensations and withholdings for this payroll
   */
  employeeCompensations?:
    | Array<PayrollReceiptEmployeeCompensations>
    | undefined;
  /**
   * The licensed payroll processor
   */
  licensee?: Licensee | undefined;
};

/** @internal */
export const Totals$inboundSchema: z.ZodType<Totals, z.ZodTypeDef, unknown> = z
  .object({
    company_debit: z.string().optional(),
    net_pay_debit: z.string().optional(),
    child_support_debit: z.string().optional(),
    reimbursement_debit: z.string().optional(),
    tax_debit: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_debit": "companyDebit",
      "net_pay_debit": "netPayDebit",
      "child_support_debit": "childSupportDebit",
      "reimbursement_debit": "reimbursementDebit",
      "tax_debit": "taxDebit",
    });
  });

/** @internal */
export type Totals$Outbound = {
  company_debit?: string | undefined;
  net_pay_debit?: string | undefined;
  child_support_debit?: string | undefined;
  reimbursement_debit?: string | undefined;
  tax_debit?: string | undefined;
};

/** @internal */
export const Totals$outboundSchema: z.ZodType<
  Totals$Outbound,
  z.ZodTypeDef,
  Totals
> = z.object({
  companyDebit: z.string().optional(),
  netPayDebit: z.string().optional(),
  childSupportDebit: z.string().optional(),
  reimbursementDebit: z.string().optional(),
  taxDebit: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    companyDebit: "company_debit",
    netPayDebit: "net_pay_debit",
    childSupportDebit: "child_support_debit",
    reimbursementDebit: "reimbursement_debit",
    taxDebit: "tax_debit",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Totals$ {
  /** @deprecated use `Totals$inboundSchema` instead. */
  export const inboundSchema = Totals$inboundSchema;
  /** @deprecated use `Totals$outboundSchema` instead. */
  export const outboundSchema = Totals$outboundSchema;
  /** @deprecated use `Totals$Outbound` instead. */
  export type Outbound = Totals$Outbound;
}

export function totalsToJSON(totals: Totals): string {
  return JSON.stringify(Totals$outboundSchema.parse(totals));
}

export function totalsFromJSON(
  jsonString: string,
): SafeParseResult<Totals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Totals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Totals' from JSON`,
  );
}

/** @internal */
export const PayrollReceiptTaxes$inboundSchema: z.ZodType<
  PayrollReceiptTaxes,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  amount: z.string().optional(),
});

/** @internal */
export type PayrollReceiptTaxes$Outbound = {
  name?: string | undefined;
  amount?: string | undefined;
};

/** @internal */
export const PayrollReceiptTaxes$outboundSchema: z.ZodType<
  PayrollReceiptTaxes$Outbound,
  z.ZodTypeDef,
  PayrollReceiptTaxes
> = z.object({
  name: z.string().optional(),
  amount: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReceiptTaxes$ {
  /** @deprecated use `PayrollReceiptTaxes$inboundSchema` instead. */
  export const inboundSchema = PayrollReceiptTaxes$inboundSchema;
  /** @deprecated use `PayrollReceiptTaxes$outboundSchema` instead. */
  export const outboundSchema = PayrollReceiptTaxes$outboundSchema;
  /** @deprecated use `PayrollReceiptTaxes$Outbound` instead. */
  export type Outbound = PayrollReceiptTaxes$Outbound;
}

export function payrollReceiptTaxesToJSON(
  payrollReceiptTaxes: PayrollReceiptTaxes,
): string {
  return JSON.stringify(
    PayrollReceiptTaxes$outboundSchema.parse(payrollReceiptTaxes),
  );
}

export function payrollReceiptTaxesFromJSON(
  jsonString: string,
): SafeParseResult<PayrollReceiptTaxes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollReceiptTaxes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollReceiptTaxes' from JSON`,
  );
}

/** @internal */
export const PayrollReceiptPaymentMethod$inboundSchema: z.ZodNativeEnum<
  typeof PayrollReceiptPaymentMethod
> = z.nativeEnum(PayrollReceiptPaymentMethod);

/** @internal */
export const PayrollReceiptPaymentMethod$outboundSchema: z.ZodNativeEnum<
  typeof PayrollReceiptPaymentMethod
> = PayrollReceiptPaymentMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReceiptPaymentMethod$ {
  /** @deprecated use `PayrollReceiptPaymentMethod$inboundSchema` instead. */
  export const inboundSchema = PayrollReceiptPaymentMethod$inboundSchema;
  /** @deprecated use `PayrollReceiptPaymentMethod$outboundSchema` instead. */
  export const outboundSchema = PayrollReceiptPaymentMethod$outboundSchema;
}

/** @internal */
export const PayrollReceiptEmployeeCompensations$inboundSchema: z.ZodType<
  PayrollReceiptEmployeeCompensations,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_uuid: z.string().optional(),
  employee_first_name: z.string().optional(),
  employee_last_name: z.string().optional(),
  payment_method: PayrollReceiptPaymentMethod$inboundSchema.optional(),
  net_pay: z.string().optional(),
  total_tax: z.string().optional(),
  total_garnishments: z.string().optional(),
  child_support_garnishment: z.string().optional(),
  total_reimbursement: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_uuid": "employeeUuid",
    "employee_first_name": "employeeFirstName",
    "employee_last_name": "employeeLastName",
    "payment_method": "paymentMethod",
    "net_pay": "netPay",
    "total_tax": "totalTax",
    "total_garnishments": "totalGarnishments",
    "child_support_garnishment": "childSupportGarnishment",
    "total_reimbursement": "totalReimbursement",
  });
});

/** @internal */
export type PayrollReceiptEmployeeCompensations$Outbound = {
  employee_uuid?: string | undefined;
  employee_first_name?: string | undefined;
  employee_last_name?: string | undefined;
  payment_method?: string | undefined;
  net_pay?: string | undefined;
  total_tax?: string | undefined;
  total_garnishments?: string | undefined;
  child_support_garnishment?: string | undefined;
  total_reimbursement?: string | undefined;
};

/** @internal */
export const PayrollReceiptEmployeeCompensations$outboundSchema: z.ZodType<
  PayrollReceiptEmployeeCompensations$Outbound,
  z.ZodTypeDef,
  PayrollReceiptEmployeeCompensations
> = z.object({
  employeeUuid: z.string().optional(),
  employeeFirstName: z.string().optional(),
  employeeLastName: z.string().optional(),
  paymentMethod: PayrollReceiptPaymentMethod$outboundSchema.optional(),
  netPay: z.string().optional(),
  totalTax: z.string().optional(),
  totalGarnishments: z.string().optional(),
  childSupportGarnishment: z.string().optional(),
  totalReimbursement: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeUuid: "employee_uuid",
    employeeFirstName: "employee_first_name",
    employeeLastName: "employee_last_name",
    paymentMethod: "payment_method",
    netPay: "net_pay",
    totalTax: "total_tax",
    totalGarnishments: "total_garnishments",
    childSupportGarnishment: "child_support_garnishment",
    totalReimbursement: "total_reimbursement",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReceiptEmployeeCompensations$ {
  /** @deprecated use `PayrollReceiptEmployeeCompensations$inboundSchema` instead. */
  export const inboundSchema =
    PayrollReceiptEmployeeCompensations$inboundSchema;
  /** @deprecated use `PayrollReceiptEmployeeCompensations$outboundSchema` instead. */
  export const outboundSchema =
    PayrollReceiptEmployeeCompensations$outboundSchema;
  /** @deprecated use `PayrollReceiptEmployeeCompensations$Outbound` instead. */
  export type Outbound = PayrollReceiptEmployeeCompensations$Outbound;
}

export function payrollReceiptEmployeeCompensationsToJSON(
  payrollReceiptEmployeeCompensations: PayrollReceiptEmployeeCompensations,
): string {
  return JSON.stringify(
    PayrollReceiptEmployeeCompensations$outboundSchema.parse(
      payrollReceiptEmployeeCompensations,
    ),
  );
}

export function payrollReceiptEmployeeCompensationsFromJSON(
  jsonString: string,
): SafeParseResult<PayrollReceiptEmployeeCompensations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PayrollReceiptEmployeeCompensations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollReceiptEmployeeCompensations' from JSON`,
  );
}

/** @internal */
export const Licensee$inboundSchema: z.ZodType<
  Licensee,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postal_code: z.string().optional(),
  phone_number: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "postal_code": "postalCode",
    "phone_number": "phoneNumber",
  });
});

/** @internal */
export type Licensee$Outbound = {
  name?: string | undefined;
  address?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  postal_code?: string | undefined;
  phone_number?: string | undefined;
};

/** @internal */
export const Licensee$outboundSchema: z.ZodType<
  Licensee$Outbound,
  z.ZodTypeDef,
  Licensee
> = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  phoneNumber: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    postalCode: "postal_code",
    phoneNumber: "phone_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Licensee$ {
  /** @deprecated use `Licensee$inboundSchema` instead. */
  export const inboundSchema = Licensee$inboundSchema;
  /** @deprecated use `Licensee$outboundSchema` instead. */
  export const outboundSchema = Licensee$outboundSchema;
  /** @deprecated use `Licensee$Outbound` instead. */
  export type Outbound = Licensee$Outbound;
}

export function licenseeToJSON(licensee: Licensee): string {
  return JSON.stringify(Licensee$outboundSchema.parse(licensee));
}

export function licenseeFromJSON(
  jsonString: string,
): SafeParseResult<Licensee, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Licensee$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Licensee' from JSON`,
  );
}

/** @internal */
export const PayrollReceipt$inboundSchema: z.ZodType<
  PayrollReceipt,
  z.ZodTypeDef,
  unknown
> = z.object({
  payroll_uuid: z.string().optional(),
  company_uuid: z.string().optional(),
  name_of_sender: z.string().optional(),
  name_of_recipient: z.string().optional(),
  recipient_notice: z.string().optional(),
  debit_date: z.string().optional(),
  license: z.string().optional(),
  license_uri: z.string().optional(),
  right_to_refund: z.string().optional(),
  liability_of_licensee: z.string().optional(),
  totals: z.lazy(() => Totals$inboundSchema).optional(),
  taxes: z.array(z.lazy(() => PayrollReceiptTaxes$inboundSchema)).optional(),
  employee_compensations: z.array(
    z.lazy(() => PayrollReceiptEmployeeCompensations$inboundSchema),
  ).optional(),
  licensee: z.lazy(() => Licensee$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "payroll_uuid": "payrollUuid",
    "company_uuid": "companyUuid",
    "name_of_sender": "nameOfSender",
    "name_of_recipient": "nameOfRecipient",
    "recipient_notice": "recipientNotice",
    "debit_date": "debitDate",
    "license_uri": "licenseUri",
    "right_to_refund": "rightToRefund",
    "liability_of_licensee": "liabilityOfLicensee",
    "employee_compensations": "employeeCompensations",
  });
});

/** @internal */
export type PayrollReceipt$Outbound = {
  payroll_uuid?: string | undefined;
  company_uuid?: string | undefined;
  name_of_sender?: string | undefined;
  name_of_recipient?: string | undefined;
  recipient_notice?: string | undefined;
  debit_date?: string | undefined;
  license?: string | undefined;
  license_uri?: string | undefined;
  right_to_refund?: string | undefined;
  liability_of_licensee?: string | undefined;
  totals?: Totals$Outbound | undefined;
  taxes?: Array<PayrollReceiptTaxes$Outbound> | undefined;
  employee_compensations?:
    | Array<PayrollReceiptEmployeeCompensations$Outbound>
    | undefined;
  licensee?: Licensee$Outbound | undefined;
};

/** @internal */
export const PayrollReceipt$outboundSchema: z.ZodType<
  PayrollReceipt$Outbound,
  z.ZodTypeDef,
  PayrollReceipt
> = z.object({
  payrollUuid: z.string().optional(),
  companyUuid: z.string().optional(),
  nameOfSender: z.string().optional(),
  nameOfRecipient: z.string().optional(),
  recipientNotice: z.string().optional(),
  debitDate: z.string().optional(),
  license: z.string().optional(),
  licenseUri: z.string().optional(),
  rightToRefund: z.string().optional(),
  liabilityOfLicensee: z.string().optional(),
  totals: z.lazy(() => Totals$outboundSchema).optional(),
  taxes: z.array(z.lazy(() => PayrollReceiptTaxes$outboundSchema)).optional(),
  employeeCompensations: z.array(
    z.lazy(() => PayrollReceiptEmployeeCompensations$outboundSchema),
  ).optional(),
  licensee: z.lazy(() => Licensee$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    payrollUuid: "payroll_uuid",
    companyUuid: "company_uuid",
    nameOfSender: "name_of_sender",
    nameOfRecipient: "name_of_recipient",
    recipientNotice: "recipient_notice",
    debitDate: "debit_date",
    licenseUri: "license_uri",
    rightToRefund: "right_to_refund",
    liabilityOfLicensee: "liability_of_licensee",
    employeeCompensations: "employee_compensations",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReceipt$ {
  /** @deprecated use `PayrollReceipt$inboundSchema` instead. */
  export const inboundSchema = PayrollReceipt$inboundSchema;
  /** @deprecated use `PayrollReceipt$outboundSchema` instead. */
  export const outboundSchema = PayrollReceipt$outboundSchema;
  /** @deprecated use `PayrollReceipt$Outbound` instead. */
  export type Outbound = PayrollReceipt$Outbound;
}

export function payrollReceiptToJSON(payrollReceipt: PayrollReceipt): string {
  return JSON.stringify(PayrollReceipt$outboundSchema.parse(payrollReceipt));
}

export function payrollReceiptFromJSON(
  jsonString: string,
): SafeParseResult<PayrollReceipt, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PayrollReceipt$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PayrollReceipt' from JSON`,
  );
}
