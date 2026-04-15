import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Update a job.
 */
export type PutV1JobsJobIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    /**
     * The job title
     */
    title?: string | undefined;
    /**
     * The date when the employee was hired or rehired for the job.
     */
    hireDate?: string | undefined;
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
export type PutV1JobsJobIdRequest = {
    /**
     * The UUID of the job
     */
    jobId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Update a job.
     */
    requestBody: PutV1JobsJobIdRequestBody;
};
export type PutV1JobsJobIdResponse = {
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
export declare const PutV1JobsJobIdRequestBody$inboundSchema: z.ZodType<PutV1JobsJobIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1JobsJobIdRequestBody$Outbound = {
    version: string;
    title?: string | undefined;
    hire_date?: string | undefined;
    two_percent_shareholder?: boolean | undefined;
    state_wc_covered?: boolean | null | undefined;
    state_wc_class_code?: string | null | undefined;
};
/** @internal */
export declare const PutV1JobsJobIdRequestBody$outboundSchema: z.ZodType<PutV1JobsJobIdRequestBody$Outbound, z.ZodTypeDef, PutV1JobsJobIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1JobsJobIdRequestBody$ {
    /** @deprecated use `PutV1JobsJobIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1JobsJobIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1JobsJobIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1JobsJobIdRequestBody$Outbound, z.ZodTypeDef, PutV1JobsJobIdRequestBody>;
    /** @deprecated use `PutV1JobsJobIdRequestBody$Outbound` instead. */
    type Outbound = PutV1JobsJobIdRequestBody$Outbound;
}
export declare function putV1JobsJobIdRequestBodyToJSON(putV1JobsJobIdRequestBody: PutV1JobsJobIdRequestBody): string;
export declare function putV1JobsJobIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1JobsJobIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1JobsJobIdRequest$inboundSchema: z.ZodType<PutV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1JobsJobIdRequest$Outbound = {
    job_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1JobsJobIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1JobsJobIdRequest$outboundSchema: z.ZodType<PutV1JobsJobIdRequest$Outbound, z.ZodTypeDef, PutV1JobsJobIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1JobsJobIdRequest$ {
    /** @deprecated use `PutV1JobsJobIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1JobsJobIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1JobsJobIdRequest$Outbound, z.ZodTypeDef, PutV1JobsJobIdRequest>;
    /** @deprecated use `PutV1JobsJobIdRequest$Outbound` instead. */
    type Outbound = PutV1JobsJobIdRequest$Outbound;
}
export declare function putV1JobsJobIdRequestToJSON(putV1JobsJobIdRequest: PutV1JobsJobIdRequest): string;
export declare function putV1JobsJobIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1JobsJobIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1JobsJobIdResponse$inboundSchema: z.ZodType<PutV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1JobsJobIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Job?: components.Job$Outbound | undefined;
};
/** @internal */
export declare const PutV1JobsJobIdResponse$outboundSchema: z.ZodType<PutV1JobsJobIdResponse$Outbound, z.ZodTypeDef, PutV1JobsJobIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1JobsJobIdResponse$ {
    /** @deprecated use `PutV1JobsJobIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1JobsJobIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1JobsJobIdResponse$Outbound, z.ZodTypeDef, PutV1JobsJobIdResponse>;
    /** @deprecated use `PutV1JobsJobIdResponse$Outbound` instead. */
    type Outbound = PutV1JobsJobIdResponse$Outbound;
}
export declare function putV1JobsJobIdResponseToJSON(putV1JobsJobIdResponse: PutV1JobsJobIdResponse): string;
export declare function putV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1jobsjobid.d.ts.map