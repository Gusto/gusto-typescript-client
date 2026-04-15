import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFormRequest = {
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyFormResponse = {
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
    form?: components.Form | undefined;
};
/** @internal */
export declare const GetV1CompanyFormRequest$inboundSchema: z.ZodType<GetV1CompanyFormRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFormRequest$Outbound = {
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFormRequest$outboundSchema: z.ZodType<GetV1CompanyFormRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFormRequest$ {
    /** @deprecated use `GetV1CompanyFormRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFormRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFormRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFormRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormRequest>;
    /** @deprecated use `GetV1CompanyFormRequest$Outbound` instead. */
    type Outbound = GetV1CompanyFormRequest$Outbound;
}
export declare function getV1CompanyFormRequestToJSON(getV1CompanyFormRequest: GetV1CompanyFormRequest): string;
export declare function getV1CompanyFormRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyFormResponse$inboundSchema: z.ZodType<GetV1CompanyFormResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFormResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form?: components.Form$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyFormResponse$outboundSchema: z.ZodType<GetV1CompanyFormResponse$Outbound, z.ZodTypeDef, GetV1CompanyFormResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFormResponse$ {
    /** @deprecated use `GetV1CompanyFormResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFormResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFormResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFormResponse$Outbound, z.ZodTypeDef, GetV1CompanyFormResponse>;
    /** @deprecated use `GetV1CompanyFormResponse$Outbound` instead. */
    type Outbound = GetV1CompanyFormResponse$Outbound;
}
export declare function getV1CompanyFormResponseToJSON(getV1CompanyFormResponse: GetV1CompanyFormResponse): string;
export declare function getV1CompanyFormResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyform.d.ts.map