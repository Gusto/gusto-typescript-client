import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The subtotals for the contractor payment.
 */
export type ContractorPaymentReceiptTotals = {
    /**
     * The total company debit for the contractor payment.
     */
    companyDebit?: string | undefined;
};
export type ContractorPayments = {
    /**
     * The UUID of the contractor.
     */
    contractorUuid?: string | undefined;
    /**
     * The first name of the contractor. Applies when `contractor_type` is `Individual`.
     */
    contractorFirstName?: string | undefined;
    /**
     * The last name of the contractor.  Applies when `contractor_type` is `Individual`.
     */
    contractorLastName?: string | undefined;
    /**
     * The business name of the contractor. Applies when `contractor_type` is `Business`.
     */
    contractorBusinessName?: string | undefined;
    /**
     * The type of contractor.
     *
     * @remarks
     *
     * `Individual` `Business`
     */
    contractorType?: string | undefined;
    /**
     * The payment method.
     *
     * @remarks
     *
     * `Direct Deposit` `Check` `Historical Payment` `Correction Payment`
     */
    paymentMethod?: string | undefined;
    /**
     * The fixed wage of the payment, regardless of hours worked.
     */
    wage?: string | undefined;
    /**
     * The bonus amount in the payment.
     */
    bonus?: string | undefined;
    /**
     * The reimbursement amount in the payment.
     */
    reimbursement?: string | undefined;
};
/**
 * The licensed payroll processor
 */
