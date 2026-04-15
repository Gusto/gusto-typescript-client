import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ContractorPayment } from "./contractorpayment.js";
/**
 * The wage and reimbursement totals for all contractor payments within a given time period.
 */
export type Total = {
    /**
     * The total reimbursements for contractor payments within a given time period.
     */
    reimbursements?: string | undefined;
    /**
     * The total wages for contractor payments within a given time period.
     */
    wages?: string | undefined;
};
export type ContractorPaymentSummaryContractorPayments = {
    /**
     * The UUID of the contractor.
     */
    contractorUuid?: number | undefined;
    /**
     * The total reimbursements for the contractor within a given time period.
     */
    reimbursementTotal?: string | undefined;
    /**
     * The total wages for the contractor within a given time period.
     */
    wageTotal?: string | undefined;
    /**
     * The contractor's payments within a given time period.
     */
    payments?: Array<ContractorPayment> | undefined;
};
/**
 * The representation of the summary of contractor payments for a given company in a given time period.
 */
export type ContractorPaymentSummary = {
    /**
     * The wage and reimbursement totals for all contractor payments within a given time period.
     */
    total?: Total | undefined;
    /**
     * The individual contractor payments, within a given time period, grouped by contractor.
     */
    contractorPayments?: Array<ContractorPaymentSummaryContractorPayments> | undefined;
};
/** @internal */
export declare const Total$inboundSchema: z.ZodType<Total, z.ZodTypeDef, unknown>;
export declare function totalFromJSON(jsonString: string): SafeParseResult<Total, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentSummaryContractorPayments$inboundSchema: z.ZodType<ContractorPaymentSummaryContractorPayments, z.ZodTypeDef, unknown>;
export declare function contractorPaymentSummaryContractorPaymentsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummaryContractorPayments, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentSummary$inboundSchema: z.ZodType<ContractorPaymentSummary, z.ZodTypeDef, unknown>;
export declare function contractorPaymentSummaryFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummary, SDKValidationError>;
//# sourceMappingURL=contractorpaymentsummary.d.ts.map