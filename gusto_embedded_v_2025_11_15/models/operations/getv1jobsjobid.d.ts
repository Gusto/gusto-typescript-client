import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1JobsJobIdResponse = {
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
export declare const GetV1JobsJobIdQueryParamInclude$inboundSchema: z.ZodNativeEnum<typeof GetV1JobsJobIdQueryParamInclude>;
/** @internal */
export declare const GetV1JobsJobIdQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1JobsJobIdQueryParamInclude>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1JobsJobIdQueryParamInclude$ {
    /** @deprecated use `GetV1JobsJobIdQueryParamInclude$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
    }>;
    /** @deprecated use `GetV1JobsJobIdQueryParamInclude$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
    }>;
}
/** @internal */
export declare const GetV1JobsJobIdRequest$inboundSchema: z.ZodType<GetV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1JobsJobIdRequest$Outbound = {
    job_id: string;
    include?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1JobsJobIdRequest$outboundSchema: z.ZodType<GetV1JobsJobIdRequest$Outbound, z.ZodTypeDef, GetV1JobsJobIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1JobsJobIdRequest$ {
    /** @deprecated use `GetV1JobsJobIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1JobsJobIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1JobsJobIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1JobsJobIdRequest$Outbound, z.ZodTypeDef, GetV1JobsJobIdRequest>;
    /** @deprecated use `GetV1JobsJobIdRequest$Outbound` instead. */
    type Outbound = GetV1JobsJobIdRequest$Outbound;
}
export declare function getV1JobsJobIdRequestToJSON(getV1JobsJobIdRequest: GetV1JobsJobIdRequest): string;
export declare function getV1JobsJobIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1JobsJobIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1JobsJobIdResponse$inboundSchema: z.ZodType<GetV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1JobsJobIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Job?: components.Job$Outbound | undefined;
};
/** @internal */
export declare const GetV1JobsJobIdResponse$outboundSchema: z.ZodType<GetV1JobsJobIdResponse$Outbound, z.ZodTypeDef, GetV1JobsJobIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1JobsJobIdResponse$ {
    /** @deprecated use `GetV1JobsJobIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1JobsJobIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1JobsJobIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1JobsJobIdResponse$Outbound, z.ZodTypeDef, GetV1JobsJobIdResponse>;
    /** @deprecated use `GetV1JobsJobIdResponse$Outbound` instead. */
    type Outbound = GetV1JobsJobIdResponse$Outbound;
}
export declare function getV1JobsJobIdResponseToJSON(getV1JobsJobIdResponse: GetV1JobsJobIdResponse): string;
export declare function getV1JobsJobIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1JobsJobIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1jobsjobid.d.ts.map