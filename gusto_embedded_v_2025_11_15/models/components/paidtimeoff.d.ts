import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The name of the paid time off type.
 */
export declare const Name: {
    readonly VacationHours: "Vacation Hours";
    readonly SickHours: "Sick Hours";
    readonly HolidayHours: "Holiday Hours";
};
/**
 * The name of the paid time off type.
 */
export type Name = ClosedEnum<typeof Name>;
/**
 * The representation of paid time off in Gusto.
 */
export type PaidTimeOff = {
    /**
     * The name of the paid time off type.
     */
    name?: Name | undefined;
    /**
     * The name of the time off policy.
     */
    policyName?: string | undefined;
    /**
     * The UUID of the time off policy.
     */
    policyUuid?: string | undefined;
    /**
     * The unit the PTO type is accrued in.
     */
    accrualUnit?: string | undefined;
    /**
     * The number of accrual units accrued per accrual period.
     */
    accrualRate?: string | undefined;
    /**
     * The accrual method of the time off policy
     */
    accrualMethod?: string | undefined;
    /**
     * The frequency at which the PTO type is accrued.
     */
    accrualPeriod?: string | undefined;
    /**
     * The number of accrual units accrued.
     */
    accrualBalance?: string | undefined;
    /**
     * The maximum number of accrual units allowed. A null value signifies no maximum.
     */
    maximumAccrualBalance?: string | null | undefined;
    /**
     * Whether the accrual balance is paid to the employee upon termination.
     */
    paidAtTermination?: boolean | undefined;
};
/** @internal */
export declare const Name$inboundSchema: z.ZodNativeEnum<typeof Name>;
/** @internal */
export declare const Name$outboundSchema: z.ZodNativeEnum<typeof Name>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Name$ {
    /** @deprecated use `Name$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly VacationHours: "Vacation Hours";
        readonly SickHours: "Sick Hours";
        readonly HolidayHours: "Holiday Hours";
    }>;
    /** @deprecated use `Name$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly VacationHours: "Vacation Hours";
        readonly SickHours: "Sick Hours";
        readonly HolidayHours: "Holiday Hours";
    }>;
}
/** @internal */
export declare const PaidTimeOff$inboundSchema: z.ZodType<PaidTimeOff, z.ZodTypeDef, unknown>;
/** @internal */
export type PaidTimeOff$Outbound = {
    name?: string | undefined;
    policy_name?: string | undefined;
    policy_uuid?: string | undefined;
    accrual_unit?: string | undefined;
    accrual_rate?: string | undefined;
    accrual_method?: string | undefined;
    accrual_period?: string | undefined;
    accrual_balance?: string | undefined;
    maximum_accrual_balance?: string | null | undefined;
    paid_at_termination?: boolean | undefined;
};
/** @internal */
export declare const PaidTimeOff$outboundSchema: z.ZodType<PaidTimeOff$Outbound, z.ZodTypeDef, PaidTimeOff>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaidTimeOff$ {
    /** @deprecated use `PaidTimeOff$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaidTimeOff, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaidTimeOff$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaidTimeOff$Outbound, z.ZodTypeDef, PaidTimeOff>;
    /** @deprecated use `PaidTimeOff$Outbound` instead. */
    type Outbound = PaidTimeOff$Outbound;
}
export declare function paidTimeOffToJSON(paidTimeOff: PaidTimeOff): string;
export declare function paidTimeOffFromJSON(jsonString: string): SafeParseResult<PaidTimeOff, SDKValidationError>;
//# sourceMappingURL=paidtimeoff.d.ts.map