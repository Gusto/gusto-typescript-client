import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Create a job.
 */
export type PostV1JobsJobIdRequestBody = {
    /**
     * The job title
     */
    title: string;
    /**
     * The date when the employee was hired or rehired for the job.
     */
    hireDate: string;
    /**
     * Whether the employee owns at least 2% of the company.
     */
    twoPercentShareholder?: boolean | undefined;
    /**
     * Whether this job is eligible for workers' compensation coverage in the state of Washington (WA).
     */
    stateWcCovered?: boolean | null | undefined;
    /**
     * The risk class code for workers' compensation in Washington state. Please visit [Washington state's Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.
     */
    stateWcClassCode?: string | null | undefined;
};
export type PostV1JobsJobIdRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Create a job.
     */
    requestBody: PostV1JobsJobIdRequestBody;
};
export type PostV1JobsJobIdResponse = {
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
    job?: components.Job | undefined;
};
/** @internal */
export declare const PostV1JobsJobIdRequestBody$inboundSchema: z.ZodType<PostV1JobsJobIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1JobsJobIdRequestBody$Outbound = {
    title: string;
    hire_date: string;
    two_percent_shareholder?: boolean | undefined;
    state_wc_covered?: boolean | null | undefined;
    state_wc_class_code?: string | null | undefined;
};
/** @internal */
export declare const PostV1JobsJobIdRequestBody$outboundSchema: z.ZodType<PostV1JobsJobIdRequestBody$Outbound, z.ZodTypeDef, PostV1JobsJobIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1JobsJobIdRequestBody$ {
    /** @deprecated use `PostV1JobsJobIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1JobsJobIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1JobsJobIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1JobsJobIdRequestBody$Outbound, z.ZodTypeDef, PostV1JobsJobIdRequestBody>;
    /** @deprecated use `PostV1JobsJobIdRequestBody$Outbound` instead. */
    type Outbound = PostV1JobsJobIdRequestBody$Outbound;
}
export declare function postV1JobsJobIdRequestBodyToJSON(postV1JobsJobIdRequestBody: PostV1JobsJobIdRequestBody): string;
export declare function postV1JobsJobIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1JobsJobIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1JobsJobIdRequest$inboundSchema: z.ZodType<PostV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1JobsJobIdRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1JobsJobIdRequestBody$Outbound;
};
/** @internal */
export declare const PostV1JobsJobIdRequest$outboundSchema: z.ZodType<PostV1JobsJobIdRequest$Outbound, z.ZodTypeDef, PostV1JobsJobIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1JobsJobIdRequest$ {
    /** @deprecated use `PostV1JobsJobIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1JobsJobIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1JobsJobIdRequest$Outbound, z.ZodTypeDef, PostV1JobsJobIdRequest>;
    /** @deprecated use `PostV1JobsJobIdRequest$Outbound` instead. */
    type Outbound = PostV1JobsJobIdRequest$Outbound;
}
export declare function postV1JobsJobIdRequestToJSON(postV1JobsJobIdRequest: PostV1JobsJobIdRequest): string;
export declare function postV1JobsJobIdRequestFromJSON(jsonString: string): SafeParseResult<PostV1JobsJobIdRequest, SDKValidationError>;
/** @internal */
export declare const PostV1JobsJobIdResponse$inboundSchema: z.ZodType<PostV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1JobsJobIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Job?: components.Job$Outbound | undefined;
};
/** @internal */
export declare const PostV1JobsJobIdResponse$outboundSchema: z.ZodType<PostV1JobsJobIdResponse$Outbound, z.ZodTypeDef, PostV1JobsJobIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1JobsJobIdResponse$ {
    /** @deprecated use `PostV1JobsJobIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1JobsJobIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1JobsJobIdResponse$Outbound, z.ZodTypeDef, PostV1JobsJobIdResponse>;
    /** @deprecated use `PostV1JobsJobIdResponse$Outbound` instead. */
    type Outbound = PostV1JobsJobIdResponse$Outbound;
}
export declare function postV1JobsJobIdResponseToJSON(postV1JobsJobIdResponse: PostV1JobsJobIdResponse): string;
export declare function postV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<PostV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=postv1jobsjobid.d.ts.map