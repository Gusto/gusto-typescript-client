import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export declare const QueryParamFrequency: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
};
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export type QueryParamFrequency = ClosedEnum<typeof QueryParamFrequency>;
export type GetV1CompaniesCompanyIdPaySchedulesPreviewRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The frequency that employees on this pay schedule are paid with Gusto.
     */
    frequency: QueryParamFrequency;
    /**
     * The first date that employees on this pay schedule are paid with Gusto.
     */
    anchorPayDate: string;
    /**
     * The last date of the first pay period. This can be the same date as the anchor pay date.
     */
    anchorEndOfPayPeriod: string;
    /**
     * An integer between 1 and 31 indicating the first day of the month that employees are paid. This field is only relevant for pay schedules with the “Twice per month” and “Monthly” frequencies. It will be null for pay schedules with other frequencies.
     */
    day1?: number | undefined;
    /**
     * An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the "Twice per month" frequency. For semi-monthly pay schedules, set this field to 31. For months shorter than 31 days, we will set the second pay date to the last day of the month. It will be null for pay schedules with other frequencies.
     */
    day2?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type PayPeriods = {
    /**
     * The payment date, "Check date", for the pay period
     */
    checkDate?: string | undefined;
    /**
     * The deadline to run payroll for direct deposit on the check date
     */
    runPayrollBy?: string | undefined;
    /**
     * The first day of the pay period
     */
    startDate?: string | undefined;
    /**
     * The last day of the pay period.
     */
    endDate?: string | undefined;
};
/**
 * Pay schedule preview
 */
export type GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody = {
    /**
     * A list of pay periods for the previewed pay schedule
     */
    payPeriods?: Array<PayPeriods> | undefined;
    /**
     * A list of dates for bank closures
     */
    holidays?: Array<string> | undefined;
};
export type GetV1CompaniesCompanyIdPaySchedulesPreviewResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * OK
     */
    object?: GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody | undefined;
};
/** @internal */
export declare const QueryParamFrequency$inboundSchema: z.ZodNativeEnum<typeof QueryParamFrequency>;
/** @internal */
export declare const QueryParamFrequency$outboundSchema: z.ZodNativeEnum<typeof QueryParamFrequency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace QueryParamFrequency$ {
    /** @deprecated use `QueryParamFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
    /** @deprecated use `QueryParamFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
}
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound = {
    company_id: string;
    frequency: string;
    anchor_pay_date: string;
    anchor_end_of_pay_period: string;
    day_1?: number | undefined;
    day_2?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesPreviewRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewRequestToJSON(getV1CompaniesCompanyIdPaySchedulesPreviewRequest: GetV1CompaniesCompanyIdPaySchedulesPreviewRequest): string;
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, SDKValidationError>;
/** @internal */
export declare const PayPeriods$inboundSchema: z.ZodType<PayPeriods, z.ZodTypeDef, unknown>;
/** @internal */
export type PayPeriods$Outbound = {
    check_date?: string | undefined;
    run_payroll_by?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
};
/** @internal */
export declare const PayPeriods$outboundSchema: z.ZodType<PayPeriods$Outbound, z.ZodTypeDef, PayPeriods>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayPeriods$ {
    /** @deprecated use `PayPeriods$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayPeriods, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayPeriods$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayPeriods$Outbound, z.ZodTypeDef, PayPeriods>;
    /** @deprecated use `PayPeriods$Outbound` instead. */
    type Outbound = PayPeriods$Outbound;
}
export declare function payPeriodsToJSON(payPeriods: PayPeriods): string;
export declare function payPeriodsFromJSON(jsonString: string): SafeParseResult<PayPeriods, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$Outbound = {
    pay_periods?: Array<PayPeriods$Outbound> | undefined;
    holidays?: Array<string> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewResponseBodyToJSON(getV1CompaniesCompanyIdPaySchedulesPreviewResponseBody: GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody): string;
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdPaySchedulesPreviewResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdPaySchedulesPreviewResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewResponseToJSON(getV1CompaniesCompanyIdPaySchedulesPreviewResponse: GetV1CompaniesCompanyIdPaySchedulesPreviewResponse): string;
export declare function getV1CompaniesCompanyIdPaySchedulesPreviewResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidpayschedulespreview.d.ts.map