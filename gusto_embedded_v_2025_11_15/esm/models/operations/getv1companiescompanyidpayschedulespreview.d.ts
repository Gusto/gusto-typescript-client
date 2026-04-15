import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PaySchedulePreview } from "../components/payschedulepreview.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion>;
/**
 * The frequency that employees on this pay schedule are paid.
 */
export declare const Frequency: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
};
/**
 * The frequency that employees on this pay schedule are paid.
 */
export type Frequency = ClosedEnum<typeof Frequency>;
export type GetV1CompaniesCompanyIdPaySchedulesPreviewRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The frequency that employees on this pay schedule are paid.
     */
    frequency: Frequency;
    /**
     * The first date that employees on this pay schedule are paid.
     */
    anchorPayDate: RFCDate;
    /**
     * The last date of the first pay period. This can be the same date as the anchor pay date.
     */
    anchorEndOfPayPeriod: RFCDate;
    /**
     * First pay day of the month (1-31).
     *
     * @remarks
     * - **Twice per month, Monthly:** required.
     * - **Every week, Every other week:** omit or null.
     */
    day1?: number | undefined;
    /**
     * Second pay day of the month (1-31); only for **Twice per month**.
     *
     * @remarks
     * - Use 31 for last day of month (shorter months use the actual last day).
     * - **Other frequencies:** omit or null.
     */
    day2?: number | undefined;
    /**
     * End date for the preview range. When unspecified, defaults to 18 months from today.
     */
    endDate?: RFCDate | undefined;
};
export type GetV1CompaniesCompanyIdPaySchedulesPreviewResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    paySchedulePreview?: PaySchedulePreview | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1CompaniesCompanyIdPaySchedulesPreviewHeaderXGustoAPIVersion>;
/** @internal */
export declare const Frequency$outboundSchema: z.ZodNativeEnum<typeof Frequency>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_id: string;
    frequency: string;
    anchor_pay_date: string;
    anchor_end_of_pay_period: string;
    day_1?: number | undefined;
    day_2?: number | undefined;
    end_date?: string | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewRequest>;
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewRequestToJSON(getV1CompaniesCompanyIdPaySchedulesPreviewRequest: GetV1CompaniesCompanyIdPaySchedulesPreviewRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedulespreview.d.ts.map