import * as z from "zod/v3";
import { RFCDate } from "../../types/rfcdate.js";
import { PayScheduleFrequencyCreateUpdate } from "./payschedulefrequencycreateupdate.js";
/**
 * Request body for updating a pay schedule. Sent in the pay_schedule_update root key. Version is required for optimistic concurrency. Pay schedules may be automatically adjusted if an onboarded company misses their first pay date; see [Create a pay schedule](https://docs.gusto.com/embedded-payroll/docs/create-a-pay-schedule).
 */
export type PayScheduleUpdateRequest = {
    /**
     * Current version of the pay schedule from the GET response; required for optimistic concurrency. Mismatch returns 409 Conflict.
     */
    version: string;
    /**
     * When true, Autopayroll is enabled and payroll runs automatically one day before payroll deadlines. When false, payroll does not run automatically and must be run manually.
     *
     * @remarks
     * For API versions before 2025-11-15 the request field is auto_pilot.
     */
    autoPayroll?: boolean | undefined;
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
    frequency?: PayScheduleFrequencyCreateUpdate | undefined;
    /**
     * ISO 8601 date (YYYY-MM-DD). Required for anchor and period dates in create, update, and preview requests.
     */
    anchorPayDate?: RFCDate | undefined;
    /**
     * ISO 8601 date (YYYY-MM-DD). Required for anchor and period dates in create, update, and preview requests.
     */
    anchorEndOfPayPeriod?: RFCDate | undefined;
    /**
     * First pay day of the month (1–31). Required for Twice per month and Monthly; null for Every week and Every other week.
     *
     * @remarks
     */
    day1?: number | null | undefined;
    /**
     * Second pay day of the month (1–31); only for Twice per month. Use 31 for last day of month. Null for other frequencies.
     *
     * @remarks
     */
    day2?: number | null | undefined;
    /**
     * Custom name for the pay schedule; null clears it.
     */
    customName?: string | null | undefined;
};
/** @internal */
export type PayScheduleUpdateRequest$Outbound = {
    version: string;
    auto_payroll?: boolean | undefined;
    frequency?: string | undefined;
    anchor_pay_date?: string | undefined;
    anchor_end_of_pay_period?: string | undefined;
    day_1?: number | null | undefined;
    day_2?: number | null | undefined;
    custom_name?: string | null | undefined;
};
/** @internal */
export declare const PayScheduleUpdateRequest$outboundSchema: z.ZodType<PayScheduleUpdateRequest$Outbound, z.ZodTypeDef, PayScheduleUpdateRequest>;
export declare function payScheduleUpdateRequestToJSON(payScheduleUpdateRequest: PayScheduleUpdateRequest): string;
//# sourceMappingURL=payscheduleupdaterequest.d.ts.map