import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetReportsReportUuidRequest = {
    /**
     * The UUID of the report request
     */
    reportUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetReportsReportUuidResponse = {
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
    report?: components.Report | undefined;
};
/** @internal */
export declare const GetReportsReportUuidRequest$inboundSchema: z.ZodType<GetReportsReportUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetReportsReportUuidRequest$Outbound = {
    report_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetReportsReportUuidRequest$outboundSchema: z.ZodType<GetReportsReportUuidRequest$Outbound, z.ZodTypeDef, GetReportsReportUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetReportsReportUuidRequest$ {
    /** @deprecated use `GetReportsReportUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetReportsReportUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetReportsReportUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetReportsReportUuidRequest$Outbound, z.ZodTypeDef, GetReportsReportUuidRequest>;
    /** @deprecated use `GetReportsReportUuidRequest$Outbound` instead. */
    type Outbound = GetReportsReportUuidRequest$Outbound;
}
export declare function getReportsReportUuidRequestToJSON(getReportsReportUuidRequest: GetReportsReportUuidRequest): string;
export declare function getReportsReportUuidRequestFromJSON(jsonString: string): SafeParseResult<GetReportsReportUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetReportsReportUuidResponse$inboundSchema: z.ZodType<GetReportsReportUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetReportsReportUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Report?: components.Report$Outbound | undefined;
};
/** @internal */
export declare const GetReportsReportUuidResponse$outboundSchema: z.ZodType<GetReportsReportUuidResponse$Outbound, z.ZodTypeDef, GetReportsReportUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetReportsReportUuidResponse$ {
    /** @deprecated use `GetReportsReportUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetReportsReportUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetReportsReportUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetReportsReportUuidResponse$Outbound, z.ZodTypeDef, GetReportsReportUuidResponse>;
    /** @deprecated use `GetReportsReportUuidResponse$Outbound` instead. */
    type Outbound = GetReportsReportUuidResponse$Outbound;
}
export declare function getReportsReportUuidResponseToJSON(getReportsReportUuidResponse: GetReportsReportUuidResponse): string;
export declare function getReportsReportUuidResponseFromJSON(jsonString: string): SafeParseResult<GetReportsReportUuidResponse, SDKValidationError>;
//# sourceMappingURL=getreportsreportuuid.d.ts.map