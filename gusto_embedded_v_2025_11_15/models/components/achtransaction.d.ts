import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of payment event associated with the ACH transaction
 */
export declare const PaymentEventType: {
    readonly Payroll: "Payroll";
    readonly ContractorPayment: "ContractorPayment";
};
/**
 * The type of payment event associated with the ACH transaction
 */
export type PaymentEventType = ClosedEnum<typeof PaymentEventType>;
/**
 * The type of recipient associated with the ACH transaction
 */
export declare const AchTransactionRecipientType: {
    readonly Employee: "Employee";
    readonly Contractor: "Contractor";
};
/**
 * The type of recipient associated with the ACH transaction
 */
export type AchTransactionRecipientType = ClosedEnum<typeof AchTransactionRecipientType>;
/**
 * The status of the ACH transaction
 */
export declare const PaymentStatus: {
    readonly Unsubmitted: "unsubmitted";
    readonly Submitted: "submitted";
    readonly Successful: "successful";
    readonly Failed: "failed";
};
/**
 * The status of the ACH transaction
 */
export type PaymentStatus = ClosedEnum<typeof PaymentStatus>;
/**
 * The direction of the payment
 */
export declare const PaymentDirection: {
    readonly Credit: "credit";
    readonly Debit: "debit";
};
/**
 * The direction of the payment
 */
export type PaymentDirection = ClosedEnum<typeof PaymentDirection>;
/**
 * Representation of an ACH transaction
 */
export type AchTransaction = {
    /**
     * Unique identifier of an ACH transaction
     */
    uuid: string;
    /**
     * Unique identifier of the company to which the ACH transaction belongs
     */
    companyUuid?: string | undefined;
    /**
     * The type of payment event associated with the ACH transaction
     */
    paymentEventType?: PaymentEventType | undefined;
    /**
     * Unique identifier for the payment event associated with the ACH transaction
     */
    paymentEventUuid?: string | undefined;
    /**
     * The type of recipient associated with the ACH transaction
     */
    recipientType?: AchTransactionRecipientType | undefined;
    /**
     * Unique identifier for the recipient associated with the ACH transaction
     */
    recipientUuid?: string | undefined;
    /**
     * The error code associated with the ACH transaction, if any. If there is no error on the ACH transaction, this field will be nil. See [this article](https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2/) for a complete list of ACH return codes.
     */
    errorCode?: string | undefined;
    /**
     * The type of transaction associated with the ACH transaction
     */
    transactionType?: string | undefined;
    /**
     * The status of the ACH transaction
     */
    paymentStatus?: PaymentStatus | undefined;
    /**
     * The direction of the payment
     */
    paymentDirection?: PaymentDirection | undefined;
    /**
     * The date of the payment event check associated with the ACH transaction
     */
    paymentEventCheckDate?: string | undefined;
    /**
     * The date of the payment associated with the ACH transaction
     */
    paymentDate?: string | undefined;
    /**
     * The amount of money moved by the ACH transaction. This amount is always non-negative.
     */
    amount?: string | undefined;
    /**
     * The description of the ACH transaction. Can be used to identify the ACH transaction on the recipient's bank statement.
     */
    description?: string | undefined;
};
/** @internal */
export declare const PaymentEventType$inboundSchema: z.ZodNativeEnum<typeof PaymentEventType>;
/** @internal */
export declare const PaymentEventType$outboundSchema: z.ZodNativeEnum<typeof PaymentEventType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentEventType$ {
    /** @deprecated use `PaymentEventType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Payroll: "Payroll";
        readonly ContractorPayment: "ContractorPayment";
    }>;
    /** @deprecated use `PaymentEventType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Payroll: "Payroll";
        readonly ContractorPayment: "ContractorPayment";
    }>;
}
/** @internal */
export declare const AchTransactionRecipientType$inboundSchema: z.ZodNativeEnum<typeof AchTransactionRecipientType>;
/** @internal */
export declare const AchTransactionRecipientType$outboundSchema: z.ZodNativeEnum<typeof AchTransactionRecipientType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchTransactionRecipientType$ {
    /** @deprecated use `AchTransactionRecipientType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Employee: "Employee";
        readonly Contractor: "Contractor";
    }>;
    /** @deprecated use `AchTransactionRecipientType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Employee: "Employee";
        readonly Contractor: "Contractor";
    }>;
}
/** @internal */
export declare const PaymentStatus$inboundSchema: z.ZodNativeEnum<typeof PaymentStatus>;
/** @internal */
export declare const PaymentStatus$outboundSchema: z.ZodNativeEnum<typeof PaymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentStatus$ {
    /** @deprecated use `PaymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unsubmitted: "unsubmitted";
        readonly Submitted: "submitted";
        readonly Successful: "successful";
        readonly Failed: "failed";
    }>;
    /** @deprecated use `PaymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unsubmitted: "unsubmitted";
        readonly Submitted: "submitted";
        readonly Successful: "successful";
        readonly Failed: "failed";
    }>;
}
/** @internal */
export declare const PaymentDirection$inboundSchema: z.ZodNativeEnum<typeof PaymentDirection>;
/** @internal */
export declare const PaymentDirection$outboundSchema: z.ZodNativeEnum<typeof PaymentDirection>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentDirection$ {
    /** @deprecated use `PaymentDirection$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Credit: "credit";
        readonly Debit: "debit";
    }>;
    /** @deprecated use `PaymentDirection$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Credit: "credit";
        readonly Debit: "debit";
    }>;
}
/** @internal */
export declare const AchTransaction$inboundSchema: z.ZodType<AchTransaction, z.ZodTypeDef, unknown>;
/** @internal */
export type AchTransaction$Outbound = {
    uuid: string;
    company_uuid?: string | undefined;
    payment_event_type?: string | undefined;
    payment_event_uuid?: string | undefined;
    recipient_type?: string | undefined;
    recipient_uuid?: string | undefined;
    error_code?: string | undefined;
    transaction_type?: string | undefined;
    payment_status?: string | undefined;
    payment_direction?: string | undefined;
    payment_event_check_date?: string | undefined;
    payment_date?: string | undefined;
    amount?: string | undefined;
    description?: string | undefined;
};
/** @internal */
export declare const AchTransaction$outboundSchema: z.ZodType<AchTransaction$Outbound, z.ZodTypeDef, AchTransaction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchTransaction$ {
    /** @deprecated use `AchTransaction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchTransaction, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchTransaction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchTransaction$Outbound, z.ZodTypeDef, AchTransaction>;
    /** @deprecated use `AchTransaction$Outbound` instead. */
    type Outbound = AchTransaction$Outbound;
}
export declare function achTransactionToJSON(achTransaction: AchTransaction): string;
export declare function achTransactionFromJSON(jsonString: string): SafeParseResult<AchTransaction, SDKValidationError>;
//# sourceMappingURL=achtransaction.d.ts.map