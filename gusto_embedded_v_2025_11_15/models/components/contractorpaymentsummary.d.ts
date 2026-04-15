import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ContractorPayment, ContractorPayment$Outbound } from "./contractorpayment.js";
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
     * The contractor’s payments within a given time period.
     *
     * @remarks
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
/** @internal */
export type Total$Outbound = {
    reimbursements?: string | undefined;
    wages?: string | undefined;
};
/** @internal */
export declare const Total$outboundSchema: z.ZodType<Total$Outbound, z.ZodTypeDef, Total>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Total$ {
    /** @deprecated use `Total$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Total, z.ZodTypeDef, unknown>;
    /** @deprecated use `Total$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Total$Outbound, z.ZodTypeDef, Total>;
    /** @deprecated use `Total$Outbound` instead. */
    type Outbound = Total$Outbound;
}
export declare function totalToJSON(total: Total): string;
export declare function totalFromJSON(jsonString: string): SafeParseResult<Total, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentSummaryContractorPayments$inboundSchema: z.ZodType<ContractorPaymentSummaryContractorPayments, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentSummaryContractorPayments$Outbound = {
    contractor_uuid?: number | undefined;
    reimbursement_total?: string | undefined;
    wage_total?: string | undefined;
    payments?: Array<ContractorPayment$Outbound> | undefined;
};
/** @internal */
export declare const ContractorPaymentSummaryContractorPayments$outboundSchema: z.ZodType<ContractorPaymentSummaryContractorPayments$Outbound, z.ZodTypeDef, ContractorPaymentSummaryContractorPayments>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentSummaryContractorPayments$ {
    /** @deprecated use `ContractorPaymentSummaryContractorPayments$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentSummaryContractorPayments, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentSummaryContractorPayments$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentSummaryContractorPayments$Outbound, z.ZodTypeDef, ContractorPaymentSummaryContractorPayments>;
    /** @deprecated use `ContractorPaymentSummaryContractorPayments$Outbound` instead. */
    type Outbound = ContractorPaymentSummaryContractorPayments$Outbound;
}
export declare function contractorPaymentSummaryContractorPaymentsToJSON(contractorPaymentSummaryContractorPayments: ContractorPaymentSummaryContractorPayments): string;
export declare function contractorPaymentSummaryContractorPaymentsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummaryContractorPayments, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentSummary$inboundSchema: z.ZodType<ContractorPaymentSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentSummary$Outbound = {
    total?: Total$Outbound | undefined;
    contractor_payments?: Array<ContractorPaymentSummaryContractorPayments$Outbound> | undefined;
};
/** @internal */
export declare const ContractorPaymentSummary$outboundSchema: z.ZodType<ContractorPaymentSummary$Outbound, z.ZodTypeDef, ContractorPaymentSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentSummary$ {
    /** @deprecated use `ContractorPaymentSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentSummary$Outbound, z.ZodTypeDef, ContractorPaymentSummary>;
    /** @deprecated use `ContractorPaymentSummary$Outbound` instead. */
    type Outbound = ContractorPaymentSummary$Outbound;
}
export declare function contractorPaymentSummaryToJSON(contractorPaymentSummary: ContractorPaymentSummary): string;
export declare function contractorPaymentSummaryFromJSON(jsonString: string): SafeParseResult<ContractorPaymentSummary, SDKValidationError>;
//# sourceMappingURL=contractorpaymentsummary.d.ts.map