import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of an unprocessed termination pay period.
 */
export type UnprocessedTerminationPayPeriod = {
    /**
     * The start date of the pay period.
     */
    startDate?: string | undefined;
    /**
     * The end date of the pay period.
     */
    endDate?: string | undefined;
    /**
     * The check date of the pay period.
     */
    checkDate?: string | undefined;
    /**
     * The debit date of the pay period.
     */
    debitDate?: string | undefined;
    /**
     * The full name of the employee.
     */
    employeeName?: string | undefined;
    /**
     * A unique identifier of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * A unique identifier of the pay schedule to which the pay period belongs.
     */
    payScheduleUuid?: string | undefined;
};
/** @internal */
export declare const UnprocessedTerminationPayPeriod$inboundSchema: z.ZodType<UnprocessedTerminationPayPeriod, z.ZodTypeDef, unknown>;
/** @internal */
export type UnprocessedTerminationPayPeriod$Outbound = {
    start_date?: string | undefined;
    end_date?: string | undefined;
    check_date?: string | undefined;
    debit_date?: string | undefined;
    employee_name?: string | undefined;
    employee_uuid?: string | undefined;
    pay_schedule_uuid?: string | undefined;
};
/** @internal */
export declare const UnprocessedTerminationPayPeriod$outboundSchema: z.ZodType<UnprocessedTerminationPayPeriod$Outbound, z.ZodTypeDef, UnprocessedTerminationPayPeriod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnprocessedTerminationPayPeriod$ {
    /** @deprecated use `UnprocessedTerminationPayPeriod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnprocessedTerminationPayPeriod, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnprocessedTerminationPayPeriod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnprocessedTerminationPayPeriod$Outbound, z.ZodTypeDef, UnprocessedTerminationPayPeriod>;
    /** @deprecated use `UnprocessedTerminationPayPeriod$Outbound` instead. */
    type Outbound = UnprocessedTerminationPayPeriod$Outbound;
}
export declare function unprocessedTerminationPayPeriodToJSON(unprocessedTerminationPayPeriod: UnprocessedTerminationPayPeriod): string;
export declare function unprocessedTerminationPayPeriodFromJSON(jsonString: string): SafeParseResult<UnprocessedTerminationPayPeriod, SDKValidationError>;
//# sourceMappingURL=unprocessedterminationpayperiod.d.ts.map