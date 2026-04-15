import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type PayrollReversal = {
    /**
     * The UUID for the payroll run being reversed.
     */
    reversedPayrollUuid?: string | undefined;
    /**
     * The UUID of the payroll where the reversal was applied.
     */
    reversalPayrollUuid?: string | undefined;
    /**
     * A reason provided by the admin who created the reversal.
     */
    reason?: string | undefined;
    /**
     * Timestamp of when the reversal was approved.
     */
    approvedAt?: string | null | undefined;
    /**
     * Category chosen by the admin who requested the reversal.
     */
    category?: string | undefined;
    /**
     * Array of affected employee UUIDs.
     */
    reversedEmployeeUuids?: Array<string> | undefined;
};
/** @internal */
export declare const PayrollReversal$inboundSchema: z.ZodType<PayrollReversal, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollReversal$Outbound = {
    reversed_payroll_uuid?: string | undefined;
    reversal_payroll_uuid?: string | undefined;
    reason?: string | undefined;
    approved_at?: string | null | undefined;
    category?: string | undefined;
    reversed_employee_uuids?: Array<string> | undefined;
};
/** @internal */
export declare const PayrollReversal$outboundSchema: z.ZodType<PayrollReversal$Outbound, z.ZodTypeDef, PayrollReversal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollReversal$ {
    /** @deprecated use `PayrollReversal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollReversal, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollReversal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollReversal$Outbound, z.ZodTypeDef, PayrollReversal>;
    /** @deprecated use `PayrollReversal$Outbound` instead. */
    type Outbound = PayrollReversal$Outbound;
}
export declare function payrollReversalToJSON(payrollReversal: PayrollReversal): string;
export declare function payrollReversalFromJSON(jsonString: string): SafeParseResult<PayrollReversal, SDKValidationError>;
//# sourceMappingURL=payrollreversal.d.ts.map