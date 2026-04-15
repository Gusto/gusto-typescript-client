import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FlsaStatusType } from "./flsastatustype.js";
/**
 * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
 */
export declare const PaymentUnit: {
    readonly Hour: "Hour";
    readonly Week: "Week";
    readonly Month: "Month";
    readonly Year: "Year";
    readonly Paycheck: "Paycheck";
};
/**
 * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
 */
export type PaymentUnit = ClosedEnum<typeof PaymentUnit>;
export type MinimumWages = {
    /**
     * The UUID of the minimum wage.
     */
    uuid?: string | undefined;
    /**
     * The wage amount.
     */
    wage?: string | undefined;
    /**
     * The effective date of the minimum wage.
     */
    effectiveDate?: string | undefined;
};
/**
 * The representation of compensation in Gusto.
 */
export type Compensation = {
    /**
     * The UUID of the compensation in Gusto.
     */
    uuid: string;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The UUID of the job to which the compensation belongs.
     */
    jobUuid?: string | undefined;
    /**
     * The UUID of the employee to which the compensation belongs.
     */
    employeeUuid?: string | undefined;
    /**
     * The dollar amount paid per payment unit.
     */
    rate?: string | undefined;
    /**
     * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
     */
    paymentUnit?: PaymentUnit | undefined;
    /**
     * The FLSA status for this compensation. Salaried ('Exempt') employees are paid a fixed salary every pay period. Salaried with overtime ('Salaried Nonexempt') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly ('Nonexempt') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees ('Commission Only Exempt') earn wages based only on commission. Commissioned with overtime ('Commission Only Nonexempt') earn wages based on commission, and receive overtime pay when applicable. Owners ('Owner') are employees that own at least twenty percent of the company.
     */
    flsaStatus?: FlsaStatusType | undefined;
    /**
     * The effective date for this compensation. For the first compensation, this defaults to the job's hire date.
     */
    effectiveDate?: string | undefined;
    /**
     * Indicates if the compensation could be adjusted to minimum wage during payroll calculation.
     */
    adjustForMinimumWage?: boolean | undefined;
    /**
     * The minimum wages associated with the compensation.
     */
    minimumWages?: Array<MinimumWages> | undefined;
};
/** @internal */
export declare const PaymentUnit$inboundSchema: z.ZodNativeEnum<typeof PaymentUnit>;
/** @internal */
export declare const PaymentUnit$outboundSchema: z.ZodNativeEnum<typeof PaymentUnit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentUnit$ {
    /** @deprecated use `PaymentUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Hour: "Hour";
        readonly Week: "Week";
        readonly Month: "Month";
        readonly Year: "Year";
        readonly Paycheck: "Paycheck";
    }>;
    /** @deprecated use `PaymentUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Hour: "Hour";
        readonly Week: "Week";
        readonly Month: "Month";
        readonly Year: "Year";
        readonly Paycheck: "Paycheck";
    }>;
}
/** @internal */
export declare const MinimumWages$inboundSchema: z.ZodType<MinimumWages, z.ZodTypeDef, unknown>;
/** @internal */
export type MinimumWages$Outbound = {
    uuid?: string | undefined;
    wage?: string | undefined;
    effective_date?: string | undefined;
};
/** @internal */
export declare const MinimumWages$outboundSchema: z.ZodType<MinimumWages$Outbound, z.ZodTypeDef, MinimumWages>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MinimumWages$ {
    /** @deprecated use `MinimumWages$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MinimumWages, z.ZodTypeDef, unknown>;
    /** @deprecated use `MinimumWages$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MinimumWages$Outbound, z.ZodTypeDef, MinimumWages>;
    /** @deprecated use `MinimumWages$Outbound` instead. */
    type Outbound = MinimumWages$Outbound;
}
export declare function minimumWagesToJSON(minimumWages: MinimumWages): string;
export declare function minimumWagesFromJSON(jsonString: string): SafeParseResult<MinimumWages, SDKValidationError>;
/** @internal */
export declare const Compensation$inboundSchema: z.ZodType<Compensation, z.ZodTypeDef, unknown>;
/** @internal */
export type Compensation$Outbound = {
    uuid: string;
    version?: string | undefined;
    job_uuid?: string | undefined;
    employee_uuid?: string | undefined;
    rate?: string | undefined;
    payment_unit?: string | undefined;
    flsa_status?: string | undefined;
    effective_date?: string | undefined;
    adjust_for_minimum_wage?: boolean | undefined;
    minimum_wages?: Array<MinimumWages$Outbound> | undefined;
};
/** @internal */
export declare const Compensation$outboundSchema: z.ZodType<Compensation$Outbound, z.ZodTypeDef, Compensation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Compensation$ {
    /** @deprecated use `Compensation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Compensation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Compensation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Compensation$Outbound, z.ZodTypeDef, Compensation>;
    /** @deprecated use `Compensation$Outbound` instead. */
    type Outbound = Compensation$Outbound;
}
export declare function compensationToJSON(compensation: Compensation): string;
export declare function compensationFromJSON(jsonString: string): SafeParseResult<Compensation, SDKValidationError>;
//# sourceMappingURL=compensation.d.ts.map