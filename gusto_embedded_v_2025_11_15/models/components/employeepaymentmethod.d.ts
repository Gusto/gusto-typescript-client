import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PaymentMethodBankAccount, PaymentMethodBankAccount$Outbound } from "./paymentmethodbankaccount.js";
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export declare const EmployeePaymentMethodType: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export type EmployeePaymentMethodType = ClosedEnum<typeof EmployeePaymentMethodType>;
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export declare const SplitBy: {
    readonly Amount: "Amount";
    readonly Percentage: "Percentage";
};
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export type SplitBy = ClosedEnum<typeof SplitBy>;
/**
 * Example response
 */
export type EmployeePaymentMethod = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
     */
    type?: EmployeePaymentMethodType | undefined;
    /**
     * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
     */
    splitBy?: SplitBy | null | undefined;
    splits?: Array<PaymentMethodBankAccount> | null | undefined;
};
/** @internal */
export declare const EmployeePaymentMethodType$inboundSchema: z.ZodNativeEnum<typeof EmployeePaymentMethodType>;
/** @internal */
export declare const EmployeePaymentMethodType$outboundSchema: z.ZodNativeEnum<typeof EmployeePaymentMethodType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeePaymentMethodType$ {
    /** @deprecated use `EmployeePaymentMethodType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `EmployeePaymentMethodType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const SplitBy$inboundSchema: z.ZodNativeEnum<typeof SplitBy>;
/** @internal */
export declare const SplitBy$outboundSchema: z.ZodNativeEnum<typeof SplitBy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SplitBy$ {
    /** @deprecated use `SplitBy$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Amount: "Amount";
        readonly Percentage: "Percentage";
    }>;
    /** @deprecated use `SplitBy$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Amount: "Amount";
        readonly Percentage: "Percentage";
    }>;
}
/** @internal */
export declare const EmployeePaymentMethod$inboundSchema: z.ZodType<EmployeePaymentMethod, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeePaymentMethod$Outbound = {
    version?: string | undefined;
    type?: string | undefined;
    split_by?: string | null | undefined;
    splits?: Array<PaymentMethodBankAccount$Outbound> | null | undefined;
};
/** @internal */
export declare const EmployeePaymentMethod$outboundSchema: z.ZodType<EmployeePaymentMethod$Outbound, z.ZodTypeDef, EmployeePaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeePaymentMethod$ {
    /** @deprecated use `EmployeePaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeePaymentMethod, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeePaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeePaymentMethod$Outbound, z.ZodTypeDef, EmployeePaymentMethod>;
    /** @deprecated use `EmployeePaymentMethod$Outbound` instead. */
    type Outbound = EmployeePaymentMethod$Outbound;
}
export declare function employeePaymentMethodToJSON(employeePaymentMethod: EmployeePaymentMethod): string;
export declare function employeePaymentMethodFromJSON(jsonString: string): SafeParseResult<EmployeePaymentMethod, SDKValidationError>;
//# sourceMappingURL=employeepaymentmethod.d.ts.map