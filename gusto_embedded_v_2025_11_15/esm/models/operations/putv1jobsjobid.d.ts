import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Job } from "../components/job.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    /**
     * Update a job.
     */
    requestBody: PutV1JobsJobIdRequestBody;
};
export type PutV1JobsJobIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    job?: Job | undefined;
};
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
export declare function putV1JobsJobIdRequestBodyToJSON(putV1JobsJobIdRequestBody: PutV1JobsJobIdRequestBody): string;
/** @internal */
export type PutV1JobsJobIdRequest$Outbound = {
    job_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1JobsJobIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1JobsJobIdRequest$outboundSchema: z.ZodType<PutV1JobsJobIdRequest$Outbound, z.ZodTypeDef, PutV1JobsJobIdRequest>;
export declare function putV1JobsJobIdRequestToJSON(putV1JobsJobIdRequest: PutV1JobsJobIdRequest): string;
/** @internal */
export declare const PutV1JobsJobIdResponse$inboundSchema: z.ZodType<PutV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
export declare function putV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1jobsjobid.d.ts.map