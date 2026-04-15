import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdEarningTypesRequestBody = {
    /**
     * The name of the custom earning type.
     */
    name: string;
};
export type PostV1CompaniesCompanyIdEarningTypesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody;
};
export type PostV1CompaniesCompanyIdEarningTypesResponse = {
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
    earningType?: components.EarningType | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound = {
    name: string;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdEarningTypesRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdEarningTypesRequestBodyToJSON(postV1CompaniesCompanyIdEarningTypesRequestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody): string;
export declare function postV1CompaniesCompanyIdEarningTypesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdEarningTypesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdEarningTypesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdEarningTypesRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdEarningTypesRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdEarningTypesRequestToJSON(postV1CompaniesCompanyIdEarningTypesRequest: PostV1CompaniesCompanyIdEarningTypesRequest): string;
export declare function postV1CompaniesCompanyIdEarningTypesRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdEarningTypesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdEarningTypesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Earning-Type"?: components.EarningType$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdEarningTypesResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdEarningTypesResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdEarningTypesResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdEarningTypesResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdEarningTypesResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdEarningTypesResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdEarningTypesResponseToJSON(postV1CompaniesCompanyIdEarningTypesResponse: PostV1CompaniesCompanyIdEarningTypesResponse): string;
export declare function postV1CompaniesCompanyIdEarningTypesResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdEarningTypesResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidearningtypes.d.ts.map