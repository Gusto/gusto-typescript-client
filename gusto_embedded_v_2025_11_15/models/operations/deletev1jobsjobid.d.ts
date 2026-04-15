import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1JobsJobIdRequest = {
    /**
     * The UUID of the job
     */
    jobId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1JobsJobIdResponse = {
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
};
/** @internal */
export declare const DeleteV1JobsJobIdRequest$inboundSchema: z.ZodType<DeleteV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1JobsJobIdRequest$Outbound = {
    job_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1JobsJobIdRequest$outboundSchema: z.ZodType<DeleteV1JobsJobIdRequest$Outbound, z.ZodTypeDef, DeleteV1JobsJobIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1JobsJobIdRequest$ {
    /** @deprecated use `DeleteV1JobsJobIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1JobsJobIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1JobsJobIdRequest$Outbound, z.ZodTypeDef, DeleteV1JobsJobIdRequest>;
    /** @deprecated use `DeleteV1JobsJobIdRequest$Outbound` instead. */
    type Outbound = DeleteV1JobsJobIdRequest$Outbound;
}
export declare function deleteV1JobsJobIdRequestToJSON(deleteV1JobsJobIdRequest: DeleteV1JobsJobIdRequest): string;
export declare function deleteV1JobsJobIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1JobsJobIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1JobsJobIdResponse$inboundSchema: z.ZodType<DeleteV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1JobsJobIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1JobsJobIdResponse$outboundSchema: z.ZodType<DeleteV1JobsJobIdResponse$Outbound, z.ZodTypeDef, DeleteV1JobsJobIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1JobsJobIdResponse$ {
    /** @deprecated use `DeleteV1JobsJobIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1JobsJobIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1JobsJobIdResponse$Outbound, z.ZodTypeDef, DeleteV1JobsJobIdResponse>;
    /** @deprecated use `DeleteV1JobsJobIdResponse$Outbound` instead. */
    type Outbound = DeleteV1JobsJobIdResponse$Outbound;
}
export declare function deleteV1JobsJobIdResponseToJSON(deleteV1JobsJobIdResponse: DeleteV1JobsJobIdResponse): string;
export declare function deleteV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1jobsjobid.d.ts.map