import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
 */
export declare const PaymentUnit: {
    readonly Hour: "Hour";
    readonly Week: "Week";
    readonly Month: "Month";
    readonly Year: "Year";
    readonly Paycheck: "Paycheck";
};
/**
 * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
 */
export type PaymentUnit = ClosedEnum<typeof PaymentUnit>;
/**
 * The minimum wage record you want to apply to the compensation
 */
export type MinimumWages = {
    /**
     * The UUID of the minimum wage record. Required if adjust_for_minimum_wage set to true
     */
    uuid?: string | undefined;
};
export type PostV1CompensationsCompensationIdRequestBody = {
    /**
     * The dollar amount paid per payment unit.
     */
    rate?: string | undefined;
    /**
     * The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.
     */
    paymentUnit: PaymentUnit;
    /**
     * The date when the compensation takes effect.
     */
    effectiveDate?: string | undefined;
    /**
     * The FLSA status for this compensation. Salaried ('Exempt') employees are paid a fixed salary every pay period. Salaried with overtime ('Salaried Nonexempt') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly ('Nonexempt') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees ('Commission Only Exempt') earn wages based only on commission. Commissioned with overtime ('Commission Only Nonexempt') earn wages based on commission, and receive overtime pay when applicable. Owners ('Owner') are employees that own at least twenty percent of the company.
     */
    flsaStatus: components.FlsaStatusType;
    /**
     * Determines whether the compensation should be adjusted for minimum wage. Only applies to Nonexempt employees.
     */
    adjustForMinimumWage?: boolean | undefined;
    minimumWages?: Array<MinimumWages> | undefined;
};
export type PostV1CompensationsCompensationIdRequest = {
    /**
     * The UUID of the job
     */
    jobId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompensationsCompensationIdRequestBody;
};
export type PostV1CompensationsCompensationIdResponse = {
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
    compensation?: components.Compensation | undefined;
};
/** @internal */
export declare const PaymentUnit$inboundSchema: z.ZodNativeEnum<typeof PaymentUnit>;
/** @internal */
export declare const PaymentUnit$outboundSchema: z.ZodNativeEnum<typeof PaymentUnit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentUnit$ {
    /** @deprecated use `PaymentUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Hour: "Hour";
        readonly Week: "Week";
        readonly Month: "Month";
        readonly Year: "Year";
        readonly Paycheck: "Paycheck";
    }>;
    /** @deprecated use `PaymentUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Hour: "Hour";
        readonly Week: "Week";
        readonly Month: "Month";
        readonly Year: "Year";
        readonly Paycheck: "Paycheck";
    }>;
}
/** @internal */
export declare const MinimumWages$inboundSchema: z.ZodType<MinimumWages, z.ZodTypeDef, unknown>;
/** @internal */
export type MinimumWages$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const MinimumWages$outboundSchema: z.ZodType<MinimumWages$Outbound, z.ZodTypeDef, MinimumWages>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MinimumWages$ {
    /** @deprecated use `MinimumWages$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MinimumWages, z.ZodTypeDef, unknown>;
    /** @deprecated use `MinimumWages$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MinimumWages$Outbound, z.ZodTypeDef, MinimumWages>;
    /** @deprecated use `MinimumWages$Outbound` instead. */
    type Outbound = MinimumWages$Outbound;
}
export declare function minimumWagesToJSON(minimumWages: MinimumWages): string;
export declare function minimumWagesFromJSON(jsonString: string): SafeParseResult<MinimumWages, SDKValidationError>;
/** @internal */
export declare const PostV1CompensationsCompensationIdRequestBody$inboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompensationsCompensationIdRequestBody$Outbound = {
    rate?: string | undefined;
    payment_unit: string;
    effective_date?: string | undefined;
    flsa_status: string;
    adjust_for_minimum_wage?: boolean | undefined;
    minimum_wages?: Array<MinimumWages$Outbound> | undefined;
};
/** @internal */
export declare const PostV1CompensationsCompensationIdRequestBody$outboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequestBody$Outbound, z.ZodTypeDef, PostV1CompensationsCompensationIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompensationsCompensationIdRequestBody$ {
    /** @deprecated use `PostV1CompensationsCompensationIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompensationsCompensationIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequestBody$Outbound, z.ZodTypeDef, PostV1CompensationsCompensationIdRequestBody>;
    /** @deprecated use `PostV1CompensationsCompensationIdRequestBody$Outbound` instead. */
    type Outbound = PostV1CompensationsCompensationIdRequestBody$Outbound;
}
export declare function postV1CompensationsCompensationIdRequestBodyToJSON(postV1CompensationsCompensationIdRequestBody: PostV1CompensationsCompensationIdRequestBody): string;
export declare function postV1CompensationsCompensationIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompensationsCompensationIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompensationsCompensationIdRequest$inboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompensationsCompensationIdRequest$Outbound = {
    job_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompensationsCompensationIdRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompensationsCompensationIdRequest$outboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequest$Outbound, z.ZodTypeDef, PostV1CompensationsCompensationIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompensationsCompensationIdRequest$ {
    /** @deprecated use `PostV1CompensationsCompensationIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompensationsCompensationIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompensationsCompensationIdRequest$Outbound, z.ZodTypeDef, PostV1CompensationsCompensationIdRequest>;
    /** @deprecated use `PostV1CompensationsCompensationIdRequest$Outbound` instead. */
    type Outbound = PostV1CompensationsCompensationIdRequest$Outbound;
}
export declare function postV1CompensationsCompensationIdRequestToJSON(postV1CompensationsCompensationIdRequest: PostV1CompensationsCompensationIdRequest): string;
export declare function postV1CompensationsCompensationIdRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompensationsCompensationIdRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompensationsCompensationIdResponse$inboundSchema: z.ZodType<PostV1CompensationsCompensationIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompensationsCompensationIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Compensation?: components.Compensation$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompensationsCompensationIdResponse$outboundSchema: z.ZodType<PostV1CompensationsCompensationIdResponse$Outbound, z.ZodTypeDef, PostV1CompensationsCompensationIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompensationsCompensationIdResponse$ {
    /** @deprecated use `PostV1CompensationsCompensationIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompensationsCompensationIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompensationsCompensationIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompensationsCompensationIdResponse$Outbound, z.ZodTypeDef, PostV1CompensationsCompensationIdResponse>;
    /** @deprecated use `PostV1CompensationsCompensationIdResponse$Outbound` instead. */
    type Outbound = PostV1CompensationsCompensationIdResponse$Outbound;
}
export declare function postV1CompensationsCompensationIdResponseToJSON(postV1CompensationsCompensationIdResponse: PostV1CompensationsCompensationIdResponse): string;
export declare function postV1CompensationsCompensationIdResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompensationsCompensationIdResponse, SDKValidationError>;
//# sourceMappingURL=postv1compensationscompensationid.d.ts.map