import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * An off cycle payroll reason. Select one from the following list.
 */
export declare const OffCycleReason: {
    readonly Bonus: "Bonus";
    readonly Correction: "Correction";
    readonly DismissedEmployee: "Dismissed employee";
    readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
};
/**
 * An off cycle payroll reason. Select one from the following list.
 */
export type OffCycleReason = ClosedEnum<typeof OffCycleReason>;
/**
 * The payment schedule tax rate the payroll is based on.
 */
export declare const WithholdingPayPeriod: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
    readonly Quarterly: "Quarterly";
    readonly Semiannually: "Semiannually";
    readonly Annually: "Annually";
};
/**
 * The payment schedule tax rate the payroll is based on.
 */
export type WithholdingPayPeriod = ClosedEnum<typeof WithholdingPayPeriod>;
export type PostV1CompaniesCompanyIdPayrollsRequestBody = {
    /**
     * Whether it is an off cycle payroll.
     */
    offCycle: boolean;
    /**
     * An off cycle payroll reason. Select one from the following list.
     */
    offCycleReason: OffCycleReason;
    /**
     * Pay period start date.
     */
    startDate: string;
    /**
     * Pay period end date.
     */
    endDate: string;
    /**
     * A pay schedule is required for transition from old pay schedule payroll to identify the matching transition pay period.
     */
    payScheduleUuid?: string | undefined;
    /**
     * A list of employee uuids to include on the payroll.
     */
    employeeUuids?: Array<string> | undefined;
    /**
     * Payment date.
     */
    checkDate?: string | undefined;
    /**
     * The payment schedule tax rate the payroll is based on.
     */
    withholdingPayPeriod?: WithholdingPayPeriod | undefined;
    /**
     * Block regular deductions and contributions for this payroll.
     */
    skipRegularDeductions?: boolean | undefined;
    /**
     * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages.
     */
    fixedWithholdingRate?: boolean | undefined;
};
export type PostV1CompaniesCompanyIdPayrollsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdPayrollsRequestBody;
};
export type PostV1CompaniesCompanyIdPayrollsResponse = {
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
     * An off-cycle payroll
     */
    payrollPrepared?: components.PayrollPrepared | undefined;
};
/** @internal */
export declare const OffCycleReason$inboundSchema: z.ZodNativeEnum<typeof OffCycleReason>;
/** @internal */
export declare const OffCycleReason$outboundSchema: z.ZodNativeEnum<typeof OffCycleReason>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OffCycleReason$ {
    /** @deprecated use `OffCycleReason$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Bonus: "Bonus";
        readonly Correction: "Correction";
        readonly DismissedEmployee: "Dismissed employee";
        readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
    }>;
    /** @deprecated use `OffCycleReason$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Bonus: "Bonus";
        readonly Correction: "Correction";
        readonly DismissedEmployee: "Dismissed employee";
        readonly TransitionFromOldPaySchedule: "Transition from old pay schedule";
    }>;
}
/** @internal */
export declare const WithholdingPayPeriod$inboundSchema: z.ZodNativeEnum<typeof WithholdingPayPeriod>;
/** @internal */
export declare const WithholdingPayPeriod$outboundSchema: z.ZodNativeEnum<typeof WithholdingPayPeriod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingPayPeriod$ {
    /** @deprecated use `WithholdingPayPeriod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
        readonly Quarterly: "Quarterly";
        readonly Semiannually: "Semiannually";
        readonly Annually: "Annually";
    }>;
    /** @deprecated use `WithholdingPayPeriod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
        readonly Quarterly: "Quarterly";
        readonly Semiannually: "Semiannually";
        readonly Annually: "Annually";
    }>;
}
/** @internal */
export declare const PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound = {
    off_cycle: boolean;
    off_cycle_reason: string;
    start_date: string;
    end_date: string;
    pay_schedule_uuid?: string | undefined;
    employee_uuids?: Array<string> | undefined;
    check_date?: string | undefined;
    withholding_pay_period?: string | undefined;
    skip_regular_deductions?: boolean | undefined;
    fixed_withholding_rate?: boolean | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPayrollsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPayrollsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPayrollsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdPayrollsRequestBodyToJSON(postV1CompaniesCompanyIdPayrollsRequestBody: PostV1CompaniesCompanyIdPayrollsRequestBody): string;
export declare function postV1CompaniesCompanyIdPayrollsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPayrollsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPayrollsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPayrollsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdPayrollsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPayrollsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPayrollsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPayrollsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPayrollsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPayrollsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdPayrollsRequestToJSON(postV1CompaniesCompanyIdPayrollsRequest: PostV1CompaniesCompanyIdPayrollsRequest): string;
export declare function postV1CompaniesCompanyIdPayrollsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPayrollsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPayrollsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPayrollsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Prepared"?: components.PayrollPrepared$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPayrollsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPayrollsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPayrollsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPayrollsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdPayrollsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPayrollsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdPayrollsResponseToJSON(postV1CompaniesCompanyIdPayrollsResponse: PostV1CompaniesCompanyIdPayrollsResponse): string;
export declare function postV1CompaniesCompanyIdPayrollsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPayrollsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidpayrolls.d.ts.map