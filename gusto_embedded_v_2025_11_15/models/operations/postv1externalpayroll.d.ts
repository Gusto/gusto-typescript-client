import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1ExternalPayrollRequestBody = {
    /**
     * External payroll's check date.
     */
    checkDate: string;
    /**
     * External payroll's pay period start date.
     */
    paymentPeriodStartDate: string;
    /**
     * External payroll's pay period end date.
     */
    paymentPeriodEndDate: string;
};
export type PostV1ExternalPayrollRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1ExternalPayrollRequestBody;
};
export type PostV1ExternalPayrollResponse = {
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
    externalPayroll?: components.ExternalPayroll | undefined;
};
/** @internal */
export declare const PostV1ExternalPayrollRequestBody$inboundSchema: z.ZodType<PostV1ExternalPayrollRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1ExternalPayrollRequestBody$Outbound = {
    check_date: string;
    payment_period_start_date: string;
    payment_period_end_date: string;
};
/** @internal */
export declare const PostV1ExternalPayrollRequestBody$outboundSchema: z.ZodType<PostV1ExternalPayrollRequestBody$Outbound, z.ZodTypeDef, PostV1ExternalPayrollRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ExternalPayrollRequestBody$ {
    /** @deprecated use `PostV1ExternalPayrollRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1ExternalPayrollRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1ExternalPayrollRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1ExternalPayrollRequestBody$Outbound, z.ZodTypeDef, PostV1ExternalPayrollRequestBody>;
    /** @deprecated use `PostV1ExternalPayrollRequestBody$Outbound` instead. */
    type Outbound = PostV1ExternalPayrollRequestBody$Outbound;
}
export declare function postV1ExternalPayrollRequestBodyToJSON(postV1ExternalPayrollRequestBody: PostV1ExternalPayrollRequestBody): string;
export declare function postV1ExternalPayrollRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1ExternalPayrollRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1ExternalPayrollRequest$inboundSchema: z.ZodType<PostV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1ExternalPayrollRequestBody$Outbound;
};
/** @internal */
export declare const PostV1ExternalPayrollRequest$outboundSchema: z.ZodType<PostV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, PostV1ExternalPayrollRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ExternalPayrollRequest$ {
    /** @deprecated use `PostV1ExternalPayrollRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1ExternalPayrollRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, PostV1ExternalPayrollRequest>;
    /** @deprecated use `PostV1ExternalPayrollRequest$Outbound` instead. */
    type Outbound = PostV1ExternalPayrollRequest$Outbound;
}
export declare function postV1ExternalPayrollRequestToJSON(postV1ExternalPayrollRequest: PostV1ExternalPayrollRequest): string;
export declare function postV1ExternalPayrollRequestFromJSON(jsonString: string): SafeParseResult<PostV1ExternalPayrollRequest, SDKValidationError>;
/** @internal */
export declare const PostV1ExternalPayrollResponse$inboundSchema: z.ZodType<PostV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1ExternalPayrollResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "External-Payroll"?: components.ExternalPayroll$Outbound | undefined;
};
/** @internal */
export declare const PostV1ExternalPayrollResponse$outboundSchema: z.ZodType<PostV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, PostV1ExternalPayrollResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1ExternalPayrollResponse$ {
    /** @deprecated use `PostV1ExternalPayrollResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1ExternalPayrollResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, PostV1ExternalPayrollResponse>;
    /** @deprecated use `PostV1ExternalPayrollResponse$Outbound` instead. */
    type Outbound = PostV1ExternalPayrollResponse$Outbound;
}
export declare function postV1ExternalPayrollResponseToJSON(postV1ExternalPayrollResponse: PostV1ExternalPayrollResponse): string;
export declare function postV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<PostV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=postv1externalpayroll.d.ts.map