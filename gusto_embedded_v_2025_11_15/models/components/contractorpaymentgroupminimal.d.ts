import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
 */
export declare const ContractorPaymentGroupMinimalStatus: {
    readonly Unfunded: "Unfunded";
    readonly Funded: "Funded";
};
/**
 * The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.
 */
export type ContractorPaymentGroupMinimalStatus = ClosedEnum<typeof ContractorPaymentGroupMinimalStatus>;
export type ContractorPaymentGroupMinimalTotals = {
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
 * The summary of a contractor payment group.
 */
export type ContractorPaymentGroupMinimal = {
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
    status?: ContractorPaymentGroupMinimalStatus | undefined;
    /**
     * Token used to make contractor payment group creation idempotent.  Will error if attempting to create a group with a duplicate token.
     */
    creationToken?: string | null | undefined;
    totals?: ContractorPaymentGroupMinimalTotals | undefined;
};
/** @internal */
export declare const ContractorPaymentGroupMinimalStatus$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentGroupMinimalStatus>;
/** @internal */
export declare const ContractorPaymentGroupMinimalStatus$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentGroupMinimalStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentGroupMinimalStatus$ {
    /** @deprecated use `ContractorPaymentGroupMinimalStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unfunded: "Unfunded";
        readonly Funded: "Funded";
    }>;
    /** @deprecated use `ContractorPaymentGroupMinimalStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unfunded: "Unfunded";
        readonly Funded: "Funded";
    }>;
}
/** @internal */
export declare const ContractorPaymentGroupMinimalTotals$inboundSchema: z.ZodType<ContractorPaymentGroupMinimalTotals, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentGroupMinimalTotals$Outbound = {
    amount?: string | undefined;
    debit_amount?: string | undefined;
    wage_amount?: string | undefined;
    reimbursement_amount?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentGroupMinimalTotals$outboundSchema: z.ZodType<ContractorPaymentGroupMinimalTotals$Outbound, z.ZodTypeDef, ContractorPaymentGroupMinimalTotals>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentGroupMinimalTotals$ {
    /** @deprecated use `ContractorPaymentGroupMinimalTotals$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentGroupMinimalTotals, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentGroupMinimalTotals$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentGroupMinimalTotals$Outbound, z.ZodTypeDef, ContractorPaymentGroupMinimalTotals>;
    /** @deprecated use `ContractorPaymentGroupMinimalTotals$Outbound` instead. */
    type Outbound = ContractorPaymentGroupMinimalTotals$Outbound;
}
export declare function contractorPaymentGroupMinimalTotalsToJSON(contractorPaymentGroupMinimalTotals: ContractorPaymentGroupMinimalTotals): string;
export declare function contractorPaymentGroupMinimalTotalsFromJSON(jsonString: string): SafeParseResult<ContractorPaymentGroupMinimalTotals, SDKValidationError>;
/** @internal */
export declare const ContractorPaymentGroupMinimal$inboundSchema: z.ZodType<ContractorPaymentGroupMinimal, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentGroupMinimal$Outbound = {
    uuid?: string | undefined;
    company_uuid?: string | undefined;
    check_date?: string | undefined;
    debit_date?: string | undefined;
    status?: string | undefined;
    creation_token?: string | null | undefined;
    totals?: ContractorPaymentGroupMinimalTotals$Outbound | undefined;
};
/** @internal */
export declare const ContractorPaymentGroupMinimal$outboundSchema: z.ZodType<ContractorPaymentGroupMinimal$Outbound, z.ZodTypeDef, ContractorPaymentGroupMinimal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentGroupMinimal$ {
    /** @deprecated use `ContractorPaymentGroupMinimal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentGroupMinimal, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentGroupMinimal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentGroupMinimal$Outbound, z.ZodTypeDef, ContractorPaymentGroupMinimal>;
    /** @deprecated use `ContractorPaymentGroupMinimal$Outbound` instead. */
    type Outbound = ContractorPaymentGroupMinimal$Outbound;
}
export declare function contractorPaymentGroupMinimalToJSON(contractorPaymentGroupMinimal: ContractorPaymentGroupMinimal): string;
export declare function contractorPaymentGroupMinimalFromJSON(jsonString: string): SafeParseResult<ContractorPaymentGroupMinimal, SDKValidationError>;
//# sourceMappingURL=contractorpaymentgroupminimal.d.ts.map