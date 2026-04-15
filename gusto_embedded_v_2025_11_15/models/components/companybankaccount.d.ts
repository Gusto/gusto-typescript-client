import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Bank account type
 */
export declare const AccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
/**
 * Bank account type
 */
export type AccountType = ClosedEnum<typeof AccountType>;
/**
 * The verification status of the bank account.
 *
 * @remarks
 *
 * 'awaiting_deposits' means the bank account is just created and money is being transferred.
 * 'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
 * 'verified' means the bank account is verified.
 */
export declare const VerificationStatus: {
    readonly AwaitingDeposits: "awaiting_deposits";
    readonly ReadyForVerification: "ready_for_verification";
    readonly Verified: "verified";
};
/**
 * The verification status of the bank account.
 *
 * @remarks
 *
 * 'awaiting_deposits' means the bank account is just created and money is being transferred.
 * 'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
 * 'verified' means the bank account is verified.
 */
export type VerificationStatus = ClosedEnum<typeof VerificationStatus>;
/**
 * The verification type of the bank account.
 *
 * @remarks
 *
 * 'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
 * 'plaid' means the bank account is connected through Plaid.
 */
export declare const VerificationType: {
    readonly BankDeposits: "bank_deposits";
    readonly Plaid: "plaid";
    readonly PlaidExternal: "plaid_external";
};
/**
 * The verification type of the bank account.
 *
 * @remarks
 *
 * 'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
 * 'plaid' means the bank account is connected through Plaid.
 */
export type VerificationType = ClosedEnum<typeof VerificationType>;
/**
 * The Plaid connection status of the bank account. Only applies when verification type is Plaid.
 */
export declare const PlaidStatus: {
    readonly Connected: "connected";
    readonly Disconnected: "disconnected";
};
/**
 * The Plaid connection status of the bank account. Only applies when verification type is Plaid.
 */
export type PlaidStatus = ClosedEnum<typeof PlaidStatus>;
/**
 * The company bank account
 */
export type CompanyBankAccount = {
    /**
     * UUID of the bank account
     */
    uuid: string;
    /**
     * UUID of the company
     */
    companyUuid?: string | undefined;
    /**
     * Bank account type
     */
    accountType?: AccountType | undefined;
    /**
     * The bank account's routing number
     */
    routingNumber?: string | undefined;
    /**
     * Masked bank account number
     */
    hiddenAccountNumber?: string | undefined;
    /**
     * The verification status of the bank account.
     *
     * @remarks
     *
     * 'awaiting_deposits' means the bank account is just created and money is being transferred.
     * 'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
     * 'verified' means the bank account is verified.
     */
    verificationStatus?: VerificationStatus | undefined;
    /**
     * The verification type of the bank account.
     *
     * @remarks
     *
     * 'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
     * 'plaid' means the bank account is connected through Plaid.
     */
    verificationType?: VerificationType | undefined;
    /**
     * The Plaid connection status of the bank account. Only applies when verification type is Plaid.
     */
    plaidStatus?: PlaidStatus | null | undefined;
    /**
     * The last fetch balance for the bank account. Please be aware that this amount does not reflect the most up-to-date balance and only applies when the verification type is Plaid.
     */
    lastCachedBalance?: string | null | undefined;
    /**
     * The balance fetch date associated with the last_cached_balance. Only applies when verification type is Plaid.
     */
    balanceFetchedDate?: string | null | undefined;
    /**
     * Name of bank account
     */
    name?: string | undefined;
};
/** @internal */
export declare const AccountType$inboundSchema: z.ZodNativeEnum<typeof AccountType>;
/** @internal */
export declare const AccountType$outboundSchema: z.ZodNativeEnum<typeof AccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountType$ {
    /** @deprecated use `AccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `AccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const VerificationStatus$inboundSchema: z.ZodNativeEnum<typeof VerificationStatus>;
/** @internal */
export declare const VerificationStatus$outboundSchema: z.ZodNativeEnum<typeof VerificationStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VerificationStatus$ {
    /** @deprecated use `VerificationStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AwaitingDeposits: "awaiting_deposits";
        readonly ReadyForVerification: "ready_for_verification";
        readonly Verified: "verified";
    }>;
    /** @deprecated use `VerificationStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AwaitingDeposits: "awaiting_deposits";
        readonly ReadyForVerification: "ready_for_verification";
        readonly Verified: "verified";
    }>;
}
/** @internal */
export declare const VerificationType$inboundSchema: z.ZodNativeEnum<typeof VerificationType>;
/** @internal */
export declare const VerificationType$outboundSchema: z.ZodNativeEnum<typeof VerificationType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VerificationType$ {
    /** @deprecated use `VerificationType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly BankDeposits: "bank_deposits";
        readonly Plaid: "plaid";
        readonly PlaidExternal: "plaid_external";
    }>;
    /** @deprecated use `VerificationType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly BankDeposits: "bank_deposits";
        readonly Plaid: "plaid";
        readonly PlaidExternal: "plaid_external";
    }>;
}
/** @internal */
export declare const PlaidStatus$inboundSchema: z.ZodNativeEnum<typeof PlaidStatus>;
/** @internal */
export declare const PlaidStatus$outboundSchema: z.ZodNativeEnum<typeof PlaidStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PlaidStatus$ {
    /** @deprecated use `PlaidStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Connected: "connected";
        readonly Disconnected: "disconnected";
    }>;
    /** @deprecated use `PlaidStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Connected: "connected";
        readonly Disconnected: "disconnected";
    }>;
}
/** @internal */
export declare const CompanyBankAccount$inboundSchema: z.ZodType<CompanyBankAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBankAccount$Outbound = {
    uuid: string;
    company_uuid?: string | undefined;
    account_type?: string | undefined;
    routing_number?: string | undefined;
    hidden_account_number?: string | undefined;
    verification_status?: string | undefined;
    verification_type?: string | undefined;
    plaid_status?: string | null | undefined;
    last_cached_balance?: string | null | undefined;
    balance_fetched_date?: string | null | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const CompanyBankAccount$outboundSchema: z.ZodType<CompanyBankAccount$Outbound, z.ZodTypeDef, CompanyBankAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBankAccount$ {
    /** @deprecated use `CompanyBankAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBankAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBankAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBankAccount$Outbound, z.ZodTypeDef, CompanyBankAccount>;
    /** @deprecated use `CompanyBankAccount$Outbound` instead. */
    type Outbound = CompanyBankAccount$Outbound;
}
export declare function companyBankAccountToJSON(companyBankAccount: CompanyBankAccount): string;
export declare function companyBankAccountFromJSON(jsonString: string): SafeParseResult<CompanyBankAccount, SDKValidationError>;
//# sourceMappingURL=companybankaccount.d.ts.map