import * as z from "zod/v3";
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
export declare const ContractorBankAccount$inboundSchema: z.ZodType<ContractorBankAccount, z.ZodTypeDef, unknown>;
export declare function contractorBankAccountFromJSON(jsonString: string): SafeParseResult<ContractorBankAccount, SDKValidationError>;
//# sourceMappingURL=contractorbankaccount.d.ts.map