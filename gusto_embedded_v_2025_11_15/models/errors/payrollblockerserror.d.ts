import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Metadata = {
    /**
     * A categorization of the payroll blocker, e.g. "geocode_error"
     */
    key?: string | undefined;
};
export type Errors = {
    /**
     * The string "base"
     */
    errorKey?: string | undefined;
    /**
     * The string "payroll_blocker"
     */
    category?: string | undefined;
    /**
     * Human readable description of the payroll blocker
     */
    message?: string | undefined;
    metadata?: Metadata | undefined;
};
/**
 * Payroll Blockers Error
 *
 * @remarks
 *
 * For detailed information, see the [Payroll Blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers)
 */
export type PayrollBlockersErrorData = {
    errors?: Array<Errors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};
/**
 * Payroll Blockers Error
 *
 * @remarks
 *
 * For detailed information, see the [Payroll Blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers)
 */
export declare class PayrollBlockersError extends Error {
    errors?: Array<Errors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /** The original data that was passed to this error instance. */
    data$: PayrollBlockersErrorData;
    constructor(err: PayrollBlockersErrorData);
}
/** @internal */
export declare const Metadata$inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown>;
/** @internal */
export type Metadata$Outbound = {
    key?: string | undefined;
};
/** @internal */
export declare const Metadata$outboundSchema: z.ZodType<Metadata$Outbound, z.ZodTypeDef, Metadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Metadata$ {
    /** @deprecated use `Metadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `Metadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Metadata$Outbound, z.ZodTypeDef, Metadata>;
    /** @deprecated use `Metadata$Outbound` instead. */
    type Outbound = Metadata$Outbound;
}
export declare function metadataToJSON(metadata: Metadata): string;
export declare function metadataFromJSON(jsonString: string): SafeParseResult<Metadata, SDKValidationError>;
/** @internal */
export declare const Errors$inboundSchema: z.ZodType<Errors, z.ZodTypeDef, unknown>;
/** @internal */
export type Errors$Outbound = {
    error_key?: string | undefined;
    category?: string | undefined;
    message?: string | undefined;
    metadata?: Metadata$Outbound | undefined;
};
/** @internal */
export declare const Errors$outboundSchema: z.ZodType<Errors$Outbound, z.ZodTypeDef, Errors>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Errors$ {
    /** @deprecated use `Errors$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Errors, z.ZodTypeDef, unknown>;
    /** @deprecated use `Errors$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Errors$Outbound, z.ZodTypeDef, Errors>;
    /** @deprecated use `Errors$Outbound` instead. */
    type Outbound = Errors$Outbound;
}
export declare function errorsToJSON(errors: Errors): string;
export declare function errorsFromJSON(jsonString: string): SafeParseResult<Errors, SDKValidationError>;
/** @internal */
export declare const PayrollBlockersError$inboundSchema: z.ZodType<PayrollBlockersError, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollBlockersError$Outbound = {
    errors?: Array<Errors$Outbound> | undefined;
    RawResponse?: never | undefined;
};
/** @internal */
export declare const PayrollBlockersError$outboundSchema: z.ZodType<PayrollBlockersError$Outbound, z.ZodTypeDef, PayrollBlockersError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollBlockersError$ {
    /** @deprecated use `PayrollBlockersError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollBlockersError, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollBlockersError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollBlockersError$Outbound, z.ZodTypeDef, PayrollBlockersError>;
    /** @deprecated use `PayrollBlockersError$Outbound` instead. */
    type Outbound = PayrollBlockersError$Outbound;
}
//# sourceMappingURL=payrollblockerserror.d.ts.map