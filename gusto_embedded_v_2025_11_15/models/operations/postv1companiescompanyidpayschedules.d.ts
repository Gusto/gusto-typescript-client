import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export declare const Frequency: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
};
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export type Frequency = ClosedEnum<typeof Frequency>;
export type PostV1CompaniesCompanyIdPaySchedulesRequestBody = {
    /**
     * The frequency that employees on this pay schedule are paid with Gusto.
     */
    frequency: Frequency;
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
    day1?: number | null | undefined;
    /**
     * An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the "Twice per month" frequency. For semi-monthly pay schedules, set this field to 31. For months shorter than 31 days, we will set the second pay date to the last day of the month. It will be null for pay schedules with other frequencies.
     */
    day2?: number | null | undefined;
    /**
     * A custom pay schedule name, defaults to the pay frequency description.
     */
    customName?: string | undefined;
};
export type PostV1CompaniesCompanyIdPaySchedulesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdPaySchedulesRequestBody;
};
export type PostV1CompaniesCompanyIdPaySchedulesResponse = {
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
     * Example response
     */
    payScheduleCreateUpdate?: components.PayScheduleCreateUpdate | undefined;
};
/** @internal */
export declare const Frequency$inboundSchema: z.ZodNativeEnum<typeof Frequency>;
/** @internal */
export declare const Frequency$outboundSchema: z.ZodNativeEnum<typeof Frequency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Frequency$ {
    /** @deprecated use `Frequency$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
    /** @deprecated use `Frequency$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
}
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesRequestBody$Outbound = {
    frequency: string;
    anchor_pay_date: string;
    anchor_end_of_pay_period: string;
    day_1?: number | null | undefined;
    day_2?: number | null | undefined;
    custom_name?: string | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesRequestBodyToJSON(postV1CompaniesCompanyIdPaySchedulesRequestBody: PostV1CompaniesCompanyIdPaySchedulesRequestBody): string;
export declare function postV1CompaniesCompanyIdPaySchedulesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdPaySchedulesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesRequestToJSON(postV1CompaniesCompanyIdPaySchedulesRequest: PostV1CompaniesCompanyIdPaySchedulesRequest): string;
export declare function postV1CompaniesCompanyIdPaySchedulesRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdPaySchedulesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Schedule-Create-Update"?: components.PayScheduleCreateUpdate$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdPaySchedulesResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdPaySchedulesResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdPaySchedulesResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdPaySchedulesResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdPaySchedulesResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdPaySchedulesResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdPaySchedulesResponseToJSON(postV1CompaniesCompanyIdPaySchedulesResponse: PostV1CompaniesCompanyIdPaySchedulesResponse): string;
export declare function postV1CompaniesCompanyIdPaySchedulesResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPaySchedulesResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidpayschedules.d.ts.map