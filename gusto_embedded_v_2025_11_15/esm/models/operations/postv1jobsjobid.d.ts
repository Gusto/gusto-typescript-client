import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Job } from "../components/job.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    /**
     * Create a job.
     */
    requestBody: PostV1JobsJobIdRequestBody;
};
export type PostV1JobsJobIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    job?: Job | undefined;
};
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
export declare function postV1JobsJobIdRequestBodyToJSON(postV1JobsJobIdRequestBody: PostV1JobsJobIdRequestBody): string;
/** @internal */
export type PostV1JobsJobIdRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1JobsJobIdRequestBody$Outbound;
};
/** @internal */
export declare const PostV1JobsJobIdRequest$outboundSchema: z.ZodType<PostV1JobsJobIdRequest$Outbound, z.ZodTypeDef, PostV1JobsJobIdRequest>;
export declare function postV1JobsJobIdRequestToJSON(postV1JobsJobIdRequest: PostV1JobsJobIdRequest): string;
/** @internal */
export declare const PostV1JobsJobIdResponse$inboundSchema: z.ZodType<PostV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
export declare function postV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<PostV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=postv1jobsjobid.d.ts.map