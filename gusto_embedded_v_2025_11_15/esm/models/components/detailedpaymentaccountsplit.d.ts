import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Details of a single payment split for a payment method.
 */
export type DetailedPaymentAccountSplit = {
    /**
     * The UUID of the bank account.
     */
    bankAccountUuid?: string | undefined;
    /**
     * The masked account number.
     */
    hiddenAccountNumber?: string | undefined;
    /**
     * The name of the bank account.
     */
    name?: string | undefined;
    /**
     * The priority of the payment split.
     */
    priority?: number | undefined;
    /**
     * If `split_by` is 'Amount', this is in cents (e.g., 500 for $5.00) and exactly one account must have a `split_amount` of `null` to capture the remainder. If `split_by` is 'Percentage', this is the percentage value (e.g., 60 for 60%).
     */
    splitAmount?: number | null | undefined;
    /**
     * Ciphertext containing the full bank account number, which must be decrypted using a key provided by Gusto. Only visible with the appropriate `read:account_number` scope (e.g., `employee_payment_methods:read:account_number`).
     */
    encryptedAccountNumber?: string | null | undefined;
};
/** @internal */
export declare const DetailedPaymentAccountSplit$inboundSchema: z.ZodType<DetailedPaymentAccountSplit, z.ZodTypeDef, unknown>;
export declare function detailedPaymentAccountSplitFromJSON(jsonString: string): SafeParseResult<DetailedPaymentAccountSplit, SDKValidationError>;
//# sourceMappingURL=detailedpaymentaccountsplit.d.ts.map