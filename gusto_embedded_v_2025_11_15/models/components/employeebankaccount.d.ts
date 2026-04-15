import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Bank account type
 */
export declare const EmployeeBankAccountAccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
/**
 * Bank account type
 */
export type EmployeeBankAccountAccountType = ClosedEnum<typeof EmployeeBankAccountAccountType>;
/**
 * Example response
 */
export type EmployeeBankAccount = {
    /**
     * UUID of the bank account
     */
    uuid: string;
    /**
     * UUID of the employee
     */
    employeeUuid?: string | undefined;
    /**
     * Bank account type
     */
    accountType?: EmployeeBankAccountAccountType | undefined;
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
export declare const EmployeeBankAccountAccountType$inboundSchema: z.ZodNativeEnum<typeof EmployeeBankAccountAccountType>;
/** @internal */
export declare const EmployeeBankAccountAccountType$outboundSchema: z.ZodNativeEnum<typeof EmployeeBankAccountAccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBankAccountAccountType$ {
    /** @deprecated use `EmployeeBankAccountAccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `EmployeeBankAccountAccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const EmployeeBankAccount$inboundSchema: z.ZodType<EmployeeBankAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeBankAccount$Outbound = {
    uuid: string;
    employee_uuid?: string | undefined;
    account_type?: string | undefined;
    name?: string | undefined;
    routing_number?: string | undefined;
    hidden_account_number?: string | undefined;
};
/** @internal */
export declare const EmployeeBankAccount$outboundSchema: z.ZodType<EmployeeBankAccount$Outbound, z.ZodTypeDef, EmployeeBankAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeBankAccount$ {
    /** @deprecated use `EmployeeBankAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeBankAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeBankAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeBankAccount$Outbound, z.ZodTypeDef, EmployeeBankAccount>;
    /** @deprecated use `EmployeeBankAccount$Outbound` instead. */
    type Outbound = EmployeeBankAccount$Outbound;
}
export declare function employeeBankAccountToJSON(employeeBankAccount: EmployeeBankAccount): string;
export declare function employeeBankAccountFromJSON(jsonString: string): SafeParseResult<EmployeeBankAccount, SDKValidationError>;
//# sourceMappingURL=employeebankaccount.d.ts.map