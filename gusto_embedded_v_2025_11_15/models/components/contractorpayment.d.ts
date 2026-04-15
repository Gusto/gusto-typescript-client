import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The payment method.
 */
export declare const ContractorPaymentPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
    readonly CorrectionPayment: "Correction Payment";
};
/**
 * The payment method.
 */
export type ContractorPaymentPaymentMethod = ClosedEnum<typeof ContractorPaymentPaymentMethod>;
/**
 * Contractor payment status
 */
export declare const ContractorPaymentStatus: {
    readonly Funded: "Funded";
    readonly Unfunded: "Unfunded";
};
/**
 * Contractor payment status
 */
export type ContractorPaymentStatus = ClosedEnum<typeof ContractorPaymentStatus>;
/**
 * The wage type for the payment.
 */
export declare const ContractorPaymentWageType: {
    readonly Hourly: "Hourly";
    readonly Fixed: "Fixed";
};
/**
 * The wage type for the payment.
 */
export type ContractorPaymentWageType = ClosedEnum<typeof ContractorPaymentWageType>;
/**
 * The representation of a single contractor payment.
 */
export type ContractorPayment = {
    /**
     * The unique identifier of the contractor payment in Gusto.
     */
    uuid: string;
    /**
     * The UUID of the contractor.
     */
    contractorUuid?: string | undefined;
    /**
     * The bonus amount in the payment.
     */
    bonus?: string | undefined;
    /**
     * The payment date.
     */
    date?: string | undefined;
    /**
     * The number of hours worked for the payment.
     */
    hours?: string | undefined;
    /**
     * The payment method.
     */
    paymentMethod?: ContractorPaymentPaymentMethod | undefined;
    /**
     * The reimbursement amount in the payment.
     */
    reimbursement?: string | undefined;
    /**
     * Contractor payment status
     */
    status?: ContractorPaymentStatus | undefined;
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
    wageType?: ContractorPaymentWageType | undefined;
    /**
     * (hours * hourly_rate) + wage + bonus
     */
    wageTotal?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentPaymentMethod>;
/** @internal */
export declare const ContractorPaymentPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentPaymentMethod$ {
    /** @deprecated use `ContractorPaymentPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
        readonly CorrectionPayment: "Correction Payment";
    }>;
    /** @deprecated use `ContractorPaymentPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
        readonly CorrectionPayment: "Correction Payment";
    }>;
}
/** @internal */
export declare const ContractorPaymentStatus$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentStatus>;
/** @internal */
export declare const ContractorPaymentStatus$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentStatus$ {
    /** @deprecated use `ContractorPaymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Funded: "Funded";
        readonly Unfunded: "Unfunded";
    }>;
    /** @deprecated use `ContractorPaymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Funded: "Funded";
        readonly Unfunded: "Unfunded";
    }>;
}
/** @internal */
export declare const ContractorPaymentWageType$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentWageType>;
/** @internal */
export declare const ContractorPaymentWageType$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentWageType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentWageType$ {
    /** @deprecated use `ContractorPaymentWageType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Hourly: "Hourly";
        readonly Fixed: "Fixed";
    }>;
    /** @deprecated use `ContractorPaymentWageType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Hourly: "Hourly";
        readonly Fixed: "Fixed";
    }>;
}
/** @internal */
export declare const ContractorPayment$inboundSchema: z.ZodType<ContractorPayment, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPayment$Outbound = {
    uuid: string;
    contractor_uuid?: string | undefined;
    bonus?: string | undefined;
    date?: string | undefined;
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
export declare const ContractorPayment$outboundSchema: z.ZodType<ContractorPayment$Outbound, z.ZodTypeDef, ContractorPayment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPayment$ {
    /** @deprecated use `ContractorPayment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPayment, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPayment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPayment$Outbound, z.ZodTypeDef, ContractorPayment>;
    /** @deprecated use `ContractorPayment$Outbound` instead. */
    type Outbound = ContractorPayment$Outbound;
}
export declare function contractorPaymentToJSON(contractorPayment: ContractorPayment): string;
export declare function contractorPaymentFromJSON(jsonString: string): SafeParseResult<ContractorPayment, SDKValidationError>;
//# sourceMappingURL=contractorpayment.d.ts.map