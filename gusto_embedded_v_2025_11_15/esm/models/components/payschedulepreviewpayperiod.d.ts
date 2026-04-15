import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A single pay period in a pay schedule preview, with check date, period boundaries, and payroll deadline.
 */
export type PaySchedulePreviewPayPeriod = {
    /**
     * The date employees will be paid (check date).
     */
    checkDate: RFCDate;
    /**
     * The first day of the pay period.
     */
    startDate: RFCDate;
    /**
     * The deadline by which payroll must be run for this period to be paid on check_date.
     */
    runPayrollBy: RFCDate;
    /**
     * The last day of the pay period.
     */
    endDate: RFCDate;
};
/** @internal */
export declare const PaySchedulePreviewPayPeriod$inboundSchema: z.ZodType<PaySchedulePreviewPayPeriod, z.ZodTypeDef, unknown>;
export declare function paySchedulePreviewPayPeriodFromJSON(jsonString: string): SafeParseResult<PaySchedulePreviewPayPeriod, SDKValidationError>;
//# sourceMappingURL=payschedulepreviewpayperiod.d.ts.map