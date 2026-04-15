import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Only applicable when a payroll is moved to four day processing instead of fast ach.
 */
export type PayrollPaymentSpeedChangedType = {
    /**
     * Original check date when fast ach applies.
     */
    originalCheckDate?: string | undefined;
    /**
     * Current check date.
     */
    currentCheckDate?: string | undefined;
    /**
     * Original debit date when fast ach applies.
     */
    originalDebitDate?: string | undefined;
    /**
     * Current debit date.
     */
    currentDebitDate?: string | undefined;
    /**
     * The reason why the payroll is moved to four day.
     */
    reason?: string | undefined;
};
/** @internal */
export declare const PayrollPaymentSpeedChangedType$inboundSchema: z.ZodType<PayrollPaymentSpeedChangedType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollPaymentSpeedChangedType$Outbound = {
    original_check_date?: string | undefined;
    current_check_date?: string | undefined;
    original_debit_date?: string | undefined;
    current_debit_date?: string | undefined;
    reason?: string | undefined;
};
/** @internal */
export declare const PayrollPaymentSpeedChangedType$outboundSchema: z.ZodType<PayrollPaymentSpeedChangedType$Outbound, z.ZodTypeDef, PayrollPaymentSpeedChangedType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollPaymentSpeedChangedType$ {
    /** @deprecated use `PayrollPaymentSpeedChangedType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollPaymentSpeedChangedType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollPaymentSpeedChangedType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollPaymentSpeedChangedType$Outbound, z.ZodTypeDef, PayrollPaymentSpeedChangedType>;
    /** @deprecated use `PayrollPaymentSpeedChangedType$Outbound` instead. */
    type Outbound = PayrollPaymentSpeedChangedType$Outbound;
}
export declare function payrollPaymentSpeedChangedTypeToJSON(payrollPaymentSpeedChangedType: PayrollPaymentSpeedChangedType): string;
export declare function payrollPaymentSpeedChangedTypeFromJSON(jsonString: string): SafeParseResult<PayrollPaymentSpeedChangedType, SDKValidationError>;
//# sourceMappingURL=payrollpaymentspeedchangedtype.d.ts.map