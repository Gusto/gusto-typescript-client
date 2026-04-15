import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PayrollPayPeriodType = {
    /**
     * The start date, inclusive, of the pay period.
     */
    startDate?: string | undefined;
    /**
     * The start date, inclusive, of the pay period.
     */
    endDate?: string | undefined;
    /**
     * The UUID of the pay schedule for the payroll.
     */
    payScheduleUuid?: string | null | undefined;
};
/** @internal */
export declare const PayrollPayPeriodType$inboundSchema: z.ZodType<PayrollPayPeriodType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollPayPeriodType$Outbound = {
    start_date?: string | undefined;
    end_date?: string | undefined;
    pay_schedule_uuid?: string | null | undefined;
};
/** @internal */
export declare const PayrollPayPeriodType$outboundSchema: z.ZodType<PayrollPayPeriodType$Outbound, z.ZodTypeDef, PayrollPayPeriodType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollPayPeriodType$ {
    /** @deprecated use `PayrollPayPeriodType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollPayPeriodType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollPayPeriodType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollPayPeriodType$Outbound, z.ZodTypeDef, PayrollPayPeriodType>;
    /** @deprecated use `PayrollPayPeriodType$Outbound` instead. */
    type Outbound = PayrollPayPeriodType$Outbound;
}
export declare function payrollPayPeriodTypeToJSON(payrollPayPeriodType: PayrollPayPeriodType): string;
export declare function payrollPayPeriodTypeFromJSON(jsonString: string): SafeParseResult<PayrollPayPeriodType, SDKValidationError>;
//# sourceMappingURL=payrollpayperiodtype.d.ts.map