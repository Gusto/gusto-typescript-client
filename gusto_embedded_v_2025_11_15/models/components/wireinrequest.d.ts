import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Status of the wire in
 */
export declare const WireInRequestStatus: {
    readonly AwaitingFunds: "awaiting_funds";
    readonly PendingReview: "pending_review";
    readonly Approved: "approved";
    readonly Rfi: "rfi";
    readonly Canceled: "canceled";
};
/**
 * Status of the wire in
 */
export type WireInRequestStatus = ClosedEnum<typeof WireInRequestStatus>;
/**
 * Unique identifier of the payment
 */
export declare const PaymentUuid: {
    readonly Payroll: "payroll";
};
/**
 * Unique identifier of the payment
 */
export type PaymentUuid = ClosedEnum<typeof PaymentUuid>;
/**
 * Representation of a wire in request
 */
export type WireInRequest = {
    /**
     * Unique identifier of a wire in request
     */
    uuid?: string | undefined;
    /**
     * Status of the wire in
     */
    status?: WireInRequestStatus | undefined;
    /**
     * Name of bank receiving the wire in
     */
    originationBank?: string | undefined;
    /**
     * Address of bank receiving the wire in
     */
    originationBankAddress?: string | undefined;
    /**
     * Name of the recipient of the wire In
     */
    recipientName?: string | undefined;
    /**
     * Address of the recipient of the wire in
     */
    recipientAddress?: string | undefined;
    /**
     * Recipient bank account number
     */
    recipientAccountNumber?: string | undefined;
    /**
     * Recipient bank routing number
     */
    recipientRoutingNumber?: string | undefined;
    /**
     * Notes for the wire in request
     */
    additionalNotes?: string | undefined;
    /**
     * Name of the bank initiating the wire in
     */
    bankName?: string | undefined;
    /**
     * Date the wire in was sent
     */
    dateSent?: string | undefined;
    /**
     * Include in note with bank to track payment
     */
    uniqueTrackingCode?: string | undefined;
    /**
     * Type of payment for the wire in
     */
    paymentType?: string | undefined;
    /**
     * Unique identifier of the payment
     */
    paymentUuid?: PaymentUuid | undefined;
    /**
     * Amount sent through wire in
     */
    amountSent?: string | undefined;
    /**
     * Requested amount for the payment
     */
    requestedAmount?: string | undefined;
    /**
     * Deadline to submit the wire in
     */
    wireInDeadline?: string | undefined;
};
/** @internal */
export declare const WireInRequestStatus$inboundSchema: z.ZodNativeEnum<typeof WireInRequestStatus>;
/** @internal */
export declare const WireInRequestStatus$outboundSchema: z.ZodNativeEnum<typeof WireInRequestStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireInRequestStatus$ {
    /** @deprecated use `WireInRequestStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AwaitingFunds: "awaiting_funds";
        readonly PendingReview: "pending_review";
        readonly Approved: "approved";
        readonly Rfi: "rfi";
        readonly Canceled: "canceled";
    }>;
    /** @deprecated use `WireInRequestStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AwaitingFunds: "awaiting_funds";
        readonly PendingReview: "pending_review";
        readonly Approved: "approved";
        readonly Rfi: "rfi";
        readonly Canceled: "canceled";
    }>;
}
/** @internal */
export declare const PaymentUuid$inboundSchema: z.ZodNativeEnum<typeof PaymentUuid>;
/** @internal */
export declare const PaymentUuid$outboundSchema: z.ZodNativeEnum<typeof PaymentUuid>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentUuid$ {
    /** @deprecated use `PaymentUuid$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Payroll: "payroll";
    }>;
    /** @deprecated use `PaymentUuid$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Payroll: "payroll";
    }>;
}
/** @internal */
export declare const WireInRequest$inboundSchema: z.ZodType<WireInRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireInRequest$Outbound = {
    uuid?: string | undefined;
    status?: string | undefined;
    origination_bank?: string | undefined;
    origination_bank_address?: string | undefined;
    recipient_name?: string | undefined;
    recipient_address?: string | undefined;
    recipient_account_number?: string | undefined;
    recipient_routing_number?: string | undefined;
    additional_notes?: string | undefined;
    bank_name?: string | undefined;
    date_sent?: string | undefined;
    unique_tracking_code?: string | undefined;
    payment_type?: string | undefined;
    payment_uuid?: string | undefined;
    amount_sent?: string | undefined;
    requested_amount?: string | undefined;
    wire_in_deadline?: string | undefined;
};
/** @internal */
export declare const WireInRequest$outboundSchema: z.ZodType<WireInRequest$Outbound, z.ZodTypeDef, WireInRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireInRequest$ {
    /** @deprecated use `WireInRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireInRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireInRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireInRequest$Outbound, z.ZodTypeDef, WireInRequest>;
    /** @deprecated use `WireInRequest$Outbound` instead. */
    type Outbound = WireInRequest$Outbound;
}
export declare function wireInRequestToJSON(wireInRequest: WireInRequest): string;
export declare function wireInRequestFromJSON(jsonString: string): SafeParseResult<WireInRequest, SDKValidationError>;
//# sourceMappingURL=wireinrequest.d.ts.map