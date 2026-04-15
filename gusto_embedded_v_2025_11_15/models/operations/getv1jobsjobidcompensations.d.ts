import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
 */
export declare const GetV1JobsJobIdCompensationsQueryParamInclude: {
    readonly AllCompensations: "all_compensations";
};
/**
 * Available options:
 *
 * @remarks
 * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
 */
export type GetV1JobsJobIdCompensationsQueryParamInclude = ClosedEnum<typeof GetV1JobsJobIdCompensationsQueryParamInclude>;
export type GetV1JobsJobIdCompensationsRequest = {
    /**
     * The UUID of the job
     */
    jobId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Available options:
     *
     * @remarks
     * - all_compensations: Include all effective dated compensations for each job instead of only the current compensation
     */
    include?: GetV1JobsJobIdCompensationsQueryParamInclude | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1JobsJobIdCompensationsResponse = {
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
    compensationList?: Array<components.Compensation> | undefined;
};
/** @internal */
export declare const GetV1JobsJobIdCompensationsQueryParamInclude$inboundSchema: z.ZodNativeEnum<typeof GetV1JobsJobIdCompensationsQueryParamInclude>;
/** @internal */
export declare const GetV1JobsJobIdCompensationsQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1JobsJobIdCompensationsQueryParamInclude>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1JobsJobIdCompensationsQueryParamInclude$ {
    /** @deprecated use `GetV1JobsJobIdCompensationsQueryParamInclude$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
    }>;
    /** @deprecated use `GetV1JobsJobIdCompensationsQueryParamInclude$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly AllCompensations: "all_compensations";
    }>;
}
/** @internal */
export declare const GetV1JobsJobIdCompensationsRequest$inboundSchema: z.ZodType<GetV1JobsJobIdCompensationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1JobsJobIdCompensationsRequest$Outbound = {
    job_id: string;
    page?: number | undefined;
    per?: number | undefined;
    include?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1JobsJobIdCompensationsRequest$outboundSchema: z.ZodType<GetV1JobsJobIdCompensationsRequest$Outbound, z.ZodTypeDef, GetV1JobsJobIdCompensationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1JobsJobIdCompensationsRequest$ {
    /** @deprecated use `GetV1JobsJobIdCompensationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1JobsJobIdCompensationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1JobsJobIdCompensationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1JobsJobIdCompensationsRequest$Outbound, z.ZodTypeDef, GetV1JobsJobIdCompensationsRequest>;
    /** @deprecated use `GetV1JobsJobIdCompensationsRequest$Outbound` instead. */
    type Outbound = GetV1JobsJobIdCompensationsRequest$Outbound;
}
export declare function getV1JobsJobIdCompensationsRequestToJSON(getV1JobsJobIdCompensationsRequest: GetV1JobsJobIdCompensationsRequest): string;
export declare function getV1JobsJobIdCompensationsRequestFromJSON(jsonString: string): SafeParseResult<GetV1JobsJobIdCompensationsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1JobsJobIdCompensationsResponse$inboundSchema: z.ZodType<GetV1JobsJobIdCompensationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1JobsJobIdCompensationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Compensation-List"?: Array<components.Compensation$Outbound> | undefined;
};
/** @internal */
export declare const GetV1JobsJobIdCompensationsResponse$outboundSchema: z.ZodType<GetV1JobsJobIdCompensationsResponse$Outbound, z.ZodTypeDef, GetV1JobsJobIdCompensationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1JobsJobIdCompensationsResponse$ {
    /** @deprecated use `GetV1JobsJobIdCompensationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1JobsJobIdCompensationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1JobsJobIdCompensationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1JobsJobIdCompensationsResponse$Outbound, z.ZodTypeDef, GetV1JobsJobIdCompensationsResponse>;
    /** @deprecated use `GetV1JobsJobIdCompensationsResponse$Outbound` instead. */
    type Outbound = GetV1JobsJobIdCompensationsResponse$Outbound;
}
export declare function getV1JobsJobIdCompensationsResponseToJSON(getV1JobsJobIdCompensationsResponse: GetV1JobsJobIdCompensationsResponse): string;
export declare function getV1JobsJobIdCompensationsResponseFromJSON(jsonString: string): SafeParseResult<GetV1JobsJobIdCompensationsResponse, SDKValidationError>;
//# sourceMappingURL=getv1jobsjobidcompensations.d.ts.map