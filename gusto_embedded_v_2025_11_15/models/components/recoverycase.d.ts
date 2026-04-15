import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Status of the recovery case
 */
export declare const RecoveryCaseStatus: {
    readonly Open: "open";
    readonly RedebitInitiated: "redebit_initiated";
    readonly WireInitiated: "wire_initiated";
    readonly Recovered: "recovered";
    readonly Lost: "lost";
};
/**
 * Status of the recovery case
 */
export type RecoveryCaseStatus = ClosedEnum<typeof RecoveryCaseStatus>;
/**
 * Representation of a recovery case
 */
export type RecoveryCase = {
    /**
     * Unique identifier of an recovery case
     */
    uuid: string;
    /**
     * Unique identifier of the company to which the recovery case belongs
     */
    companyUuid?: string | undefined;
    /**
     * Status of the recovery case
     */
    status?: RecoveryCaseStatus | undefined;
    /**
     * The latest bank error code for the recovery case. See [this doc](https://docs.gusto.com/embedded-payroll/docs/ach-codes-and-transaction-types) for a list of common ACH return codes.
     */
    latestErrorCode?: string | undefined;
    /**
     * Date when funds were originally debited from the company's bank account
     */
    originalDebitDate?: string | undefined;
    /**
     * Check date for the associated payroll or contractor payments
     */
    checkDate?: string | undefined;
    /**
     * The uuid of the associated payroll for which the recovery case was created. If the recovery case was created for a contractor payment, this field will be null.
     */
    payrollUuid?: string | undefined;
    /**
     * The uuids of the associated contractor payments for which the recovery case was created. If the recovery case was created for a payroll, this field will be null.
     */
    contractorPaymentUuids?: Array<string> | undefined;
    /**
     * Amount outstanding for the recovery case
     */
    amountOutstanding?: string | undefined;
    /**
     * Total amount to be debited from the payroll or contractor payments
     */
    eventTotalAmount?: string | undefined;
};
/** @internal */
export declare const RecoveryCaseStatus$inboundSchema: z.ZodNativeEnum<typeof RecoveryCaseStatus>;
/** @internal */
export declare const RecoveryCaseStatus$outboundSchema: z.ZodNativeEnum<typeof RecoveryCaseStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecoveryCaseStatus$ {
    /** @deprecated use `RecoveryCaseStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Open: "open";
        readonly RedebitInitiated: "redebit_initiated";
        readonly WireInitiated: "wire_initiated";
        readonly Recovered: "recovered";
        readonly Lost: "lost";
    }>;
    /** @deprecated use `RecoveryCaseStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Open: "open";
        readonly RedebitInitiated: "redebit_initiated";
        readonly WireInitiated: "wire_initiated";
        readonly Recovered: "recovered";
        readonly Lost: "lost";
    }>;
}
/** @internal */
export declare const RecoveryCase$inboundSchema: z.ZodType<RecoveryCase, z.ZodTypeDef, unknown>;
/** @internal */
export type RecoveryCase$Outbound = {
    uuid: string;
    company_uuid?: string | undefined;
    status?: string | undefined;
    latest_error_code?: string | undefined;
    original_debit_date?: string | undefined;
    check_date?: string | undefined;
    payroll_uuid?: string | undefined;
    contractor_payment_uuids?: Array<string> | undefined;
    amount_outstanding?: string | undefined;
    event_total_amount?: string | undefined;
};
/** @internal */
export declare const RecoveryCase$outboundSchema: z.ZodType<RecoveryCase$Outbound, z.ZodTypeDef, RecoveryCase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecoveryCase$ {
    /** @deprecated use `RecoveryCase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecoveryCase, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecoveryCase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecoveryCase$Outbound, z.ZodTypeDef, RecoveryCase>;
    /** @deprecated use `RecoveryCase$Outbound` instead. */
    type Outbound = RecoveryCase$Outbound;
}
export declare function recoveryCaseToJSON(recoveryCase: RecoveryCase): string;
export declare function recoveryCaseFromJSON(jsonString: string): SafeParseResult<RecoveryCase, SDKValidationError>;
//# sourceMappingURL=recoverycase.d.ts.map