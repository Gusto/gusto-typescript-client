import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PayScheduleFrequency } from "./payschedulefrequency.js";
/**
 * The representation of a pay schedule.
 */
export type PayScheduleList = {
    /**
     * The unique identifier of the pay schedule in Gusto.
     */
    uuid: string;
    /**
     * The frequency that employees on this pay schedule are paid with Gusto.
     */
    frequency?: PayScheduleFrequency | undefined;
    /**
     * The first date that employees on this pay schedule are paid with Gusto.
     */
    anchorPayDate?: string | undefined;
    /**
     * The last date of the first pay period. This can be the same date as the anchor pay date.
     */
    anchorEndOfPayPeriod?: string | undefined;
    /**
     * An integer between 1 and 31 indicating the first day of the month that employees are paid. This field is only relevant for pay schedules with the “Twice per month” and “Monthly” frequencies. It will be null for pay schedules with other frequencies.
     */
    day1?: number | null | undefined;
    /**
     * An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the "Twice per month" frequency. For semi-monthly pay schedules, this field should be set to 31. For months shorter than 31 days, we will set the second pay date to the last day of the month. It will be null for pay schedules with other frequencies.
     */
    day2?: number | null | undefined;
    /**
     * This field will be hourly when the pay schedule is for hourly employees, salaried when the pay schedule is for salaried employees, the department name if pay schedule is by department, and null when the pay schedule is for all employees.
     */
    name?: string | null | undefined;
    /**
     * A custom name for a pay schedule, defaults to the pay frequency description.
     */
    customName?: string | undefined;
    /**
     * With Autopilot® enabled, payroll will run automatically one day before your payroll deadlines.
     */
    autoPilot?: boolean | undefined;
    /**
     * Whether this pay schedule is associated with any employees. A pay schedule is inactive when it's unassigned.
     */
    active?: boolean | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
};
/** @internal */
export declare const PayScheduleList$inboundSchema: z.ZodType<PayScheduleList, z.ZodTypeDef, unknown>;
export declare function payScheduleListFromJSON(jsonString: string): SafeParseResult<PayScheduleList, SDKValidationError>;
//# sourceMappingURL=payschedulelist.d.ts.map