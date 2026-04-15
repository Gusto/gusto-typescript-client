import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Bank account type
 */
export declare const ContractorBankAccountAccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
/**
 * Bank account type
 */
export type ContractorBankAccountAccountType = ClosedEnum<typeof ContractorBankAccountAccountType>;
/**
 * Example response
 */
export type ContractorBankAccount = {
    /**
     * UUID of the bank account
     */
    uuid: string;
    /**
     * UUID of the employee
     */
    contractorUuid?: string | undefined;
    /**
     * Bank account type
     */
    accountType?: ContractorBankAccountAccountType | undefined;
    /**
     * Name for the bank account
     */
    name?: string | undefined;
    /**
     * The bank account's routing number
     */
    routingNumber?: string | undefined;
    /**
     * Masked bank account number
     */
    hiddenAccountNumber?: string | undefined;
};
/** @internal */
export declare const ContractorBankAccountAccountType$inboundSchema: z.ZodNativeEnum<typeof ContractorBankAccountAccountType>;
/** @internal */
export declare const ContractorBankAccountAccountType$outboundSchema: z.ZodNativeEnum<typeof ContractorBankAccountAccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorBankAccountAccountType$ {
    /** @deprecated use `ContractorBankAccountAccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `ContractorBankAccountAccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const ContractorBankAccount$inboundSchema: z.ZodType<ContractorBankAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorBankAccount$Outbound = {
    uuid: string;
    contractor_uuid?: string | undefined;
    account_type?: string | undefined;
    name?: string | undefined;
    routing_number?: string | undefined;
    hidden_account_number?: string | undefined;
};
/** @internal */
export declare const ContractorBankAccount$outboundSchema: z.ZodType<ContractorBankAccount$Outbound, z.ZodTypeDef, ContractorBankAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorBankAccount$ {
    /** @deprecated use `ContractorBankAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorBankAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorBankAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorBankAccount$Outbound, z.ZodTypeDef, ContractorBankAccount>;
    /** @deprecated use `ContractorBankAccount$Outbound` instead. */
    type Outbound = ContractorBankAccount$Outbound;
}
export declare function contractorBankAccountToJSON(contractorBankAccount: ContractorBankAccount): string;
export declare function contractorBankAccountFromJSON(jsonString: string): SafeParseResult<ContractorBankAccount, SDKValidationError>;
//# sourceMappingURL=contractorbankaccount.d.ts.map