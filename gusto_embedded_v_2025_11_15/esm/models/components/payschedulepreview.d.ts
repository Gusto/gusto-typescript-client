import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PaySchedulePreviewPayPeriod } from "./payschedulepreviewpayperiod.js";
/**
 * Preview of pay schedule dates for the next 18 months. Use this to show partners expected pay dates, pay period boundaries, and payroll deadlines before they create or change a pay schedule. See [Preview pay schedule dates](https://docs.gusto.com/embedded-payroll/reference/get-v1-companies-company_id-pay_schedules-preview) for usage.
 *
 * @remarks
 *
 * - **pay_periods**: One entry per pay period in the range; each includes check_date, start_date, end_date, and run_payroll_by.
 * - **holidays**: Observed bank holidays (ISO date strings) that may affect payroll timing.
 */
export type PaySchedulePreview = {
    /**
     * Pay periods in the preview range (default 18 months from today, or up to end_date if provided).
     */
    payPeriods?: Array<PaySchedulePreviewPayPeriod> | undefined;
    /**
     * Observed bank holidays (ISO date strings) in the preview range; may affect payroll processing.
     */
    holidays?: Array<RFCDate> | undefined;
};
/** @internal */
export declare const PaySchedulePreview$inboundSchema: z.ZodType<PaySchedulePreview, z.ZodTypeDef, unknown>;
export declare function paySchedulePreviewFromJSON(jsonString: string): SafeParseResult<PaySchedulePreview, SDKValidationError>;
//# sourceMappingURL=payschedulepreview.d.ts.map