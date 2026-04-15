import * as z from "zod/v3";
import { RFCDate } from "../../types/rfcdate.js";
import { PayScheduleFrequencyCreateUpdate } from "./payschedulefrequencycreateupdate.js";
/**
 * Request body for creating a pay schedule. Required when a company has no pay schedules (onboarding) or when adding an additional schedule. Be sure to [check state laws](https://www.dol.gov/agencies/whd/state/payday) to know what schedule is right for your customers.
 *
 * @remarks
 *
 * - **anchor_pay_date**: The first date that employees on this pay schedule will be paid (first company payday).
 * - **anchor_end_of_pay_period**: The last date of the first pay period; can be the same as anchor_pay_date.
 */
export type PayScheduleCreateRequest = {
    /**
     * Pay frequency when creating or updating a schedule. Only weekly, bi-weekly, twice per month, and monthly are supported via the API.
     *
     * @remarks
     *
     * - `Every week`: Weekly pay.
     * - `Every other week`: Biweekly pay.
     * - `Twice per month`: Two pay dates per month; require day_1 and day_2 (use 31 for last day of month).
     * - `Monthly`: One pay date per month; require day_1 (1-31).
     */
    frequency: PayScheduleFrequencyCreateUpdate;
    /**
     * ISO 8601 date (YYYY-MM-DD). Required for anchor and period dates in create, update, and preview requests.
     */
    anchorPayDate: RFCDate;
    /**
     * ISO 8601 date (YYYY-MM-DD). Required for anchor and period dates in create, update, and preview requests.
     */
    anchorEndOfPayPeriod: RFCDate;
    /**
     * First pay day of the month (1-31).
     *
     * @remarks
     * - **Twice per month, Monthly:** required.
     * - **Every week, Every other week:** omit or null.
     */
    day1?: number | null | undefined;
    /**
     * Second pay day of the month (1-31); only for **Twice per month**.
     *
     * @remarks
     * - Use 31 for last day of month (shorter months use the actual last day).
     * - **Other frequencies:** omit or null.
     */
    day2?: number | null | undefined;
    /**
     * Optional display name for the pay schedule.
     *
     * @remarks
     *
     * When null or omitted, the system generates a description from the pay frequency and pay days (e.g. "every 1st and 15th of the month" for twice-monthly, "every 11th of the month" for monthly, "every Friday" for weekly). The response returns this generated value in `custom_name` when no custom name was set. When provided, the value you set is stored and returned.
     */
    customName?: string | null | undefined;
};
/** @internal */
export type PayScheduleCreateRequest$Outbound = {
    frequency: string;
    anchor_pay_date: string;
    anchor_end_of_pay_period: string;
    day_1?: number | null | undefined;
    day_2?: number | null | undefined;
    custom_name?: string | null | undefined;
};
/** @internal */
export declare const PayScheduleCreateRequest$outboundSchema: z.ZodType<PayScheduleCreateRequest$Outbound, z.ZodTypeDef, PayScheduleCreateRequest>;
export declare function payScheduleCreateRequestToJSON(payScheduleCreateRequest: PayScheduleCreateRequest): string;
//# sourceMappingURL=payschedulecreaterequest.d.ts.map