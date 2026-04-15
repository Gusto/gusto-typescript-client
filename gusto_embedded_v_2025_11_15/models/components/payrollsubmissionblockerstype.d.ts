import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Additional data associated with the unblock option.
 */
export type PayrollSubmissionBlockersTypeMetadata = {};
export type UnblockOptions = {
    /**
     * The type of unblock option for the submission blocker.
     */
    unblockType?: string | undefined;
    /**
     * The payment check date associated with the unblock option.
     */
    checkDate?: string | undefined;
    /**
     * Additional data associated with the unblock option.
     */
    metadata?: PayrollSubmissionBlockersTypeMetadata | undefined;
};
/**
 * The status of the submission blocker.
 */
export declare const PayrollSubmissionBlockersTypeStatus: {
    readonly Unresolved: "unresolved";
    readonly Resolved: "resolved";
};
/**
 * The status of the submission blocker.
 */
export type PayrollSubmissionBlockersTypeStatus = ClosedEnum<typeof PayrollSubmissionBlockersTypeStatus>;
export type PayrollSubmissionBlockersType = {
    /**
     * The type of blocker that's blocking the payment submission.
     */
    blockerType?: string | undefined;
    /**
     * The name of the submission blocker.
     */
    blockerName?: string | undefined;
    /**
     * The available options to unblock a submission blocker.
     */
    unblockOptions?: Array<UnblockOptions> | undefined;
    /**
     * The unblock option that's been selected to resolve the submission blocker.
     */
    selectedOption?: string | null | undefined;
    /**
     * The status of the submission blocker.
     */
    status?: PayrollSubmissionBlockersTypeStatus | undefined;
};
/** @internal */
export declare const PayrollSubmissionBlockersTypeMetadata$inboundSchema: z.ZodType<PayrollSubmissionBlockersTypeMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollSubmissionBlockersTypeMetadata$Outbound = {};
/** @internal */
export declare const PayrollSubmissionBlockersTypeMetadata$outboundSchema: z.ZodType<PayrollSubmissionBlockersTypeMetadata$Outbound, z.ZodTypeDef, PayrollSubmissionBlockersTypeMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollSubmissionBlockersTypeMetadata$ {
    /** @deprecated use `PayrollSubmissionBlockersTypeMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollSubmissionBlockersTypeMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollSubmissionBlockersTypeMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollSubmissionBlockersTypeMetadata$Outbound, z.ZodTypeDef, PayrollSubmissionBlockersTypeMetadata>;
    /** @deprecated use `PayrollSubmissionBlockersTypeMetadata$Outbound` instead. */
    type Outbound = PayrollSubmissionBlockersTypeMetadata$Outbound;
}
export declare function payrollSubmissionBlockersTypeMetadataToJSON(payrollSubmissionBlockersTypeMetadata: PayrollSubmissionBlockersTypeMetadata): string;
export declare function payrollSubmissionBlockersTypeMetadataFromJSON(jsonString: string): SafeParseResult<PayrollSubmissionBlockersTypeMetadata, SDKValidationError>;
/** @internal */
export declare const UnblockOptions$inboundSchema: z.ZodType<UnblockOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type UnblockOptions$Outbound = {
    unblock_type?: string | undefined;
    check_date?: string | undefined;
    metadata?: PayrollSubmissionBlockersTypeMetadata$Outbound | undefined;
};
/** @internal */
export declare const UnblockOptions$outboundSchema: z.ZodType<UnblockOptions$Outbound, z.ZodTypeDef, UnblockOptions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnblockOptions$ {
    /** @deprecated use `UnblockOptions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnblockOptions, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnblockOptions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnblockOptions$Outbound, z.ZodTypeDef, UnblockOptions>;
    /** @deprecated use `UnblockOptions$Outbound` instead. */
    type Outbound = UnblockOptions$Outbound;
}
export declare function unblockOptionsToJSON(unblockOptions: UnblockOptions): string;
export declare function unblockOptionsFromJSON(jsonString: string): SafeParseResult<UnblockOptions, SDKValidationError>;
/** @internal */
export declare const PayrollSubmissionBlockersTypeStatus$inboundSchema: z.ZodNativeEnum<typeof PayrollSubmissionBlockersTypeStatus>;
/** @internal */
export declare const PayrollSubmissionBlockersTypeStatus$outboundSchema: z.ZodNativeEnum<typeof PayrollSubmissionBlockersTypeStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollSubmissionBlockersTypeStatus$ {
    /** @deprecated use `PayrollSubmissionBlockersTypeStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unresolved: "unresolved";
        readonly Resolved: "resolved";
    }>;
    /** @deprecated use `PayrollSubmissionBlockersTypeStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unresolved: "unresolved";
        readonly Resolved: "resolved";
    }>;
}
/** @internal */
export declare const PayrollSubmissionBlockersType$inboundSchema: z.ZodType<PayrollSubmissionBlockersType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollSubmissionBlockersType$Outbound = {
    blocker_type?: string | undefined;
    blocker_name?: string | undefined;
    unblock_options?: Array<UnblockOptions$Outbound> | undefined;
    selected_option?: string | null | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const PayrollSubmissionBlockersType$outboundSchema: z.ZodType<PayrollSubmissionBlockersType$Outbound, z.ZodTypeDef, PayrollSubmissionBlockersType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollSubmissionBlockersType$ {
    /** @deprecated use `PayrollSubmissionBlockersType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollSubmissionBlockersType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollSubmissionBlockersType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollSubmissionBlockersType$Outbound, z.ZodTypeDef, PayrollSubmissionBlockersType>;
    /** @deprecated use `PayrollSubmissionBlockersType$Outbound` instead. */
    type Outbound = PayrollSubmissionBlockersType$Outbound;
}
export declare function payrollSubmissionBlockersTypeToJSON(payrollSubmissionBlockersType: PayrollSubmissionBlockersType): string;
export declare function payrollSubmissionBlockersTypeFromJSON(jsonString: string): SafeParseResult<PayrollSubmissionBlockersType, SDKValidationError>;
//# sourceMappingURL=payrollsubmissionblockerstype.d.ts.map