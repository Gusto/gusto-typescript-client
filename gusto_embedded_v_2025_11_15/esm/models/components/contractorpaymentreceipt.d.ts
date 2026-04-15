import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
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
/**
 * The payment method.
 */
export declare const ContractorPaymentReceiptPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
    readonly CorrectionPayment: "Correction Payment";
};
/**
 * The payment method.
 */
export type ContractorPaymentReceiptPaymentMethod = ClosedEnum<typeof ContractorPaymentReceiptPaymentMethod>;
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
     */
    paymentMethod?: ContractorPaymentReceiptPaymentMethod | undefined;
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
export declare function contractorPaymentReceiptTotalsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentReceiptTotals, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentReceiptPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentReceiptPaymentMethod>;
/** @internal */
export declare const ContractorPayments$inboundSchema: z.ZodType<ContractorPayments, z.ZodTypeDef, unknown>;
export declare function contractorPaymentsFromJSON(jsonString: string): SafeParseResult<ContractorPayments, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentReceiptLicensee$inboundSchema: z.ZodType<ContractorPaymentReceiptLicensee, z.ZodTypeDef, unknown>;
export declare function contractorPaymentReceiptLicenseeFromJSON(jsonString: string): SafeParseResult<ContractorPaymentReceiptLicensee, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentReceipt$inboundSchema: z.ZodType<ContractorPaymentReceipt, z.ZodTypeDef, unknown>;
export declare function contractorPaymentReceiptFromJSON(jsonString: string): SafeParseResult<ContractorPaymentReceipt, SDKValidationError>;
//# sourceMappingURL=contractorpaymentreceipt.d.ts.map