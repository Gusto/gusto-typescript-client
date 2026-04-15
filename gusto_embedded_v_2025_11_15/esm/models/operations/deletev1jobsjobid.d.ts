import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1JobsJobIdRequest = {
    /**
     * The UUID of the job
     */
    jobId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1JobsJobIdResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1JobsJobIdRequest$Outbound = {
    job_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1JobsJobIdRequest$outboundSchema: z.ZodType<DeleteV1JobsJobIdRequest$Outbound, z.ZodTypeDef, DeleteV1JobsJobIdRequest>;
export declare function deleteV1JobsJobIdRequestToJSON(deleteV1JobsJobIdRequest: DeleteV1JobsJobIdRequest): string;
/** @internal */
export declare const DeleteV1JobsJobIdResponse$inboundSchema: z.ZodType<DeleteV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1jobsjobid.d.ts.map