export type ContractorPaymentReceiptLicensee = {
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
export type ContractorPaymentReceipt = {
    /**
     * A unique identifier of the contractor payment receipt.
     */
    contractorPaymentUuid?: string | undefined;
    /**
     * A unique identifier of the company making the contractor payment.
     */
    companyUuid?: string | undefined;
    /**
     * The name of the company making the contractor payment.
     */
    nameOfSender?: string | undefined;
    /**
     * The individual or company name of the contractor receiving payment.
     */
    nameOfRecipient?: string | undefined;
    /**
     * The debit date for the contractor payment.
     */
    debitDate?: RFCDate | undefined;
    /**
     * Always the fixed string "Your payroll provider partners with Gusto Inc. for payments processing. Gusto Inc. is a licensed money transmitter. Learn more on our license page."
     */
    license?: string | undefined;
    /**
     * URL for the license information for the licensed payroll processor. Always the fixed string "https://gusto.com/about/licenses"
     */
    licenseUri?: string | undefined;
    /**
     * URL for information related to right to refund. Always the fixed string "https://gusto.com/about/licenses"
     */
    rightToRefund?: string | undefined;
    /**
     * URL for information related to right to liability of licensee. Always the fixed string "https://gusto.com/about/licenses"
     */
    liabilityOfLicensee?: string | undefined;
    /**
     * The subtotals for the contractor payment.
     */
    totals?: ContractorPaymentReceiptTotals | undefined;
    /**
     * An array of contractor payments for this contractor payment.
     */
    contractorPayments?: Array<ContractorPayments> | undefined;
    /**
     * The licensed payroll processor
     */
    licensee?: ContractorPaymentReceiptLicensee | undefined;
};
/** @internal */
export declare const ContractorPaymentReceiptTotals$inboundSchema: z.ZodType<ContractorPaymentReceiptTotals, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentReceiptTotals$Outbound = {
    company_debit?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentReceiptTotals$outboundSchema: z.ZodType<ContractorPaymentReceiptTotals$Outbound, z.ZodTypeDef, ContractorPaymentReceiptTotals>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentReceiptTotals$ {
    /** @deprecated use `ContractorPaymentReceiptTotals$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentReceiptTotals, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentReceiptTotals$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentReceiptTotals$Outbound, z.ZodTypeDef, ContractorPaymentReceiptTotals>;
    /** @deprecated use `ContractorPaymentReceiptTotals$Outbound` instead. */
    type Outbound = ContractorPaymentReceiptTotals$Outbound;
}
export declare function contractorPaymentReceiptTotalsToJSON(contractorPaymentReceiptTotals: ContractorPaymentReceiptTotals): string;
export declare function contractorPaymentReceiptTotalsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentReceiptTotals, SDKValidationError>;
/** @internal */
export declare const ContractorPayments$inboundSchema: z.ZodType<ContractorPayments, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPayments$Outbound = {
    contractor_uuid?: string | undefined;
    contractor_first_name?: string | undefined;
    contractor_last_name?: string | undefined;
    contractor_business_name?: string | undefined;
    contractor_type?: string | undefined;
    payment_method?: string | undefined;
    wage?: string | undefined;
    bonus?: string | undefined;
    reimbursement?: string | undefined;
};
/** @internal */
export declare const ContractorPayments$outboundSchema: z.ZodType<ContractorPayments$Outbound, z.ZodTypeDef, ContractorPayments>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPayments$ {
    /** @deprecated use `ContractorPayments$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPayments, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPayments$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPayments$Outbound, z.ZodTypeDef, ContractorPayments>;
    /** @deprecated use `ContractorPayments$Outbound` instead. */
    type Outbound = ContractorPayments$Outbound;
}
export declare function contractorPaymentsToJSON(contractorPayments: ContractorPayments): string;
export declare function contractorPaymentsFromJSON(jsonString: string): SafeParseResult<ContractorPayments, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentReceiptLicensee$inboundSchema: z.ZodType<ContractorPaymentReceiptLicensee, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentReceiptLicensee$Outbound = {
    name?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    postal_code?: string | undefined;
    phone_number?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentReceiptLicensee$outboundSchema: z.ZodType<ContractorPaymentReceiptLicensee$Outbound, z.ZodTypeDef, ContractorPaymentReceiptLicensee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentReceiptLicensee$ {
    /** @deprecated use `ContractorPaymentReceiptLicensee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentReceiptLicensee, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentReceiptLicensee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentReceiptLicensee$Outbound, z.ZodTypeDef, ContractorPaymentReceiptLicensee>;
    /** @deprecated use `ContractorPaymentReceiptLicensee$Outbound` instead. */
    type Outbound = ContractorPaymentReceiptLicensee$Outbound;
}
export declare function contractorPaymentReceiptLicenseeToJSON(contractorPaymentReceiptLicensee: ContractorPaymentReceiptLicensee): string;
export declare function contractorPaymentReceiptLicenseeFromJSON(jsonString: string): SafeParseResult<ContractorPaymentReceiptLicensee, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentReceipt$inboundSchema: z.ZodType<ContractorPaymentReceipt, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentReceipt$Outbound = {
    contractor_payment_uuid?: string | undefined;
    company_uuid?: string | undefined;
    name_of_sender?: string | undefined;
    name_of_recipient?: string | undefined;
    debit_date?: string | undefined;
    license?: string | undefined;
    license_uri?: string | undefined;
    right_to_refund?: string | undefined;
    liability_of_licensee?: string | undefined;
    totals?: ContractorPaymentReceiptTotals$Outbound | undefined;
    contractor_payments?: Array<ContractorPayments$Outbound> | undefined;
    licensee?: ContractorPaymentReceiptLicensee$Outbound | undefined;
};
/** @internal */
export declare const ContractorPaymentReceipt$outboundSchema: z.ZodType<ContractorPaymentReceipt$Outbound, z.ZodTypeDef, ContractorPaymentReceipt>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentReceipt$ {
    /** @deprecated use `ContractorPaymentReceipt$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentReceipt, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentReceipt$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentReceipt$Outbound, z.ZodTypeDef, ContractorPaymentReceipt>;
    /** @deprecated use `ContractorPaymentReceipt$Outbound` instead. */
    type Outbound = ContractorPaymentReceipt$Outbound;
}
export declare function contractorPaymentReceiptToJSON(contractorPaymentReceipt: ContractorPaymentReceipt): string;
export declare function contractorPaymentReceiptFromJSON(jsonString: string): SafeParseResult<ContractorPaymentReceipt, SDKValidationError>;
//# sourceMappingURL=contractorpaymentreceipt.d.ts.map