import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Job } from "../components/job.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for the job instead of only the current compensation
 */
export declare const GetV1JobsJobIdQueryParamInclude: {
    readonly AllCompensations: "all_compensations";
};
/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for the job instead of only the current compensation
 */
export type GetV1JobsJobIdQueryParamInclude = ClosedEnum<typeof GetV1JobsJobIdQueryParamInclude>;
export type GetV1JobsJobIdRequest = {
    /**
     * The UUID of the job
     */
    jobId: string;
    /**
     * Available options:
     *
     * @remarks
     * - all_compensations: Include all effective dated compensations for the job instead of only the current compensation
     */
    include?: GetV1JobsJobIdQueryParamInclude | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1JobsJobIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    job?: Job | undefined;
};
/** @internal */
export declare const GetV1JobsJobIdQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1JobsJobIdQueryParamInclude>;
/** @internal */
export type GetV1JobsJobIdRequest$Outbound = {
    job_id: string;
    include?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1JobsJobIdRequest$outboundSchema: z.ZodType<GetV1JobsJobIdRequest$Outbound, z.ZodTypeDef, GetV1JobsJobIdRequest>;
export declare function getV1JobsJobIdRequestToJSON(getV1JobsJobIdRequest: GetV1JobsJobIdRequest): string;
/** @internal */
export declare const GetV1JobsJobIdResponse$inboundSchema: z.ZodType<GetV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1jobsjobid.d.ts.map