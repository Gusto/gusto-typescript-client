import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesResponse = {
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
    company?: components.Company | undefined;
};
/** @internal */
export declare const GetV1CompaniesRequest$inboundSchema: z.ZodType<GetV1CompaniesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesRequest$outboundSchema: z.ZodType<GetV1CompaniesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesRequest$ {
    /** @deprecated use `GetV1CompaniesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesRequest$Outbound, z.ZodTypeDef, GetV1CompaniesRequest>;
    /** @deprecated use `GetV1CompaniesRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesRequest$Outbound;
}
export declare function getV1CompaniesRequestToJSON(getV1CompaniesRequest: GetV1CompaniesRequest): string;
export declare function getV1CompaniesRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesResponse$inboundSchema: z.ZodType<GetV1CompaniesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Company?: components.Company$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesResponse$outboundSchema: z.ZodType<GetV1CompaniesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesResponse$ {
    /** @deprecated use `GetV1CompaniesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesResponse$Outbound, z.ZodTypeDef, GetV1CompaniesResponse>;
    /** @deprecated use `GetV1CompaniesResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesResponse$Outbound;
}
export declare function getV1CompaniesResponseToJSON(getV1CompaniesResponse: GetV1CompaniesResponse): string;
export declare function getV1CompaniesResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesResponse, SDKValidationError>;
//# sourceMappingURL=getv1companies.d.ts.map