import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Additional data associated with the unblock option.
 */
export type PayrollCreditBlockersTypeMetadata = {};
export type PayrollCreditBlockersTypeUnblockOptions = {
    /**
     * The type of unblock option for the credit blocker.
     */
    unblockType?: string | undefined;
    /**
     * The payment check date associated with the unblock option.
     */
    checkDate?: string | undefined;
    /**
     * Additional data associated with the unblock option.
     */
    metadata?: PayrollCreditBlockersTypeMetadata | undefined;
};
/**
 * The status of the credit blocker
 */
export declare const PayrollCreditBlockersTypeStatus: {
    readonly Unresolved: "unresolved";
    readonly PendingReview: "pending_review";
    readonly Resolved: "resolved";
    readonly Failed: "failed";
};
/**
 * The status of the credit blocker
 */
export type PayrollCreditBlockersTypeStatus = ClosedEnum<typeof PayrollCreditBlockersTypeStatus>;
export type PayrollCreditBlockersType = {
    /**
     * The type of blocker that's blocking the payment from being credited.
     */
    blockerType?: string | undefined;
    /**
     * The name of the credit blocker.
     */
    blockerName?: string | undefined;
    /**
     * The available options to unblock a credit blocker.
     */
    unblockOptions?: Array<PayrollCreditBlockersTypeUnblockOptions> | undefined;
    /**
     * The unblock option that's been selected to resolve the credit blocker.
     */
    selectedOption?: string | null | undefined;
    /**
     * The status of the credit blocker
     */
    status?: PayrollCreditBlockersTypeStatus | undefined;
};
/** @internal */
export declare const PayrollCreditBlockersTypeMetadata$inboundSchema: z.ZodType<PayrollCreditBlockersTypeMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollCreditBlockersTypeMetadata$Outbound = {};
/** @internal */
export declare const PayrollCreditBlockersTypeMetadata$outboundSchema: z.ZodType<PayrollCreditBlockersTypeMetadata$Outbound, z.ZodTypeDef, PayrollCreditBlockersTypeMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollCreditBlockersTypeMetadata$ {
    /** @deprecated use `PayrollCreditBlockersTypeMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollCreditBlockersTypeMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollCreditBlockersTypeMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollCreditBlockersTypeMetadata$Outbound, z.ZodTypeDef, PayrollCreditBlockersTypeMetadata>;
    /** @deprecated use `PayrollCreditBlockersTypeMetadata$Outbound` instead. */
    type Outbound = PayrollCreditBlockersTypeMetadata$Outbound;
}
export declare function payrollCreditBlockersTypeMetadataToJSON(payrollCreditBlockersTypeMetadata: PayrollCreditBlockersTypeMetadata): string;
export declare function payrollCreditBlockersTypeMetadataFromJSON(jsonString: string): SafeParseResult<PayrollCreditBlockersTypeMetadata, SDKValidationError>;
/** @internal */
export declare const PayrollCreditBlockersTypeUnblockOptions$inboundSchema: z.ZodType<PayrollCreditBlockersTypeUnblockOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollCreditBlockersTypeUnblockOptions$Outbound = {
    unblock_type?: string | undefined;
    check_date?: string | undefined;
    metadata?: PayrollCreditBlockersTypeMetadata$Outbound | undefined;
};
/** @internal */
export declare const PayrollCreditBlockersTypeUnblockOptions$outboundSchema: z.ZodType<PayrollCreditBlockersTypeUnblockOptions$Outbound, z.ZodTypeDef, PayrollCreditBlockersTypeUnblockOptions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollCreditBlockersTypeUnblockOptions$ {
    /** @deprecated use `PayrollCreditBlockersTypeUnblockOptions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollCreditBlockersTypeUnblockOptions, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollCreditBlockersTypeUnblockOptions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollCreditBlockersTypeUnblockOptions$Outbound, z.ZodTypeDef, PayrollCreditBlockersTypeUnblockOptions>;
    /** @deprecated use `PayrollCreditBlockersTypeUnblockOptions$Outbound` instead. */
    type Outbound = PayrollCreditBlockersTypeUnblockOptions$Outbound;
}
export declare function payrollCreditBlockersTypeUnblockOptionsToJSON(payrollCreditBlockersTypeUnblockOptions: PayrollCreditBlockersTypeUnblockOptions): string;
export declare function payrollCreditBlockersTypeUnblockOptionsFromJSON(jsonString: string): SafeParseResult<PayrollCreditBlockersTypeUnblockOptions, SDKValidationError>;
/** @internal */
export declare const PayrollCreditBlockersTypeStatus$inboundSchema: z.ZodNativeEnum<typeof PayrollCreditBlockersTypeStatus>;
/** @internal */
export declare const PayrollCreditBlockersTypeStatus$outboundSchema: z.ZodNativeEnum<typeof PayrollCreditBlockersTypeStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollCreditBlockersTypeStatus$ {
    /** @deprecated use `PayrollCreditBlockersTypeStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unresolved: "unresolved";
        readonly PendingReview: "pending_review";
        readonly Resolved: "resolved";
        readonly Failed: "failed";
    }>;
    /** @deprecated use `PayrollCreditBlockersTypeStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unresolved: "unresolved";
        readonly PendingReview: "pending_review";
        readonly Resolved: "resolved";
        readonly Failed: "failed";
    }>;
}
/** @internal */
export declare const PayrollCreditBlockersType$inboundSchema: z.ZodType<PayrollCreditBlockersType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollCreditBlockersType$Outbound = {
    blocker_type?: string | undefined;
    blocker_name?: string | undefined;
    unblock_options?: Array<PayrollCreditBlockersTypeUnblockOptions$Outbound> | undefined;
    selected_option?: string | null | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const PayrollCreditBlockersType$outboundSchema: z.ZodType<PayrollCreditBlockersType$Outbound, z.ZodTypeDef, PayrollCreditBlockersType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollCreditBlockersType$ {
    /** @deprecated use `PayrollCreditBlockersType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollCreditBlockersType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollCreditBlockersType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollCreditBlockersType$Outbound, z.ZodTypeDef, PayrollCreditBlockersType>;
    /** @deprecated use `PayrollCreditBlockersType$Outbound` instead. */
    type Outbound = PayrollCreditBlockersType$Outbound;
}
export declare function payrollCreditBlockersTypeToJSON(payrollCreditBlockersType: PayrollCreditBlockersType): string;
export declare function payrollCreditBlockersTypeFromJSON(jsonString: string): SafeParseResult<PayrollCreditBlockersType, SDKValidationError>;
//# sourceMappingURL=payrollcreditblockerstype.d.ts.map