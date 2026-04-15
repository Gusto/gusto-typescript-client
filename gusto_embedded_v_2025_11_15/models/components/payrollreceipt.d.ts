import * as z from "zod";
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
export type EmployeeCompensations = {
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
     * The employee's compensation payment method.\n\n`Check` `Direct Deposit`
     */
    paymentMethod?: string | undefined;
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
/**
 * Example response
 */
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
    employeeCompensations?: Array<EmployeeCompensations> | undefined;
    /**
     * The licensed payroll processor
     */
    licensee?: Licensee | undefined;
};
/** @internal */
export declare const Totals$inboundSchema: z.ZodType<Totals, z.ZodTypeDef, unknown>;
/** @internal */
export type Totals$Outbound = {
    company_debit?: string | undefined;
    net_pay_debit?: string | undefined;
    child_support_debit?: string | undefined;
    reimbursement_debit?: string | undefined;
    tax_debit?: string | undefined;
};
/** @internal */
export declare const Totals$outboundSchema: z.ZodType<Totals$Outbound, z.ZodTypeDef, Totals>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Totals$ {
    /** @deprecated use `Totals$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Totals, z.ZodTypeDef, unknown>;
    /** @deprecated use `Totals$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Totals$Outbound, z.ZodTypeDef, Totals>;
    /** @deprecated use `Totals$Outbound` instead. */
    type Outbound = Totals$Outbound;
}
export declare function totalsToJSON(totals: Totals): string;
export declare function totalsFromJSON(jsonString: string): SafeParseResult<Totals, SDKValidationError>;
/** @internal */
export declare const PayrollReceiptTaxes$inboundSchema: z.ZodType<PayrollReceiptTaxes, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollReceiptTaxes$Outbound = {
    name?: string | undefined;
    amount?: string | undefined;
};
/** @internal */
export declare const PayrollReceiptTaxes$outboundSchema: z.ZodType<PayrollReceiptTaxes$Outbound, z.ZodTypeDef, PayrollReceiptTaxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollReceiptTaxes$ {
    /** @deprecated use `PayrollReceiptTaxes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollReceiptTaxes, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollReceiptTaxes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollReceiptTaxes$Outbound, z.ZodTypeDef, PayrollReceiptTaxes>;
    /** @deprecated use `PayrollReceiptTaxes$Outbound` instead. */
    type Outbound = PayrollReceiptTaxes$Outbound;
}
export declare function payrollReceiptTaxesToJSON(payrollReceiptTaxes: PayrollReceiptTaxes): string;
export declare function payrollReceiptTaxesFromJSON(jsonString: string): SafeParseResult<PayrollReceiptTaxes, SDKValidationError>;
/** @internal */
export declare const EmployeeCompensations$inboundSchema: z.ZodType<EmployeeCompensations, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeCompensations$Outbound = {
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
export declare const EmployeeCompensations$outboundSchema: z.ZodType<EmployeeCompensations$Outbound, z.ZodTypeDef, EmployeeCompensations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeCompensations$ {
    /** @deprecated use `EmployeeCompensations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeCompensations, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeCompensations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeCompensations$Outbound, z.ZodTypeDef, EmployeeCompensations>;
    /** @deprecated use `EmployeeCompensations$Outbound` instead. */
    type Outbound = EmployeeCompensations$Outbound;
}
export declare function employeeCompensationsToJSON(employeeCompensations: EmployeeCompensations): string;
export declare function employeeCompensationsFromJSON(jsonString: string): SafeParseResult<EmployeeCompensations, SDKValidationError>;
/** @internal */
export declare const Licensee$inboundSchema: z.ZodType<Licensee, z.ZodTypeDef, unknown>;
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
export declare const Licensee$outboundSchema: z.ZodType<Licensee$Outbound, z.ZodTypeDef, Licensee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Licensee$ {
    /** @deprecated use `Licensee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Licensee, z.ZodTypeDef, unknown>;
    /** @deprecated use `Licensee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Licensee$Outbound, z.ZodTypeDef, Licensee>;
    /** @deprecated use `Licensee$Outbound` instead. */
    type Outbound = Licensee$Outbound;
}
export declare function licenseeToJSON(licensee: Licensee): string;
export declare function licenseeFromJSON(jsonString: string): SafeParseResult<Licensee, SDKValidationError>;
/** @internal */
export declare const PayrollReceipt$inboundSchema: z.ZodType<PayrollReceipt, z.ZodTypeDef, unknown>;
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
    employee_compensations?: Array<EmployeeCompensations$Outbound> | undefined;
    licensee?: Licensee$Outbound | undefined;
};
/** @internal */
export declare const PayrollReceipt$outboundSchema: z.ZodType<PayrollReceipt$Outbound, z.ZodTypeDef, PayrollReceipt>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollReceipt$ {
    /** @deprecated use `PayrollReceipt$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollReceipt, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollReceipt$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollReceipt$Outbound, z.ZodTypeDef, PayrollReceipt>;
    /** @deprecated use `PayrollReceipt$Outbound` instead. */
    type Outbound = PayrollReceipt$Outbound;
}
export declare function payrollReceiptToJSON(payrollReceipt: PayrollReceipt): string;
export declare function payrollReceiptFromJSON(jsonString: string): SafeParseResult<PayrollReceipt, SDKValidationError>;
//# sourceMappingURL=payrollreceipt.d.ts.map