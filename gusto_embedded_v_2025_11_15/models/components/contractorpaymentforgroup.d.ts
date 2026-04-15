import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The payment method.
 */
export declare const ContractorPaymentForGroupPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
    readonly CorrectionPayment: "Correction Payment";
};
/**
 * The payment method.
 */
export type ContractorPaymentForGroupPaymentMethod = ClosedEnum<typeof ContractorPaymentForGroupPaymentMethod>;
/**
 * The status of the contractor payment.  Will transition to `Funded` during payments processing if the payment should be funded, i.e. has `Direct Deposit` for payment method. Contractors payments with `Check` payment method will remain `Unfunded`.
 */
export declare const ContractorPaymentForGroupStatus: {
    readonly Funded: "Funded";
    readonly Unfunded: "Unfunded";
};
/**
 * The status of the contractor payment.  Will transition to `Funded` during payments processing if the payment should be funded, i.e. has `Direct Deposit` for payment method. Contractors payments with `Check` payment method will remain `Unfunded`.
 */
export type ContractorPaymentForGroupStatus = ClosedEnum<typeof ContractorPaymentForGroupStatus>;
/**
 * The wage type for the payment.
 */
export declare const ContractorPaymentForGroupWageType: {
    readonly Hourly: "Hourly";
    readonly Fixed: "Fixed";
};
/**
 * The wage type for the payment.
 */
export type ContractorPaymentForGroupWageType = ClosedEnum<typeof ContractorPaymentForGroupWageType>;
/**
 * The representation of a single contractor payment.
 */
export type ContractorPaymentForGroup = {
    /**
     * The unique identifier of the contractor payment in Gusto.
     */
    uuid?: string | undefined;
    /**
     * The UUID of the contractor.
     */
    contractorUuid?: string | undefined;
    /**
     * The bonus amount in the payment.
     */
    bonus?: string | undefined;
    /**
     * The number of hours worked for the payment.
     */
    hours?: string | undefined;
    /**
     * The payment method.
     */
    paymentMethod?: ContractorPaymentForGroupPaymentMethod | undefined;
    /**
     * The reimbursement amount in the payment.
     */
    reimbursement?: string | undefined;
    /**
     * The status of the contractor payment.  Will transition to `Funded` during payments processing if the payment should be funded, i.e. has `Direct Deposit` for payment method. Contractors payments with `Check` payment method will remain `Unfunded`.
     */
    status?: ContractorPaymentForGroupStatus | undefined;
    /**
     * The rate per hour worked for the payment.
     */
    hourlyRate?: string | undefined;
    /**
     * Determine if the contractor payment can be cancelled.
     */
    mayCancel?: boolean | undefined;
    /**
     * The fixed wage of the payment, regardless of hours worked.
     */
    wage?: string | undefined;
    /**
     * The wage type for the payment.
     */
    wageType?: ContractorPaymentForGroupWageType | undefined;
    /**
     * (hours * hourly_rate) + wage + bonus
     */
    wageTotal?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentForGroupPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentForGroupPaymentMethod>;
/** @internal */
export declare const ContractorPaymentForGroupPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentForGroupPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentForGroupPaymentMethod$ {
    /** @deprecated use `ContractorPaymentForGroupPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
        readonly CorrectionPayment: "Correction Payment";
    }>;
    /** @deprecated use `ContractorPaymentForGroupPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
        readonly CorrectionPayment: "Correction Payment";
    }>;
}
/** @internal */
export declare const ContractorPaymentForGroupStatus$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentForGroupStatus>;
/** @internal */
export declare const ContractorPaymentForGroupStatus$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentForGroupStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentForGroupStatus$ {
    /** @deprecated use `ContractorPaymentForGroupStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Funded: "Funded";
        readonly Unfunded: "Unfunded";
    }>;
    /** @deprecated use `ContractorPaymentForGroupStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Funded: "Funded";
        readonly Unfunded: "Unfunded";
    }>;
}
/** @internal */
export declare const ContractorPaymentForGroupWageType$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentForGroupWageType>;
/** @internal */
export declare const ContractorPaymentForGroupWageType$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentForGroupWageType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentForGroupWageType$ {
    /** @deprecated use `ContractorPaymentForGroupWageType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Hourly: "Hourly";
        readonly Fixed: "Fixed";
    }>;
    /** @deprecated use `ContractorPaymentForGroupWageType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Hourly: "Hourly";
        readonly Fixed: "Fixed";
    }>;
}
/** @internal */
export declare const ContractorPaymentForGroup$inboundSchema: z.ZodType<ContractorPaymentForGroup, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentForGroup$Outbound = {
    uuid?: string | undefined;
    contractor_uuid?: string | undefined;
    bonus?: string | undefined;
    hours?: string | undefined;
    payment_method?: string | undefined;
    reimbursement?: string | undefined;
    status?: string | undefined;
    hourly_rate?: string | undefined;
    may_cancel?: boolean | undefined;
    wage?: string | undefined;
    wage_type?: string | undefined;
    wage_total?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentForGroup$outboundSchema: z.ZodType<ContractorPaymentForGroup$Outbound, z.ZodTypeDef, ContractorPaymentForGroup>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentForGroup$ {
    /** @deprecated use `ContractorPaymentForGroup$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentForGroup, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentForGroup$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentForGroup$Outbound, z.ZodTypeDef, ContractorPaymentForGroup>;
    /** @deprecated use `ContractorPaymentForGroup$Outbound` instead. */
    type Outbound = ContractorPaymentForGroup$Outbound;
}
export declare function contractorPaymentForGroupToJSON(contractorPaymentForGroup: ContractorPaymentForGroup): string;
export declare function contractorPaymentForGroupFromJSON(jsonString: string): SafeParseResult<ContractorPaymentForGroup, SDKValidationError>;
//# sourceMappingURL=contractorpaymentforgroup.d.ts.map