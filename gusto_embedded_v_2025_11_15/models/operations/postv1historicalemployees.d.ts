import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1HistoricalEmployeesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Create a historical employee.
     */
    historicalEmployeeBody: components.HistoricalEmployeeBody;
};
export type PostV1HistoricalEmployeesResponse = {
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
    employee?: components.Employee | undefined;
};
/** @internal */
export declare const PostV1HistoricalEmployeesRequest$inboundSchema: z.ZodType<PostV1HistoricalEmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1HistoricalEmployeesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    "Historical-Employee-Body": components.HistoricalEmployeeBody$Outbound;
};
/** @internal */
export declare const PostV1HistoricalEmployeesRequest$outboundSchema: z.ZodType<PostV1HistoricalEmployeesRequest$Outbound, z.ZodTypeDef, PostV1HistoricalEmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1HistoricalEmployeesRequest$ {
    /** @deprecated use `PostV1HistoricalEmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1HistoricalEmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1HistoricalEmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1HistoricalEmployeesRequest$Outbound, z.ZodTypeDef, PostV1HistoricalEmployeesRequest>;
    /** @deprecated use `PostV1HistoricalEmployeesRequest$Outbound` instead. */
    type Outbound = PostV1HistoricalEmployeesRequest$Outbound;
}
export declare function postV1HistoricalEmployeesRequestToJSON(postV1HistoricalEmployeesRequest: PostV1HistoricalEmployeesRequest): string;
export declare function postV1HistoricalEmployeesRequestFromJSON(jsonString: string): SafeParseResult<PostV1HistoricalEmployeesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1HistoricalEmployeesResponse$inboundSchema: z.ZodType<PostV1HistoricalEmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1HistoricalEmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Employee?: components.Employee$Outbound | undefined;
};
/** @internal */
export declare const PostV1HistoricalEmployeesResponse$outboundSchema: z.ZodType<PostV1HistoricalEmployeesResponse$Outbound, z.ZodTypeDef, PostV1HistoricalEmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1HistoricalEmployeesResponse$ {
    /** @deprecated use `PostV1HistoricalEmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1HistoricalEmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1HistoricalEmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1HistoricalEmployeesResponse$Outbound, z.ZodTypeDef, PostV1HistoricalEmployeesResponse>;
    /** @deprecated use `PostV1HistoricalEmployeesResponse$Outbound` instead. */
    type Outbound = PostV1HistoricalEmployeesResponse$Outbound;
}
export declare function postV1HistoricalEmployeesResponseToJSON(postV1HistoricalEmployeesResponse: PostV1HistoricalEmployeesResponse): string;
export declare function postV1HistoricalEmployeesResponseFromJSON(jsonString: string): SafeParseResult<PostV1HistoricalEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=postv1historicalemployees.d.ts.map