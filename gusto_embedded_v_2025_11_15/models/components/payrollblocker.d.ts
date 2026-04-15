import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type PayrollBlocker = {
    /**
     * The unique identifier of the reason
     */
    key?: string | undefined;
    /**
     * User-friendly message describing the payroll blocker.
     */
    message?: string | undefined;
};
/** @internal */
export declare const PayrollBlocker$inboundSchema: z.ZodType<PayrollBlocker, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollBlocker$Outbound = {
    key?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const PayrollBlocker$outboundSchema: z.ZodType<PayrollBlocker$Outbound, z.ZodTypeDef, PayrollBlocker>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollBlocker$ {
    /** @deprecated use `PayrollBlocker$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollBlocker, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollBlocker$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollBlocker$Outbound, z.ZodTypeDef, PayrollBlocker>;
    /** @deprecated use `PayrollBlocker$Outbound` instead. */
    type Outbound = PayrollBlocker$Outbound;
}
export declare function payrollBlockerToJSON(payrollBlocker: PayrollBlocker): string;
export declare function payrollBlockerFromJSON(jsonString: string): SafeParseResult<PayrollBlocker, SDKValidationError>;
//# sourceMappingURL=payrollblocker.d.ts.map