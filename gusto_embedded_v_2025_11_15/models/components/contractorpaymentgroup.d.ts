import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ContractorPaymentForGroup, ContractorPaymentForGroup$Outbound } from "./contractorpaymentforgroup.js";
/**
 * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
 */
export declare const ContractorPaymentGroupStatus: {
    readonly Unfunded: "Unfunded";
    readonly Funded: "Funded";
};
/**
 * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
 */
export type ContractorPaymentGroupStatus = ClosedEnum<typeof ContractorPaymentGroupStatus>;
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
export declare const ContractorPaymentGroupStatus$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentGroupStatus>;
/** @internal */
export declare const ContractorPaymentGroupStatus$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentGroupStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentGroupStatus$ {
    /** @deprecated use `ContractorPaymentGroupStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unfunded: "Unfunded";
        readonly Funded: "Funded";
    }>;
    /** @deprecated use `ContractorPaymentGroupStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unfunded: "Unfunded";
        readonly Funded: "Funded";
    }>;
}
/** @internal */
export declare const ContractorPaymentGroupTotals$inboundSchema: z.ZodType<ContractorPaymentGroupTotals, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentGroupTotals$Outbound = {
    amount?: string | undefined;
    debit_amount?: string | undefined;
    wage_amount?: string | undefined;
    reimbursement_amount?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentGroupTotals$outboundSchema: z.ZodType<ContractorPaymentGroupTotals$Outbound, z.ZodTypeDef, ContractorPaymentGroupTotals>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentGroupTotals$ {
    /** @deprecated use `ContractorPaymentGroupTotals$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentGroupTotals, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentGroupTotals$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentGroupTotals$Outbound, z.ZodTypeDef, ContractorPaymentGroupTotals>;
    /** @deprecated use `ContractorPaymentGroupTotals$Outbound` instead. */
    type Outbound = ContractorPaymentGroupTotals$Outbound;
}
export declare function contractorPaymentGroupTotalsToJSON(contractorPaymentGroupTotals: ContractorPaymentGroupTotals): string;
export declare function contractorPaymentGroupTotalsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentGroupTotals, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentGroup$inboundSchema: z.ZodType<ContractorPaymentGroup, z.ZodTypeDef, unknown>;
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
export declare const ContractorPaymentGroup$outboundSchema: z.ZodType<ContractorPaymentGroup$Outbound, z.ZodTypeDef, ContractorPaymentGroup>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentGroup$ {
    /** @deprecated use `ContractorPaymentGroup$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentGroup, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentGroup$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentGroup$Outbound, z.ZodTypeDef, ContractorPaymentGroup>;
    /** @deprecated use `ContractorPaymentGroup$Outbound` instead. */
    type Outbound = ContractorPaymentGroup$Outbound;
}
export declare function contractorPaymentGroupToJSON(contractorPaymentGroup: ContractorPaymentGroup): string;
export declare function contractorPaymentGroupFromJSON(jsonString: string): SafeParseResult<ContractorPaymentGroup, SDKValidationError>;
//# sourceMappingURL=contractorpaymentgroup.d.ts.map