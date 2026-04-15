import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Representation of a bank account item
 */
export type PaymentMethodBankAccount = {
    /**
     * The bank account ID
     */
    uuid: string;
    /**
     * The bank account name
     */
    name?: string | undefined;
    /**
     * Masked bank account number
     */
    hiddenAccountNumber?: string | undefined;
    /**
     * The order of priority for each payment split, with priority 1 being the first bank account paid. Priority must be unique and sequential.
     */
    priority?: number | undefined;
    /**
     * The cents amount allocated for each payment split
     */
    splitAmount?: number | null | undefined;
};
/** @internal */
export declare const PaymentMethodBankAccount$inboundSchema: z.ZodType<PaymentMethodBankAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type PaymentMethodBankAccount$Outbound = {
    uuid: string;
    name?: string | undefined;
    hidden_account_number?: string | undefined;
    priority?: number | undefined;
    split_amount?: number | null | undefined;
};
/** @internal */
export declare const PaymentMethodBankAccount$outboundSchema: z.ZodType<PaymentMethodBankAccount$Outbound, z.ZodTypeDef, PaymentMethodBankAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentMethodBankAccount$ {
    /** @deprecated use `PaymentMethodBankAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaymentMethodBankAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaymentMethodBankAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaymentMethodBankAccount$Outbound, z.ZodTypeDef, PaymentMethodBankAccount>;
    /** @deprecated use `PaymentMethodBankAccount$Outbound` instead. */
    type Outbound = PaymentMethodBankAccount$Outbound;
}
export declare function paymentMethodBankAccountToJSON(paymentMethodBankAccount: PaymentMethodBankAccount): string;
export declare function paymentMethodBankAccountFromJSON(jsonString: string): SafeParseResult<PaymentMethodBankAccount, SDKValidationError>;
//# sourceMappingURL=paymentmethodbankaccount.d.ts.map