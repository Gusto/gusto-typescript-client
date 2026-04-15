import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EntityErrorObject, EntityErrorObject$Outbound } from "./entityerrorobject.js";
/**
 * The status of the payroll processing request
 */
export declare const PayrollProcessingRequestStatus: {
    readonly Calculating: "calculating";
    readonly CalculateSuccess: "calculate_success";
    readonly Submitting: "submitting";
    readonly SubmitSuccess: "submit_success";
    readonly ProcessingFailed: "processing_failed";
};
/**
 * The status of the payroll processing request
 */
export type PayrollProcessingRequestStatus = ClosedEnum<typeof PayrollProcessingRequestStatus>;
export type PayrollProcessingRequest = {
    /**
     * The status of the payroll processing request
     */
    status?: PayrollProcessingRequestStatus | undefined;
    /**
     * Errors that occurred during async payroll processing
     */
    errors?: Array<EntityErrorObject> | undefined;
};
/** @internal */
export declare const PayrollProcessingRequestStatus$inboundSchema: z.ZodNativeEnum<typeof PayrollProcessingRequestStatus>;
/** @internal */
export declare const PayrollProcessingRequestStatus$outboundSchema: z.ZodNativeEnum<typeof PayrollProcessingRequestStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollProcessingRequestStatus$ {
    /** @deprecated use `PayrollProcessingRequestStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Calculating: "calculating";
        readonly CalculateSuccess: "calculate_success";
        readonly Submitting: "submitting";
        readonly SubmitSuccess: "submit_success";
        readonly ProcessingFailed: "processing_failed";
    }>;
    /** @deprecated use `PayrollProcessingRequestStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Calculating: "calculating";
        readonly CalculateSuccess: "calculate_success";
        readonly Submitting: "submitting";
        readonly SubmitSuccess: "submit_success";
        readonly ProcessingFailed: "processing_failed";
    }>;
}
/** @internal */
export declare const PayrollProcessingRequest$inboundSchema: z.ZodType<PayrollProcessingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollProcessingRequest$Outbound = {
    status?: string | undefined;
    errors?: Array<EntityErrorObject$Outbound> | undefined;
};
/** @internal */
export declare const PayrollProcessingRequest$outboundSchema: z.ZodType<PayrollProcessingRequest$Outbound, z.ZodTypeDef, PayrollProcessingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollProcessingRequest$ {
    /** @deprecated use `PayrollProcessingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollProcessingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollProcessingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollProcessingRequest$Outbound, z.ZodTypeDef, PayrollProcessingRequest>;
    /** @deprecated use `PayrollProcessingRequest$Outbound` instead. */
    type Outbound = PayrollProcessingRequest$Outbound;
}
export declare function payrollProcessingRequestToJSON(payrollProcessingRequest: PayrollProcessingRequest): string;
export declare function payrollProcessingRequestFromJSON(jsonString: string): SafeParseResult<PayrollProcessingRequest, SDKValidationError>;
//# sourceMappingURL=payrollprocessingrequest.d.ts.map