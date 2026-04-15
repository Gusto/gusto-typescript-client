import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency: {
    readonly EveryWeek: "Every week";
    readonly EveryOtherWeek: "Every other week";
    readonly TwicePerMonth: "Twice per month";
    readonly Monthly: "Monthly";
};
/**
 * The frequency that employees on this pay schedule are paid with Gusto.
 */
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency = ClosedEnum<typeof PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency>;
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    /**
     * The frequency that employees on this pay schedule are paid with Gusto.
     */
    frequency?: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency | undefined;
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
     * An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the "Twice per month" frequency. For semi-monthly pay schedules, set this field to 31. For months shorter than 31 days, we will set the second pay date to the last day of the month. It will be null for pay schedules with other frequencies.
     */
    day2?: number | null | undefined;
    /**
     * A custom pay schedule name.
     */
    customName?: string | undefined;
    /**
     * With Autopilot® enabled, payroll will run automatically one day before your payroll deadlines.
     */
    autoPilot?: boolean | undefined;
};
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the pay schedule
     */
    payScheduleId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody;
};
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse = {
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
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency$inboundSchema: z.ZodNativeEnum<typeof PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency$outboundSchema: z.ZodNativeEnum<typeof PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly EveryWeek: "Every week";
        readonly EveryOtherWeek: "Every other week";
        readonly TwicePerMonth: "Twice per month";
        readonly Monthly: "Monthly";
    }>;
}
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$Outbound = {
    version: string;
    frequency?: string | undefined;
    anchor_pay_date?: string | undefined;
    anchor_end_of_pay_period?: string | undefined;
    day_1?: number | null | undefined;
    day_2?: number | null | undefined;
    custom_name?: string | undefined;
    auto_pilot?: boolean | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBodyToJSON(putV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody): string;
export declare function putV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound = {
    company_id: string;
    pay_schedule_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestToJSON(putV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest): string;
export declare function putV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Pay-Schedule-Create-Update"?: components.PayScheduleCreateUpdate$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseToJSON(putV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse): string;
export declare function putV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayschedulespayscheduleid.d.ts.map