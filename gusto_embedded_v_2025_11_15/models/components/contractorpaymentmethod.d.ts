import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PaymentMethodBankAccount, PaymentMethodBankAccount$Outbound } from "./paymentmethodbankaccount.js";
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export declare const ContractorPaymentMethodType: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export type ContractorPaymentMethodType = ClosedEnum<typeof ContractorPaymentMethodType>;
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export declare const ContractorPaymentMethodSplitBy: {
    readonly Amount: "Amount";
    readonly Percentage: "Percentage";
};
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export type ContractorPaymentMethodSplitBy = ClosedEnum<typeof ContractorPaymentMethodSplitBy>;
/**
 * Example response
 */
export type ContractorPaymentMethod = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
     */
    type?: ContractorPaymentMethodType | undefined;
    /**
     * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
     */
    splitBy?: ContractorPaymentMethodSplitBy | null | undefined;
    splits?: Array<PaymentMethodBankAccount> | null | undefined;
};
/** @internal */
export declare const ContractorPaymentMethodType$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentMethodType>;
/** @internal */
export declare const ContractorPaymentMethodType$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentMethodType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentMethodType$ {
    /** @deprecated use `ContractorPaymentMethodType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `ContractorPaymentMethodType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const ContractorPaymentMethodSplitBy$inboundSchema: z.ZodNativeEnum<typeof ContractorPaymentMethodSplitBy>;
/** @internal */
export declare const ContractorPaymentMethodSplitBy$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentMethodSplitBy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentMethodSplitBy$ {
    /** @deprecated use `ContractorPaymentMethodSplitBy$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Amount: "Amount";
        readonly Percentage: "Percentage";
    }>;
    /** @deprecated use `ContractorPaymentMethodSplitBy$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Amount: "Amount";
        readonly Percentage: "Percentage";
    }>;
}
/** @internal */
export declare const ContractorPaymentMethod$inboundSchema: z.ZodType<ContractorPaymentMethod, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPaymentMethod$Outbound = {
    version?: string | undefined;
    type?: string | undefined;
    split_by?: string | null | undefined;
    splits?: Array<PaymentMethodBankAccount$Outbound> | null | undefined;
};
/** @internal */
export declare const ContractorPaymentMethod$outboundSchema: z.ZodType<ContractorPaymentMethod$Outbound, z.ZodTypeDef, ContractorPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPaymentMethod$ {
    /** @deprecated use `ContractorPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPaymentMethod, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPaymentMethod$Outbound, z.ZodTypeDef, ContractorPaymentMethod>;
    /** @deprecated use `ContractorPaymentMethod$Outbound` instead. */
    type Outbound = ContractorPaymentMethod$Outbound;
}
export declare function contractorPaymentMethodToJSON(contractorPaymentMethod: ContractorPaymentMethod): string;
export declare function contractorPaymentMethodFromJSON(jsonString: string): SafeParseResult<ContractorPaymentMethod, SDKValidationError>;
//# sourceMappingURL=contractorpaymentmethod.d.ts.map