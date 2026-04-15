import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ContractorPayment, ContractorPayment$Outbound } from "./contractorpayment.js";
/**
 * The wage and reimbursement totals for all contractor payments within a given time period.
 */
export type ContractorPaymentSummaryByDatesTotal = {
    /**
     * The total reimbursements for contractor payments within a given time period.
     */
    reimbursements?: string | undefined;
    /**
     * The total wages for contractor payments within a given time period.
     */
    wages?: string | undefined;
};
export type ContractorPaymentSummaryByDatesContractorPayments = {
    /**
     * The UUID of the contractor.
     */
    contractorUuid?: string | undefined;
    /**
     * The payment check date.
     */
    checkDate?: string | undefined;
    /**
     * The total reimbursements for the contractor within a given time period.
     */
    reimbursementTotal?: string | undefined;
    /**
     * The total wages for the contractor within a given time period.
     */
    wageTotal?: string | undefined;
    /**
     * The contractor’s payments within a given time period.
     *
     * @remarks
     */
    payments?: Array<ContractorPayment> | undefined;
};
/**
 * The representation of the summary of contractor payments for a given company in a given time period.
 */
export type ContractorPaymentSummaryByDates = {
    /**
     * The wage and reimbursement totals for all contractor payments within a given time period.
     */
    total?: ContractorPaymentSummaryByDatesTotal | undefined;
    /**
     * The individual contractor payments, within a given time period, grouped by check date.
     */
    contractorPayments?: Array<ContractorPaymentSummaryByDatesContractorPayments> | undefined;
};
/** @internal */
export declare const ContractorPaymentSummaryByDatesTotal$inboundSchema: z.ZodType<ContractorPaymentSummaryByDatesTotal, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentSummaryByDatesTotal$Outbound = {
    reimbursements?: string | undefined;
    wages?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentSummaryByDatesTotal$outboundSchema: z.ZodType<ContractorPaymentSummaryByDatesTotal$Outbound, z.ZodTypeDef, ContractorPaymentSummaryByDatesTotal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentSummaryByDatesTotal$ {
    /** @deprecated use `ContractorPaymentSummaryByDatesTotal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentSummaryByDatesTotal, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentSummaryByDatesTotal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentSummaryByDatesTotal$Outbound, z.ZodTypeDef, ContractorPaymentSummaryByDatesTotal>;
    /** @deprecated use `ContractorPaymentSummaryByDatesTotal$Outbound` instead. */
    type Outbound = ContractorPaymentSummaryByDatesTotal$Outbound;
}
export declare function contractorPaymentSummaryByDatesTotalToJSON(contractorPaymentSummaryByDatesTotal: ContractorPaymentSummaryByDatesTotal): string;
export declare function contractorPaymentSummaryByDatesTotalFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummaryByDatesTotal, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentSummaryByDatesContractorPayments$inboundSchema: z.ZodType<ContractorPaymentSummaryByDatesContractorPayments, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentSummaryByDatesContractorPayments$Outbound = {
    contractor_uuid?: string | undefined;
    check_date?: string | undefined;
    reimbursement_total?: string | undefined;
    wage_total?: string | undefined;
    payments?: Array<ContractorPayment$Outbound> | undefined;
};
/** @internal */
export declare const ContractorPaymentSummaryByDatesContractorPayments$outboundSchema: z.ZodType<ContractorPaymentSummaryByDatesContractorPayments$Outbound, z.ZodTypeDef, ContractorPaymentSummaryByDatesContractorPayments>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentSummaryByDatesContractorPayments$ {
    /** @deprecated use `ContractorPaymentSummaryByDatesContractorPayments$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentSummaryByDatesContractorPayments, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentSummaryByDatesContractorPayments$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentSummaryByDatesContractorPayments$Outbound, z.ZodTypeDef, ContractorPaymentSummaryByDatesContractorPayments>;
    /** @deprecated use `ContractorPaymentSummaryByDatesContractorPayments$Outbound` instead. */
    type Outbound = ContractorPaymentSummaryByDatesContractorPayments$Outbound;
}
export declare function contractorPaymentSummaryByDatesContractorPaymentsToJSON(contractorPaymentSummaryByDatesContractorPayments: ContractorPaymentSummaryByDatesContractorPayments): string;
export declare function contractorPaymentSummaryByDatesContractorPaymentsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummaryByDatesContractorPayments, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentSummaryByDates$inboundSchema: z.ZodType<ContractorPaymentSummaryByDates, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentSummaryByDates$Outbound = {
    total?: ContractorPaymentSummaryByDatesTotal$Outbound | undefined;
    contractor_payments?: Array<ContractorPaymentSummaryByDatesContractorPayments$Outbound> | undefined;
};
/** @internal */
export declare const ContractorPaymentSummaryByDates$outboundSchema: z.ZodType<ContractorPaymentSummaryByDates$Outbound, z.ZodTypeDef, ContractorPaymentSummaryByDates>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentSummaryByDates$ {
    /** @deprecated use `ContractorPaymentSummaryByDates$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentSummaryByDates, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentSummaryByDates$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentSummaryByDates$Outbound, z.ZodTypeDef, ContractorPaymentSummaryByDates>;
    /** @deprecated use `ContractorPaymentSummaryByDates$Outbound` instead. */
    type Outbound = ContractorPaymentSummaryByDates$Outbound;
}
export declare function contractorPaymentSummaryByDatesToJSON(contractorPaymentSummaryByDates: ContractorPaymentSummaryByDates): string;
export declare function contractorPaymentSummaryByDatesFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummaryByDates, SDKValidationError>;
//# sourceMappingURL=contractorpaymentsummarybydates.d.ts.map